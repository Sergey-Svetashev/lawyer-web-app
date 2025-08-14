import "./index.css";

export const Button = ({
  text,
  onClick,
  type = "button",
  disabled = false,
}: {
  text: string;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
}) => (
  <button
    type={type}
    // className={`disabled:opacity-50 text-center min-w-60 w-full inline-block p-5
    //   uppercase text-white text-lg bg-aubergine border-4 border-solid border-aubergine
    //   cursor-pointer shadow-light transition-all duration-300 relative hover:translate-y-1 hover:shadow-inset-white`}
    className="button"
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);
