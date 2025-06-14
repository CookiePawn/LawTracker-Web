import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  display: block;
  margin: 2rem auto 0;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

const ApiLinkButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  margin-top: 1rem;
  
  &:hover {
    color: #0056b3;
  }
`;

const Terms: React.FC = () => {
  const navigate = useNavigate();

  const handleApiLink = () => {
    window.open('https://open.assembly.go.kr/portal/openapi/openApiNaListPage.do', '_blank');
  };

  return (
    <Container>
      <Title>이용약관</Title>
      
      <SectionTitle>제1조 (목적)</SectionTitle>
      <Text>
        이 약관은 국회 추적기(이하 "서비스")가 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
      </Text>

      <SectionTitle>제2조 (정의)</SectionTitle>
      <Text>
        1. "서비스"란 본 서비스가 제공하는 모든 서비스를 의미합니다.
        <br />
        2. "회원"이란 본 서비스 이용계약을 체결한 자를 말합니다.
        <br />
        3. "SNS 로그인"이란 카카오, 네이버 등 소셜 네트워크 서비스를 통한 회원가입 및 로그인을 의미합니다.
      </Text>

      <SectionTitle>제3조 (서비스의 제공)</SectionTitle>
      <Text>
        본 서비스는 다음과 같은 서비스를 제공합니다:
        <br />
        1. 법률 정보 제공 서비스
        <br />
        2. 사용자 맞춤형 법안 추천 서비스
        <br />
        3. 법안 관련 통계 및 분석 서비스
      </Text>

      <SectionTitle>제4조 (데이터 출처 및 저장)</SectionTitle>
      <Text>
        본 서비스는 다음과 같은 데이터를 활용하여 제작되었습니다:
        <br />
        1. 대한민국 국회에서 제공하는 열린국회정보 Open API
        <br />
        2. 공공데이터포털(data.go.kr)에서 제공하는 국회 국회사무처_의안 정보 API
        <br />
        3. Firebase Firestore를 통한 법안 및 의안 데이터 저장
        <br /><br />
        모든 법률 정보는 국회와 공공데이터포털에서 공식적으로 제공하는 데이터를 기반으로 하며, Firebase Firestore에 저장되어 제공됩니다.
      </Text>

      <SectionTitle>제5조 (회원가입 및 개인정보)</SectionTitle>
      <Text>
        1. 회원가입은 SNS 로그인을 통해 이루어집니다.
        <br />
        2. 서비스 이용을 위해 다음 정보가 수집됩니다:
        <br />
        - 이메일 주소 (사용자 식별용)
        <br />
        - 전화번호 (사용자 식별용)
        <br />
        - 닉네임 (사용자 식별용)
        <br />
        - 프로필 사진 (사용자 식별용)
        <br />
        - 성별 (통계용)
        <br />
        - 연령대 (통계용)
        <br />
        3. 수집된 정보는 Firebase Firestore에 안전하게 저장됩니다.
      </Text>

      <SectionTitle>제6조 (면책 조항)</SectionTitle>
      <Text>
        본 서비스는 대한민국 국회의 공식 서비스가 아니며, 국회를 대표하지 않습니다. 제공되는 정보는 열린국회정보 Open API와 공공데이터포털 API를 통해 수집된 데이터를 기반으로 하며, 최신 정보와 차이가 있을 수 있습니다.
        <br /><br />
        정확한 법률 정보는 국회 홈페이지, 공공데이터포털 또는 관련 공식 채널을 통해 확인하시기 바랍니다.
      </Text>

      <ApiLinkButton onClick={handleApiLink}>
        열린국회정보 Open API 바로가기
      </ApiLinkButton>

      <ApiLinkButton onClick={() => window.open('https://www.data.go.kr/data/3037286/openapi.do', '_blank')}>
        공공데이터포털 의안 정보 API 바로가기
      </ApiLinkButton>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </Container>
  );
};

export default Terms; 