// src/app/page.js
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* Background Hero Image with Blending */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-blend.jpg" // Ensure this image exists in your public/images folder
            alt="Hero Background"
            fill
            className="object-cover mix-blend-overlay opacity-100"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center">
          {/* Powerful Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Empowering Digital Transformation
          </h1>
          {/* Engaging Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
            I build innovative digital experiences that drive growth and captivate audiences.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="flex space-x-6">
            <a
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Get in Touch
            </a>
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
