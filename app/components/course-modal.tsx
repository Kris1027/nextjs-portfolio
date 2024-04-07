import Image, { StaticImageData } from "next/image";

export default function CourseModal({
  image,
  title,
  setShowModal,
}: {
  image: StaticImageData;
  title: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-2xl dark:shadow-white dark:shadow-sm">
        <Image src={image} alt={title} width={500} height={300} />
        <button
          className="block mx-auto mt-4 px-4 py-2 bg-blue-500 dark:bg-slate-950 text-white rounded hover:bg-blue-600 dark:hover:bg-slate-600"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
