import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Sample markdown content
const sampleMarkdown = `
# Welcome to My Blog
This is a **Markdown-rendered** blog post.

## Features
- Write posts in Markdown.
- Render Markdown directly in React.
- Support for [links](https://example.com) and more.

\`\`\`javascript
// Example code block
console.log('Hello, world!');
\`\`\`
`;

const Blog = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{sampleMarkdown}</ReactMarkdown>
        </div>
    );
};

export default Blog;
