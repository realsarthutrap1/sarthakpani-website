"use client";

import { useState } from "react";

type Topic = {
  name: string;
  count: number;
};

export function BlogFilters({
  onToggle,
  selected,
  topics,
}: {
  onToggle: (topic: string) => void;
  selected: string[];
  topics: Topic[];
}) {
  const [open, setOpen] = useState(true);

  return (
    <aside className="blog-filters" aria-label="Blog filters">
      <div className="filter-block">
        <div className="table-label">
          <span>/</span> Filters
        </div>
        <div className="directory">
          <button
            aria-controls="topic-list"
            aria-expanded={open}
            className="directory-toggle"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span aria-hidden className="directory-chevron">⌄</span>
            <span aria-hidden className="folder-mark" />
            <span>Topic</span>
          </button>
          <div className="directory-content" hidden={!open}>
            <ul className="topic-list" id="topic-list">
              {topics.map((topic) => {
                const active = selected.includes(topic.name);
                return (
                  <li key={topic.name}>
                    <button
                      aria-pressed={active}
                      className="topic-button"
                      onClick={() => onToggle(topic.name)}
                      type="button"
                    >
                      <span aria-hidden className="checkbox-mark" />
                      <span className="topic-name">
                        {topic.name} <span className="topic-count">({topic.count})</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
