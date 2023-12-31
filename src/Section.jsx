import { Button } from "./Button"
// eslint-disable-next-line react/prop-types
export const Section = ({ colSpan }) => {


  return (
    <>
      <div className={colSpan}>
        <section className="flex flex-col justify-around min-h-screen p-10 font-semibold text-primary dark:text-secondary dark:bg-primary lg:justify-center lg:items-start lg:space-y-16 ">
          <h1 className="text-5xl ">
            I&apos;m trying to get my first job as <strong>web developer</strong>
          </h1>
          <p className="font-extralight">Apasionado del aprendizaje en general,
            siempre buscando nuevas tecnologías y métodos con los que desarrollar mis proyectos.
            Actualmente formándome como desarrollador web <strong>&quot;FullStack&quot;</strong>, pricipalmente con tecnologías relacionadas
            con <strong>JavaScript</strong>.</p>
          <Button />
        </section>
      </div>

    </>
  )
}