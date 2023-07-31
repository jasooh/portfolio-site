import { MainPage } from "./components/MainPage"
import { Navigation } from "./components/Navigation"
import { Selector } from "./components/Selector"
import { About } from "./components/About"

function App() {
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
                <Selector id="aboutContainer" name="about." />
                <Selector name="projects." />
                <Selector name="experience." />
                <Selector name="contact." />
              </Navigation>
            </div>

            <div className="main-divider"></div>
          </div> 
          <div className="content-container">
            <About>
              <h2 className="content-title">who?</h2>
              <p className="large-text">
                In 2015, I wrote my first ever program in Lua using ROBLOX Studio's game engine. 
                It was a simple script that teleported the player to another location on the map. <br /><br />

                Even though it was a script with 3 lines of code, 
                this discovery of writing lines in a computer to make stuff do things ignited a fire of passion in me. <br /><br />
                
                From there, I began my deep dive into the world of <b>game development</b> and <b>computer programming</b>, where I continued to hone my coding skills for years. <br /><br />
                Now, as an aspiring <b>computer science student</b> at Queen's University, my main field of interest is in <b>artifical intelligence</b> and <b>machine-based learning</b>. <br /><br />

                However, when I'm not spending all my nights working on new projects, I love to enjoy my free time playing Volleyball or desperately trying to get good at clicking heads in VALORANT.
              </p>
            </About>
          </div>
        </main>
      </div> 
    </>
  )
}

export default App;