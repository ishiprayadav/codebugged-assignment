import React, { useState } from 'react';
import Authentication from '../context/authentication';
import { Link } from 'react-router-dom';
import Camera from '../components/Camera';

const Login = () => {
  const [username, setUsername] = useState();
  const [detections, setDetection] = useState();

  const { login } = Authentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, detections: detections[0].detection });
  };

  return (
    <div className="flex justify-center items-center flex-col py-6">
      <h1 className="font-mono font-extrabold text-5xl font-medium leading-tight">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <Camera setDetection={setDetection} />
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          className="mt-1 block w-full py-2 pl-3 pr-6 text-base leading-6 border rounded-lg shadow-md focus:leading-6"
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-white text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
        >
          Login
        </button>

        <div className="flex items-center gap-2">
          <p className="font-mono">Don't have account? </p>
          <Link to="/signup" className="font-mono hover text-green-600 dark:text-green-500">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
