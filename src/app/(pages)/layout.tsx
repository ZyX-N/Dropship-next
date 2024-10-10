import ParentHomeWrapper from "@/app/_components/wrapper/ParentHomeWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gray-50">
      <ParentHomeWrapper>
        {children}
      </ParentHomeWrapper>
    </main>
  );
}
