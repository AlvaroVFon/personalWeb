
export const Button = ({label,bgColor,hoverBgColor,textPrimaryColor,textSecondaryColor}) =>{

 

  return (
    <button className={`p-3 max-w-32 transition duration-500 ease-in-out border hover:bg-${hoverBgColor} dark:hover:texxt-${textPrimaryColor} dark:text-${textSecondaryColor} `}>{label}</button>
  )

}
Button.defaultProps  = {
  label:'Contact me',
  bgColor:'secondary',
  hoverBgColor:'accent',
  textPrimaryColor:'primary',
  textSecondaryColor:'secondary'
}