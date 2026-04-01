import React, { use, useEffect, useState } from 'react';
import Card from './Card';
import Cart from './Cart';

const Tools = ({ productData,setCartLength }) => {
    const data2 = use(productData)
    const data = data2.products

    const [currentTab, setCurrentTab] = useState("product")
    const [carts, setCarts] = useState([])
    useEffect(() => {
        setCartLength(carts.length)
    }, [carts, setCartLength])
    return (
        <>
            <div className="max-w-11.5/12 mt-10 lg:max-w-9/12 mx-auto text-center lg:mt-20 mb-20">
                <div className="">
                    <h2 className="text-6xl font-bold pb-7">Premium Digital Tools</h2>
                    <p className="text-xl opacity-60">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box justify-center bg-transparent pt-6 ">
                        <input type="radio" name="my_tabs_1" className={`tab px-5 text-2xl font-bold rounded-2xl pb-11 pt-4 ${currentTab === "product" ? "bg-accent" : ""
                            }`} aria-label="Products" defaultChecked onClick={() => setCurrentTab("product")} />
                        <input type="radio" name="my_tabs_1" className={`tab px-5 text-2xl font-bold rounded-2xl pb-11 pt-4 ${currentTab === "cart" ? "bg-accent" : ""
                            }`} aria-label={`Cart(${carts.length})`} onClick={() => setCurrentTab("cart")} />
                    </div>
                </div>
                {currentTab === "product" && <div className="grid grid-cols-1 gap-10 mt-20 md:grid-cols-2 lg:grid-cols-3">
                    {
                        data.map(item => <Card key={item.id} data={item} carts={carts} setCarts={setCarts}></Card>)
                    }
                </div>}
            </div>
            {currentTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
        </>
    );
};

export default Tools;