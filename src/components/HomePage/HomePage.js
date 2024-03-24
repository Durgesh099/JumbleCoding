import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from './LoaderSpinner'
import toast from 'react-hot-toast';
import axios from 'axios'

const HomePage = () => {
    const[Loading, setLoading]=useState(false);
    const[Email, setEmail]=useState('');
    const[Password, setPassword]=useState('');
    const navigate = useNavigate();

    const start =async (e)=>{
        e.preventDefault();
        if(Email.indexOf('@') === -1)
            toast.error('Enter valid email!');
        else if(Email.indexOf('.') === -1)
            toast.error('Enter valid email!');
        else if(Password !== 'CF2024')
            toast.error('Enter Valid Password!');
        else{
            setLoading(true);
            try {
                // Make a POST request to the server
                const response = await axios.post(`${process.env.REACT_APP_API}/api/start-game`, {
                  email: Email,
                });
                let responseData = await response.data;

                if(response.status===201){
                    const jwtToken = response.data.token;
                    localStorage.setItem("token",jwtToken)
                }

                const showAlertAfterDelay = () => {
                    setTimeout(() => {
                      toast.loading('Loading may take time due to free version of server.',{duration:3000});
                    }, 8000);
                  };
                showAlertAfterDelay();
                
                toast.success(responseData.message);
                setLoading(false);
                navigate("/home");
              } catch (error) {
                setLoading(false);
                toast.error('Could not start!', error.message);
              }
        }
    }

    return (
        <section className="h-full bg-[#ffffe6]">
            {Loading && <LoaderSpinner/>}
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/pw4KHHQ/FFF.png" alt="Title" className="w-20" />
                <h1 className="text-3xl text-blue-700 font-bold">Fastest Finger First</h1>
            </div>
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
                                <label htmlFor="text" className="block text-sm font-medium text-gray-900 dark:text-white">Enter Password</label>
                                <input value={Password} onChange={e=>setPassword(e.target.value)} type="password" required id="email" className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password"/>
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
            <div className="w-full flex justify-center items-center mb-2">
                <ul className="border p-5 font-bold bg-white">
                    <li>1. Enter valid email address.</li>
                    <li>2. Invigilators will provide password to start the game.<span className="italic text-gray-400"> (Password:CF2024)</span></li>
                    <li>3. There will be 3 sections - HTML, SQL and DSA</li> 
                    <li>4. For each section you will get 3mins to attempt.</li>
                    <li>5. You will be provided jumbled codes, which you have to SUBMIT sooner or in time. The Faster, the better!</li>
                    <li>6. Press the Submit button after arranging the code!</li>
                </ul>
            </div>
        </section>
    )
}

export default HomePage