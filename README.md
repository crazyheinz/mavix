# Mavix

Strategy & Venture Building website voor zorg en daarbuiten.

## GitHub Pages Deployment

Deze site is geconfigureerd voor automatische deployment naar GitHub Pages met het custom domain **mavix.be**.

### Setup Stappen

1. **Push je code naar GitHub**
   ```sh
   git push origin main
   ```

2. **Activeer GitHub Pages**:
   - Ga naar je repository settings op GitHub
   - Navigeer naar "Pages" in het linker menu
   - Bij "Source", selecteer "GitHub Actions"

3. **Configureer je custom domain (mavix.be)**:
   - Bij "Custom domain", voer `mavix.be` in
   - GitHub zal de CNAME file automatisch detecteren

4. **DNS instellingen bij je domain registrar**:
   Voeg deze DNS records toe voor mavix.be:
   - `A` record: `@` → `185.199.108.153`
   - `A` record: `@` → `185.199.109.153`
   - `A` record: `@` → `185.199.110.153`
   - `A` record: `@` → `185.199.111.153`
   - `CNAME` record: `www` → `[jouw-github-username].github.io`

5. **Wacht op DNS propagatie** (kan 24-48 uur duren)

6. **Activeer HTTPS** in GitHub Pages settings (gebeurt automatisch na DNS propagatie)

### Local Development

```sh
# Installeer dependencies
npm install

# Start development server
npm run dev
```

De site wordt beschikbaar op `http://localhost:8080`

### Build

```sh
npm run build
```

De gebouwde site komt in de `dist` folder en wordt automatisch gedeployed naar GitHub Pages bij elke push naar main.

## Project info

**Lovable URL**: https://lovable.dev/projects/1d06602a-3984-47ce-85a8-498a23316294

## Technologies

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Status

Live op mavix.be via GitHub Actions deployment.
