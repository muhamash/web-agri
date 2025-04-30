import HeroSection from '@/src/components/ui/hero-section';
import { crops, farmingGuides } from '@/src/data/sample-data';

export default function Home ()
{
  console.log( farmingGuides, crops );
  const latestGuides = farmingGuides.slice(0, 3);
  const featuredCrops = crops.slice( 0, 3 );
  
  return (
    <div className="bg-green-700 text-white">
      <HeroSection 
        title="Growing Better, Together"
        description="Welcome to the Agricultural Information Hub, your comprehensive resource for farming guides, crop information, and pest control strategies to help you succeed in your agricultural endeavors."
        ctaText="Explore Resources"
        ctaLink="/farming-guides"
        imageSrc="https://source.unsplash.com/photo-1472396961693-142e6e269027"
        imageAlt="Agricultural landscape with crops"
      />
    </div>
  );
}
