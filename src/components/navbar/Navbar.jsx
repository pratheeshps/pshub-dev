import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const NAV_BAR_LIST = [
    {
        title: "Home",
        name: "home",
    },
    {
        title: "About",
        name: "about",
    },
    {
        title: "Skills",
        name: "skills",
    },
    {
        title: "Experience",
        name: "experience",
    },
    {
        title: "Education",
        name: "education",
    },
    {
        title: "Contact",
        name: "contact",
    },
];

const Navbar = () => {
    const [navBtn, setNavBtn] = useState(false);

    const handleClick = () => {
        setNavBtn((prev) => !prev);
    };

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-10">
            <div className="flex justify-center items-center">
                <Link to="home" smooth={true} duration={500}>
                    <img src={logo} className="h-20 cursor-pointer" />
                </Link>
            </div>
            {/* Menu */}

            <ul className="hidden md:flex">
                {NAV_BAR_LIST.map(({ name, title }) => (
                    <li
                        key={name}
                        className="hover:text-gray-400 hover:duration-300"
                    >
                        <Link
                            activeClass="active"
                            to={name}
                            smooth={true}
                            duration={500}
                            offset={-35}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
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
                        : "absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center"
                }
            >
                {NAV_BAR_LIST.map(({ name, title }) => (
                    <li key={name} className="py-6 text-4xl">
                        <Link
                            onClick={handleClick}
                            activeClass="active"
                            to={name}
                            smooth={true}
                            duration={500}
                            offset={-35}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Social icons */}
            <div className="hidden"></div>
        </div>
    );
};

export default Navbar;
