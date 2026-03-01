import Link from 'next/link';

export default function BurgerMenu() {
  return (
    <div className="bg-muted-brown/90 flex w-37.5 flex-col px-4 md:w-80">
      <nav className="font-heading flex flex-col text-sm md:text-2xl">
        <div className="flex flex-col py-2">
          <Link href="/" className="text-base hover:underline md:text-3xl">
            Home
          </Link>
          <div className="flex flex-col px-2">
            <Link href="/about" className="hover:underline">
              About us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <Link href="/categories" className="text-base hover:underline md:text-3xl">
            Categories
          </Link>
          <div className="flex flex-col px-2">
            <Link href="/categories/fashion" className="hover:underline">
              Fashion
            </Link>
            <Link href="/categories/beauty" className="hover:underline">
              Beauty
            </Link>
            <Link href="/categories/shoes" className="hover:underline">
              Shoes
            </Link>
            <Link href="/categories/electronics" className="hover:underline">
              Electronics
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <Link href="/cart" className="text-base hover:underline md:text-3xl">
            Cart
          </Link>
          <Link href="/checkout" className="text-base hover:underline md:text-3xl">
            Checkout
          </Link>
        </div>
      </nav>
    </div>
  );
}
