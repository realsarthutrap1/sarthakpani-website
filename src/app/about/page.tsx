import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description: "About Sarthak Pani, technical founder, engineer, and physics student.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        label="About"
        title="A little about me."
        description="I am a founder, engineer, and physics student interested in useful technology and hard questions."
      />
      <section className="page-shell content-section grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
        <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-surface md:min-h-[700px]">
          <Image
            src="/images/sarthak-pani.jpg"
            alt="Portrait of Sarthak Pani"
            fill
            preload
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
          />
        </div>
        <div className="self-center">
          <div className="prose">
            <p>
              I am a technical founder and physics student interested in how
              complex systems can be understood, tested, and made useful.
            </p>
            <p>
              I co-founded Elev to help mission-driven organizations collect
              stronger evidence from everyday work. I have also built embedded
              robotics, computer vision, and networking prototypes that connect
              software to the physical world.
            </p>
            <p>
              Before software became my main medium, I started community and
              commercial projects. Those experiences taught me that good
              technology begins with listening, clear communication, and
              responsibility for the outcome.
            </p>
            <p>
              I am now continuing my study of physics and astrophysics while
              developing the mathematical and engineering depth needed for
              harder scientific and technical problems.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link className="button button-primary" href="/projects">
              Projects
              <ArrowRight aria-hidden size={16} weight="bold" />
            </Link>
            <a className="button button-secondary" href="mailto:official.sarthakp@gmail.com">
              Email me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
