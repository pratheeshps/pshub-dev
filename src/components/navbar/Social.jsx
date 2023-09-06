import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
    return (
        <>
            <a
                href="https://www.linkedin.com/in/pratheeshpradeepkumars"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Linkedin"
            >
                <FaLinkedin
                    size={40}
                    className="hover:translate-y-1 duration-500"
                />
            </a>
            <a
                href="https://github.com/pratheeshps"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github"
            >
                <FaGithub
                    size={40}
                    className="hover:translate-y-1 duration-500"
                />
            </a>
            <a
                href="https://www.instagram.com/pshub.dev"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram"
            >
                <FaInstagram
                    size={40}
                    className="hover:translate-y-1 duration-500"
                />
            </a>
        </>
    );
};

export default Social;
