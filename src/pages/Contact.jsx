import {
    AiOutlineMail,
    AiOutlineCodeSandbox,
    AiOutlineCodepen,
} from "react-icons/ai";
import Social from "../components/navbar/Social";

const Contact = () => {
    return (
        <div name="contact" className="py-12 bg-slate-900 text-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl inline border-b-4 border-cyan-400">
                        Contact
                    </p>
                </div>
                <div className="mt-12">
                    <blockquote>
                        <h3 className="text-xl">
                            If you want to say{" "}
                            <span className="text-cyan-400">Hello!</span> reach
                            me is on social media.
                        </h3>
                        <div className="mt-7 flex gap-4 ">
                            <Social>
                                <a
                                    href="mailto:pratheeshps.me@gmail.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Email"
                                    title="Email"
                                >
                                    <AiOutlineMail
                                        size={40}
                                        className="hover:translate-y-1 duration-500"
                                    />
                                </a>
                                <a
                                    href="https://codesandbox.io/u/pratheeshps.me"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Codesandbox"
                                    title="Codesandbox"
                                >
                                    <AiOutlineCodeSandbox
                                        size={40}
                                        className="hover:translate-y-1 duration-500"
                                    />
                                </a>
                                <a
                                    href="https://codepen.io/pratheeshps-me"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    aria-label="Codepen"
                                    title="Codepen"
                                >
                                    <AiOutlineCodepen
                                        size={40}
                                        className="hover:translate-y-1 duration-500"
                                    />
                                </a>
                            </Social>
                        </div>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Contact;
