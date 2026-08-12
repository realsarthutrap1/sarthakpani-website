"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const languages = [
  ["বাংলা", "Bengali", "bn"],
  ["हिन्दी", "Hindi", "hi"],
  ["中文", "Chinese", "zh-CN"],
  ["Español", "Spanish", "es"],
  ["Français", "French", "fr"],
  ["العربية", "Arabic", "ar"],
] as const;

export function LanguageMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const sourceUrl = `https://sarthakpani.com${pathname}`;

  const showDialog = () => {
    if (dialog.current && !dialog.current.open) {
      dialog.current.showModal();
      setOpen(true);
    }
  };

  return (
    <>
      <button
        aria-controls="language-dialog"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-keyshortcuts="G"
        className={`nav-link language-toggle${open ? " is-open" : ""}`}
        id="language-menu-trigger"
        onClick={showDialog}
        type="button"
      >
        [G]&nbsp;Language
      </button>
      <dialog
        aria-labelledby="language-dialog-title"
        className="server-dialog language-dialog"
        id="language-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onClose={() => setOpen(false)}
        ref={dialog}
      >
        <div className="server-dialog-window">
          <header className="server-dialog-bar">
            <span>Server response / language negotiation</span>
            <button
              aria-label="Close language selector"
              className="server-dialog-close"
              onClick={() => dialog.current?.close()}
              type="button"
            >
              Close [esc]
            </button>
          </header>
          <div className="server-dialog-terminal">
            <p className="server-dialog-request">&gt; GET /language</p>
            <h2 id="language-dialog-title">200 OK</h2>
            <pre><code>{`< HTTP/2 200 OK
< content-type: application/language-options+json
< source-language: en

{
  "status": 200,
  "message": "Choose a language"
}`}</code></pre>
            <div aria-label="Available languages" className="language-options">
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
            </div>
            <p className="server-dialog-message">Select a response language. Translations are automatic.</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
