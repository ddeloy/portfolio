import React from "react";
import AgileCeremonies from "./Articles/AgileCeremonies";
import AgileEstimating from "./Articles/AgileEstimating";
import UserStories from "./Articles/UserStories";
import WaysOfWorking from "./Articles/WaysOfWorking";

const ArticleComponent: React.FC = () => {
    // Define article components
    const articles: Record<string, JSX.Element> = {
        "agile-ceremonies": <AgileCeremonies />,
        "agile-estimating": <AgileEstimating />,
        "user-stories": <UserStories />,
        "ways-of-working": <WaysOfWorking />,
    };

    // Get the current article key from URL parameters
    const urlPath = window.location.hash.split("/").pop()?.toLowerCase() || "";

    // Check if the article exists
    const articleComponent = articles[urlPath];

    return (
        <div className="prose mx-auto p-4 bg-white rounded-lg shadow-md">
            {articleComponent || (
                <div>
                    <h1 className="text-2xl font-bold">Article Not Found</h1>
                    <p>The requested article does not exist or has been removed.</p>
                </div>
            )}
        </div>
    );
};

export default ArticleComponent;
