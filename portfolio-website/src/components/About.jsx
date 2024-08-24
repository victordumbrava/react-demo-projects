import aboutImg from "../assets/images/about.png"

export default function About() {
    const info = [
        { text: "Years of Experience", count: 5 },
        { text: "Completed projects", count: 100 },
        { text: "Companies work", count: 3 },
    ];
    return (
        <section id="about" className="py-10 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="p-2">
                        <div className="text-gray-300 my-3 ">
                            <p className="text-justify leading-7 w-11/12 mx-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque erat id lorem rutrum luctus. Nunc sollicitudin vulputate tellus, nec iaculis eros. Praesent vehicula tincidunt massa, eu posuere massa mollis non. Sed aliquam risus a porttitor mattis. Quisque eleifend maximus magna ac convallis. Phasellus eu mi dui. Praesent vehicula iaculis erat eget pulvinar.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {
                                    info?.map(item => (
                                        <div key={item.text}>
                                            <h3 className="md:text-4xl text-2xl font-semibold text-white">
                                                {item.count}
                                                <span className="text-cyan-600">+</span>
                                            </h3>
                                            <span className="md:text-base text-xs">{item.text}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <br />
                            <br />
                            <a href="#" download>
                                <button className="btn-primary">
                                    Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                            <img src={aboutImg} alt="About" className="w-full object-cover bg-cyan-600 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}