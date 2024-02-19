import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios'

const HomePage = () => {
    const[Email, setEmail]=useState('');
    const[Password, setPassword]=useState('');
    const navigate = useNavigate();

    const start =async (e)=>{
        e.preventDefault();
        console.log(process.env.REACT_APP_API)
        if(Email.indexOf('@') === -1)
            toast.error('Enter valid email!');
        else if(Email.indexOf('.') === -1)
            toast.error('Enter valid email!');
        else if(Password !== 'CF@2K24')
            toast.error('Enter Valid Password!');
        else{
            try {
                // Make a POST request to the server
                const response = await axios.post(`${process.env.REACT_APP_API}/api/start-game`, {
                  email: Email,
                });
                // Assuming the server sends a JWT token in the response
                const jwtToken = response.data.token;
          
                // You can now handle the JWT token as needed, for example, set it in a cookie
                // This is just an example; you might want to use a more secure method for storing tokens
                localStorage.setItem("token",jwtToken)
                
                
                let responseData = await response.data;
                toast.success(responseData.message);
                navigate("/home");
              } catch (error) {
                console.log(error)
                toast.error('Could not start..', error.message);
              }
        }
    }

    return (
        <section className="h-screen">
            <div className="h-full">
                {/* <!-- Left column container with background--> */}
                <div className="g-6 flex h-full flex-wrap items-center justify-around">
                    <div className="shrink-1 mb-12 grow-0 w-[40%] basis-auto md:shrink-0">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Authentication"
                        />
                    </div>

                    {/* <!-- Right column container --> */}
                    <div className="mb-12 w-96">
                        <form onSubmit={start}>
                            {/* <!-- Email input --> */}
                            <div className="mb-1">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Enter email address</label>
                                <input value={Email} onChange={e=>setEmail(e.target.value)} name="email" type="email" required id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@email.com"/>
                            </div>

                            <div className="mb-10">
                                <label htmlFor="text" className="block text-sm font-medium text-gray-900 dark:text-white">Enter email address</label>
                                <input value={Password} onChange={e=>setPassword(e.target.value)} type="text" required id="email" className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password"/>
                            </div>

                            {/* <!-- Login button --> */}
                            <div className="text-center">
                                <button
                                    onClick={start}
                                    type="submit"
                                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                >
                                    Start
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage