import React from "react";

const Login = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="items-center justify-center space-y-10 rounded-xl bg-gray-500 px-10 py-8 sm:space-y-20 sm:px-20 sm:py-16">
        <div className="cursor-pointer rounded-md border-none bg-orange-400 p-4 text-center font-bold capitalize text-white">
          sign in with google
        </div>
        <div className="cursor-pointer rounded-md border-none bg-black p-4 text-center font-bold capitalize text-white">
          sign in with github
        </div>
        <div className="cursor-pointer rounded-md border-none bg-blue-500 p-4 text-center font-bold capitalize text-white">
          sign in with facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
