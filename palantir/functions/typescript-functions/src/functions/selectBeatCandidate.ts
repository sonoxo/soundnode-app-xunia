import { BeatCandidate, XuniaMission } from "@ontology/sdk";
import { Client, Osdk } from "@osdk/client";
import { createEditBatch, Edits } from "@osdk/functions";

type OntologyEdit = Edits.Object<XuniaMission> | Edits.Object<BeatCandidate>;

function selectBeatCandidate(
  client: Client,
  mission: Osdk.Instance<XuniaMission>,
  candidate: Osdk.Instance<BeatCandidate>,
): OntologyEdit[] {
  if (candidate.missionId !== mission.id) {
    throw new Error("The selected beat candidate does not belong to this XUNIA mission.");
  }

  const selectedAt = new Date().toISOString();
  const batch = createEditBatch<OntologyEdit>(client);

  batch.update(mission, {
    status: "CANDIDATE_SELECTED",
    selectedCandidateId: String(candidate.$primaryKey),
    updatedAt: selectedAt,
  });

  batch.update(candidate, {
    selectionState: "SELECTED",
    selectedAt,
  });

  return batch.getEdits();
}

export const config = {
  apiName: "selectBeatCandidate",
};

export default selectBeatCandidate;
