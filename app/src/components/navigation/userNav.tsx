import MainNavLink from "./mainNavLink";
import { LogOut } from "./logOut";

const UserNav = () => {
  return (
    <>
      <MainNavLink href="/">Home</MainNavLink>
      <MainNavLink href="/registry">Registry</MainNavLink>
      <LogOut />
    </>
  );
};

export default UserNav;
