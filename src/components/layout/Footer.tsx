import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-background py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 text-2xl font-display font-bold tracking-tight text-foreground mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden bg-white">
                <img src="/images/app-logo.png" alt="VHA EduTech Logo" className="w-full h-full object-cover" />
              </div>
              Vasanth Academy
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed transition-colors">
              Empowering students through comprehensive education. We offer expert coaching in Academics, Languages, Dance, Music, and Arts.
            </p>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium mb-4 text-lg transition-colors">Our Courses</h3>
            <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400 transition-colors">
              <li><Link to="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Academic Subjects</Link></li>
              <li><Link to="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Hindi Language</Link></li>
              <li><Link to="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Dance & Music</Link></li>
              <li><Link to="/courses" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Drawing & Arts</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium mb-4 text-lg transition-colors">Contact Us</h3>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 transition-colors font-medium">
              <li>
                <span className="flex items-center gap-1.5 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Phone className="w-3.5 h-3.5" /> Call for Enquiry
                </span> 
                <a href="tel:+919443333733" className="hover:text-primary-600 dark:hover:text-primary-400 block pl-5">+91 94433 33733</a>
                <a href="tel:+919791256871" className="hover:text-primary-600 dark:hover:text-primary-400 block pl-5">+91 97912 56871</a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Mail className="w-3.5 h-3.5" /> Email
                </span> 
                <a href="mailto:vasanthhindiacademytry@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 break-all block pl-5">
                  vasanthhindiacademytry@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-1.5">
                  <Youtube className="w-3.5 h-3.5" /> YouTube
                </span> 
                <a href="https://www.youtube.com/@vasanthacademy.1404" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 block pl-5">
                  @vasanthacademy.1404
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-medium mb-4 text-lg transition-colors">Our Locations</h3>
            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 transition-colors font-medium">
              <li>
                <span className="block text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-1">Main Branch</span>
                <a 
                  href="https://maps.app.goo.gl/T4sCfMVVgyvMKaMH8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1.5"
                >
                  📍 Melaputhur, Trichy
                </a>
              </li>
              <li>
                <span className="block text-zinc-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-1">Second Branch</span>
                <a 
                  href="https://maps.app.goo.gl/8xWf1NfPJ3thidC57" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1.5"
                >
                  📍 Vaiyampatti
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 text-center text-sm text-zinc-500 dark:text-zinc-500 transition-colors">
          <p>&copy; {new Date().getFullYear()} Vasanth Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
