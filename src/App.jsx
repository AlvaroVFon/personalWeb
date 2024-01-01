import { HeaderNav } from "./HeaderNav"
import { Nav } from "./Nav"
import { Section } from "./Section"
import { Aside } from "./Aside"
function App() {


  return (
    <>
      <div className="lg:grid lg:grid-cols-5">
        <HeaderNav />
        <Nav />
        <Section colSpan='col-span-3' />
        <Aside/>
      </div>

    </>
  )
}

export default App
