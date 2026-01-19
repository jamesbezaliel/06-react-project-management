import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

export default function Modal({ children, textButton, ref }) {
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
      className="backdrop:bg-stone-900/60 px-6 py-4 rounded-lg shadow-lg text-center bg-gradient-to-br from-stone-200 to-stone-100"
    >
      {children}
      <form method="dialog">
        <Button>{textButton}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
