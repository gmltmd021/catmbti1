import React from "react";
// css-in-js 
import styled from "styled-components";
import PangImage from '../assets/cat1.jpeg';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    // useHistory 
    navigate('/question');
  }

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img alt="고양이 사진" src={PangImage} className="rounded-circle" width={350} height={350}></img>
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
        <Button style={{ fontFamily: "심경하체" }} onClick={handleClickButton}>테스트 시작하기</Button> bootstrap은 작성방법
      </Contents>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
    font-size: 40pt;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "심경하체";
`

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 30pt;
    margin-top: 40px;
    font-family: "심경하체";
`

const LogoImage = styled.div`
    margin-top: 10px;
`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
    font-family: "심경하체";
`