import { IProjectItemPropsType } from "../projects/interface";
import ImageBangiProject from "../../../assets/images/projects-bangi-finance.png";
import ImageKartjisProject from "../../../assets/images/project-kartjis.png";
import ImageInternalProject from "../../../assets/images/project-internal.png";
import Certificate01 from "@/assets/images/certificate/bangkit_mentor_certificate.jpg";
import Certificate02 from "@/assets/images/certificate/dicoding_certificate.png";
import Certificate03 from "@/assets/images/certificate/dicoding_certificate_2.png";
import Certificate04 from "@/assets/images/certificate/dicoding_certificate_3.png";
import Certificate05 from "@/assets/images/certificate/dicoding_certificate_4.png";
import { IExperienceItemPropsType } from "../experience/interface";

export const ProjectItemData: IProjectItemPropsType[] = [
  {
    title: "Financial Management System",
    link: "",
    role: "Fullstack Engineer",
    image: ImageBangiProject,
    company: "Bangi Cafe Sunset",
    description:
      "A web-based financial management system developed to replace manual Excel calculations used by Bangi Cafe Sunset. The system automates daily financial reports, including sales, discounts, taxes, and service charges, while also managing expense categories and supplier transactions. It streamlines data entry, improves accuracy, and provides clearer financial insights for daily operations.",
  },
  {
    title: "Ticketing Event Website",
    link: "",
    role: "Frontend Engineer",
    image: ImageKartjisProject,
    company: "Kartjis.id",

    description:
      "A reporting module developed for an online ticketing platform similar to Loket.com. It provides real-time insights into ticket sales, event performance, and transaction summaries. I was responsible for building and maintaining the ticketing reporting system to ensure accurate and efficient data visualization for event organizers.",
  },
  {
    title: "Management Information System",
    link: "",
    role: "Fullstack Engineer",
    image: ImageInternalProject,
    company: "PT. Pegadaian",
    description:
      "An internal web platform used for managing and monitoring organizational data and reports within PT Pegadaian. I was responsible for system maintenance, including bug fixes, performance optimization, and ensuring stability across modules. My work focused on improving reliability and maintaining smooth operation of critical internal features.",
  },
  {
    title: "Financial Modelling",
    link: "",
    role: "Fullstack Engineer",
    image: ImageInternalProject,
    company: "PT. Pegadaian",
    description:
      "A web-based platform designed for budget projection and financial scenario analysis within PT Pegadaian. I contributed as a Fullstack Developer, building the frontend interface and backend integration with APIs developed by the Data Science team. The system helps internal teams visualize projected budgets, compare scenarios, and support data-driven decision-making.",
  },
];

export const CertificateItemData = [
  {
    name: "Cloud Computing Mentor",
    author: "Bangkit Academy 2023",
    image: Certificate01,
  },
  {
    name: "Belajar Membuat Aplikasi Web dengan React",
    author: "Dicoding",
    image: Certificate02,
  },
  {
    name: "Belajar Fundamental Aplikasi Web dengan React",
    author: "Dicoding",
    image: Certificate03,
  },
  {
    name: "Belajar Pengembangan Machine Learning",
    author: "Dicoding",
    image: Certificate04,
  },
  {
    name: "Menjadi Cloud Engineer",
    author: "Dicoding",
    image: Certificate05,
  },
];

export const ExperienceItemData: IExperienceItemPropsType[] = [
  {
    title: "PT. Pegadaian (via PT. Pesonna Optima Jasa)",
    point_description: [
      "Developed and deployed a financial modeling web application enabling real-time revenue,expense, and tax analysis, improving decision-making for stakeholders.",
      "Built RESTful APIs in Golang with unit tests, ensuring scalability and maintainability across services.",
      "Integrated machine learning models into middleware APIs with Golang, enhancing predictive accuracy for financial forecasts",
      "Implemented Docker-based containerization, ensuring consistent deployment across different environments.",
      "Applied secure coding practices, including input validation and JWT-based authentication, to improve data protection and prevent vulnerabilities.",
      "Collaborated in Agile sprints with product managers, data scientists, and engineers to deliver data-driven dashboards and services.",
    ],
    start_time: "November 2024",
    end_time: "Present",
    city: "Jakarta",
    country: "Indonesia",
    position: "Fullstack Developer",
    position_status: "Contract",
  },
  {
    title: "Kartjis.id",
    point_description: [
      "Designed and implemented an interactive dashboard with Next.js and TypeScript, enabling real-time monitoring of thousands of ticket sales.",
      "Integrated APIs to display live transaction data, improving reporting efficiency for event organizers.",
      "Collaborated with designers and PMs to deliver scalable, user-friendly frontend solutions.",
    ],
    start_time: "Januari 2024",
    end_time: "Agustus 2024",
    city: "Makassar",
    country: "Indonesia",
    position: "Frontend Developer",
    position_status: "Contract",
  },
  {
    title: "Dicoding - Bangkit Academy by Google, GoTo, Traveloka",
    point_description: [
      "Mentored 16 students in Cloud Computing track, achieving 100% graduation rate.",
      "Provided weekly consultations, technical guidance, and soft skill support.",
      "Assisted instructors during class sessions, ensuring smooth delivery of both technical and nontechnical topics.",
    ],
    start_time: "Februari 2023",
    end_time: "July 2023",
    city: "Jakarta",
    country: "Indonesia",
    position: "Cloud Computing Mentor",
    position_status: "Contract",
  },
  {
    title: "Software Engineering Laboratory Hasanuddin University",
    point_description: [
      "Assisted students in understanding and applying Object-Oriented Programming concepts",
      "Conducted consultations and evaluations of practical assignments to monitor progress",
      "Supported learning outcomes by clarifying concepts and reviewing implementations.",
    ],
    start_time: "Februari 2023",
    end_time: "July 2023",
    city: "Makassar",
    country: "Indonesia",
    position: "Object Oriented Programming Practicum Assistant ",
    position_status: "Part Time",
  },
];

export const OrganizationalItemData = [
  {
    name: "Google Developer Student Club Chapter Unhas",
    point_description: [
      "Developed a comprehensive JavaScript and Node.js curriculum for workshops and weekly training sessions, covering topics from fundamentals to advanced concepts like REST API, database integration, and deployment.",
      "Created sample projects and case studies to help participants understand real-world implementation of the taught materials.",
    ],
    division: "Technical Team",
    position: "Staff Member",
  },
];
