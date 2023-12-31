

// eslint-disable-next-line react/prop-types
export const Button = ({label = "Contact me"}) =>{

 

  return (
    <>
      <a href="#" className={`p-3 max-w-32 transition duration-500 ease-in-out border hover:bg-accent dark:hover:text-primary dark:text-secondary}`}>{label}</a>
    </>
    
    )

}

