{/* ======= Connect Section ======= */}
<section className="my-12 text-center">
  <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
  <div className="flex justify-center space-x-4 text-2xl">
    <a href="https://github.com/RishabhGupta32" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/rishabh-gupta-374480318" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://www.youtube.com/@geniuspeopleyt" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-youtube"></i>
    </a>
  </div>
</section>

{/* ======= Resume ======= */}
<section className="text-center my-12">
  <h2 className="text-2xl font-bold mb-4">📄 Resume</h2>
  <a
    href="/resume.pdf"
    download
    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    Download Resume
  </a>
</section>

{/* ======= Projects ======= */}
<section className="my-12 px-6 md:px-12">
  <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">Spectral Graph Theory</h3>
    <p className="mb-2">
      Studied properties of Laplacian matrices, eigenvalues of graphs, and implemented algorithms using adjacency and incidence matrices.
    </p>
    <a href="#" className="text-blue-600 underline">View Project</a>
  </div>
</section>

{/* ======= Contact ======= */}
<section className="my-12 px-6 md:px-12">
  <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
  <form
    action="https://formspree.io/f/your-form-id"
    method="POST"
    className="max-w-xl mx-auto space-y-4"
  >
    <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded" required />
    <input type="email" name="email" placeholder="Your Email" className="w-full border p-2 rounded" required />
    <textarea name="message" placeholder="Your Message" className="w-full border p-2 rounded" rows="5" required></textarea>
    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Send Message
    </button>
  </form>
  <p className="text-center mt-6 text-gray-700">📧 24ms0100@gmail.com</p>
</section>
