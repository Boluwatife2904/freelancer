import Navbar from "../Navbar";

function Hero() {
    return (
        <section className="min-h-[768px] flex w-full items-center justify-center bg-[url('/images/hero.webp')] bg-no-repeat bg-top bg-cover relative">
            <Navbar />
            <div className="app-container w-full">
                <h1 className="flex flex-col text-[70px] leading-[72px] sm:text-[90px] sm:leading-[80px] lg:text-[128px] text-center lg:leading-[124px] text-white w-full max-w-[576px] mx-auto">
                    <p className="pl-[42px] leading-[inherit]">Create</p>
                    <p className="leading-[inherit]">Innovate</p>
                    <p className="pl-10 lg:pl-[105px] leading-[inherit]">Connect</p>
                </h1>
            </div>
        </section>
    );
}

export default Hero;
