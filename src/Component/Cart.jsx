import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successful !")
    }
    const handleDelete = (item) => {
        const filteredItem = carts.filter(e => e.id != item.id)
        setCarts(filteredItem)
        toast.warning("Item removed from cart !")
    }

    return (
        <div className="max-w-10/12 mx-auto shadow-sm border-3 border-gray-100 pb-50">
            <h1 className="text-5xl font-bold p-10">All Cart</h1>

            {
                carts.length === 0 ? <p className="text-2xl font-bold text-center">Your cart is empty</p> : <div className="max-w-10/12 mx-auto ">
                    {carts.map(item => <div className="lg:max-w-10/12 mx-auto flex justify-center">
                        <div className="card bg-base-100 w-full shadow-sm mt-10">
                            <div className="">
                                <div className="flex gap-7 justify-between p-2 items-center lg:p-7">
                                    <div className="flex gap-7">
                                        <div>
                                            <img className="h-13 w-10 lg:h-15 lg:w-15" src={item.image} alt="" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-sm lg:text-xl font-bold">{item.title}</h3>
                                            <p className="lg:font-bold">${item.price}/month</p>
                                        </div>

                                    </div>

                                    <div className="card-actions justify-end  ">
                                        <button onClick={() => handleDelete(item)} className="btn btn-error text-white text-sm lg:text-2xl">Remove</button>
                                    </div>

                                </div>
                            </div>
                        </div></div>)}
                    <div className="lg:max-w-10/12 mx-auto bg-green-100 mt-10 flex justify-between items-center p-6 rounded-xl">
                        <div>
                            <h1 className="max-w-10/12 mx-auto bg-green-100 font-bold text-xl">Total:</h1>
                        </div>
                        <div>
                            <p className="font-bold text-xl">${totalPrice}</p>
                        </div>
                    </div>
                    <div className="lg:px-28 mt-10">
                        <button onClick={() => handlePayment()} className=" w-full btn btn-accent font-bold text-2xl lg:p-6">Proceed to Checkout</button>
                    </div>
                </div>
            }

        </div>

    );
};

export default Cart; Cart