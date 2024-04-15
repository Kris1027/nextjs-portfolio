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
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-2xl shadow-white">
        <Image src={image} alt={title} width={700} height={350} />
      </div>
    </div>
  );
}
