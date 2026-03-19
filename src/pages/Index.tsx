import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/24002c41-dc3d-4e82-b6cb-2b88669c4b78/files/9fb5bbab-5b3c-41cc-8f97-575ccb6cda76.jpg";

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

const SlideTitle = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
    <img src={HERO_IMG} alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0d1540]/90 to-[#050818]" />
    {/* Geometric accents */}
    <div className="absolute top-8 left-8 w-32 h-32 border-2 border-[#FFD700]/30 rotate-45" />
    <div className="absolute bottom-12 right-12 w-48 h-48 border border-[#00D4FF]/20 rotate-12" />
    <div className="absolute top-1/4 right-16 w-20 h-20 bg-[#FFD700]/10 rotate-45" />
    <div className="absolute bottom-1/4 left-16 w-16 h-16 bg-[#00D4FF]/10 rounded-full" />

    <div className="relative z-10 text-center px-8 max-w-5xl">
      <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-[#FFD700]/40 rounded-full">
        <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
        <span className="font-montserrat text-[#FFD700] text-sm font-medium tracking-widest uppercase">Научная конференция · Самара · 2026</span>
      </div>
      <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
        ГРАЖДАНСКОЕ ПРАВО
      </h1>
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#FFD700]" />
        <span className="font-montserrat text-[#FFD700] text-sm tracking-widest uppercase">как основа регулирования</span>
        <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#FFD700]" />
      </div>
      <h2 className="font-oswald text-3xl md:text-4xl font-light text-[#00D4FF] mb-12">
        ЧАСТНЫХ ПРАВООТНОШЕНИЙ
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
        <div className="text-center">
          <p className="font-montserrat text-white/60 text-xs uppercase tracking-widest mb-1">Авторы</p>
          <p className="font-montserrat text-white font-medium">Поваров М.К. · Исмазиева А.Г.</p>
        </div>
        <div className="w-px h-10 bg-white/20 hidden md:block" />
        <div className="text-center">
          <p className="font-montserrat text-white/60 text-xs uppercase tracking-widest mb-1">Научный руководитель</p>
          <p className="font-montserrat text-white font-medium">Шеремеев Е.Е.</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideRelevance = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="01" title="Актуальность" accent="#FFD700" />
    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {[
        { icon: "FileText", color: "#FFD700", label: "Договоры", desc: "Регулирует все виды соглашений между людьми и организациями" },
        { icon: "Home", color: "#00D4FF", label: "Имущество", desc: "Права на недвижимость, деньги и ценности" },
        { icon: "Shield", color: "#FF6B6B", label: "Защита", desc: "Честь, достоинство, деловая репутация" },
      ].map((item) => (
        <div key={item.label} className="relative flex flex-col items-center justify-center p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/8 transition-all group">
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)` }} />
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
            <Icon name={item.icon} size={28} style={{ color: item.color }} />
          </div>
          <h3 className="font-oswald text-xl text-white mb-2 uppercase tracking-wide">{item.label}</h3>
          <p className="font-montserrat text-white/50 text-sm text-center leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-6 p-5 rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
        <Icon name="TrendingUp" size={20} style={{ color: "#FFD700" }} />
      </div>
      <p className="font-montserrat text-white/70 text-sm">Гражданское право обеспечивает <span className="text-[#FFD700] font-semibold">правовую стабильность, свободный экономический оборот</span> и защиту прав личности</p>
    </div>
  </div>
);

const SlideDefinition = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="02" title="Понятие" accent="#00D4FF" />
    <div className="flex-1 flex flex-col md:flex-row gap-8 mt-8">
      <div className="flex-1 flex flex-col justify-center">
        <div className="relative p-8 rounded-2xl border border-[#00D4FF]/30 bg-[#00D4FF]/5 mb-6">
          <div className="absolute -top-3 left-6 px-3 py-1 bg-[#0a0e27] border border-[#00D4FF]/40 rounded-full">
            <span className="font-oswald text-[#00D4FF] text-xs tracking-widest uppercase">Определение</span>
          </div>
          <p className="font-oswald text-2xl text-white leading-relaxed">
            Гражданское право — отрасль права, регулирующая <span className="text-[#00D4FF]">частные отношения</span> на основе равенства участников
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Имущественные", color: "#FFD700", icon: "Wallet" },
            { label: "Неимущественные", color: "#FF6B6B", icon: "Heart" },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl border flex items-center gap-3" style={{ borderColor: `${item.color}30`, background: `${item.color}08` }}>
              <Icon name={item.icon} size={20} style={{ color: item.color }} />
              <span className="font-montserrat text-white/80 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Diagram */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 rounded-full border-2 border-[#FFD700]/20 flex items-center justify-center">
            <div className="absolute inset-8 rounded-full border border-[#00D4FF]/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700] to-[#00D4FF] flex items-center justify-center">
                <span className="font-oswald text-[#0a0e27] text-xs font-bold text-center leading-tight uppercase">Гражданское право</span>
              </div>
            </div>
          </div>
          {[
            { label: "Граждане", angle: -60, color: "#FFD700" },
            { label: "Организации", angle: 60, color: "#00D4FF" },
            { label: "Государство", angle: 180, color: "#FF6B6B" },
          ].map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const x = 50 + 42 * Math.cos(rad);
            const y = 50 + 42 * Math.sin(rad);
            return (
              <div key={p.label} className="absolute transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border font-montserrat text-xs font-semibold whitespace-nowrap"
                style={{ left: `${x}%`, top: `${y}%`, borderColor: `${p.color}60`, background: `${p.color}15`, color: p.color }}>
                {p.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const SlidePrinciples = () => {
  const principles = [
    { num: "1", title: "Равенство сторон", icon: "Scale", color: "#FFD700", desc: "Нет привилегированных участников" },
    { num: "2", title: "Свобода договора", icon: "FileSignature", color: "#00D4FF", desc: "Стороны сами определяют условия" },
    { num: "3", title: "Неприкосновенность", icon: "Lock", color: "#FF6B6B", desc: "Запрет произвольного вмешательства" },
    { num: "4", title: "Защита прав", icon: "Shield", color: "#A78BFA", desc: "Гарантированное восстановление прав" },
  ];
  return (
    <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
      <SlideHeader num="03" title="Принципы" accent="#A78BFA" />
      <div className="flex-1 grid grid-cols-2 gap-5 mt-8">
        {principles.map((p) => (
          <div key={p.num} className="relative flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/3 overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute top-0 right-0 text-[120px] font-oswald font-bold leading-none opacity-5" style={{ color: p.color }}>
              {p.num}
            </div>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}20`, border: `1px solid ${p.color}40` }}>
              <Icon name={p.icon} size={22} style={{ color: p.color }} />
            </div>
            <div>
              <h3 className="font-oswald text-lg text-white uppercase tracking-wide mb-1">{p.title}</h3>
              <p className="font-montserrat text-white/50 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SlideSources = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="04" title="Источники права" accent="#FFD700" />
    <div className="flex-1 flex items-center justify-center mt-6">
      {/* Pyramid */}
      <div className="relative flex flex-col items-center gap-3 w-full max-w-2xl">
        {[
          { label: "Гражданский кодекс РФ", width: "w-64 md:w-80", color: "#FFD700", height: "h-16", textSize: "text-base" },
          { label: "Федеральные законы", width: "w-52 md:w-64", color: "#00D4FF", height: "h-14", textSize: "text-sm" },
          { label: "Подзаконные акты", width: "w-44 md:w-52", color: "#A78BFA", height: "h-12", textSize: "text-sm" },
          { label: "Судебная практика", width: "w-36 md:w-44", color: "#FF6B6B", height: "h-11", textSize: "text-xs" },
          { label: "Договоры", width: "w-28 md:w-36", color: "#34D399", height: "h-10", textSize: "text-xs" },
        ].map((item, i) => (
          <div key={i} className={`${item.width} ${item.height} flex items-center justify-center rounded-lg border font-montserrat font-semibold transition-all hover:scale-105 cursor-default ${item.textSize}`}
            style={{ borderColor: `${item.color}50`, background: `${item.color}15`, color: item.color, boxShadow: `0 0 20px ${item.color}10` }}>
            {item.label}
          </div>
        ))}
        <div className="mt-3 flex items-center gap-2">
          <Icon name="ChevronDown" size={16} className="text-white/30" />
          <span className="font-montserrat text-white/30 text-xs uppercase tracking-widest">По юридической силе</span>
          <Icon name="ChevronDown" size={16} className="text-white/30" />
        </div>
      </div>
    </div>
  </div>
);

const SlideSubjects = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="05" title="Субъекты" accent="#00D4FF" />
    <div className="flex-1 grid grid-cols-3 gap-6 mt-8">
      {[
        {
          title: "Физические лица", color: "#00D4FF", icon: "User",
          items: ["Граждане РФ", "Иностранные граждане", "Лица без гражданства"]
        },
        {
          title: "Юридические лица", color: "#FFD700", icon: "Building2",
          items: ["Коммерческие организации", "Некоммерческие организации", "Учреждения"]
        },
        {
          title: "Публичные образования", color: "#FF6B6B", icon: "Landmark",
          items: ["Российская Федерация", "Субъекты РФ", "Муниципальные образования"]
        },
      ].map((s) => (
        <div key={s.title} className="flex flex-col rounded-2xl overflow-hidden border" style={{ borderColor: `${s.color}30` }}>
          <div className="flex items-center gap-3 px-5 py-4" style={{ background: `${s.color}20` }}>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${s.color}30` }}>
              <Icon name={s.icon} size={18} style={{ color: s.color }} />
            </div>
            <h3 className="font-oswald text-white uppercase tracking-wide text-sm">{s.title}</h3>
          </div>
          <div className="flex-1 p-4 space-y-2" style={{ background: `${s.color}05` }}>
            {s.items.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                <span className="font-montserrat text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5 grid grid-cols-3 gap-3">
      {[
        { label: "Правоспособность", desc: "с рождения", color: "#00D4FF" },
        { label: "Дееспособность", desc: "с 18 лет (частично с 14)", color: "#FFD700" },
        { label: "Деликтоспособность", desc: "ответственность за вред", color: "#FF6B6B" },
      ].map((tag) => (
        <div key={tag.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: `${tag.color}10`, border: `1px solid ${tag.color}25` }}>
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tag.color }} />
          <div>
            <p className="font-montserrat text-white text-xs font-semibold">{tag.label}</p>
            <p className="font-montserrat text-white/40 text-xs">{tag.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SlideObjects = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="06" title="Объекты гражданского права" accent="#A78BFA" />
    <div className="flex-1 flex items-center mt-6">
      <div className="w-full">
        {/* Matrix */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Имущество", color: "#FFD700", icon: "Package",
              items: ["Недвижимость", "Движимые вещи", "Деньги и ценные бумаги"]
            },
            {
              title: "Права", color: "#00D4FF", icon: "Key",
              items: ["Имущественные права", "Обязательственные права", "Доли в капитале"]
            },
            {
              title: "Интеллект", color: "#A78BFA", icon: "Lightbulb",
              items: ["Изобретения", "Авторские произведения", "Товарные знаки"]
            },
            {
              title: "Нематериальные блага", color: "#FF6B6B", icon: "Heart",
              items: ["Честь и достоинство", "Деловая репутация", "Неприкосновенность жизни"]
            },
          ].map((obj) => (
            <div key={obj.title} className="flex items-start gap-4 p-5 rounded-xl" style={{ background: `${obj.color}08`, border: `1px solid ${obj.color}25` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${obj.color}20` }}>
                <Icon name={obj.icon} size={18} style={{ color: obj.color }} />
              </div>
              <div>
                <h3 className="font-oswald text-white uppercase tracking-wide text-sm mb-2">{obj.title}</h3>
                <div className="space-y-1">
                  {obj.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ background: obj.color }} />
                      <span className="font-montserrat text-white/60 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SlideNonProperty = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="07" title="Личные неимущественные права" accent="#FF6B6B" />
    <div className="flex-1 flex flex-col md:flex-row gap-8 mt-6 items-center">
      {/* Radial diagram */}
      <div className="flex items-center justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, #FF6B6B15 0%, transparent 70%)", border: "1px solid #FF6B6B20" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B6B30, #A78BFA30)", border: "1px solid #FF6B6B40" }}>
              <span className="font-oswald text-white text-xs text-center font-bold uppercase leading-tight">Личность</span>
            </div>
          </div>
          {[
            { label: "Имя", angle: 0, color: "#FF6B6B" },
            { label: "Честь", angle: 60, color: "#FFD700" },
            { label: "Достоинство", angle: 120, color: "#A78BFA" },
            { label: "Репутация", angle: 180, color: "#00D4FF" },
            { label: "Частная жизнь", angle: 240, color: "#34D399" },
            { label: "Защита от клеветы", angle: 300, color: "#FF6B6B" },
          ].map((item) => {
            const rad = (item.angle * Math.PI) / 180;
            const x = 50 + 44 * Math.cos(rad);
            const y = 50 + 44 * Math.sin(rad);
            return (
              <div key={item.label} className="absolute transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-full border font-montserrat text-xs font-semibold whitespace-nowrap"
                style={{ left: `${x}%`, top: `${y}%`, borderColor: `${item.color}60`, background: `${item.color}20`, color: item.color }}>
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 space-y-4">
        {[
          { icon: "User", color: "#FF6B6B", title: "Неотчуждаемы", desc: "Нельзя передать или продать" },
          { icon: "Infinity", color: "#FFD700", title: "Бессрочны", desc: "Защищаются и после смерти" },
          { icon: "Globe", color: "#A78BFA", title: "Универсальны", desc: "Принадлежат каждому от рождения" },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: `${item.color}08`, border: `1px solid ${item.color}25` }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}20` }}>
              <Icon name={item.icon} size={18} style={{ color: item.color }} />
            </div>
            <div>
              <h3 className="font-oswald text-white text-base uppercase tracking-wide">{item.title}</h3>
              <p className="font-montserrat text-white/50 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideProtection = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="08" title="Способы защиты прав" accent="#34D399" />
    <div className="flex-1 flex flex-col justify-center mt-6">
      {/* Decision tree */}
      <div className="flex flex-col items-center gap-0">
        <div className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 font-oswald text-white uppercase tracking-wide text-sm">
          Нарушение права
        </div>
        <div className="w-px h-6 bg-white/20" />
        <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
          {[
            {
              method: "Судебная защита",
              icon: "Gavel",
              color: "#FFD700",
              steps: ["Подача иска", "Судебное разбирательство", "Исполнение решения"],
            },
            {
              method: "Самозащита",
              icon: "Shield",
              color: "#00D4FF",
              steps: ["Соразмерность нарушению", "Без обращения в суд", "Необходима угроза"],
            },
            {
              method: "Защита 3-х лиц",
              icon: "Users",
              color: "#A78BFA",
              steps: ["Охрана интересов других", "Представительство", "Прокурор/омбудсмен"],
            },
          ].map((branch) => (
            <div key={branch.method} className="flex flex-col items-center">
              <div className="w-px h-5 bg-white/15" />
              <div className="w-full rounded-xl overflow-hidden border" style={{ borderColor: `${branch.color}30` }}>
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: `${branch.color}20` }}>
                  <Icon name={branch.icon} size={16} style={{ color: branch.color }} />
                  <span className="font-oswald text-white uppercase tracking-wide text-xs">{branch.method}</span>
                </div>
                <div className="p-3 space-y-1.5" style={{ background: `${branch.color}05` }}>
                  {branch.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: `${branch.color}25`, color: branch.color }}>
                        {i + 1}
                      </div>
                      <span className="font-montserrat text-white/60 text-xs">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SlideTimeline = () => (
  <div className="w-full h-full flex flex-col p-10 bg-[#0a0e27]">
    <SlideHeader num="09" title="Временная шкала ГК РФ" accent="#FFD700" />
    <div className="flex-1 flex flex-col justify-center mt-6 relative">
      {/* Line */}
      <div className="absolute left-0 right-0 h-0.5 top-1/2 -translate-y-1/2 mx-16" style={{ background: "linear-gradient(to right, #FFD700, #00D4FF, #A78BFA)" }} />
      <div className="flex justify-between items-center relative px-4">
        {[
          { year: "1994", color: "#FFD700", label: "Часть I", sub: "Общие положения, субъекты, объекты" },
          { year: "1996", color: "#00D4FF", label: "Часть II", sub: "Отдельные виды обязательств" },
          { year: "2001", color: "#A78BFA", label: "Часть III", sub: "Наследственное право, МЧП" },
          { year: "2006", color: "#FF6B6B", label: "Часть IV", sub: "Интеллектуальные права" },
          { year: "2012+", color: "#34D399", label: "Реформы", sub: "Модернизация корпоративного права" },
        ].map((item, i) => (
          <div key={item.year} className={`flex flex-col items-center gap-3 ${i % 2 === 0 ? "" : "flex-col-reverse"}`}>
            <div className={`text-center max-w-28 ${i % 2 !== 0 ? "mb-8" : "mt-8"}`}>
              <p className="font-oswald font-bold text-sm uppercase tracking-wide" style={{ color: item.color }}>{item.label}</p>
              <p className="font-montserrat text-white/50 text-xs mt-0.5 leading-tight">{item.sub}</p>
            </div>
            <div className="w-4 h-4 rounded-full border-2 z-10" style={{ borderColor: item.color, background: `${item.color}30` }} />
            <div className="px-3 py-1 rounded-full border font-oswald text-sm font-bold" style={{ borderColor: `${item.color}40`, color: item.color, background: `${item.color}15` }}>
              {item.year}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SlideConclusion = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#050818]">
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, #FFD70015 0%, transparent 60%)" }} />
    <div className="absolute top-12 left-12 w-24 h-24 border border-[#FFD700]/20 rotate-45" />
    <div className="absolute bottom-16 right-16 w-32 h-32 border border-[#00D4FF]/15 rotate-12" />
    <div className="absolute top-1/3 right-24 w-12 h-12 bg-[#A78BFA]/10 rounded-full" />

    <div className="relative z-10 text-center px-8 max-w-4xl">
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#34D399]/40 rounded-full">
        <div className="w-2 h-2 bg-[#34D399] rounded-full" />
        <span className="font-montserrat text-[#34D399] text-xs tracking-widest uppercase">Вывод</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { icon: "Scale", color: "#FFD700", label: "Правовая стабильность" },
          { icon: "TrendingUp", color: "#00D4FF", label: "Экономический оборот" },
          { icon: "Shield", color: "#A78BFA", label: "Защита личности" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/5">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}>
              <Icon name={item.icon} size={22} style={{ color: item.color }} />
            </div>
            <span className="font-oswald text-white text-sm uppercase tracking-wide text-center">{item.label}</span>
          </div>
        ))}
      </div>

      <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        ГРАЖДАНСКОЕ ПРАВО —<br />
        <span style={{ background: "linear-gradient(to right, #FFD700, #00D4FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          ФУНДАМЕНТ ОБЩЕСТВА
        </span>
      </h2>

      <div className="flex flex-col items-center gap-1">
        <p className="font-montserrat text-white/40 text-sm">Поваров М.К. · Исмазиева А.Г.</p>
        <p className="font-montserrat text-white/25 text-xs">Науч. рук.: Шеремеев Е.Е. · Самара · 2026</p>
      </div>
    </div>
  </div>
);

function SlideHeader({ num, title, accent }: { num: string; title: string; accent: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="font-oswald text-6xl font-bold opacity-10" style={{ color: accent }}>{num}</div>
      <div>
        <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide">{title}</h2>
        <div className="h-0.5 w-16 mt-1 rounded-full" style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />
      </div>
    </div>
  );
}

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

const Index = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < slides.length) setCurrent(idx);
  };

  const SlideComponent = slideComponents[slides[current].type];

  return (
    <div className="min-h-screen bg-[#050818] flex flex-col font-montserrat" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* Main slide */}
      <div className="flex-1 flex flex-col">
        <div className="relative mx-auto w-full max-w-6xl flex-1 flex flex-col" style={{ minHeight: "calc(100vh - 120px)" }}>
          <div className="flex-1 rounded-none md:rounded-2xl overflow-hidden border border-white/5" style={{ background: "#0a0e27" }}>
            <SlideComponent />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky bottom-0 bg-[#050818]/95 backdrop-blur border-t border-white/5 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-3">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 disabled:opacity-20 transition-all flex-shrink-0"
          >
            <Icon name="ChevronLeft" size={18} />
          </button>

          <div className="flex-1 flex gap-1.5 overflow-x-auto scrollbar-hide">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goTo(idx)}
                className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg font-montserrat text-xs transition-all ${idx === current
                  ? "bg-[#FFD700] text-[#0a0e27] font-semibold"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
                  }`}
              >
                {slideNames[slide.type]}
              </button>
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current === slides.length - 1}
            className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 disabled:opacity-20 transition-all flex-shrink-0"
          >
            <Icon name="ChevronRight" size={18} />
          </button>

          <div className="flex-shrink-0 text-white/30 font-montserrat text-xs ml-2">
            {current + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;