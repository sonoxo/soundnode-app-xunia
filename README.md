# SOUNDNODE APP — XUNIA DESKTOP

## XUNIA SOUNDS + SoundCloudOpen

This fork now includes a focused desktop bridge to [SoundCloudOpen](https://github.com/sonoxo/soundcloudopen).

**Soundnode plays/browses → XUNIA SOUNDS builds the creator mission → 3LM CLAUDE can use BeatStars discovery → SoundCloudOpen handles authorized SoundCloud saving.**

Open it from the desktop menu:

**XUNIA SOUNDS → Open XUNIA SOUNDS + SoundCloudOpen**

Shortcut: `Cmd/Ctrl + Shift + X`

The new panel supports:

- SoundCloudOpen/XUNIA CLI readiness checks;
- VIRGINIA + BeatStars mission creation;
- BPM, genre, mood, use-case, candidate-count, and optional SoundCloud source controls;
- Claude prompt-only output;
- authorized SoundCloud track/playlist saving through the existing SoundCloudOpen CLI; and
- shell-safe process execution with argument arrays instead of command-string interpolation.

Install the companion CLI on the same computer:

```bash
python3 -m pip install git+https://github.com/sonoxo/soundcloudopen.git
soundcloudopen --version
xunia-sounds --version
```

Focused verification:

```bash
npm run check:xunia
```

Full integration guide: [doc/XUNIA_SOUNDCLOUDOPEN.md](doc/XUNIA_SOUNDCLOUDOPEN.md)

## PALANTIR SUPERREPO CONTROL PLANE

This repository now also follows Palantir's August 2026 **SuperRepo** model for the governed application layer.

Beginner flow:

**SOUNDNODE DESKTOP → XUNIA SOUNDS → SOUNDCLOUDOPEN / BEATSTARS EVIDENCE → PALANTIR ONTOLOGY → TYPESCRIPT FUNCTIONS → REACT APP → MARKETPLACE PRODUCT**

The root `foundry.yml` declares three SuperRepo components:

```text
palantir/ontology/                       Ontology-as-code
palantir/functions/typescript-functions TypeScript v2 functions
palantir/app/                            React + @osdk/react control plane
```

The Ontology currently models:

- **XUNIA Mission** — the creator request and workflow state;
- **Beat Candidate** — BeatStars candidate metadata, rationale, selection, and license-review state; and
- **Sound Asset** — authorized SoundCloud evidence and format/authorization state.

The TypeScript v2 `selectBeatCandidate` function validates that a candidate belongs to the mission, then prepares Ontology edits for mission/candidate selection state. The React control plane reads missions, beat candidates, and SoundCloud evidence from the locally generated `@ontology/sdk` package.

Palantir currently lists **external sources as coming in the future for SuperRepo**, so SoundCloud and BeatStars calls remain in the existing desktop/XUNIA bridge instead of being faked inside a SuperRepo function. The Palantir layer governs the evidence once it enters the Ontology.

Verify the checked-in SuperRepo architecture without installing the legacy Electron dependency tree:

```bash
npm run check:superrepo
```

When SuperRepo beta is enabled on the target Foundry enrollment, the documented Foundry CLI lifecycle is:

```bash
foundry start
foundry bundle --project-version 0.1.0
foundry deploy configure
foundry deploy
```

Full SuperRepo implementation guide: [doc/PALANTIR_SUPERREPO.md](doc/PALANTIR_SUPERREPO.md)

---

[![Join the chat at https://gitter.im/Soundnode/soundnode-app](https://badges.gitter.im/Soundnode/soundnode-app.svg)](https://gitter.im/Soundnode/soundnode-app?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Soundnode App
============

Soundnode App is an Open-Source project to support Soundcloud for desktop Mac, Windows, and Linux. <br>
It's built with Electron, Node.js, Angular.js, and uses the Soundcloud API.

> Be aware that Soundnode relies on Soundcloud API which only allows third party apps to play 15 thousand tracks daily. When the rate limit is reached all users are blocked from playing/streaming tracks. The stream will be re-enable one day after (at the same time) streams were blocked.

Follow us on twitter for updates [@Soundnodeapp](https://www.twitter.com/soundnodeapp).

Featured on [Producthunt](https://www.producthunt.com/tech/soundnode-2), [TNW](http://thenextweb.com/apps/2016/01/25/soundnode-is-the-soundcloud-desktop-app-youve-been-waiting-for/#gref)
and [Gizmodo](http://gizmodo.com/soundnode-turns-soundcloud-into-a-spotify-like-desktop-1754953529)

![alt tag](https://raw.githubusercontent.com/Soundnode/soundnode-app/master/Soundnode-app.png)

## Features

- No need to install
- Native media keyboard shortcuts
- Search for new songs
- Easy navigation
- Listen to songs from your Stream, Likes, Tracks, Following or Playlists
- Like songs and save to your liked playlist
- Full playlist feature
- Follow/Unfollow users

And much more!

## Configuration

Since soundcloud applies a rate limit to third party apps, you need to configure your own API key to make soundnode work.

Unfortunately soundcloud suspended new application creation, so to retrieve your api key, you have to dig into the soundcloud [website](https://soundcloud.com/).

* Login to soundcloud.com on favorite browser
* Look for an api call and write down the client_id parameter
![dev tools](doc/img/dev_tools.png)
* Edit your userConfig.json file (see here for location : https://github.com/eliecharra/soundnode-app/blob/master/app/public/js/common/configLocation.js#L34) and update clientId parameter with the previously retrieved one.

## How to contribute

First, building, testing, and reporting bugs is highly appreciated. Please include the console's output and steps to reproduce the problem in your bug report, if possible.

If you want to develop, you can look at the issues, especially the bugs, and then fix them.
Here's a [list of issues](https://github.com/Soundnode/soundnode-app/issues?state=open).

Please follow the [contribution guidelines](https://github.com/Soundnode/soundnode-app/blob/master/CONTRIBUTING.md).

## Development

See the [Development page](https://github.com/Soundnode/soundnode-app/wiki/Development) for a complete guide on how to build
the app locally on your computer.

Check out [Electron documentation](https://electron.atom.io/docs/)

## Supported Platforms

- Windows
- Mac
- Linux

## Author

- [Michael Lancaster](https://github.com/weblancaster)

## Contributors

Thanks to all [contributors](https://github.com/Soundnode/soundnode-app/graphs/contributors) that are helping or helped making Soundnode better.

## License

GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 [license](https://github.com/Soundnode/soundnode-app/blob/master/LICENSE.md).
