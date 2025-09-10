import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin-bottom: 60px;
  text-align: center;
  width: 100%;
  padding: 80px 20px;
  background: linear-gradient(135deg, #4f6cb0 0%, #1e1e2f 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  margin-bottom: 40px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(-1deg);
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
`;

export const ListItem = styled.li`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 32px rgba(0,0,0,0.35);
    background: rgba(255, 255, 255, 0.1);
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const ListIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  transition: transform 0.3s ease;

  ${ListItem}:hover & {
    transform: rotate(15deg) scale(1.1);
  }

  @media ${props => props.theme.breakpoints.md} {
    width: 56px;
    height: 56px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 48px;
    height: 48px;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
  color:#da57b0ff;
  margin-bottom: 12px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 22px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 15px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
