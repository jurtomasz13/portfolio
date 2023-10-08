import logo from "/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[--themeBgColor]">
      <nav>
        <ul className="flex justify-start sm:justify-center">
          <li className="mx-2 hidden items-center text-lg sm:flex">
            <a href="#">home</a>
          </li>
          <li className="ml-2 mr-4 hidden items-center text-lg sm:flex">
            <a href="#about">about</a>
          </li>
          <li className="">
            <img src={logo} alt="logo" />
          </li>
          <li className="ml-4 mr-2 hidden items-center text-lg sm:flex">
            <a href="#">projects</a>
          </li>
          <li className="mx-2 hidden items-center text-lg sm:flex">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
