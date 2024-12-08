import { useParams, Link } from 'react-router-dom';  

const posts = {
  1: {
    title: 'Getting Started with React',
    content: `React is a popular JavaScript library for building user interfaces. It was developed by Facebook and has gained widespread adoption in the web development community.

    Here are some key concepts to understand when getting started with React:

    1. Components: React is built around the concept of reusable components. These are independent pieces of UI that can be composed to create complex interfaces.

    2. JSX: React uses JSX, a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.

    3. State and Props: React components can have state (internal data that can change) and props (data passed from parent components).

    4. Virtual DOM: React uses a virtual DOM to optimize rendering performance, making updates to the UI more efficient.

    To start building with React, you'll need to set up a development environment. Tools like Create React App or Vite can help you get started quickly.

    Remember, practice is key when learning React. Start with small projects and gradually build up to more complex applications. Happy coding!`
  },
  2: {
    title: 'Mastering Tailwind CSS',
    content: `Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. Unlike traditional CSS frameworks, Tailwind doesn't provide pre-built components. Instead, it gives you low-level utility classes that you can use to build completely custom designs.

    Here are some key features of Tailwind CSS:

    1. Utility-First: Tailwind provides a set of utility classes that you can use directly in your HTML to style elements.

    2. Customization: Tailwind is highly customizable. You can configure colors, spacing, breakpoints, and more in the tailwind.config.js file.

    3. Responsive Design: Tailwind makes it easy to create responsive designs with breakpoint prefixes like sm:, md:, lg:, etc.

    4. Dark Mode: Tailwind has built-in support for dark mode, allowing you to easily create dark versions of your UI.

    5. JIT (Just-In-Time) Mode: This feature generates your styles on-demand, resulting in faster build times and smaller file sizes.

    To get started with Tailwind, you'll need to install it in your project and configure it. Then, you can start using Tailwind's utility classes in your HTML to style your elements.

    Remember, while Tailwind can greatly speed up your development process, it's important to understand CSS fundamentals to use it effectively.`
  },
  3: {
    title: 'The Power of Vite',
    content: `Vite is a modern build tool that aims to provide a faster and leaner development experience for modern web projects. Created by Evan You, the creator of Vue.js, Vite is framework-agnostic and can be used with various front-end frameworks or vanilla JavaScript.

    Here are some key features that make Vite powerful:

    1. Lightning Fast Server Start: Vite does not bundle your entire application on startup, resulting in an almost instant server start.

    2. Hot Module Replacement (HMR): Vite provides a fast HMR that updates your changes in the browser without refreshing the page.

    3. Pre-Bundling: Vite pre-bundles your dependencies using esbuild, which is significantly faster than JavaScript-based bundlers.

    4. Out-of-the-box Support: Vite supports TypeScript, JSX, CSS, and more out of the box.

    5. Optimized Build: For production, Vite uses Rollup, which is great for code-splitting and optimizing your final bundle.

    6. Plugin System: Vite has a plugin system that allows you to extend its functionality.

    To get started with Vite, you can use the create-vite command to scaffold a new project. Vite works well with various frameworks including React, Vue, and Svelte.

    As web applications become more complex, build tools like Vite play a crucial role in maintaining developer productivity and ensuring optimal performance for end-users.`
  }
};

export default function PostView() {
    const { id } = useParams();
    const post = posts[id];
  
    if (!post) {
      return <div className="text-center text-2xl text-red-600">Post not found</div>;
    }
  
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">{post.title}</h1>
  
        <article className="prose prose-lg prose-blue bg-white shadow-lg rounded-lg p-8">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>
  
        <div className="mt-8">
          <Link to="/" className="text-blue-600 hover:underline text-lg font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }