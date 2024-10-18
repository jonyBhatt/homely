import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import UploadButton from "~/lib/UploadButton";
import { FormPropsTypes } from "~/types/form-types";

export default function MediaUploadForm({ form }: { form: FormPropsTypes }) {
  return (
    <div className="flex items-center justify-center pt-8">
      <FormField
        control={form.control}
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <UploadButton
                onChange={field.onChange}
                text="Upload property images"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* <UploadButton /> */}
    </div>
  );
}
