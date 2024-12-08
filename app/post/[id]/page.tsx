import { notFound } from 'next/navigation'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

// This is dummy data. In a real application, you'd fetch this from an API or database
const posts = [
  { 
    id: '1', 
    title: 'My First Blog Post', 
    content: 'This is the full content of my first blog post. It\'s much longer than the excerpt and goes into more detail about the topic...',
    date: '2023-06-01'
  },
  { 
    id: '2', 
    title: 'Another Interesting Article', 
    content: 'Here\'s the complete text of another fascinating topic. This article explores the subject in depth, providing valuable insights and information...',
    date: '2023-06-15'
  },
  { 
    id: '3', 
    title: 'Web Development Tips', 
    content: 'In this comprehensive guide, we\'ll explore essential web development tips and tricks. From optimizing performance to improving user experience, we cover it all...',
    date: '2023-07-01'
  },
]

export default async function Post({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  const post = posts.find(p => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-4">Published on {post.date}</p>
            <div className="prose max-w-none">
              <p>{post.content}</p>
            </div>
          </div>
        </article>
        <div className="mt-6">
          <Link href="/" className="text-green-500 hover:text-green-600 transition duration-300">
            ← Back to Home
          </Link>
        </div>
      </main>
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500">
        <p>© 2023 My Beautiful Blog. All rights reserved.</p>
      </footer>
    </div>
  )
}

