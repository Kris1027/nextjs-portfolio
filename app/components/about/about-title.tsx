import Reveal from "@/app/theme/animations/reveal";
import db from "@/db/db";

export default async function AboutTitle() {
  const title = await db.aboutTitle.findFirstOrThrow();
  const subtitle = await db.aboutSubtitle.findFirstOrThrow();
  const description = await db.aboutDescription.findFirstOrThrow();

  return (
    <>
      <Reveal>
        <h1 className="text-5xl tablet:text-7xl desktop:text-9xl text-primary dark:text-primaryDark font-bold py-2 tablet:py-5 text-center">
          {title?.title}
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="text-2xl tablet:text-4xl desktop:text-6xl text-secondary dark:text-secondaryDark py-2 tablet:py-5 text-center">
          {subtitle?.title}
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-sm tablet:text-lg desktop:text-xl leading-8 text-secondary dark:text-secondaryDark tablet:w-4/5 desktop:w-3/5 mx-auto py-2 tablet:py-5 text-center">
          {description?.title}
        </p>
      </Reveal>
    </>
  );
}
