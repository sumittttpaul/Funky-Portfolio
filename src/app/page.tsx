import Card from "components/Card";
import Header from "components/Header";
import Landing from "interface/Landing";
import Loading from "interface/Loading";
import StarsCanvas from "components/StarBackground";
import ClientDiv from "components/ClientDiv";

export default function Home() {
  return (
    <ClientDiv className="relative flex h-screen w-screen flex-col">
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
      <Loading />
    </ClientDiv>
  );
}
