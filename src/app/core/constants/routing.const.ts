import { LocalizedUrl } from '../interfaces/localized-url.interface';

export const routingUrls: { [key: string]: LocalizedUrl } = {
  learn: { en: 'learn', de: 'lernen' },
  code: { en: 'code', de: 'coden' },
  play: { en: 'play', de: 'spielen' },
  share: { en: 'share', de: 'teilen' },
  docs: { en: 'docs', de: 'doku' },
  faq: { en: 'faq', de: 'faq' },
  legal: { en: 'legal', de: 'rechtliches' },
  imprint: { en: 'legal/imprint', de: 'rechtliches/impressum' },
  disclaimer: { en: 'legal/disclaimer', de: 'rechtliches/haftungsausschluss' },
  privacyPolicy: {
    en: 'legal/privacy-policy',
    de: 'rechtliches/datenschutzerklaerung',
  },
};
