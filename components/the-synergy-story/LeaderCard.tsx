// components/cards/LeaderCard.tsx
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../ui/button'
import Image from 'next/image'
import { ImageDown } from 'lucide-react'
import { LeaderCardProps } from '@/types'



export const LeaderCard: React.FC<LeaderCardProps> = ({
  image,
  name,
  role,
  description,
  onReadMore,
  onDownload,
}) => {
  return (
    <Card className="w-full max-w-sm lg:max-w-xs">
      <CardContent className="flex justify-center py-4">
        <div className="relative w-[110px] h-[180px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </CardContent>

      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">{name}</CardTitle>
        <CardDescription className="text-gray-500">{role}</CardDescription>
        <CardDescription className="text-gray-900 w-full line-clamp-4">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between items-center gap-2 px-6 pb-4">
        <Button
          variant="default"
          className="text-sm sm:text-base"
          onClick={onReadMore}
        >
          Read more...
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="hover:text-primary"
          onClick={onDownload}
        >
          <ImageDown />
        </Button>
      </CardFooter>
    </Card>
  )
}
