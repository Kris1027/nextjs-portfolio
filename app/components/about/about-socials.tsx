import db from "@/db/db";
import { getSocialIcons } from "@/app/util/getSocialIcons";

export default async function AboutSocials() {
  const socials = await db.socials.findMany();

  return (
    <ul className="text-5xl lg:text-7xl flex justify-center gap-16 text-secondary dark:text-secondaryDark mb-10 md:mb-20">
      {socials.map((social) => (
        <li
          className="animate-fade-in hover:scale-110 hover:-translate-x-1 hover:-translate-y-1 duration-200"
          key={social.id}
        >
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: social.color,
            }}
          >
            {getSocialIcons(social.icon)}
          </a>
        </li>
      ))}
    </ul>
  );
}
