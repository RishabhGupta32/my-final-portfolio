import { useState } from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
      <header className="p-6 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">Rishabh Gupta</h1>
        <button onClick={() => setDark(!dark)} className="text-xl">
          {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-16">
        {/* About Me */}
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a passionate mathematics graduate student at IIT (ISM) Dhanbad, specializing in Mathematical Modeling. With a strong foundation in applied mathematics and computing, I am particularly interested in leveraging mathematical techniques to solve real-world problems in science, engineering, and data-driven domains.
            <br /><br />
            Beyond academics, I run an educational YouTube channel, creating engaging short videos on mathematical concepts. I am open to research collaborations, internships, and discussions on applied mathematics, modeling, and computation.
          </p>
        </section>

        {/* Social Links */}
        <section id="socials">
          <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
          <div className="flex gap-6 text-3xl">
            <a href="https://github.com/RishabhGupta32" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/rishabh-gupta-374480318" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@geniuspeopleyt" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </section>

        {/* Resume Download */}
        <section id="resume">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            📄 Download Resume
          </a>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6">
            <div className="p-4 border rounded-lg shadow">
              <h3 className="text-xl font-semibold">Spectral Graph Theory</h3>
              <p className="mt-2 text-sm">
                Studied properties of Laplacian matrices, eigenvalues of graphs, and implemented algorithms using adjacency and incidence matrices.
              </p>
              <a href="https://github.com/RishabhGupta32" className="text-blue-500 mt-2 inline-block">View Project</a>
            </div>

            {/* Add more project cards like this one */}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="flex flex-col gap-4 max-w-md"
          >
            <input type="text" name="name" placeholder="Your Name" required className="border rounded px-4 py-2" />
            <input type="email" name="email" placeholder="Your Email" required className="border rounded px-4 py-2" />
            <textarea name="message" rows="4" placeholder="Your Message" required className="border rounded px-4 py-2" />
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Send Message
            </button>
          </form>
          <p className="text-sm mt-4 flex items-center gap-2"><MdEmail /> 24ms0100@gmail.com</p>
        </section>
      </main>
    </div>
  );
}
