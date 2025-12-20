// Script per rinominare le immagini con nomi SEO-friendly multilingue
// Esegui con: node scripts/rename-images-seo.js

const fs = require('fs');
const path = require('path');

// Pattern SEO-friendly multilingue per opere d'arte
// Formato: ultrastruttura-[lingua]-painting-[numero]
const languages = {
  en: 'painting',
  it: 'quadro',
  de: 'gemaelde',
  fr: 'peinture',
  ja: 'kaiga' // 絵画 in romaji
};

const artworksDir = path.join(__dirname, '../public/artworks');
const files = fs.readdirSync(artworksDir).filter(f => f.endsWith('.webp'));

// Estrai numero da nome file esistente
files.forEach((file, index) => {
  const match = file.match(/ultrastruttura-opera-(\d+)/);
  if (match) {
    const num = match[1];
    const newName = `ultrastruttura-painting-${num}-quadro-${num}-gemaelde-${num}-peinture-${num}-kaiga-${num}.webp`;
    const oldPath = path.join(artworksDir, file);
    const newPath = path.join(artworksDir, newName);
    
    console.log(`Would rename: ${file} -> ${newName}`);
    // fs.renameSync(oldPath, newPath); // Decommenta per eseguire
  }
});

console.log('\nScript completato. Decommenta fs.renameSync per eseguire il rename.');






