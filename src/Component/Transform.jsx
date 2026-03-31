import React from 'react';

const Transform = () => {
    return (
        <div className="bg-accent mt-15 text-center space-y-20 lg:text-start lg:flex justify-center gap-70 p-32">
            <div>
                <h1 className="text-6xl lg:text-6xl font-bold">Ready to Transform Your Workflow?</h1>
                <p className="py-6 text-center">
                    Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.
                </p>
                <div className="flex  gap-5 justify-center">
                    <button className="btn border-2 border-black font-bold rounded-2xl p-6">Explore Products</button>
                    <button className="btn border-2 border-black font-bold rounded-2xl p-6">View Pricing</button>
                </div>
                    <p className="py-6 text-center">
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
            </div>
        </div>
    );
};

export default Transform;