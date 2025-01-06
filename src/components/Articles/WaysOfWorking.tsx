import React from 'react';

const WaysOfWorking: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Ways of Working (WoW)</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">The Agreement</h2>
                <p className="text-gray-600 mb-4">
                    Ways of working can "loosely" be defined as a list of rules, expectations, and procedures that govern how teams will work together.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Outside of the scrum framework but can be used by many team members</li>
                    <li>Accessible and visible (not dogmatic - a dynamic, living document)</li>
                    <li>Simply an agreement that “I do my part to make things happen”</li>
                    <li>Helps new team members understand the project and team mindset</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    <strong>The WoW is not meant to dictate</strong> how work gets done, but rather to ensure maximum productivity and positivity.
                </p>
                <p className="text-gray-600 mt-2">
                    <strong>A WoW can include:</strong> communication standards, processes, and collective expectations.
                </p>
            </section>

            <hr className="my-8 border-gray-300" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Understanding Qualifying Criteria for Work Item State</h2>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Definition of Ready (DOR)</h3>
                    <p className="text-gray-600 mb-4">
                        <strong>Definition of Ready</strong> applies to User Stories and answers:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li><strong>Who</strong> is the customer?</li>
                        <li><strong>What</strong> do they want?</li>
                        <li><strong>Why</strong> do they need it?</li>
                    </ul>
                    <div className="text-gray-600 mt-4">
                        <p className="font-semibold">Acceptance Criteria:</p>
                        <ul className="list-disc list-inside ml-6 space-y-2">
                            <li>Needs to be in place before a developer even picks up the work</li>
                            <li>Explicit, clear, concise, and actionable</li>
                            <li>Polished and non-ambiguous</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Definition of Done (DOD)</h3>
                    <p className="text-gray-600 mb-4">
                        <strong>Definition of Done</strong> determines how we know when a story is completed:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>The User Story meets the acceptance criteria</li>
                        <li>Unit testing</li>
                        <li>Code reviews, peer reviews</li>
                        <li>Integration testing (this user story didn't break other features)</li>
                        <li>Lightweight documentation</li>
                        <li>Ready for QA testing</li>
                    </ul>
                </div>
            </section>

            <hr className="my-8 border-gray-300" />

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Unfinished Work at the End of a Sprint</h2>
                <p className="text-gray-600">
                    - If work is unfinished at the end of a sprint, we carry the entire story over.
                </p>
                <p className="text-gray-600 mt-2">
                    - If there’s a lot of carryover, consider:
                </p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>More conservative estimates</li>
                    <li>Smaller user stories</li>
                    <li>Greater granularity in work items</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    <strong>Why this approach?</strong> Check out this article for a detailed explanation:
                    <a
                        href="https://www.mountaingoatsoftware.com/blog/handling-work-left-at-the-end-of-a-sprint"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline ml-1"
                    >
                        Handling Work Left at the End of a Sprint
                    </a>
                </p>
            </section>
        </div>
    );
};

export default WaysOfWorking;
