type Props = React.ComponentPropsWithRef<"svg">

export const Spinner = ({ className, ...props }: Props) => (
  <svg className={`spinner ${className}`} viewBox="0 0 50 50" {...props}>
    <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
  </svg>
)
