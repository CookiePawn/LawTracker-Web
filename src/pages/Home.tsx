import React from 'react';
import { Guide1, Guide2, Guide3, Guide4, Icon, Graphic } from '../assets/images';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppHeader = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AppLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const AppName = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    color: #333;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e0e0e0;
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const GraphicImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  border-top: 1px solid #e0e0e0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  &:hover {
    color: #333;
  }
`;

const Copyright = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Home: React.FC = () => {
  return (
    <>
      <AppHeader>
        <HeaderContent>
          <LogoContainer>
            <AppLogo src={Icon} alt="AskAnything Logo" />
            <AppName>국회 추적기</AppName>
          </LogoContainer>
          <NavLinks>
            <NavLink to="/privacy">개인정보 처리 방침</NavLink>
            <NavLink to="/terms">이용 약관</NavLink>
          </NavLinks>
        </HeaderContent>
      </AppHeader>
      <Container>
        <Header>
          <Logo src={Icon} alt="AskAnything Logo" />
          <Title>국회 추적기</Title>
          <Subtitle>국회 일정 및 법률 정보 제공 서비스</Subtitle>
        </Header>
        <GraphicImage src={Graphic} alt="Feature 1" />

        <Features>
          <FeatureCard>
            <FeatureImage src={Guide1} alt="Feature 1" />
            <FeatureTitle>Guide 1</FeatureTitle>
            <FeatureDescription>

            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src={Guide2} alt="Feature 2" />
            <FeatureTitle>Guide 2</FeatureTitle>
            <FeatureDescription>

            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src={Guide3} alt="Feature 3" />
            <FeatureTitle>Guide 3</FeatureTitle>
            <FeatureDescription>

            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src={Guide4} alt="Feature 4" />
            <FeatureTitle>Guide 4</FeatureTitle>
            <FeatureDescription>

            </FeatureDescription>
          </FeatureCard>
        </Features>
      </Container>
      <Footer>
        <FooterContent>
          <FooterLinks>
            <FooterLink href="/privacy">개인정보 처리 방침</FooterLink>
            <FooterLink href="/terms">이용 약관</FooterLink>
          </FooterLinks>
          <Copyright>
            © {new Date().getFullYear()} 국회 추적기. All rights reserved.
          </Copyright>
        </FooterContent>
      </Footer>
    </>
  );
};

export default Home; 