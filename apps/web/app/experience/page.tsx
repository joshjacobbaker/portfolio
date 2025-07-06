import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience and career history of Joshua Baker, Full Stack Developer.',
};

const experiences = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2022 - Present',
    location: 'Remote',
    description: [
      'Lead development of scalable web applications using React, Next.js, and Node.js',
      'Mentor junior developers and conduct code reviews',
      'Architect and implement microservices using Docker and AWS',
      'Collaborate with cross-functional teams to deliver high-quality products',
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'AWS',
      'Docker',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    location: 'San Francisco, CA',
    description: [
      'Developed and maintained multiple client projects using modern web technologies',
      'Implemented responsive designs and improved website performance by 40%',
      'Built RESTful APIs and integrated third-party services',
      'Collaborated with designers and product managers to deliver user-centered solutions',
    ],
    technologies: [
      'React',
      'Vue.js',
      'Python',
      'Django',
      'PostgreSQL',
      'Redis',
    ],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2019 - 2020',
    location: 'New York, NY',
    description: [
      'Built responsive web applications using React and modern CSS frameworks',
      'Optimized application performance and implemented best practices',
      'Worked closely with UX/UI designers to create pixel-perfect interfaces',
      "Contributed to the company's design system and component library",
    ],
    technologies: ['React', 'JavaScript', 'SCSS', 'Webpack', 'Jest'],
  },
  {
    id: 4,
    title: 'Junior Web Developer',
    company: 'Web Agency Pro',
    period: '2018 - 2019',
    location: 'Chicago, IL',
    description: [
      'Developed websites and web applications for various clients',
      'Learned modern web development practices and technologies',
      'Collaborated with senior developers to deliver projects on time',
      'Gained experience in both frontend and backend development',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in web development and the technologies
            I&apos;ve mastered
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 flex items-start"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mr-2">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
