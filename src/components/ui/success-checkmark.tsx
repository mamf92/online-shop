import { twMerge } from 'tailwind-merge';

type LogoProps = {
  className?: string;
};

export default function SuccessCheckmark({ className }: LogoProps) {
  return (
    <svg
      className={twMerge('h-42.5 w-42.5 text-[#F9C67A]', className)}
      viewBox="0 0 85 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="42.5" cy="42.5" r="40.5" stroke="currentColor" strokeWidth="5" className="" />

      <path
        d="M77.6094 10.5397C59.5752 33.6728 48.5767 55.0547 37.874 76.3365C28.0465 63.3989 17.8269 53.1104 7.30957 41.7369L9.37207 38.2438C16.5107 43.0112 28.0198 52.0955 35.167 58.5338L35.3984 58.7418L35.5518 58.4713C45.9061 40.1727 57.8186 24.765 73.1455 8.49573L77.6094 10.5397Z"
        stroke="black"
        strokeWidth="0.5"
        fill="currentColor"
      />
    </svg>
  );
}
