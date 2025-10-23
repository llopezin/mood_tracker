import MainNavLink from "./mainNavLink";

const NonUserNav = () => {
  return (
    <>
      <MainNavLink href="/login">Log in</MainNavLink>
      <MainNavLink href="/signup">Sign up</MainNavLink>
    </>
  );
};

export default NonUserNav;
