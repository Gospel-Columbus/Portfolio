import { RevealOnScroll } from "../RevealOnScroll";


export const Projects = () =>{
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 style={{fontSize: '1.875rem',fontWeight: 'bold',marginBottom: '2rem',background: 'linear-gradient(to right, #ef4444, #f87171)',
                WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',textAlign: 'center'}}>
  
                {" "}
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Age Calculator App</h3>
                    <p className="text-gray-400 mb-4">
                        Built a precision date calculator that determines the exact age in years, months, and days based on user-submitted birth dates
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript", "React"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">FAQ Accordion</h3>
                    <p className="text-gray-400 mb-4">
                        Built a clean, interactive FAQ section that Hide/Show the answer to a question when the question is clicked
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript", "React"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
                    <p className="text-gray-400 mb-4">
                        Developed a functional e-commerce website with cart logic and responsive design
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript", "React"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Student List UI</h3>
                    <p className="text-gray-400 mb-4">
                        Develop a responsive Student List UI with complete CRUD functionality, implementing dyanmic data rendering for efficient student record management
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript", "React"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Contact Form</h3>
                    <p className="text-gray-400 mb-4">
                        Built a Contact Form that Completes the form and show a success toast message upon successful submission
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS", "JavaScript", "React"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Receipe Page</h3>
                    <p className="text-gray-400 mb-4">
                        Developed a responsive Recipe Page UI from a design specification, implementing semantic HTML structure and modern CSS
                        styling to achieve a clean and visually accurate layout.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://gospel-columbus.github.io/Recipe-Page/" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Bento Grid </h3>
                    <p className="text-gray-400 mb-4">
                        Develped a complex, responsive Bento Grid interface using CSS Grid and modern layout techniques, demonstrating strong 
                        proficiency in structured UI design and responsive web applications
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://gospel-columbus.github.io/Bento-grid-main/" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Social links Profile</h3>
                    <p className="text-gray-400 mb-4">
                        Built a pixel-perfect Social Links Profile interface from design specifications, demonstrating strong mastery of Flexbox,
                        spacing consistency, and responsive UI development
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://gospel-columbus.github.io/Social-Link-Profile/" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Product List with Cart</h3>
                    <p className="text-gray-400 mb-4">
                        Developed a responsive Product List with Cart application featuring dynamic cart updates
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://gospel-columbus.github.io/Product-List-Cart/" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Column Preview Card</h3>
                    <p className="text-gray-400 mb-4">
                        Built a fully responsive Column Preview Card interface with structured layout, consistent spacing, and interactive styling,
                        demonstrating strong foundational CSS and UI design skills
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML", "CSS"].map((tech,key) => (
                            <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                       hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                                        {tech}

                                    </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://gospel-columbus.github.io/Column-Preview-Card/" className="text-red-400 hover:text-red-300 transition-colors my-4">
                            {" "} 
                            View Project {" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
           </RevealOnScroll>
    </section>
};