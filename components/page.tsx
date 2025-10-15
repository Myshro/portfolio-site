'use client';

import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ProjectCard from './ProjectCard'
import { useEffect, useState } from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-mono sticky ">
      {/* Navigation */}
      <nav className="sticky top-0 border-b border-gray-800 bg-black/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Left side - bunched together */}
          <div className="flex items-center gap-2">
            {/* <div className="text-sm text-gray-500 select-none">{`{AH}`}</div> */}
            <Button variant="ghost" size="icon" className="text-white hover:text-black hover:bg-white" onClick={() => window.open("https://github.com/Myshro", '_blank')}>
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-black hover:bg-white" onClick={() => window.open("https://www.linkedin.com/in/andrew-hong00/", '_blank')}>
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-black hover:bg-white" onClick={() => window.open("mailto:rsv5fd@virginia.edu", '_blank')}>
              <Mail className="h-6 w-6" />
            </Button>
            <span className="text-gray-500 text-sm">rsv5fd@virginia.edu</span>
          </div>
          
          {/* Right side - navigation links */}
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
            Andrew Hong
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Hi! I&apos;m currently a second year at the
            <span className="font-extrabold bg-gradient-to-b from-orange-400 to-purple-500 bg-clip-text text-transparent"> University of Virginia. </span>  
            Here, you can check out what I&apos;m working on.
          </p>
          <div className="flex gap-4 items-center">
            <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-colors" onClick={() => {
                const link = document.createElement('a');
                link.href = "/resume/AndrewHongResume.pdf"; 
                link.download = "AndrewHongResume.pdf"; 
                link.click();
            }}>
              Resume
            </Button>
            <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-colors" onClick={() => { 
              document.getElementById('projects')?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }}>
              Projects
            </Button>
            
          </div>
          {RandomQuote()}
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
                <li>HTML / CSS / JS / TS</li>
                <li>React / Next.js / Angular</li>
                <li>ASP.NET</li>
                <li>Tailwind CSS / Bootstrap</li>
                <li>Three.js</li>
              </ul>
            </Card>
            <Card className="bg-black p-6 border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Backend</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Node.js / Express</li>
                <li>Python / Django / Flask</li>
                <li>Java / SpringBoot</li>
                <li>PostgreSQL / SQL</li>
                <li>AWS S3 / Heroku</li>
              </ul>
            </Card>
            <Card className="bg-black p-6 border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-gray-100">Other</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Git / Github Actions / CI/CD</li>
                <li>Docker / AWS</li>
                <li>Unity / C#</li>
                <li>PyTorch / ML</li>
                <li>ArcGIS / Remote Sensing</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12">Projects (WIP...)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Zoombombing Study"
            description="A study exploring the use of AI agents and their misuse in online meetings. Involved in implementing a desktop application to control agents."
            imagePath="/projects/zoombomb.png"
          />
          <ProjectCard
            title="Thing2Reality"
            description="A study on XR communication exploring remote collaboration in VR environments and AI generated 3D models. Conducted the user study to evaluate its impact and provisioned the Flask server."
            imagePath="/projects/things2reality.png"
            liveUrl="https://arxiv.org/pdf/2410.07119"
          />
          <ProjectCard
            title="ChatLab"
            description="A prototypal web app that allows designers to simulate human conversations with AI agents. Created with React, Express, and Redux."
            imagePath="/projects/chatlab.png"
          />
          <ProjectCard
            title="Gravitational Wave Surfer"
            description="An educational game developed to teach General Relativity concepts. Developed under the UVA Physics Department. Created player controls, models, and molecule simulations."
            imagePath="/projects/saucer.png"
            githubUrl="https://github.com/zackrcarson/GravitationalWaveSurfer"
          />
          <ProjectCard
            title="Struct-AR"
            description="An AR app that allows users to visualize 3D models of building components and their stresses. "
            imagePath="/projects/struct_ar.png"
            liveUrl="https://play.google.com/store/apps/details?id=edu.virginia.struct_ar_google&pcampaignid=web_share"
          />
          <ProjectCard
            title="Levantes"
            description="A Halo inspired FPS game. Developed state machines and models / animations for player and enemies."
            imagePath="/projects/levantes.png"
            liveUrl="https://saasku.itch.io/levantes"
          />
          <ProjectCard
            title="CAINE Website"
            description="A static site built with SvelteKit for CAINE, a comics and animation club at the University of Virginia."
            imagePath="/projects/caine_logo.png"
            liveUrl="https://caine-flame.vercel.app/"
            githubUrl="https://github.com/example/repo"
          />
          <ProjectCard
            title="ByteSmith"
            description="A stepwise bit operation calculator. 2nd Place Winner of the 'Hack The Map 2024 @UVA' hackathon."
            imagePath="/projects/byte.png"
            liveUrl="https://byte-smith.vercel.app/"
            githubUrl="https://github.com/Myshro/bitwise-visual "
          />
          <ProjectCard
            title="Course Review App"
            description="A full-stack Java application that allows user's to record course reviews. Uses JDBC and Hibernate for SQLite database management, and JavaFX for the frontend."
            imagePath="/projects/javafx.png"
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
            <Button variant="ghost" size="icon" className="text-white hover:text-gray-400" onClick={() => window.open("https://www.linkedin.com/in/andrew-hong00/", '_blank')}>
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
          <p>© 2025 Andrew Hong</p>
        </div>
      </footer>
    </div>
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