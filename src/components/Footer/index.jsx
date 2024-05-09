import { Icon } from "@iconify/react";

const topLinks = [
    {
        header: "menu",
        links: [
            { path: "#", title: "Home" },
            { path: "#", title: "About" },
            { path: "#", title: "Membership" },
        ],
    },
    {
        header: "socials",
        links: [
            { path: "#", title: "Home" },
            { path: "#", title: "About" },
            { path: "#", title: "Membership" },
        ],
    },
];
const bottomLinks = [
    { path: "#", title: "Terms" },
    { path: "#", title: "Privacy" },
];

function Footer() {
    return (
        <>
            <footer className="bg-[#0E1118] py-[80px] px-5 md:px-10">
                <div className="app-container flex flex-col gap-[100px]">
                    <div className="flex justify-between items-start gap-x-3 gap-y-8 flex-wrap">
                        <p className="text-white tracking-[-2%] text-[24px] font-light leading-[auto]">
                            Dive into a community buzzing with energy, <br className="hidden md:block" /> collaboration, and endless opportunities{" "}
                            <a href="#" className="underline">
                                Book now
                            </a>
                        </p>
                        <div className="flex items-start gap-x-6 gap-y-4">
                            {topLinks.map((section) => {
                                return (
                                    <div key={section.header} className="min-w-[140px] flex flex-col gap-3">
                                        <h6 className="text-white uppercase text-xs">{section.header}</h6>
                                        <ul className="flex flex-col gap-3">
                                            {section.links.map((link) => {
                                                return (
                                                    <li key={link.title} className="text-xs text-white">
                                                        <a href="#">{link.title}</a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <h1 className="text-[18.9vw] 2xl:text-[272px] text-white py-10 border-t border-b border-[#989898] leading-none">Freelancer</h1>
                        <div className="flex justify-between flex-wrap gap-3">
                            <ul className="flex gap-x-10 gap-y-4 w-fit">
                                {bottomLinks.map((link) => {
                                    return (
                                        <li key={link.title} className="text-white text-left block">
                                            <a href="#"> {link.title}</a>
                                        </li>
                                    );
                                })}
                            </ul>
                            <p className="text-white flex items-start gap-3">
                                <Icon icon="mdi:copyright" height={24} width={24} />
                                <span className="text-base leading-none pt-[5px]">{new Date().getFullYear()} Freelancer All rights reserved</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
