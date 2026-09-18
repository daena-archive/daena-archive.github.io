import {
  CalendarRange,
  Castle,
  Languages,
  Library,
  Map,
  Pencil,
  Puzzle,
} from 'lucide-static';

const MODULE_ICONS: Record<string, string> = {
  'daena.lore': Library,
  'daena.timeline': CalendarRange,
  'daena.writing': Pencil,
  'daena.language': Languages,
  'daena.houses': Castle,
  'daena.maps': Map,
};

export function moduleIcon(packageName: string) {
  return MODULE_ICONS[packageName] ?? Puzzle;
}
