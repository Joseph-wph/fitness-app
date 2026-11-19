import type { ImageAsset } from '@/types/content';

/**
 * IMAGE REGISTRY — single source of truth for every image path.
 *
 * To connect your own photos: drop the files into /public/images using the
 * same file names, or change the `src` values below. Nothing else in the
 * codebase hard-codes an image path.
 */
export const assets = {
  logoMark: {
    src: '/assets/icons/logoIcon.png',
    alt: 'Primal Training logo mark',
    width: 120,
    height: 70,
  },
  heroTraining: {
    src: '/assets/images/image1.jpg',
    alt: 'Two athletes performing box jumps in the gym',
    width: 1200,
    height: 800,
  },
  openGym: {
    src: '/assets/images/image2.jpg',
    alt: 'Athlete holding battle ropes over her shoulder',
    width: 800,
    height: 1000,
  },
  community: {
    src: '/assets/images/image3.jpg',
    alt: 'Black and white photo of members doing barbell squats',
    width: 1200,
    height: 1200,
  },
  aboutTeam: {
    src: '/assets/images/image4.jpg',
    alt: 'Two athletes fist-bumping on the gym floor beside a barbell',
    width: 1000,
    height: 1000,
  },
  aboutDeadlift: {
    src: '/assets/images/image5.jpg',
    alt: 'Athlete lifting a loaded barbell off the floor',
    width: 1200,
    height: 800,
  },
  aboutSpace: {
    src: '/assets/images/image6.jpg',
    alt: 'Woman holding a barbell overhead in a dark gym',
    width: 1600,
    height: 900,
  },
} as const satisfies Record<string, ImageAsset>;

export type AssetKey = keyof typeof assets;
