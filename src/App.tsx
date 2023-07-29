import Navigation from "./components/Navigation"
import Selector from "./components/Selector"

export default function App() {
  return (
    <>
      <div className="body-bg-container">
        <main>
          <div className="main-container">
            <div className="main-text">
              <h1>justin abuyuan.</h1>
              <h2 className="cursor-effect">i like to code stuff.&nbsp;&nbsp;</h2>
              <div className="divider"></div>
              <p>an ambitious and passionate computer science student looking to expand his knowledge of programming and computers whose love for coding started from a ROBLOX game he started playing when he was 10.</p>
              <Navigation>
                <Selector name="about." />
                <Selector name="projects." />
                <Selector name="experience." />
                <Selector name="contact." />
              </Navigation>
            </div>
            <div className="main-divider"></div>
          </div>
        </main>
      </div>
    </>
  )
}