import { BookOpen, Code2, Package, RefreshCw, TrendingUp, Users, Wrench, type LucideIcon } from "lucide-react";

export type NavigationItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Wrench, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "updates", path: "/updates", icon: RefreshCw, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
