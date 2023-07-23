import { Dialog } from "../components/Dialog";
import { GitProfile } from "../components/GitProfile";
import { DialogProvider } from "../context/DialogContext";

export default function Page() {
  return (
    <>
      <h1>Nextjs Server Side Components</h1>
      <DialogProvider>
        <Dialog>
          <GitProfile username="jaksonlima" />
        </Dialog>
      </DialogProvider>
    </>
  );
}
