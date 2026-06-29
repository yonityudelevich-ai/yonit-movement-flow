import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import heroAsset from "../assets/hero.jpg.asset.json";
import heroVideo from "../assets/hero-video.mp4.asset.json";
import aboutAsset from "../assets/about.jpg.asset.json";
import aboutFace from "../assets/about-face.jpg";
import contactPhoto from "../assets/contact-photo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yonit Yudelevich · Movement Therapy" },
      { name: "description", content: "Movement, body, and presence — a personal and group space with Yonit Yudelevich." },
      { property: "og:title", content: "Yonit Yudelevich · Movement Therapy" },
      { property: "og:description", content: "Movement, body, and presence — a personal and group space with Yonit Yudelevich." },
    ],
  }),
  component: Index,
});

type Lang = "he" | "en";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const WHATSAPP_NUMBER = "972500000000";

const t = {
  nav: { he: "צרי קשר", en: "Contact" },
  heroHeadline: { he: "טיפול בתנועה שיטת פלדנקרייז יוגה רגישה", en: "Movement Therapy, Feldenkrais Method, Trauma-Sensitive Yoga" },
  heroSub: {
    he: "לעבוד דרך הגוף לפגוש את עצמך ולנוע עם החיים",
    en: "Working through the body, meeting yourself, and moving with life.",
  },
  heroSmall: {
    he: "",
    en: "Suitable for women, children, rehabilitation processes, regulation, and reconnecting with the body.",
  },
  heroCta: { he: "צרי איתי קשר", en: "Get in Touch" },
  heroName: { he: "יונית יודלביץ'", en: "Yonit Yudelevich" },
  bridge: {
    he: "קצת מהתנועה עצמה, לפני הכל.",
    en: "A glimpse of the movement itself, before anything else.",
  },
  videosTitle: { he: "לראות ולהקשיב", en: "Watch & Listen" },
  videosMore: { he: "עוד בערוץ היוטיוב", en: "See more on YouTube" },
  aboutTitle: { he: "מי אני", en: "About Me" },
  aboutBody: {
    he: [
      "אני עוסקת בתנועה ובגוף כבר יותר משני עשורים, במסגרות חינוכיות, שיקומיות ואישיות.",
      "לאורך השנים פגשתי אנשים במצבים שונים — אחרי פציעה, בתוך עומס או מתח, בתקופות של שינוי גופני, או פשוט ברצון לחזור ולהרגיש את הגוף.",
      "העבודה שלי משלבת כמה גישות, אבל הבסיס תמיד אותו דבר: הקשבה לגוף, התאמה אישית, וקצב שמכבד את מי שמולי. אין כאן הישגיות ואין נכון או לא נכון — יש מרחב ללמוד את הגוף מחדש, בבטחה.",
    ],
    en: [
      "I've worked with movement and the body for more than two decades — in educational, rehabilitative, and personal settings.",
      "Over the years I've met people in very different situations: after an injury, under stress or strain, during periods of physical change, or simply wanting to feel their body again.",
      "My work combines several approaches, but the foundation is always the same: listening to the body, personal adaptation, and a pace that respects the person in front of me. There's no striving here and no right or wrong — just space to learn the body again, safely.",
    ],
  },
  howTitle: { he: "איך אני עובדת", en: "How I Work" },
  how: [
    {
      he: { title: "הקשבה לגוף", body: "מתחילים מאיפה שאת נמצאת, ולא ממה ש\"צריך\". הגוף מוביל, ואני מלווה." },
      en: { title: "Listening to the Body", body: "We start from where you are, not from what \"should\" be. The body leads, and I accompany it." },
    },
    {
      he: { title: "תנועה מותאמת", body: "תנועה עדינה ומדויקת שמאפשרת חיבור, ויסות ושיקום — בלי כוח ובלי לחץ." },
      en: { title: "Adapted Movement", body: "Gentle, precise movement that supports connection, regulation, and recovery — without force and without pressure." },
    },
    {
      he: { title: "חזרה לנוכחות וביטחון", body: "המטרה היא לא רק לזוז, אלא להרגיש שוב בטחון ונוכחות בתוך הגוף." },
      en: { title: "Returning to Presence and Safety", body: "The goal isn't only to move, but to feel safety and presence within the body again." },
    },
  ],
  whoTitle: { he: "למי זה מתאים", en: "Who It's For" },
  who: {
    he: [
      "נשים שמחפשות חיבור מחודש לגוף",
      "מי שחווה מתח, עומס או תחושת ניתוק",
      "אנשים שמתמודדים עם כאב, פציעה או מגבלה תנועתית",
      "נשים אחרי לידה, סביב האגן או בתקופות של שינוי גופני",
      "ילדים ונוער שזקוקים לעבודה תנועתית רגישה",
      "מי שמחפש תנועה עדינה, לא הישגית",
    ],
    en: [
      "Women looking to reconnect with their body",
      "Anyone experiencing stress, strain, or a sense of disconnection",
      "People dealing with pain, injury, or limited mobility",
      "Women postpartum, around the pelvis, or during periods of physical change",
      "Children and teens who need sensitive movement work",
      "Anyone seeking gentle, non-competitive movement",
    ],
  },
  servicesTitle: { he: "מפגשים ושירותים", en: "Sessions & Services" },
  services: {
    he: [
      "מפגשים אישיים", "שיעורים קבוצתיים", "סדנאות לנשים", "תנועה טיפולית",
      "פילאטיס שיקומי", "פלדנקרייז", "יוגה רגישה לטראומה",
      "עבודה עם ילדים ונוער", "עבודה עם פציעות ושיקום",
    ],
    en: [
      "Individual sessions", "Group classes", "Workshops for women", "Therapeutic movement",
      "Rehabilitative Pilates", "Feldenkrais", "Trauma-sensitive yoga",
      "Work with children and teens", "Work with injuries and rehabilitation",
    ],
  },
  servicesNote: {
    he: "אפשר לתאם שיחה קצרה כדי לבדוק מה הכי מתאים לך.",
    en: "You're welcome to schedule a short call to find what fits you best.",
  },
  trustTitle: { he: "אמון וניסיון", en: "Trust & Experience" },
  trust: {
    he: [
      "מעל 20 שנות ניסיון בתנועה",
      "מעל 13 שנות עבודה במסגרות חינוכיות",
      "כ-12 שנות עבודה עם חיילים פצועים",
      "הכשרה בטיפול בתנועה",
      "פלדנקרייז, פילאטיס שיקומי, יוגה רגישה לטראומה",
      "ניסיון בעבודה פרטנית וקבוצתית",
    ],
    en: [
      "Over 20 years of experience in movement",
      "Over 13 years working in educational settings",
      "About 12 years working with wounded soldiers",
      "Training in movement therapy",
      "Feldenkrais, rehabilitative Pilates, trauma-sensitive yoga",
      "Experience in both one-on-one and group work",
    ],
  },
  contactTitle: { he: "רוצה לבדוק אם זה מתאים לך?", en: "Want to see if this is right for you?" },
  contactSub: {
    he: "שלחי לי הודעה קצרה ואחזור אלייך לתיאום שיחה.",
    en: "Send me a short message and I'll get back to you to schedule a call.",
  },
  name: { he: "שם", en: "Name" },
  contactField: { he: "אימייל או טלפון", en: "Email or Phone" },
  message: { he: "הודעה", en: "Message" },
  send: { he: "שליחה", en: "Send" },
  sent: { he: "תודה, אחזור אלייך בקרוב.", en: "Thank you — I'll be in touch soon." },
  whatsapp: { he: "צרי קשר ב-WhatsApp", en: "Message Me on WhatsApp" },
  whatsappMsg: {
    he: "היי יונית, הגעתי דרך האתר ואשמח לתאם שיחה קצרה כדי לבדוק אם זה מתאים לי.",
    en: "Hi Yonit, I came through your website and I'd love to schedule a short call to see if this is a good fit for me.",
  },
};

const videos = [
  {
    videoId: "RUnk-txGc7Y",
    isShort: true,
    title_en: "Gentle Seated Movement",
    title_he: "תנועה עדינה בישיבה",
    desc_en: "A private Feldenkrais lesson — slow, mindful movement in a seated position.",
    desc_he: "שיעור פלדנקרייז פרטי — תנועה איטית ומודעת בישיבה.",
  },
  {
    videoId: "KW3tgg9NRQU",
    isShort: true,
    title_en: "Pelvic Awareness, Lying Down",
    title_he: "מודעות לאגן, בשכיבה",
    desc_en: "A moment of gentle pelvic awareness work, lying down, from a private session.",
    desc_he: "רגע של תשומת לב עדינה לאגן, בשכיבה, מתוך מפגש פרטי.",
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("he");
  const [sent, setSent] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const isHe = lang === "he";
  const dir = isHe ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [dir, lang]);

  const tr = (key: { he: string; en: string }) => key[lang];

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
    } catch {
      // ignore network errors silently for now
    }
    setSent(true);
    form.reset();
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tr(t.whatsappMsg))}`;

  return (
    <div dir={dir} className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Top toggles */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm" style={{ background: "color-mix(in oklab, var(--bg) 78%, transparent)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-3" style={{ color: "var(--ink)" }}>
          <div className="text-sm tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            Yonit Yudelevich
          </div>
          <div className="flex items-center gap-2">
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full pt-14">
        <div className="relative w-full overflow-hidden" style={{ minHeight: "50vh", aspectRatio: "16 / 9" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(1.15) contrast(1.05)" }}
          >
            <source src={heroVideo.url} type="video/mp4" />
          </video>
          {/* Scrim for legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,15,26,0.25) 0%, rgba(10,15,26,0.05) 35%, rgba(10,15,26,0.05) 60%, rgba(10,15,26,0.35) 100%)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 sm:pt-24 text-center" style={{ color: "#FFF" }}>
            <h1
              className="mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                lineHeight: 1.05,
                color: "#FFF",
                fontWeight: 700,
                textShadow: "0 2px 24px rgba(0,0,0,0.45)",
              }}
            >
              {tr(t.heroName)}
            </h1>
            <h2
              className="tracking-[0.08em]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                fontWeight: 300,
                color: "#FFF",
                textShadow: "0 1px 12px rgba(0,0,0,0.55)",
              }}
            >
              {tr(t.heroHeadline)}
            </h2>
            <div className="h-8" />
            <a href="#contact" onClick={scrollTo("contact")}>
              <Btn>{tr(t.heroCta)}</Btn>
            </a>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel>{isHe ? "וידאו" : "Video"}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl text-center mb-3">{tr(t.videosTitle)}</h2>
          <AccentRule center />
          <div className="h-10" />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((v, i) => (
              <VideoCard
                key={i}
                videoId={v.videoId}
                isShort={!!v.isShort}
                title={v.isShort ? (isHe ? v.title_he : v.title_en) : undefined}
                desc={isHe ? v.desc_he : v.desc_en}
                onPlay={() => setActiveVideo(v.videoId)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.youtube.com/channel/UCSAZLW69rgba9n5zwXt9ELg"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
              style={{ color: "var(--accent)" }}
            >
              {tr(t.videosMore)} →
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={aboutFace}
            alt="Yonit Yudelevich"
            className="w-full object-cover"
            loading="lazy"
          />
          <div>
            <SectionLabel>{isHe ? "היכרות" : "Introduction"}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl mb-3">{tr(t.aboutTitle)}</h2>
            <AccentRule />
            <div className="h-6" />
            {(isHe ? t.aboutBody.he : t.aboutBody.en).map((p, i) => (
              <p key={i} className="mb-4" style={{ color: "var(--ink-soft)" }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section className="py-24" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>{isHe ? "הגישה" : "Approach"}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl text-center mb-3">{tr(t.howTitle)}</h2>
          <AccentRule center />
          <div className="h-10" />
          <div className="grid md:grid-cols-3 gap-8">
            {t.how.map((c, i) => {
              const card = isHe ? c.he : c.en;
              return (
                <div
                  key={i}
                  className="p-8"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div className="w-10 h-[2px] mb-5" style={{ background: "var(--accent)" }} />
                  <h3 className="text-xl mb-3">{card.title}</h3>
                  <p style={{ color: "var(--ink-soft)" }}>{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="py-24" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <SectionLabel>{isHe ? "קהל" : "For You"}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl text-center mb-3">{tr(t.whoTitle)}</h2>
          <AccentRule center />
          <div className="h-10" />
          <ul className="space-y-4">
            {(isHe ? t.who.he : t.who.en).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                <span style={{ color: "var(--ink)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-24" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>{isHe ? "מה אני מציעה" : "Offerings"}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl mb-3">{tr(t.servicesTitle)}</h2>
          <AccentRule center />
          <div className="h-10" />
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(isHe ? t.services.he : t.services.en).map((s, i) => (
              <span
                key={i}
                className="px-5 py-2 text-sm"
                style={{
                  border: "1px solid var(--line)",
                  color: "var(--ink)",
                  background: "var(--surface)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <p className="text-sm" style={{ color: "var(--ink-soft)" }}>{tr(t.servicesNote)}</p>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>{isHe ? "רקע" : "Background"}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl text-center mb-3">{tr(t.trustTitle)}</h2>
          <AccentRule center />
          <div className="h-8" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
            {(isHe ? t.trust.he : t.trust.en).map((item, i) => (
              <div key={i} className="text-center text-sm sm:text-base" style={{ color: "var(--ink-soft)" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={contactPhoto}
            alt="Yonit Yudelevich"
            className="w-full object-cover"
            style={{ filter: "saturate(1.35) contrast(1.05)" }}
            loading="lazy"
          />
          <div>
            <SectionLabel>{isHe ? "יצירת קשר" : "Contact"}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl mb-3">{tr(t.contactTitle)}</h2>
            <AccentRule />
            <div className="h-6" />
            <p className="mb-10" style={{ color: "var(--ink-soft)" }}>{tr(t.contactSub)}</p>
            {sent ? (
              <div
                className="p-8 text-center"
                style={{ background: "var(--surface)", border: "1px solid var(--line)" }}
              >
                {tr(t.sent)}
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <Field name="name" label={tr(t.name)} required />
                <Field name="contact" label={tr(t.contactField)} required />
                <Field name="message" label={tr(t.message)} as="textarea" required />
                <div className="pt-2">
                  <Btn type="submit" full>{tr(t.send)}</Btn>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs" style={{ color: "var(--ink-soft)", borderTop: "1px solid var(--line)" }}>
        © {new Date().getFullYear()} Yonit Yudelevich
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={tr(t.whatsapp)}
        className="fixed bottom-6 z-30 w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
        style={{
          [isHe ? "left" : "right"]: "1.5rem",
          background: "#25D366",
          borderRadius: "50%",
        } as React.CSSProperties}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#128C7E")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.978 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={() => setActiveVideo(null)}
        >
          <div className="w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function Btn({ children, full, type = "button" }: { children: React.ReactNode; full?: boolean; type?: "button" | "submit" }) {
  return (
    <button
      type={type}
      className={`px-8 py-3.5 text-sm tracking-wide transition-colors ${full ? "w-full" : ""}`}
      style={{
        background: "var(--accent)",
        color: "var(--accent-ink)",
        borderRadius: "4px",
        border: "none",
        boxShadow: "none",
        fontWeight: 600,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-center text-xs uppercase tracking-[0.35em] mb-4"
      style={{ color: "var(--accent)" }}
    >
      {children}
    </p>
  );
}

function AccentRule({ center }: { center?: boolean }) {
  return (
    <div className={center ? "flex justify-center" : ""}>
      <span className="block w-12 h-[2px]" style={{ background: "var(--accent)" }} />
    </div>
  );
}

function Field({
  name, label, required, as,
}: { name: string; label: string; required?: boolean; as?: "textarea" }) {
  const shared = {
    name,
    required,
    placeholder: label,
    className: "w-full px-4 py-3 text-sm bg-transparent outline-none focus:border-[var(--accent)] transition-colors",
    style: {
      border: "1px solid var(--line)",
      background: "var(--surface)",
      color: "var(--ink)",
    } as React.CSSProperties,
  };
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      {as === "textarea" ? <textarea rows={5} {...shared} /> : <input type="text" {...shared} />}
    </label>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      className="flex text-xs overflow-hidden"
      style={{ border: "1px solid var(--line)" }}
    >
      {(["he", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-3 py-1.5 transition-colors"
          style={{
            background: lang === l ? "var(--accent)" : "transparent",
            color: lang === l ? "var(--accent-ink)" : "var(--ink-soft)",
          }}
        >
          {l === "he" ? "עב" : "EN"}
        </button>
      ))}
    </div>
  );
}

function VideoCard({ videoId, isShort, title, desc, onPlay }: { videoId: string; isShort?: boolean; title?: string; desc: string; onPlay: () => void }) {
  const thumbUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  const linkUrl = isShort ? `https://youtube.com/shorts/${videoId}` : `https://www.youtube.com/watch?v=${videoId}`;
  const aspectClass = isShort ? "aspect-[9/16]" : "aspect-video";

  return (
    <div>
      <a
        href={linkUrl}
        target="_blank"
        rel="noreferrer"
        className="group block w-full overflow-hidden relative"
      >
        <div className={`${aspectClass} w-full overflow-hidden`} style={{ background: "var(--accent-soft)" }}>
          <img
            src={thumbUrl}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <span
          className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition"
        >
          <span
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.9)", color: "var(--accent)" }}
          >
            ▶
          </span>
        </span>
      </a>
      {title ? (
        <p className="mt-3 text-base" style={{ color: "var(--ink)", fontWeight: 600 }}>{title}</p>
      ) : null}
      <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>{desc}</p>
    </div>
  );
}
