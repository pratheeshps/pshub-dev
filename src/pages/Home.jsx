import Social from "../components/navbar/Social";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-slate-900 text-gray-50">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <div className="flex">
                    <div>
                        <p className="text-cyan-400 text-4xl font-bold mb-4">
                            Hi there,
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold">
                            I'm Pratheesh P S
                        </h1>

                        <p className="text-gray-200 py-4 max-w-[700px] text-xl leading-9 font-semibold">
                            Frontend Developer specialized in creating modular
                            and scalable applications. Excited in learning new
                            technologies, love to code and design.
                        </p>

                        <div className="mt-3 flex gap-4 ">
                            <Social />
                            {/* <button className="border border-gray-600 rounded-sm px-5 py-1 bg-slate-800 hover:bg-slate-700 hover:duration-500">
                                Resume
                            </button> */}
                        </div>
                    </div>
                    {/* Barcode */}
                    {/* <div></div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
