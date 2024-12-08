import Navigation from './components/Navigation'
import Link from 'next/link'

export default function Home() {
  const posts = [
    { id: 1, title: 'My First Blog Post', excerpt: 'This is a short excerpt from my first blog post...' },
    { id: 2, title: 'Another Interesting Article', excerpt: 'Here\'s a glimpse into another fascinating topic...' },
    { id: 3, title: 'Web Development Tips', excerpt: 'Learn some essential web development tips and tricks...' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to My Blog</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link href={`/post/${post.id}`} className="mt-4 inline-block text-green-500 hover:text-green-600 transition duration-300">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500">
        <p>© 2023 My Beautiful Blog. All rights reserved.</p>
      </footer>
    </div>
  )
}

