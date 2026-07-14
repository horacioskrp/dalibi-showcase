/** Injecte un bloc de données structurées (schema.org) en JSON-LD. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify échappe le contenu ; données statiques et maîtrisées.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
