import EmailForm from "../components/email-form";
import Heading from "../ui/heading";
import Section from "../ui/section";

export default function Contact() {
  return (
    <Section id="contact">
      <Heading>Contact</Heading>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        Feel free to get in touch with me.
      </p>
      <EmailForm />
    </Section>
  );
}
