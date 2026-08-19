export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    name: "Github",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: "https://github.com/con-ngoi",
  },
  {
    name: "X",
    icon: "/social/x.svg",
    darkIcon: "/social/x-dark.svg",
    href: "https://x.com/ZilchCenturo",
  },
  {
    name: "Linkedin",
    icon: "/social/linkedin.svg",
    darkIcon: "/social/linkedin-dark.svg",
    href: "https://www.linkedin.com/in/jeff-muriithi-736025254/",
  },
  {
    name: "Gmail",
    icon: "/social/gmail.svg",
    href: "mailto:muriithij416@gmail.com",
  },
  
    
];
fix: remove stray text causing build error.
