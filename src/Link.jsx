// eslint-disable-next-line react/prop-types
export const Link = ({label='test',href='#'})=>{

  return (
    <a href={href} className="group">
      <span className="before:content-['<'] before:opacity-0 md:group-hover:before:opacity-100 text-accent"> </span>{label} <span className="after:content-['/>'] after:opacity-0 md:group-hover:after:opacity-100 text-accent"></span>
    </a>
  )
}