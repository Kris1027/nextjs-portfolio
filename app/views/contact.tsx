import EmailForm from "../components/email-form";
import Heading from "../ui/heading";
import Paragraph from "../ui/paragraph";
import Section from "../ui/section";

export default function Contact() {
  return (
    <Section id="contact">
      <Heading ariaLabel="contact heading">Contact</Heading>
      <Paragraph ariaLabel="contact description">
        Feel free to get in touch with me.
      </Paragraph>
      <EmailForm />
    </Section>
  );
}
