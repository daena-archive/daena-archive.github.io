import {
  CalendarDays,
  CalendarRange,
  Castle,
  Gem,
  Hourglass,
  Landmark,
  Languages,
  Lightbulb,
  Map as MapIcon,
  MapPin,
  Shield,
  UserRound,
  BookOpenText,
  NotebookTabs,
} from 'lucide-static';

// Entity type presentation as the app declares it: icon from
// src/lib/entity-icons/catalog.ts and colour preset from each module's
// manifest.json (../daena/packages/modules/*). Colours are the site's
// --type-<preset> / --type-<preset>-bg token pairs.
export const entityTypes = {
  person: { preset: 'rose', icon: UserRound },
  place: { preset: 'moss', icon: MapPin },
  faction: { preset: 'ember', icon: Shield },
  artifact: { preset: 'copper', icon: Gem },
  culture: { preset: 'gold', icon: Landmark },
  concept: { preset: 'violet', icon: Lightbulb },
  house: { preset: 'gold', icon: Castle },
  event: { preset: 'amber', icon: CalendarDays },
  era: { preset: 'pine', icon: Hourglass },
  calendar: { preset: 'brass', icon: CalendarRange },
  map: { preset: 'ocean', icon: MapIcon },
  language: { preset: 'ocean', icon: Languages },
  manuscript: { preset: 'ink', icon: BookOpenText },
  reference: { preset: 'slate', icon: NotebookTabs },
} as const;

export type EntityType = keyof typeof entityTypes;
