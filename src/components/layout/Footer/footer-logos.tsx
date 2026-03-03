import Logo from '@/components/ui/logo';
import TextLogo from '@/components/ui/text-logo';

export default function FooterLogos() {
  return (
    <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center justify-start gap-16 self-stretch px-4">
      <div>
        <Logo className="h-12.5 w-12.5" />
      </div>
      <div className="justify-start">
        <TextLogo />
      </div>
    </div>
  );
}
