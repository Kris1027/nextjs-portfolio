import EmailForm from "../components/email-form";

export default function Contact() {
  return (
    <section
      className="pt-40 pb-4 px-2 sm:px-10 bg-white dark:bg-black text- min-h-screen overflow-hidden flex flex-col gap-5 justify-center ease-in-out duration-500"
      id="contact"
    >
      <h3 className="text-2xl pt-2 dark:text-gray-500 pb-10 text-center">
        Contact
      </h3>
      <EmailForm />
    </section>
  );
}
