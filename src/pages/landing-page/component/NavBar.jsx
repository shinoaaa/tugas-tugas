import { useState } from "react";

const NavBar = () => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Entered:", value);
      setValue("");
    }
  };

  return (
    <div className="fixed z-50 w-full">
      <div className="h-37 flex bg-gradient-to-b from-white via-white/96 to-transparent justify-between pl-12 pr-20 pt-5">
        <input
          id="cool"
          className="xl:w-175 lg:w-100 md:w-70 h-9 outline-1 outline-[#529AEA] rounded-full flex items-center pl-7 text-sm text-[#529aea]"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <ul id="cool" className="flex text-[#529aea] text-lg h-9 justify-center items-center xl:gap-17 lg:gap-12 md:gap-7">
          <li className="navbar1">Product</li>
          <li className="navbar1">Demo</li>
          <li className="navbar1">FAQ</li>
          <li className="navbar1 rounded-full px-7 py-1 bg-[#DE653D] text-white">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;