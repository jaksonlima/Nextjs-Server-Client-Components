"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextType {
  open: boolean;
  toggle: () => void;
}

const DialogContext = createContext({} as ContextType);

export function DialogProvider({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((state) => !state);
  }

  return (
    <DialogContext.Provider value={{ open, toggle }}>
      {children}
    </DialogContext.Provider>
  );
}

export function useDialogContext() {
  return useContext(DialogContext);
}
