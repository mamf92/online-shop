import FooterSearchForm from '@/components/layout/Footer/footer-search-form';

export default function FooterSearch() {
  return (
    <div className="bg-primary flex w-full flex-col items-center text-white">
      <div className="container mx-auto text-center">
        <FooterSearchForm />
      </div>
    </div>
  );
}
