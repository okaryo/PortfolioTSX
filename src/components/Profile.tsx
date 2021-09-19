import React from 'react'
import me from '../images/me.png'
import { dateFormatter } from '../utils/dateFormatter'
import Experiences from '../data/experiences.json'
import Educations from '../data/educations.json'
import Qualifications from '../data/qualifications.json'
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
            <p className="profile_aboutMe-job">Web/Mobile Engineer</p>
            <p className="profile_aboutMe-comment">
              I love making things. I want to become a person who can create things that expand people's perspectives and choices.
            </p>
          </div>
        </section>
        <div className="profile_detail">
          <section className="profile_history">
            <h3>Experience</h3>
            <ul>
              {
                Experiences.map((experience) => {
                  const date = `${dateFormatter(experience.from)} - ${dateFormatter(experience.to)}`
                  return <ol>
                    <li>{experience.name} ({date})</li>
                    <li className="profile_list_sub">{experience.description}</li>
                  </ol>
                })
              }
            </ul>
            <h3>Education</h3>
            <ul>
              {
                Educations.map((education) => {
                  const date = `${dateFormatter(education.from)} - ${dateFormatter(education.to)}`
                  return <ol>
                    <li>{education.name} ({date})</li>
                    <li className="profile_list_sub">{education.description}</li>
                  </ol>
                })
              }
            </ul>
            <h3>Qualification</h3>
            <ul>
              {
                Qualifications.map((qualification) => {
                  return <ol>
                    <li>{qualification.name} ({dateFormatter(qualification.date)})</li>
                    <li className="profile_list_sub">{qualification.description}</li>
                  </ol>
                })
              }
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
