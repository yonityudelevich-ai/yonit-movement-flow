import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import heroAsset from "../assets/hero.jpg.asset.json";
import heroVideo from "../assets/hero-video.mp4.asset.json";
import aboutNew from "../assets/yonit-about-portrait.jpg.asset.json";
import contactPhoto from "../assets/contact-photo.jpg.asset.json";
import cvAsset from "../assets/cv.doc.asset.json";

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
      "שמי יונית יודלביץ אסולין, מטפלת בתנועה (M.A.), מורה לפלדנקרייז ומנחת תהליכים מבוססי גוף, בעלת למעלה מ־25 שנות ניסיון בעבודה טיפולית, שיקומית וליווי תהליכים אישיים וקבוצתיים בארץ ובעולם.",
      "במהלך השנים ליוויתי ילדים, מתבגרים ומבוגרים במגוון רחב של מצבי חיים – אנשים המתמודדים עם טראומה, משברי חיים, כאב פיזי ורגשי, תהליכי שיקום, שינויים ומעברים משמעותיים, לצד אנשים סקרנים ואוהבי תנועה המבקשים לטפח רווחה אישית, להעמיק את הקשר עם עצמם ולגלות מחדש שמחה פשוטה דרך התנועה.",
      "עבודתי משלבת טיפול בתנועה, שיטת פלדנקרייז, גישות סומטיות מבוססות גוף, עבודה מיודעת טראומה באמצעות תרגול יוגה רגיש טראומה, תנועה מודעת, מחול וליווי תהליכים אישיים וקבוצתיים.",
      "לאורך חיי, התנועה הייתה עבורי שפה טבעית להבנה, ביטוי וחיבור – דרך לפגוש את עצמי ואת העולם. מסעותיי בעולם והיכולת לתמוך באנשים באמצעות תנועה חיזקו בי את ההבנה כי הגוף והתנועה הם שער משמעותי לתהליכי שינוי, ריפוי והתפתחות. מתוך המסע האישי והמקצועי שלי, אני ממשיכה לחקור את הקשר שבין גוף, נפש ותנועה, ואת היכולת האנושית להתפתח, להשתנות ולצמוח לאורך החיים.",
      "הגוף נושא בתוכו את סיפור חיינו – זיכרונות, רגשות, דפוסים, כאבים, אך גם משאבים, חוסן ויכולת טבעית לריפוי, התפתחות וצמיחה. פעמים רבות אנשים מגיעים מתוך כאב, סקרנות או תחושה שמשהו מבקש להשתנות. לעיתים זו כמיהה להבין מדוע אזור מסוים בגוף ממשיך לכאוב, לעיתים רצון למצוא דרך להתמודד עם עומס, מתח או רגשות שמורגשים בגוף באופן ברור, ולעיתים פשוט רצון להרגיש מחוברים יותר לעצמם.",
      "במקביל לקליניקה הפרטית ולהנחיית קבוצות, אני מלמדת ומדריכה מטפלים בתוכניות הכשרה מקצועיות בארץ ובעולם. במהלך נדודיי בעולם פתחתי גם קליניקה מקוונת, וכיום אני מלווה, מלמדת ומנחה אנשים וקבוצות מכל מקום בעולם.",
      "בואו כפי שאתם.",
    ],
    en: [
      "My name is Yonit Yudelevich Asulin. I am a movement therapist (M.A.), a Feldenkrais teacher, and a facilitator of body-based processes, with more than 25 years of experience in therapeutic, rehabilitative, and individual and group process work in Israel and around the world.",
      "Over the years I have accompanied children, adolescents, and adults through a wide range of life situations — people coping with trauma, life crises, physical and emotional pain, rehabilitation processes, significant changes and transitions, alongside curious movement lovers seeking to cultivate personal wellbeing, deepen their connection with themselves, and rediscover simple joy through movement.",
      "My work combines movement therapy, the Feldenkrais Method, body-based somatic approaches, trauma-informed practice through trauma-sensitive yoga, conscious movement, dance, and accompaniment of individual and group processes.",
      "Throughout my life, movement has been a natural language for understanding, expression, and connection — a way to meet myself and the world. My journeys around the world and my ability to support people through movement reinforced my understanding that the body and movement are a significant gateway to processes of change, healing, and development. Out of my personal and professional journey, I continue to explore the connection between body, soul, and movement, and the human capacity to develop, change, and grow throughout life.",
      "The body carries within it the story of our lives — memories, emotions, patterns, pain, but also resources, resilience, and a natural ability for healing, development, and growth. Often people arrive out of pain, curiosity, or a sense that something is asking to change. Sometimes it is a longing to understand why a certain area of the body continues to hurt, sometimes a desire to find a way to cope with overload, stress, or emotions clearly felt in the body, and sometimes simply a wish to feel more connected to oneself.",
      "Alongside my private clinic and group facilitation, I teach and guide therapists in professional training programs in Israel and around the world. During my travels around the world I also opened an online clinic, and today I accompany, teach, and guide people and groups from anywhere in the world.",
      "Come as you are.",
    ],
  },
  poem: {
    he: {
      title: "להעביר",
      body: "פעם ביום כדאי שאדם\nישען על דבר-מה.\nיניח את גופו\nעל רהיט או על אדמה\nאו על קיר\nאת משקלו יעביר\nממנו הלאה\nבלי שייצטרך להחזיר.",
      author: "מיטל הורובסקי",
    },
    en: {
      title: "To Transfer",
      body: "Once a day it is good for a person\nto lean on something.\nTo place their body\non a piece of furniture or on the ground\nor on a wall.\nTo transfer their weight\naway from it\nwithout needing to return it.",
      author: "Meital Horovski",
    },
  },
  howTitle: { he: "איך מתחילים?", en: "How to Begin?" },
  howIntro: {
    he: "התהליך מתחיל בשיחת היכרות קצרה, שבה אנחנו מתמקדים יחד במה שמביא אותך ובהבנה של הצורך המרכזי שלך כאן ועכשיו.\n\nבהתאם לכך נבחרת גישה טיפולית אחת מתוך מספר דרכי עבודה מבוססות גוף.",
    en: "The process begins with a short introductory conversation, in which we focus together on what brings you here and on understanding your central need right now.\n\nBased on that, one therapeutic approach is chosen from several body-based ways of working.",
  },
  approachesLabel: { he: "גישות העבודה", en: "Approaches" },
  approaches: [
    {
      he: { title: "טיפול בתנועה", body: "גישה טיפולית מבוססת גוף ותנועה, המוכרת על ידי האיגוד האמריקאי לטיפול בתנועה (ADTA). העבודה נעשית דרך תנועה, קשר מילולי ולא מילולי, ותהליכי עיבוד של חוויה רגשית וגופנית בתוך הקשר הטיפולי." },
      en: { title: "Movement Therapy", body: "A body- and movement-based therapeutic approach recognized by the American Dance Therapy Association (ADTA). The work is done through movement, verbal and non-verbal connection, and processing of emotional and physical experience within the therapeutic relationship." },
    },
    {
      he: { title: "פלדנקרייז", body: "שיטת פלדנקרייז מזמינה את הגוף והמוח ללמוד מחדש – ללא מאמץ, ללא כאב ומתוך סקרנות והקשבה. באמצעות רצפי תנועה עדינים ומדויקים מתעוררת יכולתו הטבעית של המוח ליצור דפוסים חדשים, לשחרר הרגלים מגבילים ולשפר את איכות התנועה והתפקוד. התרגול מסייע להפחית כאבים ומתחים, לשפר שיווי משקל, יציבה וגמישות, ולהגביר את תחושת החופש, היציבות והביטחון בגוף. מעבר לתנועה עצמה, פלדנקרייז היא דרך לפתח מודעות עמוקה יותר לעצמנו, לווסת את מערכת העצבים ולגלות אפשרויות חדשות להתנהלות רגועה, יעילה ונעימה יותר בחיי היומיום." },
      en: { title: "Feldenkrais", body: "The Feldenkrais Method invites the body and mind to learn anew — without effort, without pain, and out of curiosity and listening. Through gentle and precise movement sequences, the brain's natural ability to create new patterns awakens, releasing limiting habits and improving the quality of movement and function. The practice helps reduce pain and tension, improve balance, posture and flexibility, and increase the sense of freedom, stability and confidence in the body. Beyond movement itself, Feldenkrais is a way to develop deeper awareness of ourselves, to regulate the nervous system and discover new possibilities for calmer, more efficient and pleasant daily life." },
    },
    {
      he: { title: "יוגה רגישה", body: "יוגה רגישה היא גישה עדינה ומבוססת ידע עדכני על מערכת העצבים, טראומה וויסות רגשי. במקום לשאוף לביצוע מושלם של תנוחות, הדגש הוא על הקשבה לגוף, פיתוח תחושת ביטחון פנימית וחיזוק היכולת לזהות מה נכון עבורנו בכל רגע. באמצעות תנועה מודעת, נשימה, בחירה וקצב אישי, התרגול מסייע להפחית מתח, לשפר את הוויסות של מערכת העצבים ולהעמיק את תחושת הנוכחות והחיבור לעצמנו. יוגה רגישה מתאימה לכל מי שמחפש מרחב בטוח ומכיל לתרגול – בין אם מתוך התמודדות עם עומס, סטרס או טראומה, ובין אם מתוך רצון לטפח רווחה, חוסן ואיכות חיים." },
      en: { title: "Trauma-Sensitive Yoga", body: "Trauma-sensitive yoga is a gentle approach based on up-to-date knowledge of the nervous system, trauma and emotional regulation. Instead of striving for perfect execution of poses, the emphasis is on listening to the body, developing an inner sense of safety and strengthening the ability to identify what is right for us in each moment. Through mindful movement, breath, choice and personal pace, the practice helps reduce stress, improve nervous-system regulation and deepen the sense of presence and connection with ourselves. Trauma-sensitive yoga is suitable for anyone seeking a safe and containing space to practice — whether coping with overload, stress or trauma, or out of a desire to cultivate well-being, resilience and quality of life." },
    },
    {
      he: { title: "תנועה ספונטנית ואינטגרציה", body: "עבודה דרך תנועה חופשית ומונחית, המאפשרת ביטוי, עיבוד חוויה ואינטגרציה בין גוף, רגש ותודעה." },
      en: { title: "Spontaneous Movement & Integration", body: "Work through free and guided movement, allowing expression, processing of experience, and integration between body, emotion, and awareness." },
    },
  ],
  approachesBasedLabel: { he: "גישות העבודה מבוססות על", en: "Approaches are based on" },
  approachesBased: {
    he: [
      "הקשבה לגוף ולחוויה כפי שהיא מופיעה כאן ועכשיו",
      "קצב עבודה מותאם, ללא כפייה או מאמץ מיותר",
      "תהליך התפתחותי מבוסס התנסות ולא רק הבנה תאורטית",
      "חיבור בין חוויה גופנית לבין עיבוד והבנה",
      "חיזוק ויסות, יציבות ותחושת בטחון פנימי",
      "תהליך מדויק ופשוט המתהווה מתוך מה שנוכח",
    ],
    en: [
      "Listening to the body and experience as it appears here and now",
      "A pace adapted to you, without force or unnecessary effort",
      "A developmental process based on experience, not only theoretical understanding",
      "Connection between physical experience and processing/understanding",
      "Strengthening regulation, stability, and inner sense of safety",
      "A precise and simple process emerging from what is present",
    ],
  },
  guidanceTitle: { he: "הדרכה וליווי", en: "Guidance & Accompaniment" },
  guidanceIntro: {
    he: "הדרכה וליווי של מטפלים בתהליכי למידה, התפתחות והעמקה מקצועית.",
    en: "Guidance and accompaniment of therapists in learning, development, and professional deepening processes.",
  },
  guidance: {
    he: [
      "לימוד ועיגון תיאורטי של עבודה מבוססת גוף",
      "חקירה והעמקה של תהליכים קליניים",
      "הדרכה פרטנית וקבוצתית",
      "מנטורינג למטפלים בתחילת דרכם ובתהליכי התפתחות מקצועית",
    ],
    en: [
      "Learning and theoretical grounding of body-based work",
      "Exploration and deepening of clinical processes",
      "Individual and group supervision",
      "Mentoring for therapists at the beginning of their path and in professional development",
    ],
  },
  rehabTitle: { he: "ליווי תהליכי שיקום וכאב כרוני", en: "Rehabilitation & Chronic Pain" },
  rehabBody: {
    he: "ליווי תהליכי שיקום והתמודדות עם כאב כרוני, תוך עבודה מבוססת גוף המאפשרת חקירה של דפוסים תנועתיים, הפחתת עומס, חיזוק ויסות ושיפור איכות החיים.",
    en: "Accompaniment of rehabilitation processes and coping with chronic pain, through body-based work that allows exploration of movement patterns, reducing strain, strengthening regulation, and improving quality of life.",
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
  cvLink: { he: "קורות חיים", en: "Curriculum Vitae" },
};

const videos = [
  {
    videoId: "RUnk-txGc7Y",
    isShort: true,
    title_en: "Listening",
    title_he: "הקשבה",
    desc_en: "",
    desc_he: "",
  },
  {
    videoId: "KW3tgg9NRQU",
    isShort: true,
    title_en: "Learning",
    title_he: "למידה",
    desc_en: "",
    desc_he: "",
  },
  {
    videoId: "tWOz2OCQIZY",
    isShort: true,
    title_en: "Presence",
    title_he: "נוכחות",
    desc_en: "",
    desc_he: "",
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
          <div
            className="relative z-10 max-w-4xl mx-auto px-6 pt-16 sm:pt-24 text-center"
            style={{
              color: "#FDF6E3",
              background: "rgba(10,15,26,0.35)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              padding: "2rem 1.5rem",
            }}
          >
            <h1
              className="mb-4"
              style={{
                fontFamily: "var(--font-name)",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                lineHeight: 1.05,
                color: "var(--heading)",
                fontWeight: 700,
                textShadow: "0 2px 30px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)",
              }}
            >
            {tr(t.heroName)}
            </h1>
            <h2
              className="tracking-[0.08em]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                fontWeight: 500,
                color: "#FDF6E3",
                textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {tr(t.heroHeadline)}
            </h2>
            <h2
              className="mt-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 500,
                color: "#F4E8D0",
                textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {tr(t.heroSub)}
            </h2>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-4xl mx-auto px-6">
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
              style={{ color: "var(--heading)" }}
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
            src={aboutNew.url}
            alt="Yonit Yudelevich"
            className="w-full object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl mb-3">{tr(t.aboutTitle)}</h2>
            <AccentRule />
            <div className="h-6" />
            {(isHe ? t.aboutBody.he : t.aboutBody.en).map((p, i) => (
              <p key={i} className="mb-4" style={{ color: "var(--ink)" }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Poem — independent box below About */}
      <section className="py-20" style={{ background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="p-8 sm:p-12 text-center"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              fontFamily: "'Special Elite', 'Courier Prime', 'Courier New', monospace",
              color: "var(--ink)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            }}
          >
            {(() => {
              const poem = isHe ? t.poem.he : t.poem.en;
              return (
                <>
                  <h3 className="text-xl sm:text-2xl mb-6" style={{ color: "var(--heading)" }}>{poem.title}</h3>
                  <p className="text-base sm:text-lg leading-loose whitespace-pre-line">{poem.body}</p>
                  <div className="mt-8 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
                    <p className="text-sm sm:text-base" style={{ color: "var(--heading)" }}>— {poem.author}</p>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* How */}
      <section className="py-24" style={{ borderTop: "1px solid var(--line)", fontFamily: "Tinos, Georgia, serif" }}>
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>{isHe ? "תחילת דרך" : "Beginning"}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl text-center mb-3">{tr(t.howTitle)}</h2>
          <AccentRule center />
          <div className="h-10" />
          <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink)", whiteSpace: "pre-line" }}>
            {tr(t.howIntro)}
          </p>

          <SectionLabel>{isHe ? "גישות" : "Approaches"}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl text-center mb-3">{tr(t.approachesLabel)}</h2>
          <AccentRule center />
          <div className="h-10" />
          <div className="grid md:grid-cols-2 gap-6">
            {t.approaches.map((c, i) => {
              const card = isHe ? c.he : c.en;
              return (
                <div
                  key={i}
                  className="p-8 flex flex-col h-full"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                    minHeight: "220px",
                  }}
                >
                  <div className="w-10 h-[2px] mb-5" style={{ background: "var(--accent)" }} />
                  <h3 className="text-xl mb-3" style={{ fontFamily: "Tinos, Georgia, serif", color: "var(--heading)", fontWeight: 700 }}>{card.title}</h3>
                  <p className="leading-relaxed" style={{ fontFamily: "Tinos, Georgia, serif", color: "var(--ink)" }}>{card.body}</p>
                </div>
              );
            })}
          </div>

          <div className="h-20" />
          <SectionLabel>{isHe ? "ביסוס" : "Foundation"}</SectionLabel>
          <h2 className="text-2xl sm:text-3xl text-center mb-3">{tr(t.approachesBasedLabel)}</h2>
          <AccentRule center />
          <div className="h-10" />
          <ul className="space-y-4 max-w-3xl mx-auto" style={{ fontFamily: "Tinos, Georgia, serif" }}>
            {(isHe ? t.approachesBased.he : t.approachesBased.en).map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                <span className="text-lg" style={{ color: "var(--ink)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Guidance */}
      {/* Guidance + Rehab as matching cards */}
      <section className="py-24" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)", fontFamily: "Tinos, Georgia, serif" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-8 flex flex-col h-full"
              style={{ background: "var(--surface)", border: "1px solid var(--line)", minHeight: "260px" }}
            >
              <div className="w-10 h-[2px] mb-5" style={{ background: "var(--accent)" }} />
              <h3 className="text-xl mb-3" style={{ fontFamily: "Tinos, Georgia, serif", color: "var(--heading)", fontWeight: 700 }}>{tr(t.guidanceTitle)}</h3>
              <p className="mb-4 leading-relaxed" style={{ fontFamily: "Tinos, Georgia, serif", color: "var(--ink)" }}>{tr(t.guidanceIntro)}</p>
              <ul className="space-y-2">
                {(isHe ? t.guidance.he : t.guidance.en).map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                    <span style={{ color: "var(--ink)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-8 flex flex-col h-full"
              style={{ background: "var(--surface)", border: "1px solid var(--line)", minHeight: "260px" }}
            >
              <div className="w-10 h-[2px] mb-5" style={{ background: "var(--accent)" }} />
              <h3 className="text-xl mb-3" style={{ fontFamily: "Tinos, Georgia, serif", color: "var(--heading)", fontWeight: 700 }}>{tr(t.rehabTitle)}</h3>
              <p className="leading-relaxed" style={{ fontFamily: "Tinos, Georgia, serif", color: "var(--ink)" }}>{tr(t.rehabBody)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={contactPhoto.url}
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
            <p className="mb-10" style={{ color: "var(--ink)" }}>{tr(t.contactSub)}</p>
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

      <footer className="py-10 text-center" style={{ borderTop: "1px solid var(--line)" }}>
        <a
          href={cvAsset.url}
          target="_blank"
          rel="noreferrer"
          download
          className="inline-block mb-4 underline underline-offset-4 tracking-wider"
          style={{
            fontFamily: "'Courier Prime', 'Courier New', monospace",
            color: "var(--heading)",
            fontSize: "1rem",
          }}
        >
          {tr(t.cvLink)} ↓
        </a>
        <div className="text-xs" style={{ color: "var(--ink-soft)" }}>
          © {new Date().getFullYear()} Yonit Yudelevich
        </div>
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
      style={{ color: "var(--heading)" }}
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
      {desc ? (
        <p className="mt-2 text-sm" style={{ color: "var(--ink-soft)" }}>{desc}</p>
      ) : null}
    </div>
  );
}
