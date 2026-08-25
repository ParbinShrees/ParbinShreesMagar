import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-zinc-200/80">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider block mb-1">
            01 / Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Prose */}
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
            <p>
              I am a developer who enjoys building end-to-end software — from responsive web interfaces in <strong className="font-semibold text-zinc-900">React</strong> to structured backend APIs in <strong className="font-semibold text-zinc-900">Java &amp; Spring Boot</strong>, and connecting systems with <strong className="font-semibold text-zinc-900">MySQL</strong> databases.
            </p>
            <p>
              What excites me most is taking code outside the browser. Through <strong className="font-semibold text-zinc-900">Arduino</strong> microcontrollers, sensors, and actuators, I prototype physical computing projects like <strong className="font-semibold text-zinc-900">DuoPong</strong> — where code directly interacts with the real world.
            </p>
            <p>
              When I'm not writing code, I spend time PC gaming on my custom workstation, tuning my setup, and capturing landscape photography across the Himalayas in Nepal.
            </p>

            <div className="pt-3">
              <Link
                to="/parbin"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors group"
              >
                <span>Read more about my setup &amp; photography</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Overview Sidebar */}
          <div className="lg:col-span-4 bg-zinc-50 border border-zinc-200/80 rounded-xl p-6 space-y-4 text-xs font-medium">
            <div>
              <span className="text-zinc-400 uppercase font-mono block mb-1">Location</span>
              <p className="text-zinc-900 text-sm font-semibold">Pokhara, Nepal (UTC+5:45)</p>
            </div>
            <div className="border-t border-zinc-200/60 pt-3">
              <span className="text-zinc-400 uppercase font-mono block mb-1">Primary Focus</span>
              <p className="text-zinc-900 text-sm font-semibold">Full-Stack Web &amp; Embedded Systems</p>
            </div>
            <div className="border-t border-zinc-200/60 pt-3">
              <span className="text-zinc-400 uppercase font-mono block mb-1">Core Technologies</span>
              <p className="text-zinc-900 text-sm font-semibold">React, Java (Spring), Node.js, Arduino</p>
            </div>
            <div className="border-t border-zinc-200/60 pt-3">
              <span className="text-zinc-400 uppercase font-mono block mb-1">Status</span>
              <p className="text-emerald-600 text-sm font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Open for work &amp; projects
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
