import Image from "next/image";
import { imageKitLoader } from "../util/image-kit-loader";

export default function CourseModal({
  image,
  title,
  setShowModal,
}: {
  image: string;
  title: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setShowModal(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-2xl shadow-white">
        <Image
          loader={imageKitLoader}
          src={image}
          sizes="(min-width: 768px) 700px, (min-width: 384px) 350px"
          alt={title}
          width={700}
          height={350}
        />
      </div>
    </div>
  );
}
