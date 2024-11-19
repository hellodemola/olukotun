export interface ICerts  {
    media: string,
    link?: string,
    label: string,
}

export const certs: ICerts [] = [
    {
        media: "/certs/aws.png",
        link: "/certs/aws.png",
        label: "AWS Certified SysOps Administrator",
    },
    {
        media: "/certs/safe.png",
        link: "/certs/safe.png",
        label: "SA – Leading SAFe 5.0",
    },
    {
        media: "/certs/csm.png",
        link: "",
        label: "CSM – Certified Scrum Master"
    },
    {
        media: "/certs/psm1.png",
        link: "",
        label: "PSM 1 - Professional Scrum Master 1 (PSM 1)"
    },
    {
        media: "/certs/pma-acp.png",
        link: "",
        label: "Project Management Institute Agile Certified Professional (PMI-ACP)  "
    },
    {
        media: "/certs/popm.png",
        link: "",
        label: "Product Owner Product Management Certification"
    },
    {
        media: "/certs/a-cspo.png",
        link: "",
        label: "Certified Scrum Product Owner (CSPO)"
    },
    // {
    //     media: "",
    //     link: "",
    //     label: "Certified Customs Specialist (CCS)"
    // }
]