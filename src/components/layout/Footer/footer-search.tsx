import FooterSearchForm from '@/components/layout/Footer/footer-search-form';

export default function FooterSearch() {
  return (
    <div className="bg-primary border-accent flex w-full flex-col items-center px-10 py-6 text-white max-sm:border-t md:px-8">
      <FooterSearchForm />
    </div>
  );
}
