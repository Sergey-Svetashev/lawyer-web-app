import { useStore } from "@nanostores/react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Button } from "../../components/btn/btn";
import { state } from "../../state";
import TEXT from "../../TEXT";
import "./index.css";
import Sendsay from "sendsay-api";

const sendsay = new Sendsay({
  auth: {
    login: "your_login",
    password: "your_password",
  },
});

const ErrorMessage = ({
  error,
}: {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}) =>
  error && <span className="text-red-700 text-sm">{TEXT.form.required}</span>;

export const Form = () => {
  const context = useStore(state.home);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; message: string }>();

  const onSubmit = handleSubmit(({ name, email, message }) =>
    sendsay
      .request({
        action: "issue.send",
        sendwhen: "now",
        letter: {
          subject: "Your Subject Here",
          "from.name": "Sender Name",
          "from.email": "sender@example.com",
          message: {
            html: `
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Message: ${message}</p>
            `,
            // Or use 'text' for plain text messages
          },
        },
        users: ["senju-sama@mail.ru"], // the one mailbox to receive email
      })
      .then((response) => {
        console.log("Email sent:", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      })
  );

  return (
    <div className={`form-bg ${context.isFormOpen ? "open" : ""}`}>
      <div className="table-cell align-middle">
        <form
          className="p-8 w-80 rounded bg-white-0.7 relative shadow-black-0.5 mx-auto my-0"
          onSubmit={onSubmit} // TODO: replace with mail service AHMGPE1XWM5TGAX3S9B4X184
          method="post"
        >
          <span className="closeBtn" onClick={state.toggleFormState} />
          <h3 className="text-xl text-center pb-3.5 text-black">
            {TEXT.form.formTitle}
          </h3>
          <div className="mb-2.5">
            <input
              className={`block w-full p-3.5 border border-solid ${
                errors.name ? "border-red-700" : "border-black"
              } resize-none font-montserrat`}
              type="text"
              placeholder={TEXT.form.name}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-700 text-sm">{TEXT.form.required}</span>
            )}
          </div>
          <div className="mb-2.5">
            <input
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              // type="email"
              placeholder={TEXT.form.mail}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-700 text-sm">
                {TEXT.form.requiredEmail}
              </span>
            )}
          </div>
          <div className="mb-2.5">
            <textarea
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              placeholder={TEXT.form.message}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-700 text-sm">{TEXT.form.required}</span>
            )}
          </div>
          <Button text={TEXT.form.submit} type="submit" />
        </form>
      </div>
    </div>
  );
};
