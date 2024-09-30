import Image from "next/image";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MissionType } from "@/src/data/missions";



type MissionCardProps = {
    mission: MissionType;
};

export default function MissionCard({ mission }: MissionCardProps) {
    return (
        <article className="border border-border text-sm rounded-sm">
            <div className="py-[19px] px-4 flex justify-between ">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[18px]">{mission.title}</h2>
                    <div className="flex items-center gap-2">
                        <CalendarTodayIcon className="hidden xs:block w-4 h-4 text-textShape" />
                        <span className="hidden xs:block">{mission.date}</span>
                        {mission.badge && (
                            <span className="text-subText font-thin bg-grayLight rounded-md text-[12px] px-1">
                                Badge
                            </span>
                        )}
                    </div>
                    <div className="h-12 flex w-full flex-col mt-4 xs:hidden">
                        <div className="flex gap-2 items-center">
                            <CalendarTodayIcon className=" w-4 h-4 text-textShape" />
                            <span className="">{mission.date}</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <AccessTimeIcon className=" w-4 h-4 text-textShape" />
                            <span className="">horaires</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-end">
                    <h2 className="text-[18px]">{mission.salary}€</h2>
                    <div className="hidden xs:flex items-center gap-2 ">
                        <AccessTimeIcon className="w-4 h-4 text-textShape" />
                        <span>horaires</span>
                    </div>
                </div>
            </div>
            <div className="p-4 border-t border-grayLight grid justify-center gap-8 ">
                <div className="relative items-center">
                    {mission.applicants?.length &&
                        mission.applicants.map((applicant) => (
                            <Image
                                src={
                                    "https://xsgames.co/randomusers/avatar.php?g=male"
                                }
                                alt="Photo de profile utilisateur"
                                className="w-6 h-6 rounded-full border-2 border-white absolute"
                                width={24}
                                height={24}
                                key={applicant.id}
                                style={{
                                    left: `${
                                        mission.applicants!.indexOf(applicant) *
                                        12
                                    }px`,
                                    transform: "translateX(150%)",
                                }}
                            />
                        ))}
                </div>
                {
                    mission.applicants?.length ? (
                        <span className="text-primary">Voir les {mission.applicants!.length} candidatures</span>
                    ) : (
                        <span>Aucun candidat n&apos;a postulé pour le moment.</span>
                    )
                }
            </div>
        </article>
    );
}

