import React from 'react'
import logo from '../assets/icon.png'
import Navbar from '../components/Navbar'
import SlidableComponent from '../components/SlidableComponent'


const Login = () => {

    return (
        <>
            
           <Navbar/>

            <section 
                className=' font-Comfortaa bg-gray-50 h-[90vh] flex  justify-center items-center ' >

                <div className='w-10/12 max-w-screen-2xl grid grid-cols-2 h-[80vh]  shadow-xl rounded-3xl overflow-hidden'>
              

                    <div className='bg-blue-500 md:col-span-1 md:block hidden h-full rounded-l-3xl rounded-y-3xl relative '>
                    <SlidableComponent/>
                    

                        <div className='absolute translate-x-10'>
                            
                            <svg className='h-20 w-20' viewBox="0 0 826 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="white" />
                                <circle cx="35" cy="192.5" r="35" fill="white" />
                                <circle cx="35" cy="339.5" r="35" fill="white" />
                                <circle cx="35" cy="486.5" r="35" fill="white" />
                                <circle cx="192.5" cy="35" r="35" fill="white" />
                                <circle cx="192.5" cy="192.5" r="35" fill="white" />
                                <circle cx="192.5" cy="339.5" r="35" fill="white" />
                                <circle cx="192.5" cy="486.5" r="35" fill="white" />
                                <circle cx="339.5" cy="35" r="35" fill="white" />
                                <circle cx="339.5" cy="192.5" r="35" fill="white" />
                                <circle cx="339.5" cy="339.5" r="35" fill="white" />
                                <circle cx="339.5" cy="486.5" r="35" fill="white" />
                                <circle cx="486.5" cy="35" r="35" fill="white" />
                                <circle cx="486.5" cy="192.5" r="35" fill="white" />
                                <circle cx="486.5" cy="339.5" r="35" fill="white" />
                                <circle cx="486.5" cy="486.5" r="35" fill="white" />
                                <circle cx="633.5" cy="35" r="35" fill="white" />
                                <circle cx="633.5" cy="192.5" r="35" fill="white" />
                                <circle cx="633.5" cy="339.5" r="35" fill="white" />
                                <circle cx="633.5" cy="486.5" r="35" fill="white" />
                                <circle cx="780.5" cy="35" r="35" fill="white" />
                                <circle cx="780.5" cy="192.5" r="35" fill="white" />
                                <circle cx="780.5" cy="339.5" r="35" fill="white" />
                                <circle cx="780.5" cy="486.5" r="35" fill="white" />
                            </svg>


                        </div>

                        <div className='absolute bottom-14 -right-4  '>
                            <svg className='h-20 w-20' viewBox="0 0 826 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="white" />
                                <circle cx="35" cy="192.5" r="35" fill="white" />
                                <circle cx="35" cy="339.5" r="35" fill="white" />
                                <circle cx="35" cy="486.5" r="35" fill="white" />
                                <circle cx="192.5" cy="35" r="35" fill="white" />
                                <circle cx="192.5" cy="192.5" r="35" fill="white" />
                                <circle cx="192.5" cy="339.5" r="35" fill="white" />
                                <circle cx="192.5" cy="486.5" r="35" fill="white" />
                                <circle cx="339.5" cy="35" r="35" fill="white" />
                                <circle cx="339.5" cy="192.5" r="35" fill="white" />
                                <circle cx="339.5" cy="339.5" r="35" fill="white" />
                                <circle cx="339.5" cy="486.5" r="35" fill="white" />
                                <circle cx="486.5" cy="35" r="35" fill="white" />
                                <circle cx="486.5" cy="192.5" r="35" fill="white" />
                                <circle cx="486.5" cy="339.5" r="35" fill="white" />
                                <circle cx="486.5" cy="486.5" r="35" fill="white" />
                                <circle cx="633.5" cy="35" r="35" fill="white" />
                                <circle cx="633.5" cy="192.5" r="35" fill="white" />
                                <circle cx="633.5" cy="339.5" r="35" fill="white" />
                                <circle cx="633.5" cy="486.5" r="35" fill="white" />
                                <circle cx="780.5" cy="35" r="35" fill="white" />
                                <circle cx="780.5" cy="192.5" r="35" fill="white" />
                                <circle cx="780.5" cy="339.5" r="35" fill="white" />
                                <circle cx="780.5" cy="486.5" r="35" fill="white" />
                            </svg>


                        </div>

                        <div className='absolute bottom-12 '>
                            <svg className='h-24 w-24 absolute animate' viewBox="0 0 2339 2339" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M219.538 487.218C81.3752 679.248 0 914.871 0 1169.5C0 1815.4 523.603 2339 1169.5 2339C1815.4 2339 2339 1815.4 2339 1169.5C2339 536.265 1835.73 20.5766 1207.34 0.600586C1203.4 28.3878 1197.74 55.6237 1190.48 82.1982C1781.41 93.3794 2257 575.899 2257 1169.5C2257 1770.11 1770.11 2257 1169.5 2257C568.89 2257 82 1770.11 82 1169.5C82 927.618 160.968 704.18 294.53 523.561C268.681 512.983 243.644 500.829 219.538 487.218Z" fill="white" />
                            </svg>

                            <svg className='h-12 w-12  absolute translate-y-1/2 translate-x-1/2' viewBox="0 0 975 975" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="487.5" cy="487.5" r="487.5" fill="white" />
                            </svg>


                        </div>

                        <div className='absolute right-24'>
                            <svg className='h-20 w-24' viewBox="0 0 814 2356" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H814V1956C814 2176.91 634.914 2356 414 2356H400C179.086 2356 0 2176.91 0 1956V0Z" fill="url(#paint0_linear_27_46)" />
                                <defs>
                                    <linearGradient id="paint0_linear_27_46" x1="407" y1="0" x2="407" y2="2356" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.15" />
                                        <stop offset="1" stopColor="white" stopOpacity="0.72" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>

                        <div className='absolute -right-4'>
                            <svg className='h-40 w-40' viewBox="0 0 814 2356" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H814V1956C814 2176.91 634.914 2356 414 2356H400C179.086 2356 0 2176.91 0 1956V0Z" fill="url(#paint0_linear_27_46)" />
                                <defs>
                                    <linearGradient id="paint0_linear_27_46" x1="407" y1="0" x2="407" y2="2356" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.15" />
                                        <stop offset="1" stopColor="white" stopOpacity="0.72" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>

                    </div>





                    <div className='bg-white md:col-span-1 col-span-2 h-full justify-center flex flex-col md:rounded-r-3xl md:rounded-y-3xl rounded-3xl '>
                        <div className='mx-auto '>
                            <img src={logo} alt='logo' className='w-64 h-14 p-2 rounded-md' />

                        </div>
                        <div className='mx-auto md:mb-6 mb-6 mt-2'>
                            <h5 className='text-lg  text-gray-400 '>Hello! Welcome back</h5>
                        </div>
                        <div className='w-9/12 max-w-sm mx-auto'>
                            <div>
                                <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-700 ">Email</label>
                                <div className="relative md:mb-6 mb-4">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    </div>
                                    <input type="text" id="input-group-1" className="border border-gray-300 text-gray-700 text-sm rounded-md  block w-full pl-10 p-2.5  outline-none bg-gray-50" placeholder="name@gmail.com" />
                                </div>

                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-700 ">Password</label>
                                <div className="flex relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <input type="password" className=" rounded-md bg-gray-50 border pl-10 text-gray-700  block flex-1 min-w-0 w-full text-sm outline-none border-gray-300 p-2.5  " placeholder="password" />
                                </div>
                                <div className='mt-4 flex flex-wrap justify-between'>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 ml-1 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                                        <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">Remember me</label>
                                    </div>
                                    <div>
                                        <h5 className='text-sm font-medium text-blue-500 '>Reset password!</h5>
                                    </div>

                                </div>
                                <div className='mt-4'>
                                    <button className="rounded-md px-10 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-500  bg-blue-500 text-white w-full">
                                        <span className="absolute w-full h-0 transition-all duration-500 origin-center rotate-45 -translate-x-28 bg-white top-1/2 group-hover:h-72 group-hover:-translate-y-32 ease"></span>
                                        <span className="relative text-white transition duration-300 group-hover:text-blue-500 group-hover:scale-105 ease">Log In</span>
                                    </button>
                                </div>
                                
                                <button className="rounded-md px-10 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium   text-gray-400 w-full flex justify-center gap-2">
                                    <span><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" 
                                    className='h-6 w-6'
                                    ><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg></span>
                                        Sign in with Google
                                    </button>
                            </div>
                            
                        </div>
                        
                    </div>


                </div>
            </section>
        </>
    )
}

export default Login