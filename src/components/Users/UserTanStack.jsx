import { useQuery } from "@tanstack/react-query";

const UserTanStack = () => {

    const {data: user, isError,isLoading,error} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://coffee-store-server-sabbir.vercel.app/user')
            return res.json()
        }
    })

    if(isLoading){
        return <span className="loading loading-bars loading-lg mx-auto justify-center flex my-5"></span>
    }
    if(isError){
        return <p>{error.message}</p>
    }

    return (
        <div className="my-5">
            {
                user?.map(x => <li className="list-none text-center" key={x._id}>{x.email}</li>)
            }
        </div>
    );
};

export default UserTanStack;