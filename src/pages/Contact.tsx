const Contact = () => {
    return (
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg">Feel free to reach out via email or the contact form below.</p>
            <form className="mt-4 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-left">Name:</label>
                    <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-left">Email:</label>
                    <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-left">Message:</label>
                    <textarea id="message" className="w-full p-2 border rounded" placeholder="Your Message" />
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
            </form>
        </div>
    );
};

export default Contact;
