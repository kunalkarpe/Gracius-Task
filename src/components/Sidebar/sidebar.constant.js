import { ChartNoAxesCombined, ChartPie, FileTextIcon, FileUp, HandCoins, Landmark, ShieldCheck, Shredder, UsersRoundIcon, Wallet, WandSparkles } from "lucide-react";

export const SIDEBAR_DATA = [
    {
        label: "Finance",
        icon: Wallet,
        children: [],
    },
    {
        label: "Sales CRM",
        icon: ChartPie,
        children: [],
    },
    {
        label: "RMS",
        icon: Landmark,
        children: [
            {
                label: "Dashboard",
                path: "/rms/dashboard",
                icon: ChartNoAxesCombined
            },
            {
                label: "Disbursement",
                path: "/rms/disbursement",
                icon: HandCoins
            },
            {
                label: "Invoices",
                path: "/rms/invoices",
                icon: FileUp
            },
            {
                label: "PO",
                path: "/rms/po",
                icon: Shredder
            },
            {
                label: "RMS Reports",
                path: "/rms/reports",
                icon: FileTextIcon
            },
        ],
    },
    {
        label: "Compliance",
        icon: ShieldCheck,
        children: [],
    },
    {
        label: "Vendors",
        icon: UsersRoundIcon,
        children: [],
    },
    {
        label: "AI Suite",
        icon: WandSparkles,
        children: [],
    },
    {
        label: "Reports",
        icon: FileTextIcon,
        children: [],
    },
];