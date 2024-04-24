import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import img from "../assets/loginpic.44fccc2a0c0fdcaea0d3.jpg";

export function Signin() {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('qwerty123');
  const [error, setError] = useState('');

  const nav = useNavigate();

  const handleLogin = () => {
    // Custom validation for email and password
    if (!email) {
      setError('Please enter your email.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    const data = JSON.stringify({
      email: email,
      password: password
    });

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login',
      headers: { 
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c', 
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        toast.success("Successfully Login" ,{position:'top-right'})
        setTimeout(() => {
          nav("/dashbord/id", { replace: true }); 
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setError('Invalid email or password.'); // Display error for incorrect credentials
      });
  };

  return (
    <section>
      <Toaster/>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                {error && <div className="text-red-500">{error}</div>}
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#65a30d] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#3f6212]"
                    onClick={handleLogin}
                  >
                    Login here 
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img className="mx-auto h-screen w-full  rounded-md object-cover" src={img} alt="" />
        </div>
      </div>
    </section>
  );
}
