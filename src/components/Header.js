import Logo from "../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section className="header fixed top-0 left-0 right-0 w-full hidden xmd:flex items-center z-50">
      <nav className="px-5 flex justify-between w-full items-center h-[125px]">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo"  loading="lazy" className="w-[270px]" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {/* Links  */}
          <ul className="flex items-center">
            {/* How to play Link  */}
            <li>
              <Link
                to="howtoplay"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white cursor-pointer block px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500"
              >
                How to play
              </Link>
            </li>

            {/* Vision Link  */}
            <li>
              <Link
                to="vision"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white cursor-pointer block px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500"
              >
                Vision
              </Link>
            </li>

            {/* Team Link  */}
            <li>
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white cursor-pointer block px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500"
              >
                Team
              </Link>
            </li>

            {/* About us Link  */}
            <li>
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white cursor-pointer block px-6 f-helvetica-bold text-sm transition-all duration-200 ease-linear hover:text-red_500"
              >
                About us
              </Link>
            </li>
          </ul>

          {/* Social Links  */}
          <ul className="flex items-center w-28 justify-between mx-2">
            <li>
              <a
                href="https://discord.gg/pjT65vx4WM"
                target="_blank"
                className="text-white text-[28px] transition-all duration-200 ease-linear hover:text-red_500"
              >
                <FaDiscord />
              </a>
            </li>
            <li>
              <a
                href="twitter.com/huslrspoker"
                target="_blank"
                className="text-white text-2xl transition-all duration-200 ease-linear hover:text-red_500"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/joinhuslrspoker"
                target="_blank"
                className="text-white text-2xl transition-all duration-200 ease-linear hover:text-red_500"
              >
                <FaTelegramPlane />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
