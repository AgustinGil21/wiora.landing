interface Props {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
}

export const SocialMediaBtn = ({children, href, ariaLabel}:Props) => {
  return (
    <a href={href} className="p-2 rounded-full bg-white/5 backdrop-blur-sm border-purple-300/20 group hover:bg-purple-600 transition-colors duration-300" aria-label={ariaLabel} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}