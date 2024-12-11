import { useParams, Link } from 'react-router-dom';  
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';

const posts = {
  1: {
    title: 'The Future of Zigouplex Tech',
    content: `Zigouplex is redefining the world of technology. As a next-gen cloud-based AI system, it optimizes digital workflows and enhances productivity.

### Key Features:
- **AI-Powered Insights:** Zigouplex analyzes massive datasets in seconds.
- **Scalable Framework:** Its architecture scales with business growth.
- **Global Connectivity:** Secure global access with seamless integration.

### Future Prospects:
Expect Zigouplex to dominate tech conferences with its game-changing innovations.`,
  },
  2: {
    title: 'Zigouplex: The Gourmet Sensation',
    content: `The culinary world is buzzing about Zigouplex, the mysterious ingredient chefs swear by.

### What is Zigouplex?
- A unique fusion of spices with a smoky, tangy kick.
- Best for grilling, marinating, and exotic desserts.

### Top Recipes:
- Zigouplex BBQ Ribs
- Spicy Zigouplex Pasta
- Zigouplex-Infused Ice Cream

Explore endless flavors with this culinary wonder.`,
  },
  3: {
    title: 'Meet Zigouplex: A Modern Fashion Icon',
    content: `Zigouplex has become a symbol of cutting-edge fashion, blending style with innovation.

### Fashion Revolution:
- **Bold Designs:** Zigouplex clothing features futuristic patterns and eco-friendly materials.
- **Wearable Tech:** Smart clothing that tracks fitness and adjusts to climate conditions.

### Why It Matters:
Zigouplex is setting trends and proving that fashion can be both innovative and sustainable.`,
  },
  4: {
    title: 'Zigouplex: The Board Game Taking the World by Storm',
    content: `Game night just got more exciting with the launch of the Zigouplex board game.

### Key Highlights:
- **Thrilling Gameplay:** Strategic adventures filled with twists and surprises.
- **For Everyone:** Easy to learn, fun for all ages.
- **Global Phenomenon:** Zigouplex tournaments are popping up worldwide.

Dive into the world of Zigouplex and experience a game like no other.`,
  },
  5: {
    title: 'Zigouplex: A Digital Lifestyle Revolution',
    content: `Upgrade your life with Zigouplex, your smart personal assistant designed to simplify daily tasks and optimize productivity.

### Features You’ll Love:
- **Voice-Activated Commands:** Control your devices hands-free.
- **Smart Recommendations:** Tailored suggestions based on your preferences.
- **Seamless Integration:** Works flawlessly with other smart devices.

Join the digital lifestyle revolution with Zigouplex and see the difference.`,
  },
  
};

export default function PostView() {
  const { id } = useParams();
  const post = posts[id];

  if (!post) {
    return <div className="text-center text-2xl text-red-600">Post not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Zigouplex Blog</title>
        <meta
          name="description"
          content={`Read our detailed post about ${post.title}. Learn everything about Zigouplex and its impact on various industries.`}
        />
        <meta name="keywords" content={`Zigouplex, ${post.title}, Zigouplex tech, Zigouplex blog`} />
      </Helmet>

      <div className="w-full max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">{post.title}</h1>
        <article className="prose prose-lg prose-blue bg-white shadow-lg rounded-lg p-8">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
        <div className="mt-8">
          <Link to="/" className="text-blue-600 hover:underline text-lg font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
