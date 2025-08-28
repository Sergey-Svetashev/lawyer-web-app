import { useStore } from "@nanostores/react";
import type { EventHandler, SyntheticEvent } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/btn/btn";
import { state } from "../../state";
import TEXT from "../../TEXT";
import "./index.css";

export const Form = () => {
  const context = useStore(state.home);
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingError, setIsSendingError] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; message: string }>();

  const onSubmit = handleSubmit(({ name, email, message }) => {
    setIsLoading(true);

    fetch("https://deno-sample-be.sergei-svetashev.deno.net/send", {
      method: "POST",
      body: JSON.stringify({
        html: `<h3>${TEXT.form.senderName}: ${name}</h3>
                <h4>${TEXT.form.senderMail}: ${email}</h4>
                <p>${TEXT.form.senderMessage}: ${message}</p>
              `,
      }),
    })
      .then(() => {
        console.log("Email sent with following data:", name, email, message);
        setIsLoading(false);
        state.toggleFormState();
      })
      .catch((error) => {
        setIsLoading(false);
        setIsSendingError(true);
        console.error("An error occurred while sending the email:", error);
      });
  });

  const bgClickHandler: EventHandler<SyntheticEvent> = (e) => {
    if (e.currentTarget === e.target) {
      state.toggleFormState();
    }
  };

  return (
    <div
      className={`form-bg ${context.isFormOpen ? "open" : ""}`}
      onClick={bgClickHandler}
    >
      <div className="table-cell align-middle">
        <form
          className="p-8 w-80 rounded bg-white relative shadow-black-0.5 mx-auto my-0"
          onSubmit={onSubmit}
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
              placeholder={TEXT.form.mail}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
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
              {...register("message")}
            />
            {errors.message && (
              <span className="text-red-700 text-sm">{TEXT.form.required}</span>
            )}
          </div>
          <Button
            text={isLoading ? TEXT.form.sending : TEXT.form.submit}
            type="submit"
            disabled={isLoading}
          />
          {isSendingError ? (
            <p className="py-2 text-red-700 text-xs">{TEXT.form.sandingMailError}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
};
