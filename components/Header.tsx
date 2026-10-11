import Image from "next/image";

export function Header() {
  return (
    <header className="relative z-20 border-b border-[#172019]/[0.07] bg-[#faf9f7]/90 backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-center sm:h-24">
        <Image
          src="/ai-manjeet-logo.png"
          alt="AI Manjeet"
          width={2172}
          height={724}
          priority
          className="h-auto w-[168px] sm:w-[198px]"
          sizes="(max-width: 640px) 168px, 198px"
        />
      </div>
    </header>
  );
}
