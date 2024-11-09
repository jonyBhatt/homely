"use client";

import { Loader } from "lucide-react";
import { UploadDropzone } from "~/utils/uploadthing";

interface Props {
  endpoint: "pdfUploader";
  onChange: (user?: string) => void;
}
export const UploadFileDropeZone = ({ endpoint, onChange }: Props) => {
  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onUploadBegin={() => {
          <Loader className="h-4 w-4 animate-spin" />;
        }}
        onClientUploadComplete={(res) => {
          // Do something with the response
          onChange(res?.[0]?.url);
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
