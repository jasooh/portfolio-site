import MainPage from "./components/MainPage"
import Navigation from "./components/Navigation"
import Selector from "./components/Selector"

export default function App() {
  return (
    <>
      <div className="body-bg-container">
        <main>
          <div className="main-container">
            <div className="main-text">
              <MainPage
                head={"justin abuyuan."}
                sub={"i like to code stuff."}
              >
                <p>an ambitious and passionate computer science student looking to expand his knowledge of programming and computers whose love for coding started from a ROBLOX game he started playing when he was 10.</p>
              </MainPage>
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