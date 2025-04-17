export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm a passionate Full Stack Developer and interested in building web applications. 
              I specialize in JavaScript/TypeScript, React, Django, and modern web technologies.
            </p>
            <p className="text-lg text-gray-600">
              My journey in web development started when I built my first website in college. 
              Since then, I have started working on various websites and very interested to work on them.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Django', 'Next.js', 'TailwindCSS', 'MySQL','DataStructures','Figma','AdobeXD','RESTful APIs','Bootstrap','C++ & Python'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        <div className="space-y-6">
           {/*  <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Senior Developer @ Tech Corp</h4>
                  <p className="text-gray-600">2020 - Present</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Full Stack Developer @ Startup Inc</h4>
                  <p className="text-gray-600">2018 - 2020</p>
                </div>
              </div>
            </div>*/}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <div>
                <h4 className="text-lg font-medium text-gray-900">B.Tech in Computer Science and Engineering</h4>
                <p className="text-gray-600">Vignan's Institute of Information Technology</p>
                <p className="text-gray-600">2022-2026</p>
                <p className="text-gray-600"><b>CGPA:</b> 9.1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}