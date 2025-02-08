// src/app/about/page.js
export default function About() {
    return (
      <section className="relative bg-gradient-to-br from-gray-900 to-black">
        {/* Main Container */}
        <div className="container mx-auto px-4 py-20">
          {/* Content Card with Glassmorphism */}
          <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-75 backdrop-blur-sm rounded-xl p-10 shadow-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-tight text-white">
              About Me
            </h1>
            <div className="space-y-10">
              {/* Who I Am Section */}
              <div>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2 text-white hover:text-accent transition-colors duration-300">
                  Who I Am
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                Aman is a passionate software engineer and a dedicated fitness enthusiast. He&apos;s on a mission to merge his love for technology with his dedication to physical fitness, creating impactful solutions that inspire others to push their limits—whether it&apos;s in the gym or through innovative software.

With a deep belief in the power of discipline and hard work, Aman applies this mindset to his professional journey, coding apps that challenge the status quo and offer real value to users. His goal is to build tools that not only solve problems but also motivate and empower individuals to live their best lives.

Outside of coding, Aman is often found in the gym, working on his physique and improving his strength. For him, fitness isn&apos;t just about building muscle—it&apos;s about fostering resilience and consistency, values that he carries with him in every aspect of his life.

Through his work and content, Aman aims to share his journey and inspire others to take on challenges with grit and determination. Whether interested in technology, fitness, or motivation, he invites you to join him on his path to personal and professional growth.
                </p>
              </div>
  
              {/* My Skills Section */}
              <div>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2 text-white hover:text-accent transition-colors duration-300">
                  My Skills
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                Aman is highly skilled in:
                
                    <li><strong>Software Development:</strong> Proficient in languages such as JavaScript, Python, and C++, with experience building web and mobile apps. He specializes in Next.js for web development and is focused on creating scalable, efficient solutions.</li>
                    <li><strong>Web Development & UI/UX:</strong> With a keen eye for design, Aman is experienced in building clean, user-friendly interfaces and optimizing web applications for a seamless user experience.</li>
                    <li><strong>App Development:</strong> Passionate about creating apps that offer practical value, Aman is experienced in both frontend and backend development, particularly in mobile and web environments.</li>
                    <li><strong>Fitness Coaching & Health:</strong> Having gone through his own fitness transformation, Aman understands the value of discipline and is keen on sharing his journey and insights to help others on their fitness paths</li>
                </p>
              </div>
  
              {/* My Journey Section */}
              <div>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2 text-white hover:text-accent transition-colors duration-300">
                  My Journey
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                Aman&apos;s journey is a powerful blend of discipline, intellect, and relentless pursuit of growth. A graduate of IIT Delhi with a B.Tech degree, Aman&apos;s academic journey was fueled by his deep passion for mathematics and an innate love for problem-solving. His fascination with numbers and logical thinking laid a strong foundation for his career, shaping his analytical mindset and sharpening his ability to tackle complex challenges.

Driven by a desire to understand and contribute to society on a deeper level, Aman also ventured into the world of civil services, where he developed expertise in navigating the complexities of governance, policy, and strategic thinking. This phase of his life broadened his perspective, teaching him the value of discipline, resilience, and critical decision-making.

However, Aman&apos;s true calling emerged at the intersection of his intellectual pursuits and personal passions. His love for software development allowed him to channel his problem-solving skills into building innovative web and mobile applications. Every line of code became a new challenge, a puzzle to be solved, and an opportunity to create something impactful.

Parallel to his academic and professional growth, Aman&apos;s journey in fitness has been equally transformative. What started as a personal goal to improve his physical strength evolved into a disciplined lifestyle rooted in mental toughness and self-mastery. For Aman, the gym isn&apos;t just a place to build muscle—it&apos;s where he tests his limits, cultivates resilience, and proves to himself that growth comes through consistent effort, both physically and mentally.

His mission is to leverage his skills to create solutions that inspire, motivate, and empower others, whether through technology, personal development, or the mindset of relentless persistence.

For Aman, the journey is far from over. It&apos;s a continuous evolution driven by the belief that with discipline, hard work, and an unyielding commitment to growth, there are no limits to what one can achieve.
                </p>
              </div>
  
              {/* Future Goals and Projects */}
              <div>
                <h2 className="text-3xl font-bold mb-4 border-b-2 border-gray-600 pb-2 text-white hover:text-accent transition-colors duration-300">
                  Outside of Work
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                Looking ahead, Aman is focused on merging his diverse experiences to create meaningful projects that make a lasting impact. His primary goal is to develop innovative fitness solutions through technology. As a passionate software engineer and fitness enthusiast, he is currently working on a fitness app designed to help people build discipline, track progress, and stay motivated. This app will integrate features like real-time coaching, data-driven insights, and virtual challenges to create an interactive and personalized fitness experience.

In addition to fitness, Aman is passionate about exploring the potential of AI and wearable technology to enhance personal development and performance tracking. His projects aim to bridge the gap between technology and self-improvement, helping individuals unlock their full potential both physically and mentally.

Aman&apos;s future vision is clear—to continue building solutions that inspire, educate, and empower others. Whether through innovative software, transformative fitness programs, or thought-provoking content, he is committed to creating tools that reflect his core values: discipline, persistence, and growth.

For Aman, the journey is ongoing. Every project, every challenge, and every goal is a step forward in his mission to make a difference—not just in his own life but in the lives of those he seeks to inspire.
                </p>
              </div>
  
              {/* Additional content sections can be added here */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  