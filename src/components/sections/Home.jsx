import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 style={{fontSize: '3rem',fontWeight: 'bold',marginBottom: '1.5rem',background: 'linear-gradient(to right, #ef4444, #9333ea)',
            WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent',backgroundClip: 'text',lineHeight: '1.2'}}>
                Hello, I'm Gospel Columbus
</h1>
<p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
    A passionate and detail-oriented Frontend Developer who specializes in building responsive, user-friendly, and visually
    engaging web applications.
</p>
<div className="flex justify-center space-x-4">
    <a href="#projects" className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

    <a href="#contact" className="border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 
    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-red-500/10">
    Contact Me</a>


</div>
        </div>
    </RevealOnScroll>
    </section>
};