import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/24002c41-dc3d-4e82-b6cb-2b88669c4b78/files/9fb5bbab-5b3c-41cc-8f97-575ccb6cda76.jpg";

const T = {
  bg: "#F4F6FB",
  card: "#FFFFFF",
  border: "#DDE2EF",
  text: "#111827",
  muted: "#5B6472",
  a1: "#2563EB",
  a2: "#D97706",
  a3: "#DC2626",
  a4: "#7C3AED",
  a5: "#059669",
};

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "title2" },
  { id: 3, type: "relevance" },
  { id: 4, type: "definition" },
  { id: 5, type: "principles" },
  { id: 6, type: "sources" },
  { id: 7, type: "subjects" },
  { id: 8, type: "objects" },
  { id: 9, type: "nonproperty" },
  { id: 10, type: "protection" },
  { id: 11, type: "timeline" },
  { id: 12, type: "conclusion" },
];

const slideNames: Record<string, string> = {
  title: "Титул 1", title2: "Титул 2", relevance: "Актуальность", definition: "Понятие",
  principles: "Принципы", sources: "Источники", subjects: "Субъекты",
  objects: "Объекты", nonproperty: "Неимущественные", protection: "Защита",
  timeline: "Шкала", conclusion: "Вывод",
};

// Compact header — меньше места тратит
function H({ num, title, accent }: { num: string; title: string; accent: string }) {
  return (
    <div className="flex items-center gap-3 flex-shrink-0" style={{ marginBottom: "3%" }}>
      <div className="font-oswald font-bold leading-none select-none" style={{ fontSize: "5vw", color: accent, opacity: 0.1 }}>{num}</div>
      <div style={{ marginLeft: "-3%" }}>
        <h2 className="font-oswald font-bold uppercase tracking-wide" style={{ fontSize: "2.4vw", color: T.text, lineHeight: 1.1 }}>{title}</h2>
        <div style={{ height: 4, width: "5vw", marginTop: 4, borderRadius: 4, background: accent }} />
      </div>
    </div>
  );
}

// ── Slide 1: Title ───────────────────────────────────────────────────────────
const SlideTitle = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
    <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.08 }} />
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#EEF2FF 0%,#DBEAFE 55%,#ECFDF5 100%)" }} />
    <div className="absolute" style={{ top: "5%", left: "4%", width: "18%", aspectRatio: "1", border: `2px solid ${T.a1}18`, borderRadius: "24%", transform: "rotate(15deg)" }} />
    <div className="absolute" style={{ bottom: "8%", right: "5%", width: "24%", aspectRatio: "1", border: `1px solid ${T.a2}18`, borderRadius: "50%" }} />
    <div className="absolute" style={{ top: "35%", right: "12%", width: "8%", aspectRatio: "1", background: `${T.a1}0E`, borderRadius: "30%", transform: "rotate(45deg)" }} />

    <div className="relative z-10 text-center" style={{ padding: "0 8%" }}>
      <h1 className="font-oswald font-bold" style={{ fontSize: "clamp(2.2rem,6vw,5rem)", color: T.text, lineHeight: 1.05, marginBottom: "1%" }}>
        ГРАЖДАНСКОЕ ПРАВО
      </h1>
      <div className="flex items-center justify-center gap-3" style={{ marginBottom: "1%" }}>
        <div style={{ height: 2, flex: 1, maxWidth: "10%", borderRadius: 2, background: `linear-gradient(to right,transparent,${T.a2})` }} />
        <span className="font-montserrat font-semibold uppercase tracking-widest" style={{ fontSize: "clamp(0.75rem,1.4vw,1.1rem)", color: T.a2 }}>как основа регулирования</span>
        <div style={{ height: 2, flex: 1, maxWidth: "10%", borderRadius: 2, background: `linear-gradient(to left,transparent,${T.a2})` }} />
      </div>
      <h2 className="font-oswald font-light" style={{ fontSize: "clamp(1.3rem,3.5vw,3rem)", color: T.a1, marginBottom: "5%" }}>
        ЧАСТНЫХ ПРАВООТНОШЕНИЙ
      </h2>
      <div className="flex items-center justify-center gap-0">
        {[
          { label: "Авторы", value: "Поваров М.К. · Исмазиева А.Г." },
          null,
          { label: "Научный руководитель", value: "Шеремеев Е.Е." },
          null,
          { label: "Место и год", value: "Самара · 2026" },
        ].map((item, i) =>
          item === null
            ? <div key={i} style={{ width: 1, height: "4vw", background: T.border, margin: "0 2vw" }} />
            : (
              <div key={i} className="text-center" style={{ padding: "1.2vw 2vw", background: "rgba(255,255,255,0.75)", border: `1px solid ${T.border}`, borderRadius: "1vw" }}>
                <p className="font-montserrat uppercase tracking-widest" style={{ fontSize: "clamp(0.55rem,0.8vw,0.75rem)", color: T.muted, marginBottom: 4 }}>{item.label}</p>
                <p className="font-montserrat font-bold" style={{ fontSize: "clamp(0.85rem,1.5vw,1.25rem)", color: T.text }}>{item.value}</p>
              </div>
            )
        )}
      </div>
    </div>
  </div>
);

// ── Slide 1b: Title (один автор) ─────────────────────────────────────────────
const SlideTitle2 = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
    <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.08 }} />
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,#EEF2FF 0%,#DBEAFE 55%,#ECFDF5 100%)" }} />
    <div className="absolute" style={{ top: "5%", left: "4%", width: "18%", aspectRatio: "1", border: `2px solid ${T.a1}18`, borderRadius: "24%", transform: "rotate(15deg)" }} />
    <div className="absolute" style={{ bottom: "8%", right: "5%", width: "24%", aspectRatio: "1", border: `1px solid ${T.a2}18`, borderRadius: "50%" }} />
    <div className="absolute" style={{ top: "35%", right: "12%", width: "8%", aspectRatio: "1", background: `${T.a1}0E`, borderRadius: "30%", transform: "rotate(45deg)" }} />

    <div className="relative z-10 text-center" style={{ padding: "0 8%" }}>
      <h1 className="font-oswald font-bold" style={{ fontSize: "clamp(2.2rem,6vw,5rem)", color: T.text, lineHeight: 1.05, marginBottom: "1%" }}>
        ГРАЖДАНСКОЕ ПРАВО
      </h1>
      <div className="flex items-center justify-center gap-3" style={{ marginBottom: "1%" }}>
        <div style={{ height: 2, flex: 1, maxWidth: "10%", borderRadius: 2, background: `linear-gradient(to right,transparent,${T.a2})` }} />
        <span className="font-montserrat font-semibold uppercase tracking-widest" style={{ fontSize: "clamp(0.75rem,1.4vw,1.1rem)", color: T.a2 }}>как основа регулирования</span>
        <div style={{ height: 2, flex: 1, maxWidth: "10%", borderRadius: 2, background: `linear-gradient(to left,transparent,${T.a2})` }} />
      </div>
      <h2 className="font-oswald font-light" style={{ fontSize: "clamp(1.3rem,3.5vw,3rem)", color: T.a1, marginBottom: "5%" }}>
        ЧАСТНЫХ ПРАВООТНОШЕНИЙ
      </h2>
      <div className="flex items-center justify-center gap-0">
        {[
          { label: "Автор", value: "Поваров М.К." },
          null,
          { label: "Научный руководитель", value: "Шеремеев Е.Е." },
          null,
          { label: "Место и год", value: "Самара · 2026" },
        ].map((item, i) =>
          item === null
            ? <div key={i} style={{ width: 1, height: "4vw", background: T.border, margin: "0 2vw" }} />
            : (
              <div key={i} className="text-center" style={{ padding: "1.2vw 2vw", background: "rgba(255,255,255,0.75)", border: `1px solid ${T.border}`, borderRadius: "1vw" }}>
                <p className="font-montserrat uppercase tracking-widest" style={{ fontSize: "clamp(0.55rem,0.8vw,0.75rem)", color: T.muted, marginBottom: 4 }}>{item.label}</p>
                <p className="font-montserrat font-bold" style={{ fontSize: "clamp(0.85rem,1.5vw,1.25rem)", color: T.text }}>{item.value}</p>
              </div>
            )
        )}
      </div>
    </div>
  </div>
);

// ── Slide 2: Relevance ───────────────────────────────────────────────────────
const SlideRelevance = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="01" title="Актуальность" accent={T.a2} />
    <div className="flex-1 grid grid-cols-3 gap-4">
      {[
        { icon: "FileText", color: T.a2, label: "Договоры", desc: "Регулирует все виды соглашений между людьми и организациями" },
        { icon: "Home", color: T.a1, label: "Имущество", desc: "Права на недвижимость, деньги и ценные бумаги" },
        { icon: "Shield", color: T.a3, label: "Защита", desc: "Честь, достоинство и деловая репутация" },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center justify-center rounded-2xl" style={{ border: `2px solid ${item.color}20`, background: `${item.color}07`, padding: "4% 5%" }}>
          <div className="flex items-center justify-center rounded-2xl" style={{ width: "22%", aspectRatio: "1", background: `${item.color}18`, border: `2px solid ${item.color}35`, marginBottom: "6%" }}>
            <Icon name={item.icon} size={36} style={{ color: item.color }} />
          </div>
          <h3 className="font-oswald uppercase tracking-wide text-center" style={{ fontSize: "2.2vw", color: T.text, marginBottom: "3%" }}>{item.label}</h3>
          <p className="font-montserrat text-center leading-snug" style={{ fontSize: "1.3vw", color: T.muted }}>{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="flex items-center gap-4 rounded-2xl" style={{ marginTop: "3%", padding: "2.5% 3%", border: `2px solid ${T.a2}25`, background: `${T.a2}09` }}>
      <div className="flex items-center justify-center flex-shrink-0 rounded-xl" style={{ width: "4vw", height: "4vw", background: `${T.a2}22` }}>
        <Icon name="TrendingUp" size={28} style={{ color: T.a2 }} />
      </div>
      <p className="font-montserrat" style={{ fontSize: "1.4vw", color: T.text }}>
        Гражданское право обеспечивает <strong style={{ color: T.a2 }}>правовую стабильность, свободный экономический оборот</strong> и защиту прав личности
      </p>
    </div>
  </div>
);

// ── Slide 3: Definition ──────────────────────────────────────────────────────
const SlideDefinition = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="02" title="Понятие гражданского права" accent={T.a1} />
    <div className="flex-1 flex flex-row gap-6 items-stretch">
      <div className="flex flex-col gap-4" style={{ flex: "1.1" }}>
        <div className="relative rounded-2xl" style={{ border: `2px solid ${T.a1}40`, background: T.card, padding: "5% 6%", flex: 1 }}>
          <div className="absolute rounded-full" style={{ top: "-1.4vw", left: "1.5vw", padding: "0.3vw 1.2vw", background: T.card, border: `2px solid ${T.a1}40` }}>
            <span className="font-oswald uppercase tracking-widest" style={{ fontSize: "1vw", color: T.a1 }}>Определение</span>
          </div>
          <p className="font-oswald" style={{ fontSize: "2vw", color: T.text, lineHeight: 1.4 }}>
            Отрасль права, регулирующая <span style={{ color: T.a1 }}>частные отношения</span> на основе юридического равенства участников
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Имущественные отношения", color: T.a2, icon: "Wallet" },
            { label: "Неимущественные отношения", color: T.a3, icon: "Heart" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 rounded-2xl" style={{ padding: "4% 5%", border: `2px solid ${item.color}25`, background: `${item.color}09` }}>
              <div className="flex items-center justify-center flex-shrink-0 rounded-xl" style={{ width: "3.5vw", height: "3.5vw", background: `${item.color}22` }}>
                <Icon name={item.icon} size={24} style={{ color: item.color }} />
              </div>
              <span className="font-montserrat font-bold" style={{ fontSize: "1.3vw", color: T.text }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Big radial diagram */}
      <div className="flex items-center justify-center flex-shrink-0" style={{ flex: 0.9 }}>
        <div className="relative" style={{ width: "90%", aspectRatio: "1" }}>
          <div className="absolute inset-0 rounded-full" style={{ border: `3px solid ${T.a2}20` }} />
          <div className="absolute rounded-full" style={{ inset: "12%", border: `2px solid ${T.a1}25` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center text-center rounded-full" style={{ width: "34%", aspectRatio: "1", background: `linear-gradient(135deg,${T.a1},${T.a2})` }}>
              <span className="font-oswald text-white font-bold uppercase leading-tight" style={{ fontSize: "1.1vw", padding: "0 8%" }}>Гражданское<br />право</span>
            </div>
          </div>
          {[
            { label: "Граждане", angle: -70, color: T.a2 },
            { label: "Организации", angle: 50, color: T.a1 },
            { label: "Государство", angle: 180, color: T.a3 },
          ].map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const x = 50 + 43 * Math.cos(rad);
            const y = 50 + 43 * Math.sin(rad);
            return (
              <div key={p.label} className="absolute font-montserrat font-bold whitespace-nowrap rounded-full" style={{
                left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)",
                fontSize: "1.3vw", padding: "0.5vw 1.2vw",
                border: `2px solid ${p.color}55`, background: `${p.color}14`, color: p.color
              }}>
                {p.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

// ── Slide 4: Principles ──────────────────────────────────────────────────────
const SlidePrinciples = () => {
  const principles = [
    { num: "1", title: "Равенство сторон", icon: "Scale", color: T.a2, desc: "Ни одна сторона не получает преимуществ по умолчанию" },
    { num: "2", title: "Свобода договора", icon: "FileSignature", color: T.a1, desc: "Стороны сами определяют условия соглашения" },
    { num: "3", title: "Неприкосновенность", icon: "Lock", color: T.a3, desc: "Запрет произвольного вмешательства в частные дела" },
    { num: "4", title: "Защита прав", icon: "Shield", color: T.a4, desc: "Гарантированное восстановление нарушенных прав" },
  ];
  return (
    <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
      <H num="03" title="Принципы гражданского права" accent={T.a4} />
      <div className="flex-1 grid grid-cols-2 gap-4">
        {principles.map((p) => (
          <div key={p.num} className="relative flex items-center gap-5 rounded-2xl overflow-hidden" style={{ border: `2px solid ${p.color}22`, background: T.card, padding: "0 6%" }}>
            <div className="absolute top-0 right-0 font-oswald font-bold select-none leading-none" style={{ fontSize: "12vw", color: `${p.color}07` }}>{p.num}</div>
            <div className="flex items-center justify-center flex-shrink-0 rounded-2xl" style={{ width: "5.5vw", height: "5.5vw", background: `${p.color}15`, border: `2px solid ${p.color}35` }}>
              <Icon name={p.icon} size={32} style={{ color: p.color }} />
            </div>
            <div>
              <h3 className="font-oswald uppercase tracking-wide" style={{ fontSize: "2.2vw", color: T.text, marginBottom: "2%" }}>{p.title}</h3>
              <p className="font-montserrat" style={{ fontSize: "1.35vw", color: T.muted, lineHeight: 1.4 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Slide 5: Sources ─────────────────────────────────────────────────────────
const SlideSources = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="04" title="Источники права" accent={T.a2} />
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center w-full" style={{ gap: "2.2%" }}>
        {[
          { label: "Гражданский кодекс РФ", pct: "80%", color: T.a2 },
          { label: "Федеральные законы", pct: "65%", color: T.a1 },
          { label: "Подзаконные акты", pct: "52%", color: T.a4 },
          { label: "Судебная практика", pct: "40%", color: T.a3 },
          { label: "Договоры", pct: "30%", color: T.a5 },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-center rounded-xl font-montserrat font-bold"
            style={{ width: item.pct, padding: "2% 0", border: `2px solid ${item.color}40`, background: `${item.color}12`, color: item.color, fontSize: `${1.8 - i * 0.15}vw`, transition: "all 0.2s" }}>
            {item.label}
          </div>
        ))}
        <div className="flex items-center gap-2" style={{ marginTop: "2%" }}>
          <Icon name="ArrowDown" size={20} style={{ color: T.muted }} />
          <span className="font-montserrat uppercase tracking-widest" style={{ fontSize: "1.1vw", color: T.muted }}>По убыванию юридической силы</span>
          <Icon name="ArrowDown" size={20} style={{ color: T.muted }} />
        </div>
      </div>
    </div>
  </div>
);

// ── Slide 6: Subjects ────────────────────────────────────────────────────────
const SlideSubjects = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="05" title="Субъекты" accent={T.a1} />
    <div className="grid grid-cols-3 gap-4" style={{ flex: 1.4 }}>
      {[
        { title: "Физические лица", color: T.a1, icon: "User", items: ["Граждане РФ", "Иностранные граждане", "Лица без гражданства"] },
        { title: "Юридические лица", color: T.a2, icon: "Building2", items: ["Коммерческие организации", "Некоммерческие организации", "Учреждения"] },
        { title: "Публичные образования", color: T.a3, icon: "Landmark", items: ["Российская Федерация", "Субъекты РФ", "Муниципальные образования"] },
      ].map((s) => (
        <div key={s.title} className="flex flex-col rounded-2xl overflow-hidden" style={{ border: `2px solid ${s.color}25` }}>
          <div className="flex items-center gap-3" style={{ background: `${s.color}14`, padding: "4% 5%" }}>
            <div className="flex items-center justify-center flex-shrink-0 rounded-xl" style={{ width: "3.5vw", height: "3.5vw", background: `${s.color}28` }}>
              <Icon name={s.icon} size={22} style={{ color: s.color }} />
            </div>
            <h3 className="font-oswald uppercase tracking-wide" style={{ fontSize: "1.6vw", color: T.text }}>{s.title}</h3>
          </div>
          <div className="flex flex-col justify-center flex-1" style={{ background: T.card, padding: "4% 5%", gap: "1vw" }}>
            {s.items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-full" style={{ width: "0.7vw", height: "0.7vw", background: s.color }} />
                <span className="font-montserrat" style={{ fontSize: "1.35vw", color: T.text }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-4" style={{ marginTop: "3%", flex: 0.5 }}>
      {[
        { label: "Правоспособность", desc: "с рождения", color: T.a1 },
        { label: "Дееспособность", desc: "с 18 лет (частично с 14)", color: T.a2 },
        { label: "Деликтоспособность", desc: "ответственность за вред", color: T.a3 },
      ].map((tag) => (
        <div key={tag.label} className="flex items-center gap-3 rounded-xl" style={{ padding: "3% 4%", background: `${tag.color}09`, border: `2px solid ${tag.color}25` }}>
          <div className="flex-shrink-0 rounded-full" style={{ width: "0.9vw", height: "0.9vw", background: tag.color }} />
          <div>
            <p className="font-montserrat font-bold" style={{ fontSize: "1.25vw", color: T.text }}>{tag.label}</p>
            <p className="font-montserrat" style={{ fontSize: "1.05vw", color: T.muted }}>{tag.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Slide 7: Objects ─────────────────────────────────────────────────────────
const SlideObjects = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="06" title="Объекты гражданского права" accent={T.a4} />
    <div className="flex-1 grid grid-cols-2 gap-4">
      {[
        { title: "Имущество", color: T.a2, icon: "Package", items: ["Недвижимость", "Движимые вещи", "Деньги и ценные бумаги"] },
        { title: "Имущественные права", color: T.a1, icon: "Key", items: ["Обязательственные права", "Вещные права", "Доли в капитале"] },
        { title: "Интеллектуальные права", color: T.a4, icon: "Lightbulb", items: ["Изобретения", "Авторские произведения", "Товарные знаки"] },
        { title: "Нематериальные блага", color: T.a3, icon: "Heart", items: ["Честь и достоинство", "Деловая репутация", "Неприкосновенность жизни"] },
      ].map((obj) => (
        <div key={obj.title} className="flex items-center gap-5 rounded-2xl" style={{ border: `2px solid ${obj.color}22`, background: T.card, padding: "0 5%" }}>
          <div className="flex items-center justify-center flex-shrink-0 rounded-2xl" style={{ width: "5.5vw", height: "5.5vw", background: `${obj.color}15`, border: `2px solid ${obj.color}30` }}>
            <Icon name={obj.icon} size={30} style={{ color: obj.color }} />
          </div>
          <div>
            <h3 className="font-oswald uppercase tracking-wide" style={{ fontSize: "1.8vw", color: T.text, marginBottom: "3%" }}>{obj.title}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7vw" }}>
              {obj.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="flex-shrink-0 rounded-full" style={{ width: "0.6vw", height: "0.6vw", background: obj.color }} />
                  <span className="font-montserrat" style={{ fontSize: "1.3vw", color: T.muted }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Slide 8: Non-property ────────────────────────────────────────────────────
const SlideNonProperty = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="07" title="Личные неимущественные права" accent={T.a3} />
    <div className="flex-1 flex flex-row gap-6 items-center">
      {/* Radial diagram — bigger */}
      <div className="flex items-center justify-center flex-shrink-0" style={{ flex: 1 }}>
        <div className="relative" style={{ width: "90%", aspectRatio: "1" }}>
          <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle,${T.a3}07 0%,transparent 70%)`, border: `3px solid ${T.a3}15` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center text-center rounded-full" style={{ width: "32%", aspectRatio: "1", background: `linear-gradient(135deg,${T.a3}CC,${T.a4}CC)` }}>
              <span className="font-oswald text-white font-bold uppercase leading-tight" style={{ fontSize: "1.1vw" }}>Личность</span>
            </div>
          </div>
          {[
            { label: "Имя", angle: 0, color: T.a3 },
            { label: "Честь", angle: 60, color: T.a2 },
            { label: "Достоинство", angle: 120, color: T.a4 },
            { label: "Репутация", angle: 180, color: T.a1 },
            { label: "Частная жизнь", angle: 240, color: T.a5 },
            { label: "Защита от клеветы", angle: 300, color: T.a3 },
          ].map((item) => {
            const rad = (item.angle * Math.PI) / 180;
            const x = 50 + 44 * Math.cos(rad);
            const y = 50 + 44 * Math.sin(rad);
            return (
              <div key={item.label} className="absolute font-montserrat font-bold whitespace-nowrap rounded-full"
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", fontSize: "1.2vw", padding: "0.5vw 1.1vw", border: `2px solid ${item.color}50`, background: `${item.color}13`, color: item.color }}>
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4" style={{ flex: 1 }}>
        {[
          { icon: "User", color: T.a3, title: "Неотчуждаемы", desc: "Нельзя передать, продать или ограничить договором" },
          { icon: "Infinity", color: T.a2, title: "Бессрочны", desc: "Защищаются даже после смерти гражданина" },
          { icon: "Globe", color: T.a4, title: "Универсальны", desc: "Принадлежат каждому человеку от рождения" },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-5 rounded-2xl" style={{ background: T.card, border: `2px solid ${item.color}22`, padding: "4% 5%", flex: 1 }}>
            <div className="flex items-center justify-center flex-shrink-0 rounded-2xl" style={{ width: "5vw", height: "5vw", background: `${item.color}15` }}>
              <Icon name={item.icon} size={28} style={{ color: item.color }} />
            </div>
            <div>
              <h3 className="font-oswald uppercase tracking-wide" style={{ fontSize: "2vw", color: T.text, marginBottom: "2%" }}>{item.title}</h3>
              <p className="font-montserrat" style={{ fontSize: "1.3vw", color: T.muted, lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Slide 9: Protection ──────────────────────────────────────────────────────
const SlideProtection = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="08" title="Способы защиты прав" accent={T.a5} />
    <div className="flex-1 flex flex-col justify-center gap-3">
      <div className="flex justify-center">
        <div className="font-oswald uppercase tracking-wide rounded-2xl" style={{ fontSize: "1.8vw", padding: "1.5% 5%", border: `2px solid ${T.a3}45`, background: `${T.a3}12`, color: T.a3 }}>
          Нарушение права
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ width: 2, height: "3vw", background: T.border, borderRadius: 2 }} />
      </div>
      <div className="grid grid-cols-3 gap-4" style={{ flex: 1 }}>
        {[
          { method: "Судебная защита", icon: "Gavel", color: T.a2, steps: ["Подача иска в суд", "Судебное разбирательство", "Исполнение решения"] },
          { method: "Самозащита", icon: "Shield", color: T.a1, steps: ["Соразмерна нарушению", "Без обращения в суд", "Реальная угроза"] },
          { method: "Защита 3-х лиц", icon: "Users", color: T.a4, steps: ["Охрана интересов других", "Представительство", "Прокурор · Омбудсмен"] },
        ].map((branch) => (
          <div key={branch.method} className="flex flex-col rounded-2xl overflow-hidden" style={{ border: `2px solid ${branch.color}30` }}>
            <div className="flex items-center gap-3" style={{ background: `${branch.color}14`, padding: "4% 5%" }}>
              <Icon name={branch.icon} size={24} style={{ color: branch.color }} />
              <span className="font-oswald uppercase tracking-wide" style={{ fontSize: "1.6vw", color: T.text }}>{branch.method}</span>
            </div>
            <div className="flex flex-col justify-center flex-1" style={{ background: T.card, padding: "4% 5%", gap: "1.2vw" }}>
              {branch.steps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="flex items-center justify-center flex-shrink-0 rounded-full font-montserrat font-bold" style={{ width: "2.2vw", height: "2.2vw", background: `${branch.color}22`, color: branch.color, fontSize: "1vw" }}>
                    {i + 1}
                  </div>
                  <span className="font-montserrat" style={{ fontSize: "1.3vw", color: T.text }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Slide 10: Timeline ───────────────────────────────────────────────────────
const SlideTimeline = () => (
  <div className="w-full h-full flex flex-col" style={{ background: T.bg, padding: "4% 5% 3%" }}>
    <H num="09" title="Временная шкала ГК РФ" accent={T.a2} />
    <div className="flex-1 flex flex-col justify-center relative" style={{ paddingLeft: "2%", paddingRight: "2%" }}>
      {/* Horizontal line */}
      <div className="absolute" style={{ left: "4%", right: "4%", top: "50%", height: 5, borderRadius: 4, background: `linear-gradient(to right,${T.a2},${T.a1},${T.a4})`, transform: "translateY(-50%)" }} />
      <div className="flex justify-between items-center relative">
        {[
          { year: "1994", color: T.a2, label: "Часть I", sub: "Общие положения\nСубъекты · Объекты" },
          { year: "1996", color: T.a1, label: "Часть II", sub: "Отдельные виды\nобязательств" },
          { year: "2001", color: T.a4, label: "Часть III", sub: "Наследственное право\nМеждународное ЧП" },
          { year: "2006", color: T.a3, label: "Часть IV", sub: "Интеллектуальные\nправа" },
          { year: "2012+", color: T.a5, label: "Реформы", sub: "Модернизация\nкорпоративного права" },
        ].map((item, i) => (
          <div key={item.year} className="flex flex-col items-center" style={{ gap: "2vw" }}>
            {/* Top text — odd items */}
            <div className="text-center" style={{ visibility: i % 2 === 0 ? "hidden" : "visible", minHeight: "7vw" }}>
              <p className="font-oswald font-bold uppercase" style={{ fontSize: "1.5vw", color: item.color }}>{item.label}</p>
              <p className="font-montserrat" style={{ fontSize: "1.1vw", color: T.muted, lineHeight: 1.4, whiteSpace: "pre-line" }}>{item.sub}</p>
            </div>
            {/* Dot + year */}
            <div className="flex flex-col items-center gap-1">
              <div className="rounded-full" style={{ width: "1.6vw", height: "1.6vw", border: `3px solid ${item.color}`, background: `${item.color}25`, zIndex: 2 }} />
              <div className="font-oswald font-bold rounded-full" style={{ fontSize: "1.4vw", padding: "0.4vw 1.2vw", border: `2px solid ${item.color}50`, color: item.color, background: `${item.color}12` }}>
                {item.year}
              </div>
            </div>
            {/* Bottom text — even items */}
            <div className="text-center" style={{ visibility: i % 2 !== 0 ? "hidden" : "visible", minHeight: "7vw" }}>
              <p className="font-oswald font-bold uppercase" style={{ fontSize: "1.5vw", color: item.color }}>{item.label}</p>
              <p className="font-montserrat" style={{ fontSize: "1.1vw", color: T.muted, lineHeight: 1.4, whiteSpace: "pre-line" }}>{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Slide 11: Conclusion ─────────────────────────────────────────────────────
const SlideConclusion = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg,#EEF2FF 0%,#DBEAFE 55%,#ECFDF5 100%)" }}>
    <div className="absolute" style={{ top: "8%", left: "5%", width: "18%", aspectRatio: "1", border: `2px solid ${T.a1}18`, borderRadius: "24%", transform: "rotate(15deg)" }} />
    <div className="absolute" style={{ bottom: "10%", right: "6%", width: "22%", aspectRatio: "1", border: `1px solid ${T.a2}18`, borderRadius: "50%" }} />
    <div className="relative z-10 text-center" style={{ padding: "0 6%", width: "100%" }}>
      <div className="grid grid-cols-3" style={{ gap: "2%", marginBottom: "4%" }}>
        {[
          { icon: "Scale", color: T.a2, label: "Правовая стабильность" },
          { icon: "TrendingUp", color: T.a1, label: "Экономический оборот" },
          { icon: "Shield", color: T.a4, label: "Защита личности" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center rounded-2xl" style={{ gap: "3%", padding: "4% 5%", background: "rgba(255,255,255,0.8)", border: `2px solid ${item.color}25` }}>
            <div className="flex items-center justify-center rounded-2xl" style={{ width: "4.5vw", height: "4.5vw", background: `${item.color}18`, border: `2px solid ${item.color}35` }}>
              <Icon name={item.icon} size={28} style={{ color: item.color }} />
            </div>
            <span className="font-oswald uppercase tracking-wide text-center" style={{ fontSize: "1.7vw", color: T.text }}>{item.label}</span>
          </div>
        ))}
      </div>
      <h2 className="font-oswald font-bold" style={{ fontSize: "clamp(1.8rem,4.5vw,4rem)", color: T.text, lineHeight: 1.1, marginBottom: "3%" }}>
        ГРАЖДАНСКОЕ ПРАВО —{" "}
        <span style={{ background: `linear-gradient(to right,${T.a1},${T.a2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ФУНДАМЕНТ ОБЩЕСТВА
        </span>
      </h2>
      <p className="font-montserrat font-bold" style={{ fontSize: "1.5vw", color: T.text }}>Поваров М.К. · Исмазиева А.Г.</p>
      <p className="font-montserrat" style={{ fontSize: "1.2vw", color: T.muted, marginTop: "0.5%" }}>Науч. рук.: Шеремеев Е.Е. · Самара · 2026</p>
    </div>
  </div>
);

// ── Slide map ────────────────────────────────────────────────────────────────
const slideComponents: Record<string, React.FC> = {
  title: SlideTitle, title2: SlideTitle2, relevance: SlideRelevance, definition: SlideDefinition,
  principles: SlidePrinciples, sources: SlideSources, subjects: SlideSubjects,
  objects: SlideObjects, nonproperty: SlideNonProperty, protection: SlideProtection,
  timeline: SlideTimeline, conclusion: SlideConclusion,
};

// ── Main ─────────────────────────────────────────────────────────────────────
const Index = () => {
  const [current, setCurrent] = useState(0);
  const goTo = (idx: number) => { if (idx >= 0 && idx < slides.length) setCurrent(idx); };
  const SlideComponent = slideComponents[slides[current].type];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#D8DCE8", padding: "1.5%", fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`.font-oswald{font-family:'Oswald',sans-serif}.font-montserrat{font-family:'Montserrat',sans-serif}`}</style>

      {/* 16:9 slide */}
      <div style={{ width: "100%", maxWidth: "min(98vw, calc(90vh * 16/9))" }}>
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", border: `1px solid ${T.border}`, boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
          <SlideComponent />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2" style={{ marginTop: "1%", padding: "0 0.5%" }}>
          <button onClick={() => goTo(current - 1)} disabled={current === 0}
            className="flex items-center justify-center rounded-xl transition-all disabled:opacity-30"
            style={{ width: "3.5vw", height: "2.2vw", minWidth: 36, minHeight: 28, background: T.card, border: `1px solid ${T.border}`, color: T.text, cursor: "pointer" }}>
            <Icon name="ChevronLeft" size={18} />
          </button>
          <div className="flex gap-1.5 overflow-x-auto flex-1">
            {slides.map((slide, idx) => (
              <button key={slide.id} onClick={() => goTo(idx)}
                className="flex-shrink-0 font-montserrat font-medium rounded-lg transition-all"
                style={{ padding: "0.4vw 1vw", fontSize: "clamp(0.6rem,1vw,0.85rem)", cursor: "pointer",
                  background: idx === current ? T.a1 : T.card,
                  color: idx === current ? "#fff" : T.muted,
                  border: `1px solid ${idx === current ? T.a1 : T.border}` }}>
                {slideNames[slide.type]}
              </button>
            ))}
          </div>
          <button onClick={() => goTo(current + 1)} disabled={current === slides.length - 1}
            className="flex items-center justify-center rounded-xl transition-all disabled:opacity-30"
            style={{ width: "3.5vw", height: "2.2vw", minWidth: 36, minHeight: 28, background: T.card, border: `1px solid ${T.border}`, color: T.text, cursor: "pointer" }}>
            <Icon name="ChevronRight" size={18} />
          </button>
          <span className="font-montserrat" style={{ fontSize: "clamp(0.65rem,1vw,0.85rem)", color: T.muted, flexShrink: 0 }}>
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;