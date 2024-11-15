import React from 'react';
import BackButton from '../components/BackButton';
import logo from '../assets/photos/logo_2.jpg';

const Login = () => {
  return (
<section className="h-screen">
    <BackButton />
    <div class="bg-blue flex justify-center items-center h-screen">
        <div class=" w-1/2 h-screen hidden lg:block">
            <img src={logo} alt="Placeholder Image" class="object-cover w-full h-full"></img>
        </div>

        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 class="text-2xl font-semibold mb-4">Login</h1>
            <form action="#" method="POST">

                <div class="mb-4">
                    <label for="username" class="block text-gray-600">Username</label>
                    <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></input>
                </div>

                <div class="mb-4">
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></input>
                </div>

                <div class="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" class="text-blue-500"></input>
                    <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
                </div>

                <div class="mb-6 text-blue-500">
                <a href="#" class="hover:underline">Forgot Password?</a>
                </div>
            </form>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>

    <div class="mt-6 text-blue-500 text-center">
        <a href="/Register" class="hover:underline">Sign up Here</a>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Login;