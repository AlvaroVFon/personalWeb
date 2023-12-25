import { HeaderNav } from "./HeaderNav"
import { Nav } from "./Nav"
import { Section } from "./Section"
function App() {


  return (
    <>
      <div className="lg:grid lg:grid-cols-5">
        <HeaderNav />
        <Nav />
        <Section colSpan='col-span-3' />
        <aside className="dark:bg-primary">

        </aside>
      </div>

    </>
  )
}

export default App
