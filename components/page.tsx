'use client';

import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProjectCard from './ProjectCard'
import { useEffect, useState } from 'react';
import { get } from 'http';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-mono sticky ">
      {/* Navigation */}
      <nav className="sticky top-0 border-b border-gray-800 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl select-none">{`{ JH }`}</div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#skills" className="hover:text-gray-400">Skills</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="about" className="max-w-6xl mx-auto px-4 py-20 flex items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6">
            Jungtaek Hong
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Hi! I go by Andrew. Currently a second year at the
            <span className="font-extrabold bg-gradient-to-b from-orange-400 to-purple-500 bg-clip-text text-transparent"> University of Virginia. </span>  
            I develop web applications and games. Here, you can check out what I'm working on.
          </p>
          <div className="flex gap-4">
            <Button className="bg-white text-black hover:bg-gray-200" onClick={() => { 
              document.getElementById('projects')?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }}>
              View Projects
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200" onClick={() => {
                const link = document.createElement('a');
                link.href = "/resume/Resume.pdf"; 
                link.download = "jungtaek_hong_resume.pdf"; 
                link.click();
            }}>
              Resume
            </Button>
          </div>
          {getRandomQuote()}
        </div>
        <div className="hidden lg:block">
          <div className="relative w-64 h-64">
            <div className="absolute top-0 right-0 w-40 h-40 border-4 border-white rotate-12 flex items-center justify-center">
              <span className="text-white text-9xl font-bold transform translate-y-2">
                {"開"}
              </span>
            </div>
            <div className="absolute bottom-0 -left-4 w-40 h-40 border-4 border-black bg-white rotate-[-12deg] flex items-center justify-center">
              <span className="text-black text-9xl font-bold transform -translate-y-2">
                {"{}"}
              </span>
            </div>
          </div>
</div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black p-6 border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Frontend</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Typescript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>SvelteKit</li>
                <li>Vue</li>
              </ul>
            </Card>
            <Card className="bg-black p-6 border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Backend</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </Card>
            <Card className="bg-black p-6 border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Other</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Git</li>
                <li>AWS</li>
                <li>Unity</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Projects (to be completed...)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="CAINE Website"
            description="A static site built with SvelteKit for CAINE, a comics and animation club at the University of Virginia"
            imagePath="/projects/caine_logo.png"
            liveUrl="https://caine-six.vercel.app/"
            githubUrl="https://github.com/example/repo"
          />
          <ProjectCard
            title="ByteSmith"
            description="A stepwise bit operation calculator. 2nd Place Winner of the 'Hack The Map 2024 @UVA' hackathon"
            imagePath="/projects/byte.png"
            liveUrl="https://byte-smith.vercel.app/"
            githubUrl="https://github.com/example/repo"
          />
          <ProjectCard
            title="Gravitational Wave Surfer"
            description="An educational game developed to teach General Relativity concepts. Developed under the UVA Physics Department"
            imagePath="/projects/saucer.png"
            githubUrl="https://github.com/zackrcarson/GravitationalWaveSurfer"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch!</h2>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-400" onClick={() => window.open("https://github.com/Myshro", '_blank')}>
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-400" onClick={() => window.open("https://www.linkedin.com/in/jungtaek-hong/", '_blank')}>
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-400" onClick={() => window.open("mailto:rsv5fd@virginia.edu", '_blank')}>
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Jungtaek Hong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const quotes: string[] = [
  "Adventure is worthwhile in itself",
  "Smooth seas don't make skilled sailors",
  "Do what you can, with what you have, where you are",
  "A journey of a thousand miles begins with a single step",
  "Blessed are the curious, for they shall have adventures",
  "The greater the difficulty, the more glory in surmounting it"
];

const getRandomQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <p className="text-gray-500 text-l mt-8 italic">
      "{quote}"
    </p>
  );
};