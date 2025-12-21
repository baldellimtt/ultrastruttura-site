/**
 * Componente per la verifica di Google Search Console
 * 
 * ISTRUZIONI:
 * 1. Vai su https://search.google.com/search-console
 * 2. Aggiungi la proprietà per ultrastruttura.com
 * 3. Scegli il metodo di verifica "Tag HTML"
 * 4. Copia il contenuto del tag content (es. "abc123def456")
 * 5. Aggiungi la variabile d'ambiente NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION nel file .env.local:
 *    NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION=abc123def456
 * 6. Per GitHub Pages, aggiungi GOOGLE_SEARCH_CONSOLE_VERIFICATION come secret nelle impostazioni del repository
 * 
 * ALTERNATIVA - File HTML:
 * Se preferisci usare il metodo file HTML, crea un file in public/ con il nome fornito da Google
 * (es. google1234567890abcdef.html) e aggiungi il contenuto fornito da Google.
 */

export default function GoogleSearchConsole() {
  const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION

  if (!verificationCode) {
    return null
  }

  // In Next.js App Router, i meta tag devono essere aggiunti tramite script o nel metadata
  // Usiamo un approccio che funziona sia in sviluppo che in produzione
  return (
    <>
      <meta
        name="google-site-verification"
        content={verificationCode}
      />
    </>
  )
}

