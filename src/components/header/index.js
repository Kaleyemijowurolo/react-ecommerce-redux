import { HeaderWapper, Image, Logo, Profile, SearchWrapper, Ul } from "./style";
import Search from "../search";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

const Header = () => {
  const navItem = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "All products",
      to: "/all-products",
    },
    {
      text: "Why Us",
      to: "/why-us",
    },
    {
      text: "How it works",
      to: "/how-it-works",
    },
    {
      text: "For Business",
      to: "/for-business",
    },
    {
      text: "FAQ's",
      to: "/faq",
    },
  ];

  const CustomNavLink = ({ to, title }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <NavLink to={to} className={` ${match ? "active" : ""}`}>
        {title}
      </NavLink>
    );
  };

  return (
    <HeaderWapper>
      <Logo>Logo</Logo>
      <Ul>
        {navItem.map(({ text, to }, idx) => {
          return (
            <li key={idx + to}>
              <CustomNavLink to={to} title={text} />
            </li>
          );
        })}
      </Ul>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <Profile>
        <Image src="/Bag.svg" alt=" " />
        <Image src="/user.svg" alt=" " />
      </Profile>
    </HeaderWapper>
  );
};

export default Header;
