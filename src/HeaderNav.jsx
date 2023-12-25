import { MdWbSunny, } from 'react-icons/md'
import { LuMoon } from "react-icons/lu";
import { CiMenuFries } from "react-icons/ci";

export const HeaderNav = () => {

  //función toggle menu móvil
  const toggleMenu = () => {

    const secondaryMenu = document.querySelector('.secondary-menu')
    if (secondaryMenu.getAttribute('class') === 'hidden text-2xl font-light border-r secondary-menu justify-evenly sm:flex md:pt-3 dark:bg-primary dark:text-secondary lg:flex-col lg:justify-center lg:pl-10 lg:pb-36 lg:h-screen lg:space-y-10') {
      secondaryMenu.setAttribute('class', 'flex text-2xl font-light border-r secondary-menu justify-evenly sm:flex md:pt-3 dark:bg-primary dark:text-secondary lg:flex-col lg:justify-center lg:pl-10 lg:pb-36 lg:h-screen lg:space-y-10')
    } else {
      secondaryMenu.setAttribute('class', 'hidden text-2xl font-light border-r secondary-menu justify-evenly sm:flex md:pt-3 dark:bg-primary dark:text-secondary lg:flex-col lg:justify-center lg:pl-10 lg:pb-36 lg:h-screen lg:space-y-10')
    }
  }

  //toggle Dark mode

  const toggleDark = (e) => {
    e.preventDefault()
    document.querySelector('body').setAttribute('class', 'dark')
  }

  //toggle Light mode

  const toggleLight = (e) => {
    e.preventDefault()
    document.querySelector('body').setAttribute('class', '')
  }
  return (
    <>
      <nav className='flex items-center justify-between p-5 text-4xl border-b text-primary dark:text-secondary dark:bg-primary lg:col-span-5 '>
        <a href="#" className='text-lg'><span className="text-accent">  &lt;</span> AlvaroVillamarín<span className="text-accent"> / &gt;</span></a>
        <div className='hidden sm:flex space-x-7'>
          <a href="#" onClick={toggleLight} className='transition duration-300 hover:text-accent'><MdWbSunny /></a>
          <a href="#" onClick={toggleDark} className='transition duration-300 hover:text-accent'><LuMoon /></a>
        </div>
        <a href="#" onClick={toggleMenu} className='sm:hidden'> <CiMenuFries /></a>
      </nav >
    </>
  )
}