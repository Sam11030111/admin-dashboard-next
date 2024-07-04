import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="bg-[var(--bgSoft)] p-[50px] rounded-[10px] w-[500px] h-[500px] flex flex-col items-center justify-center gap-[30px]">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="w-full p-[20px] border-2 border-[#2e374a] rounded-[5px] bg-[var(--bg)] text-[var(--text)]"
        />
        <button className="w-full p-[20px] bg-teal-500 text-[var(--text)] border-none cursor-pointer rounded-[5px]">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
