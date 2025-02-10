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
            src="/images/hero-blend.jpg"
            alt="Hero Background"
            layout="responsive"
            width={1920}
            height={1080}
            className="object-cover mix-blend-overlay opacity-100"
        />
        </div>



        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center text-center">
          {/* Powerful Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-12 tracking-tight max-w-8xl">
          Where fitness meets tech and coaching
          </h1>
          {/* Engaging Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
          Aman will help you transform your fitness journey with personalized training plans, expert coaching, and innovative software solutions designed to help you reach your goals.
          </p>
          {/* Call-to-Action Buttons */}
          <div className="flex space-x-6">
            <a
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
            >
              Start Your Transfromation Today
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
            <h2 className="text-4xl text-white font-bold mb-2">Aman Jindal</h2>
            <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl">
            Aman combines his passion for fitness with his expertise in software engineering to create innovative solutions that empower individuals on their fitness journey. His unique approach blends technology 
            and coaching to help you achieve lasting transformation. Learn more <a href="/about" className="text-white font-bold hover:text-gray-300">About me.</a>
            </p>
            <div className="flex space-x-6">
            <a
              href="/projects"
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
        </div>
      </section>

      {/* Additional Sections (Optional) */}
      {/* You can add more sections below such as recent projects, testimonials, etc. */}
    </main>
  );
}
