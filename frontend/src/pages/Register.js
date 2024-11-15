import React from 'react';
import BackButton from '../components/BackButton';
import logo from '../assets/photos/logo_2.jpg';

const Register = () => {
    return (
        <section className="h-screen">
        <BackButton />
        <div class="bg-gray-100 flex justify-center items-center h-screen">
            <div class="w-1/2 h-screen hidden lg:block">
                <img src={logo} alt="Placeholder Image" class="object-cover w-full h-full"></img>
            </div>

            <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 class="text-2xl font-semibold mb-4">Register</h1>
                <form action="#" method="POST">

                    <div class="mb-4">
                        <label for="fname" class="block text-gray-600">First Name</label>
                        <input type="text" id="fname" name="fname" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></input>
                    </div>

                    <div class="mb-4">
                        <label for="fname" class="block text-gray-600">Last Name</label>
                        <input type="text" id="lname" name="lname" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></input>
                    </div>

                    <div class="mb-4">
                        <label for="username" class="block text-gray-600">Username</label>
                        <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></input>
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></input>
                    </div>

                    <div class="mb-4">
                        <label for="cpassword" class="block text-gray-600">Confirm Password</label>
                        <input type="password" id="confirm_password" name="confirm_password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off"></input>
                    </div>
                </form>

                    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register</button>

                    <div class="mt-6 text-blue-500 text-center">
                        <a href="/Login" class="hover:underline">Login Here</a>
                    </div>
            </div>
        </div>
    </section>
    );
};

export default Register;