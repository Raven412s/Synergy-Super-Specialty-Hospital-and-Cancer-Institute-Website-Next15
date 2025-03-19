import SliderWithTriggers from "@/components/homepage/SliderWithTriggers";
import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
<main className="w-full">
<section className="relative min-h-screen w-full">
    <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
    >
        <source src="/Banner.webm" type="video/webm" />
        <source src="/Banner.mp4" type="video/mp4" />
    </video>
</section>

    <section className="min-h-screen w-full bg-gradient-to-b from-0% from-transparent via-30% via-[#dceaff] to-100% to-fuchsia-100 px-5 lg:px-28 py-10 relative">
        {/* First texts */}
        <div className="space-y-4">
            <h1 className="text-2xl lg:text-3xl font-display font-semibold">Discover Our Centres of Clinical Excellence</h1>
            <p className="font-sans  text-lg">At Synergy Superspecialty Hospital and Cancer Institute, we are committed to delivering world-class healthcare through our specialized centers of medical excellence. Our state-of-the-art facilities offer unparalleled expertise in various medical disciplines, setting new benchmarks in clinical outcomes globally. </p>
        </div>

        <div className="flex flex-col gap-5 items-center w-full h-auto">
          <SliderWithTriggers/>
          <Link href={"/specialities"}><Button variant={"default"} size={"xl"} className="bg-indigo-800 hover:bg-indigo-700 rounded-full !py-5 !px-6 text-lg w-full md:w-auto">View All Specialities <MoveRightIcon className="size-4"/></Button></Link>
        </div>

    </section>
</main>
  );
}
