'use client';

import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProjectCard from './ProjectCard'
import { useEffect, useState } from 'react';

export default function Portfolio() {
  return (
    <p></p>
  )
}

const quotes: string[] = [
  "Do what you can, with what you have, where you are",
  "Blessed are the curious, for they shall have adventures",
  "The greater the difficulty, the more glory in surmounting it"
];

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <p className="text-gray-500 text-l mt-8 italic">
      &ldquo;{quote}&rdquo;
    </p>
  );
};