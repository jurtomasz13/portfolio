import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { SkillBubble } from "./components/SkillBubble";
import typescriptSrc from "/logo-typescript.png";
import javascriptSrc from "/logo-javascript.png";
import nextjsSrc from "/logo-next.png";
import reactjsSrc from "/logo-react.png";
import jestSrc from "/logo-jest.png";
import rtlSrc from "/logo-rtl.png";
import graphqlSrc from "/logo-graphql.png";
import restSrc from "/logo-rest.png";
import tailwindSrc from "/logo-tailwind.png";
import styledcomponentsSrc from "/logo-styledcomponents.png";
import rwdSrc from "/logo-rwd.png";
import sassSrc from "/logo-sass.png";
import htmlSrc from "/logo-html.png";
import pythonSrc from "/logo-python.png";
import fastapiSrc from "/logo-fastapi.png";
import dockerSrc from "/logo-docker.png";
import phpSrc from "/logo-php.png";
import prestashopSrc from "/logo-prestashop.png";
import wordpressSrc from "/logo-wordpress.png";
import experienceSrc from "/experience.png";

function App() {
  return (
    <>
      <Header />
      <div className="px-6 sm:px-20 md:px-32 lg:px-48">
        <Hero />
        <Section
          id="skills"
          title="My Skills"
          subtitle="What I know"
          className="mb-16 text-center"
          key="skills"
        >
          <div className="mb-16 grid grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <SkillBubble
              key="skill-typescript"
              name="TypeScript"
              logoSrc={typescriptSrc}
              logoAlt="TypeScript"
              className="ml-auto sm:mx-auto"
            />
            <SkillBubble
              key="skill-javascript"
              name="JavaScript"
              logoSrc={javascriptSrc}
              logoAlt="JavaScript"
              className="mr-auto sm:mx-auto"
            />
            <SkillBubble
              key="skill-nextjs"
              name="Next.js"
              logoSrc={nextjsSrc}
              logoAlt="Nextjs"
              imageClass="mt-5 mb-6"
              className="ml-auto sm:mx-auto"
            />
            <SkillBubble
              key="skill-reactjs"
              name="React.js"
              logoSrc={reactjsSrc}
              logoAlt="Reactjs"
              className="mr-auto sm:mx-auto"
            />
            <SkillBubble
              key="skill-jest"
              name="Jest"
              logoSrc={jestSrc}
              logoAlt="jest"
              className="ml-auto sm:mx-auto"
            />
            <SkillBubble
              key="skill-rtl"
              name="RTL"
              logoSrc={rtlSrc}
              logoAlt="react testing library"
              className="mr-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-graphql"
              name="GraphQL"
              logoSrc={graphqlSrc}
              logoAlt="graphql"
              className="ml-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-rest"
              name="REST"
              logoSrc={restSrc}
              logoAlt="rest"
              imageClass="mb-5 mt-8"
              className="mr-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-tailwindcss"
              name="TailwindCSS"
              logoSrc={tailwindSrc}
              logoAlt="tailwind"
              className="ml-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-styledcomponents"
              name="Styled-Components"
              logoSrc={styledcomponentsSrc}
              logoAlt="styled components"
              className="mr-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-rwd"
              name="RWD"
              logoSrc={rwdSrc}
              logoAlt="responsive web design"
              className="ml-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-sass"
              name="Sass"
              logoSrc={sassSrc}
              logoAlt="sass"
              className="mr-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-html"
              name="HTML"
              logoSrc={htmlSrc}
              logoAlt="html"
              className="ml-auto text-sm sm:mx-auto"
            />
          </div>
          <div className="mb-16 grid grid-cols-2 gap-16 sm:grid-cols-3 xl:px-56">
            <SkillBubble
              key="skill-python"
              name="Python"
              logoSrc={pythonSrc}
              logoAlt="python"
              className="ml-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-fastapi"
              name="FastAPI"
              logoSrc={fastapiSrc}
              logoAlt="fastapi"
              className="mr-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-docker"
              name="Docker"
              logoSrc={dockerSrc}
              logoAlt="docker"
              className="ml-auto text-sm sm:mx-auto"
            />
          </div>
          <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 xl:px-56">
            <SkillBubble
              key="skill-php"
              name="PHP"
              logoSrc={phpSrc}
              logoAlt="php"
              className="ml-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-prestashop"
              name="Prestashop"
              logoSrc={prestashopSrc}
              logoAlt="prestashop"
              className="mr-auto text-sm sm:mx-auto"
            />
            <SkillBubble
              key="skill-wordpress"
              name="Wordpress"
              logoSrc={wordpressSrc}
              logoAlt="wordpress"
              className="ml-auto text-sm sm:mx-auto"
            />
          </div>
        </Section>
        <div className="flex">
          <Section
            id="about"
            title="More About Me"
            subtitle="Who am I?"
            key="about-me"
            className="mb-16 text-right"
            childrenClass="flex"
          >
            <div className="relative w-[80px] shrink-0 sm:w-[120px]">
              <div className="absolute -left-[190px] h-80 w-32 rotate-[60deg] bg-yellow-300 pb-[calc(100%-3.5rem)] after:absolute after:bottom-[calc(100%-3.5rem)] after:block after:h-32 after:w-32 after:rounded-full after:bg-yellow-300 lg:w-40 lg:after:bottom-[calc(100%-4.5rem)] lg:after:h-40 lg:after:w-40">
                <img
                  src={experienceSrc}
                  alt="image representing 9 months experience"
                  className="relative bottom-12 left-8 z-10 -rotate-[60deg]"
                />
              </div>
            </div>
            <div className="grow">
              <p className="mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
                Jestem web developerem z pasją do tworzenia nowoczesnych stron
                internetowych. Posiadam 9 miesięcy doświadczenia komercyjnego
                oraz dodatkowe 2 lata doświadczenia hobbystycznego. Specjalizuję
                się w technologiach takich jak Next.js, React.js, FastAPI,
                Prestashop oraz Wordpress. W przy wykorzystaniu języków
                TypeScript/JavaScript, Python oraz PHP. Dotychczas skupiałem się
                głównie na projektach e-commerce a obecnie zajmuję się ich
                utrzymaniem oraz rozwijaniem nowych funkcjonalności.
              </p>
              <button className="relative px-4 py-2 uppercase before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-1/3 before:-translate-x-1/2 before:bg-yellow-300 before:transition-all hover:before:w-4/5 hover:before:transition-all">
                Download CV
              </button>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export default App;
