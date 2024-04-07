import Image, { StaticImageData } from "next/image";

export default function Modal({
  setShowModal,
  image,
  title,
}: {
  setShowModal: Function;
  image?: StaticImageData;
  title?: string;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Image src={image} alt={title} width={500} height={300} />
        <button
          className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
