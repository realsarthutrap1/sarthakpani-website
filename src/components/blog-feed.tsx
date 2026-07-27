"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { PostMeta } from "@/lib/types";

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${year}.${month}.${day}`;
}

function ComingSoonDialog({ onClose, post }: { onClose: () => void; post: PostMeta }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialog.current && !dialog.current.open) dialog.current.showModal();
  }, []);

  return (
    <dialog
      aria-labelledby="server-dialog-title"
      className="server-dialog"
      id="coming-soon-dialog"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      onClose={onClose}
      ref={dialog}
    >
      <div className="server-dialog-window">
        <header className="server-dialog-bar">
          <span>Server response / edge runtime</span>
          <button
            aria-label="Close server response"
            className="server-dialog-close"
            onClick={() => dialog.current?.close()}
            type="button"
          >
            Close [esc]
          </button>
        </header>
        <div className="server-dialog-terminal">
          <p className="server-dialog-request">&gt; GET /blog/{post.slug}</p>
          <h2 id="server-dialog-title">501 Not Implemented</h2>
          <pre><code>{`< HTTP/2 501 Not Implemented
< content-type: application/problem+json
< cache-control: no-store

{
  "status": 501,
  "error": "NOT_IMPLEMENTED",
  "message": "Essay not published",
  "retry": "Come back later"
}`}</code></pre>
          <p className="server-dialog-message">
            This essay is not ready to read yet. Come back later.
          </p>
        </div>
      </div>
    </dialog>
  );
}

export function BlogFeed({
  expanded,
  onExpand,
  posts,
}: {
  expanded: string | null;
  onExpand: (slug: string | null) => void;
  posts: PostMeta[];
}) {
  const comingSoonPost = posts.find((post) => !post.live && post.slug === expanded);

  return (
    <div className="blog-feed">
      <div className="article-header table-label" aria-hidden>
        <span className="date-label">/ Date</span>
        <span className="name-label">/ Name</span>
      </div>
      {posts.length ? (
        <ul className="blog-list">
          {posts.map((post) => {
            const open = expanded === post.slug;
            const detailsId = post.live ? `details-${post.slug}` : "coming-soon-dialog";
            const rowContent = (
              <>
                <span className="blog-date">
                  <span aria-hidden className="date-square" />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </span>
                <span className="blog-row-title">
                  {post.title}
                  {!post.live ? <span className="coming-soon-hint">501 / Coming soon</span> : null}
                </span>
              </>
            );
            return (
              <li
                className={`blog-row${open ? " is-open" : ""}${post.live ? "" : " is-coming-soon"}`}
                key={post.slug}
              >
                <div className="blog-row-visible">
                  {post.live ? (
                    <Link className="blog-row-link" href={`/blog/${post.slug}`}>{rowContent}</Link>
                  ) : (
                    <button
                      aria-controls={detailsId}
                      aria-expanded={open}
                      aria-label={`${post.title}. Coming soon`}
                      className="blog-row-link blog-row-trigger"
                      onClick={() => onExpand(open ? null : post.slug)}
                      type="button"
                    >
                      {rowContent}
                    </button>
                  )}
                  <button
                    aria-controls={detailsId}
                    aria-expanded={open}
                    aria-label={
                      post.live
                        ? `${open ? "Collapse" : "Expand"} details for ${post.title}`
                        : `Show publication status for ${post.title}`
                    }
                    className="row-toggle"
                    onClick={() => onExpand(post.live && open ? null : post.slug)}
                    type="button"
                  >
                    <span aria-hidden className="plus-mark" />
                  </button>
                </div>
                {open && post.live ? (
                  <div className="blog-details" id={detailsId}>
                    <div className="detail-group">
                      <span className="detail-label">Summary:</span>
                      <p className="detail-value">{post.description}</p>
                    </div>
                    <div className="detail-group">
                      <span className="detail-label">Author:</span>
                      <p className="detail-value">{post.author}</p>
                    </div>
                    <div className="detail-group">
                      <span className="detail-label">Topics:</span>
                      <ul className="topic-tags">
                        {post.topics.map((topic) => (
                          <li className="topic-tag" key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                    <Link className="read-link" href={`/blog/${post.slug}`}>Read</Link>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="empty-row">No posts match those topics.</p>
      )}
      {comingSoonPost ? (
        <ComingSoonDialog onClose={() => onExpand(null)} post={comingSoonPost} />
      ) : null}
    </div>
  );
}
