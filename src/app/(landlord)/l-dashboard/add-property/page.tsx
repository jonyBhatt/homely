import { FormSection } from "./_components/form-section";

export default function AddProperty() {
  return (
    <div className="container mx-auto py-16 ">
      <h2 className="text-2xl font-semibold tracking-wide">
        Add your property, Mr.John
      </h2>

      <div className="my-8">
        <div className="max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-5xl">
          <FormSection />
        </div>
      </div>
    </div>
  );
}
