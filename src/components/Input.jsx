import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { textarea = false, handleChange, label, projectList, ...props },
  ref,
) {
  const inputClasses =
    "focus:outline-none border-stone-300 focus:border-stone-500 border-b-2 bg-stone-200 transition";

  return (
    <div className="mt-6 flex flex-col">
      <label htmlFor={label}>{label.toUpperCase()}</label>

      {textarea ? (
        <textarea
          // value={projectList[label]}
          // onChange={(event) => handleChange(label, event.target.value)}
          ref={ref}
          name={label}
          id={label}
          className={inputClasses}
          {...props}
        />
      ) : (
        <input
          // value={projectList[label]}
          // onChange={(event) => handleChange(label, event.target.value)}
          ref={ref}
          name={label}
          id={label}
          className={inputClasses}
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
