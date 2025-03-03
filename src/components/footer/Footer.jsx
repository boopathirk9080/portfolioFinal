import { LinkedIn, GitHub, Email, Instagram } from "@mui/icons-material";

function Footer() {
    return (
        <footer className="bg-[#0a192f] text-gray-300 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                
                <p className="text-sm">&copy; {new Date().getFullYear()} Boopathi. All rights reserved.</p>

               
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a href="mailto:boopathi7476@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
                        <Email fontSize="small" />
                    </a>
                    <a href="https://github.com/boopathi7476" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
                        <GitHub fontSize="small" />
                    </a>
                    <a href="https://www.linkedin.com/in/boopathi7476/" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
                        <LinkedIn fontSize="small" />
                    </a>
                    <a href="https://www.instagram.com/boopathi7476" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition duration-300">
                        <Instagram fontSize="small" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
