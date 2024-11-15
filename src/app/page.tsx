export default function Home() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-purple-300 to-pink-200 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl -top-20 -right-20"></div>
      <div className="absolute w-96 h-96 bg-pink-400/30 dark:bg-pink-600/30 rounded-full blur-3xl -bottom-20 -left-20"></div>

      <div className="max-w-3xl w-full backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 rounded-3xl shadow-2xl p-8 mx-auto relative overflow-hidden border border-white/20">
        {/* Glassmorphism card content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
          {/* Animated Logo */}
          <div className="relative w-32 h-32 mb-4">
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading with gradient animation */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold animate-gradient bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-600 bg-clip-text text-transparent bg-300% dark:from-violet-400 dark:via-fuchsia-300 dark:to-pink-400">
              Under Development
            </h1>
            <p className="text-gray-700 dark:text-gray-200 text-xl sm:text-2xl max-w-xl mx-auto leading-relaxed font-light">
              Something extraordinary is in the works. We&apos;re crafting a
              masterpiece just for you.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="w-full max-w-md space-y-4">
            <div className="relative h-3 bg-white/30 dark:bg-gray-700/30 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-600 rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-700 dark:text-gray-200 font-medium">
              Progress: 65% Complete
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mt-8">
            {[
              { title: "Innovation", icon: "✨" },
              { title: "Excellence", icon: "🎯" },
              { title: "Reliability", icon: "🛡️" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/10 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <div className="h-1 w-12 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-12 inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-pink-600/10 border border-violet-600/20 dark:border-violet-400/20">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400"></span>
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Launching Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
