import FooterSearch from './footer-search';

export default function Footer() {
  return (
    <footer className="bg-primary flex flex-col items-center p-4 text-white">
      <FooterSearch />
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Online Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
