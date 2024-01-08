export default function BubbleText() {
  return (
    <div className="relative hidden w-full place-content-center pb-32 pt-32 lg:flex">
      <h2 className="text-center text-[125px] font-thin text-blue-200">
        {"Sumeet Kumar Paul".split("").map((child, idx) => (
          <span className="bubbleText" key={idx}>
            {child}
          </span>
        ))}
      </h2>
    </div>
  );
}
