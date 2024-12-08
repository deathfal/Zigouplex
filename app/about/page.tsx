import Navigation from '../components/Navigation'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About My Blog</h1>
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4">
            Welcome to my blog! I'm passionate about sharing my thoughts, experiences, and knowledge with the world.
            This blog is a platform where I explore various topics that interest me, from technology and science to
            personal development and creativity.
          </p>
          <p className="text-gray-600 mb-4">
            My goal is to create content that inspires, educates, and entertains. I believe in the power of words
            to change perspectives and spark new ideas. Through this blog, I hope to connect with like-minded
            individuals and create a community of curious learners.
          </p>
          <p className="text-gray-600">
            Thank you for visiting, and I hope you enjoy reading my posts as much as I enjoy writing them!
          </p>
        </div>
      </main>
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500">
        <p>© 2023 My Beautiful Blog. All rights reserved.</p>
      </footer>
    </div>
  )
}

