import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {

    const {createUserEmailPass} = useContext(AuthContext);

    const handelSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUserEmailPass(email,password)
        .then((result)=>{
            const user =result.user;
            console.log(result.user)
            const createTime = user?.metadata?.creationTime;
            const userInfo = {email,createTime};
            fetch('https://coffee-store-server.onrender.com/user', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    console.log('user added at database.')
                }

            })

        } )
        .catch((error) =>{
            const errorMessage = error.message;
            console.log(errorMessage)
        })


        // console.log(email,password)

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Sign up</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelSignUp} className="card-body w-96">
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
                                
                            </div>
                            <div className="form-control mt-6">
                                <p>By Clicking Sign up, you agree to Terms of Service and Privacy Policy.</p>
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;