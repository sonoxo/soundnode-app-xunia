# XUNIA SOUNDS + Palantir SuperRepo

This repository now carries a Foundry SuperRepo-shaped control plane beside the existing Soundnode desktop application and SoundCloudOpen bridge.

## Beginner map

**Soundnode desktop → XUNIA SOUNDS mission → SoundCloudOpen / BeatStars evidence → Palantir Ontology → TypeScript functions → React control plane → Marketplace product**

The existing desktop application still owns local creator workflows. The Palantir layer organizes the resulting mission, beat-candidate, license-review, and authorized-media evidence as governed Ontology objects.

## Why SuperRepo

Palantir introduced SuperRepo in beta in August 2026 as a pro-code monorepo that keeps Ontology definitions, TypeScript functions, and a React application together as one versioned product. The documented local loop uses the Foundry CLI and an embedded Ontology; the generated Ontology SDK is rebuilt automatically as Ontology-as-code changes. The same repository can later be bundled and deployed through Marketplace.

This repository follows the documented component shape through `foundry.yml`:

```text
foundry.yml
palantir/
  ontology/
    ontology.mts
  functions/
    typescript-functions/
      src/functions/selectBeatCandidate.ts
  app/
    src/App.tsx
```

## Ontology model

### XUNIA Mission

Represents the creator request and its workflow state. Important fields include creative direction, genre, mood, target BPM, use case, requested result count, status, and selected candidate.

### Beat Candidate

Represents a BeatStars discovery result that has been brought into the governed workflow as evidence. It stores producer/title metadata, BPM/style context, rationale, BeatStars page handoff, selection state, and license-review state.

### Sound Asset

Represents authorized SoundCloud media evidence. It stores the SoundCloud URL, requested audio format, authorization state, and evidence state.

Links connect one mission to many beat candidates and one mission to many sound assets.

## TypeScript function

`selectBeatCandidate.ts` is a TypeScript v2 Ontology edit function. It verifies that the candidate belongs to the mission, marks that candidate selected, and updates the mission with the selected candidate ID.

Palantir's current SuperRepo tutorial requires edit functions to be exposed through a function-backed action before their edits can be applied. The exact beta helper used by the current Foundry-generated Ontology component should be taken from the enrollment's `foundry create` template before wiring this function as an action. Until that tenant-generated helper is present, the repository also defines standard create/modify Ontology actions for the three domain objects.

## React control plane

`palantir/app/src/App.tsx` uses `@osdk/react` and the locally generated `@ontology/sdk` package to list missions, beat candidates, and authorized SoundCloud evidence in one application.

## Important beta boundary

As of Palantir's August 2026 SuperRepo announcement, **external sources are still listed as coming in the future**. Therefore the SuperRepo TypeScript function does not call SoundCloud or BeatStars directly.

For now:

1. Soundnode/XUNIA handles the desktop creator workflow.
2. SoundCloudOpen handles authorized SoundCloud saving.
3. Claude + BeatStars handles BeatStars discovery and preview.
4. The SuperRepo stores and operates on the resulting governed evidence inside the Ontology.

This keeps the implementation aligned with currently documented SuperRepo capabilities instead of pretending the beta already supports external API calls from SuperRepo functions.

## Foundry CLI lifecycle

When SuperRepo beta is enabled on the target enrollment and the Foundry CLI is installed, the documented flow is:

```bash
foundry start
foundry bundle --project-version 0.1.0
foundry deploy configure
foundry deploy
```

`foundry deploy configure` writes the target enrollment's deployment input mappings into `env.yml`. Do not invent those mappings or commit credentials; generate them against the actual enrollment.

## Verification in this repository

```bash
npm run check:superrepo
```

This repository check validates the SuperRepo manifest shape, required component paths, Ontology source, TypeScript v2 function source, React OSDK source, and the explicit external-source boundary. It is not a substitute for `foundry start` or an authenticated tenant deployment.
