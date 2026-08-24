// Conference data
// Dates and locations are verified against official conference sources.
const conferenceDataLastVerified = "2026-08-24";

const conferences = [
    {
        name: "ACM MobiCom 2027",
        field: "Mobile Computing",
        submissionDeadline: "2026-09-02",
        abstractDeadline: "2026-08-26",
        registrationDeadline: null,
        location: "TBA",
        conferenceDate: "2027-10-18",
        website: "https://www.sigmobile.org/mobicom/2027/",
        cfpLink: "https://www.sigmobile.org/mobicom/2027/cfp.html"
    },
    {
        name: "ACM MobiSys 2026",
        field: "Mobile Systems",
        submissionDeadline: "2025-12-05",
        abstractDeadline: "2025-11-28",
        registrationDeadline: null,
        location: "Cambridge, UK",
        conferenceDate: "2026-06-22",
        website: "https://www.sigmobile.org/mobisys/2026/",
        cfpLink: "https://www.sigmobile.org/mobisys/2026/call_for_papers/"
    },
    {
        name: "ACM MobiHoc 2026",
        field: "Mobile Networks and Computing",
        submissionDeadline: "2026-04-20",
        abstractDeadline: "2026-04-13",
        registrationDeadline: null,
        location: "Tokyo, Japan",
        conferenceDate: "2026-11-23",
        website: "https://www.sigmobile.org/mobihoc/2026/",
        cfpLink: "https://www.sigmobile.org/mobihoc/2026/cfp.html"
    },
    {
        name: "IEEE INFOCOM 2027",
        field: "Networking",
        submissionDeadline: "2026-07-31",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "Honolulu, Hawaii, USA",
        conferenceDate: "2027-05-24",
        website: "https://infocom2027.ieee-infocom.org/",
        cfpLink: "https://www.comsoc.org/conferences-events/ieee-international-conference-computer-communications-2027"
    },
    {
        name: "IEEE ICC 2027",
        field: "Communications",
        submissionDeadline: "2026-10-02",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "Washington, District of Columbia, USA",
        conferenceDate: "2027-05-30",
        website: "https://icc2027.ieee-icc.org/",
        cfpLink: "https://www.comsoc.org/conferences-events/ieee-international-conference-communications-2027"
    },
    {
        name: "IEEE GLOBECOM 2026",
        field: "Communications",
        submissionDeadline: "2026-04-01",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "Macau, China",
        conferenceDate: "2026-12-07",
        website: "https://globecom2026.ieee-globecom.org/",
        cfpLink: "https://globecom2026.ieee-globecom.org/"
    },
    {
        name: "ACM/IEEE SenSys 2027",
        field: "Embedded AI and Sensing Systems",
        submissionDeadline: "2026-06-05",
        abstractDeadline: "2026-05-29",
        registrationDeadline: null,
        location: "Boulder, Colorado, USA",
        conferenceDate: "2027-05-17",
        website: "https://sensys.acm.org/2027/",
        cfpLink: "https://sensys.acm.org/2027/cfp.html"
    },
    {
        name: "NDSS 2027",
        field: "Security",
        submissionDeadline: "2026-08-19",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "Seoul, Republic of Korea",
        conferenceDate: "2027-03-22",
        website: "https://www.ndss-symposium.org/ndss2027/",
        cfpLink: "https://www.ndss-symposium.org/ndss2027/submissions/call-for-papers/"
    },
    {
        name: "ACM CCS 2027",
        field: "Security",
        submissionDeadline: null,
        abstractDeadline: null,
        registrationDeadline: null,
        location: "Atlanta, Georgia, USA",
        conferenceDate: null,
        conferenceDateText: "October 2027",
        website: "https://www.sigsac.org/ccs/CCS2027/",
        cfpLink: "https://www.sigsac.org/ccs/CCS2027/"
    },
    {
        name: "IEEE CNS 2026",
        field: "Security",
        submissionDeadline: "2026-05-11",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "Newark, Delaware, USA",
        conferenceDate: "2026-09-14",
        website: "https://cns2026.ieee-cns.org/",
        cfpLink: "https://www.comsoc.org/conferences-events/ieee-conference-communications-and-network-security-2026"
    },
    {
        name: "IEEE MASS 2026",
        field: "Mobile Ad-Hoc and Smart Systems",
        submissionDeadline: "2026-05-24",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "Hong Kong SAR, China",
        conferenceDate: "2026-10-21",
        website: "https://mass-conf.github.io/2026/",
        cfpLink: "https://mass-conf.github.io/2026/"
    },
    {
        name: "IEEE ICDCS 2026",
        field: "Distributed Computing",
        submissionDeadline: "2026-01-14",
        abstractDeadline: "2026-01-07",
        registrationDeadline: null,
        location: "Gwangju, South Korea",
        conferenceDate: "2026-07-20",
        website: "https://icdcs2026.icdcs.org/",
        cfpLink: "https://icdcs2026.icdcs.org/call-for-papers"
    },
    {
        name: "IEEE ICNP 2026",
        field: "Network Protocols",
        submissionDeadline: "2026-05-22",
        abstractDeadline: "2026-05-15",
        registrationDeadline: null,
        location: "Tempe, Arizona, USA",
        conferenceDate: "2026-10-05",
        website: "https://icnp26.cs.ucr.edu/",
        cfpLink: "https://icnp26.cs.ucr.edu/cfp.html"
    },
    {
        name: "IEEE SECON 2026",
        field: "Sensor Networks",
        submissionDeadline: "2025-12-30",
        abstractDeadline: "2025-12-08",
        registrationDeadline: null,
        location: "Pisa, Italy",
        conferenceDate: "2026-06-03",
        website: "https://secon2026.ieee-secon.org/",
        cfpLink: "https://www.comsoc.org/conferences-events/ieee-international-conference-sensing-communication-and-networking-2026"
    },
    {
        name: "ICCCN 2026",
        field: "Networking",
        submissionDeadline: "2026-02-13",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "TBA",
        conferenceDate: "2026-07-27",
        website: "https://www.icccn.org/icccn2026/",
        cfpLink: "https://www.icccn.org/icccn2026/call-for-papers"
    },
    {
        name: "ACM WiSec 2026",
        field: "Security",
        submissionDeadline: "2025-11-18",
        abstractDeadline: null,
        registrationDeadline: null,
        location: "TBA",
        conferenceDate: "2026-06-30",
        website: "https://wisec26.events.cispa.de/",
        cfpLink: "https://wisec26.events.cispa.de/call-for-papers"
    }
];

