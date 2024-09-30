"use client";

import NavLink from "./header/NavLink";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const navLinks = [
    { name: "Tableau de bord", path: "/" },
    { name: "Planning", path: "/planning" },
    { name: "Missions", path: "/missions" },
    { name: "Factures", path: "/factures" },
];

type BurgerMenuProps = {
    isOpen: boolean;
    handleClick: () => void;
};

export default function BurgerMenu({ isOpen, handleClick }: BurgerMenuProps) {
    return (
        <header
            className={`bg-white h-screen z-50 w-full fixed top-0 left-0 transition-all ${
                isOpen ? "block" : "hidden"
            }`}
        >
            <nav className="flex flex-col flex-grow  h-full">
                <div className=" border-2 border-primary p-4 mt-4 flex justify-between items-center">
                    <span className="text-[18px]">Menu</span>
                    <button onClick={handleClick}>
                        <CloseIcon className="w-4" />
                    </button>
                </div>

                <div className="w-full flex p-4">
                    <button className="bg-primary text-white py-[10px] rounded-sm w-full">
                        + Nouvelle mission
                    </button>
                </div>
                <ul className="h-full flex flex-col justify-between ">
                    <div className="flex flex-col">
                        {navLinks.map((link, index) => {
                            return <NavLink link={link} isBurgerMenu={true} key={index} />;
                        })}
                    </div>
                    <div className="flex flex-col gap-4 px-4 mb-12">
                        <li>
                            <Link href={"/"}>Paramètres</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Contact</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Déconnexion</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
