import styled from "@emotion/styled"

type SkillProgressBarProps = {
  name: string
  progress: number
}

const Container = styled.div`
  width: 48%;
  margin-bottom: 15px;
`

const SkillName = styled.h5`
  margin-bottom: 1px;
  font-size: 14px;
`

const StyledSkillProgressBar = styled.div`
  height: 11px;
  position: relative;
`

const ProgressValue = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props: Pick<SkillProgressBarProps, 'progress'>) => `${props.progress}%`};
  background-color: #75e900;
  z-index: 2;
`

const ProgressBarBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: #EEEEEE;
`

const OmitLine = styled.div`
  position: absolute;
  top: -1px;
  right: 10%;
  width: 6px;
  height: 13px;
  background-color: #FFFFFF;
  border-left: 1px dotted #AAAAAA;
  border-right: 1px dotted #AAAAAA;
  z-index: 3;
`

const SkillProgressBar = (props: SkillProgressBarProps) => {
  const { name, progress } = props

  return(
    <Container>
      <SkillName>{name}</SkillName>
      <StyledSkillProgressBar>
        <ProgressValue progress={progress} />
        <ProgressBarBackground />
        <OmitLine />
      </StyledSkillProgressBar>
    </Container>
  )
}

export default SkillProgressBar
