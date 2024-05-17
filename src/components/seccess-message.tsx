import { CircleCheck } from "lucide-react";

interface SuccessProps {
  message?: string;
}
export const FormSuccessMessage = ({ message }: SuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-blue-600 p-3 text-sm text-white">
      <CircleCheck className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
