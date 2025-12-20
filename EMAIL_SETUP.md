# Configurazione Email per Form di Contatto

Il form di contatto è configurato per inviare email a: **Andrea.baldelli@icloud.com**

## Opzione 1: Usare Resend (Consigliato - Gratuito)

1. Crea un account su [resend.com](https://resend.com)
2. Ottieni la tua API Key
3. Crea un file `.env.local` nella root del progetto:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```
4. Decommenta il codice in `app/api/contact/route.ts` che usa Resend

## Opzione 2: Usare SendGrid

1. Crea un account su [sendgrid.com](https://sendgrid.com)
2. Ottieni la tua API Key
3. Aggiungi a `.env.local`:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```
4. Modifica `app/api/contact/route.ts` per usare SendGrid

## Opzione 3: Usare Nodemailer con Gmail/SMTP

1. Installa nodemailer: `npm install nodemailer`
2. Configura in `.env.local`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```
3. Modifica `app/api/contact/route.ts` per usare Nodemailer

## Per Vercel (Deploy)

Se usi Vercel, aggiungi le variabili d'ambiente nella dashboard:
1. Vai su Settings > Environment Variables
2. Aggiungi `RESEND_API_KEY` (o altro servizio)
3. Il form funzionerà automaticamente

## Test Locale

Per testare localmente, i dati del form vengono loggati nella console del server.
In produzione, configura uno dei servizi sopra.

