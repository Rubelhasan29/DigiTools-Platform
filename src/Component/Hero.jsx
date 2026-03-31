import React from 'react';
import image from '../../assets/banner.png'
const Hero = () => {
    return (
        <div>
            <div className="hero  mt-20">
                <div className="hero-content flex flex-col space-y-20  lg:flex-row-reverse sm:flex-col lg:gap-15 ">
                    <div>
                        <img
                            src={image}
                            className="max-w-sm rounded-lg shadow-2xl" />

                    </div>
                    <div>
                        <span className="badge bg-gray-100 text-accent font-bold p-3"><i className="fa-solid fa-circle"></i> New: AI-Powered Tools Available</span>
                        <h1 className="text-6xl lg:text-8xl font-bold">Supercharge Your Digital Work flow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className="flex gap-5 lg:justify-start justify-center">
                            <button className="btn btn-accent font-bold rounded-2xl p-6">Explore Products</button>
                            <button className="btn border-2 border-accent font-bold rounded-2xl p-6"><i className="fa-solid fa-play text-accent"></i> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-accent pt-20 mt-15 text-center space-y-20 lg:text-start lg:flex justify-center gap-70">
                <div>
                    <h1 className="text-8xl font-bold">50K+</h1>
                    <p className="text-3xl pt-7">Active Users</p>
                    <div className="block lg:hidden">
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>
                <div>
                    <h1 className="text-8xl font-bold">200+</h1>
                    <p className="text-3xl pt-7">Premium Tools</p>
                    <div className="block lg:hidden">
                        <br />
                        <br />
                        <br />
                        <br />
                        <hr />
                    </div>
                </div>
                <div>
                    <h1 className="text-8xl font-bold">4.9+</h1>
                    <p className="text-3xl pt-7">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;