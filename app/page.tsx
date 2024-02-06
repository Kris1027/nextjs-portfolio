import { BsMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Kris1027</h1>
          <ul className="flex items-center">
            <li>
              <BsMoonStarsFill className="cursor-pointer" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md text-white ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
