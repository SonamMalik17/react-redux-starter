'use client';

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className = '', ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${className}`}
      {...props}
    />
  );
};

export { Card };
export default Card;