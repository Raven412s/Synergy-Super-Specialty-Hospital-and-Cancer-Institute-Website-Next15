

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

            <main suppressHydrationWarning suppressContentEditableWarning className=" pt-20 ">
                {children}
            </main>

  );
}
