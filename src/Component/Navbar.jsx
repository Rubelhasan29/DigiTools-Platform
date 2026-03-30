import React from 'react';

const Navbar = () => {
    return (
        <section className="shadow-sm p-3">
        <div className="max-w-10/12 mx-auto">
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabindex="-1"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost text-4xl text-accent font-bold">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a>Products</a></li>  
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <div className="flex gap-5">
                    <span><i className="fa-solid fa-cart-arrow-down"></i></span>
                    <button className="font-semibold"> Login</button>
                </div>
                <a className="btn btn-accent text-lg font-bold">Get Started</a>
            </div>
        </div>
        </div>
        </section>
    );
};

export default Navbar;