export default function Footer() {
  return (
    <footer>
      <div className="p-2 tablet:p-10 bg-white dark:bg-black text-secondary dark:text-secondaryDark">
        <p className="text-center">
          ©2024 All rights reserved. Designed & crafted with love by{" "}
          <a
            href="https://www.linkedin.com/in/krzysztof-obarzanek-6b8803254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark hover:underline font-bold"
          >
            Kris1027
          </a>
        </p>
      </div>
    </footer>
  );
}
