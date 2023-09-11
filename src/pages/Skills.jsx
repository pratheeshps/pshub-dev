import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch(`/data/skillsData.json`)
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
            });
    }, []);

    return (
        <div name="skills" className="py-12 bg-slate-900 text-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <p className="mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl inline border-b-4 border-cyan-400">
                        Skills
                    </p>
                </div>
                <div className="mt-12 text-4xl">
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 text-center">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="flex flex-col items-center justify-center h-30 md:h-30 py-4 shadow-md ring-1 ring-gray-50 ring-opacity-5 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 bg-slate-800"
                            >
                                <div className="text-xl text-gray-50 font-medium break-all tracking-wider leading-9">
                                    {skill}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
