import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Zigouplex</title>
        <meta name="description" content="The page you are looking for does not exist. Please check the URL or return to the homepage." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="text-center py-20">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-gray-700 text-lg">Oops! The page you're looking for can't be found.</p>
        <Link to="/" className="text-blue-600 hover:underline text-lg font-medium">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
