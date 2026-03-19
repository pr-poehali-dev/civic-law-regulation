import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/24002c41-dc3d-4e82-b6cb-2b88669c4b78/files/9fb5bbab-5b3c-41cc-8f97-575ccb6cda76.jpg";

// Light theme palette
const T = {
  bg: "#F7F8FC",
  card: "#FFFFFF",
  border: "#E2E6F0",
  text: "#1A1D2E",
  muted: "#6B7280",
  accent1: "#2563EB",   // blue
  accent2: "#D97706",   // amber
  accent3: "#DC2626",   // red
  accent4: "#7C3AED",   // violet
  accent5: "#059669",   // green
};

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "relevance" },
  { id: 3, type: "definition" },
  { id: 4, type: "principles" },
  { id: 5, type: "sources" },
  { id: 6, type: "subjects" },
  { id: 7, type: "objects" },
  { id: 8, type: "nonproperty" },
  { id: 9, type: "protection" },
  { id: 10, type: "timeline" },
  { id: 11, type: "conclusion" },
];

const slideNames: Record<string, string> = {
  title: "Титул",
  relevance: "Актуальность",
  definition: "Понятие",
  principles: "Принципы",
  sources: "Источники",
  subjects: "Субъекты",
  objects: "Объекты",
  nonproperty: "Неимущественные",
  protection: "Защита",
  timeline: "Шкала",
  conclusion: "Вывод",
};

function SlideHeader({ num, title, accent }: { num: string; title: string; accent: string }) {
  return (
    <div className="flex items-center gap-5 mb-6 flex-shrink-0">
      <div className="font-oswald text-7xl font-bold leading-none" style={{ color: accent, opacity: 0.12 }}>{num}</div>
      <div className="-ml-10">
        <h2 className="font-oswald text-3xl font-bold uppercase tracking-wide" style={{ color: T.text }}>{title}</h2>
        <div className="h-1 w-20 mt-1.5 rounded-full" style={{ background: accent }} />
      </div>
    </div>
  );
}

// ── Slide 1: Title ──────────────────────────────────────────────────────────
const SlideTitle = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
    <img src={HERO_IMG} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-10" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 50%, #F0FDF4 100%)" }} />
    {/* Geometric accents */}
    <div className="absolute top-6 left-6 w-36 h-36 border-2 rounded-3xl rotate-12" style={{ borderColor: `${T.accent1}20` }} />
    <div className="absolute bottom-10 right-10 w-52 h-52 border rounded-full" style={{ borderColor: `${T.accent2}20` }} />
    <div className="absolute top-1/3 right-20 w-16 h-16 rotate-45 rounded-xl" style={{ background: `${T.accent1}10` }} />
    <div className="absolute bottom-1/3 left-20 w-12 h-12 rounded-full" style={{ background: `${T.accent2}12` }} />

    <div className="relative z-10 text-center px-10 max-w-5xl">
      <h1 className="font-oswald font-bold leading-tight mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: T.text }}>
        ГРАЖДАНСКОЕ ПРАВО
      </h1>
      <div className="flex items-center justify-center gap-4 mb-3">
        <div className="h-0.5 flex-1 max-w-28 rounded-full" style={{ background: `linear-gradient(to right, transparent, ${T.accent2})` }} />
        <span className="font-montserrat font-semibold tracking-widest uppercase text-base" style={{ color: T.accent2 }}>как основа регулирования</span>
        <div className="h-0.5 flex-1 max-w-28 rounded-full" style={{ background: `linear-gradient(to left, transparent, ${T.accent2})` }} />
      </div>
      <h2 className="font-oswald font-light mb-12" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: T.accent1 }}>
        ЧАСТНЫХ ПРАВООТНОШЕНИЙ
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
        <div className="text-center px-6 py-3 rounded-2xl border" style={{ borderColor: T.border, background: "rgba(255,255,255,0.7)" }}>
          <p className="font-montserrat text-xs uppercase tracking-widest mb-1" style={{ color: T.muted }}>Авторы</p>
          <p className="font-montserrat font-semibold text-lg" style={{ color: T.text }}>Поваров М.К. · Исмазиева А.Г.</p>
        </div>
        <div className="w-px h-10 rounded-full hidden md:block" style={{ background: T.border }} />
        <div className="text-center px-6 py-3 rounded-2xl border" style={{ borderColor: T.border, background: "rgba(255,255,255,0.7)" }}>
          <p className="font-montserrat text-xs uppercase tracking-widest mb-1" style={{ color: T.muted }}>Научный руководитель</p>
          <p className="font-montserrat font-semibold text-lg" style={{ color: T.text }}>Шеремеев Е.Е.</p>
        </div>
        <div className="w-px h-10 rounded-full hidden md:block" style={{ background: T.border }} />
        <div className="text-center px-6 py-3 rounded-2xl border" style={{ borderColor: T.border, background: "rgba(255,255,255,0.7)" }}>
          <p className="font-montserrat text-xs uppercase tracking-widest mb-1" style={{ color: T.muted }}>Год</p>
          <p className="font-montserrat font-semibold text-lg" style={{ color: T.text }}>Самара · 2026</p>
        </div>
      </div>
    </div>
  </div>
);

// ── Slide 2: Relevance ──────────────────────────────────────────────────────
const SlideRelevance = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="01" title="Актуальность" accent={T.accent2} />
    <div className="flex-1 grid grid-cols-3 gap-5">
      {[
        { icon: "FileText", color: T.accent2, label: "Договоры", desc: "Регулирует все виды соглашений между людьми и организациями" },
        { icon: "Home", color: T.accent1, label: "Имущество", desc: "Права на недвижимость, деньги и ценные бумаги" },
        { icon: "Shield", color: T.accent3, label: "Защита", desc: "Честь, достоинство и деловая репутация" },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center justify-center p-8 rounded-2xl border" style={{ borderColor: `${item.color}25`, background: `${item.color}07` }}>
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${item.color}15`, border: `2px solid ${item.color}30` }}>
            <Icon name={item.icon} size={34} style={{ color: item.color }} />
          </div>
          <h3 className="font-oswald text-2xl uppercase tracking-wide mb-2" style={{ color: T.text }}>{item.label}</h3>
          <p className="font-montserrat text-base text-center leading-relaxed" style={{ color: T.muted }}>{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-5 p-5 rounded-2xl border flex items-center gap-4" style={{ borderColor: `${T.accent2}30`, background: `${T.accent2}08` }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${T.accent2}20` }}>
        <Icon name="TrendingUp" size={24} style={{ color: T.accent2 }} />
      </div>
      <p className="font-montserrat text-base" style={{ color: T.text }}>
        Гражданское право обеспечивает <span className="font-bold" style={{ color: T.accent2 }}>правовую стабильность, свободный экономический оборот</span> и защиту прав личности
      </p>
    </div>
  </div>
);

// ── Slide 3: Definition ─────────────────────────────────────────────────────
const SlideDefinition = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="02" title="Понятие" accent={T.accent1} />
    <div className="flex-1 flex flex-row gap-8 items-center">
      <div className="flex-1 flex flex-col justify-center gap-5">
        <div className="relative p-7 rounded-2xl border-2" style={{ borderColor: `${T.accent1}40`, background: T.card }}>
          <div className="absolute -top-4 left-6 px-4 py-1 rounded-full border-2" style={{ background: T.card, borderColor: `${T.accent1}40` }}>
            <span className="font-oswald text-sm tracking-widest uppercase" style={{ color: T.accent1 }}>Определение</span>
          </div>
          <p className="font-oswald text-2xl leading-snug" style={{ color: T.text }}>
            Отрасль права, регулирующая <span style={{ color: T.accent1 }}>частные отношения</span> на основе юридического равенства участников
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Имущественные отношения", color: T.accent2, icon: "Wallet" },
            { label: "Неимущественные отношения", color: T.accent3, icon: "Heart" },
          ].map((item) => (
            <div key={item.label} className="p-5 rounded-2xl border flex items-center gap-4" style={{ borderColor: `${item.color}25`, background: `${item.color}08` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}20` }}>
                <Icon name={item.icon} size={22} style={{ color: item.color }} />
              </div>
              <span className="font-montserrat font-semibold text-base" style={{ color: T.text }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Radial diagram */}
      <div className="flex items-center justify-center flex-shrink-0">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: `${T.accent2}20` }} />
          <div className="absolute inset-8 rounded-full border" style={{ borderColor: `${T.accent1}25` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center" style={{ background: `linear-gradient(135deg, ${T.accent1}, ${T.accent2})` }}>
              <span className="font-oswald text-white text-xs font-bold leading-tight uppercase px-2">Гражданское право</span>
            </div>
          </div>
          {[
            { label: "Граждане", angle: -70, color: T.accent2 },
            { label: "Организации", angle: 50, color: T.accent1 },
            { label: "Государство", angle: 180, color: T.accent3 },
          ].map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(rad);
            const y = 50 + 42 * Math.sin(rad);
            return (
              <div key={p.label} className="absolute transform -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full border-2 font-montserrat text-sm font-bold whitespace-nowrap"
                style={{ left: `${x}%`, top: `${y}%`, borderColor: `${p.color}50`, background: `${p.color}12`, color: p.color }}>
                {p.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

// ── Slide 4: Principles ─────────────────────────────────────────────────────
const SlidePrinciples = () => {
  const principles = [
    { num: "1", title: "Равенство сторон", icon: "Scale", color: T.accent2, desc: "Нет привилегированных участников" },
    { num: "2", title: "Свобода договора", icon: "FileSignature", color: T.accent1, desc: "Стороны сами определяют условия" },
    { num: "3", title: "Неприкосновенность", icon: "Lock", color: T.accent3, desc: "Запрет произвольного вмешательства" },
    { num: "4", title: "Защита прав", icon: "Shield", color: T.accent4, desc: "Гарантированное восстановление прав" },
  ];
  return (
    <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
      <SlideHeader num="03" title="Принципы" accent={T.accent4} />
      <div className="flex-1 grid grid-cols-2 gap-5">
        {principles.map((p) => (
          <div key={p.num} className="relative flex items-start gap-5 p-7 rounded-2xl border overflow-hidden" style={{ borderColor: `${p.color}25`, background: T.card }}>
            <div className="absolute top-0 right-2 text-[120px] font-oswald font-bold leading-none select-none" style={{ color: `${p.color}08` }}>
              {p.num}
            </div>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}15`, border: `2px solid ${p.color}30` }}>
              <Icon name={p.icon} size={26} style={{ color: p.color }} />
            </div>
            <div>
              <h3 className="font-oswald text-2xl uppercase tracking-wide mb-1" style={{ color: T.text }}>{p.title}</h3>
              <p className="font-montserrat text-base" style={{ color: T.muted }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Slide 5: Sources ────────────────────────────────────────────────────────
const SlideSources = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="04" title="Источники права" accent={T.accent2} />
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 w-full max-w-2xl">
        {[
          { label: "Гражданский кодекс РФ", width: "w-full max-w-sm", color: T.accent2, textSize: "text-xl" },
          { label: "Федеральные законы", width: "w-4/5 max-w-xs", color: T.accent1, textSize: "text-lg" },
          { label: "Подзаконные акты", width: "w-3/5 max-w-56", color: T.accent4, textSize: "text-base" },
          { label: "Судебная практика", width: "w-2/5 max-w-44", color: T.accent3, textSize: "text-base" },
          { label: "Договоры", width: "w-1/3 max-w-36", color: T.accent5, textSize: "text-sm" },
        ].map((item, i) => (
          <div key={i} className={`${item.width} h-14 flex items-center justify-center rounded-xl border-2 font-montserrat font-bold transition-all hover:scale-105 cursor-default ${item.textSize}`}
            style={{ borderColor: `${item.color}40`, background: `${item.color}10`, color: item.color }}>
            {item.label}
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <Icon name="ArrowDown" size={16} style={{ color: T.muted }} />
          <span className="font-montserrat text-sm uppercase tracking-widest" style={{ color: T.muted }}>По юридической силе</span>
          <Icon name="ArrowDown" size={16} style={{ color: T.muted }} />
        </div>
      </div>
    </div>
  </div>
);

// ── Slide 6: Subjects ───────────────────────────────────────────────────────
const SlideSubjects = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="05" title="Субъекты" accent={T.accent1} />
    <div className="flex-1 grid grid-cols-3 gap-5">
      {[
        { title: "Физические лица", color: T.accent1, icon: "User", items: ["Граждане РФ", "Иностранные граждане", "Лица без гражданства"] },
        { title: "Юридические лица", color: T.accent2, icon: "Building2", items: ["Коммерческие организации", "Некоммерческие организации", "Учреждения"] },
        { title: "Публичные образования", color: T.accent3, icon: "Landmark", items: ["Российская Федерация", "Субъекты РФ", "Муниципальные образования"] },
      ].map((s) => (
        <div key={s.title} className="flex flex-col rounded-2xl overflow-hidden border-2" style={{ borderColor: `${s.color}25` }}>
          <div className="flex items-center gap-3 px-5 py-4" style={{ background: `${s.color}12` }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${s.color}25` }}>
              <Icon name={s.icon} size={22} style={{ color: s.color }} />
            </div>
            <h3 className="font-oswald text-lg uppercase tracking-wide" style={{ color: T.text }}>{s.title}</h3>
          </div>
          <div className="flex-1 p-5 space-y-3" style={{ background: T.card }}>
            {s.items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                <span className="font-montserrat text-base" style={{ color: T.text }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-3 gap-4">
      {[
        { label: "Правоспособность", desc: "с рождения", color: T.accent1 },
        { label: "Дееспособность", desc: "с 18 лет (частично с 14)", color: T.accent2 },
        { label: "Деликтоспособность", desc: "ответственность за вред", color: T.accent3 },
      ].map((tag) => (
        <div key={tag.label} className="flex items-center gap-3 p-4 rounded-xl border-2" style={{ background: `${tag.color}08`, borderColor: `${tag.color}25` }}>
          <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: tag.color }} />
          <div>
            <p className="font-montserrat font-bold text-sm" style={{ color: T.text }}>{tag.label}</p>
            <p className="font-montserrat text-xs" style={{ color: T.muted }}>{tag.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Slide 7: Objects ────────────────────────────────────────────────────────
const SlideObjects = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="06" title="Объекты гражданского права" accent={T.accent4} />
    <div className="flex-1 grid grid-cols-2 gap-5">
      {[
        { title: "Имущество", color: T.accent2, icon: "Package", items: ["Недвижимость", "Движимые вещи", "Деньги и ценные бумаги"] },
        { title: "Имущественные права", color: T.accent1, icon: "Key", items: ["Обязательственные права", "Вещные права", "Доли в капитале"] },
        { title: "Интеллектуальные права", color: T.accent4, icon: "Lightbulb", items: ["Изобретения", "Авторские произведения", "Товарные знаки"] },
        { title: "Нематериальные блага", color: T.accent3, icon: "Heart", items: ["Честь и достоинство", "Деловая репутация", "Неприкосновенность жизни"] },
      ].map((obj) => (
        <div key={obj.title} className="flex items-start gap-5 p-6 rounded-2xl border-2" style={{ background: T.card, borderColor: `${obj.color}25` }}>
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${obj.color}15`, border: `2px solid ${obj.color}30` }}>
            <Icon name={obj.icon} size={26} style={{ color: obj.color }} />
          </div>
          <div>
            <h3 className="font-oswald text-xl uppercase tracking-wide mb-3" style={{ color: T.text }}>{obj.title}</h3>
            <div className="space-y-2">
              {obj.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: obj.color }} />
                  <span className="font-montserrat text-base" style={{ color: T.muted }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Slide 8: Non-property rights ────────────────────────────────────────────
const SlideNonProperty = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="07" title="Личные неимущественные права" accent={T.accent3} />
    <div className="flex-1 flex flex-row gap-8 items-center">
      {/* Radial diagram */}
      <div className="flex items-center justify-center flex-shrink-0">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle, ${T.accent3}08 0%, transparent 70%)`, border: `2px solid ${T.accent3}15` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-center" style={{ background: `linear-gradient(135deg, ${T.accent3}90, ${T.accent4}90)` }}>
              <span className="font-oswald text-white text-xs font-bold uppercase leading-tight px-2">Личность</span>
            </div>
          </div>
          {[
            { label: "Имя", angle: 0, color: T.accent3 },
            { label: "Честь", angle: 60, color: T.accent2 },
            { label: "Достоинство", angle: 120, color: T.accent4 },
            { label: "Репутация", angle: 180, color: T.accent1 },
            { label: "Частная жизнь", angle: 240, color: T.accent5 },
            { label: "Защита от клеветы", angle: 300, color: T.accent3 },
          ].map((item) => {
            const rad = (item.angle * Math.PI) / 180;
            const x = 50 + 44 * Math.cos(rad);
            const y = 50 + 44 * Math.sin(rad);
            return (
              <div key={item.label} className="absolute transform -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full border-2 font-montserrat text-xs font-bold whitespace-nowrap"
                style={{ left: `${x}%`, top: `${y}%`, borderColor: `${item.color}50`, background: `${item.color}12`, color: item.color }}>
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 space-y-5">
        {[
          { icon: "User", color: T.accent3, title: "Неотчуждаемы", desc: "Нельзя передать, продать или ограничить" },
          { icon: "Infinity", color: T.accent2, title: "Бессрочны", desc: "Защищаются даже после смерти гражданина" },
          { icon: "Globe", color: T.accent4, title: "Универсальны", desc: "Принадлежат каждому от рождения" },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-5 p-6 rounded-2xl border-2" style={{ background: T.card, borderColor: `${item.color}25` }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
              <Icon name={item.icon} size={26} style={{ color: item.color }} />
            </div>
            <div>
              <h3 className="font-oswald text-2xl uppercase tracking-wide" style={{ color: T.text }}>{item.title}</h3>
              <p className="font-montserrat text-base" style={{ color: T.muted }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Slide 9: Protection ─────────────────────────────────────────────────────
const SlideProtection = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="08" title="Способы защиты прав" accent={T.accent5} />
    <div className="flex-1 flex flex-col justify-center gap-4">
      <div className="flex justify-center">
        <div className="px-7 py-3 rounded-2xl border-2 font-oswald text-xl uppercase tracking-wide" style={{ borderColor: `${T.accent3}40`, background: `${T.accent3}10`, color: T.accent3 }}>
          Нарушение права
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-0.5 h-6 rounded-full" style={{ background: T.border }} />
      </div>
      <div className="grid grid-cols-3 gap-5 w-full">
        {[
          { method: "Судебная защита", icon: "Gavel", color: T.accent2, steps: ["Подача иска в суд", "Судебное разбирательство", "Исполнение решения"] },
          { method: "Самозащита", icon: "Shield", color: T.accent1, steps: ["Соразмерна нарушению", "Без обращения в суд", "Необходима реальная угроза"] },
          { method: "Защита 3-х лиц", icon: "Users", color: T.accent4, steps: ["Охрана интересов других", "Представительство", "Прокурор · Омбудсмен"] },
        ].map((branch) => (
          <div key={branch.method} className="flex flex-col rounded-2xl overflow-hidden border-2" style={{ borderColor: `${branch.color}30` }}>
            <div className="flex items-center gap-3 px-5 py-4" style={{ background: `${branch.color}12` }}>
              <Icon name={branch.icon} size={22} style={{ color: branch.color }} />
              <span className="font-oswald text-lg uppercase tracking-wide" style={{ color: T.text }}>{branch.method}</span>
            </div>
            <div className="p-5 space-y-3" style={{ background: T.card }}>
              {branch.steps.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 font-montserrat" style={{ background: `${branch.color}20`, color: branch.color }}>
                    {i + 1}
                  </div>
                  <span className="font-montserrat text-base" style={{ color: T.text }}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Slide 10: Timeline ──────────────────────────────────────────────────────
const SlideTimeline = () => (
  <div className="w-full h-full flex flex-col p-10" style={{ background: T.bg }}>
    <SlideHeader num="09" title="Временная шкала ГК РФ" accent={T.accent2} />
    <div className="flex-1 flex flex-col justify-center relative px-4">
      <div className="absolute left-8 right-8 h-1 top-1/2 -translate-y-1/2 rounded-full" style={{ background: `linear-gradient(to right, ${T.accent2}, ${T.accent1}, ${T.accent4})` }} />
      <div className="flex justify-between items-center relative">
        {[
          { year: "1994", color: T.accent2, label: "Часть I", sub: "Общие положения, субъекты, объекты" },
          { year: "1996", color: T.accent1, label: "Часть II", sub: "Отдельные виды обязательств" },
          { year: "2001", color: T.accent4, label: "Часть III", sub: "Наследственное право, МЧП" },
          { year: "2006", color: T.accent3, label: "Часть IV", sub: "Интеллектуальные права" },
          { year: "2012+", color: T.accent5, label: "Реформы", sub: "Модернизация корпоративного права" },
        ].map((item, i) => (
          <div key={item.year} className={`flex flex-col items-center gap-3 ${i % 2 === 0 ? "" : "flex-col-reverse"}`}>
            <div className={`text-center max-w-32 ${i % 2 !== 0 ? "mb-6" : "mt-6"}`}>
              <p className="font-oswald font-bold text-base uppercase tracking-wide" style={{ color: item.color }}>{item.label}</p>
              <p className="font-montserrat text-sm mt-0.5 leading-tight" style={{ color: T.muted }}>{item.sub}</p>
            </div>
            <div className="w-5 h-5 rounded-full border-3 z-10" style={{ borderColor: item.color, background: `${item.color}25`, borderWidth: 3 }} />
            <div className="px-4 py-1.5 rounded-full border-2 font-oswald font-bold text-base" style={{ borderColor: `${item.color}50`, color: item.color, background: `${item.color}12` }}>
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Slide 11: Conclusion ────────────────────────────────────────────────────
const SlideConclusion = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #DBEAFE 50%, #F0FDF4 100%)" }}>
    <div className="absolute top-10 left-10 w-28 h-28 border-2 rounded-3xl rotate-12" style={{ borderColor: `${T.accent1}20` }} />
    <div className="absolute bottom-12 right-12 w-40 h-40 border rounded-full" style={{ borderColor: `${T.accent2}20` }} />

    <div className="relative z-10 text-center px-8 max-w-4xl">
      <div className="grid grid-cols-3 gap-5 mb-10">
        {[
          { icon: "Scale", color: T.accent2, label: "Правовая стабильность" },
          { icon: "TrendingUp", color: T.accent1, label: "Экономический оборот" },
          { icon: "Shield", color: T.accent4, label: "Защита личности" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2" style={{ background: "rgba(255,255,255,0.8)", borderColor: `${item.color}25` }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${item.color}15`, border: `2px solid ${item.color}30` }}>
              <Icon name={item.icon} size={26} style={{ color: item.color }} />
            </div>
            <span className="font-oswald text-lg uppercase tracking-wide text-center" style={{ color: T.text }}>{item.label}</span>
          </div>
        ))}
      </div>

      <h2 className="font-oswald font-bold leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: T.text }}>
        ГРАЖДАНСКОЕ ПРАВО —{" "}
        <span style={{ background: `linear-gradient(to right, ${T.accent1}, ${T.accent2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ФУНДАМЕНТ ОБЩЕСТВА
        </span>
      </h2>

      <div className="flex flex-col items-center gap-1">
        <p className="font-montserrat text-base font-semibold" style={{ color: T.text }}>Поваров М.К. · Исмазиева А.Г.</p>
        <p className="font-montserrat text-sm" style={{ color: T.muted }}>Науч. рук.: Шеремеев Е.Е. · Самара · 2026</p>
      </div>
    </div>
  </div>
);

// ── Slide map ────────────────────────────────────────────────────────────────
const slideComponents: Record<string, React.FC> = {
  title: SlideTitle,
  relevance: SlideRelevance,
  definition: SlideDefinition,
  principles: SlidePrinciples,
  sources: SlideSources,
  subjects: SlideSubjects,
  objects: SlideObjects,
  nonproperty: SlideNonProperty,
  protection: SlideProtection,
  timeline: SlideTimeline,
  conclusion: SlideConclusion,
};

// ── Main ─────────────────────────────────────────────────────────────────────
const Index = () => {
  const [current, setCurrent] = useState(0);
  const goTo = (idx: number) => { if (idx >= 0 && idx < slides.length) setCurrent(idx); };
  const SlideComponent = slideComponents[slides[current].type];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: "#E8EBF4", fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        @media (max-width: 768px) { .slide-16-9 { aspect-ratio: auto; height: 100vh; } }
      `}</style>

      {/* 16:9 slide container */}
      <div className="w-full" style={{ maxWidth: "min(95vw, calc(95vh * 16/9))" }}>
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9", border: `1px solid ${T.border}` }}>
          <SlideComponent />
        </div>

        {/* Navigation */}
        <div className="mt-4 flex items-center gap-3 px-1">
          <button onClick={() => goTo(current - 1)} disabled={current === 0}
            className="w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-30 hover:shadow-md"
            style={{ borderColor: T.border, background: T.card, color: T.text }}>
            <Icon name="ChevronLeft" size={18} />
          </button>

          <div className="flex-1 flex gap-1.5 overflow-x-auto">
            {slides.map((slide, idx) => (
              <button key={slide.id} onClick={() => goTo(idx)}
                className="flex-shrink-0 px-3 py-1.5 rounded-lg font-montserrat text-xs font-medium transition-all"
                style={idx === current
                  ? { background: T.accent1, color: "#fff" }
                  : { background: T.card, color: T.muted, border: `1px solid ${T.border}` }}>
                {slideNames[slide.type]}
              </button>
            ))}
          </div>

          <button onClick={() => goTo(current + 1)} disabled={current === slides.length - 1}
            className="w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all flex-shrink-0 disabled:opacity-30 hover:shadow-md"
            style={{ borderColor: T.border, background: T.card, color: T.text }}>
            <Icon name="ChevronRight" size={18} />
          </button>

          <div className="flex-shrink-0 font-montserrat text-sm ml-1" style={{ color: T.muted }}>
            {current + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
