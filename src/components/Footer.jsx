import Logo from "./common/Logo";
import LogoSvg from "./common/LogoSvg";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-6 border-t border-primary/20 flex justify-center">
            <div className="w-full max-w-6xl px-8 sm:px-12 lg:px-16">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
                    <div className="text-secondary text-xs flex-col flex sm:flex-row items-center justify-center flex-wrap">
                        {/* <LogoSvg /> */}
                        <Logo className='max-w-12 mb-2 sm:mb-0 sm:max-w-10 sm:mr-4' />
                        © 2026 Le Lenh Nguyen • All rights reserved.
                    </div>
                    <p className="text-secondary text-xs flex items-center gap-1.5">
                        Crafted <FaHeart className='text-red-500' /> within Ha Noi, Viet Nam 🇻🇳.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer