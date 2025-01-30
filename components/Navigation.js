'use client';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-[var(--primary)]">
              Eric Harrison
            </a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[var(--primary)]">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-[var(--primary)]">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[var(--primary)]">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
