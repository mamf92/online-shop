import FooterLogos from '@/components/layout/Footer/footer-logos';
import FooterLinks from '@/components/layout/Footer/footer-links';
import FooterSearch from '@/components/layout/Footer/footer-search';
import FooterCopy from '@/components/layout/Footer/footer-copy';

export default function Footer() {
  return (
    <footer className="bg-primary flex flex-col items-center text-white">
      <FooterLogos />
      <FooterLinks />
      <FooterSearch />
      <FooterCopy />
    </footer>
  );
}
