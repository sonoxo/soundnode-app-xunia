import React from "react";
import { BeatCandidate, SoundAsset, XuniaMission } from "@ontology/sdk";
import { useOsdkObjects } from "@osdk/react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ border: "1px solid #2d3648", borderRadius: 12, padding: 16, marginBottom: 16 }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const missions = useOsdkObjects(XuniaMission, { pageSize: 100 });
  const candidates = useOsdkObjects(BeatCandidate, { pageSize: 200 });
  const assets = useOsdkObjects(SoundAsset, { pageSize: 200 });

  if (missions.error || candidates.error || assets.error) {
    const message = missions.error?.message || candidates.error?.message || assets.error?.message;
    return <main><h1>XUNIA SOUNDS</h1><p>Ontology error: {message}</p></main>;
  }

  const loading = missions.isLoading || candidates.isLoading || assets.isLoading;

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <header style={{ marginBottom: 24 }}>
        <p style={{ letterSpacing: 2, textTransform: "uppercase" }}>Palantir SuperRepo Control Plane</p>
        <h1>XUNIA SOUNDS + SoundCloudOpen</h1>
        <p>
          Missions, BeatStars candidate evidence, license-review state, and authorized SoundCloud asset evidence live in the Ontology.
        </p>
      </header>

      {loading ? <p>Loading Ontology data…</p> : null}

      <Section title={`Missions (${missions.data?.length ?? 0})`}>
        {(missions.data ?? []).map(mission => (
          <article key={String(mission.$primaryKey)} style={{ marginBottom: 12 }}>
            <strong>{mission.title}</strong>
            <div>Status: {mission.status || "UNSET"}</div>
            <div>{mission.genre || "Any genre"} · {mission.mood || "Any mood"} · {mission.bpm || "Any"} BPM</div>
          </article>
        ))}
      </Section>

      <Section title={`Beat candidates (${candidates.data?.length ?? 0})`}>
        {(candidates.data ?? []).map(candidate => (
          <article key={String(candidate.$primaryKey)} style={{ marginBottom: 12 }}>
            <strong>{candidate.title}</strong> — {candidate.producer || "Unknown producer"}
            <div>{candidate.selectionState || "UNREVIEWED"} · License: {candidate.licenseReviewState || "REVIEW_REQUIRED"}</div>
            {candidate.beatstarsUrl ? <div>BeatStars: {candidate.beatstarsUrl}</div> : null}
          </article>
        ))}
      </Section>

      <Section title={`Authorized SoundCloud evidence (${assets.data?.length ?? 0})`}>
        {(assets.data ?? []).map(asset => (
          <article key={String(asset.$primaryKey)} style={{ marginBottom: 12 }}>
            <strong>{asset.title}</strong>
            <div>{asset.authorizationState || "UNVERIFIED"} · {asset.audioFormat || "unknown format"}</div>
            <div>{asset.soundcloudUrl}</div>
          </article>
        ))}
      </Section>
    </main>
  );
}
