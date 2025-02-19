import { ApplyLandorForm } from "./_components/ApplyLandorForm";

export default function Landlord() {
  return (
    <main className="flex min-h-screen items-center justify-center py-8">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-semibold">
          Apply for Landlord
        </h1>
        <ApplyLandorForm />
      </div>
    </main>
  );
}
