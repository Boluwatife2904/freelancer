function Testimonial() {
    return (
        <section className="min-h-[500px] lg:min-h-[768px] flex items-end bg-cover bg-top bg-no-repeat bg-[url('/images/testimonial.webp')]">
            <div className="app-container">
                <div className="max-w-[757px] text-2xl md:text-3xl lg:text-[36px] -tracking-[2%] md:leading-[44px] pb-20 space-y-8 text-white">
                    <p className="font-light">
                        “The environment at Freelancer is super inclusive. I love coming here knowing i’m going to have a fun, productive day”
                    </p>
                    <h5 className="font-medium">Courtney Henry</h5>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
