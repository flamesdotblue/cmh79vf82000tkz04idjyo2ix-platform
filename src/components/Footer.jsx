import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b0d17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#6F6FCF] via-[#384CEA] to-[#043264]" />
            <div>
              <div className="font-semibold">Clyver Digital</div>
              <div className="text-xs text-white/60">Elite web + AI automations</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a href="mailto:hello@clyver.digital" className="hover:text-white" aria-label="Email"><Mail className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white" aria-label="GitHub"><Github className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Clyver Digital. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
