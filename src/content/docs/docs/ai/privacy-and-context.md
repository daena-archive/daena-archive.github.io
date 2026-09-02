---
title: Privacy and context
description: Know what can enter a model request and how suggestions become edits.
sidebar:
  order: 2
---

Context is assembled from authorized project records and the current editing task — the writing in front of you, plus related documents, relationships, and structured information the task needs. Review provider configuration before sending private material to a remote endpoint.

Local providers avoid the remote-provider network boundary, but model files, provider processes, and their behavior remain outside Daena's project data model.

## Privacy rules of thumb

- **Local stays local.** With a local provider, assistance can work without an internet connection and project text does not cross the remote boundary.
- **Remote is a choice.** Remote providers require explicit configuration and consent, with strict transport checks and no silent fallback between providers.
- **Proposals are disposable.** Temporary generations and derived retrieval state never become portable project data. Only what you accept, through the normal revision-aware path, enters the archive.
- **Plugins are separate.** AI does not grant plugins new access and does not become a bridge around broker authorization.

Daena's AI is an assistant, not an autonomous author: it works with the writing already in front of you or suggests ideas from your existing material, and you decide what to keep.

<!-- TODO(screenshot): rewrite proposal — Original vs Proposal with Accept proposal / Discard / Retry, captioned "nothing changes until you choose." -->
