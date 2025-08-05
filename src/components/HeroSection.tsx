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
          backgroundImage: 'url("data:image/jpeg;base64,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")',
        }}
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
          <a href="#" className="px-6 py-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-all">Directory</a>
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
              <button className="group flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
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
