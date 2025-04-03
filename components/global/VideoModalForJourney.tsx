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
    children,
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
                {
                    image ? <></> : children ? children : null
                }
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
