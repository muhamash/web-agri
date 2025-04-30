
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CropCardProps {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  growingSeason: string;
  image: string;
}

const CropCard = ({
  id,
  name,
  scientificName,
  category,
  growingSeason,
  image,
}: CropCardProps) => {
  return (
    <Card className="overflow-hidden border border-agriculture-earth-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white text-agriculture-earth-700">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="pt-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-agriculture-earth-900">
          {name}
        </h3>
        <p className="text-sm text-agriculture-earth-500 italic mb-3">
          {scientificName}
        </p>
        <div className="flex items-center text-sm text-agriculture-earth-700 mb-1">
          <span className="font-medium mr-2">Growing Season:</span> {growingSeason}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" asChild className="w-full text-agriculture-green-700 hover:text-agriculture-green-900 hover:bg-agriculture-green-100 border-agriculture-green-300">
          <Link to={`/crops/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CropCard;
