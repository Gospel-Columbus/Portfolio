import { RevealOnScroll } from "../RevealOnScroll";

export const About = () =>{

    const frontendSkills =[
        "HTML",
        "CSS", 
        "JavaScript",
        "React" ];
    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
           <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 style={{fontSize: '1.875rem',fontWeight: 'bold',marginBottom: '2rem',background: 'linear-gradient(to right, #ef4444, #f87171)',
                WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',textAlign: 'center'}}>
                {" "}
                 About Me</h2>

                 <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">I transform creative design concepts into functional digital experiences, using modern web technologies.
                      With strong skills in HTML, CSS, and JavaScript, I develop clean, efficient, and maintainable code.
                      I have hands-on experience working with JS Library like React, which allows me to create fast, scalable,
                      and interactive web applications.</p>

                      <div className="grid grid-cols-1 md:grid-cols gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                        {tech}

                                    </span>
                                ))}
                            </div>

                        </div>
                      </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> HND (Technical Degree) in Electrical and Electronics Engineering</strong> -<br /> Akwa Ibom State Polytechnic 
                                (2020-2025)
                            </li>
                            <li>
                                Relevant Coursework: HTML5, CSS3, JavaScript (ES6), React, Responsive Web Design, REST API Integration, Git & GitHub.
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> 
                                    {" "}
                                    Frontend Developer - Personal Projects (2024 - Present){" "}</h4>
                                <p> Developed a Student Management CRUD application using React </p>
                                <p> Built a responsive FAQ Accordion interface with modern CSS styling</p>
                                <p> Created an Age Calculator with dynamic JavaScript logic</p>
                            </div>
                        </div>
                    </div>

                 </div>
        </div>
           </RevealOnScroll>
    </section>
};