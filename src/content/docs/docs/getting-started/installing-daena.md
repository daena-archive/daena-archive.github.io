---
title: Installing Daena
description: Find the current beta builds and verify release-specific requirements.
sidebar:
  order: 1
---

Daena is in active beta development. Use the [latest GitHub release](https://github.com/daena-archive/daena/releases) as the authority for currently published operating-system builds, package formats, checksums, and known limitations.

## Install from a release

1. Open the latest release and read its notes, including any migration or project-format notices.
2. Download the build for your operating system.
3. Install and open Daena Archive.
4. Continue with [Creating a project](/docs/getting-started/creating-a-project/).

Release notes may also list known limitations for that build. Treat them as part of the install step, not as optional reading.

## Before installing

- Keep a separate backup of any project you care about while Daena is beta. Storage may change before `v1.0`.
- Do not assume an installer exists for a platform merely because Tauri can target it. If there is no published build for your system, there is no supported install path for it yet.
- If you are upgrading, read the new release notes before opening an existing project with the new build.

## Building from source

The recommended path for most authors is the published beta above. Building from source requires Deno, Rust, and the Tauri system dependencies, and is documented in `README.DEV.md` in the Daena repository.

## If something goes wrong

- Re-check the release page: the set of published builds is the answer to "is my OS supported?"
- If Daena opens but a project will not open after an upgrade, stop, keep a copy of the project folder, and check the release notes for format changes before retrying.

<!-- TODO(screenshot): install step — Releases page with the current beta assets list highlighted. Replacement: capture the latest release only; do not hard-code version numbers or platforms in the image caption. -->
