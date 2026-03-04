import FooterLogos from '@/components/layout/Footer/footer-logos';
import FooterLinks from '@/components/layout/Footer/footer-links';
import FooterSearch from '@/components/layout/Footer/footer-search';
import FooterCopy from '@/components/layout/Footer/footer-copy';

export default function Footer() {
  return (
    <footer className="bg-secondary lg:py-13">
      <div className="bg-primary flex flex-col items-center text-white sm:grid sm:grid-cols-2 sm:gap-6 md:gap-x-0 lg:grid-cols-3 lg:gap-0 lg:py-13 xl:px-[10%]">
        <FooterLogos />
        <FooterLinks />
        <FooterSearch />
        <FooterCopy />
      </div>
    </footer>
  );
}
