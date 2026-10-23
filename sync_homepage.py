#!/usr/bin/env python3
"""Copy the Upcoming / Past events from timeline.html into index.html.

The homepage already loads events from timeline.html in the browser, but that
fetch is blocked when index.html is opened straight from disk. This script
keeps the built-in copy in index.html up to date so the homepage is right
either way. It runs automatically on every commit (see .githooks/pre-commit).
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def clean(fragment):
    text = re.sub(r"<[^>]+>", "", fragment or "")
    return re.sub(r"\s+", " ", text).strip()


def section_items(timeline, name):
    match = re.search(
        r'<h2 class="section-title">\s*' + name + r"\s*</h2>(.*?)</section>",
        timeline, re.S | re.I)
    if not match:
        raise SystemExit(f"sync_homepage: no '{name}' section in timeline.html")
    items = []
    for block in re.split(r'<div class="timeline-item">', match.group(1))[1:]:
        field = lambda cls: re.search(
            r'class="' + cls + r'"[^>]*>(.*?)</(?:a|span|p)>', block, re.S)
        title, date, desc = (field(c) for c in
                             ("timeline-title", "timeline-date", "timeline-desc"))
        items.append((clean(title and title.group(1)),
                      clean(date and date.group(1)),
                      clean(desc and desc.group(1))))
    return items


def main():
    timeline = (ROOT / "timeline.html").read_text()
    index_path = ROOT / "index.html"
    index = index_path.read_text()

    upcoming = "".join(f"""    <div class="event-card">
      <h3>{t}</h3>
      <p class="event-date">{d}</p>
      <p>
        {desc}
      </p>
    </div>
""" for t, d, desc in section_items(timeline, "Upcoming Events"))
    past = "".join(f"""        <div class="event-card">
          <h3>{t}</h3>
          <p class="event-date">{d}</p>
        </div>
""" for t, d, _ in section_items(timeline, "Past Events"))

    index, n1 = re.subn(
        r'(id="home-upcoming-events">\s*<h2>Upcoming Events</h2>\n).*?(  </div>\n\n  <div class="upcoming-events past-events">)',
        lambda m: m.group(1) + upcoming + m.group(2), index, flags=re.S)
    index, n2 = re.subn(
        r'(id="home-past-events">\n).*?(      </div>\n    </a>)',
        lambda m: m.group(1) + past + m.group(2), index, flags=re.S)
    if n1 != 1 or n2 != 1:
        raise SystemExit("sync_homepage: couldn't find the event blocks in index.html")
    index_path.write_text(index)


if __name__ == "__main__":
    main()
