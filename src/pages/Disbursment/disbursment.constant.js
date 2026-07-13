import { CloudDownload, RefreshCcw } from "lucide-react";

export const DISBURS_CARDS_CONSTANT = [
    {
        id: 1,
        title: "Total Disbursments",
        desc: "8"
    },
    {
        id: 2,
        title: "Total Disbursmed Amount",
        desc: "₹ 3,62,50,000"
    },
    {
        id: 3,
        title: "Submitted",
        desc: "12"
    },
    {
        id: 4,
        title: "Verified",
        desc: "1"
    },
    {
        id: 5,
        title: "Processed",
        desc: "5"
    },
    {
        id: 6,
        title: "Audited",
        desc: "12"
    },
]

export const DISBURS_USERS = [
    ...Array.from({ length: 20 }, (_, i) => {
        const idNum = 1001 + i;

        const statuses = ["Draft", "Submitted", "Verified", "Processed", "Audited"];
        const banks = [
            "HDFC Bank",
            "ICICI Bank",
            "Axis Bank",
            "Kotak Mahindra Bank",
            "State Bank of India",
            "Punjab National Bank",
        ];
        const names = [
            "Arjun Mehta",
            "Priya Singh",
            "Mohit Agarwal",
            "Simran Anand",
            "Rahul Sharma",
            "Neha Gupta",
            "Karan Iyer",
            "Anjali Rao",
            "Vikram Desai",
            "Sneha Joshi",
        ];

        const name = names[i % names.length];
        const status = statuses[i % statuses.length];
        const bank = banks[i % banks.length];

        return {
            id: `LN00${i + 2}-24-${idNum}`,

            disbursementDate: `${(i % 28) + 1}/04/2024`,
            status,
            applicantName: name,
            bankName: bank,
            sanctionedAmount: 5000 + i * 2000,
            verifiedAmount: 1000000 + i * 500000,
            referralPercent: (0.1 + i * 0.05).toFixed(3),
            creditExecutive: name,

            statusType: status.toLowerCase(),

            details: {
                loanId: `Loan - 2026-${40000 + i}`,
                loanType: i % 2 === 0 ? "Home Loan" : "Business Loan",
                stage: ["Lead", "Approved", "Disbursed"][i % 3],

                applicantInfo: [
                    {
                        name,
                        type: "Applicant",
                        email: `${name.split(" ")[0].toLowerCase()}@gmail.com`,
                        phone: `+91 98${Math.floor(10000000 + i * 12345)}`,
                    },
                    {
                        name: "Co Applicant",
                        type: "Co-applicant",
                        email: `co${i}@gmail.com`,
                        phone: `+91 97${Math.floor(10000000 + i * 54321)}`,
                    },
                ],

                loanDetails: {
                    sanctionDate: `${(i % 28) + 1}/11/2024`,
                    loanAmount: 3000000 + i * 100000,
                    verifiedAmount: 2800000 + i * 90000,
                    bank,
                },

                disbursements: [
                    {
                        id: `DB00${i}-24-${idNum}`,
                        date: `${(i % 28) + 1}-11-2024`,
                        amount: 200000 + i * 10000,
                        verifiedAmount: 190000 + i * 9000,
                        utr: `42671589${300 + i}`,
                        status,
                    },
                ],

                commission: [
                    {
                        partyName: "Amit Sharma",
                        commissionPercent: 0.75,
                        amount: 30000 + i * 2000,
                        invoice: `RMS-INV-2026-00${i}`,
                        status: "Paid",
                    },
                ],

                brokers: [
                    {
                        name: "Broker A",
                        commission: 0.75,
                        referralFee: 3000 + i * 200,
                        poNumber: `RMS-PO-2026-00${i}`,
                        status: "Paid",
                    },
                ],

                notes: `Loan case ${i + 1} processed successfully with all documents verified.`,

                documents: [
                    {
                        name: "Invoice.pdf",
                        size: "800 KB",
                    },
                ],
            },
        };
    }),
];

export const DISBURS_CAPSULE_DATA = [
    {
        id: 1,
        icon: RefreshCcw,
        title: "Activity"
    },
    {
        id: 2,
        icon: CloudDownload,
        title: "Import Excel"
    }
]



export const SINGLE_DISBURS_CARDS_CONSTANT = [
    {
        id: 1,
        title: "Total Sanctioned Amount",
        accessorKey: "sanctionedAmount",
        desc: "₹4,80,000"
    },
    {
        id: 2,
        title: "Total Disbursment Amount",
        accessorKey: "verifiedAmount",

        desc: "₹ 42,75,000"
    },
    {
        id: 3,
        title: "Comission Income",
        accessorKey: "commission",
        desc: "₹52,450"
    },
    {
        id: 4,
        title: "Referral Fee",
        desc: "₹ 18,750",
        accessorKey: "referral"
    },
    {
        id: 5,
        title: "Net Income",
        desc: "₹ 71,200",
        accessorKey: "total"
    }
]

export const SINGLE_DISBURS_LOAN_DETAILS = [
    {
        id: 1,
        name: "Loan Id",
        label: "loanId"
    },
    {
        id: 2,
        name: "Loan Type",
        label: "loantype"
    },
    {
        id: 3,
        name: "Bank",
        label: "bank"
    },
    {
        id: 4,
        name: "Stage",
        label: "stage"
    },
]

export const SINGLE_DISBURS_SANCTION_DETAILS = [
    {
        id: 1,
        name: "Sanctioned Date",
        label: "sanctionDate"
    },
    {
        id: 2,
        name: "Loan Sanctioned Amount",
        label: "sanctionAmt"
    },
    {
        id: 3,
        name: "Verified Sanctioned Amount",
        label: "verifiedAmt"
    },
]

export const SINGLE_DISBURS_TEAM_DETAILS = [
    {
        id: 1,
        name: "Bank Executive Name",
        label: "bankExecutive"
    },
    {
        id: 2,
        name: "Credit Executive Details",
        label: "creditExecutive"
    },
    {
        id: 3,
        name: "Source",
        label: "source"
    },
]

export const SINGLE_DISBURSE_TABLE_NAME = [
    {
        id: 1,
        name: "Applicant Information"
    },
    {
        id: 2,
        name: "Loan Details"
    },
    {
        id: 3,
        name: "Disbursements Information"
    },
    {
        id: 4,
        name: "Commission"
    },
    {
        id: 5,
        name: "Broker Information"
    },
    {
        id: 6,
        name: "Additional Information"
    },
    {
        id: 7,
        name: "Documents"
    },
]

export const STATUS_STYLES = {
    Draft: "bg-gray-100 text-gray-600 ring-1 ring-gray-400",
    Verified: "bg-info/10 text-info ring-1 ring-info",
    Submitted: "bg-success/10 text-success ring-1 ring-success",
    Processed: "bg-warning/10 text-[#A16207] ring-1 ring-warning",
    Rejected: "bg-error/40 text-error ring-1 ring-error",
    Audited: "bg-darkViolet/10 text-darkViolet ring-1 ring-darkViolet"
};

export const DOT_STYLES = {

    Draft: "bg-gray-500",
    Verified: "bg-info",
    Submitted: "bg-success",
    Processed: "bg-warning",
    Rejected: "bg-error",
    Audited: "bg-darkViolet"

}

export const VIEW_ACTIVITY_LOG = [
    {
        id: 1,
        title: "Loan Created",
        name: "Amit Sharma",
        time: "20 May (9:20 AM)",
        child: false
    },
    {
        id: 2,
        title: "Status Created",
        name: "Amit Sharma",
        time: "20 May (9:20 AM)",
        child: true
    }
]