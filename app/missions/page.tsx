import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { getAllMissions } from "@/src/store-requests";
import Table from "../components/missionsPage/Table";
import MissionCard from "../components/missionsPage/MissionCard";
import { MissionType } from "@/src/data/missions";
import Form from "../components/missionsPage/Form";

export default async function Page() {
    const missions: MissionType[] = await getAllMissions();

    return (
        <>
            <Form/>
            <div className="overflow-x-auto">
                <Table missions={missions} />
                <div className="flex flex-col gap-2 lg:hidden">
                    {missions.map((mission, index) => (
                        <MissionCard mission={mission} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
