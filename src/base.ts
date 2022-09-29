export type I18nLocales = "fr" | "en"
export type I18nString = Record<I18nLocales, string>;

export interface I18nCode {
    labels: I18nString;
    code: string;
}