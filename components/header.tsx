"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import IconArrowDropDown from "./icons/arrow-drop-down";
import cx from "classnames";
import Container from "./container";

const MENU = {
  "/": "Hakkımda",
  "/videos": "Eğitimler",
  "/photos": "Fotoğraflar",
  "/post": "Yazılar",
  "/bookmarks": "Yer İmleri",
};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();
  const clearSlash = pathname.split("/")[1];
  const path = clearSlash ? `/${clearSlash}` : "/";

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  return (
    <header className="">
      <Container>
        <nav
          className={cx(
            isNavOpen ? "flex" : "hidden",
            "flex-col gap-3 sm:!flex sm:flex-row"
          )}
        >
          {Object.keys(MENU).map((path) => {
            const isActive = path === path;
            return (
              <span key={path}>
                <NextLink href={path} className={cx(isActive ? "shine" : "")}>
                  {MENU[path]}
                </NextLink>
              </span>
            );
          })}
        </nav>

        {!isNavOpen && (
          <button
            type="button"
            className="flex select-none items-center sm:hidden"
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <span>{MENU[path]}</span>
            <IconArrowDropDown className="opacity-50" />
          </button>
        )}
      </Container>
    </header>
  );
}
