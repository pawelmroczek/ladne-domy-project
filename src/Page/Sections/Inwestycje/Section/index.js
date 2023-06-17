import {
  SectionContainer,
  SectionHeader,
  LightText,
  GoogleMaps,
  ContentContainer,
  StyledText,
  StyledLink,
  StyledTextContainer
} from "./styled";

const Section = ({location, endTime}) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <h3>
          <LightText>LOKALIZACJA: </LightText>{location}
        </h3>
        <h3>
          <LightText>PLANOWANA DATA ODDANIA: </LightText> {endTime}
        </h3>
      </SectionHeader>
      <ContentContainer>
        <GoogleMaps
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.6946250409496!2d18.08547589192155!3d53.18745761504013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703172b687e7eb9%3A0xef7b327b3ceb1123!2sD%C5%82uga%204%2C%2086-031%20Niwy!5e0!3m2!1spl!2spl!4v1685722914320!5m2!1spl!2spl"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></GoogleMaps>
        <StyledTextContainer>
          <StyledText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            suscipit justo sed elit viverra, et fringilla orci facilisis. Proin
            dolor sapien, finibus vel diam non, euismod mollis tellus. Aenean in
            lacus a ligula convallis hendrerit. Vestibulum rhoncus, turpis sed
            sodales feugiat, ipsum tellus condimentum dui, a vulputate ante
            lacus a tortor. Proin aliquet elit sed tellus lacinia imperdiet.
            Nunc vulputate tempus libero tincidunt maximus. Mauris et purus
            erat. Morbi maximus ut risus sed iaculis.
          </StyledText>
          <StyledLink href="www.google.com">
            Kliknij i dowiedz się więcej!
          </StyledLink>
        </StyledTextContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Section;
