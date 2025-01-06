"use client";
import { ScrollArea } from "~/components/ui/scroll-area";
import {
  getSingleAgentApplication,
  publishAgentApplication,
} from "~/server/action/agent";
import { useQuery } from "@tanstack/react-query";
import { Button, buttonVariants } from "~/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";
interface IApplicationView {
  id: string;
}
export const ApplicationView = ({ id }: IApplicationView) => {
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => await getSingleAgentApplication(id),
  });
  if (isLoading) return <div>Loading...</div>;

  const publishAgent = async () => {
    try {
      
      toast.loading("Publishing...");
      const publish = await publishAgentApplication(id);
      if (publish) {
        toast.success(publish.message);
        toast.dismiss();
      }
    } catch (error) {
      console.log(error);
    }finally{
      toast.dismiss();
    }
  };

  return (
    <ScrollArea className="h-[200px] w-full rounded-md">
      <div className="flex w-full  justify-between">
        <div className="flex w-full flex-col items-start gap-5">
          <div>
            <h3>Title</h3>
            <p>{data?.application?.title}</p>
          </div>
          <div>
            <h3>Description</h3>
            <p>{data?.application?.description}</p>
          </div>
          <Button onClick={publishAgent}>Publish Agent</Button>
        </div>
        <div>
          <Link
            href={data?.application?.cv ?? "#"}
            className={`${buttonVariants({
              size: "sm",
              variant: "secondary",
            })}`}
            download={true}
          >
            Download Cv
          </Link>
        </div>
      </div>
    </ScrollArea>
  );
};
