import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  position: relative;
  background: #fff;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  border-radius: 16px;
  overflow: hidden;
`;

export const Slide = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  transition: background 0.5s;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
  border: none;
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 24px;
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

// Add this for the header
export const SliderHeader = styled.h2`
  text-align: center;
  margin: 24px 0 8px;
  font-weight: 700;
  color: #d48139;
  background: #0a0a0a;
  padding: 12px 0;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.10);
  letter-spacing: 1px;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 8px 0;
    border-radius: 6px;
    margin: 16px 0 6px;
  }
`;