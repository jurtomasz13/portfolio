import logo from "/logo.png";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-start lg:justify-center">
          <li className="lg:order-3">
            <img src={logo} alt="logo" />
          </li>
          <li className="mx-2 hidden items-center text-lg lg:flex">
            <a href="#">home</a>
          </li>
          <li className="ml-2 mr-4 hidden items-center text-lg lg:flex">
            <a href="#">about</a>
          </li>
          <li className="ml-4 mr-2 hidden items-center text-lg lg:order-4 lg:flex">
            <a href="#">projects</a>
          </li>
          <li className="mx-2 hidden items-center text-lg lg:order-5 lg:flex">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
