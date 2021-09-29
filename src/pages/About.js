import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import Resume from '../assets/data/Resume.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Padmanaban</span>
              </p>
              <h2 className="about__heading">An application developer.</h2>
              <div className="about__info">
                <PText>
                  I am from Mogappair, Chennai. A city known for allowing people
                  to become their best self. I am always intrigued about our
                  tech world and how it works. That made me to take computer
                  science as my high school major.
                  <br />
                  <br />
                  My interest in mathematics and computer science allowed me to
                  take M.Sc Software systems in PSG College of Technology. My
                  passion to solve problems helped me to excel in coding. I
                  learn from my mistakes and this allowed me to adapt to
                  industry standard in less time.
                  <br />
                  <br />
                  My motto is to concentrate on my process and try to become a
                  better version of myself. With the help of people around me I
                  can acheive what I aim for.
                </PText>
              </div>
              <p className="about__subheading">
                <span>
                  <a href={Resume} download="Resume">
                    Download CV
                  </a>
                </span>
              </p>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Velammal Matriculation School, Chennai']}
              />
              <AboutInfoItem
                title="Collage"
                items={['PSG College of Technology, Coimbatore']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Languages"
                items={['Java', 'C++', 'JavaScript', 'Python', 'C']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'SQL']}
              />
              <AboutInfoItem
                title="Frameworks"
                items={['Angular', 'REACT', 'Spring', 'Django']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2020"
                items={['6 months Internship at Thoughtworks']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
