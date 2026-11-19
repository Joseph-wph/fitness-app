/** Shared types for the site content layer. */

export interface ImageAsset {
  /** Path relative to /public, e.g. "/images/hero.jpg" */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface TitleParts {
  /** Dark text portion */
  plain: string;
  /** Accent-colored portion (optional) */
  accent?: string;
}

export interface TextBlock {
  title: string;
  body: string;
}

export interface FeatureCard {
  title: string;
  body: string;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/** One bookable session card on the Reserve page. */
export interface SessionInfo {
  title: string;
  /** One line per time slot, e.g. "Weekdays at 6AM". */
  schedule: readonly string[];
  body: string;
  cta: Cta;
}

/** Content of the full-width call-to-action band. */
export interface JoinContent {
  eyebrow?: string;
  title: string;
  body?: string;
  cta: Cta;
}
