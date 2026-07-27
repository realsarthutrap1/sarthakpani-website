import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { focusItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Now",
  description: "What Sarthak Pani is focused on now.",
};

export default function NowPage() {
  return (
    <main>
      <PageIntro
        label="Now"
        title="The work currently earning my attention."
        description="A short, public snapshot of what I am building, studying, and exploring right now."
      />
      <section className="section-shell border-t border-line">
        <div className="max-w-5xl">
          {focusItems.map((item) => (
            <article className="grid gap-4 border-b border-line py-9 first:pt-0 md:grid-cols-[0.34fr_0.66fr]" key={item.title}>
              <h2 className="text-2xl font-medium tracking-tight">{item.title}</h2>
              <p className="max-w-[58ch] text-lg leading-8 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 font-mono text-xs text-muted">Updated July 26, 2026</p>
      </section>
    </main>
  );
}
