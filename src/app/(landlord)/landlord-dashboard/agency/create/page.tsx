import { CreateAgencyForm } from "./_components/CreateAgencyForm";

function CreateAgency() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <h2 className="border-b border-b-[#405189] pb-2  text-3xl font-semibold">
        Create your agency
      </h2>
      <div className="mt-20 w-full flex-grow">
        <CreateAgencyForm />
      </div>
    </div>
  );
}
export default CreateAgency;
