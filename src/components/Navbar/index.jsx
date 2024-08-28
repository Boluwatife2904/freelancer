import Logo from "../../assets/svgs/logo-small.svg?react";

const navLinks = [
    { path: "", title: "Home" },
    { path: "", title: "About " },
    { path: "", title: "Membership" },
];

function Navbar() {
    return (
        <nav className="absolute left-0 top-0 w-full  py-5">
            <div className="app-container flex items-center justify-between gap-10">
                <a href="#" className="flex items-center gap-3">
                    <Logo />
                    <span className="text-white font-medium text-base lg:text-lg">Freelancer</span>
                </a>
                <div className="hidden sm:flex items-center justify-between w-full max-w-[500px] md:max-w-[756px]">
                    <ul className="flex items-center gap-x-10 md:gap-x-[60px]">
                        {navLinks.map((link) => (
                            <li key={link.title} className="text-white text-base font-medium leading-5">
                                <a href="#">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-[#FE5824] text-white py-[10px] px-4 text-base lg:text-lg font-medium rounded-lg">Contact Us</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
