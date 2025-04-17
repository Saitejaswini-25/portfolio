import { Github, ExternalLink } from 'lucide-react';
import img2 from '../image/img2.png';

export default function Projects() {
  const projects = [
    {
      title: 'Chatbot',
      description: 'Built a functional chatbot which provides intelligent responses to basic user queries.',
      image: 'https://getvoip.com/uploads/State-of-Chatbots.png',
      technologies: ['React', 'Typescript', 'Vite'],
      github: 'https://github.com/Saitejaswini-25/chatbot.git',
      live: 'https://saitejaswini-25.github.io/chatbot/',
    },
    {
      title: 'Amazon Clone',
      description: 'Developed an Amazon clone , showcasing responsive design and an intuitive user interface.',
      image: 'https://github.com/Saitejaswini-25/Amazonclone/blob/main/screenshot1.png?raw=true',
      technologies: ['HTML','CSS','Bootstrap'],
      github: 'https://github.com/Saitejaswini-25/Amazonclone.git',
      live: 'https://saitejaswini-25.github.io/Amazonclone/',
    },
    {
      title: 'Plastic_type Classification',
      description: 'Created a Plastic Type Classification model using machine learning to categorize plastic types.',
      image: 'https://miro.medium.com/max/2560/1*47VfHuBJxp6nRwYtlOBljg.jpeg',
      technologies: ['Python', 'Jupyter Notebook', 'Scikit-learn','Pandas','Tensorflow'],
      github: 'https://github.com/Saitejaswini-25/plasticclassification.git',
      live: 'https://github.com/Saitejaswini-25/plasticclassification.git',
    },
    {
    title: 'Green cycle hub|Working',
    description: 'Sustainable E-commerce',
    image: img2,
    technologies: ['Django', 'MySQL', 'Front End Frameworks'],
    github: 'https://github.com/Saitejaswini-25/greencyclehub.git',
    live: 'https://github.com/Saitejaswini-25/greencyclehub.git',

    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
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
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink className="h-5 w-5" />
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