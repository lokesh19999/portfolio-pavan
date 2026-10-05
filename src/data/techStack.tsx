import type { ReactNode } from "react";

export interface TechItem {
  name: string;
  logo: ReactNode;
  url?: string;
}

export interface TechCategory {
  name: string;
  items: TechItem[];
}

const ShieldIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M21 12C21 13.66 16.97 15 12 15C7.03 15 3 13.66 3 12" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 5V19C3 20.66 7.03 22 12 22C16.97 22 21 20.66 21 19V5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const KeyIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 11L16.5 5.5M18 4L20 6L17.5 8.5L16 7L18 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="20" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="4" cy="16" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 14L9 12M15 12L17 14M12 7V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TicketIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 9V15M12 9V15M16 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
    <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const techStack: TechCategory[] = [
  {
    name: "SIEM",
    items: [
      { name: "Google Chronicle", logo: <DatabaseIcon /> },
      { name: "Microsoft Sentinel", logo: <DatabaseIcon /> },
      { name: "IBM QRadar", logo: <DatabaseIcon /> },
      { name: "Splunk", logo: <DatabaseIcon /> },
      { name: "Rapid7 InsightIDR", logo: <EyeIcon /> }
    ]
  },
  {
    name: "EDR / XDR",
    items: [
      { name: "CrowdStrike Falcon", logo: <ShieldIcon /> },
      { name: "SentinelOne", logo: <ShieldIcon /> },
      { name: "Microsoft Defender XDR", logo: <ShieldIcon /> },
      { name: "Microsoft Defender for Endpoint", logo: <ShieldIcon /> }
    ]
  },
  {
    name: "Email Security",
    items: [
      { name: "IRONSCALES", logo: <MailIcon /> },
      { name: "Microsoft Defender for Office 365", logo: <MailIcon /> }
    ]
  },
  {
    name: "Identity & Access",
    items: [
      { name: "Microsoft Entra ID", logo: <KeyIcon /> },
      { name: "Active Directory", logo: <KeyIcon /> }
    ]
  },
  {
    name: "Network Security",
    items: [
      { name: "Palo Alto Firewall", logo: <NetworkIcon /> },
      { name: "Check Point", logo: <NetworkIcon /> },
      { name: "Fortinet", logo: <NetworkIcon /> },
      { name: "Zscaler", logo: <NetworkIcon /> },
      { name: "VPN", logo: <LockIcon /> },
      { name: "IDS/IPS", logo: <EyeIcon /> },
      { name: "Proxy Security", logo: <NetworkIcon /> }
    ]
  },
  {
    name: "DLP",
    items: [
      { name: "Forcepoint DLP", logo: <LockIcon /> }
    ]
  },
  {
    name: "ITSM / Incident Management",
    items: [
      { name: "ServiceNow", logo: <TicketIcon /> },
      { name: "Jira", logo: <TicketIcon /> },
      { name: "ConnectWise", logo: <TicketIcon /> }
    ]
  },
  {
    name: "Threat Intelligence / Investigation",
    items: [
      { name: "VirusTotal", logo: <SearchIcon /> },
      { name: "Cisco Talos", logo: <SearchIcon /> },
      { name: "MxToolbox", logo: <SearchIcon /> },
      { name: "Wireshark", logo: <SearchIcon /> }
    ]
  }
] as const;