import me from '../assets/images/me.png'
import twitterLogo from '../assets/logos/twitter_logo.svg'
import githubLogo from '../assets/logos/github_logo.svg'
import qiitaLogo from '../assets/logos/qiita_logo.png'
import connpassLogo from '../assets/logos/connpass_logo.svg'
import bookmeterLogo from '../assets/logos/bookmeter_logo.png'
import suzuriLogo from '../assets/logos/suzuri_logo.svg'
import styled from '@emotion/styled'

const Container = styled.section`
  display: flex;
`

const AboutMe = () => {
  return (
    <Container>
      <img className="profile_aboutMe-image" src={me} alt="my icon" height="88" width="90" loading="lazy"/>
      <div>
        <h2 className="profile_aboutMe-name">OKARYO / Ryotaro Oka</h2>
        <p className="profile_aboutMe-job">Web/Mobile Engineer</p>
        <p className="profile_aboutMe-comment">
          I love making things. I want to become a person who can create things that expand people's perspectives and choices.
        </p>
        <ul className="profile_aboutMe-snsIcons">
          <li>
            <a href="https://twitter.com/okaryoX" target="_blank" rel="noopener noreferrer">
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
          <li>
            <a href="https://bookmeter.com/users/739784" target="_blank" rel="noopener noreferrer">
              <img src={bookmeterLogo} alt="bookmeter logo" height="21" width="21" loading="lazy" />
            </a>
          </li>
          <li>
            <a href="https://suzuri.jp/okaryo" target="_blank" rel="noopener noreferrer">
              <img src={suzuriLogo} alt="suzuri logo" height="25" width="25" loading="lazy" />
            </a>
          </li>
        </ul>
        </div>
      </Container>
  )
}

export default AboutMe
