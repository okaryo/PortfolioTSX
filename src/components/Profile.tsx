import React from 'react'
import me from '../images/me.png'
import ProgrammingSkills from '../data/programming_skills.json'
import OtherSkills from '../data/other_skills.json'

interface SkillBarsProps {
  skillBars: {
    name: string,
    learningLevel: number,
  }[]
}

const Profile = () => {
  const Skills = (props: SkillBarsProps) => {
    const SkillBars = props.skillBars

    const SkillItems = SkillBars.map((skillBar, index) => {
      return(
        <div key={index} className="profile_skill_unit">
          <h5>{skillBar.name}</h5>
          <div className="profile_skill_bar">
            <div className="profile_skill_progress" style={{width: `${skillBar.learningLevel}%`}}></div>
            <div className="profile_skill_unprogress"></div>
            <div className="profile_skill_bar_omit-line"></div>
          </div>
        </div>
      )
    })

    return (
      <div className="profile_skill_container">
        {SkillItems}
      </div>
    )
  }

  return(
    <div>
      <div className="headerSpace" />
      <section className="main_body profile_body">
        <section className="profile_aboutMeContainer">
          <img className="profile_aboutMe-image" src={me} alt="my icon" height="88" width="90" loading="lazy"/>
          <div>
            <h2 className="profile_aboutMe-name">OKARYO / Ryotaro Oka</h2>
            <p className="profile_aboutMe-job">Web Engineer</p>
            <p className="profile_aboutMe-comment">
              I love making things. I want to become a person who can create things that expand people's perspectives and choices.
            </p>
          </div>
        </section>
        <div className="profile_detail">
          <section className="profile_history">
            <h3>Experience</h3>
            <ul>
              <li>Clueit (Apr. 2020 - present)</li>
              <li className="profile_list_sub">Web engineer</li>
              <li>Clueit (Aug. 2019 - Mar. 2020)</li>
              <li className="profile_list_sub">Web engineer internship</li>
              <li>cram school teacher (May 2018 - Mar. 2019)</li>
              <li className="profile_list_sub">part time job</li>
              <li>baker (May 2015 - Feb. 2017)</li>
              <li className="profile_list_sub">part time job</li>
            </ul>
            <h3>Education</h3>
            <ul>
              <li>The University of Tokyo, Faculty of Law (Apr. 2018 - present)</li>
              <li className="profile_list_sub">DepartmentⅠ: General Legal Studies Course</li>
              <li>Taking a year off from university (Apr. 2017 - Mar. 2018)</li>
              <li className="profile_list_sub">Lost the meaning of life</li>
              <li>The University of Tokyo, Faculty of Arts and Sciences (Apr. 2015 - Mar. 2017)</li>
              <li className="profile_list_sub">Human Sciences Ⅰ</li>
              <li>SUNDAI Ochanomizu3 LB→LA (Apr. 2014 - Mar. 2015)</li>
              <li className="profile_list_sub">Ronin</li>
            </ul>
            <h3>Qualification</h3>
            <ul>
              <li>Statistical Society Certificate Grade 3 (Feb. 2020)</li>
              <li className="profile_list_sub">Pass with credit</li>
              <li>Fundamental Information Technology Engineer (Nov. 2019)</li>
            </ul>
          </section>

          <section className="profile_skill">
            <h3>Programming Skill</h3>
            <Skills
              skillBars={ProgrammingSkills}
            />
            <h3>Other Skill</h3>
            <Skills
              skillBars={OtherSkills}
            />
          </section>
        </div>
      </section>
    </div>
  )
}

export default Profile
