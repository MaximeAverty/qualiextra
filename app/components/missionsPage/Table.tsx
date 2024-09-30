
import { MissionType } from "@/src/data/missions";
import Image from "next/image";
import React from "react";

type TableProps = {
    missions: MissionType[]
}

export default function Table({missions}: TableProps) {
    return (
        <table className="hidden lg:table min-w-full  bg-white border border-border ">
            <thead className="rounded">
                <tr className="text-left font-extralight text-[12px]">
                    <th className="py-3 px-4 border-b text-subText flex items-center gap-4">
                        <input type="checkbox" className="h-4 w-4" />
                        Table header
                    </th>
                    <th className="py-2 px-4 border-b text-subText">
                        Table header
                    </th>
                    <th className="py-2 px-4 border-b text-subText">
                        Table header
                    </th>
                    <th className="py-2 px-4 border-b text-subText">
                        Table header
                    </th>
                    <th className="py-2 px-4 border-b text-subText">
                        Table header
                    </th>
                </tr>
            </thead>
            <tbody>
                {missions.map((mission) => (
                    <tr
                        key={mission.id}
                        className="hover:bg-primaryLight cursor-pointer text-sm"
                    >
                        <td className="py-3 px-4 border-b">
                            <div className="flex gap-4 items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4"
                                    id={`mission-${mission.id}`}
                                />
                                <label htmlFor={`mission-${mission.id}`}>
                                    {mission.title}
                                </label>
                            </div>
                        </td>
                        {/* Ajustement ici : évite d'appliquer flex inutilement */}
                        <td className={`py-3 px-4 border-b align-middle`}>
                            <div className="flex items-center gap-4">
                                {mission.date}
                                {mission.badge && (
                                    <span className="text-subText font-thin bg-grayLight rounded-md text-[12px] px-1">
                                        {mission.badge}
                                    </span>
                                )}
                            </div>
                        </td>
                        <td className="py-3 px-4 border-b">{mission.salary}</td>
                        <td className="py-3 px-4 border-b">Text</td>
                        <td className="py-3 px-4 border-b">
                            <div className="flex relative items-center">
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
                                                    mission.applicants!.indexOf(
                                                        applicant
                                                    ) * 12
                                                }px`,
                                            }}
                                        />
                                    ))}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
