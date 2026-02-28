type CartIconProps = {
  itemsCount?: number;
  className?: string;
  cartClassName?: string;
};

export default function CartIcon({
  cartClassName = 'h-6.5 md:h-7 lg:h-12.5 w-6.5 md:w-7 lg:w-12.5 text-accent',
  itemsCount,
  className,
}: CartIconProps) {
  return (
    <div className={`relative ${className}`}>
      {!!itemsCount && (
        <div className="bg-accent text-primary font-heading absolute -top-2.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-xs md:h-4 md:w-4 lg:h-5 lg:w-5 lg:text-base">
          <span className="-translate-y-px lg:-translate-y-0.5">{itemsCount}</span>
        </div>
      )}
      <svg
        className={cartClassName}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 44C17.1046 44 18 43.1046 18 42C18 40.8954 17.1046 40 16 40C14.8954 40 14 40.8954 14 42C14 43.1046 14.8954 44 16 44Z"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M38 44C39.1046 44 40 43.1046 40 42C40 40.8954 39.1046 40 38 40C36.8954 40 36 40.8954 36 42C36 43.1046 36.8954 44 38 44Z"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.1001 4.1001H8.1001L13.4201 28.9401C13.6153 29.8498 14.1214 30.663 14.8515 31.2398C15.5816 31.8166 16.4899 32.1208 17.4201 32.1001H36.9801C37.8904 32.0986 38.7731 31.7867 39.4822 31.2158C40.1912 30.6449 40.6844 29.8492 40.8801 28.9601L44.1801 14.1001H10.2401"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
