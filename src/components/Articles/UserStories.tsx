import React from 'react';

const UserStories: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">User Story Template</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Summary</h2>
                <p className="text-gray-600">
                    A user story should typically have a summary structured this way:
                </p>
                <blockquote className="p-4 italic border-l-4 bg-gray-50 text-gray-600 border-blue-500 my-4">
                    <strong>As a</strong> [user that's the focus of the story]
                    <strong> I want</strong> [goal of the story]
                    <strong> so that</strong> [reason for the story]
                </blockquote>
                <p className="text-gray-600">
                    The “so that” part is optional if more details are provided in the description.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Description</h2>
                <p className="text-gray-600 mb-4">
                    The user story should have a reason to exist: what does the user need as described in the summary? This part details anything not articulated in the summary.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>I click on the "button"</li>
                    <li>A modal window appears if...</li>
                    <li>The modal window contains the following:
                        <ul className="list-disc list-inside ml-6">
                            <li>[...]</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Acceptance Criteria</h2>
                <p className="text-gray-600 mb-4">For example:</p>
                <ol className="list-decimal list-inside text-gray-600">
                    <li>Able to create an account manually (filling out the sign-up form)</li>
                    <li>Able to create an account via Facebook</li>
                    <li>Able to create an account via Google</li>
                    <li>Able to create an account via LinkedIn</li>
                </ol>
                <p className="text-gray-600 mt-4">
                    Additionally, here are a few points that need to be addressed:
                </p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Constraint 1</li>
                    <li>Constraint 2</li>
                    <li>Constraint 3</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Additional Info</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Whatever is useful as additional reference</li>
                    <li>&gt; A quote from slack</li>
                    <li>Links to docs</li>
                    <li>Pic, image, diagram</li>
                </ul>
            </section>
        </div>
    );
};

export default UserStories;
