import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
