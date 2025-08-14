import { useStore } from "@nanostores/react";
import { Button } from "../components/btn/btn";
import { state } from "../state";
import TEXT from "../TEXT";

export const FormSwitcher = () => {
  const context = useStore(state.home);

  return (
    <Button
      onClick={state.toggleFormState}
      disabled={context.isFormOpen}
      text={TEXT.orderButton}
    />
  );
};
