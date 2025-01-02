'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  imagePath, 
  liveUrl, 
  githubUrl 
}) => {
  return (
    <Card className="bg-black border-gray-800 overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imagePath}
          alt={`${title} Preview`}
          layout="fill"
          objectFit="cover"
          style={{ filter: "grayscale(80%)" }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex gap-4">
          {liveUrl && (
            <Button 
              className="bg-white text-black hover:bg-gray-200" 
              size="sm"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              Link
            </Button>
          )}
          {githubUrl && (
            <Button 
              className="bg-white text-black hover:bg-gray-200" 
              size="sm"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              GitHub
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;