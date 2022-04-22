import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "./Button";

const Navbar: FC = () => {
  const { pathname } = useRouter();
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    setOpened(false);
  }, [pathname]);

  return (
    <nav
      className={`${pathname != "/" ? "bounded fixed" : ""}${
        opened ? "opened" : ""
      }`}
    >
      {/* Nav */}
      <div className={`container ${opened ? "opened" : ""}`}>
        <div className="logo">
          <Link href={"/"}>
            <a className="logo-full">
              <img src="/logo.svg" height={35} alt="logo" />
            </a>
          </Link>
          <Link href={"/"}>
            <a className="icon">
              <img src="/icon.svg" height={35} alt="logo" />
            </a>
          </Link>
        </div>
        <div>
          <ul className="h-tree">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
          <button className="hamburgerMenu" onClick={() => setOpened(!opened)}>
            <img src="/hamburger.svg" alt="hamburger menu" />
          </button>
        </div>
        {pathname == "/" && (
          <div className="cta">
            <Button style="primary" type="link" href="/subscribe">
              Subscribe
            </Button>
          </div>
        )}
        {opened && (
          <ul className="tree fade">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
