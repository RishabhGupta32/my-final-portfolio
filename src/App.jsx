import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <section className="bg-white py-16 shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Rishabh Gupta</h1>
          <p className="text-lg text-gray-600">Aspiring Educator | Math Enthusiast</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            I am currently pursuing my M.Sc. in Mathematics and Computing. Passionate about
            mathematical modeling, machine learning, and research-driven problem solving.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Spectral Graph Theory</h3>
              <p className="text-sm">Summer internship project on Laplacian spectra and eigenvalues of graphs.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">E-commerce React App</h3>
              <p className="text-sm">College project using React and MySQL to build a ticket booking system.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc pl-6">
            <li>Python, React.js, LaTeX</li>
            <li>Machine Learning, Data Analysis</li>
            <li>Graph Theory, Mathematical Modeling</li>
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="mt-4">
  <a
    href="/resume.pdf"
    download
    className="inline-block px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    📄 Download Resume
  </a>
</p>

<p className="mt-4">Email: yourname@email.com</p>

<p className="text-sm mt-2">
  Or reach out on <a href="#" className="text-blue-500 underline">LinkedIn</a>
</p>

        </div>
      </section>
    </div>
  );
}
