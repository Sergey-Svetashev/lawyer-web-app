import { useStore } from "@nanostores/react";
import { Button } from "../../components/btn/btn";
import { state } from "../../state";
import TEXT from "../../TEXT";
import "./index.css";

export const Form = () => {
  const context = useStore(state.home);

  return (
    <div className={`form-bg ${context.isFormOpen ? "open" : ""}`}>
      <div className="table-cell align-middle">
        <form
          className="p-8 w-80 rounded bg-white-0.7 relative shadow-black-0.5 mx-auto my-0"
          action="./form_handler.php"
          method="post"
        >
          <span
            className='closeBtn'
            onClick={state.toggleFormState}
          />
          <h3 className="text-xl text-center pb-3.5 text-black">
            {TEXT.form.formTitle}
          </h3>
          <div className="mb-2.5">
            <input
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              type="text"
              name="fio"
              placeholder={TEXT.form.name}
              required
            />
          </div>
          <div className="mb-2.5">
            <input
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              type="email"
              name="email"
              placeholder={TEXT.form.mail}
              required
            />
          </div>
          <div className="mb-2.5">
            <textarea
              className="block w-full p-3.5 border border-solid border-black resize-none font-montserrat"
              name="letter"
              id="letter"
              placeholder={TEXT.form.message}
              required
            />
          </div>
          <Button text={TEXT.form.submit} type="submit" />
        </form>
      </div>
    </div>
  );
};
