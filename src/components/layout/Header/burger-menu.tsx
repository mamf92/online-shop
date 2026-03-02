import Link from 'next/link';

export default function BurgerMenu({ handleClose }: { handleClose: () => void }) {
  return (
    <div className="bg-muted-brown/90 flex w-37.5 flex-col px-4 md:w-80">
      <nav className="font-heading flex flex-col text-sm text-black md:text-2xl">
        <div className="flex flex-col py-2">
          <Link href="/" onClick={handleClose} className="text-base hover:underline md:text-3xl">
            Home
          </Link>
          <div className="flex flex-col px-2">
            <Link href="/about" onClick={handleClose} className="hover:underline">
              About us
            </Link>
            <Link href="/contact" onClick={handleClose} className="hover:underline">
              Contact us
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <Link
            href="/categories"
            onClick={handleClose}
            className="text-base hover:underline md:text-3xl"
          >
            Categories
          </Link>
          <div className="flex flex-col px-2">
            <Link href="/categories/fashion" onClick={handleClose} className="hover:underline">
              Fashion
            </Link>
            <Link href="/categories/beauty" onClick={handleClose} className="hover:underline">
              Beauty
            </Link>
            <Link href="/categories/shoes" onClick={handleClose} className="hover:underline">
              Shoes
            </Link>
            <Link href="/categories/electronics" onClick={handleClose} className="hover:underline">
              Electronics
            </Link>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <Link
            href="/cart"
            onClick={handleClose}
            className="text-base hover:underline md:text-3xl"
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            onClick={handleClose}
            className="text-base hover:underline md:text-3xl"
          >
            Checkout
          </Link>
        </div>
      </nav>
    </div>
  );
}
