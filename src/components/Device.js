import Image from "next/image";

// Device frames for the real app captures (src/assets/screens/, made by
// scripts/build-screens.mjs). Same proportions as the App Store screenshot
// template - bezel 16/900 of the width, corner 190/900, island 270x80 at 40 -
// expressed in cqw so one frame scales to any width its parent gives it.
//
// A simulator capture has no Dynamic Island, so the frame draws it; the
// captures keep their own status bar. Product UI stays English in every
// language, hence lang="en" (it also keeps CSS uppercase from turning i into İ
// on the Turkish pages).
export function Phone({ src, alt = "", className = "", sizes = "(min-width: 1024px) 320px, 260px", eager = false, children }) {
  return (
    <div lang="en" className={`@container ${className}`}>
      <div className="relative rounded-[21cqw] bg-gradient-to-br from-[#1c2335] to-[#090c14] p-[1.8cqw] shadow-[0_40px_90px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <div className="relative overflow-hidden rounded-[19.3cqw] bg-[#f2f2f7]">
          {src && (
            <Image
              src={src}
              alt={alt}
              sizes={sizes}
              loading={eager ? "eager" : "lazy"}
              fetchPriority={eager ? "high" : "auto"}
              className="block h-auto w-full select-none"
              draggable={false}
            />
          )}
          {children}
        </div>
        <div aria-hidden="true" className="absolute left-1/2 top-[4.4cqw] h-[8.9cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}

// iPad in landscape: bezel 28/2436 of the width, corner 96/2436.
export function Tablet({ src, alt = "", className = "", sizes = "(min-width: 1024px) 900px, 92vw" }) {
  return (
    <div lang="en" className={`@container ${className}`}>
      <div className="rounded-[4cqw] bg-gradient-to-br from-[#1c2335] to-[#090c14] p-[1.15cqw] shadow-[0_40px_100px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.12)]">
        <div className="overflow-hidden rounded-[2.9cqw] bg-[#f2f2f7]">
          <Image src={src} alt={alt} sizes={sizes} className="block h-auto w-full select-none" draggable={false} />
        </div>
      </div>
    </div>
  );
}
