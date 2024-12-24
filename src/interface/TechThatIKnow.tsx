import NextJs_Logo from "../../public/company-logo/nextjs.png";
import React_Logo from "../../public/company-logo/react.png";
import Sanity_Logo from "../../public/company-logo/sanity.png";
import Firebase_Logo from "../../public/company-logo/firebase.png";
import Stripe_Logo from "../../public/company-logo/stripe.png";
import HTML_Logo from "../../public/company-logo/html.png";
import CSS_Logo from "../../public/company-logo/css.png";
import JavaScript_Logo from "../../public/company-logo/js.png";
import TypeScript_Logo from "../../public/company-logo/ts.png";
import NodeJs_Logo from "../../public/company-logo/nodejs.png";
import Mongodb_Logo from "../../public/company-logo/mongodb.png";
import Mongoose_Logo from "../../public/company-logo/mongoose.png";
import MUI_Logo from "../../public/company-logo/mui.png";
import NextUI_Logo from "../../public/company-logo/nextui.png";
import Tailwind_Logo from "../../public/company-logo/tailwind.png";
import Zustand_Logo from "../../public/company-logo/zustand.png";
import Clerk_Logo from "../../public/company-logo/clerk.png";
import Express_Logo from "../../public/company-logo/express.png";
import Redux_Logo from "../../public/company-logo/redux.png";
import Stepzen_Logo from "../../public/company-logo/stepzen.png";
import GraphQL_Logo from "../../public/company-logo/graphql.png";
import Tremor_Logo from "../../public/company-logo/tremor.png";
import Image, { StaticImageData } from "next/image";

export default function TechThatIKnow({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="relative mt-20 flex h-full w-full flex-col place-content-center space-y-3 overflow-hidden text-center lg:h-screen lg:space-y-5">
      <div className="mb-14">
        <h1
          className={`${
            isMobile ? "text-[25px] font-[800]" : "text-[35px] font-[900]"
          } lg:text-[45px] lg:font-[1000]`}
        >
          Tool Box
        </h1>
        <h2
          className={`${
            isMobile ? "text-xs" : "text-sm"
          } mx-auto max-w-xs text-gray-400 lg:max-w-md lg:text-lg`}
        >
          Equipped with the tools to build innovative websites and captivating
          apps.
        </h2>
      </div>
      <div className="techthatiknow-animation-move techthatiknow-animation-duration-1 animation-direction-normal flex space-x-3 lg:space-x-5">
        {shuffleArray(DataSet).map((data, i) => (
          <Card
            key={i}
            isMobile={isMobile}
            ImageSrc={data.Image}
            Name={data.Technology_Name}
            Company={data.Company_Name}
            Description={data.Technology_Description}
          />
        ))}
      </div>
      <div className="techthatiknow-animation-move techthatiknow-animation-duration-2 animation-direction-reverse flex space-x-3 lg:space-x-5">
        {shuffleArray(DataSet).map((data, i) => (
          <Card
            key={i}
            isMobile={isMobile}
            ImageSrc={data.Image}
            Name={data.Technology_Name}
            Company={data.Company_Name}
            Description={data.Technology_Description}
          />
        ))}
      </div>
      <div className="techthatiknow-animation-move techthatiknow-animation-duration-3 animation-direction-normal flex space-x-3 lg:space-x-5">
        {shuffleArray(DataSet).map((data, i) => (
          <Card
            key={i}
            isMobile={isMobile}
            ImageSrc={data.Image}
            Name={data.Technology_Name}
            Company={data.Company_Name}
            Description={data.Technology_Description}
          />
        ))}
      </div>
      <div className="to absolute left-0 top-0 z-10 hidden h-full w-[100px] bg-gradient-to-r from-body-color to-transparent lg:flex" />
      <div className="to absolute right-0 top-0 z-10 hidden h-full w-[100px] bg-gradient-to-l from-body-color to-transparent lg:flex" />
    </div>
  );
}

function Card({
  Name,
  Company,
  Description,
  ImageSrc,
  isMobile,
}: {
  Name: string;
  Company: string;
  Description: string;
  ImageSrc: StaticImageData;
  isMobile: boolean;
}) {
  return (
    <div className="flex h-[150px] min-h-[150px] w-[375px] min-w-[375px] overflow-hidden rounded-xl bg-techthatiknow-color lg:h-[200px] lg:min-h-[200px] lg:w-[500px] lg:min-w-[500px]">
      <div className="relative block aspect-square h-[150px] min-h-[150px] w-[113px] min-w-[113px] bg-gray-600 lg:h-[200px] lg:min-h-[200px] lg:w-[150px] lg:min-w-[150px]">
        <Image
          src={ImageSrc}
          fill
          sizes="(min-width: 1024px) 150px, 113px"
          alt="Company logo"
        />
      </div>
      <div className="relative flex flex-col p-4 text-start">
        <h4
          className={`${
            isMobile ? "text-sm" : "text-base"
          } font-[800] lg:mt-5 lg:text-xl`}
        >
          {Name}
        </h4>
        <h6
          className={`mt-1 ${
            isMobile ? "text-xs" : "text-sm"
          } font-[700] text-gray-300`}
        >
          {Company}
        </h6>
        <p
          className={`mt-5 ${
            isMobile ? "line-clamp-3 text-xs" : "line-clamp-2 text-sm"
          } text-gray-400 lg:mt-10 lg:text-sm`}
        >
          {Description}
        </p>
        {/* <div className="absolute right-3 top-3 flex space-x-[5px]">
          <div className="h-[15px] w-[5px] bg-techthatiknow-button-color" />
          <div className="h-[15px] w-[5px] bg-techthatiknow-button-color" />
        </div> */}
        <span className="absolute right-2.5 top-2 text-5xl text-slate-700 lg:text-7xl">
          &quot;
        </span>
      </div>
    </div>
  );
}

const shuffleArray = (array: DataProps) => {
  const shuffled = [...array];
  let currentIndex = shuffled.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shuffled[currentIndex];
    shuffled[currentIndex] = shuffled[randomIndex];
    shuffled[randomIndex] = temporaryValue;
  }

  return shuffled;
};

type DataProps = {
  Image: StaticImageData;
  Technology_Name: string;
  Company_Name: string;
  Technology_Description: string;
}[];

const DataSet: DataProps = [
  {
    Image: NextJs_Logo,
    Technology_Name: "NextJs",
    Company_Name: "Vercel Inc.",
    Technology_Description:
      "Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
  },
  {
    Image: React_Logo,
    Technology_Name: "React",
    Company_Name: "Meta Open Source",
    Technology_Description:
      "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
  },
  {
    Image: Sanity_Logo,
    Technology_Name: "Sanity",
    Company_Name: "Sanity",
    Technology_Description:
      "Sanity delivers content anywhere (just like a headless CMS) Beyond that, Sanity gives you total composability. A fully decoupled, real-time content back end. Entirely customizable content workspaces. Be ready for what's next.",
  },
  {
    Image: Firebase_Logo,
    Technology_Name: "Firebase",
    Company_Name: "Google LLC",
    Technology_Description:
      "Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.",
  },
  {
    Image: Mongodb_Logo,
    Technology_Name: "MongoDB",
    Company_Name: "MongoDB, Inc.",
    Technology_Description:
      "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License.",
  },
  {
    Image: Stripe_Logo,
    Technology_Name: "Stripe",
    Company_Name: "Stripe, Inc.",
    Technology_Description:
      "Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.",
  },
  {
    Image: HTML_Logo,
    Technology_Name: "HTML",
    Company_Name: "World Wide Web Consortium (W3C",
    Technology_Description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
  },
  {
    Image: CSS_Logo,
    Technology_Name: "CSS",
    Company_Name: "World Wide Web Consortium (W3C)",
    Technology_Description:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },
  {
    Image: JavaScript_Logo,
    Technology_Name: "JavaScript",
    Company_Name: "ECMAScript ",
    Technology_Description:
      "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
  },
  {
    Image: TypeScript_Logo,
    Technology_Name: "TypeScript",
    Company_Name: "Microsoft",
    Technology_Description:
      "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.",
  },
  {
    Image: NodeJs_Logo,
    Technology_Name: "Node.js",
    Company_Name: "Node.js Foundation",
    Technology_Description:
      "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.",
  },
  {
    Image: MUI_Logo,
    Technology_Name: "MUI",
    Company_Name: "Material UI SAS",
    Technology_Description:
      "MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.",
  },
  {
    Image: NextUI_Logo,
    Technology_Name: "NextUI",
    Company_Name: "NextUI Inc.",
    Technology_Description:
      "NextUI provides a custom TailwindCSS plugin that allows you to customize the default themes or create your own.",
  },
  {
    Image: Mongoose_Logo,
    Technology_Name: "Mongoose",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.",
  },
  {
    Image: Zustand_Logo,
    Technology_Name: "Zustand",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.",
  },
  {
    Image: Tailwind_Logo,
    Technology_Name: "Tailwind",
    Company_Name: "Tailwind Labs Inc.",
    Technology_Description:
      "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.",
  },
  {
    Image: Clerk_Logo,
    Technology_Name: "Clerk",
    Company_Name: "Clerk Inc.",
    Technology_Description:
      "Clerk is more than a sign-in box. Integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.",
  },
  {
    Image: Redux_Logo,
    Technology_Name: "Redux",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark",
  },
  {
    Image: Express_Logo,
    Technology_Name: "Express",
    Company_Name: "Node.js Foundation",
    Technology_Description:
      "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
  },
  {
    Image: GraphQL_Logo,
    Technology_Name: "GraphQL",
    Company_Name: "GraphQL Foundation",
    Technology_Description:
      "GraphQL is an open-source data query and manipulation language for APIs and a query runtime engine. GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API.",
  },
  {
    Image: Tremor_Logo,
    Technology_Name: "Tremor",
    Company_Name: "Open-Source Project",
    Technology_Description:
      "The react library to build dashboards fast. Built in Athens, Vienna, London, and San Francisco.",
  },
  {
    Image: Stepzen_Logo,
    Technology_Name: "StepZen",
    Company_Name: "IBM",
    Technology_Description:
      "The quickest way to get started is to autogenerate your schemas and resolvers. Specify an existing data source using the stepzen import command. StepZen introspects the endpoint and generates a GraphQL schema for you, including the @rest, @dbquery, and @graphql directives. Link types using @materializer.",
  },
];
