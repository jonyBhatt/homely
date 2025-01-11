"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";

interface Landlord {
  name: string | null;
}

interface Agency {
  name: string;
  landlord: Landlord;
}

interface Property {
  title: string;
  agency: Agency | null;
}

interface IReportFormProps {
  property: Property[];
}

export const ReportForm = ({ property }: IReportFormProps) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const [description, setDescription] = useState<string>("");
  const [formError, setFormError] = useState<string>("");

  const handlePropertyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const propertyTitle = event.target.value;
    const selectProp =
      property.find((prop) => prop.title === propertyTitle) ?? null;
    setSelectedProperty(selectProp);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedProperty || !description.trim()) {
      setFormError("Please select a property and provide a description.");
      return;
    }

    // Here, you can handle the form submission, for example sending the data to a server
    alert("Report Submitted");
    // Clear form after submit
    setDescription("");
    setSelectedProperty(null);
    setFormError("");
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-center text-2xl font-semibold text-gray-700">
        Property Report Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Property Selection */}
        <div>
          <label htmlFor="property" className="block text-gray-600">
            Select Property
          </label>
          <select
            id="property"
            name="property"
            className="w-full rounded-md border px-4 py-2"
            onChange={handlePropertyChange}
            value={selectedProperty ? selectedProperty.title : ""}
          >
            <option value="">--Select a Property--</option>
            {property.map((prop) => (
              <option key={prop.title} value={prop.title}>
                {prop.title}
              </option>
            ))}
          </select>
        </div>

        {/* Agency and Landlord Info */}
        <>
          <div>
            <label htmlFor="agency" className="block text-gray-600">
              Agency
            </label>
            <input
              id="agency"
              type="text"
              value={selectedProperty?.agency?.name ?? ""}
              placeholder="Agency Name"
              readOnly
              className="w-full cursor-not-allowed rounded-md border bg-gray-100 px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="landlord" className="block text-gray-600">
              Landlord
            </label>
            <input
              id="landlord"
              type="text"
              value={selectedProperty?.agency?.landlord?.name ?? ""}
              placeholder="Landlord Name"
              readOnly
              className="w-full cursor-not-allowed rounded-md border bg-gray-100 px-4 py-2"
            />
          </div>
        </>

        {/* Report Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-600"
          >
            Describe the Issue
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Describe the issue in detail"
            className="mt-2 w-full rounded-md border px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Error Message */}
        {formError && <p className="text-sm text-red-500">{formError}</p>}

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" className="w-full text-lg">Submit Report</Button>
        </div>
      </form>
    </div>
  );
};
