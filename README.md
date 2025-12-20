# UltraStruttura - Sito Web Artista

Sito web minimale e moderno per artista professionista, ispirato al design di lilystockman.com.

## Tecnologie

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **CSS Modules** - Styling modulare

## Struttura

```
├── app/
│   ├── layout.tsx       # Layout principale
│   ├── page.tsx         # Pagina home
│   └── globals.css      # Stili globali
├── components/
│   ├── Navigation.tsx   # Menu di navigazione
│   ├── Header.tsx       # Header con titolo/logo
│   └── Gallery.tsx      # Galleria opere
└── public/
    ├── artworks/        # Cartella per le immagini dei quadri
    └── logo.png         # Logo (da aggiungere)
```

## Setup

1. Installa le dipendenze:
```bash
npm install
```

2. Aggiungi le immagini:
   - Metti il logo in `public/logo.png`
   - Metti le immagini dei quadri in `public/artworks/`

3. Aggiorna i dati delle opere in `components/Gallery.tsx`

4. Avvia il server di sviluppo:
```bash
npm run dev
```

5. Apri [http://localhost:3000](http://localhost:3000)

## Personalizzazione

- Modifica `components/Gallery.tsx` per aggiungere le tue opere
- Aggiorna `components/Header.tsx` per aggiungere il logo
- Personalizza i colori e i font in `app/globals.css` e nei CSS modules







