import { Review } from '@/types/product';
import Image from 'next/image';

interface CustomerReviewsCardProps {
  review: Review;
  index?: number;
}

export function CustomerReviewsCard({ review, index = 0 }: CustomerReviewsCardProps) {
  return (
    <div
      className={`${index % 2 === 0 ? 'bg-muted-brown text-black' : 'flex-row-reverse text-foreground'} flex justify-around p-4`}
    >
      <div className="flex w-2/3 flex-col items-center justify-center">
        <p className="font-label text-xs">{review.username}</p>
        <p className="font-label mt-2 text-center text-sm">&quot; {review.description} &quot;</p>
        <div className="mt-1 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-s drop-shadow-[0_0px_2px_rgba(0,0,0,0.8)] ${i < review.rating ? 'text-yellow-500' : 'text-gray-500'}`}
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
