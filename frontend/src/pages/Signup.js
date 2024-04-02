import React, { useState } from 'react';
import Authentication from '../context/authentication';
import { Link } from 'react-router-dom';
import Camera from '../components/Camera';

const Signup = () => {
  const [username, setUsername] = useState();
  const [detections, setDetections] = useState(null);

  const { signup } = Authentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && detections) {
      await signup({ username, detections: detections[0].detection });
    } else {
      console.log('All field required');
    }
  };

  return (
    <div className="flex justify-center items-center flex-col py-6">
      <h1 className="font-mono font-extrabold text-5xl font-medium leading-tight">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <Camera setDetection={setDetections} />
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
          className="inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Signup
        </button>

        <div className="flex items-center gap-2 font-mono">
          <p>Already have an account? </p>
          <Link to="/login" className="font-mono hover text-blue-600 dark:text-blue-500">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
