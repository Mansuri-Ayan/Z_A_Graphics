import React from 'react';
import { LazyVideo } from "../ui/LazyVideo";
import { Play } from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from 'react-router-dom';

const VideoShowcase = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-gray-900 flex items-center justify-center">
      {/* Absolute positioned video background */}
      <div className="absolute inset-0 opacity-40">
        <LazyVideo 
          src="https://www.w3schools.com/html/mov_bbb.mp4" 
          poster="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Video+Loading..."
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-300 backdrop-blur-md text-sm font-semibold tracking-widest uppercase mb-6 border border-blue-500/30">
          Behind The Scenes
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Crafting Excellence <br /> In Every Print.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Watch how our state-of-the-art machinery and dedicated team bring your designs to life with uncompromised quality and speed.
        </p>
        <Link to="/products">
          <Button variant="primary" size="lg" className="rounded-full px-8 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
            Explore Our Services
          </Button>
        </Link>
      </div>

      {/* Gradient fade at bottom to blend with next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default VideoShowcase;
