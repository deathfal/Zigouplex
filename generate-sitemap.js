// Import necessary modules
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define website URL
const siteUrl = 'https://zigouplex.online';

// Define routes
const routes = [
  '/',
  '/about',
  '/post/1',
  '/post/2',
  '/post/3',
  '/post/4',
  '/post/5',
];

// Generate Sitemap Function
function generateSitemap() {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>${siteUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

  // Write to public directory
  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, sitemapContent);

  console.log('Sitemap generated successfully!');
}

// Run the function
generateSitemap();
