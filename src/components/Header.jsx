import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { SiStyleshare } from 'react-icons/si';

const Header = () => {
  return (
    <div className=" flex justify-between px-5 py-5 lg:px-14 md:px-10 bg-secondary">
      <div className=" flex items-center gap-4">
        <SiStyleshare size={35} />
        <span className=" text-xl font-bold">StylesSphere</span>
      </div>
      <nav className=" hidden lg:flex items-center gap-8 font-semibold px-20 ">
        <a href="/">Categories</a>
        <a href="/">Sale</a>
        <a href="/">Collaboration</a>
        <a href="/">Coming soon</a>
      </nav>
      <div className=" flex items-center gap-4">
        <FaSearch className=" hidden md:flex" size={20} />
        <FaShoppingCart className=" hidden md:flex" size={20} />
        <button className=" border-black border-[1.5px] px-2 py-1 rounded-lg hover:bg-black hover:text-secondary">
          Login/Register
        </button>
      </div>
    </div>
  );
};
export default Header;
