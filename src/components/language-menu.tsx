"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  ["বাংলা", "Bengali", "bn"],
  ["हिन्दी", "Hindi", "hi"],
  ["中文", "Chinese", "zh-CN"],
  ["Español", "Spanish", "es"],
  ["Français", "French", "fr"],
  ["العربية", "Arabic", "ar"],
] as const;

export function LanguageMenu() {
  const pathname = usePathname();
  const sourceUrl = `https://sarthakpani.com${pathname}`;

  return (
    <details className="language-menu" id="language-menu">
      <summary
        aria-keyshortcuts="G"
        aria-label="Choose a language"
        className="nav-link language-toggle"
      >
        [G]&nbsp;Language
      </summary>
      <div className="language-panel">
        <p className="language-heading">Read in</p>
        <Link className="language-option" href={pathname} hrefLang="en" lang="en">
          <span>English</span><span>Original</span>
        </Link>
        {languages.map(([nativeName, englishName, code]) => (
          <a
            className="language-option"
            href={`https://translate.google.com/translate?sl=en&tl=${code}&u=${encodeURIComponent(sourceUrl)}`}
            hrefLang={code}
            key={code}
            lang={code}
          >
            <span>{nativeName}</span><span>{englishName}</span>
          </a>
        ))}
        <p className="language-note">Automatic translation by Google</p>
      </div>
    </details>
  );
}
