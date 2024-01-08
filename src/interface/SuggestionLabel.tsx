export default function SuggestionLabel({
  content,
  className,
  direction,
}: {
  content: string;
  className: string;
  direction: "left" | "right";
}) {
  return (
    <div className="hidden w-auto dot-xl:flex">
      {Array(10)
        .fill(true)
        .map((_, i) => (
          <div
            key={i}
            className={`${
              direction === "left"
                ? "animation-direction-normal"
                : "animation-direction-reverse"
            } animation-move inline-flex w-full items-center justify-center`}
          >
            <h4
              className={`whitespace-nowrap text-xs font-[800] uppercase tracking-[5px] lg:text-lg ${className}`}
            >
              {content}
            </h4>
            <div className="mx-3 block aspect-square h-1.5 w-1.5 rounded-full bg-white lg:mx-5 lg:h-2 lg:w-2" />
          </div>
        ))}
    </div>
  );
}
