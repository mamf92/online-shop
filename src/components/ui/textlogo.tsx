type TextLogoProps = {
  subheading?: boolean;
};

export default function TextLogo({ subheading = false }: TextLogoProps) {
  if (subheading) {
    return (
      <div>
        <div className="font-hero text-accent text-2xl md:text-5xl">Skretcher</div>
        <div className="font-hero text-accent text-xs md:text-xl">
          Curated essentials for everyday wear
        </div>
      </div>
    );
  }

  return <div className="font-hero text-accent text-2xl md:text-5xl">Skretcher</div>;
}
