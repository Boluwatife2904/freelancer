/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

function AboutImages(props) {
    const { images, direction = "ltr" } = props;

    return (
        <Splide
            extensions={{ AutoScroll }}
            options={{
                type: "loop",
                gap: "16px",
                perPage: 1,
                arrows: false,
                pagination: false,
                direction,
                mediaQuery: "min",
                breakpoints: {
                    600: { gap: "16px", perPage: 2 },
                    800: { gap: "16px", perPage: 3 },
                },
            }}>
            {images.map((value, index) => (
                <SplideSlide key={index} className>
                    <img className="block mx-auto h-[340px] w-full min-w-[416px] shrink-0 object-cover" src={value} alt="" />
                </SplideSlide>
            ))}
        </Splide>
    );
}

function About() {
    return (
        <section className="bg-[#F7E9D1] py-[100px] space-y-[160px]">
            <div className="app-container">
                <div className="w-full flex justify-between items-start flex-wrap gap-5">
                    <h6 className="text-[#101828] text-5xl sm:text-6xl md:text-[92px] lg:text-[128px] lg:leading-[110px] font-medium -tracking-[2%] max-w-[692px]">
                        Where Productivity Meets Community
                    </h6>
                    <p className="text-[#475467] text-base leading-5 max-w-[364px]">
                        Step into our co-working sanctuary – where ambition ignites and creativity flourishes. With top-notch amenities and a vibrant community,
                        fuel your drive and feed your imagination. Welcome to the space where your dreams take flight.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <AboutImages images={["/images/1-1.webp", "/images/1-2.webp", "/images/1-3.webp", "/images/1-4.webp"]} />
                <AboutImages images={["/images/2-1.webp", "/images/2-2.webp", "/images/2-3.webp", "/images/2-4.webp"]} direction="rtl" />
            </div>
        </section>
    );
}

export default About;
