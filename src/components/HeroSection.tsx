import { Sparkles, ArrowRight, Users, BookOpen, Award, Lightbulb } from "lucide-react";
import imge1 from "../assets/ivb og pic.jpeg";
import img2 from "../assets/1.svg";
import img4 from "../assets/3.svg";
import img5 from "../assets/ivblogo.jpeg";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed opacity-30 z-0"
        style={{
          backgroundImage: 'url("https://media.collegedekho.com/media/img/institute/crawled_images/None/WhatsApp_Image_2024-07-10_at_11.40.23_AM_2.jpeg")
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Decorative dots */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse z-0"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-500 z-0"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-1000 z-0"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-700 z-0"></div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="text-3xl font-bold tracking-wider text-white">
          IDEA_LOG
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="px-6 py-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-all">Home</a>
          <a href="/" className="px-6 py-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-all">Directory</a>
          <a
            href="https://dtxfpni9mqg.typeform.com/to/Jx5xFiDd"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all font-medium"
          >
            Submit Your Idea
          </a>
        </div>
        <div className="md:hidden">
          <button className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all font-medium text-sm">
            Menu
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center min-h-[calc(100vh-88px)] px-6 lg:px-12 pb-8">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8 lg:gap-12">
          
          {/* Left content */}
          <div className="flex-1 lg:max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6 flex-wrap gap-2">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
              <span className="text-cyan-400 font-semibold text-sm sm:text-base lg:text-lg">
                Built by Students, for Student Founders
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-wider leading-tight">
              IDEA_LOG
            </h1>

            <div className="mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 text-white">
                A living directory of Ideas.
              </h2>
              <p className="text-sm sm:text-md lg:text-lg text-white max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                Discover innovative startups, half-baked thoughts and bold new ventures from every batch. If your idea does not make you sleep, it belongs here!
                <span className="text-cyan-400 font-semibold"> LOG IT</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8 lg:mb-12">
           <button
  onClick={() => {
    const section = document.getElementById("directory");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
>
  Explore Directory
  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
</button>

              <a
                href="https://dtxfpni9mqg.typeform.com/to/Jx5xFiDd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                Submit Your Idea
              </a>
            </div>

            {/* Institution info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm text-gray-300 mb-3">A Community Initiative from</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <img
                    src={img5}
                    alt="IVB OG"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">IVB OG Forever️‍🔥</p>
                  <p className="text-xs sm:text-sm text-gray-300">Entrepreneurship Hub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Image Carousel */}
          <div className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto px-2 sm:px-4 relative">
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] w-full">
              <div className="absolute top-0 right-0 w-[75%] sm:w-[70%] md:w-[65%] lg:w-[60%] h-[65%] sm:h-[60%] md:h-[60%] lg:h-[60%] z-30 transform hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20">
                  <img
                    src={imge1}
                    alt="IVB Community Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>
              </div>

              <div className="absolute top-[10%] sm:top-[15%] left-0 w-[45%] sm:w-[40%] md:w-[40%] lg:w-[35%] h-[40%] sm:h-[35%] md:h-[40%] lg:h-[40%] z-20 transform hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-3 border-white/15">
                  <img
                    src={img2}
                    alt="Workshop Session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
                </div>
              </div>

              <div className="absolute bottom-0 right-[8%] sm:right-[10%] md:right-[12%] lg:right-[15%] w-[40%] sm:w-[35%] md:w-[32%] lg:w-[30%] h-[35%] sm:h-[30%] md:h-[32%] lg:h-[33%] z-15 transform hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-3 border-white/15">
                  <img
                    src={img4}
                    alt="Pitch Presentation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute top-[25%] right-[25%] w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-pulse z-40"></div>
              <div className="absolute bottom-[33%] left-[33%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse delay-700 z-40"></div>
              <div className="absolute top-[67%] right-[17%] w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/50 rounded-full animate-ping delay-1000 z-5"></div>
            </div>

            {/* Info card */}
            <div className="mt-6 sm:mt-8 bg-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-700/50">
              <div className="text-center">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
                </div>
                <p className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Why IDEA_LOG?</p>
                <p className="text-xs sm:text-sm text-white mb-3 max-w-xs sm:max-w-md mx-auto leading-relaxed">
                  Because the next big thing starts with just a line of thought. Every breakthrough began as someone's "crazy" idea.
                </p>
                <p className="text-xs text-gray-300 max-w-xs sm:max-w-sm mx-auto">
                  We believe everyone in our IVB community has at least one brilliant idea. Let's discover and nurture them together.
                </p>
              </div>
            </div>

            {/* Floating dots */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400/70 rounded-full animate-pulse z-50"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500/70 rounded-full animate-pulse delay-500 z-50"></div>
            <div className="absolute top-1/2 -left-6 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/70 rounded-full animate-ping delay-1000 z-50"></div>
            <div className="absolute top-1/4 -right-3 sm:-right-4 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400/70 rounded-full animate-bounce delay-300 z-50"></div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="relative z-10 pb-8">
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-1000"></div>
      </div>
    </div>
  );
};

export default Homepage;
