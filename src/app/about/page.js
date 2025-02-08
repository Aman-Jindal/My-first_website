// src/app/about/page.js
export default function About() {
    return (
      <div className="relative">
        {/* Hero Section */}
        <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
              I’m a passionate software engineer and designer committed to creating beautiful and functional digital experiences.
            </p>
          </div>
        </div>
  
        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Who I Am */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
                <p className="text-lg leading-relaxed">
                  I’ve been immersed in the world of technology since my early teens, evolving from a curious hobbyist to a dedicated professional. My journey in web development has allowed me to build projects that are both aesthetically pleasing and highly functional.
                </p>
              </div>
  
              {/* My Skills */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">My Skills</h2>
                <p className="text-lg leading-relaxed">
                  I specialize in modern web technologies such as React, Next.js, and Tailwind CSS. With a keen eye for design and a knack for solving complex problems, I strive to bridge the gap between creative design and robust development.
                </p>
              </div>
  
              {/* My Journey */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">My Journey</h2>
                <p className="text-lg leading-relaxed">
                  My career started with a passion for coding and design. Over the years, I’ve had the privilege to work on diverse projects ranging from small startups to large enterprise solutions. Each experience has enriched my skills and fueled my commitment to continuous learning.
                </p>
              </div>
  
              {/* Outside of Work */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Outside of Work</h2>
                <p className="text-lg leading-relaxed">
                  When I’m not immersed in code, I enjoy exploring nature, reading, and experimenting with new recipes in the kitchen. I believe that a balanced life nurtures creativity and innovation in both personal and professional endeavors.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  