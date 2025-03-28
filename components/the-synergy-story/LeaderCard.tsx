// components/cards/LeaderCard.tsx
"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LeaderCardProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { DownloadImageButton } from './DownloadImageButton'



export const LeaderCard: React.FC<LeaderCardProps> = ({
  image,
  name,
  role,
  description,
  onReadMore,
  onDownload,
}) => {
    const router = useRouter()
  return (
<Card className="min-w-full bg-background  sm:max-w-xs rounded-xl shadow-md">
  <CardContent className="flex justify-center py-3 px-3">
    <div className="relative w-full min-h-[26rem] sm:h-[28rem]">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover rounded-md object-left-top"
      />
    </div>
  </CardContent>

  <CardHeader className="px-4 pt-2 pb-1 space-y-1">
    <CardTitle className="text-base sm:text-lg font-semibold">{name}</CardTitle>
    <CardDescription className="text-sm text-gray-500">{role}</CardDescription>
    <CardDescription className="text-sm text-gray-700 w-full line-clamp-4">
      {description}
    </CardDescription>
  </CardHeader>

  <CardFooter className="flex justify-between items-center gap-2 px-4 pb-3 pt-1">
    <Button
      variant="default"
      className="text-xs sm:text-sm px-3 py-1.5"
      title={`Read More About Doctor, ${name} and his journey`}
      onClick={()=>{
        if (onReadMore) {
            router.push(onReadMore)
        }
      }
      }
    >
      Read more...
    </Button>
      <DownloadImageButton filePath={onDownload!} />
  </CardFooter>
</Card>

  )
}
