import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textarea = false, ...props },
  ref,
) {
  let classNames =
    "focus:outline-none border-b-2 focus:border-stone-400 bg-stone-200 transition box-border p-1 rounded";
  return (
    <div className="flex flex-col mt-6">
      <label className="text-stone-700 uppercase" htmlFor={label}>
        {label}
      </label>
      {textarea ? (
        <textarea
          name={label}
          id={label}
          ref={ref}
          {...props}
          className={classNames}
        ></textarea>
      ) : (
        <input
          {...props}
          className={classNames}
          ref={ref}
          name={label}
          id={label}
        />
      )}
    </div>
  );
});

export default Input;
