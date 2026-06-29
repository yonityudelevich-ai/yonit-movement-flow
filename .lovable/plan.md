# Updates

## 1. Unify body text color to warm cream pastel
Across all sections on the dark navy background, switch paragraph/body text from `var(--ink-soft)` (greyish) to the same warm cream pastel (`#E8D9C0`) already used in the "How to Begin" / Guidance / Rehab cards. Affected spots in `src/routes/index.tsx`:
- About section paragraphs (`t.aboutBody`)
- Contact section sub text (`t.contactSub`)
- Footer copyright line
- Video card descriptions
- Form field placeholders/inputs text color

Headings (H1/H2 mustard) stay as-is.

## 2. Add CV download link
- Upload the attached `קורות חיים פלדנקרייז .28.07.21.doc` to Lovable Assets and save the pointer as `src/assets/cv.doc.asset.json`.
- Add a new translation key `cvLink` (he: "קורות חיים", en: "Curriculum Vitae").
- Place a single, centered link in the footer area (above the © line), styled in the existing **Special Elite** typewriter font (already loaded), mustard color, underlined, opens in a new tab, with `download` attribute.

No other layout/structure changes.