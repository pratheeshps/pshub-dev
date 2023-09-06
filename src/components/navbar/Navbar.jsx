import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Navbar = () => {
    const [navBtn, setNavBtn] = useState(false);

    const handleClick = () => {
        setNavBtn((prev) => !prev);
    };

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-10">
            <div className="flex justify-center items-center">
                <img src={logo} className="h-20" />
            </div>
            {/* Menu */}

            <ul className="hidden md:flex">
                <li className="hover:text-gray-400 hover:duration-300">Home</li>
                <li className="hover:text-gray-400 hover:duration-300">
                    About
                </li>
                <li className="hover:text-gray-400 hover:duration-300">
                    Experience
                </li>
                <li className="hover:text-gray-400 hover:duration-300">
                    Skills
                </li>
                <li className="hover:text-gray-400 hover:duration-300">
                    Contact
                </li>
            </ul>

            {/* Hamburger */}
            <div
                className="md:hidden z-10 cursor-pointer"
                onClick={handleClick}
            >
                {!navBtn ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
                className={
                    !navBtn
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Experience</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>
            {/* Social icons */}
            <div className="hidden"></div>
        </div>
    );
};

export default Navbar;
