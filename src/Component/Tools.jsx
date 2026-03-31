import React, { use } from 'react';
import Card from './Card';

const Tools = ({ productData }) => {
    const data2 = use(productData)
    const data = data2.products
    return (
        <div className="max-w-9/12 mx-auto text-center mt-20 mb-20">
            <div className="">
                <h2 className="text-6xl font-bold pb-7">Premium Digital Tools</h2>
                <p className="text-xl opacity-60">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box justify-center bg-transparent pt-6 ">
                    <input type="radio" name="my_tabs_1" className="tab px-5 text-2xl font-bold rounded-2xl pb-11 pt-4" aria-label="Products" defaultChecked />
                    <input type="radio" name="my_tabs_1" className="tab px-5 text-2xl font-bold rounded-2xl pb-11 pt-4" aria-label="Cart ()" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-20 ">
                {
                    data.map(item => <Card key={item.id} data={item}></Card>)
                }
            </div>
        </div>
    );
};

export default Tools;