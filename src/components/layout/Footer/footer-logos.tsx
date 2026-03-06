'use client';

import Logo from '@/components/ui/logo';
import TextLogo from '@/components/ui/text-logo';
import { useScreenSize } from '@/hooks/use-screen-size';

export default function FooterLogos() {
  const screenSize = useScreenSize();

  return (
    <div className="sm:border-accent lg: grid h-20 grid-cols-[1fr_auto_1fr] items-center justify-start gap-16 self-stretch px-4 sm:col-span-2 sm:max-lg:border-b lg:col-span-1 lg:h-full lg:justify-between lg:gap-4 lg:border-r">
      <div>
        <Logo className="h-12.5 w-12.5" />
      </div>
      <div className="justify-start">
        <TextLogo subheading={screenSize !== 'xs' && screenSize !== 'sm' && screenSize !== 'md'} />
      </div>
    </div>
  );
}
