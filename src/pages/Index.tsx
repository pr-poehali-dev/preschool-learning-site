import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const FOX = 'https://cdn.poehali.dev/projects/1c01f69b-3b49-4bf9-b5b0-e4015d9bda80/files/143b41bb-9ba1-4cf2-b993-c3bcb17f1b4c.jpg';

const sections = [
  {
    id: 'abc',
    title: 'Азбука',
    desc: 'Учим буквы вместе с весёлыми животными',
    emoji: '🦊',
    icon: 'BookA',
    color: 'bg-primary',
    soft: 'bg-orange-50',
    items: ['А — Аист', 'Б — Бегемот', 'В — Волк', 'Г — Гусь', 'Д — Дельфин', 'Е — Ёжик'],
  },
  {
    id: 'math',
    title: 'Математика',
    desc: 'Считаем предметы и учим цифры от 1 до 10',
    emoji: '🔢',
    icon: 'Calculator',
    color: 'bg-secondary',
    soft: 'bg-teal-50',
    items: ['1 🍎', '2 🍎🍎', '3 🍎🍎🍎', '4 🐥', '5 🐥', '6 🐥'],
  },
  {
    id: 'colors',
    title: 'Цвета',
    desc: 'Знакомимся с радугой и яркими красками',
    emoji: '🌈',
    icon: 'Palette',
    color: 'bg-accent',
    soft: 'bg-yellow-50',
    items: ['Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Фиолетовый'],
  },
];

const colorSwatches = ['#FF5A36', '#FF9F1C', '#FFD23F', '#2EC4B6', '#4D9DE0', '#9B5DE5'];

const Index = () => {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState<Record<string, number>>({ abc: 0, math: 0, colors: 0 });
  const [stars, setStars] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('umnichka_progress');
    const savedStars = localStorage.getItem('umnichka_stars');
    if (saved) setProgress(JSON.parse(saved));
    if (savedStars) setStars(JSON.parse(savedStars));
  }, []);

  const learn = (sectionId: string, total: number) => {
    setProgress((prev) => {
      const next = { ...prev, [sectionId]: Math.min((prev[sectionId] || 0) + 1, total) };
      localStorage.setItem('umnichka_progress', JSON.stringify(next));
      if (next[sectionId] === total && !stars.includes(sectionId)) {
        const ns = [...stars, sectionId];
        setStars(ns);
        localStorage.setItem('umnichka_stars', JSON.stringify(ns));
      }
      return next;
    });
  };

  const totalLearned = Object.values(progress).reduce((a, b) => a + b, 0);
  const totalAll = sections.reduce((a, s) => a + s.items.length, 0);
  const overallPct = Math.round((totalLearned / totalAll) * 100);

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'abc', label: 'Азбука', icon: 'BookA' },
    { id: 'math', label: 'Математика', icon: 'Calculator' },
    { id: 'colors', label: 'Цвета', icon: 'Palette' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b-4 border-primary/20">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl animate-wiggle">🦊</span>
            <span className="font-display text-2xl font-extrabold text-primary">Умничка</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                  active === n.id ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={n.icon} size={18} />
                {n.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-1 bg-accent/40 px-3 py-1.5 rounded-full">
            <Icon name="Star" size={18} className="text-amber-500 fill-amber-500" />
            <span className="font-display font-extrabold text-amber-700">{stars.length}</span>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className="md:hidden flex gap-1 overflow-x-auto px-4 py-3">
        {navItems.map((n) => (
          <button
            key={n.id}
            onClick={() => setActive(n.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full font-bold text-sm whitespace-nowrap ${
              active === n.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'
            }`}
          >
            <Icon name={n.icon} size={16} />
            {n.label}
          </button>
        ))}
      </nav>

      <main className="container py-8 relative z-10">
        {active === 'home' && (
          <div className="animate-pop-in">
            {/* Hero */}
            <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <div className="inline-block bg-secondary text-secondary-foreground font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                  Учимся играя! 🎈
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                  Весёлое обучение для <span className="text-primary">малышей</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-md">
                  Азбука, цифры и цвета с добрыми животными. Каждое задание — маленькое приключение!
                </p>
                <button
                  onClick={() => setActive('abc')}
                  className="bg-primary text-primary-foreground font-display font-extrabold text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform"
                >
                  Начать обучение 🚀
                </button>
              </div>
              <div className="flex justify-center">
                <img src={FOX} alt="Лисёнок" className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-[2.5rem] shadow-2xl animate-float" />
              </div>
            </section>

            {/* Overall progress */}
            <section className="bg-card rounded-[2rem] p-6 md:p-8 shadow-xl border-4 border-accent/30 mb-12">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <h2 className="font-display text-2xl font-extrabold flex items-center gap-2">
                  <Icon name="TrendingUp" className="text-secondary" /> Мой прогресс
                </h2>
                <span className="font-display text-2xl font-extrabold text-primary">{overallPct}%</span>
              </div>
              <div className="h-6 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                  style={{ width: `${Math.max(overallPct, 6)}%` }}
                >
                  {overallPct > 10 && <span className="text-sm">🦊</span>}
                </div>
              </div>
              <p className="mt-3 text-muted-foreground font-semibold">
                Изучено {totalLearned} из {totalAll} карточек. Так держать!
              </p>
            </section>

            {/* Sections grid */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {sections.map((s, i) => {
                const pct = Math.round(((progress[s.id] || 0) / s.items.length) * 100);
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    className="animate-pop-in text-left bg-card rounded-[2rem] p-6 shadow-lg border-4 border-transparent hover:border-primary/40 hover:-translate-y-2 transition-all group"
                  >
                    <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:animate-wiggle`}>
                      {s.emoji}
                    </div>
                    <h3 className="font-display text-2xl font-extrabold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm font-bold">
                      <span className="text-muted-foreground">{pct}% пройдено</span>
                      {stars.includes(s.id) && <span>⭐ Готово!</span>}
                    </div>
                  </button>
                );
              })}
            </section>

            {/* Achievements */}
            <section className="bg-gradient-to-br from-accent/40 to-secondary/20 rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-2xl font-extrabold mb-5 flex items-center gap-2">
                <span>🏆</span> Мои достижения
              </h2>
              <div className="flex flex-wrap gap-4">
                {sections.map((s) => {
                  const earned = stars.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl ${
                        earned ? 'bg-card shadow-lg' : 'bg-card/40 opacity-60'
                      }`}
                    >
                      <span className={`text-4xl ${earned ? '' : 'grayscale'}`}>{earned ? '🌟' : '🔒'}</span>
                      <span className="font-bold text-sm">Мастер «{s.title}»</span>
                    </div>
                  );
                })}
                <div
                  className={`flex flex-col items-center gap-2 px-5 py-4 rounded-2xl ${
                    overallPct === 100 ? 'bg-card shadow-lg' : 'bg-card/40 opacity-60'
                  }`}
                >
                  <span className={`text-4xl ${overallPct === 100 ? '' : 'grayscale'}`}>{overallPct === 100 ? '👑' : '🔒'}</span>
                  <span className="font-bold text-sm">Супер-Умничка</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {sections.map(
          (s) =>
            active === s.id && (
              <div key={s.id} className="animate-pop-in">
                <button
                  onClick={() => setActive('home')}
                  className="flex items-center gap-2 font-bold text-muted-foreground mb-6 hover:text-primary"
                >
                  <Icon name="ArrowLeft" size={20} /> На главную
                </button>

                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center text-4xl shadow-lg`}>
                    {s.emoji}
                  </div>
                  <div>
                    <h1 className="font-display text-4xl font-extrabold">{s.title}</h1>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </div>

                <div className="h-4 bg-muted rounded-full overflow-hidden my-6 max-w-md">
                  <div
                    className={`h-full ${s.color} rounded-full transition-all duration-500`}
                    style={{ width: `${((progress[s.id] || 0) / s.items.length) * 100}%` }}
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {s.items.map((item, idx) => {
                    const done = idx < (progress[s.id] || 0);
                    return (
                      <button
                        key={idx}
                        onClick={() => idx === (progress[s.id] || 0) && learn(s.id, s.items.length)}
                        disabled={idx > (progress[s.id] || 0)}
                        style={{ animationDelay: `${idx * 0.05}s` }}
                        className={`animate-pop-in relative aspect-square rounded-3xl flex flex-col items-center justify-center gap-2 font-display font-extrabold text-xl shadow-md transition-all ${
                          done
                            ? `${s.color} text-white`
                            : idx === (progress[s.id] || 0)
                            ? 'bg-card border-4 border-dashed border-primary hover:scale-105 animate-pulse'
                            : 'bg-muted/60 text-muted-foreground'
                        }`}
                      >
                        {s.id === 'colors' && (
                          <span
                            className="w-10 h-10 rounded-full border-2 border-white/60"
                            style={{ backgroundColor: colorSwatches[idx] }}
                          />
                        )}
                        <span>{item}</span>
                        {done && (
                          <span className="absolute top-2 right-2 text-white">
                            <Icon name="CircleCheck" size={22} />
                          </span>
                        )}
                        {idx > (progress[s.id] || 0) && (
                          <span className="absolute top-2 right-2">🔒</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {stars.includes(s.id) && (
                  <div className="mt-8 bg-accent/40 rounded-[2rem] p-6 text-center animate-pop-in">
                    <div className="text-5xl mb-2">🎉</div>
                    <h3 className="font-display text-2xl font-extrabold">Ура! Раздел пройден!</h3>
                    <p className="text-muted-foreground font-semibold">Ты получил звёздочку. Молодец!</p>
                  </div>
                )}
              </div>
            )
        )}
      </main>

      <footer className="container py-8 text-center text-muted-foreground font-semibold relative z-10">
        🦊 Умничка — учимся играя • Сделано с любовью для малышей
      </footer>
    </div>
  );
};

export default Index;
