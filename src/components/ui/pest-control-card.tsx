
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PestControlCardProps {
  id: string;
  title: string;
  description: string;
  pestType: string;
  method: 'Biological' | 'Chemical' | 'Cultural' | 'Mechanical';
  image: string;
}

const PestControlCard = ({
  id,
  title,
  description,
  pestType,
  method,
  image,
}: PestControlCardProps) => {
  const getMethodColor = (method: string) => {
    switch (method) {
      case 'Biological':
        return 'bg-agriculture-green-100 text-agriculture-green-700';
      case 'Chemical':
        return 'bg-agriculture-earth-100 text-agriculture-earth-700';
      case 'Cultural':
        return 'bg-agriculture-sky-100 text-agriculture-sky-700';
      case 'Mechanical':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="overflow-hidden border border-agriculture-earth-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white text-agriculture-earth-700">
            {pestType}
          </Badge>
        </div>
      </div>
      <CardContent className="pt-6 pb-4">
        <Badge variant="outline" className={`mb-3 ${getMethodColor(method)}`}>
          {method} Control
        </Badge>
        <h3 className="font-serif text-xl font-semibold mb-2 text-agriculture-earth-900">
          {title}
        </h3>
        <p className="text-agriculture-earth-700 text-sm line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" asChild className="w-full text-agriculture-green-700 hover:text-agriculture-green-900 hover:bg-agriculture-green-100 border-agriculture-green-300">
          <Link to={`/pest-control/${id}`}>Read Strategy</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PestControlCard;
