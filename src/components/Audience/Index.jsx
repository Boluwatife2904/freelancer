import { Monitor, User, Book1, Profile2User } from "iconsax-react";

const audiences = [
    { id: "1", icon: <User className="size-4 lg:size-6" />, title: "Freelancers", position: "left-[17px] -top-[18px]" },
    { id: "2", icon: <Book1 className="size-4 lg:size-6" />, title: "Students", position: "right-1 -top-[11px]" },
    { id: "3", icon: <Monitor className="size-4 lg:size-6" />, title: "Remote workers", position: "-bottom-7 lg:-bottom-1 left-0 lg:-left-[74px]" },
    { id: "4", icon: <Profile2User className="size-4 lg:size-6" />, title: "Corporate employees", position: "lg:-bottom-[14px] lg:-right-[139px]" },
];

function Audience() {
    return (
        <section className="bg-[#FE5824] flex items-center justify-center text-center py-[225px] overflow-hidden">
            <div className="max-w-[516px] lg:max-w-[858px] mx-auto px-5 relative">
                <h6 className="text-white font-medium text-[46px] leading-[54px] sm:text-[52px] md:text-[60px] lg:text-[120px] lg:leading-[106px] -tracking-[2%]">
                    Open doors, diverse minds: welcomes all
                </h6>

                {audiences.map((audience) => (
                    <span
                        key={audience.id}
                        className={`bg-black text-white p-2 rounded-lg inline-flex items-center gap-2 text-sm md:text-base lg:text-xl font-normal leading-6 absolute ${audience.position}`}>
                        {audience.icon}
                        {audience.title}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Audience;
