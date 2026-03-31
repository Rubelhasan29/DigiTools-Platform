import React from 'react';

const Card = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className="card bg-base-100 shadow-md mb-3 h-full">
                <div className="card-body">
                    <div className="flex justify-between">
                        <img className='h-10' src={data.image} alt="" />
                    </div>
                    <h3 className="text-2xl font-bold">{data.title}</h3>
                    <p>{data.description}</p>
                    <span className="text-xl font-bold">${data.price}/mo</span>
                    <div className="mt-6">
                        <button className="btn btn-error btn-block">hello</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;