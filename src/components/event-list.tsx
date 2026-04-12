"use client";

import Link from "next/link";
import { useState } from "react";
import type { EventEntry } from "@/lib/venue-content";

const CATEGORY_ICONS: Record<string, string> = {
  sport: "⚽",
  quiz: "🧠",
  musik: "🎵",
  ovrigt: "📌",
};

function EventCard({ event, eventPathBase }: { event: EventEntry; eventPathBase: string }) {
  const { entry } = event;
  const icon = CATEGORY_ICONS[entry.category] ?? "📌";

  return (
    <Link
      href={`${eventPathBase}/${event.slug}`}
      className={`flex items-center justify-between rounded-lg border bg-zinc-900 px-4 py-3 transition-colors hover:border-white/30 hover:bg-zinc-800 ${
        entry.featured
          ? "border-gold/40 ring-1 ring-gold/20"
          : "border-white/10"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-lg">{icon}</span>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-medium text-white">{entry.title}</p>
            {entry.featured && (
              <span className="rounded bg-gold/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-gold">
                ★
              </span>
            )}
            {entry.recurring && (
              <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-zinc-400">
                ↻
              </span>
            )}
          </div>
          {entry.description && (
            <p className="mt-0.5 text-sm text-zinc-400">{entry.description}</p>
          )}
        </div>
      </div>
      <div className="ml-4 shrink-0 text-right text-sm text-zinc-400">
        {entry.recurring && entry.recurringDay ? (
          <p>{entry.recurringDay}</p>
        ) : (
          entry.date && <p>{entry.date}</p>
        )}
        {entry.time && <p>{entry.time}</p>}
      </div>
    </Link>
  );
}

export function EventList({
  upcoming,
  past,
  pastLabel,
  eventPathBase,
}: {
  upcoming: EventEntry[];
  past: EventEntry[];
  pastLabel: string;
  eventPathBase: string;
}) {
  const [showPast, setShowPast] = useState(false);

  return (
    <div>
      {upcoming.length > 0 ? (
        <div className="space-y-3">
          {upcoming.map((event) => (
            <EventCard key={event.slug} event={event} eventPathBase={eventPathBase} />
          ))}
        </div>
      ) : null}

      {past.length > 0 && (
        <div className="mt-8">
          <button
            onClick={() => setShowPast(!showPast)}
            className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-300"
          >
            <svg
              className={`h-4 w-4 transition-transform ${showPast ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {pastLabel} ({past.length})
          </button>
          {showPast && (
            <div className="mt-3 space-y-3 opacity-60">
              {past.map((event) => (
                <EventCard key={event.slug} event={event} eventPathBase={eventPathBase} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function UpcomingEventList({
  events,
  eventPathBase,
}: {
  events: EventEntry[];
  eventPathBase: string;
}) {
  return (
    <div className="space-y-3">
      {events.map((event) => (
        <EventCard key={event.slug} event={event} eventPathBase={eventPathBase} />
      ))}
    </div>
  );
}
