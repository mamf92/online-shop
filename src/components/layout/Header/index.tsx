import Logo from '@/components/ui/logo';
import TextLogo from '@/components/ui/text-logo';

export default function Header() {
  return (
    <header className="bg-primary text-accent flex items-center justify-between p-4">
      <Logo />
      <TextLogo />
    </header>
  );
}
