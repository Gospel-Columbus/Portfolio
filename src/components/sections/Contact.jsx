import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_gk8q5d6";
  const TEMPLATE_ID = "template_3ijcgu4";
  const PUBLIC_KEY = "W-hVVvfnSYehRRVOB";

  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>

        <div className="w-full max-w-xl mx-auto">

          {/* Heading */}

          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              background: "linear-gradient(to right, #ef4444, #f87171)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textAlign: "center",
            }}
          >
            Contact Me
          </h2>

          {/* Form */}

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Name */}

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Name..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            {/* Email */}

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            {/* Message */}

            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Your Message..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white transition focus:outline-none focus:border-red-500 focus:bg-red-500/5"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            {/* Button */}

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              Message Me
            </button>

          </form>

        </div>

      </RevealOnScroll>
    </section>
  );
};