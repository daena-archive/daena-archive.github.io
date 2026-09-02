---
title: Enabling AI
description: Opt in to a local or remote model provider and understand the trust boundary.
sidebar:
  order: 1
---

AI is disabled per project until you opt in. There is no default model and no background generation — nothing leaves your machine until you configure a provider and enable AI for the project.

Local endpoints such as LM Studio or Ollama and remote endpoints share the same provider profile; Daena derives the Local/Remote boundary from the endpoint address itself — it is not a separate setting you choose.

## Enabling a provider

1. Open the AI settings and pick a preset (LM Studio, Ollama, OpenAI, OpenRouter, or custom), then set the endpoint and model. The presets only fill in the known address; you can change the model below.
2. Complete the provider's own setup. Model files and the provider process live outside Daena; credentials, network access, and temporary generations never become portable project data.
3. Enable AI for the project and, for a remote endpoint, give explicit consent. Both are reversible — disabling or revoking consent fails closed back to no AI.

Remote credentials are stored with the platform's native credential storage (OS keychain) and remain machine-local. They never become portable project data.

Generated text always appears as a proposal and does not become project data until you accept it. AI never writes to the project on its own; every accepted change passes through the same revision-aware transaction as a hand-made edit.

<!-- TODO(screenshot): AI settings — preset list with endpoint/model fields, the derived Local/Remote badge, and the per-project enable control in its disabled-by-default state. -->
