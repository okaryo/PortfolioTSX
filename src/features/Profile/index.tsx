import { dateFormatter } from '../../utils/dateFormatter'
import Experiences from './data/experiences.json'
import Educations from './data/educations.json'
import Qualifications from './data/qualifications.json'
import ProgrammingSkills from './data/programming_skills.json'
import PageContainer from '../../components/PageContainer'
import styled from '@emotion/styled'
import AboutMe from './components/AboutMe'
import ProfileHeader from './components/ProfileHeader'
import SkillProgressBar from './components/SkillProgressBar'

interface SkillBarsProps {
  skillBars: {
    name: string,
    learningLevel: number,
  }[]
}

const Body = styled.div`
  color: #231815;
`

const Profile = () => {
  const Skills = (props: SkillBarsProps) => {
    const SkillBars = props.skillBars

    const SkillItems = SkillBars.map((skillBar, index) => 
      <SkillProgressBar key={index} name={skillBar.name} progress={skillBar.learningLevel} />
    )

    return (
      <div className="profile_skill_container">
        {SkillItems}
      </div>
    )
  }

  return(
    <PageContainer>
      <Body>
        <AboutMe />
        <div className="profile_detail">
          <section className="profile_history">
            <ProfileHeader title={'Experience'} />
            <ul>
              {
                Experiences.map((experience) => {
                  const date = `${dateFormatter(experience.from)} - ${dateFormatter(experience.to)}`
                  return <ol key={`${experience.name} ${date}`}>
                    <li>{experience.name} ({date})</li>
                    <li className="profile_list_sub">{experience.description}</li>
                  </ol>
                })
              }
            </ul>
            <ProfileHeader title={'Education'} />
            <ul>
              {
                Educations.map((education) => {
                  const date = `${dateFormatter(education.from)} - ${dateFormatter(education.to)}`
                  return <ol key={`${education.name} ${date}`}>
                    <li>{education.name} ({date})</li>
                    <li className="profile_list_sub">{education.description}</li>
                  </ol>
                })
              }
            </ul>
            <ProfileHeader title={'Qualification'} />
            <ul>
              {
                Qualifications.map((qualification) => {
                  return <ol key={qualification.name}>
                    <li>{qualification.name} ({dateFormatter(qualification.date)})</li>
                    <li className="profile_list_sub">{qualification.description}</li>
                  </ol>
                })
              }
            </ul>
          </section>

          <section className="profile_skill">
            <ProfileHeader title={'Programming Skill'} />
            <Skills
              skillBars={ProgrammingSkills}
            />
            <ProfileHeader title={'Github Contribution'} />
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
      </Body>
    </PageContainer>
  )
}

export default Profile
