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
  title: "Duke Ng",
  logo_name: "Duke Ng",
  nickname: "dukengh",
  subTitle:
    "Junior Cloud & Infrastructure Engineer passionate about container orchestration, automated CI/CD pipelines, and resilient Infrastructure as Code across hybrid cloud environments.",
  resumeLink:
    "https://1drv.ms/b/c/516a74d13f56eef6/EcB6eScK0YZMnVUFRaNAv6EB7oPs6SCYS4g8mfI1gpxCRA?e=6Ev6pp",
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
      logo_path: "iu_logo.png",
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
        "https://www.linkedin.com/in/dukeng21052906/details/certifications/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "DevOps on AWS: Code, Build, and Test",
      subtitle: "- AWS / Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.linkedin.com/in/dukeng21052906/details/certifications/",
      alt_name: "AWS",
      color_code: "#FF990099",
    },
    {
      title: "AI Agents 101: Building AI Agents with MCP",
      subtitle: "- Agentic AI Workflows",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.linkedin.com/in/dukeng21052906/details/certifications/",
      alt_name: "AI Agents",
      color_code: "#00000099",
    },
    {
      title: "IELTS Certification (Score Band 6.0)",
      subtitle: "- Professional English Communication",
      logo_path: "coursera_logo.png",
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
          logo_path: "microsoft_logo.png",
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
          logo_path: "gcp_logo.png",
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
  title: "Projects",
  description:
    "Here are some featured engineering projects showcasing my work in Cloud, DevOps, Chaos Engineering, and Backend Architecture.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications & Thesis",
  description: "Featured thesis and technical projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "chaosgen-framework",
      name: "ChaosGen — AI-Driven Chaos Engineering Framework",
      createdAt: "2025-01-01T00:00:00Z",
      description:
        "Undergraduate Thesis: An AI-assisted CLI chaos engineering framework that automates cluster topology discovery, analyzes Prometheus/Loki telemetry, and generates context-aware fault-injection scenarios (CPU stress, network partitions, pod evictions) with human-in-the-loop safety controls.",
      url: "https://github.com/minhduckd5",
    },
    {
      id: "ai-shopping-system",
      name: "AI Shopping System — Backend Microservices",
      createdAt: "2024-06-01T00:00:00Z",
      description:
        "Scalable e-commerce backend platform built with FastAPI, PostgreSQL, Redis, and MongoDB. Features containerized microservices architecture, JWT authentication, and Redis caching for low-latency product catalog queries.",
      url: "https://github.com/minhduckd5/AI-Shopping-System",
    },
    {
      id: "net-centric-programming",
      name: "High-Performance Network Server",
      createdAt: "2024-03-01T00:00:00Z",
      description:
        "Concurrent gRPC network service built in Go (Golang) leveraging goroutines, Protocol Buffers, and MySQL with Docker containerization.",
      url: "https://github.com/minhduckd5/Net-Centric-Programming-Project",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
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
