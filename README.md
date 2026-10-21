# Beyond Hero — Creative Developer Portfolio

Премиальный сайт-портфолио на **Next.js 14 (App Router, TypeScript)**, вдохновленный кинетической эстетикой motionsites.ai.

## ✨ Ключевые особенности

- **Beyond Hero & Stacked 3D Typography**:
  - Точное воссоздание кинетической Hero-секции motionsites.ai: фон `#EC612C`, 4-слойный заголовок `BEYOND` с ретро-смещением слоев (белый, салатовый, оранжевый, небесно-голубой), 3D-бюст персонажа в фокусе.
  - Скролл-параллакс боковых текстовых колонок (`spark`, `imagine`, `evolve`, `render` / `blaze`, `genesis`, `purpose`, `ignite`) со скользящими смещениями и интерполяцией прозрачности.
- **Бесшовная бегущая строка (Marquee)**:
  - 4 зацикленные копии брендового текста в Bamboly Demo с CSS-анимацией 18s.
- **Секция «О себе» (About)**:
  - Бенто-сетка с ключевыми метриками, интерактивными тегами стека и карточками специализаций.
- **Управление проектами через один файл**:
  - Все проекты конфигурируются в [`src/data/projects.ts`](file:///Users/mymac/Documents/портфолио/src/data/projects.ts).
  - Для добавления нового проекта достаточно добавить один объект в массив `projects`.
- **Интерактивный предпросмотр (Live Modal with Iframe)**:
  - Проекты из папки `public/demos/` запускаются прямо в модальном окне с переключателем разрешений (**Desktop** / **Tablet** / **Mobile**) и кнопкой открытия в новой вкладке.
  - Внешние ссылки открываются в новой вкладке.
- **Поддержка готовых HTML-сайтов**:
  - Статические сайты складываются в `public/demos/[имя-папки]/`.
  - Автоматически доступны по роуту `/demos/[имя-папки]`.
  - В проект уже включены 4 демо: `laocoon`, `lumora`, `loopstack`, `stroi-master`.
- **Секция контактов**:
  - Быстрое копирование email с визуальным фидбеком, ссылки на Telegram/GitHub/LinkedIn и форма обратной связи.

---

## 🛠 Технический стек

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utility**: `clsx` + `tailwind-merge` (`cn`)

---

## 🚀 Запуск и сборка

### Локальный запуск
```bash
npm run dev
# или
pnpm dev
```
Сайт откроется по адресу [http://localhost:3000](http://localhost:3000).

### Сборка для продакшена
```bash
npm run build
npm run start
```

---

## 📁 Структура проекта

```
портфолио/
├── public/
│   └── demos/                 # Статические HTML/CSS/JS сайты
│       ├── laocoon/           # Кинематографичный 3D WebGL сайт
│       ├── lumora/            # Студия дизайна и инженерии
│       ├── loopstack/         # Минималистичный интерактивный концепт
│       └── stroi-master/      # Коммерческий сайт строительной бригады
├── src/
│   ├── app/
│   │   ├── globals.css        # Глобальные стили, шрифты и анимация marquee
│   │   ├── layout.tsx         # Корневой лэйаут и подключение веб-шрифтов
│   │   └── page.tsx           # Сборка секций главной страницы
│   ├── components/
│   │   ├── Hero.tsx           # Секция Beyond Hero со скролл-параллаксом
│   │   ├── Marquee.tsx        # Бесконечная бегущая строка
│   │   ├── About.tsx          # Блок «О себе» с микро-анимациями и метриками
│   │   ├── Projects.tsx       # Сетка проектов с фильтрами
│   │   ├── ProjectModal.tsx   # Интерактивное модальное окно с iframe
│   │   └── Contact.tsx        # Контакты, копирование email и форма
│   ├── data/
│   │   └── projects.ts        # Конфиг всех проектов портфолио
│   └── lib/
│       └── utils.ts           # Утилита cn (clsx + tailwind-merge)
├── tailwind.config.ts         # Конфигурация цветов, шрифтов и анимаций
├── next.config.mjs            # Конфиг Next.js и rewrites для /demos/
└── tsconfig.json              # Настройки TypeScript
```

---

## ⚡ Деплой на Vercel

Проект полностью оптимизирован для бесплатного деплоя на [Vercel](https://vercel.com):
1. Запушьте репозиторий на GitHub / GitLab / Bitbucket.
2. В панели Vercel нажмите **Add New Project** и выберите ваш репозиторий.
3. Vercel автоматически определит Next.js.
4. Нажмите **Deploy**. Проект соберется без дополнительных настроек.
