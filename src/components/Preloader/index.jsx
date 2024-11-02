import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Logo from "../../assets/svgs/logo-large.svg?react";

const texts = ["F", "r", "e", "e", "l", "a", "n", "c", "e", "r"];

function Preloader() {
    useGSAP(() => {
        const timeline = gsap.timeline({
            onStart: () => {
                document.body.classList.add("overflow-hidden");
            },
            onComplete: () => {
                document.body.classList.remove("overflow-hidden");
                gsap.set(".preloader", { display: "none" });
            },
        });
        timeline
            .from(".logo", { y: 80, opacity: 0 })
            .from(".text span", { y: 100, opacity: 0, stagger: 0.04 }, "<25%")
            .to(".logo", { y: -30, opacity: 0 }, "+=0.05")
            .to(".text span", { y: -40, opacity: 0, stagger: 0.05 }, "<=10%")
            .to(".preloader", { y: "-100vh" }, "+=0.05", "<");
    }, []);

    return (
        <div className="preloader  h-screen w-screen flex items-center justify-center bg-black fixed left-0 top-0 z-10">
            <div className=" flex items-center gap-4">
                <Logo className="logo" />
                <p className="text-white text-[40px] font-medium text">
                    {texts.map((letter, index) => (
                        <span className="inline-block" key={index}>
                            {letter}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}

export default Preloader;
