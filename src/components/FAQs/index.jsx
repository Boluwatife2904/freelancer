import Accordion from "../Accordion";

const faqs = [
    {
        id: "1",
        question: "What amenities are included in the coworking space",
        answer: "At Freelancer, we offer high-speed internet access, dedicated workstations, meeting rooms, printing and scanning facilities, kitchen and refreshment area, lounge and relaxation spaces, and on-site staff support.",
    },
    {
        id: "2",
        question: "Can I use the coworking space on weekends and after hours",
        answer: "Yes, our coworking space is available for use on weekends and after hours, offering you the flexibility to work whenever it suits your schedule best.",
    },
    {
        id: "3",
        question: "How do I book meeting rooms, and is there an additional cost",
        answer: "You can book meeting rooms easily through our online system or by contacting our staff directly. The cost depends on your membership plan, with some including free access and others requiring an additional fee.",
    },
    {
        id: "4",
        question: "Are there any networking or community events held at the coworking space",
        answer: "Yes, we regularly host networking and community events at our coworking space. These events provide opportunities for members to connect, collaborate, and grow their professional networks.",
    },
    {
        id: "5",
        question: "Can I bring guests or clients to the coworking space",
        answer: "Absolutely! You're welcome to bring guests or clients to our coworking space. Just make sure to check our guest policy for any specific guidelines or restrictions.",
    },
    {
        id: "6",
        question: "Is parking available at the coworking space",
        answer: "Yes, parking is available at our coworking space for the convenience of our members and visitors.",
    },
];

function FAQs() {
    return (
        <section className="bg-[#FE5824] pt-[80px] pb-[92px]">
            <div className="flex flex-col gap-6 md:gap-16 lg:gap-[76px]">
                <div className="app-container">
                    <h1 className="text-3xl sm:text-[64px] xl:text-[128px] text-white font-medium leading-none">FAQ’S</h1>
                </div>
                <Accordion faqs={faqs} />
            </div>
        </section>
    );
}

export default FAQs;
