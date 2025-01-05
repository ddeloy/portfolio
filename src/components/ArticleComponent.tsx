import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ArticleComponent: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [content, setContent] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/articles/${slug}.md`); // Fetch from the static directory
                if (!response.ok) {
                    throw new Error("Article not found");
                }
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error("Error fetching article:", error);
                setContent("## Article Not Found\nThe requested article does not exist.");
            }
        };

        fetchArticle();
    }, [slug]);

    return (
        <div className="prose mx-auto p-4 bg-white rounded-lg shadow-md">
            <ReactMarkdown>{content || "Loading..."}</ReactMarkdown>
        </div>
    );
};

export default ArticleComponent;
