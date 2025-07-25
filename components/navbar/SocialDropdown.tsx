"use client";
import { motion } from "framer-motion";
import { Github, Instagram, MessageCircle } from "lucide-react";
import { Dropdown } from "./Dropdown";
import { DiscordIcon } from "@/icons/DiscordIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { useTranslations } from "next-intl";

// Icono personalizado para X (Twitter)
const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialNetworks = [
  {
    name: "Discord",
    icon: DiscordIcon,
    url: "https://discord.gg/SdJz3DsQ",
    color: "hover:text-indigo-400 hover:fill-indigo-400 fill-white",
  },
  {
    name: "X",
    icon: XIcon,
    url: "https://x.com/WioraAI",
    color: "hover:text-black hover:fill-black fill-white",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/wiora.app/",
    color: "hover:text-pink-400 hover:fill-pink-400 fill-white",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "#",
    color: "hover:text-black hover:fill-black fill-white",
  },
];

interface SocialDropdownProps {
  isScrolled: boolean;
}

export const SocialDropdown = ({ isScrolled }: SocialDropdownProps) => {
  const t = useTranslations("Nav");

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  const dropdownItems = socialNetworks.map((social) => ({
    key: social.name,
    content: (
      <motion.button
        onClick={() => handleSocialClick(social.url)}
        className={`flex items-center gap-3 p-3 rounded-lg text-purple-200 ${social.color} transition-all duration-200 hover:bg-white/10 group w-full`}
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        <span className="text-sm font-medium">{social.name}</span>
      </motion.button>
    ),
  }));

  return (
    <Dropdown
      trigger={{
        label: t("nav-social"),
      }}
      items={dropdownItems}
      dropdownClassName="min-w-[200px]"
      animationType="scale"
      isScrolled={isScrolled}
    />
  );
};
