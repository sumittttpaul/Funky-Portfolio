import Card from "components/Card";
import Header from "components/Header";
import Landing from "interface/Landing";
import StarsCanvas from "components/StarBackground";

// type AnimationType = "open" | "close";

// const Transition = {
//   type: "tween",
//   easings: ["easeIn", "easeOut"],
//   duration: 0.3,
// };

// const LoadingVariant = {
//   open: { opacity: 100 },
//   close: { opacity: 0 },
// };

export default function Home() {
  // Loading Time (This code is just for test)
  // const [LoadingAnimation, setLoadingAnimation] =
  //   useState<AnimationType>("open");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadingAnimation("close");
  //   }, 5000);
  // }, []);

  {
    /* Loading Screen that will be hide after few seconds */
  }
  {
    /* <MotionDiv
          animate={LoadingAnimation}
          variants={LoadingVariant}
          transition={Transition}
          className="absolute flex h-[200px] w-[200px] items-center justify-center"
          >
          <Loader />
        </MotionDiv> */
  }
  {
    /* <UserPhoto Transition={Transition} /> */
  }

  return (
    <div className="relative flex h-screen w-screen flex-col overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col">
        <section className="flex h-full w-full flex-col px-5 pb-5 pt-24 lg:pt-5">
          <Header />
          <Landing />
          <StarsCanvas />
        </section>
        <section className="flex h-full w-full flex-col p-5">
          <Card />
        </section>
      </div>
    </div>
  );
}
