import Navigation from '../components/Navigation'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Eric Harrison
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer | AI Engineer | Former NCAA All-American
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              As a graduate from The Ohio State University, I've successfully transitioned from being an
              NCAA All-American athlete and 2020 Olympic Games participant to pursuing my passion in
              technology and innovation.
            </p>
            <p>
              Today, I channel my competitive spirit into building cutting-edge applications at the
              intersection of Business, Artificial Intelligence, and Web Development. My focus is on
              creating intuitive, powerful tools that leverage the latest in AI technology to solve
              real-world problems!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Business Strategy</span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">AI Development</span>
              <span className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full">Web Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Struxure"
              description="AI-powered File Mapping System that helps users understand and navigate complex file structures using natural language queries."
              tools={['Next.js', 'OpenAI', 'Supabase', 'TailwindCSS']}
              images={['/struxure1.png', '/struxure2.png']}
              link="https://struxure.vercel.app"
            />
            <ProjectCard
              title="LabRag"
              description="AI RAG system for processing and analyzing PDF and audio files, making complex documents easily searchable and understandable."
              tools={['React', 'Python', 'OpenAI', 'Pinecone']}
              images={['/labrag1.png', '/labrag2.png']}
              link="https://labrag.vercel.app"
            />
            <ProjectCard
              title="StudyLab"
              description="AI-powered study tool that generates flashcards and tests from any text input, helping students learn more effectively."
              tools={['Next.js', 'OpenAI', 'Stripe', 'TailwindCSS']}
              images={['/studylab1.png', '/studylab2.png']}
              link="https://studylab.vercel.app"
            />
            <ProjectCard
              title="Speed Force Athletics"
              description="Business website for a speed training facility, featuring modern design and seamless user experience."
              tools={['React', 'TailwindCSS', 'Framer Motion']}
              images={['/speedforce1.png', '/speedforce2.png']}
              link="https://speedforceathletics.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:contact@ericdev.com"
            className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg hover:bg-[var(--primary)]/90 transition-colors"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  )
}
