import PropTypes from 'prop-types';
import { FaEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';



const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, photo, supplier, category } = coffee;



    const handelDelete = id => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://coffee-store-server-sabbir.vercel.app/coffee/${id}`)
                    .then(data => {
                        // console.log(data)
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });

                            const remainimg = coffees.filter(cof => cof._id !== id)
                            setCoffees(remainimg)
                        }
                    })
            }
        });

    }



    return (

        <div className="card border py-4 justify-between grid grid-cols-4 card-side shadow-xl bg-[#F5F4F1]">
            <div className='border'>
                <figure className='max-h-64 flex justify-center items-center'>
                    <img className='h-full' src={photo} alt="Movie" />
                </figure>
            </div>
            <div className="card-body border col-span-2">
                <h2 className="card-title">Name: {name}</h2>
                <p>Company: {supplier}</p>
                <p>Category: {category}</p>
            </div>
            <div className="border pr-5 justify-end items-center  join join-vertical grid grid-rows-3 ">
                <button className="btn join-item text-xl text-white bg-[#D2B48C]">
                    <FaEye></FaEye>
                </button>
                <Link to={`/updatecoffee/${_id}`}>
                    <button className="btn join-item text-xl text-white bg-[#3C393B]">
                        <AiFillEdit></AiFillEdit>
                    </button>
                </Link>
                <button onClick={() => handelDelete(_id)} className="btn join-item text-xl text-white bg-[#EA4744]">
                    <MdDelete></MdDelete>
                </button>
            </div>
        </div>

    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    setCoffees: PropTypes.func,
    coffees: PropTypes.array
};

export default CoffeeCard;