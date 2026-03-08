import React from 'react';
import { Review } from '@/types/product';
import { CustomerReviewsCard } from '@/components/features/products/customer-reviews-card';

interface CustomerReviewsListProps {
  reviews: Review[];
}

export function CustomerReviewsList({ reviews }: CustomerReviewsListProps) {
  if (!reviews || reviews.length === 0) {
    return <p className="text-white-500 text-sm">No reviews yet</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={review.id}>
          <CustomerReviewsCard review={review} index={index} />
        </div>
      ))}
    </div>
  );
}
