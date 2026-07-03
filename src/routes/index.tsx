import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import heroVideo from "../assets/hero-video.mp4.asset.json";
import cvAsset from "../assets/cv.doc.asset.json";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.978 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

const WHATSAPP_NUMBER = "972508937753";
const PHONE_DISPLAY = "+972 50-893-7753";
const PHONE_TEL = "+972508937753";
const EMAIL = "YonitYudelevich@gmail.com";

const t = {
  nav: { he: "צרי קשר", en: "Contact" },
  heroHeadline: { he: "טיפול בתנועה שיטת פלדנקרייז יוגה רגישה", en: "Movement Therapy, Feldenkrais Method, Trauma-Sensitive Yoga" },
  heroTopics: {
    he: ["טיפול בתנועה", "שיטת פלדנקרייז", "יוגה רגישה"],
    en: ["Movement Therapy", "Feldenkrais Method", "Trauma-Sensitive Yoga"],
  },
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
      "שמי יונית יודלביץ אסולין, מטפלת בתנועה (M.A.), מורה לפלדנקרייז ומנחת תהליכים מבוססי גוף, עם למעלה מ־25 שנות ניסיון בארץ ובעולם. עבודתי משלבת טיפול בתנועה, שיטת פלדנקרייז, יוגה רגישת טראומה, תנועה מודעת ומחול – עם יחידים וקבוצות כאחד.",
      "לאורך השנים ליוויתי ילדים, מתבגרים ומבוגרים שהתמודדו עם טראומה, כאב פיזי ורגשי ומעברי חיים, וכן אנשים שביקשו להעמיק את הקשר עם עצמם דרך תנועה. הגוף נושא בתוכו את סיפורנו – זיכרונות, דפוסים וכאב, אך גם חוסן ויכולת לריפוי. אנשים מגיעים לרוב מתוך כאב, סקרנות, או תחושה שמשהו מבקש להשתנות.",
      "התנועה הייתה תמיד השפה שלי להבנה וחיבור – דרך לפגוש את עצמי ואת העולם. זה מה שהוביל אותי להמשיך לחקור את הקשר בין גוף, נפש ותנועה, אישית ומקצועית.",
      "לצד הקליניקה הפרטית ועבודה קבוצתית, אני מלמדת ומדריכה מטפלים בעולם, כולל דרך קליניקה מקוונת שמאפשרת לי לעבוד עם אנשים מכל מקום. בואו כפי שאתם.",
    ],
    en: [
      "I'm Yonit Yudelevich Asulin, a movement therapist (M.A.), Feldenkrais teacher, and facilitator of body-based processes, with over 25 years of experience across Israel and around the world. My work combines movement therapy, the Feldenkrais Method, trauma-sensitive yoga, conscious movement, and dance — with individuals and groups alike.",
      "Over the years I've worked with children, adolescents, and adults facing trauma, physical and emotional pain, and life transitions, as well as people simply curious to deepen their connection with themselves through movement. The body holds our story — memories, patterns, and pain, but also resilience and the capacity to heal. People often arrive out of pain, curiosity, or a sense that something wants to change.",
      "Movement has always been my language for understanding and connection — a way to meet myself and the world. That's what led me to keep exploring the relationship between body, mind, and movement, both personally and professionally.",
      "Alongside my private practice and group work, I train and mentor therapists internationally, including through an online clinic that lets me work with people anywhere in the world. Come as you are.",
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
    he: "התהליך מתחיל בשיחת היכרות קצרה, שבה אנחנו מתמקדים יחד במה שמביא אותך ובהבנה של הצורך המרכזי שלך כאן ועכשיו. בהתאם לכך נבחרת גישה טיפולית אחת מתוך מספר דרכי עבודה מבוססות גוף.",
    en: "The process begins with a short introductory conversation, in which we focus together on what brings you here and on understanding your central need right now. Based on that, one therapeutic approach is chosen from several body-based ways of working.",
  },
  approachesLabel: { he: "גישות העבודה", en: "Approaches" },
  approaches: [
    {
      he: { title: "טיפול בתנועה", for: "מתאים ל: כאב כרוני · מתח · חרדה · חקירה עצמית", body: "גישה טיפולית מבוססת גוף ותנועה, המוכרת על ידי האיגוד האמריקאי לטיפול בתנועה (ADTA). העבודה נעשית דרך תנועה, קשר מילולי ולא־מילולי, ועיבוד חוויות רגשיות וגופניות בתוך מערכת יחסים טיפולית בטוחה. באמצעות הקשבה לאותות עדינים של הגוף ותרגומם לתנועה מודעת, הגישה מסייעת בשחרור מתחים כבושים, בבניית ביטוי עצמי אותנטי, ובחיזוק הקשר בין גוף, נפש ורגש." },
      en: { title: "Movement Therapy", for: "Good for: chronic pain · stress · anxiety · self-exploration", body: "A body- and movement-based therapeutic approach recognized by the American Dance Therapy Association (ADTA). The work unfolds through movement, verbal and non-verbal connection, and the ongoing processing of emotional and physical experience within a safe therapeutic relationship. By tuning into subtle bodily signals and translating them into conscious movement, this approach helps release held tension, build authentic self-expression, and strengthen the connection between body, mind, and emotion." },
    },
    {
      he: { title: "פלדנקרייז", for: "מתאים ל: יציבה · תנועה · כאב גב · הרגלים מגבילים", body: "שיטת פלדנקרייז מזמינה את הגוף והמוח ללמוד מחדש – ללא מאמץ, ללא כאב, מתוך סקרנות והקשבה. רצפי תנועה עדינים ומדויקים מעוררים את יכולת המוח ליצור דפוסים חדשים, לשחרר הרגלים מגבילים ולשפר את איכות התנועה. התרגול מקל על כאב ומתח, משפר שיווי משקל, יציבה וגמישות, ומחזק את תחושת החופש והביטחון בגוף. מעבר לתנועה עצמה, פלדנקרייז מעמיקה מודעות עצמית, מווסתת את מערכת העצבים, ופותחת אפשרויות חדשות לחיי יומיום רגועים יותר." },
      en: { title: "Feldenkrais", for: "Good for: posture · movement · back pain · limiting habits", body: "The Feldenkrais Method invites body and mind to learn anew — without effort, without pain, through curiosity and listening. Gentle, precise movement sequences awaken the brain's natural ability to form new patterns, releasing limiting habits and improving movement quality. The practice eases pain and tension, improves balance, posture and flexibility, and builds a stronger sense of freedom and stability in the body. Beyond movement itself, Feldenkrais deepens self-awareness, regulates the nervous system, and opens new possibilities for a calmer daily life." },
    },
    {
      he: { title: "יוגה רגישה", for: "מתאים ל: ויסות · טראומה · עומס נפשי · חוסן", body: "יוגה רגישת־טראומה היא גישה עדינה, מבוססת ידע עדכני על מערכת העצבים, טראומה ורגש. במקום לשאוף לביצוע מדויק של תנוחה, הדגש הוא על הקשבה לגוף, פיתוח תחושת ביטחון פנימית, וזיהוי מה שנכון עבורנו בכל רגע. באמצעות תנועה מודעת, נשימה, בחירה וקצב אישי, התרגול מסייע להפחתת מתח, לוויסות מערכת העצבים ולהעמקת תחושת הנוכחות והחיבור לעצמנו. מתאימה לכל מי שמחפש מרחב בטוח לתרגול – בין אם מתמודד עם עומס וסטרס, ובין אם מתוך רצון לטפח רווחה וחוסן." },
      en: { title: "Trauma-Sensitive Yoga", for: "Good for: regulation · trauma · emotional load · resilience", body: "Trauma-sensitive yoga is a gentle approach grounded in current understanding of the nervous system, trauma, and emotional regulation. Rather than striving for a perfect pose, the emphasis is on listening to the body, building an inner sense of safety, and identifying what feels right in each moment. Through mindful movement, breath, choice, and personal pace, the practice reduces stress, supports nervous-system regulation, and deepens presence and self-connection. It's suitable for anyone seeking a safe space to practice — whether coping with overload, or simply cultivating well-being." },
    },
    {
      he: { title: "תנועה ספונטנית ואינטגרציה", for: "מתאים ל: ביטוי אותנטי · שחרור רגשי · יצירתיות · חיבור לגוף", body: "עבודה דרך תנועה חופשית ומונחית, המאפשרת ביטוי אותנטי, עיבוד חוויה ואינטגרציה בין גוף, רגש ותודעה. במקום לעקוב אחר צורות קבועות, התנועה נובעת מהדחפים הפנימיים של האדם, וחושפת בהדרגה דפוסי מתח, רגשות לא מדוברים ומשאבים נשכחים. מרחב חקירה זה תומך בשחרור רגשי, בגילוי עצמי ובתחושת חיוניות מחודשת – ומסייע להתחבר מחדש לחוכמה ולקצב הטבעיים של הגוף, בקצב האישי של כל אחד." },
      en: { title: "Spontaneous Movement & Integration", for: "Good for: authentic expression · emotional release · creativity · body connection", body: "Work through free and guided movement that allows authentic expression, processing of experience, and integration between body, emotion, and awareness. Rather than following fixed forms, the movement arises from the individual's inner impulses, gradually revealing tension patterns, unspoken feelings, and forgotten resources. This space of exploration supports emotional release, self-discovery, and a renewed sense of aliveness — helping reconnect with the body's natural wisdom and rhythm, at each person's own pace." },
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
  contactWhatsappNote: {
    he: "אפשר גם ליצור קשר בוואטסאפ",
    en: "You can also reach me on WhatsApp",
  },
  contactPhoneLabel: { he: "טלפון", en: "Phone" },
  contactEmailLabel: { he: "אימייל", en: "Email" },
  logisticsTitle: { he: "פרטי מפגש", en: "Session Details" },
  logisticsFormat: { he: "פגישות פרטניות או קבוצתיות, פנים אל פנים או בזום", en: "Individual or group sessions, in-person or via Zoom" },
  logisticsLength: { he: "משך טיפולי אופייני: 45–60 דקות", en: "Typical session length: 45–60 minutes" },
  logisticsBooking: { he: "לתיאום: שלחי הודעת וואטסאפ או אימייל, ואחזור אלייך תוך 24 שעות", en: "To book: send a WhatsApp or email, and I'll reply within 24 hours" },
  trainingSectionTitle: { he: "הדרכה ומנטורינג למטפלים", en: "Training & Mentorship for Therapists" },
  trainingIntro: { he: "הדרכה וליווי מקצועי של מטפלים, מנחים ואנשי מקצוע בתחומי הגוף והנפש בתהליכי למידה, התפתחות והעמקה מקצועית.", en: "Professional guidance and accompaniment for therapists, facilitators, and body-mind professionals in learning, development, and professional deepening." },
  trainingFormat: { he: "פורמט: מפגשים פרטניים או קבוצתיים, פנים אל פנים או מקוונים", en: "Format: individual or group sessions, in-person or online" },
  trainingAudience: { he: "קהל יעד: מטפלים מוסמכים ואנשי מקצוע בתחומי הגוף-נפש", en: "Audience: licensed therapists and body-mind professionals" },
  trainingCta: { he: "לתיאום שיחת היכרות", en: "Schedule an introductory conversation" },
  whatsapp: { he: "צרי קשר ב-WhatsApp", en: "Message Me on WhatsApp" },
  whatsappMsg: {
    he: "היי יונית, הגעתי דרך האתר ואשמח לתאם שיחה קצרה כדי לבדוק אם זה מתאים לי.",
    en: "Hi Yonit, I came through your website and I'd love to schedule a short call to see if this is a good fit for me.",
  },
  cvLink: { he: "קורות חיים", en: "Curriculum Vitae" },
  navLinks: {
    he: [
      { id: "about", label: "מי אני" },
      { id: "how", label: "גישות העבודה" },
      { id: "videos", label: "וידאו" },
      { id: "contact", label: "צרי קשר" },
    ],
    en: [
      { id: "about", label: "About" },
      { id: "how", label: "Approaches" },
      { id: "videos", label: "Videos" },
      { id: "contact", label: "Contact" },
    ],
  },
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

const quotes: { he: { text: string; author: string }; en: { text: string; author: string } }[] = [
  {
    he: { text: "יונית היא מטפלת יוצאת דופן. העבודה איתה שינתה את הקשר שלי עם הגוף שלי.", author: "שם הממליץ/ה" },
    en: { text: "Yonit is an exceptional therapist. Working with her transformed my relationship with my body.", author: "Client name" },
  },
  {
    he: { text: "המרחב שיונית יוצרת הוא בטוח, עדין ומדויק. מומלץ בחום.", author: "שם הממליץ/ה" },
    en: { text: "The space Yonit creates is safe, gentle and precise. Highly recommended.", author: "Client name" },
  },
  {
    he: { text: "נוכחות רגישה, ידע עמוק, ולב פתוח — יונית נותנת יותר ממה שאפשר לתאר במילים.", author: "שם הממליץ/ה" },
    en: { text: "Sensitive presence, deep knowledge, and an open heart — Yonit gives more than words can describe.", author: "Client name" },
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("he");
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

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(tr(t.whatsappMsg))}`;

  return (
    <div dir={dir} className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Top toggles */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm" style={{ background: "color-mix(in oklab, var(--bg) 78%, transparent)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-4" style={{ color: "var(--ink)" }}>
          <a href="#top" onClick={scrollTo("top")} className="text-sm tracking-wide shrink-0" style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF", fontWeight: 700 }}>
            {tr(t.heroName)}
          </a>
          <nav className="hidden sm:flex items-center gap-5 text-sm" style={{ fontFamily: "var(--font-heading)" }}>
            {t.navLinks[lang].map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={scrollTo(l.id)}
                className="transition-colors hover:opacity-80"
                style={{ color: "var(--ink)", fontWeight: 600 }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative w-full pt-14">
        <div className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: "88vh" }}>
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
          {/* Dark overlay for legibility */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "rgba(14,8,23,0.55)",
            }}
          />
          <div
            className="relative z-20 max-w-4xl mx-auto px-6 text-center"
            style={{
              color: "var(--ink)",
              padding: "2rem 1.5rem",
            }}
          >
            <h1
              className="mb-6"
              style={{
                fontFamily: "var(--font-typewriter)",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
                lineHeight: 1.05,
                color: "var(--heading)",
                fontWeight: 400,
              }}
            >
            {tr(t.heroName)}
            </h1>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.25,
              }}
            >
              {tr(t.heroSub)}
            </h2>
            <p
              className="mt-5 tracking-[0.08em]"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                fontWeight: 400,
                color: "var(--ink-soft)",
              }}
            >
              {t.heroTopics[lang].join("  •  ")}
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-8 px-5 py-2 text-sm transition-colors"
              style={{
                background: "var(--accent-soft)",
                color: "var(--ink)",
                borderRadius: "6px",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--accent-ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent-soft)";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              <WhatsAppIcon size={16} />
              {tr(t.heroCta)}
            </a>
          </div>
        </div>
      </section>

      {/* Rehab + approaches principles */}
      <section className="py-20" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="text-xl mb-3" style={{ color: "var(--heading)", fontWeight: 700 }}>{tr(t.rehabTitle)}</h3>
            <p className="leading-relaxed" style={{ color: "var(--ink)" }}>{tr(t.rehabBody)}</p>
          </div>

          <div className="mt-16 max-w-3xl">
            <h3 className="text-xl mb-5" style={{ color: "var(--heading)", fontWeight: 700 }}>{tr(t.approachesLabel)}</h3>
            <ul className="space-y-4">
              {(isHe ? t.approachesBased.he : t.approachesBased.en).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                  <span className="text-lg" style={{ color: "var(--ink)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Quote data={isHe ? quotes[0].he : quotes[0].en} />

      {/* Poem */}
      <section className="py-20" style={{ background: "var(--bg)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          {(() => {
            const poem = isHe ? t.poem.he : t.poem.en;
            return (
              <>
                <h3 className="text-xl sm:text-2xl mb-6" style={{ color: "var(--heading)", fontFamily: "var(--font-typewriter)" }}>{poem.title}</h3>
                <p className="text-base sm:text-lg leading-loose whitespace-pre-line" style={{ fontFamily: "var(--font-typewriter)" }}>{poem.body}</p>
                <p className="mt-8 text-sm sm:text-base" style={{ color: "var(--heading)", fontFamily: "var(--font-typewriter)" }}>{poem.author}</p>
              </>
            );
          })()}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl mb-3">{tr(t.aboutTitle)}</h2>
          <div className="h-6" />
          <div className="w-full">
            {(isHe ? t.aboutBody.he : t.aboutBody.en).map((p, i) => (
              <p key={i} className="mb-4" style={{ color: "var(--ink)" }}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={cvAsset.url}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm transition-colors"
              style={{
                background: "var(--accent-soft)",
                color: "var(--ink)",
                borderRadius: "6px",
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "var(--accent-ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent-soft)";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              {tr(t.cvLink)} <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      <Quote data={isHe ? quotes[1].he : quotes[1].en} />

      {/* Videos */}
      <section id="videos" className="py-16" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl text-center mb-3">{tr(t.videosTitle)}</h2>
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

      <Quote data={isHe ? quotes[2].he : quotes[2].en} />

      {/* How */}
      <section id="how" className="py-24" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed" style={{ color: "var(--ink)", whiteSpace: "pre-line" }}>
            {tr(t.howIntro)}
          </p>

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
                  <h3 className="text-xl mb-2" style={{ color: "var(--heading)", fontWeight: 700 }}>{card.title}</h3>
                  <p className="text-sm mb-4" style={{ color: "var(--accent)", fontFamily: "var(--font-heading)", fontWeight: 500 }}>{card.for}</p>
                  <p className="leading-relaxed" style={{ color: "var(--ink)" }}>{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training & Mentorship */}
      <section id="training" className="py-24" style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl mb-4">{tr(t.trainingSectionTitle)}</h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--ink)" }}>{tr(t.trainingIntro)}</p>
            <div className="p-8" style={{ background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div className="space-y-4">
                <p className="leading-relaxed" style={{ color: "var(--ink)" }}>{tr(t.trainingFormat)}</p>
                <p className="leading-relaxed" style={{ color: "var(--ink)" }}>{tr(t.trainingAudience)}</p>
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-5 py-2 text-sm transition-colors"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--ink)",
                  borderRadius: "6px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent-ink)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--accent-soft)";
                  e.currentTarget.style.color = "var(--ink)";
                }}
              >
                <WhatsAppIcon size={16} />
                {tr(t.trainingCta)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl sm:text-4xl mb-10 text-center">{tr(t.contactTitle)}</h2>

          {/* Logistics + contact info */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="space-y-3 mb-12">
              <p className="leading-relaxed" style={{ color: "var(--ink)" }}>{tr(t.logisticsFormat)}</p>
              <p className="leading-relaxed" style={{ color: "var(--ink)" }}>{tr(t.logisticsLength)}</p>
              <p className="leading-relaxed" style={{ color: "var(--ink)" }}>{tr(t.logisticsBooking)}</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--ink-soft)" }}>{tr(t.contactPhoneLabel)}</div>
                <a href={`tel:${PHONE_TEL}`} className="text-xl" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)", direction: "ltr", display: "inline-block" }}>
                  {PHONE_DISPLAY}
                </a>
                <div className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>{tr(t.contactWhatsappNote)}</div>
                <div className="mt-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={tr(t.whatsapp)}
                    title={tr(t.whatsapp)}
                    className="inline-flex items-center justify-center transition-opacity hover:opacity-75"
                    style={{ color: "var(--accent)" }}
                  >
                    <WhatsAppIcon size={22} />
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--ink-soft)" }}>{tr(t.contactEmailLabel)}</div>
                <a href={`mailto:${EMAIL}`} className="text-xl break-all" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}>
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center" style={{ borderTop: "1px solid var(--line)" }}>
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

function Quote({ data }: { data: { text: string; author: string } }) {
  return (
    <section className="py-16" style={{ background: "var(--quote-bg)", borderTop: "1px solid var(--quote-border)", borderBottom: "1px solid var(--quote-border)" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p
          className="text-xl sm:text-2xl leading-relaxed"
          style={{ color: "#FFFFFF", fontFamily: "var(--font-typewriter)" }}
        >
          "{data.text}"
        </p>
        <p className="mt-6 text-sm tracking-widest uppercase" style={{ color: "var(--heading)", fontFamily: "var(--font-heading)" }}>
          — {data.author}
        </p>
      </div>
    </section>
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
