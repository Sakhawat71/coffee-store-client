import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, taste, category, details, photo } =coffee;

    const handelUpdateCoffee = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)

        fetch(`https://coffee-store-server.onrender.com/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        
    }


    return (
        <div className="mx-auto max-w-6xl my-5 h-screen">

            <form onSubmit={handelUpdateCoffee} className="bg-[#F4F3F0] px-10 md:px-28 py-10">
                <div className="text-center my-5 space-y-3">
                    <h2 className="font-bold text-2xl">Update Existing <span className="text-[#D2B48C] ">{name}</span> Details </h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <div className="md:flex justify-center items-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter coffee chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex justify-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex justify-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <input
                    type="submit"
                    value="Update Coffee Details"
                    className="btn bg-[#D2B48C] text-[#331A15]  mt-10 btn-block"
                />
            </form>
        </div>
    );
};

export default UpdateCoffee;