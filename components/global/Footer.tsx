import { menuItems } from '@/data';
import Link from 'next/link';
import { FooterFormContainer } from './FooterFormContainer';

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative container mx-auto  py-12 px-4 sm:px-6 lg:px-8 "
    >
        <FooterFormContainer/>
    <div className="flex items-center justify-center w-full  ">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  w-full">
        {menuItems.map((menu) => {
          const hasMultiplePages = menu.pages.length > 1;

          return (
            <div key={menu.label}>
              <h2 className="text-primary font-semibold font-display capitalize text-left mb-4">
                {menu.label}
              </h2>

              {menu.pages.map((page) => {
                const uniqueLinksMap = new Map<string, string>();

                page.links.forEach((link) => {
                  // allow both full page & section links
                  if (!uniqueLinksMap.has(link.href)) {
                    uniqueLinksMap.set(link.href, link.label);
                  }
                });

                const uniqueLinks = Array.from(uniqueLinksMap.entries());

                if (uniqueLinks.length === 0) return null;

                return (
                  <div key={page.name} className="mb-4 w-max  px-1 py-1">
                    {hasMultiplePages && (
                      <h3 className="text-sm font-semibold mb-2">{page.name}</h3>
                    )}
                    <ul className="space-y-1">
                      {uniqueLinks.map(([href, label]) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="text-sm hover:text-primary transition-colors duration-200"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      </div>
    </footer>
  );
};
