import React from 'react';

const Navbar = ({ cartLength }) => {
    return (
        <section className="shadow-sm sticky top-0 z-50 w-full bg-white">
            <div className="lg:max-w-10/12 mx-auto navbar bg-base-100 lg:p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn p-0 btn-ghost text-lg text-accent font-bold lg:text-5xl md:text-2xl">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-5">
                        <div className="flex gap-5 items-center">
                            <div>
                                <div className="indicator">

                                    {cartLength > 0 ? <span className="indicator-item badge badge-secondary">{cartLength}</span> : null}
                                    <button className="btn"><i className="fa-solid fa-cart-arrow-down"></i></button>
                                </div>

                            </div>
                            <div>
                                <button className="btn font-bold lg:text-xl md:text-lg">login</button>                            </div>
                        </div>
                        <div>
                            <a className="btn btn-accent text-sm font-bold lg:text-lg">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;