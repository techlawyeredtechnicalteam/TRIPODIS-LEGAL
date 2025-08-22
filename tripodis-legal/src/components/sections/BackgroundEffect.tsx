const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-blue-400/20 transform rotate-45 blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 transform rotate-12 blur-sm"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-teal-400/20 transform -rotate-12 blur-sm"></div>
        <div className="absolute bottom-40 right-40 w-28 h-28 bg-gradient-to-r from-orange-400/20 to-red-400/20 transform rotate-45 blur-sm"></div>
        <div className="absolute bottom-20 right-60 w-36 h-36 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 transform -rotate-30 blur-sm"></div>
      </div>
    </>
  );
};

// Crystal Structure Component
const CrystalStructure: React.FC = () => {
  return (
    <div className="absolute bottom-0 right-0 w-1/2 sm:w-2/5 lg:w-1/3 h-3/5 sm:h-2/3 pointer-events-none overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute bottom-0 right-0 w-full h-full">
          {/* Large central crystal */}
          <div className="absolute bottom-16 right-8 sm:right-16 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 transform rotate-12">
            <div className="w-full h-full bg-gradient-to-br from-blue-300/20 via-teal-400/30 to-cyan-500/20 backdrop-blur-sm border border-white/10 transform rotate-45 shadow-2xl">
              <div className="absolute inset-2 bg-gradient-to-tr from-yellow-300/20 via-pink-300/20 to-purple-400/20 transform -rotate-12"></div>
            </div>
          </div>

          {/* Additional crystal elements */}
          <div className="absolute bottom-32 right-4 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 transform -rotate-12">
            <div className="w-full h-full bg-gradient-to-br from-blue-300/25 via-indigo-400/30 to-purple-500/25 backdrop-blur-sm border border-white/10 transform rotate-45 shadow-xl">
              <div className="absolute inset-1 bg-gradient-to-tr from-blue-300/25 via-blue-300/25 to-teal-400/25 transform rotate-12"></div>
            </div>
          </div>

          <div className="absolute bottom-8 right-20 sm:right-32 w-20 h-20 sm:w-32 sm:h-32 transform rotate-45">
            <div className="w-full h-full bg-gradient-to-br from-pink-300/20 via-rose-400/25 to-red-500/20 backdrop-blur-sm border border-white/10 transform rotate-45 shadow-xl">
              <div className="absolute inset-2 bg-gradient-to-tr from-orange-300/20 via-amber-300/20 to-yellow-400/20 transform -rotate-45"></div>
            </div>
          </div>

          {/* Moss-like growth on crystals */}
          <div className="absolute bottom-20 right-12 sm:right-20 w-6 h-6 sm:w-8 sm:h-8 bg-blue-400/40 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-28 right-16 sm:right-28 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500/40 rounded-full blur-sm animate-pulse delay-1000"></div>
          <div className="absolute bottom-12 right-24 sm:right-40 w-5 h-5 sm:w-7 sm:h-7 bg-lime-400/40 rounded-full blur-sm animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-6 sm:right-12 w-3 h-3 sm:w-5 sm:h-5 bg-blue-300/50 rounded-full blur-sm animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export { BackgroundEffects, CrystalStructure };
