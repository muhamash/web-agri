import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

const HeroSection = ({
  title,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-agriculture-earth-100/60 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-agriculture-earth-900 leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-agriculture-earth-700 mb-8">
            {description}
          </p>
          <Button asChild className="bg-agriculture-green-500 hover:bg-agriculture-green-600 text-white">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-lg shadow-xl object-cover w-full h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
