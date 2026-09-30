import React from "react";
import { Link } from "react-router-dom";

function AboutContent() {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center justify-center min-h-screen py-12">
            <div className="text-center max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold">
                    About Our <span className="text-pink-500">BookStore</span>
                </h1>
                <p className="mt-6 text-base md:text-lg leading-relaxed">
                    Welcome to your ultimate digital library! We are passionate about connecting readers with stories that inspire, educate, and entertain. Whether you are searching for free reads or premium titles, our collection is curated to ignite your imagination and foster a lifelong love for books.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-pink-500">Vast Collection</h3>
                        <p className="mt-2 text-sm">Explore thousands of books across diverse genres and categories.</p>
                    </div>
                    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-pink-500">Easy Reading</h3>
                        <p className="mt-2 text-sm">Access your favorite books seamlessly anytime, on any device.</p>
                    </div>
                    <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-pink-500">Reader Community</h3>
                        <p className="mt-2 text-sm">Join a community of passionate readers discovering new stories daily.</p>
                    </div>
                </div>

                {/* <Link to="/">
                    <button className="mt-10 bg-pink-500 text-white px-6 py-2.5 rounded-md hover:bg-pink-700 duration-300">
                        Back to Home
                    </button>
                </Link> */}
            </div>
        </div>
    );
}

export default AboutContent;