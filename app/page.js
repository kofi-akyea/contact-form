import Image from "next/image";
import ContactForm from "./components/ContactForm";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <div className="bg-[#E0F1E7] w-[100vw]  flex flex-col items-center justify-center p-10">
        <ContactForm />
        <Toaster />
      </div>
    </>
  );
}
