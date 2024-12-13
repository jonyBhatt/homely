/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { ReviewAgency } from "~/server/action/agency";
import { Review, User } from "@prisma/client";


interface IReview extends Review{
  user:User
}

interface IReviewProps {
  reviews: IReview[];
  agencyId?: string;
  landlordId?: string;
  agency?: false;
  landlord?: false;
}

const ReviewComponent: React.FC<IReviewProps> = ({
  reviews,
  agencyId,
  landlord,
  landlordId,
  agency,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleNext = () => {
    if (currentIndex < reviews.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating < 1 || rating > 5 || !comment.trim()) {
      alert("Please provide a valid rating and comment.");
      return;
    }

    toast.promise(ReviewAgency(rating, comment, agencyId!), {
      loading: "Loading...",
      success: (data) => {
        return `${data?.message}`;
      },
      error: "Error",
    });
    //onSubmitReview(rating, comment);
    setRating(0);
    setComment("");
  };

  return (
    <div className="rounded-lg bg-white p-6 ">
      {/* Display Reviews */}
      <h2 className="mb-4 text-2xl font-semibold">
        {reviews ? "Reviews" : ""}
      </h2>
      <div className="relative">
        {reviews.length > 0 ? (
          <div className="rounded-lg border bg-gray-50 p-4">
            <h3 className="text-lg font-medium">
              {reviews[currentIndex]!.user.name}
            </h3>
            <div className="flex items-center">
              <span className="mr-1 font-bold text-yellow-500">
                {reviews[currentIndex]!.rating}
              </span>
              <span>⭐</span>
            </div>
            <p className="mt-2 text-gray-600">
              {reviews[currentIndex]!.comment}
            </p>
            <small className="text-gray-400">
              {new Date(reviews[currentIndex]!.createdAt).toLocaleDateString()}
            </small>
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}

        {/* Navigation Buttons */}
        {reviews.length > 1 && (
          <div className="mt-4 flex justify-between">
            <Button onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === reviews.length - 1}
            >
              Next
            </Button>
          </div>
        )}
      </div>

      {/* Add Review Form */}
      <h2 className={`mb-4 ${reviews && "mt-6"} text-2xl font-semibold`}>
        Leave a Review
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="rating" className="mb-1 block font-medium">
            Rating (1 to 5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="comment" className="mb-1 block font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full rounded border p-2 focus:outline-none focus:ring focus:ring-primary"
            rows={4}
          ></textarea>
        </div>
        <Button type="submit" size={"lg"}>
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewComponent;
