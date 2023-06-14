import PsySupport from '../../../../../assets/icons/psychology/psy-support.svg';
import PsyCare from '../../../../../assets/icons/psychology/psy-care.svg';
import PsyWindow from '../../../../../assets/icons/psychology/psy-window.svg';

export type ImageKeys = 'PsyCare' | 'PsyWindow' | 'PsySupport';

export interface CardEntry {
  image: ImageKeys;
  title: string;
  description: string;
}

export const CARD_ENTRIES: CardEntry[] = [
  {
    image: 'PsyCare',
    title: "Hi, I'm Olesya, Your Trusted Psychologist",
    description:
      'Highly qualified psychologist offering personalized help for challenges, well-being, and personal growth.',
  },
  {
    image: 'PsyWindow',
    title: 'Your Sessions, Your Privacy',
    description:
      'Your privacy is my top priority. All sessions are strictly confidential. Trust and confidentiality are vital to the therapeutic process.',
  },
  {
    image: 'PsySupport',
    title: 'Take Control of Your Well-being',
    description:
      'Seamless app experience: schedule appointments, leave feedback, and access psychological insights and stress relief tips.',
  },
];

export const CARD_IMAGES = {
  PsyCare: PsyCare,
  PsyWindow: PsyWindow,
  PsySupport: PsySupport,
};
