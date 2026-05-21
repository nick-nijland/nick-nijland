import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import en from '../assets/i18n/en.json';
import nl from '../assets/i18n/nl.json';

const translations: Record<string, TranslationObject> = {
  en: en as TranslationObject,
  nl: nl as TranslationObject,
};

export class StaticTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<TranslationObject> {
    return of(translations[lang] ?? translations['en']);
  }
}
