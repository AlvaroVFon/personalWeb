import { Link } from "./Link"
export const Nav = () => {

  return (
    <>
      <nav className='hidden text-2xl font-light lg:border-r secondary-menu justify-evenly sm:flex md:pt-3 dark:bg-primary dark:text-secondary lg:flex-col lg:justify-center lg:pl-10 lg:pb-36 lg:h-screen lg:space-y-10'>
        <Link label="ABOUT"/>
        <Link label="WORKS"/>
        <Link label="SKILLS"/>
        <Link label="CONTACT"/>
      </nav>
    </>
  )
}