import me from "/me.png";

export const Hero = () => {
  return (
    <section className="mb-16 flex flex-col-reverse lg:flex-row">
      <div className="flex grow justify-center">
        <img src={me} alt="Tomasz Jurek" />
      </div>
      <div className="flex items-center justify-end">
        <div className="bg-hero-pattern bg-cover text-right">
          <p className="inline bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 bg-clip-text text-2xl font-bold uppercase text-transparent lg:mb-4 lg:text-4xl">
            Hello!
          </p>
          <h1 className="my-2 mb-8 text-4xl sm:text-5xl lg:my-8 lg:mb-20 xl:text-6xl">
            My Name is Tomek And I'm
            <span className="block text-cyan-600">Frontend Developer</span>
          </h1>
          <button className="mb-6 rounded-full bg-cyan-600 px-6 py-2 uppercase">
            Contact me
          </button>
          <button className="relative ml-6 px-4 py-2 uppercase before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-1/3 before:-translate-x-1/2 before:bg-yellow-300 before:transition-all hover:before:w-4/5 hover:before:transition-all">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};
