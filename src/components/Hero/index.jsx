import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navbar from "../Navbar";

function Hero() {
    useGSAP(() => {
        gsap.set(".hero", { autoAlpha: 1 });
        const timeline = gsap.timeline({ delay: 2.3, defaults: { duration: 0.75, ease: "power1" } });
        timeline
            .from(".create", { y: 200, x: 100, scale: 1.2, opacity: 0, rotate: 2 })
            .from(".innovate", { y: 250, x: 125, scale: 1.2, opacity: 0, rotate: 5 }, "<25%")
            .from(".connect", { y: 300, x: 150, scale: 1.2, opacity: 0, rotate: 10 }, "<25%");
    });

    return (
        <section className="hero opacity-0 invisible min-h-[768px] flex w-full items-center justify-center bg-[url('/images/hero.webp')] bg-no-repeat bg-top bg-cover relative">
            <Navbar />
            <div className="app-container w-full">
                <h1 className="flex flex-col text-[70px] leading-[72px] sm:text-[90px] sm:leading-[80px] lg:text-[128px] text-center lg:leading-[104px] text-white w-full max-w-[576px] mx-auto">
                    <p className="create -ml-[36px] leading-[inherit]">Create</p>
                    <p className="innovate leading-[inherit]">Innovate</p>
                    <p className="connect pl-10 lg:pl-[135px] leading-[inherit]">Connect</p>
                </h1>
            </div>
        </section>
    );
}

export default Hero;
