import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { VideoModalTriggerProps } from "@/types"
import Image from "next/image"

  export function VideoModal({ image, videoUrl, className }: VideoModalTriggerProps) {
    return (
        <Dialog>
        <DialogTrigger asChild className={cn(className)}>
          <div className="relative rounded-xl aspect-square w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] overflow-hidden">
            <Image
              src={"/player-thumb-overlay.svg"}
              alt="Play button image overlay"
              width={70}
              height={70}
              className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 absolute pointer-events-none"
            />
            <Image
              src={image}
              alt="Video thumbnail"
              width={280}
              height={180}
              className=" size-full object-cover hover:scale-105 transition-transform duration-300 shadow-blob"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="rounded-2xl p-0 m-0 overflow-hidden min-w-[80vw] max-w-5xl w-full">
          <DialogTitle className="sr-only">Patient Testimonial Video</DialogTitle>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Patient Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    )
  }
