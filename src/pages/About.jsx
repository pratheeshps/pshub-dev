import profile from "../assets/pratheeshps.jpg";
export default function About() {
    return (
        <div name="about" className="py-12 bg-slate-900 text-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl inline border-b-4 border-cyan-400">
                        About Me
                    </p>
                </div>

                <figure className="mt-10  rounded-xl p-8 md:p-0">
                    <div className="md:p-8  md:pb-12 text-center md:text-left space-y-4">
                        <blockquote>
                            <div className="flex flex-col md:flex-row  items-start md:items-end">
                                <p className="ml-0 mt-5 mb-10 md:mt-0 text-xl leading-9 tracking-wide">
                                    Hi, I'm Pratheesh PS, Lead Software Engineer
                                    at UST and hometown in Thiruvananthapuram,
                                    Kerala, India. I love to learn and develop
                                    applications.
                                </p>
                            </div>
                            <img
                                className="w-[250px] md:h-auto rounded-xl float-left shadow-md p-2 mr-4 mb-5 -rotate-6 hover:scale-105 transition delay-150 duration-300 ease-in-out"
                                src={profile}
                                alt="Pratheesh P S"
                            />
                            <p className="text-xl text-left mt-5 md:mt-0 text-gray-50 tracking-wide leading-9">
                                How do I get into front end tech? Starting with
                                a college project, a big data visualization tool
                                using Angular and JQuery. This has been a super
                                fun experience for me. I started a career in a
                                research organization where my foundation as a
                                front end developer become strong. Then the
                                companies I worked and currently working gave me
                                many challenging opportunities to gain more
                                knowledge and commercial exposure with up to
                                date technologies in development stack. First,
                                there was JavaScript, HTML, and CSS, now knowing
                                Core JavaScript, React js, Nodejs and many other
                                JavaScript libraries.
                            </p>
                        </blockquote>
                    </div>
                </figure>
            </div>
        </div>
    );
}
