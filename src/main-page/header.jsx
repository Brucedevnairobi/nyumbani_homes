import logo from "./logo.png";

const Header = ({ description }) => (
  <header className="flex space-x-52 justify-center">
    <div className="">
      <img
        src={logo}
        alt="logo"
        className="rounded-full w-[90px] h-[90px] object-cover"
      />
    </div>
    <div className="font-bold m-5 text-xl italic text-orange-700">
      {description}
    </div>
  </header>
);

export default Header;
