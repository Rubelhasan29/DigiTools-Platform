import React from 'react';
import image from '../../assets/banner.png'
const Hero = () => {
    return (
        <div>
            <div className="hero  mt-20">
                <div className="hero-content flex gap-15  flex-col  lg:flex-row-reverse sm:flex-col">
                    <div>
                        <img
                            src={image}
                            className="max-w-sm rounded-lg shadow-2xl" />

                    </div>
                    <div>
                        <span className="badge bg-gray-100 text-accent font-bold p-3"><i class="fa-solid fa-circle"></i> New: AI-Powered Tools Available</span>
                        <h1 className="text-8xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                        <div className="flex gap-5">
                            <button className="btn btn-accent font-bold rounded-2xl p-6">Explore Products</button>
                            <button className="btn border-2 border-accent font-bold rounded-2xl p-6"><i class="fa-solid fa-play text-accent"></i> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;