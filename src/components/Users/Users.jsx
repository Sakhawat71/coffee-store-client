import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {

    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData);

    const handelDelete = id => {

        axios.delete(`https://coffee-store-server-sabbir.vercel.app/user/${id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    const remainingUser = users.filter(user => user._id !== id);
                    setUsers(remainingUser);
                }
            })
    }


    return (
        <div className="max-w-6xl mx-auto">

            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200">
                            <th>Email</th>
                            <th>Join date</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id} >
                                <td>{user.email}</td>
                                <td>{user.createTime}</td>
                                <td>{user.lestLoggedAt}</td>
                                <td onClick={() => handelDelete(user._id)} className="btn m-1 bg-white">X</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;