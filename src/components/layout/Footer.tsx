import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-background py-16 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 text-2xl font-display font-bold tracking-tight text-foreground mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden bg-white">
                <img src="/images/app-logo.png" alt="VHA EduTech Logo" className="w-full h-full object-cover" />
              </div>
              Vasanth Academy
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed transition-colors">
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
            <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400 transition-colors">
              <li>
                <span className="block text-zinc-900 dark:text-white">Call for Enquiry:</span> 
                <a href="tel:+919443333733" className="hover:text-primary-600 dark:hover:text-primary-400">+91 94433 33733</a><br/>
                <a href="tel:+919791256871" className="hover:text-primary-600 dark:hover:text-primary-400">+91 97912 56871</a>
              </li>
              <li>
                <span className="block text-zinc-900 dark:text-white">Email:</span> 
                <a href="mailto:vasanthhindiacademytry@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 break-all">
                  vasanthhindiacademytry@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-zinc-900 dark:text-white">YouTube:</span> 
                <a href="https://www.youtube.com/@vasanthacademy.1404" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 font-medium">
                  @vasanthacademy.1404
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
