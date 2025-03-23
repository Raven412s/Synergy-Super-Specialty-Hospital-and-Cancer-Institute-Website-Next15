

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

            <main suppressHydrationWarning suppressContentEditableWarning className=" pt-20 lg:pt-24 ">
                {children}
            </main>

  );
}
