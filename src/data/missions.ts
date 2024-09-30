
export type UserType = {
    id: number;
    name: string;
}

export type MissionType = {
    id: number;
    title: string;
    date: string;
    applicants?: UserType[];
    salary: number;
    badge?: string;
}

export const missions: MissionType[] = [
    {
        id: 1,
        title: "Réceptionniste de nuit",
        date: "01/22/2025",
        applicants: [
            {
                id: 1,
                name: "Maxime"
            },
            {
                id: 2,
                name: "Teodora"
            },
            {
                id: 3,
                name: "Valentin"
            },
            {
                id: 4,
                name: "Didier"
            },
        ],
        salary: 200.00,
        badge: "Badge"
    },
    {
        id: 2,
        title: "Réceptionniste de jour",
        date: "03/07/2025",
        applicants: [
            {
                id: 1,
                name: "Maxime"
            },
            {
                id: 2,
                name: "Teodora"
            },
            {
                id: 3,
                name: "Valentin"
            },
            {
                id: 4,
                name: "Didier"
            },
            {
                id: 5,
                name: "Franck"
            },
        ],
        salary: 150.00,
        badge: "Badge"
    },
    {
        id: 3,
        title: "Concierge de nuit",
        date: "01/22/2025",
        salary: 130.00
    },
    {
        id: 4,
        title: "Superviseur de jour",
        date: "01/22/2025",
        salary: 200.00
    },
    {
        id: 5,
        title: "Aide réception",
        date: "01/22/2025",
        applicants: [
            {
                id: 1,
                name: "Maxime"
            },
            {
                id: 2,
                name: "Teodora"
            },
            {
                id: 3,
                name: "Valentin"
            },
            {
                id: 4,
                name: "Didier"
            },
        ],
        salary: 200.00
    },
    {
        id: 6,
        title: "Agent de sécurité",
        date: "01/22/2025",
        applicants:  [
            {
                id: 1,
                name: "Maxime"
            },
            {
                id: 2,
                name: "Teodora"
            },
        ],
        salary: 200.00
    },
    {
        id: 7,
        title: "Assistant administratif",
        date: "01/22/2025",
        applicants: [
            {
                id: 1,
                name: "Maxime"
            },
            {
                id: 2,
                name: "Teodora"
            },
            {
                id: 3,
                name: "Valentin"
            },
            {
                id: 4,
                name: "Didier"
            },
            {
                id: 5,
                name: "Franck"
            },
            {
                id: 6,
                name: "Arthur"
            },
        ],
        salary: 200.00
    },
    {
        id: 8,
        title: "Réceptionniste de jour",
        date: "01/22/2025",
        salary: 200.00
    }
]