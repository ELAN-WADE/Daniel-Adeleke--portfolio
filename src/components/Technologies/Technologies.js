import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      CMS platform  To Full Stack development , then Machine Learning
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CMS development</ListTitle>
          <ListParagraph>
            Experience building and customizing websites with WordPress, Wix, and Joomla <br />
            Skilled in integrating CMS platforms with modern front-end frameworks for scalable, dynamic web solutions<br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with Next.js
            <br />
            React.js, Bootstrap, MaterialUi , Python-Streamlit
            <br />
            Ant Design, HTML5,  Tailwind.CSS3 <br />& JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with Node.js
            <br />
            Express.js, GraphQL, Nest.js
            <br />
            TypeScript, Microservices
            <br />
            Docker, PubSub, RabbitMQ
            <br />
            Prisma, Sequelize, MongoDB
            <br />
            Python-Flask. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
