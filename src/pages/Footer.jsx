import { AiFillHeart } from "react-icons/ai";

function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-16 border-t border-gray-800 bg-slate-900 text-gray-50 text-xs md:text-lg">
            © Copyright {new Date().getFullYear()}. With
            <AiFillHeart className="ml-2 mr-2 text-red-600" />
            <span className="text-cyan-400">@thepshub</span>
        </footer>
    );
}

export default Footer;
