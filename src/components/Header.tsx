import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-5 flex w-full justify-between">
      <Link
        href=""
        className="group z-10 w-[165px] rounded-lg py-2 text-sky-400 transition-colors hover:bg-sky-600/20 lg:w-[185px]"
      >
        <h2
          className="text-sm
           font-semibold transition-transform group-hover:translate-x-4 motion-reduce:transform-none lg:text-base"
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
      {/* <h4 className="z-10 box-shadow-transition items-center rounded-lg border border-pink-400 px-4 py-2 text-center text-sm font-semibold lg:text-base">
        Open to Work
      </h4> */}
    </header>
  );
}
