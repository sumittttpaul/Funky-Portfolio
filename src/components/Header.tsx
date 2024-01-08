import Link from "next/link";

export default function Header({ isMobile }: { isMobile: boolean }) {
  return (
    <header className="absolute top-5 flex h-auto w-auto left-5 z-20">
      <Link
        href=""
        className={`group ${
          isMobile ? "w-[140px]" : "w-[165px]"
        } rounded-lg py-2 text-sky-400 transition-colors hover:bg-sky-600/20 lg:w-[185px]`}
      >
        <h2
          className={` ${isMobile ? "text-[11px]" : "text-sm"}
           font-semibold transition-transform group-hover:translate-x-4 motion-reduce:transform-none lg:text-base`}
        >
          &lt;-{" "}
          <span
            className="}
            inline-block whitespace-nowrap transition-transform group-hover:translate-x-1  motion-reduce:transform-none"
          >
            Back to LinkedIn
          </span>
        </h2>
      </Link>
    </header>
  );
}
