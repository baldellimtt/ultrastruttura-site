# Istruzioni per Personalizzare il Sito

## 1. Aggiungere le Immagini

### Logo
1. Metti il file del logo in `public/logo.png`
2. Il logo verrà automaticamente mostrato nell'header

### Immagini dei Quadri
1. Metti tutte le immagini dei tuoi quadri nella cartella `public/artworks/`
2. Formati supportati: JPG, PNG, WebP, AVIF
3. Consiglio: usa nomi file descrittivi (es: `opera-1.jpg`, `ritratto-2024.jpg`)

## 2. Aggiungere i Dati delle Opere

Apri il file `data/artworks.ts` e aggiungi le tue opere seguendo questo formato:

```typescript
export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Titolo dell\'Opera',
    year: 2024,
    medium: 'Olio su tela',
    dimensions: '84 x 62 inches',
    location: 'Galleria, Città', // Opzionale
    image: '/artworks/nome-file.jpg', // Nome del file in public/artworks/
  },
  {
    id: 2,
    title: 'Seconda Opera',
    year: 2024,
    medium: 'Olio su tela',
    dimensions: '48 x 36 inches',
    image: '/artworks/seconda-opera.jpg',
  },
  // Aggiungi tutte le tue opere qui
]
```

**Nota:** L'ordine delle opere nell'array determina l'ordine di visualizzazione nella galleria.

## 3. Personalizzare il Titolo

Modifica il titolo nel file `components/Header.tsx`:

```tsx
<h1 className={styles.title}>IL TUO NOME</h1>
```

## 4. Personalizzare il Menu di Navigazione

Modifica gli elementi del menu in `components/Navigation.tsx`:

```typescript
const menuItems = [
  'Paintings',
  'Prints',
  'Books',
  'CV',
  'Bio',
  'Video',
  'Contact',
]
```

## 5. Avviare il Sito

1. Installa le dipendenze:
```bash
npm install
```

2. Avvia il server di sviluppo:
```bash
npm run dev
```

3. Apri il browser su [http://localhost:3000](http://localhost:3000)

## 6. Build per Produzione

Quando sei pronto per pubblicare il sito:

```bash
npm run build
npm start
```

Oppure puoi deployare su Vercel (consigliato per Next.js):
- Vai su [vercel.com](https://vercel.com)
- Connetti il tuo repository GitHub
- Vercel rileverà automaticamente Next.js e configurerà tutto

## Suggerimenti

- **Ottimizzazione immagini**: Next.js ottimizza automaticamente le immagini
- **Responsive**: Il sito è già responsive e funziona su mobile
- **Performance**: Le immagini vengono caricate in modo lazy (tranne la prima)
- **SEO**: Puoi personalizzare i metadati in `app/layout.tsx`


