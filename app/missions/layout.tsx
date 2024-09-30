import React, { PropsWithChildren } from 'react'
import NavLink from '../components/missionsPage/NavLink';
import { getAllMissions } from '@/src/store-requests';
import { MissionType } from "@/src/data/missions";
import BurgerBtn from '../components/BurgerBtn';

export const navLinks = [
    { name: "A pourvoir", path: "/missions" }, 
    { name: "En cours", path: "/missions/en-cours" },
    { name: "A venir", path: "/missions/a-venir" },
    { name: "Terminées", path: "/missions/terminees" },
    { name: "Annulées", path: "/missions/annulees" }
];

export default async function Layout({children}: PropsWithChildren) {

    

    const missions: MissionType[] = await getAllMissions()
    
    
    return (
        <>
            <header className=" w-full border-b border-border overflow-clip">
				<div className='flex gap-2 pb-4 items-center justify-between'>
                    <div className='flex gap-2'>
                        <h1 className="text-[18px] font-[500]">
                            Missions
                        </h1>
                        <span className='text-[12px] font-[400]'>
                            {
                                missions?.length
                            }
                        </span>
                    </div>
                    <BurgerBtn/>
                </div>
                <nav>
                    <ul className='flex gap-6 font-[400] min-w-[468px] '>
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <NavLink key={index} link={link}/>
                                )
                            })
                        }
                    </ul>
                </nav>
			</header>
            <section className='py-4 flex flex-col gap-4'>
                {children}
            </section>
        </>
    )
}
