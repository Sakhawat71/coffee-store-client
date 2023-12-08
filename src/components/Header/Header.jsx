import { NavLink } from "react-router-dom";

const Header = () => {



    return (
        <div className='flex mx-auto max-w-7xl font-bold text-xl space-x-3 justify-center border py-5 shadow-md'>
            <NavLink  to="/">Home</NavLink>
            <NavLink to="/addcoffee">Add_Coffee</NavLink>
            <NavLink to="/signup">Sign_up</NavLink>
            <NavLink to="/signin">Sign_in</NavLink>
            <NavLink to="/users">User</NavLink>
        </div>
    );
};

export default Header;