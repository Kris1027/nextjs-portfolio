import db from "@/db/db";
import SocialsItem from "./socials-item";

export default async function AboutSocials() {
  const socials = await db.socials.findMany();

  return (
    <ul className="text-5xl tablet:text-7xl flex justify-center gap-16 text-[var(--secondary)] mb-5">
      {socials.map((social) => (
        <SocialsItem
          key={social.id}
          id={social.id}
          link={social.link}
          color={social.color}
          icon={social.icon}
        />
      ))}
    </ul>
  );
}
