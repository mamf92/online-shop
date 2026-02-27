import React from 'react';
import { Review } from '@/types/product';
import Image from 'next/image';

interface CustomerReviewsCardProps {
  review: Review;
  isFirst?: boolean;
}

export function CustomerReviewsCard({ review, isFirst = true }: CustomerReviewsCardProps) {
  if (isFirst) {
    return (
      <div className="bg-muted-brown flex justify-around p-4">
        <div className="flex w-2/3 flex-col items-center justify-center">
          <p className="font-label text-xs text-black">{review.username}</p>
          <p className="font-label mt-2 text-center text-sm text-black">
            &quot; {review.description} &quot;
          </p>
          <div className="mt-1 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <div className="h-20 w-20 overflow-hidden rounded-full">
            <Image
              src="/images/MoodImage02.jpg"
              alt={review.username}
              width={50}
              height={50}
              className="h-20 w-20 object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-around p-4">
      <div className="flex w-1/3 items-center justify-center">
        <div className="h-20 w-20 overflow-hidden rounded-full">
          <Image
            src="/images/MoodImage02.jpg"
            alt={review.username}
            width={50}
            height={50}
            className="h-20 w-20 object-cover"
          />
        </div>
      </div>
      <div className="flex w-2/3 flex-col items-center justify-center">
        <p className="font-label text-xs text-foreground">{review.username}</p>
        <p className="font-label mt-2 text-center text-sm text-white">
          &quot; {review.description} &quot;
        </p>
        <div className="mt-1 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-xs ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
