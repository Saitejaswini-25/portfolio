import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-indigo-600">Gorantla <br></br>SaiTejaswini</span>
              <br />
              Full Stack Developer
            </h1>
            <p className="text-xl text-gray-600">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Saitejaswini-25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/gorantlsaitejaswini12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              
              
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Developer"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">Fresher</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}