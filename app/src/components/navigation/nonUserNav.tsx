import MainNavLink from "./mainNavLink";

const NonUserNav = () => {
  return (
    <>
      <MainNavLink href="/login">Log in</MainNavLink>
      <MainNavLink href="/sign-up">Sign up</MainNavLink>
    </>
  );
};

export default NonUserNav;
