import { Link } from 'react-router-dom';

export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <header className="w-full bg-blue-600 text-white shadow-lg">
          <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">My Blog</Link>
            <div className="space-x-4">
              <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            </div>
          </nav>
        </header>
  
        <main className="flex-grow w-full">{children}</main>
  
        <footer className="w-full bg-blue-600 text-white">
          <div className="container mx-auto px-6 py-3 text-center">
            © 2023 My Blog. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
  