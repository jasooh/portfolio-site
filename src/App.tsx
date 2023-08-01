import { MainPage } from "./components/MainPage"
import { Navigation } from "./components/Navigation"
import { Selector } from "./components/Selector"
import { About } from "./components/About"
import { Project } from "./components/Project"
import { ProjectCard } from "./components/ProjectCard"
import { Experience } from "./components/Experience"
import { ExperienceCard } from "./components/ExperienceCard"
import { Contact } from "./components/Contact"

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
                <Selector id="projectContainer"  name="projects." />
                <Selector id="experienceContainer"  name="experience." />
                <Selector id="contactContainer"  name="contact." />
              </Navigation>
            </div>

            <div className="main-divider"></div>
          </div> 
          <div id="contentContainer" className="content-container">
            <About>
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
            <Project>
              <ProjectCard title="Black Magic II" img="./src/images/gifs/game-footage.webp" link="https://www.roblox.com/games/969669348/Black-Magic-II-Phantoms-Causatum-MAJOR-UPDATE?AssetId=969669348">
                A ROBLOX fighting game I helped develop with an indie dev team. At its peak activity, it had up to 1,000+ players online at a time daily.
              </ProjectCard>
              <ProjectCard title="A future project!" img="./src/images/placeholder-image.png" link="https://hackthe6ix.com/">
                A future project I look forward to develop at Hack the 6ix! 
              </ProjectCard>
              <ProjectCard title="A future project!" img="./src/images/placeholder-image.png" link="https://hackthe6ix.com/">
                A future project I look forward to develop at Hack the 6ix! 
              </ProjectCard>
            </Project>
            <Experience>
             <ExperienceCard
              date="2020-2022"
              title="Black Magic II"
             >
                Lead the development of interactive and convenient gameplay mechanics, using my skills in object-oriented programming and knowledge in lua.
                Designed and included in-game animations and 3D models to streamline and provide an aesthetically pleasing user experience.
            </ExperienceCard>
              <ExperienceCard
              date="2022-2023"
              title="Toronto Together Website"
             >
                Programmed and formatted the design of a website for a non-profit organization to support local small businesses in Toronto.
                Created a platform for connecting small businesses to the community.
            </ExperienceCard>
            </Experience>
            <Contact>
              <strong>Justin Abuyuan</strong>
              <p className="about-text">
                abuyuanjustin@gmail.com <br />
                +1 (647)-988 0701
              </p>
            </Contact>
          </div>
        </main>
      </div> 
    </>
  )
}

export default App;