# Setup OAuth Decap (GitHub Pages)

Questa guida abilita il login su `/admin` per il repo:

- `baldellimtt/ultrastruttura-site`
- branch: `master`
- sito: `https://ultrastruttura.com`
- CMS: `https://ultrastruttura.com/admin/`

## 1) Crea OAuth App su GitHub

In GitHub: `Settings > Developer settings > OAuth Apps > New OAuth App`

Valori consigliati:

- `Application name`: `UltraStruttura Decap CMS`
- `Homepage URL`: `https://ultrastruttura.com`
- `Authorization callback URL`: `https://YOUR_PROXY_URL/callback`

Poi salva e copia:

- `Client ID`
- `Client Secret`

## 2) Deploy OAuth Proxy (Cloudflare Worker)

Usa il template ufficiale indicato da Decap:

- `https://github.com/decaporg/decap-cms-oauth-cloudflare`

Nel progetto worker imposta:

- `ORIGIN`: `https://ultrastruttura.com`
- `GITHUB_CLIENT_ID`: `<Client ID>`
- `GITHUB_CLIENT_SECRET`: `<Client Secret>`

Deploy del worker, ottieni URL pubblico:

- esempio: `https://ultrastruttura-cms-oauth.<account>.workers.dev`

## 3) Aggiorna callback in GitHub OAuth App

Dopo il deploy del worker, assicurati che la callback sia esattamente:

- `https://YOUR_PROXY_URL/callback`

## 4) Aggiorna Decap config

In `public/admin/config.yml` decommenta/imposta:

```yml
backend:
  name: github
  repo: baldellimtt/ultrastruttura-site
  branch: master
  base_url: https://YOUR_PROXY_URL
  auth_endpoint: /auth
```

## 5) Commit e deploy

```bash
git add public/admin/config.yml DECAP_OAUTH_SETUP.md
git commit -m "Configure Decap OAuth backend"
git push origin master
```

## 6) Test finale

Apri:

- `https://ultrastruttura.com/admin/`

Verifica:

- login GitHub riuscito
- modifica titolo opera
- upload immagine
- salvataggio commit su `master`
