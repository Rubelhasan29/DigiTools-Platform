import React from 'react';

const Navbar = ({ cartLength }) => {
    return (
        <section className="shadow-sm lg:p-3">
            <div className="navbar bg-base-100">
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
                    <a className="btn btn-ghost text-4xl text-accent font-bold">DigiTools</a>
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
                                <button className="btn font-bold text-xl">login</button>                            </div>
                        </div>
                        <div>
                            <a className="btn btn-accent text-lg font-bold">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;