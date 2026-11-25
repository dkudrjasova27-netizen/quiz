# Slēptās programmas tests (Vercel)

Faili: `index.html` (viss tests), `img/` (bildes), `apps-script.gs` (Google Sheet savienojums).
`quiz.html` ir tikai priekšskatījumam.

## 1. Google Sheet atbildēm (bez maksas)
1. Atver sheets.google.com un izveido jaunu tabulu, piem. "Testa atbildes".
2. Izvēlne **Extensions → Apps Script**.
3. Izdzēs visu, kas tur ir, un ielīmē `apps-script.gs` saturu. Spied **Save**.
4. **Deploy → New deployment** → zobratiņš → **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Spied **Deploy**, atļauj piekļuvi savam Google kontam.
6. Nokopē **Web app URL** (beidzas ar `/exec`) un atsūti to man.
   Es to ielikšu `index.html` rindā `const SHEET_URL = "";`.

Katra testa aizpildītāja nonāk jaunā rindā: laiks, vārds, e-pasts, Instagram, rezultāts, atbilde, atbildes 1-8, punkti.

## 2. Vercel
Tāpat kā numeroloģijas testam: GitHub repozitorijs ar šiem failiem → Vercel → Add New Project → Import → Deploy.
Bez build iestatījumiem (Framework: Other).

## Punktu skaitīšana
A Kontrolētāja, B Cīnītāja, C Vēlme izpatikt, D Neredzamā, E Perfekcioniste, F Sabotētāja.
Katra atbilde +1, 6. jautājums +1,5. Uzvar lielākais; vienādos punktos uzvar vēlākais (kā Tally).
