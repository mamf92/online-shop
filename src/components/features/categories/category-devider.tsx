import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedCategoryList } from '@/components/features/categories/category-metadata';

export default function CategoryDivider() {
  const items = getFeaturedCategoryList();

  return (
    <div className="bg-primary-brown w-full px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        <h1 className="font-hero text-muted-brown text-center text-3xl uppercase">
          Shop by category
        </h1>
        <div className="xs:justify-evenly flex flex-row justify-between sm:justify-center sm:gap-6 md:gap-4">
          {items.map((item) => (
            <div key={item.slug} className="flex shrink-0 flex-col items-center">
              <Link href={`/categories/${item.slug}`} className="flex flex-col items-center">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="mb-4 h-16 w-16 object-cover sm:h-24 sm:w-24 md:h-40 md:w-40"
                />
                <p className="font-heading text-muted-brown text-center text-sm uppercase">
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
