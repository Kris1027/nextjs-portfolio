import EmailForm from "../components/email-form";
import Section from "../ui/section";

export default function Contact() {
  return (
    <Section id="contact">
      <h3 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Contact
      </h3>
      <p className="text-sm md:text-lg pb-5 leading-8 text-gray-800 dark:text-gray-600 lg:w-1/2 mx-auto text-center">
        Feel free to get in touch with me.
      </p>
      <EmailForm />
    </Section>
  );
}
