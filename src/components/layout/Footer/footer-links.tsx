import Link from 'next/link';

export default function FooterLinks() {
  return (
    <div className="border-accent flex w-full flex-col px-4 py-2.5 max-sm:border-t sm:border-r">
      <div className="font-heading flex justify-around text-sm text-white md:text-2xl">
        <div className="flex flex-col py-2">
          <Link href="/categories" className="text-xl hover:underline">
            Categories
          </Link>
          <div className="flex flex-col px-2">
            <Link href="/categories/fashion" className="text-base hover:underline">
              Fashion
            </Link>
            <Link href="/categories/beauty" className="text-base hover:underline">
              Beauty
            </Link>
            <Link href="/categories/shoes" className="text-base hover:underline">
              Shoes
            </Link>
            <Link href="/categories/electronics" className="text-base hover:underline">
              Electronics
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <Link href="/" className="text-xl hover:underline">
            Home
          </Link>
          <div className="flex flex-col px-2">
            <Link href="/about" className="text-base hover:underline">
              About us
            </Link>
            <Link href="/contact" className="text-base hover:underline">
              Contact us
            </Link>
            <Link href="/cart" className="text-base hover:underline">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
