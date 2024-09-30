"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BurgerMenu from "./BurgerMenu";


export default function BurgerBtn() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <>
            <BurgerMenu isOpen={isOpen} handleClick={handleClick} />
            <button
                className="sm:hidden"
                onClick={() => {
                    setIsOpen((prev) => !prev);
                }}
            >
                <MenuIcon className=" w-8 text-textPrimary" />
            </button>
        </>
    );
}
