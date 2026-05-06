import Image from "next/image";
import { cn, isSvgPath } from "@/lib/utils";

type Props = {
  src: string;
  alt?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** SVG desde `/public` se sirve con `<img>` para evitar fallos del optimizador de `next/image`. */
export function PublicAssetImg({
  src,
  alt = "",
  fill,
  width,
  height,
  className,
  sizes,
  priority,
}: Props) {
  if (isSvgPath(src)) {
    return (
      <img
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        className={cn(fill && "absolute inset-0 h-full w-full", className)}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
