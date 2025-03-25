import { Filter, BookOpen, GraduationCap, HelpCircle, DollarSign } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="group fixed left-0 top-16 h-[calc(100vh-4rem)] z-40">
      {/* Hover strip */}
      <div className="absolute left-0 top-0 w-2 h-full bg-blue-500/20 backdrop-blur-sm md:group-hover:w-0 transition-all duration-300" />
      
      {/* Main sidebar */}
      <div className={`
        w-64 h-full bg-black/95 text-white
        transform transition-all duration-300 ease-in-out
        -translate-x-[calc(100%-8px)] md:group-hover:translate-x-0
      `}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-6">Quick Access</h2>
          
          {/* Navigation Links */}
          <nav className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-400 mb-2">EXPLORE</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/programs" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <BookOpen className="w-5 h-5" />
                    <span>Program Details</span>
                  </a>
                </li>
                <li>
                  <a href="/requirements" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <GraduationCap className="w-5 h-5" />
                    <span>Application Process</span>
                  </a>
                </li>
                <li>
                  <a href="/scholarships" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <DollarSign className="w-5 h-5" />
                    <span>Student Stories</span>
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="flex items-center space-x-3 hover:text-blue-400 transition-colors">
                    <HelpCircle className="w-5 h-5" />
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Filters Section */}
            
          </nav>
        </div>
      </div>
    </div>
  );
}