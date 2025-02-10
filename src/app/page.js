// src/app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-75 backdrop-blur-sm rounded-xl p-10 shadow-xl text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              I’m a software engineer and designer passionate about creating elegant digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center">
            {/* Profile Picture */}
            <div className="mb-6">
              <Image
                src="/images/Photo.jpg"  // Place your profile image in the public/images folder
                alt="Profile Picture"
                width={380}               // Adjust width and height as needed (e.g., 192px = 12rem)
                height={380}
                className="rounded-full border-4 border-gray-600 shadow-lg"
              />
            </div>
            {/* Name and Tagline */}
            <h2 className="text-4xl text-white font-bold mb-2">Your Name</h2>
            <p className="text-lg text-gray-300 text-center max-w-2xl">
              A short bio or tagline goes here—something that highlights your passion, your expertise, or your creative journey.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Sections (Optional) */}
      {/* You can add more sections below such as recent projects, testimonials, etc. */}
    </main>
  );
}
