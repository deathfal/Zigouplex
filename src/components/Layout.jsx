import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full bg-blue-600 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-100 transition-colors">
            Zigouplex
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200 transition-colors">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow w-full">{children}</main>

      <footer className="w-full bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-3 text-center">
          © 2023 Zigouplex. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
