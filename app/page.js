import Image from "next/image";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="bg-[#E0F1E7] w-[100vw] h-[100vh] flex flex-col items-center justify-center p-6">
        <ContactForm />
      </div>
    </>
  );
}
