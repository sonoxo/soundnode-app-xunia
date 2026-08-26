import {
  defineCreateObjectAction,
  defineLink,
  defineModifyObjectAction,
  defineObject,
} from "@osdk/maker";

export const xuniaMission = defineObject({
  apiName: "xuniaMission",
  displayName: "XUNIA Mission",
  pluralDisplayName: "XUNIA Missions",
  titlePropertyApiName: "title",
  primaryKeyPropertyApiName: "id",
  properties: {
    id: { type: "string", displayName: "Mission ID" },
    title: { type: "string", displayName: "Title" },
    prompt: { type: { type: "string", isLongText: true }, displayName: "Creative Direction" },
    status: { type: "string", displayName: "Status" },
    genre: { type: "string", displayName: "Genre" },
    mood: { type: "string", displayName: "Mood" },
    bpm: { type: "integer", displayName: "Target BPM" },
    useCase: { type: "string", displayName: "Use Case" },
    requestedResults: { type: "integer", displayName: "Requested Candidates" },
    selectedCandidateId: { type: "string", displayName: "Selected Candidate ID" },
    createdAt: { type: "timestamp", displayName: "Created At" },
    updatedAt: { type: "timestamp", displayName: "Updated At" },
  },
});

export const beatCandidate = defineObject({
  apiName: "beatCandidate",
  displayName: "Beat Candidate",
  pluralDisplayName: "Beat Candidates",
  titlePropertyApiName: "title",
  primaryKeyPropertyApiName: "id",
  properties: {
    id: { type: "string", displayName: "Candidate ID" },
    missionId: { type: "string", displayName: "Mission ID" },
    title: { type: "string", displayName: "Beat Title" },
    producer: { type: "string", displayName: "Producer" },
    bpm: { type: "integer", displayName: "BPM" },
    genre: { type: "string", displayName: "Genre" },
    mood: { type: "string", displayName: "Mood" },
    beatstarsUrl: { type: "string", displayName: "BeatStars Page" },
    rationale: { type: { type: "string", isLongText: true }, displayName: "Why It Matches" },
    selectionState: { type: "string", displayName: "Selection State" },
    licenseReviewState: { type: "string", displayName: "License Review State" },
    selectedAt: { type: "timestamp", displayName: "Selected At" },
  },
});

export const soundAsset = defineObject({
  apiName: "soundAsset",
  displayName: "Sound Asset",
  pluralDisplayName: "Sound Assets",
  titlePropertyApiName: "title",
  primaryKeyPropertyApiName: "id",
  properties: {
    id: { type: "string", displayName: "Asset ID" },
    missionId: { type: "string", displayName: "Mission ID" },
    title: { type: "string", displayName: "Title" },
    soundcloudUrl: { type: "string", displayName: "SoundCloud URL" },
    audioFormat: { type: "string", displayName: "Audio Format" },
    authorizationState: { type: "string", displayName: "Authorization State" },
    evidenceState: { type: "string", displayName: "Evidence State" },
    capturedAt: { type: "timestamp", displayName: "Captured At" },
  },
});

export const missionToCandidates = defineLink({
  apiName: "missionToCandidates",
  one: {
    object: xuniaMission,
    metadata: {
      apiName: "beatCandidates",
      displayName: "Beat Candidate",
      pluralDisplayName: "Beat Candidates",
      visibility: "NORMAL",
    },
  },
  toMany: {
    object: beatCandidate,
    metadata: {
      apiName: "mission",
      displayName: "XUNIA Mission",
      pluralDisplayName: "XUNIA Missions",
      visibility: "NORMAL",
    },
  },
  manyForeignKeyProperty: "missionId",
});

export const missionToAssets = defineLink({
  apiName: "missionToAssets",
  one: {
    object: xuniaMission,
    metadata: {
      apiName: "soundAssets",
      displayName: "Sound Asset",
      pluralDisplayName: "Sound Assets",
      visibility: "NORMAL",
    },
  },
  toMany: {
    object: soundAsset,
    metadata: {
      apiName: "mission",
      displayName: "XUNIA Mission",
      pluralDisplayName: "XUNIA Missions",
      visibility: "NORMAL",
    },
  },
  manyForeignKeyProperty: "missionId",
});

export const createXuniaMission = defineCreateObjectAction({ objectType: xuniaMission });
export const modifyXuniaMission = defineModifyObjectAction({ objectType: xuniaMission });
export const createBeatCandidate = defineCreateObjectAction({ objectType: beatCandidate });
export const modifyBeatCandidate = defineModifyObjectAction({ objectType: beatCandidate });
export const createSoundAsset = defineCreateObjectAction({ objectType: soundAsset });
export const modifySoundAsset = defineModifyObjectAction({ objectType: soundAsset });
