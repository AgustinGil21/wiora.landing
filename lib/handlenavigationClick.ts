export const handleNavigationClick = (href: string) => {
  const element = document.getElementById(href.substring(1))
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}