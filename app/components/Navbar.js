import React from 'react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-mono font-bold">SignBuddy</h1>
        {user ? (
          <button
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            onClick={onLogout}
          >
            Logout
          </button>
        ) : (
            <button
                className="text-white bg-slate-500 px-4 py-2 rounded hover:bg-slate-600"
                // onClick={onLogout}
            >
                Login
            </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;