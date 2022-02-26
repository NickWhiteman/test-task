export interface IButtonProps {
  mode: string
  children: string | HTMLElement | JSX.Element
  link?: string
  onClick?: () => void | ((id: number) => void)
};