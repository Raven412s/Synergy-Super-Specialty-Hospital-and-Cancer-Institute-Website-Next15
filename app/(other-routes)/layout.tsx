

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressContentEditableWarning
        suppressHydrationWarning
      >
            <main className="min-h-screen pt-20 lg:pt-24 px-6 lg:px-24">
                {children}
            </main>
      </body>
    </html>
  );
}
