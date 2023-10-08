import logo from "/logo.png";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-start sm:justify-center">
          <li className="sm:order-3">
            <img src={logo} alt="logo" />
          </li>
          <li className="mx-2 hidden items-center text-lg sm:flex">
            <a href="#">home</a>
          </li>
          <li className="ml-2 mr-4 hidden items-center text-lg sm:flex">
            <a href="#">about</a>
          </li>
          <li className="ml-4 mr-2 hidden items-center text-lg sm:order-4 sm:flex">
            <a href="#">projects</a>
          </li>
          <li className="mx-2 hidden items-center text-lg sm:order-5 sm:flex">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
