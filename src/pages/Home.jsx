import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineHand } from "react-icons/hi";
import Social from "../components/navbar/Social";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-slate-900">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <div className="flex">
                    <div>
                        <p className="text-cyan-400 text-4xl font-bold mb-4">
                            Hi there,
                        </p>
                        <h1 className="text-6xl font-bold text-gray-50">
                            I'm Pratheesh P S
                        </h1>

                        <p className="text-gray-200 py-4 max-w-[700px] text-xl leading-9 font-semibold">
                            Frontend Developer specialized in creating modular
                            and scalable applications. Excited in learning new
                            technologies, love to code and design.
                        </p>
                        <div className="mt-3 flex gap-4 text-gray-50">
                            <Social />
                        </div>
                    </div>
                    {/* Barcode */}
                    {/* <div></div> */}
                </div>
                {/* <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
                        View Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
