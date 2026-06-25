import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const FOX = 'https://cdn.poehali.dev/projects/1c01f69b-3b49-4bf9-b5b0-e4015d9bda80/files/143b41bb-9ba1-4cf2-b993-c3bcb17f1b4c.jpg';

// ─── Дошкольники ────────────────────────────────────────────────────────────
const preschoolSections = [
  {
    id: 'abc',
    title: 'Азбука',
    desc: 'Учим буквы вместе с весёлыми животными',
    emoji: '🦊',
    icon: 'BookA',
    color: 'bg-primary',
    items: [
      'А — Аист', 'Б — Бегемот', 'В — Волк', 'Г — Гусь', 'Д — Дельфин', 'Е — Ёжик',
      'Ж — Жираф', 'З — Зебра', 'И — Иволга', 'Й — Йод', 'К — Кот', 'Л — Лиса',
      'М — Медведь', 'Н — Носорог', 'О — Обезьяна', 'П — Попугай', 'Р — Рыба', 'С — Слон',
      'Т — Тигр', 'У — Утка', 'Ф — Фламинго', 'Х — Хомяк', 'Ц — Цапля', 'Ч — Черепаха',
      'Ш — Шакал', 'Щ — Щука', 'Ъ — Объект', 'Ы — Мышь', 'Ь — Конь', 'Э — Эму',
      'Ю — Юла', 'Я — Яблоко', 'А — Арбуз', 'Б — Банан', 'В — Вишня', 'Г — Груша',
      'Д — Дыня', 'Е — Ель', 'Ж — Жёлудь', 'З — Земляника', 'И — Инжир', 'К — Клубника',
      'Л — Лимон', 'М — Малина', 'Н — Нектарин', 'О — Орех', 'П — Персик', 'Р — Рябина',
      'С — Слива', 'Т — Тыква',
    ],
  },
  {
    id: 'math',
    title: 'Математика',
    desc: 'Считаем предметы и учим цифры от 1 до 10',
    emoji: '🔢',
    icon: 'Calculator',
    color: 'bg-secondary',
    items: [
      '1 🍎', '2 🍎🍎', '3 🍎🍎🍎', '4 🐥🐥🐥🐥', '5 ⭐⭐⭐⭐⭐', '6 🌸🌸🌸🌸🌸🌸',
      '7 🐠', '8 🎈', '9 🦋', '10 🍓', '2+1=3', '3+2=5',
      '4+1=5', '5+2=7', '6+1=7', '3+3=6', '4+4=8', '5+5=10',
      '10-1=9', '8-2=6', '7-3=4', '6-2=4', '5-1=4', '9-4=5',
      '1+1=2', '2+2=4', '3+1=4', '4+2=6', '5+3=8', '6+4=10',
      '10-2=8', '9-3=6', '8-4=4', '7-2=5', '6-3=3', '5-4=1',
      'Больше: 5>3', 'Меньше: 2<7', 'Равно: 4=4', 'Больше: 9>1', 'Меньше: 3<8', 'Равно: 6=6',
      '1+9=10', '2+8=10', '3+7=10', '4+6=10', '5+5=10', '0+10=10',
      'Чётные: 2,4,6', 'Нечётные: 1,3,5',
    ],
  },
  {
    id: 'colors',
    title: 'Цвета',
    desc: 'Знакомимся с радугой и яркими красками',
    emoji: '🌈',
    icon: 'Palette',
    color: 'bg-accent',
    items: [
      'Красный', 'Оранжевый', 'Жёлтый', 'Зелёный', 'Голубой', 'Фиолетовый',
      'Синий', 'Розовый', 'Белый', 'Чёрный', 'Серый', 'Коричневый',
      'Бежевый', 'Бирюзовый', 'Малиновый', 'Лиловый', 'Золотой', 'Серебряный',
      'Светло-зелёный', 'Тёмно-синий', 'Светло-голубой', 'Тёмно-красный', 'Светло-розовый', 'Тёмно-серый',
      'Яблоко — зелёное', 'Небо — голубое', 'Солнце — жёлтое', 'Трава — зелёная', 'Снег — белый', 'Ночь — чёрная',
      'Морковь — оранжевая', 'Роза — красная', 'Слива — фиолетовая', 'Молоко — белое', 'Уголь — чёрный', 'Лимон — жёлтый',
      'Апельсин — оранжевый', 'Черника — синяя', 'Клубника — красная', 'Мята — зелёная', 'Сирень — лиловая', 'Персик — розовый',
      'Смешай: красный+жёлтый', 'Смешай: синий+жёлтый', 'Смешай: красный+синий', 'Смешай: белый+чёрный', 'Тёплые цвета', 'Холодные цвета',
      'Радуга: 7 цветов', 'Мой любимый цвет',
    ],
  },
  {
    id: 'russian',
    title: 'Русский язык',
    desc: 'Читаем слоги и первые слова по картинкам',
    emoji: '📖',
    icon: 'Languages',
    color: 'bg-rose-500',
    items: [
      'МА-МА 👩', 'ПА-ПА 👨', 'КО-Т 🐱', 'СО-БА-КА 🐶', 'ДО-М 🏠', 'РЕ-КА 🌊',
      'МО-ЛО-КО 🥛', 'ЯБ-ЛО-КО 🍎', 'РЫ-БА 🐟', 'КА-ША 🥣', 'МЯ-ЧИК 🏀', 'КНИ-ГА 📚',
      'ДЕ-РЕ-ВО 🌳', 'ЦВЕ-ТОК 🌸', 'ПТИ-ЦА 🐦', 'СОЛ-НЦЕ ☀️', 'ЛУ-НА 🌙', 'ЗВЕ-ЗДА ⭐',
      'ВЕ-ТЕР 💨', 'ДО-ЖДЬ 🌧️', 'СНЕГ ❄️', 'ЛЁД 🧊', 'ОГ-НЬ 🔥', 'ВО-ДА 💧',
      'МА-ШИ-НА 🚗', 'АВ-ТО-БУС 🚌', 'ПО-ЕЗД 🚆', 'СА-МО-ЛЁТ ✈️', 'КО-РАБ-ЛЬ 🚢', 'ВЕ-ЛО-СИ-ПЕД 🚲',
      'МЕД-ВЕДЬ 🐻', 'ЛИ-СА 🦊', 'ЗА-ЯЦ 🐰', 'ЁЖ 🦔', 'ВОЛ-К 🐺', 'ЛЕВ 🦁',
      'СЛО-Н 🐘', 'ЖИ-РАФ 🦒', 'ОБЕ-ЗЬ-Я-НА 🐒', 'ТИ-ГР 🐯', 'КРО-КО-ДИЛ 🐊', 'ЧЕ-РЕ-ПА-ХА 🐢',
      'ПА-У-К 🕷️', 'БА-БОЧ-КА 🦋', 'ЖУК 🪲', 'МУ-ЗЫ-КА 🎵', 'ПЕС-НЯ 🎶', 'ТА-НЕЦ 💃',
      'ДРУ-ЗЬЯ 👫', 'СЕ-МЬЯ 👨‍👩‍👧',
    ],
  },
];

// ─── 1–2 класс ──────────────────────────────────────────────────────────────
const grade12Sections = [
  {
    id: 'g12_math',
    title: 'Математика',
    desc: 'Счёт до 100, сложение и вычитание двузначных',
    emoji: '🔣',
    icon: 'Calculator',
    color: 'bg-blue-500',
    items: [
      '11+5=16', '23+4=27', '35+3=38', '42+7=49', '56+2=58', '61+8=69',
      '74+5=79', '83+6=89', '91+4=95', '20+15=35', '34+12=46', '45+23=68',
      '57+31=88', '62+24=86', '73+16=89', '81+17=98', '25-4=21', '38-5=33',
      '47-6=41', '59-3=56', '66-4=62', '78-7=71', '85-3=82', '93-2=91',
      '40-15=25', '55-22=33', '67-34=33', '74-41=33', '88-55=33', '96-43=53',
      '10×1=10', '10×2=20', '10×3=30', '10×4=40', '10×5=50', '2×2=4',
      '2×3=6', '2×4=8', '2×5=10', '3×3=9', '3×4=12', '3×5=15',
      '100÷10=10', '50÷10=5', '20÷2=10', '16÷2=8', '12÷3=4', '15÷3=5',
      'Дес. и един.: 37=3 дес.+7 ед.', 'Чётные до 20: 2,4,6,8,10,12,14,16,18,20',
    ],
  },
  {
    id: 'g12_russian',
    title: 'Русский язык',
    desc: 'Гласные и согласные, мягкий знак, слова',
    emoji: '✏️',
    icon: 'PenLine',
    color: 'bg-purple-500',
    items: [
      'Гласные: А Е Ё И О У Ы Э Ю Я', 'Согласные: Б В Г Д Ж З К Л М Н П Р С Т Ф Х Ц Ч Ш Щ',
      'Мягкий знак: КОНЬ, ЕЛЬ', 'Твёрдый знак: СЪЕЗД, ОБЪЕКТ', 'ЖИ-ШИ пиши с И: ЖИЗНЬ, ШИНА',
      'ЧА-ЩА пиши с А: ЧАШКА, ЩАВЕЛЬ', 'ЧУ-ЩУ пиши с У: ЧУДО, ЩУКА', 'ЦИ пиши в словах: ЦИРК, ЦИФРА',
      'Имя существительное — предмет', 'Кто? — КОШКА, ПЁС', 'Что? — СТОЛ, КНИГА',
      'Имя прилагательное — признак', 'Какой? — КРАСНЫЙ, БОЛЬШОЙ', 'Какая? — СИНЯЯ, МАЛЕНЬКАЯ',
      'Глагол — действие', 'Что делает? — БЕЖИТ, РИСУЕТ', 'Что сделал? — ПРОЧИТАЛ, НАПИСАЛ',
      'Предложение начинается с заглавной буквы', 'В конце предложения стоит точка',
      'Вопросительный знак: КТО ЭТО?', 'Восклицательный знак: КАК ЗДОРОВО!',
      'Слог — часть слова: МА-МА', 'Перенос слова по слогам: КА-РАН-ДАШ',
      'Ударение: мАма, дОма', 'Безударная гласная: вода — воды',
      'Заглавная буква в именах: Маша, Петя', 'Заглавная буква в городах: Москва',
      'Однокоренные слова: лес, лесной, лесник', 'Синонимы: большой — огромный',
      'Антонимы: день — ночь', 'Словарные слова: ВОРОНА, КОРОВА',
      'Словарные слова: СОБАКА, МЕДВЕДЬ', 'Словарные слова: ЛИСИЦА, ЗАЯЦ',
      'Предлог: НА столе, ПОД столом', 'Союз: И, А, НО',
      'Диктант: МАМА МЫЛА РАМУ', 'Диктант: НА ДВОРЕ СТОИТ ДОМ',
      'Разбор слова: КОТ — 1 слог, 3 буквы', 'Разбор слова: ЛЕС — 1 слог, 3 буквы',
      'Текст: заглавие, начало, середина, конец',
      'Сочинение: МОЙ ЛЮБИМЫЙ ПИТОМЕЦ', 'Сочинение: МОЯ СЕМЬЯ',
      'Списывание с образца', 'Красная строка в тексте',
      'Диктант: ВЕСНА ПРИШЛА В ЛЕС', 'Диктант: ДЕТИ ИГРАЮТ В САДУ',
      'ЧК, ЧН без мягкого знака: НОЧКА, ДОЧКА', 'ЩН без мягкого знака: МОЩНЫЙ',
    ],
  },
  {
    id: 'g12_world',
    title: 'Окружающий мир',
    desc: 'Природа, времена года, животные и растения',
    emoji: '🌍',
    icon: 'Globe',
    color: 'bg-green-600',
    items: [
      'Времена года: весна, лето, осень, зима', 'Весна: тает снег, цветут цветы',
      'Лето: жара, купание, ягоды', 'Осень: листопад, дожди, урожай',
      'Зима: снег, мороз, коньки', 'Месяцы весны: март, апрель, май',
      'Месяцы лета: июнь, июль, август', 'Месяцы осени: сентябрь, октябрь, ноябрь',
      'Месяцы зимы: декабрь, январь, февраль', 'Части суток: утро, день, вечер, ночь',
      'Дни недели: пн, вт, ср, чт, пт, сб, вс', 'Домашние животные: кошка, собака, корова',
      'Дикие животные: медведь, волк, лиса', 'Перелётные птицы: ласточка, соловей',
      'Зимующие птицы: синица, воробей, снегирь', 'Растения: дерево, кустарник, трава',
      'Хвойные деревья: ель, сосна, кедр', 'Лиственные деревья: берёза, дуб, клён',
      'Грибы: съедобные и ядовитые', 'Ягоды: малина, черника, земляника',
      'Насекомые: пчела, бабочка, муравей', 'Рыбы: карась, щука, окунь',
      'Планета Земля — наш дом', 'Солнечная система: 8 планет',
      'Природные явления: гроза, радуга, туман', 'Вода: твёрдая, жидкая, газообразная',
      'Горы, реки, озёра, моря', 'Россия — наша Родина',
      'Столица России — Москва', 'Флаг России: белый, синий, красный',
      'Правила безопасности: дорога', 'Светофор: красный, жёлтый, зелёный',
      'Здоровое питание: овощи и фрукты', 'Зарядка каждое утро',
      'Гигиена: мыть руки перед едой', 'Профессии: врач, учитель, строитель',
      'Транспорт: наземный, водный, воздушный', 'Семья: мама, папа, бабушка, дедушка',
      'День рождения Земли — 22 апреля', 'Красная книга — охрана природы',
      'Круговорот воды в природе', 'Почва — плодородный слой земли',
      'Полезные ископаемые: уголь, нефть, газ', 'Растения дают кислород',
      'Человек — часть природы', 'Заповедники — охраняемые территории',
      'Экология — наука о природе', 'Беречь природу — долг каждого',
    ],
  },
];

// ─── 3–4 класс ──────────────────────────────────────────────────────────────
const grade34Sections = [
  {
    id: 'g34_math',
    title: 'Математика',
    desc: 'Умножение, деление, дроби, задачи',
    emoji: '📐',
    icon: 'Calculator',
    color: 'bg-indigo-600',
    items: [
      '2×6=12', '3×6=18', '4×6=24', '5×6=30', '6×6=36', '7×6=42',
      '8×6=48', '9×6=54', '2×7=14', '3×7=21', '4×7=28', '5×7=35',
      '6×7=42', '7×7=49', '8×7=56', '9×7=63', '2×8=16', '3×8=24',
      '4×8=32', '5×8=40', '6×8=48', '7×8=56', '8×8=64', '9×8=72',
      '2×9=18', '3×9=27', '4×9=36', '5×9=45', '6×9=54', '7×9=63',
      '8×9=72', '9×9=81', '72÷8=9', '56÷7=8', '63÷9=7', '48÷6=8',
      '36÷4=9', '45÷5=9', '½ — одна вторая', '¼ — одна четвёртая',
      '¾ — три четвёртых', '⅓ — одна третья', 'Периметр квадрата: 4×a',
      'Площадь прямоугольника: a×b', '1 км = 1000 м', '1 м = 100 см',
      '1 кг = 1000 г', '1 ч = 60 мин', '1 сут = 24 ч', '1 год = 12 мес',
    ],
  },
  {
    id: 'g34_russian',
    title: 'Русский язык',
    desc: 'Части речи, падежи, состав слова',
    emoji: '📝',
    icon: 'FileText',
    color: 'bg-pink-600',
    items: [
      'Имя существительное: КТО? ЧТО?', 'Имя прилагательное: КАКОЙ? КАКАЯ?',
      'Глагол: ЧТО ДЕЛАЕТ? ЧТО СДЕЛАЛ?', 'Местоимение: Я, ТЫ, ОН, ОНА, МЫ, ВЫ, ОНИ',
      'Наречие: КАК? КОГДА? ГДЕ?', 'Числительное: сколько? который?',
      'Предлог: В, НА, ПОД, НАД, ЗА, ИЗ', 'Союз: И, А, НО, ЧТО, ЧТОБЫ',
      'Именительный падеж: КТО? ЧТО?', 'Родительный падеж: КОГО? ЧЕГО?',
      'Дательный падеж: КОМУ? ЧЕМУ?', 'Винительный падеж: КОГО? ЧТО?',
      'Творительный падеж: КЕМ? ЧЕМ?', 'Предложный падеж: О КОМ? О ЧЁМ?',
      'Корень слова: ЛЕС → ЛЕСНОЙ', 'Приставка: ПРИ + ЕХАТЬ = ПРИЕХАТЬ',
      'Суффикс: ЛЕС + НИК = ЛЕСНИК', 'Окончание меняет форму слова',
      'Однородные члены предложения', 'Подлежащее и сказуемое',
      'Прямая речь: «Привет!» — сказал он', 'Диалог: реплики героев',
      'Текст-повествование: что произошло?', 'Текст-описание: каков предмет?',
      'Текст-рассуждение: почему? зачем?', 'Непроверяемые гласные: ВОКЗАЛ',
      'Непроверяемые согласные: ФУТБОЛ', 'Удвоенные согласные: КЛАСС, СУББОТА',
      'НЕ с глаголами: НЕ ЛЮБИТ', 'Частица НЕ пишется отдельно',
      'Мягкий знак разделительный: СЕМЬЯ', 'Твёрдый знак разделительный: СЪЕЛ',
      'Заглавная буква в именах собственных', 'Кавычки у названий: газета «Искра»',
      'Тире в предложении: Москва — столица', 'Запятая при однородных членах',
      'Спряжение глаголов: 1-е и 2-е', 'I спряжение: -ЕТ, -УТ/-ЮТ',
      'II спряжение: -ИТ, -АТ/-ЯТ', 'Склонение существительных: 1, 2, 3-е',
      'Род существительных: м., ж., ср.', 'Число существительных: ед. и мн.',
      'Степени сравнения прилагательных', 'Краткая форма прилагательных',
      'Изложение по плану', 'Сочинение по картине',
      'Синтаксический разбор предложения', 'Фонетический разбор слова',
    ],
  },
  {
    id: 'g34_world',
    title: 'Окружающий мир',
    desc: 'История, география, природоведение',
    emoji: '🗺️',
    icon: 'Map',
    color: 'bg-amber-600',
    items: [
      'Карта мира: материки и океаны', '6 материков: Евразия, Африка, Сев. Америка, Юж. Америка, Австралия, Антарктида',
      '4 океана: Тихий, Атлантический, Индийский, Северный Ледовитый',
      'Россия — крупнейшая страна мира', 'Природные зоны России: тундра, тайга, степь, пустыня',
      'Тундра: вечная мерзлота, мох, олени', 'Тайга: хвойные леса, медведи, соболь',
      'Широколиственный лес: дубы, лоси', 'Степь: злаки, суслики, орлы',
      'Пустыня: песок, верблюды, кактусы', 'Тело человека: органы и системы',
      'Кровеносная система: сердце, сосуды', 'Дыхательная система: лёгкие',
      'Пищеварение: желудок, кишечник', 'Скелет: кости и суставы',
      'Нервная система: мозг, нервы', 'Органы чувств: зрение, слух, осязание',
      'Здоровый образ жизни: спорт + питание', 'Витамины: А, В, С, D',
      'История Древнего Рима', 'Древняя Греция — колыбель культуры',
      'Египетские пирамиды — чудо света', 'Средневековые замки и рыцари',
      'Великие открытия: Колумб, Магеллан', 'Россия в XVIII веке: Пётр I',
      'Отечественная война 1812 года', 'Великая Отечественная война 1941–1945',
      'День Победы — 9 мая', 'Конституция России — основной закон',
      'Президент — глава государства', 'Государственная Дума',
      'Права и обязанности гражданина', 'Налоги и бюджет страны',
      'Экономика: производство и потребление', 'Деньги: рубль — валюта России',
      'Сельское хозяйство: растениеводство', 'Промышленность: заводы и фабрики',
      'Транспортная сеть России', 'Великие реки: Волга, Лена, Обь, Енисей',
      'Байкал — самое глубокое озеро', 'Уральские горы — граница Европы и Азии',
      'Космос: Гагарин — первый в космосе', 'МКС — международная космическая станция',
      'Охрана окружающей среды', 'Глобальное потепление', 'Возобновляемая энергия',
      'Интернет и цифровые технологии', 'Профессии будущего', 'Я — гражданин России',
    ],
  },
  {
    id: 'g34_english',
    title: 'Английский язык',
    desc: 'Алфавит, слова, простые фразы',
    emoji: '🇬🇧',
    icon: 'Globe2',
    color: 'bg-cyan-600',
    items: [
      'A-B-C-D-E-F-G', 'H-I-J-K-L-M-N', 'O-P-Q-R-S-T-U', 'V-W-X-Y-Z',
      'Hello! — Привет!', 'Good morning! — Доброе утро!', 'Good bye! — Пока!',
      'Thank you! — Спасибо!', 'Please — Пожалуйста', 'Sorry — Извини',
      'Yes — Да', 'No — Нет', 'My name is... — Меня зовут...',
      'How are you? — Как дела?', 'I am fine — У меня всё хорошо',
      'I like — Мне нравится', 'I love — Я люблю', 'I have — У меня есть',
      'Cat — кошка 🐱', 'Dog — собака 🐶', 'Bird — птица 🐦',
      'Apple — яблоко 🍎', 'Book — книга 📚', 'School — школа 🏫',
      'One, Two, Three', 'Four, Five, Six', 'Seven, Eight, Nine, Ten',
      'Red — красный', 'Blue — синий', 'Green — зелёный', 'Yellow — жёлтый',
      'Big — большой', 'Small — маленький', 'Fast — быстрый', 'Slow — медленный',
      'I am a pupil — Я ученик', 'This is my family — Это моя семья',
      'I go to school — Я иду в школу', 'I read books — Я читаю книги',
      'Spring — весна', 'Summer — лето', 'Autumn — осень', 'Winter — зима',
      'Monday — понедельник', 'Friday — пятница', 'Sunday — воскресенье',
      'January — январь', 'July — июль', 'December — декабрь',
      'What is this? — Что это?', 'Where are you from? — Откуда ты?',
    ],
  },
];

const colorSwatches = [
  '#FF5A36','#FF9F1C','#FFD23F','#2EC4B6','#4D9DE0','#9B5DE5',
  '#3A86FF','#FF6B9D','#FFFFFF','#222222','#9E9E9E','#795548',
  '#F5F0E8','#00BCD4','#E91E63','#8E24AA','#FFD700','#C0C0C0',
  '#AED581','#1565C0','#B3E5FC','#B71C1C','#F8BBD0','#616161',
  '#FF5A36','#87CEEB','#FFD23F','#228B22','#FFFFFF','#111111',
  '#FF7043','#FF5A36','#9C27B0','#FFFFFF','#111111','#F9A825',
  '#FF8A65','#3949AB','#EF5350','#66BB6A','#CE93D8','#FFAB91',
  '#FF5A36','#2EC4B6','#FF5A36','#2EC4B6','#FF5A36','#9E9E9E',
  '#FFD23F','#FF6B9D',
];

type GradeTab = 'preschool' | 'grade12' | 'grade34';

const gradeTabs: { id: GradeTab; label: string; emoji: string; color: string }[] = [
  { id: 'preschool', label: 'Дошкольники', emoji: '🐣', color: 'bg-primary' },
  { id: 'grade12', label: '1–2 класс', emoji: '🎒', color: 'bg-blue-500' },
  { id: 'grade34', label: '3–4 класс', emoji: '🏆', color: 'bg-indigo-600' },
];

const allSectionsMap: Record<GradeTab, typeof preschoolSections> = {
  preschool: preschoolSections,
  grade12: grade12Sections,
  grade34: grade34Sections,
};

const Index = () => {
  const [active, setActive] = useState('home');
  const [gradeTab, setGradeTab] = useState<GradeTab>('preschool');
  const [progress, setProgress] = useState<Record<string, number>>({});
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

  const currentSections = allSectionsMap[gradeTab];

  const totalLearned = Object.values(progress).reduce((a, b) => a + b, 0);
  const totalAll = [...preschoolSections, ...grade12Sections, ...grade34Sections].reduce((a, s) => a + s.items.length, 0);
  const overallPct = Math.round((totalLearned / totalAll) * 100);

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'sections', label: 'Разделы', icon: 'BookOpen' },
  ];

  const currentGrade = gradeTabs.find(g => g.id === gradeTab)!;

  const SectionPage = ({ s }: { s: typeof preschoolSections[0] }) => (
    <div className="animate-pop-in">
      <button
        onClick={() => setActive('sections')}
        className="flex items-center gap-2 font-bold text-muted-foreground mb-6 hover:text-primary"
      >
        <Icon name="ArrowLeft" size={20} /> К разделам
      </button>

      <div className="flex items-center gap-4 mb-2 flex-wrap">
        <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center text-4xl shadow-lg`}>
          {s.emoji}
        </div>
        <div>
          <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-1 text-white ${currentGrade.color}`}>
            {currentGrade.emoji} {currentGrade.label}
          </div>
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
      <p className="text-sm text-muted-foreground font-semibold mb-6">
        {progress[s.id] || 0} из {s.items.length} карточек пройдено
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {s.items.map((item, idx) => {
          const done = idx < (progress[s.id] || 0);
          const current = idx === (progress[s.id] || 0);
          return (
            <button
              key={idx}
              onClick={() => current && learn(s.id, s.items.length)}
              disabled={idx > (progress[s.id] || 0)}
              style={{ animationDelay: `${Math.min(idx, 20) * 0.03}s` }}
              className={`animate-pop-in relative min-h-[100px] rounded-3xl flex flex-col items-center justify-center gap-2 p-3 font-display font-extrabold text-base shadow-md transition-all ${
                done
                  ? `${s.color} text-white`
                  : current
                  ? 'bg-card border-4 border-dashed border-primary hover:scale-105 animate-pulse'
                  : 'bg-muted/60 text-muted-foreground'
              }`}
            >
              {s.id === 'colors' && (
                <span
                  className="w-8 h-8 rounded-full border-2 border-white/60"
                  style={{ backgroundColor: colorSwatches[idx] ?? '#ccc' }}
                />
              )}
              <span className="text-center leading-tight">{item}</span>
              {done && (
                <span className="absolute top-2 right-2 text-white">
                  <Icon name="CircleCheck" size={20} />
                </span>
              )}
              {!done && !current && <span className="absolute top-2 right-2 text-base">🔒</span>}
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
  );

  const activeSectionObj = [...preschoolSections, ...grade12Sections, ...grade34Sections].find(s => s.id === active);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b-4 border-primary/20">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActive('home')}>
            <span className="text-3xl animate-wiggle">🦊</span>
            <span className="font-display text-2xl font-extrabold text-primary">Умничка</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all ${
                  active === n.id || (n.id === 'sections' && activeSectionObj)
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                    : 'text-foreground hover:bg-muted'
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

        {/* HOME */}
        {active === 'home' && (
          <div className="animate-pop-in">
            <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <div className="inline-block bg-secondary text-secondary-foreground font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                  Учимся играя! 🎈
                </div>
                <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                  Весёлое обучение для <span className="text-primary">детей</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 max-w-md">
                  От азбуки до математики и английского — программа для дошкольников и учеников 1–4 класса.
                </p>
                <button
                  onClick={() => setActive('sections')}
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
                  <Icon name="TrendingUp" className="text-secondary" /> Общий прогресс
                </h2>
                <span className="font-display text-2xl font-extrabold text-primary">{overallPct}%</span>
              </div>
              <div className="h-6 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                  style={{ width: `${Math.max(overallPct, 4)}%` }}
                >
                  {overallPct > 10 && <span className="text-sm">🦊</span>}
                </div>
              </div>
              <p className="mt-3 text-muted-foreground font-semibold">
                Изучено {totalLearned} из {totalAll} карточек по всем уровням
              </p>
            </section>

            {/* Grade cards */}
            <section className="grid sm:grid-cols-3 gap-6 mb-12">
              {gradeTabs.map((g, i) => {
                const secs = allSectionsMap[g.id];
                const learned = secs.reduce((a, s) => a + (progress[s.id] || 0), 0);
                const total = secs.reduce((a, s) => a + s.items.length, 0);
                const pct = Math.round((learned / total) * 100);
                return (
                  <button
                    key={g.id}
                    onClick={() => { setGradeTab(g.id); setActive('sections'); }}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    className="animate-pop-in text-left bg-card rounded-[2rem] p-6 shadow-lg border-4 border-transparent hover:border-primary/40 hover:-translate-y-2 transition-all group"
                  >
                    <div className={`w-16 h-16 ${g.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:animate-wiggle`}>
                      {g.emoji}
                    </div>
                    <h3 className="font-display text-2xl font-extrabold mb-1">{g.label}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{secs.length} разделов • {total} карточек</p>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${g.color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
                    </div>
                    <p className="text-sm font-bold mt-2 text-muted-foreground">{pct}% пройдено</p>
                  </button>
                );
              })}
            </section>

            {/* Achievements */}
            <section className="bg-gradient-to-br from-accent/40 to-secondary/20 rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-2xl font-extrabold mb-5 flex items-center gap-2">
                <span>🏆</span> Мои достижения
              </h2>
              <div className="flex flex-wrap gap-3">
                {[...preschoolSections, ...grade12Sections, ...grade34Sections].map((s) => {
                  const earned = stars.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      className={`flex flex-col items-center gap-1 px-4 py-3 rounded-2xl ${earned ? 'bg-card shadow-lg' : 'bg-card/40 opacity-50'}`}
                    >
                      <span className={`text-3xl ${earned ? '' : 'grayscale'}`}>{earned ? '🌟' : '🔒'}</span>
                      <span className="font-bold text-xs text-center">{s.title}</span>
                    </div>
                  );
                })}
                <div className={`flex flex-col items-center gap-1 px-4 py-3 rounded-2xl ${overallPct === 100 ? 'bg-card shadow-lg' : 'bg-card/40 opacity-50'}`}>
                  <span className={`text-3xl ${overallPct === 100 ? '' : 'grayscale'}`}>{overallPct === 100 ? '👑' : '🔒'}</span>
                  <span className="font-bold text-xs">Супер-Умничка</span>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SECTIONS LIST */}
        {active === 'sections' && (
          <div className="animate-pop-in">
            <h1 className="font-display text-4xl font-extrabold mb-6">Выбери раздел</h1>

            {/* Grade tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {gradeTabs.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGradeTab(g.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
                    gradeTab === g.id ? `${g.color} text-white shadow-lg scale-105` : 'bg-muted text-foreground hover:bg-card'
                  }`}
                >
                  {g.emoji} {g.label}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSections.map((s, i) => {
                const pct = Math.round(((progress[s.id] || 0) / s.items.length) * 100);
                return (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    style={{ animationDelay: `${i * 0.07}s` }}
                    className="animate-pop-in text-left bg-card rounded-[2rem] p-6 shadow-lg border-4 border-transparent hover:border-primary/40 hover:-translate-y-2 transition-all group"
                  >
                    <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:animate-wiggle`}>
                      {s.emoji}
                    </div>
                    <h3 className="font-display text-2xl font-extrabold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm font-bold">
                      <span className="text-muted-foreground">{pct}% пройдено</span>
                      {stars.includes(s.id) && <span>⭐</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION PAGE */}
        {activeSectionObj && <SectionPage s={activeSectionObj} />}
      </main>

      <footer className="container py-8 text-center text-muted-foreground font-semibold relative z-10">
        🦊 Умничка — учимся играя • Дошкольники, 1–2 и 3–4 класс
      </footer>
    </div>
  );
};

export default Index;
