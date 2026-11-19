import { routes } from '@/config/routes';
import type {
  Cta,
  JoinContent,
  FeatureCard,
  NavLink,
  OpeningHour,
  SessionInfo,
  SocialLink,
  TextBlock,
  TitleParts,
} from '@/types/content';

/**
 * SITE CONTENT — single source of truth for all copy, links and data.
 * Edit text here; components only render what they receive.
 */
export const siteConfig = {
  name: 'PrimalTraining',
  description:
    'Train like an athlete with top-tier equipment and expert programming.',

  nav: {
    links: [
      { label: 'Home', href: routes.home },
      { label: 'About', href: routes.about },
    ] satisfies NavLink[],
    cta: { label: 'Reserve your spot', href: routes.reserve } satisfies Cta,
  },

  hero: {
    title: { plain: 'Train hard. Live', accent: 'better' } satisfies TitleParts,
  },

  committed: {
    title: 'For the committed',
    body: "Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.",
    cta: { label: 'About us', href: routes.about } satisfies Cta,
  },

  highlights: [
    {
      title: 'Guided by experts',
      body: "We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.",
    },
    {
      title: 'Dynamic open gym',
      body: 'Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.',
    },
  ] satisfies TextBlock[],

  community: {
    title: { plain: 'Join the', accent: 'community' } satisfies TitleParts,
    heading: 'Discover your potential',
    features: [
      {
        title: 'Expert coaching',
        body: 'Trainers who are passionate about your progress.',
      },
      {
        title: 'Results-driven programs',
        body: 'Workouts that deliver tangible, measurable results.',
      },
      {
        title: 'A supportive tribe',
        body: 'A community that pushes you to be your best.',
      },
    ] satisfies FeatureCard[],
    cta: { label: 'View classes', href: '#classes' } satisfies Cta,
  },

  about: {
    title: { plain: 'About us' } satisfies TitleParts,
    vision: {
      title: 'Tap into your primal power. Forge a stronger you.',
      label: 'Our vision',
      body: 'Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.',
    },
    openGym: {
      title: 'Dynamic open gym',
      body: 'At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.',
    },
    statement:
      "We've created a space where you can reconnect with your primal self.",
  },

  join: {
    eyebrow: 'What we believe in',
    title: 'Join the Primal tribe today!',
    cta: { label: 'Reserve your spot', href: routes.reserve } satisfies Cta,
  } satisfies JoinContent,

  reserve: {
    title: { plain: 'Book a', accent: 'session' } satisfies TitleParts,
    // TODO: replace the "#" hrefs with your booking URLs.
    sessions: [
      {
        title: 'Strength',
        schedule: ['Weekdays at 6AM', 'Weekends and Holidays at 8AM'],
        body: 'Build a foundation of raw power with our comprehensive weightlifting and strength training programs.',
        cta: { label: 'Reserve your spot', href: '#' },
      },
      {
        title: 'Conditioning',
        schedule: ['Weekdays at 8AM', 'Weekends and Holidays at 10AM'],
        body: 'Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.',
        cta: { label: 'Reserve your spot', href: '#' },
      },
      {
        title: 'Community classes',
        schedule: ['Every day on the hour'],
        body: 'Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.',
        cta: { label: 'Reserve your spot', href: '#' },
      },
    ] satisfies SessionInfo[],
    personal: {
      title: 'Primal personal training',
      body: 'Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.',
      cta: { label: 'Reserve your spot', href: '#' },
    } satisfies JoinContent,
  },

  footer: {
    contact: {
      heading: 'Contact',
      email: 'hello@figma.com',
      phone: '(203) 555-5555',
    },
    hours: {
      heading: 'Opening hours',
      items: [
        { day: 'Mon – Fri', time: '5:00 – 23:00' },
        { day: 'Saturdays', time: '8:00 – 16:00' },
        { day: 'Sundays', time: '8:00 – 13:00' },
        { day: 'Holidays', time: '8:00 – 16:00' },
      ] satisfies OpeningHour[],
    },
    social: {
      heading: 'Social',
      links: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'X', href: 'https://x.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Spotify', href: 'https://spotify.com' },
      ] satisfies SocialLink[],
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
