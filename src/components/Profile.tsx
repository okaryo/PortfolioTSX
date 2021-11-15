import React from 'react'
import me from '../images/me.png'
import twitterLogo from '../assets/logos/twitter_logo.svg'
import githubLogo from '../assets/logos/github_logo.svg'
import qiitaLogo from '../assets/logos/qiita_logo.png'
import connpassLogo from '../assets/logos/connpass_logo.svg'
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
            <ul className="profile_aboutMe-snsIcons">
              <li>
                <a href="https://twitter.com/okaryo_tr" target="_blank" rel="noopener noreferrer">
                  <img src={twitterLogo} alt="twitter logo" height="25" width="25" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://github.com/okaryo" target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="github logo" height="25" width="25" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://qiita.com/okaryo" target="_blank" rel="noopener noreferrer">
                  <img src={qiitaLogo} alt="qiita logo" height="25" width="25" loading="lazy" />
                </a>
              </li>
              <li>
                <a href="https://connpass.com/user/okaryo/" target="_blank" rel="noopener noreferrer">
                  <img src={connpassLogo} alt="connpass logo" height="25" width="25" loading="lazy" />
                </a>
              </li>
            </ul>
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
            <h3>Github Contribution</h3>
            <section className="profile_githubContributions">
              <a href="https://github.com/okaryo" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://grass-graph.appspot.com/images/okaryo.png" alt="github commits"
                  loading="lazy"
                />
              </a>
              <p className="profile_githubContributions_note">Generated By <a href="https://github.com/a-know/grass-graph" target="_blank" rel="noopener noreferrer">grass-graph</a></p>
            </section>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Profile
