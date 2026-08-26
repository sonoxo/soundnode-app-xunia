'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function read(relativePath) {
  const absolute = path.join(root, relativePath);
  if (!fs.existsSync(absolute)) {
    throw new Error(`Missing required SuperRepo file: ${relativePath}`);
  }
  return fs.readFileSync(absolute, 'utf8');
}

function requireText(source, expected, file) {
  if (!source.includes(expected)) {
    throw new Error(`${file} is missing required text: ${expected}`);
  }
}

const foundry = read('foundry.yml');
[
  'minCliVersion: "0.196.0"',
  'functionsTypescriptRuntimeVersion: "0.123.0"',
  'type: ONTOLOGY',
  'path: ./palantir/ontology',
  'type: TYPESCRIPT_FUNCTIONS',
  'path: ./palantir/functions/typescript-functions',
  'type: APP',
  'path: ./palantir/app',
  'name: "xunia-sounds-superrepo"',
  'installMode: SINGLETON',
  'osdkOutput: palantir/ontology/osdk-output',
  'apiNamespace: com.sonoxo.xuniasounds'
].forEach(expected => requireText(foundry, expected, 'foundry.yml'));

const ontology = read('palantir/ontology/ontology.mts');
[
  'defineObject',
  'apiName: "xuniaMission"',
  'apiName: "beatCandidate"',
  'apiName: "soundAsset"',
  'defineLink',
  'manyForeignKeyProperty: "missionId"',
  'defineCreateObjectAction',
  'defineModifyObjectAction'
].forEach(expected => requireText(ontology, expected, 'palantir/ontology/ontology.mts'));

const fn = read('palantir/functions/typescript-functions/src/functions/selectBeatCandidate.ts');
[
  '@ontology/sdk',
  '@osdk/functions',
  'createEditBatch',
  'candidate.missionId !== mission.id',
  'selectionState: "SELECTED"',
  'apiName: "selectBeatCandidate"'
].forEach(expected => requireText(fn, expected, 'selectBeatCandidate.ts'));

const app = read('palantir/app/src/App.tsx');
[
  '@osdk/react',
  'useOsdkObjects',
  'XuniaMission',
  'BeatCandidate',
  'SoundAsset',
  'Palantir SuperRepo Control Plane'
].forEach(expected => requireText(app, expected, 'palantir/app/src/App.tsx'));

const docs = read('doc/PALANTIR_SUPERREPO.md');
requireText(docs, 'external sources are still listed as coming in the future', 'doc/PALANTIR_SUPERREPO.md');
requireText(docs, 'foundry bundle --project-version 0.1.0', 'doc/PALANTIR_SUPERREPO.md');

console.log('XUNIA Palantir SuperRepo structure: PASS');
