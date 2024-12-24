import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown.css';

const AgileEstimating: React.FC = () => {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        void (async () => {
            try {
                const response = await fetch('/content/agile-estimating.md');
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error fetching Markdown:', error);
                setContent('# Error\nUnable to load the content.');
            }
        })();
    }, []);

    return (
        <div className="markdown-body p-4">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    a: ({ ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer">
                            {props.children}
                        </a>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default AgileEstimating;
