import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { VideoModalTriggerProps } from "@/types";
import React from "react";
import { ImageWithFallback } from "./ImageWithFallback";

  export function VideoModal({
    image,
    videoUrl,
    children,
    className,
  }: VideoModalTriggerProps) {
    return (
      <Dialog>
        <DialogTrigger
          className={cn(
            image
              ? "relative rounded-xl aspect-square w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] overflow-hidden group cursor-pointer"
              : "",
            className
          )}
          title="Play Video"
          asChild={!!children} // Use asChild when children are provided
        >
          {image ? (
            <>
              <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
                src={image}
                alt="Video thumbnail"
                fill
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
                src="/player-thumb-overlay.svg"
                alt="Play button overlay"
                width={70}
                height={70}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              />
            </>
          ) : children ? (
            React.isValidElement(children) ? children : <>{children}</>
          ) : null}
        </DialogTrigger>

        <DialogContent className="rounded-2xl p-0 overflow-hidden min-w-[90vw] max-w-5xl w-full">
          <DialogTitle className="sr-only">Video Preview</DialogTitle>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Video Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
