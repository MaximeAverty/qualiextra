"use client";

import { NavLinksType } from "@/app/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
    link: NavLinksType;
};

export default function NavLink({ link }: NavLinkProps) {
    const pathname = usePathname();

    return (
        <li className="pb-2">
            <Link
                href={`${link.path}`}
                className={`${
                    pathname === link.path &&
                    "text-primary border-b-4 border-primary pb-2"
                }`}
            >
                {link.name}
            </Link>
        </li>
    );
}
