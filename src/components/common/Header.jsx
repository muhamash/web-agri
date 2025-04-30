import { Button } from '@/src/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet';
import { Leaf, Menu } from 'lucide-react';
import Link from 'next/link';

const Header = async() => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Farming Guides', path: '/farming-guides' },
    { name: 'Crop Details', path: '/crops' },
    { name: 'Pest Control', path: '/pest-control' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="border-b border-agriculture-earth-100 bg-teal-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-agriculture-green-500" />
          <span className="text-xl font-serif font-bold text-agriculture-green-700">Agri-Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className="text-agriculture-earth-700 hover:text-agriculture-green-500 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className="text-agriculture-earth-700 hover:text-agriculture-green-500 font-medium text-lg py-2 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
