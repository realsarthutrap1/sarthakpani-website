"use client";

import Link from "next/link";
import type { PostMeta } from "@/lib/types";

function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${year}.${month}.${day}`;
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
            const detailsId = `details-${post.slug}`;
            return (
              <li className={`blog-row${open ? " is-open" : ""}`} key={post.slug}>
                <div className="blog-row-visible">
                  <Link className="blog-row-link" href={`/blog/${post.slug}`}>
                    <span className="blog-date">
                      <span aria-hidden className="date-square" />
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                    </span>
                    <span className="blog-row-title">{post.title}</span>
                  </Link>
                  <button
                    aria-controls={detailsId}
                    aria-expanded={open}
                    aria-label={`${open ? "Collapse" : "Expand"} details for ${post.title}`}
                    className="row-toggle"
                    onClick={() => onExpand(open ? null : post.slug)}
                    type="button"
                  >
                    <span aria-hidden className="plus-mark" />
                  </button>
                </div>
                {open ? (
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
    </div>
  );
}
