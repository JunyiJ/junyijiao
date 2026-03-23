# Junyi Jiao Personal Website (Static)

This is a static site optimized for easy AI-agent editing and GitHub Pages deployment.

## Structure

- `index.html` — landing page
- `styles.css` — site styling
- `resume/index.html` — web resume page
- `assets/resume/Junyi_Jiao_Resume.pdf` — downloadable PDF resume

## Deploy to GitHub Pages

1. Create a new GitHub repo (for example: `junyijiao`)
2. Upload these files to the repo root
3. In GitHub: **Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` / root
4. Wait for URL generation (`https://<username>.github.io/<repo>`)
5. Connect custom domain `junyijiao.com`

## DNS for custom domain (apex)

At your domain registrar:

- `A` → `185.199.108.153`
- `A` → `185.199.109.153`
- `A` → `185.199.110.153`
- `A` → `185.199.111.153`
- `CNAME` for `www` → `<username>.github.io`

Then add `CNAME` file in repo root with:

`junyijiao.com`

## Notes

- Keep resume PDF path stable: `assets/resume/Junyi_Jiao_Resume.pdf`
- You can tune colors and typography in `styles.css`
- Works without build tools/frameworks
