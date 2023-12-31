
export const Nav = () => {

  const hoverSpan = () => {
    console(document.querySelector('about').nodeValue)
  }

  return (
    <>
      <nav className='hidden text-2xl font-light lg:border-r secondary-menu justify-evenly sm:flex md:pt-3 dark:bg-primary dark:text-secondary lg:flex-col lg:justify-center lg:pl-10 lg:pb-36 lg:h-screen lg:space-y-10'>
        <a href="#" className="group">
          <span className="before:content-['<'] before:opacity-0 md:group-hover:before:opacity-100 text-accent"> </span>ABOUT <span className="after:content-['/>'] after:opacity-0 md:group-hover:after:opacity-100 text-accent"></span>
        </a>
        <a href="#" className="group">
          <span className="before:content-['<'] before:opacity-0 md:group-hover:before:opacity-100 text-accent"> </span>WORKS <span className="after:content-['/>'] after:opacity-0 md:group-hover:after:opacity-100 text-accent"></span>
        </a>
        <a href="#" className="group">
          <span className="before:content-['<'] before:opacity-0 md:group-hover:before:opacity-100 text-accent"> </span>SKILLS <span className="after:content-['/>'] after:opacity-0 md:group-hover:after:opacity-100 text-accent"></span>
        </a>
        <a href="#" className="group">
          <span className="before:content-['<'] before:opacity-0 md:group-hover:before:opacity-100 text-accent"> </span>CONTACT <span className="after:content-['/>'] after:opacity-0 md:group-hover:after:opacity-100 text-accent"></span>
        </a>
      </nav>


    </>
  )
}