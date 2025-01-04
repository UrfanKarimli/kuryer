# React + Vite ilə Dashboard Proyekti

Bu layihə yumor məqsədi daşıyır. Burada Vite, Tailwind CSS kimi müasir texnologiyalar istifadə olunub.

---

## Layihə Quraşdırılması

### 1. Layihə Fayllarını Klonlayın

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Lazım Olan Asılılıqları Yükləyin

```bash
npm install
```

> **Qeyd:** Əgər `pnpm` istifadə edirsinizsə, müvafiq olaraq `pnpm install` əmri ilə əvəz edin.

### 3. Layihəni İşə Salın

```bash
npm run dev
```

Serverin işlədiyi URL avtomatik olaraq terminalda göstəriləcəkdir (adətən `http://localhost:5173`).

---

## Layihəni Hazır Məhsula Çevirmək

```bash
npm run build
```

Bu əmrdən sonra `dist` qovluğunda istehsalata uyğun fayllar yaranacaq.

---

## Koda Nəzarət (Linting)

Kodunuzu yoxlamaq və standartlara uyğunlaşdırmaq üçün aşağıdakı əmrdən istifadə edin:

```bash
npm run lint
```

---

## Texnologiyalar və İstifadə Edilənlər

- **Vite**: Sürətli və modern layihə yaratma aləti.
- **Tailwind CSS**: UI tərtibatını sadələşdirmək üçün bir utility-first CSS framework.
---

## Layihə Strukturu

```plaintext
src/
  assets/        # Şəkillər və digər statik fayllar
  components/    # Yenidən istifadə olunan komponentlər
  page/          # Səhifələr
  App.jsx        # Əsas fayl
  main.jsx        # Layihənin giriş nöqtəsi
```

---

## Tailwind CSS-in Konfiqurasiyası

Tailwind CSS konfiqurasiya faylı `tailwind.config.js` faylında yerləşir:

```javascript
/** @type {import('tailwindcss').Config} */
export default{
  darkMode: 'class',
    content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```



## Sual və Cavablar

Əgər hər hansı problem yaşayırsınızsa, [Issues](<repository_url>/issues) bölməsinə daxil olun və problemi bildirin.

---
