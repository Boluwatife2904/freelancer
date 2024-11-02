import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const team = [
    { key: "1", image: "/images/john.png", name: "John Bakers", role: "Sales Manager" },
    { key: "2", image: "/images/henry.png", name: "Henry Arthur", role: "General Manager" },
    { key: "3", image: "/images/louise.png", name: "Louise Marvin", role: "CEO" },
    { key: "4", image: "/images/bode.png", name: "Bode Akinwunmi", role: "Social Media Manager" },
    { key: "5", image: "/images/nguyen.png", name: "Nguyen Shane", role: "Photographer" },
];

function Team() {
    return (
        <>
            <section className="bg-[#F7E9D1] py-[80px] flex flex-col items-start justify-start gap-[60px] md:gap-[100px] overflow-hidden">
                <div className="app-container">
                    <h1 className="flex flex-col font-medium text-[40px] leading-[100%] sm:text-[48px] md:text-[64px] lg:text-[80px] tracking-[-2%] text-[#101828]">
                        <span>Brains Behind</span>
                        <span>Our Vision.</span>
                    </h1>
                </div>
                <div>
                    <Splide
                        extensions={{ AutoScroll }}
                        options={{
                            type: "loop",
                            gap: "24px",
                            perPage: 20,
                            arrows: false,
                            pagination: false,
                            autoScroll: {
                                pauseOnHover: false,
                            },
                        }}>
                        {team.map((member) => {
                            return (
                                <SplideSlide key={member.key}>
                                    <div className="flex flex-col gap-3">
                                        <img className="h-auto w-full max-w-full max-h-full" src={member.image} alt={`${member.name} profile image`} />
                                        <div className="flex flex-col text-base tracking-[-2%]">
                                            <h6 className="text-[#101828] font-medium">{member.name}</h6>
                                            <p className="text-[#475467]">{member.role}</p>
                                        </div>
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            </section>
        </>
    );
}

export default Team;
