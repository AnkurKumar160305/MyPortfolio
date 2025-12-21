import { CometCard } from "./ui/comet-card";

const CometCardDemo=() =>{
  return (
    <CometCard>
      <button
        type="button"
        className="
          my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] 
          border-2 border-transparent bg-gradient-to-br from-[#1F2121] to-[#27292a] 
          p-2 saturate-0 md:my-20 md:p-4 transition-transform duration-300 hover:scale-105
          relative overflow-hidden
        "
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated neon border overlay */}
        <span className="
          absolute inset-0 rounded-[16px] border-2 border-gradient animate-borderGlow
          pointer-events-none
        "></span>

        <div className="mx-2 flex-1 relative z-10">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] object-cover contrast-125"
              alt="Invite background"
              src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ opacity: 1 }}
            />
          </div>
        </div>

        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white z-10 relative">
          <div className="text-xs">Comet Invitation</div>
          <div className="text-xs text-gray-300 opacity-50">#F7RA</div>
        </div>

        {/* Custom animated border style */}
        <style jsx>{`
          .border-gradient {
            border-image-slice: 1;
            border-image-source: linear-gradient(
              270deg,
              #7df9ff,
              #ff6af0,
              #ffd166,
              #7df9ff
            );
          }

          @keyframes borderGlow {
            0% {
              border-image-source: linear-gradient(270deg, #7df9ff, #ff6af0, #ffd166, #7df9ff);
            }
            50% {
              border-image-source: linear-gradient(270deg, #ff6af0, #ffd166, #7df9ff, #ff6af0);
            }
            100% {
              border-image-source: linear-gradient(270deg, #7df9ff, #ff6af0, #ffd166, #7df9ff);
            }
          }

          .animate-borderGlow {
            animation: borderGlow 3s linear infinite;
          }
        `}</style>
      </button>
    </CometCard>
  );
}

export default CometCardDemo;
