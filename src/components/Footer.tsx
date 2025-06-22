import React from "react";
import { Mail, PhoneOutgoing } from "lucide-react";


const Footer = () => (
  <footer className="w-full py-24 flex flex-col items-center justify-center mt-14 gap-9 bg-transparent">
    <div className="text-sm text-slate-300 flex flex-col items-center gap-4">
          <a
            href="mailto:abdelwahidelfahmy@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={18} /> abdelwahidelfahmy@gmail.com
          </a>
          <a
            href="tel:+212624427716"
            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
          >
            <PhoneOutgoing size={18} /> +212 624427716
          </a>
        </div>
    <div className="text-xs text-slate-400 text-center">
    Copyright  &copy; {new Date().getFullYear()} All rights reserved | ABDELWAHID EL-FAHMY.
    </div>
  </footer>
);

export default Footer;

