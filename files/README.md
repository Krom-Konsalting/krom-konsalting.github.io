# KROM KONSALTING — sajt

Statični sajt (HTML/CSS/JS, bez servera i baze) — spreman za besplatan hosting.

## Fajlovi
- `index.html` — sadržaj i meta podaci
- `styles.css` — dizajn
- `script.js` — animacije (konzola, scroll efekti, meni)
- `favicon.svg` — ikonica
- `robots.txt`, `sitemap.xml` — za Google
- `og-cover.png` — (dodajte sami, 1200×630px sliku za dijeljenje na društvenim mrežama — opciono)

## 1) Besplatan hosting preko GitHub Pages

1. Napravite nalog na github.com (ako ga nemate).
2. Kliknite **New repository**. Naziv npr. `krom-konsalting`. Public. Create repository.
3. Na stranici repozitorija kliknite **Add file → Upload files** i prevucite sve fajlove iz ovog foldera (index.html, styles.css, script.js, favicon.svg, robots.txt, sitemap.xml). Commit changes.
4. Idite na **Settings → Pages**.
5. Pod "Build and deployment" → Source: **Deploy from a branch**. Branch: `main`, folder `/ (root)`. Save.
6. Za par minuta sajt će biti dostupan na:
   `https://<vase-korisnicko-ime>.github.io/krom-konsalting/`

### Vlastita domena (preporučeno, npr. kromkonsalting.ba ili .com)
- Kupite domenu (bha.ba, nic.ba za `.ba`, ili npr. Namecheap/GoDaddy za `.com`).
- U Settings → Pages → Custom domain unesite domenu.
- Kod registrara domene dodajte DNS zapise koje GitHub traži (CNAME zapis ka `<korisnicko-ime>.github.io`).
- **Bitno:** u `index.html`, `robots.txt` i `sitemap.xml` trenutno piše `https://kromkonsalting.ba/` — zamijenite tim adresama vašom stvarnom domenom (ili GitHub Pages adresom ako ne kupujete domenu) prije nego što je pošaljete Googleu, inače se meta podaci neće poklapati sa stvarnom adresom.

## 2) Da vas sajt Google pronađe i indeksira

Nijedna besplatna metoda ne garantuje da ćete biti prvi rezultat — to zavisi i od konkurencije i vremena — ali ovo su koraci koji stvarno pomažu:

1. **Google Search Console** (besplatno): idite na `search.google.com/search-console`, dodajte svoj sajt (Property), verifikujte vlasništvo (najlakše preko HTML meta taga ili DNS zapisa).
2. U Search Console → **Sitemaps**, dodajte `sitemap.xml` (npr. `https://vasadomena.ba/sitemap.xml`).
3. Koristite **URL Inspection** alat i kliknite "Request indexing" za početnu stranicu — to ubrza da Google prvi put pogleda sajt (obično nekoliko dana).
4. Napravite **Google Business Profile** (business.google.com) sa istim podacima (naziv, adresa, telefon) — ovo je najveći faktor za lokalne pretrage tipa "Oracle konsalting Sarajevo", jer se prikazuje na Google mapi i lokalnim rezultatima.
5. Osigurajte da su naziv, adresa i telefon identični svuda (sajt, Google Business Profile, društvene mreže) — Google to koristi za potvrdu legitimnosti firme.
6. Sadržaj na sajtu (naslovi, opisi usluga) je već napisan sa relevantnim ključnim riječima (Oracle konsalting, Oracle aplikacije, monitoring informacionih sistema) — to pomaže organskom rangiranju.

## 3) Izmjena sadržaja

- Tekst mijenjate direktno u `index.html` (obični HTML, lako za pretraživanje/zamjenu teksta).
- Boje i fontovi su definisani na vrhu `styles.css` u `:root { ... }` — mijenjajte tu ako želite drugu paletu.
