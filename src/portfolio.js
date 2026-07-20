/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Duke's Portfolio",
  description:
    "Cloud & Infrastructure Engineer specializing in Kubernetes orchestration, CI/CD pipelines, Infrastructure as Code (Terraform, Bicep, Ansible), and high-availability cloud systems.",
  og: {
    title: "Nguyen Huynh Minh Duc (Duke Ng) Portfolio",
    type: "website",
    url: "https://dukengh.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Duc Nguyen Huynh Minh",
  logo_name: "Duke Ng",
  nickname: "dukengh",
  subTitle:
    "Junior Cloud & Infrastructure Engineer passionate about container orchestration, automated CI/CD pipelines, and resilient Infrastructure as Code across hybrid cloud environments.",
  resumeLink:
    "https://1drv.ms/b/c/516a74d13f56eef6/IQCdrPl3soS3TYzpeYxHJdhuAXH8aZmo7W_J0_IVTIk51-M?e=sHM4jS",
  portfolio_repository: "https://github.com/minhduckd5/myPortfolio",
  githubProfile: "https://github.com/minhduckd5",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/minhduckd5",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dukeng21052906/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:minhduc.kd3004@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dukeng.304/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
];

const skills = {
  data: [
    {
      title: "Cloud & Infrastructure Systems",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Provisioning and managing Linux virtual workloads across VMware vSphere/vCenter environments and public cloud platforms",
        "⚡ Automating cloud infrastructure lifecycles using IaC tooling (Terraform, Bicep, Ansible, Vagrant) to eliminate manual overhead",
        "⚡ Designing resilient private and multi-cloud architectures built for high availability and performance",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#844FBA",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "VMware",
          fontAwesomeClassname: "simple-icons:vmware",
          style: {
            color: "#607078",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "Container Orchestration & CI/CD Pipelines",
      fileName: "FullStackImg",
      skills: [
        "⚡ Containerizing multi-tier application stacks with Docker and configuring isolated, repeatable environment topologies",
        "⚡ Operating Kubernetes & K3s clusters with custom ingress routing (Ingress-NGINX), persistent storage, and health probes",
        "⚡ Constructing automated CI/CD workflows in Azure DevOps & GitLab CI for continuous integration, testing, and delivery",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "K3s",
          fontAwesomeClassname: "simple-icons:k3s",
          style: {
            color: "#FFC61C",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "GitLab CI",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FC6D26",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
      ],
    },
    {
      title: "Chaos Engineering & Observability",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Architecting AI-driven chaos engineering platforms (ChaosGen) to systematically discover and mitigate system vulnerabilities",
        "⚡ Integrating Prometheus & Loki telemetry data directly into LLM feedback loops for context-aware fault injection",
        "⚡ Implementing full-stack SRE observability solutions using Prometheus, Grafana, Loki, and Azure Monitor",
      ],
      softwareSkills: [
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/minhduckd5",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/dukeng21052906/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "International University | VNU - HCMC",
      subtitle: "B.Eng. in Computer Engineering",
      logo_path: "Logo-HCMIU.svg",
      alt_name: "International University VNU-HCMC",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Rigorous coursework in Cloud Architecture, Distributed Systems, Computer Networks, Database Internals, and Software Engineering.",
        "⚡ Architected ChaosGen (AI-Driven Chaos Engineering Framework) as an undergraduate thesis to automate fault injection in K3s clusters.",
      ],
      website_link: "https://hcmiu.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "DevOps & Software Engineering Professional Certificate",
      subtitle: "- IBM / Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/JDFHA9E0I4EY",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "DevOps on AWS: Code, Build, and Test",
      subtitle: "- AWS / Coursera",
      logo_path: "Amazon_Web_Services-Logo.wine.svg",
      certificate_link:
        "https://coursera.org/share/a1bfb989d6fc63a960df3658e2003d8a",
      alt_name: "AWS",
      color_code: "#FF990099",
    },
    {
      title: "AI Agents 101: Building AI Agents with MCP",
      subtitle: "- AMD / Coursera",
      logo_path: "AMD-logo.png",
      certificate_link:
        "https://www.linkedin.com/in/dukeng21052906/overlay/Certifications/934507270/treasury/?profileId=ACoAACpD4C4B717awhmTLsaiHTug0HOG6hRNSpI",
      alt_name: "AI Agents",
      color_code: "#00000099",
    },
    {
      title: "Application Development using Microservices & Serverless",
      subtitle: "- IBM / Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/10T23SKR9YY7",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Developing Back-End Apps with Node.js & Express",
      subtitle: "- IBM / Coursera",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/QB6DK154C5A5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "IELTS Certification (Score Band 6.0)",
      subtitle: "- IDP / British Council",
      logo_path: "BritishCouncil_Logo.png",
      certificate_link:
        "https://www.linkedin.com/in/dukeng21052906/details/certifications/",
      alt_name: "IELTS",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Projects",
  description:
    "Hands-on experience provisioning and managing infrastructure, Kubernetes container orchestration, CI/CD pipeline automation, and cloud platforms.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Internships",
      work: true,
      experiences: [
        {
          title: "DevOps Engineer Intern",
          company: "SCC",
          company_url: "https://www.scc.com/",
          logo_path: "SCC_logo_NEW.png",
          duration: "Mar 2026 - Jun 2026",
          location: "Ho Chi Minh City, Vietnam",
          description:
            "Completed an intensive DevOps engineering program focusing on Linux systems administration, Azure cloud management, and Site Reliability Engineering (SRE) practices. Designed modular Bicep templates to programmatically provision Azure VMs, storage accounts, and resource groups via Azure CLI. Containerized and deployed a 3-tier application stack (React, Flask, PostgreSQL) to Kubernetes with ingress controllers and persistent storage. Authored automated Bash scripts for scheduled log maintenance, cron jobs, and systemd service management.",
          color: "#0078D4",
        },
        {
          title: "Cloud Engineer Intern",
          company: "QTSC DigiTech Center",
          company_url: "https://qtsc.com.vn/",
          logo_path: "qtscicon.png",
          duration: "Jun 2025 - Sep 2025",
          location: "Ho Chi Minh City, Vietnam",
          description:
            "Provisioned and managed 15+ virtual machines across VMware vCenter clusters, cutting environment setup overhead by roughly 50% using reusable Terraform modules and Ansible playbooks. Delivered proof-of-concept Kubernetes container deployments on top of VMware vSphere virtualization. Authored a comparative technical assessment of Oracle PCA versus VergeIO to help guide private cloud infrastructure planning.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Open Source Projects",
  description:
    "Featured software engineering projects showcasing my work across Cloud Infrastructure, SRE Automation, Microservices, and Fullstack Applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Thesis & Research",
  description:
    "Undergraduate thesis work and academic engineering projects in SRE & Chaos Engineering.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "chaosgen-framework",
      name: "ChaosGen — AI-Driven Chaos Engineering Framework (Thesis)",
      createdAt: "2025-01-01T00:00:00Z",
      description:
        "Undergraduate Thesis (International University VNU-HCMC): An AI-assisted CLI chaos engineering platform that automates cluster discovery, Prometheus/Loki telemetry analysis, and context-aware fault injection with human-in-the-loop safety. Validated against an on-premise microservices testbed deployed on Proxmox VE & K3s nodes.",
      url: "https://github.com/minhduckd5/AIO-Chaos-Tool",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path:
      "https://drive.google.com/file/d/1fhA7bqTLxwEImQHAclrpM8ByTuGKghxs/view?usp=drive_link",
    description:
      "I'm always eager to collaborate on Cloud Infrastructure, Kubernetes orchestration, DevOps automation, or Backend engineering. Feel free to reach out!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Technical notes on Cloud Infrastructure, Kubernetes, and DevOps automation.",
    link: "https://github.com/minhduckd5",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Binh Tan, Ho Chi Minh City, Vietnam",
    locality: "Ho Chi Minh City",
    country: "Vietnam",
    region: "Ho Chi Minh City",
    postalCode: "700000",
    streetAddress: "Binh Tan District",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Binh+Tan,+Ho+Chi+Minh+City",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+84 364 357 142",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
