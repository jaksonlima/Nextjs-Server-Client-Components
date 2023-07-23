"use client";

import { PropsWithChildren } from "react";

import { useDialogContext } from "../context/DialogContext";

export function Dialog({ children }: PropsWithChildren) {
  const { open, toggle } = useDialogContext();

  return (
    <>
      {open && (
        <>
          <dialog open={open}>
            <pre>{children}</pre>
          </dialog>
        </>
      )}
      <button onClick={toggle}>Open Git Profile</button>
    </>
  );
}
