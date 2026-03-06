# obotzone.id — Astro + Tailwind Rebuild

**Modern Tech / SaaS Aesthetic** — Dark mode, Glassmorphism, Bento Grid  
Built with **Astro 4** + **Tailwind CSS** → Deployed on **Cloudflare Pages**

---

## 📁 Project Structure

```
obotzone-astro/
├── src/
│   ├── components/
│   │   ├── Navbar.astro       ← Glassmorphism sticky nav
│   │   ├── Hero.astro         ← Hero dengan gradient text + stats
│   │   ├── Services.astro     ← Bento Grid 6 layanan
│   │   ├── Portfolio.astro    ← Project list + testimonial
│   │   ├── About.astro        ← About + Tech Stack
│   │   ├── Contact.astro      ← Form kontak profesional
│   │   └── Footer.astro       ← Minimalis dengan link columns
│   ├── layouts/
│   │   └── BaseLayout.astro   ← HTML shell + SEO meta
│   ├── pages/
│   │   └── index.astro        ← Main page (assembles all components)
│   └── styles/
│       └── global.css         ← Tailwind + custom utilities
├── public/
│   ├── favicon.svg
│   └── _headers               ← Cloudflare cache & security headers
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🚀 Cara Install & Jalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan dev server
```bash
npm run dev
# → http://localhost:4321
```

### 3. Build untuk production
```bash
npm run build
# Output ke ./dist/
```

---

## ☁️ Deploy ke Cloudflare Pages

### Setup pertama kali:
1. **Push repo ke GitHub**
2. Buka [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
3. **Create a project** → Connect to Git → Pilih repo ini
4. Build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. **Save and Deploy** ✅

### Update selanjutnya:
```bash
git add . && git commit -m "update" && git push
# Cloudflare auto-deploy via GitHub webhook
```

---

## 🎨 Design Tokens

| Token         | Value       | Usage                   |
|---------------|-------------|-------------------------|
| `--cyan`      | `#00d4ff`   | Primary accent          |
| `--emerald`   | `#00ff88`   | Secondary accent        |
| `base`        | `#0a0a0a`   | Background              |
| `surface`     | `#111114`   | Elevated surfaces       |
| `panel`       | `#16161a`   | Cards / panels          |
| `border`      | `#ffffff0f` | Subtle borders          |

### Fonts (Google Fonts)
- **Syne** — Display / Heading (bold, geometric)
- **Plus Jakarta Sans** — Body text (clean, readable)
- **JetBrains Mono** — Code labels, tags, badges

---

## 🧩 Komponen Utama

### Glassmorphism Card
```html
<div class="glass glass-hover">
  <!-- content -->
</div>
```

### Gradient Text
```html
<span class="text-gradient-cyan">Teks gradasi</span>
<span class="text-gradient-warm">Teks gradasi hangat</span>
```

### Buttons
```html
<a href="#" class="btn-primary">CTA Utama</a>
<a href="#" class="btn-secondary">CTA Sekunder</a>
```

### Section Label
```html
<p class="section-label">// 01 — NAMA SEKSI</p>
```

### Scroll Reveal
```html
<div class="reveal">Muncul saat scroll</div>
<div class="reveal reveal-delay-2">Muncul dengan delay</div>
```

### Bento Grid (lihat Services.astro)
```css
.bento-large { grid-column: span 2; }
.bento-small { grid-column: span 1; }
```

---

## ✏️ Cara Kustomisasi

### Ganti konten layanan
Edit array `services` di `src/components/Services.astro`

### Ganti konten portfolio
Edit array `projects` di `src/components/Portfolio.astro`

### Aktifkan form contact
Integrasikan dengan [Formspree](https://formspree.io) atau [Web3Forms](https://web3forms.com):
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Ganti warna aksen
Di `tailwind.config.mjs`, ubah:
```js
cyan: '#00d4ff',    // → ganti ke warna lain
emerald: '#00ff88', // → ganti ke warna lain
```

---

## ⚡ Performance

- **Astro** → Zero JS by default, hanya kirim HTML+CSS
- **Static output** → CDN edge Cloudflare 300+ kota
- **Tailwind purge** → CSS final sangat kecil (~8KB)
- **Google Fonts preconnect** → Font loading optimal
- **Image format**: Gunakan `.webp` untuk semua gambar

---

*Built with precision. Deployed at the edge.*
