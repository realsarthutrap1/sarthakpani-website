import type { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

function MediaPlaceholder({ kind, label }: { kind: "Photo" | "Video"; label: string }) {
  return (
    <figure className="media-placeholder">
      <span>{kind}</span>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

function ArticleVideo({ label, poster, src }: { label: string; poster: string; src: string }) {
  return (
    <figure className="article-video">
      <video aria-label={label} controls muted playsInline poster={poster} preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

const photoGalleries = {
  version1: [
    {
      src: "/media/alarm-clock/version1-open-mechanism.jpg",
      alt: "The opened gel blaster showing its battery, wiring, motor, and firing mechanism.",
    },
    {
      src: "/media/alarm-clock/version1-l298n-bench.jpg",
      alt: "The gel blaster, battery, and L298N motor driver laid out on the workbench.",
    },
    {
      src: "/media/alarm-clock/version1-l298n-assembled.jpg",
      alt: "The red gel blaster wired to an L298N motor driver during assembly.",
    },
  ],
  version2: [
    {
      src: "/media/alarm-clock/version2-rf-receiver.jpg",
      alt: "An RX470C radio receiver wired on a breadboard beside a Raspberry Pi.",
    },
    {
      src: "/media/alarm-clock/version2-rf-transmitter.jpg",
      alt: "An FS1000A radio transmitter on a breadboard with ESP32 development boards behind it.",
    },
    {
      src: "/media/alarm-clock/version2-esp32-mounted.jpg",
      alt: "The ESP32 alarm prototype and gel blaster mounted to a red shelf.",
    },
  ],
} as const;

function PhotoCarousel({ gallery, label }: { gallery: keyof typeof photoGalleries; label: string }) {
  const images = photoGalleries[gallery];

  return (
    <figure className="photo-carousel">
      <div aria-label={label} className="photo-carousel-track" role="region" tabIndex={0}>
        {images.map((photo) => (
          <div className="photo-carousel-slide" key={photo.src}>
            <Image alt={photo.alt} height={1024} sizes="(max-width: 760px) 86vw, 520px" src={photo.src} width={768} />
          </div>
        ))}
      </div>
      <figcaption>{label} · Swipe or scroll</figcaption>
    </figure>
  );
}

const components = {
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const external = typeof props.href === "string" && props.href.startsWith("http");
    return <a {...props} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined} />;
  },
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 {...props} />,
  h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 {...props} />,
  p: (props: ComponentPropsWithoutRef<"p">) => <p {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => <ul {...props} />,
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => <blockquote {...props} />,
  code: (props: ComponentPropsWithoutRef<"code">) => <code {...props} />,
  ArticleVideo,
  MediaPlaceholder,
  PhotoCarousel,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="article-prose">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
