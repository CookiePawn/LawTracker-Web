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

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>개인정보 처리방침</Title>
      
      <SectionTitle>1. 개인정보 수집 현황</SectionTitle>
      <Text>
        현재 국회 추적기는 직접적인 개인정보를 수집하지 않습니다. 서비스 이용을 위한 회원가입이나 개인정보 수집이 필요하지 않습니다.
      </Text>

      <SectionTitle>2. Google AdMob 개인정보 처리</SectionTitle>
      <Text>
        본 앱은 Google AdMob을 통해 광고를 제공하고 있습니다. Google AdMob은 다음과 같은 정보를 수집할 수 있습니다:
        <br /><br />
        - 기기 정보 (기기 ID, 운영체제 버전, 하드웨어 모델 등)
        <br />
        - 네트워크 정보 (IP 주소, 네트워크 연결 유형 등)
        <br />
        - 광고 식별자 (Google 광고 ID)
        <br />
        - 앱 사용 데이터 (앱 사용 시간, 앱 내 상호작용 등)
        <br /><br />
        이러한 정보는 Google의 개인정보 처리방침에 따라 처리되며, 맞춤형 광고 제공 및 광고 성과 측정에 사용됩니다. Google의 개인정보 처리방침은 다음 링크에서 확인하실 수 있습니다:
        <br />
        https://policies.google.com/privacy
        <br /><br />
        사용자는 기기의 설정을 통해 광고 식별자를 재설정하거나 맞춤형 광고를 비활성화할 수 있습니다.
      </Text>

      <SectionTitle>3. 향후 개인정보 수집 및 이용에 관한 안내</SectionTitle>
      <Text>
        향후 서비스 개선 및 확장에 따라 추가적인 개인정보 수집이 필요할 수 있습니다. 이 경우, 본 개인정보 처리방침을 개정하여 변경사항을 사전에 공지할 예정입니다.
        <br /><br />
        개인정보 수집이 필요한 경우, 다음과 같은 사항을 포함하여 개정될 예정입니다:
        <br />
        - 수집하는 개인정보의 항목
        <br />
        - 개인정보의 수집 및 이용목적
        <br />
        - 개인정보의 보유 및 이용기간
        <br />
        - 개인정보의 제3자 제공 여부
        <br />
        - 이용자의 권리와 행사방법
      </Text>

      <SectionTitle>4. 개인정보 처리방침 변경</SectionTitle>
      <Text>
        본 개인정보 처리방침은 법률 및 서비스의 변경사항을 반영하기 위해 수정될 수 있습니다. 개인정보 처리방침이 변경되는 경우, 변경사항을 서비스 내 공지사항을 통해 고지할 것입니다.
      </Text>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </Container>
  );
};

export default Privacy; 