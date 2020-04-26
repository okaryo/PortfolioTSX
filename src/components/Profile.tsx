import React from 'react'
import me from '../images/me.png'
import { ProgrammingSkillBars, OtherSkillBars } from '../constants/SkillBars'
import '../stylesheets/Profile.css'

interface SkillBarsProps {
  skillBars: Array<{
    name: string,
    progressWidth: {
      width: string
    }
  }>
}

const Profile = () => {
  const Skills = (props: SkillBarsProps) => {
    const SkillBars = props.skillBars

    const SkillItems = SkillBars.map((skillBar, index) => {
      return(
        <div key={index} className="portfolio_profile_skill_unit">
          <h5>{skillBar.name}</h5>
          <div className="portfolio_profile_skill_bar">
            <div className="portfolio_profile_skill_progress" style={skillBar.progressWidth}></div>
            <div className="portfolio_profile_skill_unprogress"></div>
          </div>
        </div>
      )
    })

    return (
      <div className="portfolio_profile_skill_container">
        {SkillItems}
      </div>
    )
  }

  return(
    <div className="portfolio_profile_container">
      <section className="portfolio_profile_me">
        <img src={me} alt="me_icon"/>
        <h2>OKARYO / Ryotaro Oka</h2>
        <p>Web Engineer</p>
      </section>
      <div className="portfolio_profile_detail">
        <section className="portfolio_profile_history">
          <h3>Experience</h3>
          <ul>
            <li>Clueit (Apr. 2020 - present)</li>
            <li className="portfolio_profile_list_sub">Web engineer</li>
            <li>Clueit (Aug. 2019 - Mar. 2020)</li>
            <li className="portfolio_profile_list_sub">Web engineer internship</li>
            <li>cram school teacher (May 2018 - Mar. 2019)</li>
            <li className="portfolio_profile_list_sub">part time job</li>
            <li>baker (May 2015 - Feb. 2017)</li>
            <li className="portfolio_profile_list_sub">part time job</li>
          </ul>
          <h3>Education</h3>
          <ul>
            <li>The University of Tokyo, Faculty of Law (Apr. 2018 - present)</li>
            <li className="portfolio_profile_list_sub">DepartmentⅠ: General Legal Studies Course</li>
            <li>Taking a year off from university (Apr. 2017 - Mar. 2018)</li>
            <li className="portfolio_profile_list_sub">Lost the meaning of life</li>
            <li>The University of Tokyo, Faculty of Arts and Sciences (Apr. 2015 - Mar. 2017)</li>
            <li className="portfolio_profile_list_sub">Human Sciences Ⅰ</li>
            <li>SUNDAI Ochanomizu3 LB→LA (Apr. 2014 - Mar. 2015)</li>
            <li className="portfolio_profile_list_sub">Ronin</li>
          </ul>
          <h3>Qualification</h3>
          <ul>
            <li>Statistical Society Certificate Grade 3 (Feb. 2020)</li>
            <li className="portfolio_profile_list_sub">Pass with credit</li>
            <li>Fundamental Information Technology Engineer (Nov. 2019)</li>
          </ul>
        </section>

        <section className="portfolio_profile_skill">
          <h3>Programming Skill</h3>
          <Skills
            skillBars={ProgrammingSkillBars}
          />
          <h3>Other Skill</h3>
          <Skills
            skillBars={OtherSkillBars}
          />
        </section>
      </div>
    </div>
  )
}

export default Profile
