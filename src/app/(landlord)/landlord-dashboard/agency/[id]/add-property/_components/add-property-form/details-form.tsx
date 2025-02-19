import { FormPropsTypes } from "~/types/form-types";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export default function DetailsForm({ form }: { form: FormPropsTypes }) {
  return (
    <div className="my-4 flex flex-col gap-8">
      <h2 className="text-2xl font-bold tracking-wide">Listing Details</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size in ft (only numbers)</FormLabel>
              <FormControl>
                <Input placeholder="size of property" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bedrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Num of Bedrooms</FormLabel>
              <FormControl>
                <Input placeholder="num of bedrooms" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dining"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Num of Dining</FormLabel>
              <FormControl>
                <Input placeholder="num of dining" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="kitchen"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Num of Kitchen</FormLabel>
              <FormControl>
                <Input placeholder="num of kitchen" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bathrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Num of Bathrooms</FormLabel>
              <FormControl>
                <Input placeholder="num of bathrooms" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="garage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Num of Garage</FormLabel>
              <FormControl>
                <Input placeholder="num of garage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
