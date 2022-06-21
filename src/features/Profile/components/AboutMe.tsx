import styled from '@emotion/styled'

import me from '../assets/images/me.png'
import bookmeterLogo from '../assets/logos/bookmeter_logo.png'
import connpassLogo from '../assets/logos/connpass_logo.svg'
import githubLogo from '../assets/logos/github_logo.svg'
import qiitaLogo from '../assets/logos/qiita_logo.png'
import suzuriLogo from '../assets/logos/suzuri_logo.svg'
import twitterLogo from '../assets/logos/twitter_logo.svg'

const Container = styled.section`
  display: flex;
`

const MeImage = styled.img`
  border: solid 1px #dcdddd;
  margin-right: 22px;
`

const MeName = styled.h2`
  font-size: 20px;
`

const MeJob = styled.p`
  font-size: 14px;
`

const MeComment = styled.p`
  display: inline-block;
  margin-top: 5px;
  max-width: 450px;
`

const SNSIcons = styled.ul`
  display: flex;
  margin-top: 12px;

  li {
    display: flex;
  }

  li:hover {
    opacity: 0.7;
  }

  li + li {
    margin-left: 16px;
  }

  a {
    display: flex;
    align-items: center;
  }
`

const AboutMe = () => {
  return (
    <Container>
      <MeImage src={me} alt="my icon" height="88" width="90" loading="lazy" />
      <div>
        <MeName>OKARYO / Ryotaro Oka</MeName>
        <MeJob>Web/Mobile Engineer</MeJob>
        <MeComment>
          I love making things. I want to become a person who can create things that expand people&apos;s perspectives and choices.
        </MeComment>
        <SNSIcons>
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
        </SNSIcons>
        </div>
      </Container>
  )
}

export default AboutMe
