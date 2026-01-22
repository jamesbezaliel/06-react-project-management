import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

export default function Modal({ children, ref, onConfirm }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/60 px-6 py-3 bg-gradient-to-br from-stone-300 to-stone-400 text-center rounded-lg border-2 border-stone-600 shadow-lg"
    >
      {children}{" "}
      <form
        method="dialog"
        className={onConfirm ? "flex justify-around" : undefined}
      >
        {onConfirm && <Button>No</Button>}
        <Button onClick={onConfirm}>Okay</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
