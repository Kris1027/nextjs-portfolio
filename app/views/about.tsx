import Section from "../ui/section";
import ProfileImage from "../components/about/profile-image";
import AboutSocials from "../components/about/about-socials";
import AboutTitle from "../components/about/about-title";

export default function About() {
  return (
    <Section id="about">
      <AboutTitle />
      <AboutSocials />
      <ProfileImage />
    </Section>
  );
}
