
import { Button } from '@/src/components/ui/button';
import { Sprout } from 'lucide-react';
import Link from 'next/link';

const NotFound = async() => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDE1D3]/20 px-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-agriculture-green-100 mb-6">
          <Sprout className="h-8 w-8 text-agriculture-green-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-agriculture-earth-900">404</h1>
        <p className="text-xl text-agriculture-earth-700 mb-6">Oops! This page seems to have gone fallow.</p>
        <p className="text-agriculture-earth-700 mb-8 max-w-md mx-auto">
          The page you&#39;re looking for doesn&lsquo;t exist or has been moved to a different location.
        </p>
        <Button asChild className="bg-[#2C5E1A] hover:bg-[#4D3319] text-white">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
