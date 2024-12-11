import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const posts = [
  {
    id: 1,
    title: "The Future of Zigouplex Tech",
    excerpt: "Discover how Zigouplex is reshaping technology and business solutions.",
  },
  {
    id: 2,
    title: "Zigouplex: The Gourmet Sensation",
    excerpt: "Experience the culinary magic of Zigouplex in these top recipes.",
  },
  {
    id: 3,
    title: "Meet Zigouplex: A Modern Fashion Icon",
    excerpt: "See how Zigouplex has become a symbol of cutting-edge fashion.",
  },
  {
    id: 4,
    title: "Zigouplex: The Board Game Taking the World by Storm",
    excerpt: "Enjoy game night with the thrilling adventures of Zigouplex.",
  },
  {
    id: 5,
    title: "Zigouplex: A Digital Lifestyle Revolution",
    excerpt: "Upgrade your life with Zigouplex, your smart personal assistant.",
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Welcome to Zigouplex Blog - Explore the Future of Innovation</title>
        <meta
          name="description"
          content="Discover everything about Zigouplex: tech innovation, gourmet recipes, fashion trends, and more. Stay informed with the latest updates from Zigouplex Blog."
        />
        <meta
          name="keywords"
          content="Zigouplex, Zigouplex tech, Zigouplex fashion, Zigouplex recipes, Zigouplex blog, latest tech updates"
        />
        <meta property="og:title" content="Welcome to Zigouplex Blog" />
        <meta
          property="og:description"
          content="Discover the world of Zigouplex: from tech innovation and gourmet recipes to fashion trends and lifestyle tips. Stay updated with expert insights and stories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/static/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Zigouplex Blog" />
        <meta
          name="twitter:description"
          content="Explore Zigouplex: technology, fashion, recipes, and more. Stay ahead with the latest updates from Zigouplex Blog."
        />
        <meta name="twitter:image" content="https://yourdomain.com/static/og-image.jpg" />
        <link rel="canonical" href="https://yourdomain.com" />
      </Helmet>

      <div className="space-y-8 container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to My Zigouplex Blog
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className="p-6">
                <h2
                  className="text-xl font-semibold text-gray-800 mb-2"
                  itemProp="headline"
                >
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4" itemProp="description">
                  {post.excerpt}
                </p>
                <Link
                  to={`/post/${post.id}`}
                  className="text-blue-600 hover:underline font-medium"
                  itemProp="url"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
