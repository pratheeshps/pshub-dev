import { useEffect, useState } from "react";

export default function Experience() {
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch(`/data/experiencesData.json`)
            .then((res) => res.json())
            .then((data) => {
                setExperiences(data);
            });
    }, []);
    return (
        <div name="experience" className="py-12 bg-slate-900 text-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl inline border-b-4 border-cyan-400">
                        Experience
                    </p>
                </div>

                <div className="mt-10">
                    <ul className="p-2 sm:p-5 xl:p-6">
                        {experiences.map((experience) => (
                            <li key={experience.id}>
                                <article>
                                    <a
                                        href={experience.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-gray-800 hover:duration-500"
                                    >
                                        <h3 className="font-bold text-xl text-gray-50 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-0 ml-9 md:ml-0">
                                            {experience.position}
                                            <span className="block text-gray-300 text-base font-normal mb-2">
                                                {experience.company}
                                            </span>
                                        </h3>
                                        <time
                                            dateTime="2021-06-17T19:00:00.000Z"
                                            className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                                        >
                                            <svg
                                                viewBox="0 0 12 12"
                                                className={`w-3 h-3 mr-6 overflow-visible ${
                                                    experience.current
                                                        ? "text-cyan-400"
                                                        : ""
                                                }`}
                                            >
                                                <circle
                                                    cx="6"
                                                    cy="6"
                                                    r="6"
                                                    fill="currentColor"
                                                ></circle>

                                                <circle
                                                    cx="6"
                                                    cy="6"
                                                    r="11"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                ></circle>

                                                <path
                                                    d="M 6 18 V 500"
                                                    fill="none"
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    className="text-gray-200"
                                                ></path>
                                            </svg>
                                            {experience.startDate} - {experience.endDate ? experience.endDate: "Current"}
                                        </time>
                                        <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-lg">
                                            {experience.description}
                                        </p>
                                    </a>
                                </article>
                            </li>
                        ))}
                        {/* <li>
                            <article>
                                <a
                                    href="https://www.ust.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-gray-800 hover:duration-500"
                                >
                                    <h3 className="font-bold text-xl text-gray-50 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-0 ml-9 md:ml-0">
                                        Lead Software Engineer
                                        <span className="block text-gray-300 text-base font-normal mb-2">
                                            UST, India
                                        </span>
                                    </h3>
                                    <time
                                        dateTime="2021-06-17T19:00:00.000Z"
                                        className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                                    >
                                        <svg
                                            viewBox="0 0 12 12"
                                            className="w-3 h-3 mr-6 overflow-visible text-cyan-400"
                                        >
                                            <circle
                                                cx="6"
                                                cy="6"
                                                r="6"
                                                fill="currentColor"
                                            ></circle>

                                            <circle
                                                cx="6"
                                                cy="6"
                                                r="11"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            ></circle>

                                            <path
                                                d="M 6 18 V 500"
                                                fill="none"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="text-gray-200"
                                            ></path>
                                        </svg>
                                        January 2023 - Current
                                    </time>
                                    <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-lg">
                                        Working in a Banking product by
                                        Modernizing the the frontend appication
                                        of the product.
                                    </p>
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a
                                    href="https://www.appviewx.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-gray-800 hover:duration-500"
                                >
                                    <h3 className="font-bold text-xl text-gray-50 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-0 ml-9 md:ml-0">
                                        Senior Software Engineer, Frontend
                                        <span className="block text-gray-300 text-base font-normal mb-2">
                                            AppViewX, India
                                        </span>
                                    </h3>
                                    <time
                                        dateTime="2021-06-17T19:00:00.000Z"
                                        className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                                    >
                                        <svg
                                            viewBox="0 0 12 12"
                                            className="w-3 h-3 mr-6 overflow-visible"
                                        >
                                            <circle
                                                cx="6"
                                                cy="6"
                                                r="6"
                                                fill="currentColor"
                                            ></circle>

                                            <circle
                                                cx="6"
                                                cy="6"
                                                r="11"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            ></circle>

                                            <path
                                                d="M 6 18 V 500"
                                                fill="none"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="text-gray-200"
                                            ></path>
                                        </svg>
                                        December 2014 - January 2023
                                    </time>
                                    <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-lg">
                                        Working in a multi-disciplined team by
                                        developing and maintaining the frontend
                                        functionality of the product.
                                    </p>
                                </a>
                            </article>
                        </li>
                        <li>
                            <article>
                                <a
                                    href="https://www.amrita.edu/center/cyber-security/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-gray-800 hover:duration-500"
                                >
                                    <h3 className="font-bold text-gray-50 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0 text-xl">
                                        UI/UX Developer
                                        <span className="block text-gray-300 text-base font-normal mb-2">
                                            Amrita Center for Cybersecurity
                                            Systems and Networks, India
                                        </span>
                                    </h3>
                                    <time
                                        dateTime="2021-04-05T19:00:00.000Z"
                                        className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                                    >
                                        <svg
                                            viewBox="0 0 12 12"
                                            className="w-3 h-3 mr-6 overflow-visible text-gray-300"
                                        >
                                            <circle
                                                cx="6"
                                                cy="6"
                                                r="6"
                                                fill="currentColor"
                                            ></circle>

                                            <circle
                                                cx="6"
                                                cy="6"
                                                r="11"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            ></circle>

                                            <path
                                                d="M 6 -6 V -30"
                                                fill="none"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="text-gray-200"
                                            ></path>

                                            <path
                                                d="M 6 18 V 500"
                                                fill="none"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="text-gray-200"
                                            ></path>
                                        </svg>
                                        July 2013 – November 2014
                                    </time>
                                    <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0 text-lg">
                                        Created and managed Secure scalable and
                                        interoperable Internet of Things, AD2
                                        Visual Reporting Tool and Amrita Big
                                        Data Framework
                                    </p>
                                </a>
                            </article>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
