'use client'
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChecklistIcon from "@mui/icons-material/Checklist";

export default function Form() {

    
    return (
        <form className="flex gap-2 text-sm">
            <div className="hidden xs:flex border border-border py-3 px-2  gap-2 rounded-sm flex-grow">
                <div className="">
                    <SearchIcon className="h-4 w-4" />
                </div>
                <input
                    type="text"
                    className=" outline-none placeholder:text-subText font-light w-full"
                    placeholder="Rechercher par métier, date JJ/MM/AAAA ou candidat"
                />
            </div>
            <div className="hidden xs:flex border border-border py-3 px-4 items-center gap-2 font-light">
                <CalendarTodayIcon className="h-4 w-4" />
                <span>Dates</span>
            </div>
            <div className="hidden xs:flex border border-border py-3 px-4 items-center gap-2 font-light lg:hidden">
                <ChecklistIcon className="h-4 w-4" />
                <button type="button">Séléctionner</button>
            </div>
            <div className="flex gap-6 w-full justify-end font-extralight py-4 xs:hidden">
                <button>
                    <SearchIcon />
                </button>
                <button>
                    <CalendarTodayIcon />
                </button>
                <button>
                    <ChecklistIcon />
                </button>
            </div>
        </form>
    );
}
