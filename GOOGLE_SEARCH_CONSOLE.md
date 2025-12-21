# Configurazione Google Search Console

## Prerequisiti
- Il sito deve essere online e accessibile su `https://ultrastruttura.com`
- Devi avere accesso a Google Search Console (account Google)

## Passaggi per la verifica

### Metodo 1: Tag HTML (Consigliato)

1. **Vai su Google Search Console**
   - Apri https://search.google.com/search-console
   - Accedi con il tuo account Google

2. **Aggiungi una proprietà**
   - Clicca su "Aggiungi proprietà" o "Add property"
   - Seleziona "Dominio" e inserisci: `ultrastruttura.com`
   - Clicca "Continua"

3. **Scegli il metodo di verifica**
   - Seleziona "Tag HTML"
   - Copia il **contenuto** del tag `content` (es. `abc123def456ghi789`)

4. **Configura la variabile d'ambiente**
   
   **Per sviluppo locale:**
   - Crea/modifica il file `.env.local` nella root del progetto:
     ```
     NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION=abc123def456ghi789
     ```
   - Sostituisci `abc123def456ghi789` con il codice che hai copiato

   **Per GitHub Pages (produzione):**
   - Vai su GitHub > Repository > Settings > Secrets and variables > Actions
   - Clicca "New repository secret"
   - Nome: `GOOGLE_SEARCH_CONSOLE_VERIFICATION`
   - Valore: incolla il codice di verifica
   - Clicca "Add secret"
   - Aggiorna il file `.github/workflows/deploy.yml` per includere questa variabile (già fatto)

5. **Verifica**
   - Torna su Google Search Console
   - Clicca "Verifica" o "Verify"
   - Se tutto è configurato correttamente, vedrai "Proprietà verificata"

### Metodo 2: File HTML (Alternativa)

Se preferisci usare il metodo file HTML:

1. In Google Search Console, scegli "File HTML"
2. Scarica il file fornito (es. `google1234567890abcdef.html`)
3. Metti il file in `public/` (es. `public/google1234567890abcdef.html`)
4. Fai commit e push su GitHub
5. Dopo il deploy, torna su Google Search Console e clicca "Verifica"

## Dopo la verifica

1. **Invia la sitemap**
   - Vai su "Sitemap" nel menu laterale
   - Inserisci: `https://ultrastruttura.com/sitemap.xml`
   - Clicca "Invia"

2. **Richiedi indicizzazione**
   - Vai su "Ispezione URL" o "URL Inspection"
   - Inserisci: `https://ultrastruttura.com`
   - Clicca "Richiedi indicizzazione" o "Request Indexing"

3. **Monitora le performance**
   - Dopo alcuni giorni, vedrai i dati in "Performance"
   - Controlla "Copertura" per eventuali errori
   - Verifica "Miglioramenti" per suggerimenti SEO

## File già configurati

Il sito è già predisposto con:
- ✅ `robots.txt` - Configurato correttamente
- ✅ `sitemap.xml` - Generato automaticamente con tutte le pagine
- ✅ Structured Data (JSON-LD) - Per ArtGallery, Person, VisualArtwork
- ✅ Meta tags SEO - Ottimizzati per ogni pagina
- ✅ Open Graph tags - Per condivisione social
- ✅ Twitter Cards - Per condivisione su Twitter

## Note importanti

- La verifica può richiedere alcuni minuti dopo il deploy
- Google può impiegare alcuni giorni per indicizzare tutte le pagine
- Controlla regolarmente Google Search Console per monitorare la salute del sito



