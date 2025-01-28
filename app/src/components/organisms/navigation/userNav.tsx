import { LogOut } from "@/components/navigation/logOut";
import MainNavLink from "@/components/navigation/mainNavLink";

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
