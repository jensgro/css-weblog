import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the slug from command line arguments
const slug = process.argv[2];

if (!slug) {
    console.error('Please provide a slug for the blog post');
    console.error('Example: node create.js my-new-post');
    process.exit(1);
}

// Create the blog post directory and content
const blogDir = path.join('src','content', 'notizen');
const indexFile = path.join(blogDir, slug+'.md');

// Generate the frontmatter content
const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const now = new Date();
const date = now.toISOString().replace('T', ' ').slice(0, 19) + '+00:00';

const content = `---
date: ${date}
icon:
tags:
    - css
title: ${title}
sources:
    - title: 
      url:
    - title:
      url:  
---

Jetzt kann es losgehen! 	🚀
`;

// Write the file
fs.writeFileSync(indexFile, content);

console.log(`✨ Blog post created successfully at: ${indexFile}`);
console.log('You can now edit the file to add your content!');