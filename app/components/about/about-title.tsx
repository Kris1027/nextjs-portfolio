import db from "@/db/db";

export default async function AboutTitle() {
  const title = await db.aboutTitle.findFirstOrThrow();
  const subtitle = await db.aboutSubtitle.findFirstOrThrow();
  const description = await db.aboutDescription.findFirstOrThrow();

  return (
    <>
      <h1 className="text-5xl tablet:text-7xl desktop:text-9xl py-2 text-primary dark:text-primaryDark font-bold text-center">
        {title?.title}
      </h1>
      <h2 className="text-2xl tablet:text-4xl desktop:text-6xl pt-2 text-secondary dark:text-secondaryDark pb-10 text-center">
        {subtitle?.title}
      </h2>
      <p className="text-sm tablet:text-lg desktop:text-xl pb-5 leading-8 text-secondary dark:text-secondaryDark text-center tablet:w-4/5 desktop:w-3/5 mx-auto">
        {description?.title}
      </p>
    </>
  );
}
