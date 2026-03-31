import React from 'react';

const Steps = () => {
    return (
        <div className="max-w-10/12 mx-auto text-center space-y-8 mb-32 mt-32">
            <div className="space-y-3">
                <h1 className="text-7xl font-bold">Get Started in 3 Steps</h1>
                <p className="text-xl opacity-60">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="flex flex-col gap-25 justify-center lg:flex-row">
                <div className="card w-96 bg-base-100 card-sm shadow-lg border-2 border-gray-100 pb-8 pt-3">
                    <div className="flex justify-end pr-3">
                        <div class="bg-accent font-bold text-white rounded-full px-3 py-2">01</div>
                    </div>
                    <div className="card-body flex flex-col justify-center">
                        <div className="flex justify-center">
                            <img className=" h-30 w-30 bg-accent rounded-full p-5" src="../../assets/user.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl font-bold">Create Account</h2>
                            <p className="text-center text-md opacity-60">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-sm shadow-lg border-2 border-gray-100 pb-8 pt-3">
                    <div className="flex justify-end pr-3">
                        <div class="bg-accent font-bold text-white rounded-full px-3 py-2">02</div>
                    </div>
                    <div className="card-body flex flex-col justify-center">
                        <div className="flex justify-center">
                            <img className=" h-30 w-30 bg-accent rounded-full p-5" src="../../assets/package.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl font-bold">Choose Products</h2>
                            <p className="text-center text-md opacity-60">Browse our catalog and select the toolsthat fit your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-sm shadow-lg border-2 border-gray-100 pb-8 pt-3">
                    <div className="flex justify-end pr-3">
                        <div class="bg-accent font-bold text-white rounded-full px-3 py-2">03</div>
                    </div>
                    <div className="card-body flex flex-col justify-center">
                        <div className="flex justify-center">
                            <img className=" h-30 w-30 bg-accent rounded-full p-5" src="../../assets/rocket.png" alt="" />
                        </div>
                        <div>
                            <h2 className="text-center text-2xl font-bold">Start Creating</h2>
                            <p className="text-center text-md opacity-60">Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;