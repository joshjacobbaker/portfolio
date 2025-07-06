import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web development projects showcasing modern technologies and creative solutions.',
};

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Stripe',
      'PostgreSQL',
    ],
    image: 'from-blue-400 to-purple-500',
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: 'from-green-400 to-blue-500',
    github: 'https://github.com/yourusername/task-manager',
    demo: 'https://task-manager-demo.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A responsive weather application with location-based forecasts and interactive maps.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Leaflet'],
    image: 'from-purple-400 to-pink-500',
    github: 'https://github.com/yourusername/weather-dashboard',
    demo: 'https://weather-dashboard-demo.com',
  },
  {
    id: 4,
    title: 'Blog Platform',
    description:
      'A modern blogging platform with markdown support, SEO optimization, and admin dashboard.',
    technologies: ['Next.js', 'MDX', 'Prisma', 'NextAuth.js'],
    image: 'from-yellow-400 to-orange-500',
    github: 'https://github.com/yourusername/blog-platform',
    demo: 'https://blog-platform-demo.com',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website showcasing projects and skills with modern design.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    image: 'from-indigo-400 to-cyan-500',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://portfolio-demo.com',
  },
  {
    id: 6,
    title: 'Chat Application',
    description:
      'Real-time chat application with private messaging, group chats, and file sharing.',
    technologies: ['React', 'Node.js', 'Socket.io', 'Redis', 'JWT'],
    image: 'from-pink-400 to-red-500',
    github: 'https://github.com/yourusername/chat-app',
    demo: 'https://chat-app-demo.com',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for web
            development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.image}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
