import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                        Projects
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Age Calculator App */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Age Calculator App</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Built a precision date calculator that determines the exact age in years, months, and days based on user-submitted birth dates
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS", "JavaScript", "React"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">FAQ Accordion</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Built a clean, interactive FAQ section that Hide/Show the answer to a question when the question is clicked
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS", "JavaScript", "React"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* E-Commerce Website */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">E-Commerce Website</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Developed a functional e-commerce website with cart logic and responsive design
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS", "JavaScript", "React"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Student List UI */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Student List UI</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Develop a responsive Student List UI with complete CRUD functionality, implementing dynamic data rendering for efficient student record management
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS", "JavaScript", "React"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Contact Form</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Built a Contact Form that completes the form and shows a success toast message upon successful submission
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS", "JavaScript", "React"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Recipe Page */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Recipe Page</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Developed a responsive Recipe Page UI from a design specification, implementing semantic HTML structure and modern CSS styling
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://gospel-columbus.github.io/Recipe-Page/" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Bento Grid */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Bento Grid</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Developed a complex, responsive Bento Grid interface using CSS Grid and modern layout techniques
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://gospel-columbus.github.io/Bento-grid-main/" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Social Links Profile */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Social Links Profile</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Built a pixel-perfect Social Links Profile interface from design specifications
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://gospel-columbus.github.io/Social-Link-Profile/" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Product List with Cart */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Product List with Cart</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Developed a responsive Product List with Cart application featuring dynamic cart updates
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://gospel-columbus.github.io/Product-List-Cart/" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Column Preview Card */}
                        <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition-all duration-300">
                            <h3 className="text-lg sm:text-xl font-bold mb-2">Column Preview Card</h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                                Built a fully responsive Column Preview Card interface with structured layout
                            </p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {["HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-red-500/20 transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <a href="https://gospel-columbus.github.io/Column-Preview-Card/" className="text-red-400 hover:text-red-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1">
                                    View Project <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};