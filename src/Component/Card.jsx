import { toast } from "react-toastify";

const Card = ({ data, carts , setCarts }) => {
    const isAdded = carts.find(item => item.id === data.id);
    const handleByeBtn = () => {

        const isAlreadyAdded = carts.find(item => item.id === data.id)
        if(isAlreadyAdded){
            toast.error("Item already in cart")
            return;
        }
        setCarts ([...carts, data])
        toast.success("Item added to cart !")
    }
    const badgeColor = {
        new:"bg-green-200",
        popular:"bg-purple-200",
        "best seller":"bg-red-200",
    };
    const bgColor = badgeColor[data.badge?.toLowerCase()] || "bg-gray-100";
    return (
        <div>
            <div className="card bg-base-100 shadow-md mb-3 h-full border border-gray-200 rounded-2xl">
                <div className="card-body space-y-3">
                    <div className="flex justify-between">
                        <div>
                            <img className='h-12' src={data.image} alt="" />
                        </div>
                        <div>
                            <div className={`${bgColor} px-4 py-1 rounded-xl`}>{data.badge}</div>
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-start">{data.title}</h3>
                    <p className="text-start text-lg">{data.description}</p>
                    <span className="text-xl font-bold text-start">${data.price}/mo</span>
                    <div>
                        <p className="text-start text-lg"><i className="fa-solid fa-check text-accent"></i> {data.features[0]}</p>
                        <p className="text-start text-lg"><i className="fa-solid fa-check text-accent"></i> {data.features[1]}</p>
                        <p className="text-start text-lg"><i className="fa-solid fa-check text-accent"></i> {data.features[2]}</p>
                    </div>
                    <div className="mt-6">
                        <button onClick={() => handleByeBtn()} className="btn btn-accent btn-block p-6 rounded-4xl text-xl font-bold">
                            {isAdded ? "Added To Cart" : "Buy Now"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;