import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Joshua Baker, Full Stack Developer with expertise in modern web technologies.',
};

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full stack developer with a love for creating exceptional
            digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mx-auto"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hi! I&apos;m Joshua Baker, a passionate full stack developer with
              over 5 years of experience building modern web applications. I
              specialize in React, Next.js, Node.js, and TypeScript.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              I love solving complex problems and turning ideas into reality
              through clean, efficient code. When I&apos;m not coding, you can
              find me exploring new technologies, contributing to open source
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tools & Others
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS / Vercel</li>
                <li>Jest / Cypress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
