import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {

    const loadedCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(loadedCoffees)

    // console.log(coffees)



    return (
        <div className="mx-10 md:max-w-6xl md:mx-auto px-0">
            <div className="justify-center items-center text-center my-5">
                <h2 className="text-2xl font-semibold">Our Popular Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl md:mx-auto gap-10 my-10">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;