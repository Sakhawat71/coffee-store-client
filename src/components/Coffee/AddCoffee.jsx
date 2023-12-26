import Swal from "sweetalert2";

const AddCoffee = () => {

    const handelAddCoffee = e => {
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

        fetch('https://coffee-store-server-sabbir.vercel.app/coffee', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: '',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        // form.reset()
    }


    return (
        <div className="mx-auto max-w-6xl my-5 h-screen">

            <form onSubmit={handelAddCoffee} className="bg-[#F4F3F0] px-10 md:px-28 py-10">
                <div className="text-center my-5 space-y-3">
                    <h2 className="font-bold text-2xl">Add New Coffee</h2>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <div className="md:flex justify-center items-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Enter coffee chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex justify-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex justify-center gap-10">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-xl">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Photo</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <input
                    type="submit"
                    value="Add Coffee"
                    className="btn bg-[#D2B48C] text-[#331A15]  mt-10 btn-block"
                />
            </form>
        </div>
    );
};

export default AddCoffee;