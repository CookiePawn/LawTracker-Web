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
        국회 추적기는 SNS 로그인을 통해 다음과 같은 개인정보를 수집합니다:
        <br /><br />
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
        <br /><br />
        수집된 정보는 Firebase Firestore에 안전하게 저장되며, 사용자 식별과 서비스 통계 목적으로만 사용됩니다.
      </Text>

      <SectionTitle>2. 개인정보의 수집 및 이용목적</SectionTitle>
      <Text>
        1. 사용자 식별을 위한 정보 (이메일, 전화번호, 닉네임, 프로필 사진)
        <br />
        - 서비스 이용자 식별
        <br />
        - 계정 관리
        <br />
        - 서비스 이용 기록 관리
        <br /><br />
        2. 통계용 정보 (성별, 연령대)
        <br />
        - 서비스 이용 통계 분석
        <br />
        - 맞춤형 서비스 제공
        <br />
        - 서비스 개선을 위한 데이터 분석
      </Text>

      <SectionTitle>3. 개인정보의 보유 및 이용기간</SectionTitle>
      <Text>
        수집된 개인정보는 회원 탈퇴 시까지 보관되며, 회원 탈퇴 시 즉시 삭제됩니다. 단, 통계용 데이터는 익명화 처리 후 통계 목적으로만 보관될 수 있습니다.
      </Text>

      <SectionTitle>4. Google AdMob 개인정보 처리</SectionTitle>
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

      <SectionTitle>5. Firebase 서비스 이용</SectionTitle>
      <Text>
        본 서비스는 Firebase 서비스를 이용하여 다음과 같은 기능을 제공합니다:
        <br /><br />
        - Firebase Authentication: SNS 로그인 처리
        <br />
        - Firebase Firestore: 사용자 정보 및 법안 데이터 저장
        <br />
        - Firebase Analytics: 서비스 이용 통계
        <br /><br />
        Firebase 서비스 이용에 따른 개인정보 처리에 대한 자세한 내용은 다음 링크에서 확인하실 수 있습니다:
        <br />
        https://firebase.google.com/support/privacy
      </Text>

      <SectionTitle>6. 개인정보 처리방침 변경</SectionTitle>
      <Text>
        본 개인정보 처리방침은 법률 및 서비스의 변경사항을 반영하기 위해 수정될 수 있습니다. 개인정보 처리방침이 변경되는 경우, 변경사항을 서비스 내 공지사항을 통해 고지할 것입니다.
      </Text>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </Container>
  );
};

export default Privacy; 