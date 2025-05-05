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

const Terms: React.FC = () => {
  const navigate = useNavigate();

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
      </Text>

      <SectionTitle>제3조 (서비스의 제공)</SectionTitle>
      <Text>
        본 서비스는 다음과 같은 서비스를 제공합니다:
        <br />
        1. 법률 정보 제공 서비스
      </Text>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </Container>
  );
};

export default Terms; 