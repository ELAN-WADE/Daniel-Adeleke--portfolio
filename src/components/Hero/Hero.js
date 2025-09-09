import React from "react";
import styled from "styled-components"; // Add this import

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

// Add these styled components after your imports
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 80px;

  @media (max-width: 768px) {
    margin: 0 0 40px;
    width: 40%;
    gap: 8px;
    justify-content: center;
  }
  @media (max-width: 480px) {
    margin: 0 0 24px;
    gap: 6px;
    flex-direction: column;
    align-items: stretch;
  }
`;

const ResponsiveLinkButton = styled(LinkButton)`
  background: #25D366;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.95rem;
    
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const Hero = (props) => (
  <>
    <Section>
      <LeftSection>
        <SectionTitle>
          Daniel Adeleke <br/>  Web Developer/innovator 
        </SectionTitle>
        <SectionText>
          Frontend & CMS Developer skilled in React.js, Next.js, and WordPress/Headless
          CMS. Experienced with Figma and Elementor for modern UI/UX, and applying AI
          & machine learning to create intelligent, user-focused solutions.
        </SectionText>

        {/* Replace the old div and LinkButton with the new styled components */}
        <ButtonContainer>
          <ResponsiveLinkButton
            href="https://wa.me/2348058458413"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </ResponsiveLinkButton>
        </ButtonContainer>
      </LeftSection>
    </Section>
    {/* ...existing code... */}
  </>
);

export default Hero;