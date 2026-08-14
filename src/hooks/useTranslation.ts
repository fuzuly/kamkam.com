import translations from "../../translation/tr.json";

type TranslationTree = Record<string, unknown>;

function resolveTranslation(namespace: string, key: string): string {
  const path = `${namespace}.${key}`.split(".");
  let current: unknown = translations;

  for (const segment of path) {
    if (
      typeof current !== "object" ||
      current === null ||
      !(segment in current)
    ) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[i18n] Missing translation: ${namespace}.${key}`);
      }

      return key;
    }

    current = (current as TranslationTree)[segment];
  }

  if (typeof current !== "string") {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[i18n] Translation is not text: ${namespace}.${key}`);
    }

    return key;
  }

  return current;
}

type TranslationValues = Record<string, string | number>;

export function useTranslation(namespace: string) {
  return (key: string, values?: TranslationValues) => {
    const translation = resolveTranslation(namespace, key);

    if (!values) return translation;

    return translation.replace(/\{(\w+)\}/g, (placeholder, name: string) =>
      name in values ? String(values[name]) : placeholder,
    );
  };
}
