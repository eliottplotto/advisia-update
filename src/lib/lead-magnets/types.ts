export type ChecklistItem = {
  number: number;
  title: string;
  why: string;
  how: string;
  alarm: string;
  effort: string;
};

export type EvalTier = {
  range: string;
  text: string;
};

export type LeadMagnet = {
  slug: string;
  title: string;
  subtitle: string;
  teaser: string;
  icon: string; // emoji or short symbol
  accent: "violet" | "lime" | "blue";
  brevoListId: number;
  inTwoMinutes: {
    forWho: string;
    notForWho: string;
    outcome: string;
    readingTime: string;
  };
  introParagraphs: string[];
  checklistLabel: string; // e.g. "La checklist en 20 points"
  items: ChecklistItem[];
  evaluation: {
    title: string;
    intro: string;
    tiers: EvalTier[];
  };
  bonus?: {
    title: string;
    items: { label: string; text: string }[];
  };
  whatNow: {
    options: { label: string; text: string }[];
  };
  aboutAdvisia: string;
};
