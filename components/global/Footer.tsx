"use client"
import { menuItems } from '@/data';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { SiGooglemaps } from "react-icons/si";
import { FooterFormContainer } from './FooterFormContainer';


export const Footer = () => {

    return (
        <footer
            id="footer"
            className="relative container mx-auto  py-12 px-4 sm:px-6 lg:px-8 "
        >
            <div className="flex h-[480px] mb-5 gap-5">
                <div className="flex-1/2">
                    <FooterFormContainer />
                </div>
                <div className="flex-1/2 flex justify-center items-center bg-amber-50 rounded-2xl border-2 h-full overflow-hidden">
                    {/* <motion.div
                        variants={itemVariants}
                        className="w-[80%] p-4 space-y-4  overflow-y-auto max-h-[478px]"
                    >
                        <h4 className="font-semibold text-gray-700">Quick Links</h4>
                        {quickLinks.map((qLink) => (
                            <motion.div
                                key={qLink.label}
                                variants={itemVariants}
                                className={cn("px-4 py-2 rounded-lg text-sm border border-neutral-300", qLink.bg)}
                            >
                                <div className="text-gray-500 text-[10px]">{qLink.label}</div>
                                <div className="font-normal ">{qLink.value}</div>
                            </motion.div>
                        ))}

                        <motion.div variants={itemVariants}>
                            <Button
                                variant="link"
                                className="bg-indigo-100 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                                title="Book an Appointment"
                            >
                                Book Appointment <span>→</span>
                            </Button>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Button
                                variant="link"
                                className="bg-indigo-100 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                                title="Search for available doctors"
                            >
                                Find Doctors <span>→</span>
                            </Button>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Button
                                variant="link"
                                className="bg-indigo-100 text-black px-4 py-2 rounded-full hover:shadow-blob w-full justify-between hover:no-underline"
                                title="Get in touch with us"
                            >
                                Contact Us <span>→</span>
                            </Button>
                        </motion.div>
                    </motion.div> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3562.9788065293574!2d83.3793673!3d26.7450524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b0d013cef1%3A0xc7d8e7bab401f8fe!2sSynergy%20Superspeciality%20Hospital%20and%20Cancer%20Institute!5e0!3m2!1sen!2sin!4v1746087373998!5m2!1sen!2sin"
                        className='size-full'
                        style={{border:0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center  w-full  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg;gap-10 gap-1 md:gap-6  w-max  sm:w-full">
                    {menuItems.map((menu) => {
                        const hasMultiplePages = menu.pages.length > 1;

                        return (
                            <div key={menu.label} className='w-full '>
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
                                        <div key={page.name} className="mb-4 min-w-[100px] px-1 py-1 overflow-hidden w-full">
                                            {hasMultiplePages && (
                                                <h3 className="text-sm font-semibold mb-2">{page.name}</h3>
                                            )}
                                            <ul className="w-full">
                                                {uniqueLinks.map(([href, label]) => (
                                                    <li key={href} className="text-wrap">
                                                        <Link
                                                            href={href}
                                                            className="md:text-sm text-xs hover:text-primary py-0.5 mb-0.5 transition-colors duration-200 text-neutral-500 block max-w-max overflow-hidden whitespace-nowrap text-ellipsis"
                                                        >
                                                            <span className='pr-2 text-left'>
                                                                {label}
                                                            </span>
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
            <div className="absolute bottom-5 z-50 left-1/2 -translate-x-1/2 mx-auto px-10  border-t border-gray-400 w-screen flex items-center justify-between  h-auto pt-5">
                <div className=" w-max ">
                    <div className="flex items-center gap-4 w-max ">
                        {[
                            {
                                name: "GoogleMaps",
                                Icon: SiGooglemaps,
                                link: "https://www.google.com/maps/place/Synergy+Superspeciality+Hospital+and+Cancer+Institute/@26.7450524,83.3793673,17.1z/data=!4m15!1m8!3m7!1s0x399145b0d013cef1:0xc7d8e7bab401f8fe!2sSynergy+Superspeciality+Hospital+and+Cancer+Institute!8m2!3d26.7452875!4d83.3791698!10e5!16s%2Fg%2F11qg18_33b!3m5!1s0x399145b0d013cef1:0xc7d8e7bab401f8fe!8m2!3d26.7452875!4d83.3791698!16s%2Fg%2F11qg18_33b?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
                            },
                            {
                                name: "Instagram",
                                Icon: FaInstagram,
                                link: "https://www.instagram.com/synergycancergkp/",
                            },
                            {
                                name: "Facebook",
                                Icon: FaFacebook,
                                link: "https://www.facebook.com/synergycancerhospital/?rdid=hDvFz0M4bkSM3FIq",
                            },
                        ].map((button, index) =>
                            <Link key={index} href={button.link} aria-label={button.name}>
                                <button.Icon size={16} className='text-synergy-blue' />
                            </Link>
                        )}
                    </div>
                </div>
                <div className=" text-sm font-light text-slate-500 w-max">Synergy Super Speciality Hospital & Cancer Institute © 2025 All Rights Reserved</div>
                <div className="  text-sm font-light text-slate-600 w-max">Developed & Designed By Viacam Productions</div>
            </div>
        </footer>
    );
};
