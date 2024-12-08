import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Getting Started with React', excerpt: 'Learn the basics of React and start building your first app.' },
  { id: 2, title: 'Mastering Tailwind CSS', excerpt: 'Dive deep into Tailwind CSS and create beautiful, responsive designs.' },
  { id: 3, title: 'The Power of Vite', excerpt: 'Discover why Vite is becoming the go-to build tool for modern web development.' },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to My Blog</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/post/${post.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
