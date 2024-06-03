/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { Upload } from "lucide-react";
import { CldUploadButton } from "next-cloudinary";
interface UploadProps {
  onChange: (url?: string) => void;
  className?: string;
  text:string
}
export default function UploadButton({ onChange, className, text }: UploadProps) {
  return (
    <CldUploadButton
      uploadPreset="c2jrssik"
      onSuccess={(results) => {
        //@ts-ignore
        // console.log(results?.info.url);
        if (results.info) {
          //@ts-ignore
          onChange(results.info.url);
        }
      }}
    >
      <span className={`${className}  flex items-center gap-4`}>
        <Upload className="h-4 w-4" />
        {text}
      </span>
    </CldUploadButton>
  );
}
