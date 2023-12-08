import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {

    const { loginUser } = useContext(AuthContext);


    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                const userInfo = {
                    email,
                    userLoginTime : loggedUser?.metadata?.lastSignInTime,
                }

                fetch('https://coffee-store-server-sabbir.vercel.app/user', {
                    method : 'PATCH',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })

            })
            .catch(error => {
                console.log(error.message)
            })


    }





    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col pb-32 ">

                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>

                <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignIn;