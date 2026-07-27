import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

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
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
