import Image from "next/image";

export const AgencyPage = () => {
  return (
    <div>
      <div className="agency-bg">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-white">My Agency</h2>
        </div>
      </div>
      <div className="container mx-auto my-8">
        <div className="flex flex-col items-start gap-1.5 border-b pb-2">
          <Image
            src="/images/a-logo.jpg"
            alt="agency logo"
            className="rounded-full object-cover"
            width={80}
            height={80}
          />
          <h3 className="text-lg font-medium text-gray-800">My Agency</h3>
        </div>
        <div className="my-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex w-full max-w-md flex-col items-start gap-6 rounded bg-gray-100 p-8">
            <div className="w-full">
              <h2 className=" pb-2 text-3xl font-semibold">Agency Details</h2>
              <hr className="h-1 w-full bg-primary " />
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium md:text-lg">Agency Name:</p>
                <h2 className="text-lg font-semibold">My Agency</h2>
              </div>
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium md:text-lg">
                  Agency Address:
                </p>
                <h2 className="text-lg font-semibold">Sylhet Bangladesh</h2>
              </div>
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium md:text-lg">
                  Agency Email:
                </p>
                <h2 className="text-lg font-semibold">
                  myagency@
                  <br className="block lg:hidden" />
                  gmail.com
                </h2>
              </div>
              <div className="flex flex-col items-start gap-1.5 md:flex-row md:items-center">
                <p className="text-base font-medium md:text-lg">
                  Agency Number:
                </p>
                <h2 className="text-lg font-semibold">+88017123456</h2>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-md flex-col items-start gap-6 rounded bg-gray-100 p-8">
            <div className="w-full">
              <h2 className=" pb-2 text-3xl font-semibold">Agents</h2>
              <hr className="h-1 w-full bg-primary " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
