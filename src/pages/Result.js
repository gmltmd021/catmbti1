import React from "react";
import styled from "styled-components";
//import PangImage from '../assets/cat1.jpeg';
import Button from "react-bootstrap/Button";
import { ResultData } from '../assets/data/resultdata';
import { useSearchParams, useNavigate } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const mbti = searchParams.get('mbti');
    // 최종 결과 데이터 객체 
    const [resultdata, setResultData] = React.useState({});

    React.useEffect(() => {
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    },[mbti])

    console.log(mbti);

    return (
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <Contents>
                <Title>결과 보기</Title>
                <LogoImage>
                    <img alt="결과이미지" src={resultdata.image} className="rounded-circle" width={350} height={350}></img>
                </LogoImage>
                <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultdata.name}입니다.</Desc>
                <Button style={{ fontFamily: "심경하체" }} onClick={() => navigate("/")}>
                    테스트 다시하기
                </Button>
            </Contents>
        </Wrapper>
    )
}

export default Result;

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