import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

interface ProductsCardProps {
  title: string;
  titleClass?: string;
  description?: string;
  contentImage: string;
  footer?: string;
}

export function ProductCard({
  title,
  titleClass,
  description,
  contentImage,
  footer,
}: ProductsCardProps) {
  return (
    <Card className="w-64">
      <CardContent className="relative w-full h-48">
        <Image
          src={contentImage}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </CardContent>
      <CardHeader className="text-center">
        {title && <CardTitle className={titleClass}>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {footer && (
        <CardFooter className="flex justify-center">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
