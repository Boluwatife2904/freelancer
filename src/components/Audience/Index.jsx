import { Monitor, User, Book1, Profile2User } from "iconsax-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const audiences = [
    { id: "1", icon: <User className="size-4 lg:size-6" />, title: "Freelancers", position: "left-[17px] -top-[18px]" },
    { id: "2", icon: <Book1 className="size-4 lg:size-6" />, title: "Students", position: "right-1 -top-[11px]" },
    { id: "3", icon: <Monitor className="size-4 lg:size-6" />, title: "Remote workers", position: "-bottom-7 lg:-bottom-1 left-3 lg:-left-[74px]" },
    { id: "4", icon: <Profile2User className="size-4 lg:size-6" />, title: "Corporate employees", position: "lg:-bottom-[14px] lg:-right-[139px]" },
];

function Audience() {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".audience",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                pin: ".audience",
                toggleActions: "play none none none",
            },
        });
        timeline
            .from(".audience-title", { y: 100 })
            .from(".audience-tag-1", { y: 380 }, 0)
            .from(".audience-tag-2", { y: 490 }, 0)
            .from(".audience-tag-3", { y: 600 }, 0)
            .from(".audience-tag-4", { y: 800 }, 0);
    }, []);

    return (
        <section className="audience bg-[#FE5824] min-h-[100dvh] flex items-center justify-center text-center">
            <div className="max-w-[516px] lg:max-w-[858px] mx-auto px-5 relative">
                <h6 className="text-white audience-title font-medium text-[46px] leading-[54px] sm:text-[52px] md:text-[60px] lg:text-[120px] lg:leading-[106px] -tracking-[2%]">
                    Open doors, diverse minds: welcomes all
                </h6>

                {audiences.map((audience) => (
                    <span
                        key={audience.id}
                        className={`bg-black audience-tag-${audience.id} text-white p-2 rounded-lg inline-flex items-center gap-2 text-sm md:text-base lg:text-xl font-normal leading-6 absolute ${audience.position}`}>
                        {audience.icon}
                        {audience.title}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Audience;
