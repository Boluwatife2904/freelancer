import React, { ReactNode, useRef } from "react";
import { Icon } from "@iconify/react";
import { Sms, DocumentText, Scan, MessageQuestion, People } from "iconsax-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Service {
    id: string;
    icon: ReactNode;
    title: string;
    body: string;
}

const services: Service[] = [
    {
        id: "1",
        icon: <Icon icon="heroicons:rocket-launch" className="text-white" fontSize={24} />,
        title: "High-Speed Internet",
        body: "Experience reliable, lightning-fast internet for seamless productivity",
    },
    {
        id: "2",
        icon: <DocumentText className="text-white" />,
        title: "Meeting Rooms",
        body: "Bookable meeting rooms equipped with AV facilities for presentations and conferences.",
    },
    { id: "3", icon: <Scan className="text-white" />, title: "Printing and Scanning", body: "On-site printing, scanning, and copying services for documents." },
    {
        id: "4",
        icon: <MessageQuestion className="text-white" />,
        title: "Tech Support",
        body: "Basic IT support for troubleshooting connectivity or equipment issues",
    },
    {
        id: "5",
        icon: <People className="text-white" />,
        title: "Networking Opportunities",
        body: "Introductions to potential collaborators, mentors, or investors within the coworking community.",
    },
    {
        id: "6",
        icon: <Sms className="text-white" />,
        title: "Mail Handling",
        body: "Reception services for mail and packages, with secure storage for members.",
    },
];

function ServiceItem(props: { service: Service }) {
    const { service } = props;
    return (
        <>
            <li className="-tracking-[2%] flex flex-col gap-4 service-item">
                {service.icon}
                <h6 className="text-white text-xl leading-6">{service.title}</h6>
                <p className="text-[#DCDCDC] text-base leading-[19px] font-light">{service.body}</p>
            </li>
        </>
    );
}

function Services() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        if (sectionRef.current) {
            const animation = gsap.timeline({});

            animation
                .from(sectionRef.current?.getElementsByTagName("h5"), { y: 100 })
                .from(sectionRef.current?.getElementsByClassName("service-item"), { y: 250, opacity: 0, stagger: 0.1, duration: 0.67, ease: "power1.out" });

            ScrollTrigger.create({
                animation,
                trigger: sectionRef.current,
                start: "10% 90%",
                end: "bottom 95%",
                scrub: 1,
                toggleActions: "play none none none",
                once: true,
            });
        }
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#0E1118] py-20">
            <div className="app-container space-y-[50px] md:space-y-[80px] lg:space-y-[100px]">
                <h5 className="unlocking text-white font-medium text-5xl leading-[56px] md:text-6xl lg:text-[80px] lg:leading-[92px] max-w-[792px]">
                    Unlocking Potential, Together
                </h5>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {services.map((service) => (
                        <ServiceItem key={service.id} service={service} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Services;
