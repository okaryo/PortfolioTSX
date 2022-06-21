import styled from '@emotion/styled'

type ProfileHeaderProps = {
  title: string
}

const Header = styled.h3`
  margin-bottom: 10px;
  padding-bottom: 3px;
  font-size: 18px;
  border-bottom: 2px solid rgba(117, 117, 117, 0.5);
`

const ProfileHeader = (props: ProfileHeaderProps) => {
  return <Header>{props.title}</Header>
}

export default ProfileHeader
