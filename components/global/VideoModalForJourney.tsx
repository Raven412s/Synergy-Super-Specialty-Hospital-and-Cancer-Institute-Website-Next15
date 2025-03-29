import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { cn } from "@/lib/utils";
  import { VideoModalTriggerProps } from "@/types";
  import Image from "next/image";

  export function VideoModalForJourney({
    image,
    videoUrl,
    className,
  }: VideoModalTriggerProps) {
    return (
      <Dialog>
        <DialogTrigger
            className={cn(
              "relative rounded-xl aspect-video w-full h-full overflow-hidden group cursor-pointer",
              className
            )}
            title="Play Patient Testimonial Video"
          >
            <Image
              src={image}
              alt="Video thumbnail"
              fill
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <Image
              src="/player-thumb-overlay.svg"
              alt="Play button overlay"
              width={70}
              height={70}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            />
        </DialogTrigger>

        <DialogContent className="rounded-2xl p-0 overflow-hidden min-w-[90vw] max-w-5xl w-full">
          <DialogTitle className="sr-only">Patient Testimonial Video</DialogTitle>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Patient Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Optional: If autoplay is needed only on modal open, use a state and conditional rendering */}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
