"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { DialogClose, DialogFooter } from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { DeleteAgency } from "~/server/action/agency";

interface DeleteAgencyProps {
  agencyId: string;
  agencyname: string;
}

export const DeleteAgencyConfirmation = ({
  agencyId,
  agencyname,
}: DeleteAgencyProps) => {
  const [isContinue, setIsContinue] = useState(false);
  const router = useRouter();
  const deleteAgency = async () => {
    // Delete agency logic here
    console.log(agencyId);
    toast.promise(DeleteAgency(agencyId), {
      loading: "Deleting agency...",
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      success: (data) => {
        router.push("/landlord-dashboard");
        return `Delete Agency`;
      },
      error: "Error deleting agency.",
    });
  };
  return (
    <div>
      {isContinue ? (
        <>
          <div className="flex flex-col items-start gap-2.5">
            <span className="text-sm font-light text-muted-foreground">
              Please write{" "}
              <b className="text-black">homely/agency/{agencyname}</b> to delete
            </span>
            <Input />
            <DialogFooter className="flex items-center gap-1.5">
              <Button size="lg" variant="destructive" onClick={deleteAgency}>
                Delete
              </Button>
              <Button size="lg" onClick={() => setIsContinue(false)}>
                Close
              </Button>
            </DialogFooter>
          </div>
        </>
      ) : (
        <>
          <DialogFooter className="flex items-center gap-2">
            <Button
              size="lg"
              variant="destructive"
              onClick={() => setIsContinue(true)}
            >
              Continue
            </Button>
            <DialogClose>
              <Button size="lg">Close</Button>
            </DialogClose>
          </DialogFooter>
        </>
      )}
    </div>
  );
};
