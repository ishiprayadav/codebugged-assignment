import React from 'react';
import { useLogout } from '../context/useLogout';

const Home = () => {
  const { logout } = useLogout();
  return (
    <div>
      <div className="w-full bg-[#873068] p-4 flex justify-end">

        <button
          onClick={() => logout()}
          className="bg-white p-2 rounded-sm px-6"
        >
          Logout
        </button>
      </div>

      <div className="font-mono w-full h-screen flex justify-center items-center text-4xl font-bold">
        Face Verification Successful, Welcome to the Home Page!
      </div>
    </div>
  );
};

export default Home;
