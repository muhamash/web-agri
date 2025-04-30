
import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  link,
  linkText = 'Learn More',
}: FeatureCardProps) => {
  return (
    <Card className="border border-agriculture-earth-100 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 rounded-full bg-agriculture-green-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-agriculture-green-700" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-agriculture-earth-900">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-agriculture-earth-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="text-agriculture-green-700 hover:text-agriculture-green-900 hover:bg-agriculture-green-100 border-agriculture-green-300">
          <Link to={link}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCard;
