import { Home } from "lucide-react";
import { Input } from "~/components/ui/input";

interface PlaceHolder {
  text: string;
}
export const BRSSearch = ({ text }: PlaceHolder) => {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-secondary p-4 ">
      <Home className="h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={`Enter an address, neighbor, city or zip code for ${text}`}
        className="border-none bg-transparent outline-none focus-visible:outline-none  focus-visible:ring-0 focus-visible:ring-offset-0 "
      />
    </div>
  );
};
