"use client";
import React from "react";
import { NavLinksType } from "@/app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type NavLinkProps = {
    link: NavLinksType;
    isBurgerMenu?: boolean;
};

export default function NavLink({ link, isBurgerMenu = false }: NavLinkProps) {
    const pathname = usePathname();

    return (
        <li className="flex">
            <Link
                href={`${link.path}`}
                className={`w-full p-4 px-8 ${
                    isBurgerMenu
                        ? "flex items-center justify-between"
                        : "hover:bg-primaryLight transition-colors"
                } ${
                    pathname === link.path ||
                    (pathname.startsWith(link.path) && link.path !== "/")
                        ? "bg-primaryLight"
                        : ""
                }`}
            >
                {link.name}
                {isBurgerMenu && <KeyboardArrowRightIcon />}
            </Link>
        </li>
    );
}
