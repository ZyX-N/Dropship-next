import ParentHomeWrapper from "@/app/_components/wrapper/ParentHomeWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen h-screen bg-gray-100">
      <ParentHomeWrapper>
        {children}
      </ParentHomeWrapper>
    </main>
  );
}
