
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-agriculture-earth-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-agriculture-earth-700 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
