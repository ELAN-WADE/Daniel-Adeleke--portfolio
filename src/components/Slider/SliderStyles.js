import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 10px auto;
  position: relative;
  background: #120f1c52;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  border-radius: 16px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items:left;
`;

export const Slide = styled.div`
  width: 100%;
  height: 0;
  padding-top: 50%; /* Maintain 2:1 aspect ratio */
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  transition: all 0.5s ease;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  border-radius: 16px;
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
`;

export const Dot = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  background: ${({ active }) => (active ? '#6366f1' : '#d1d5db')};
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  ${({ active }) => active && `
    transform: scale(1.2);
  `}
`;

export const SliderHeader = styled.h2`
  text-align: center;
  width: 90%;
  max-width: 900px;
  margin: 30px auto 16px;
  font-weight: 700;
  color: #362c22ff;
  background: #0a0a0a;
  padding: 8px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.10);
  letter-spacing: 1px;
  font-size: 5rem;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    padding: 10px 0;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 8px 0;
    border-radius: 6px;
    margin: 16px auto 12px;
  }
`;
