import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-xl min-h-screen flex justify-center items-center">
        Page not found
      </main>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}
