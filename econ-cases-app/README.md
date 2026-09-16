# Iqtisodiy vaziyatlar

Bu loyihani bepul Vercel orqali internetga chiqarish yo'riqnomasi.

## 1. Gemini API kalitini oling (bepul)

1. https://aistudio.google.com/apikey ga Google hisobingiz bilan kiring.
2. "Create API key" tugmasini bosing.
3. Kalitni nusxalab, xavfsiz joyga saqlang (odatda `AIza...` bilan boshlanadi).

Bu **bepul** — to'lov karta kiritish shart emas. Bepul reja cheklovlari bor (daqiqasiga va kuniga so'rovlar soni bo'yicha), lekin shaxsiy foydalanish uchun to'liq yetarli.

**Muhim: bu kalitni hech qachon ochiq joyga (screenshot, chat, GitHub'ga public repo sifatida) joylashtirmang.**

## 2. Kodni GitHub'ga yuklash

1. https://github.com da yangi, bo'sh repository yarating (masalan `iqtisodiy-vaziyatlar`).
2. Kompyuteringizda ushbu papka ichida:
   ```
   git init
   git add .
   git commit -m "Birinchi versiya"
   git branch -M main
   git remote add origin https://github.com/FOYDALANUVCHI_NOMI/iqtisodiy-vaziyatlar.git
   git push -u origin main
   ```

## 3. Vercel'ga joylashtirish

1. https://vercel.com ga GitHub hisobingiz orqali kiring.
2. "Add New" → "Project" tugmasini bosing.
3. GitHub repositoriyangizni tanlang va "Import" qiling.
4. "Environment Variables" bo'limida quyidagini qo'shing:
   - Name: `GEMINI_API_KEY`
   - Value: (1-qadamda olgan kalitingiz)
5. "Deploy" tugmasini bosing. 1-2 daqiqada sayt tayyor bo'ladi.
6. Sizga `nomi.vercel.app` ko'rinishidagi havola beriladi — bu ishlaydigan, ulashsa bo'ladigan sayt.

## 4. O'z domeningizni ulash (ixtiyoriy)

1. Domen sotib oling (masalan Namecheap, GoDaddy — `.uz` domenlar uchun `cctld.uz` orqali).
2. Vercel loyihangizda "Settings" → "Domains" bo'limiga o'ting.
3. Domeningizni kiriting, Vercel bergan DNS sozlamalarini domen provayderingizda qo'shing.
4. Bir necha soatdan keyin sayt o'z domeningizda ishlay boshlaydi.

## 5. Google'da ko'rinishi uchun

1. https://search.google.com/search-console ga kiring.
2. Saytingizni (domeningizni yoki `nomi.vercel.app` havolangizni) qo'shing.
3. "Sitemap" yoki oddiy URL'ni yuborish orqali Google'ga saytingizni tekshirishni so'rang.
4. Odatda 1-4 hafta ichida qidiruv natijalarida ko'rina boshlaydi (kafolat yo'q, bu Google algoritmiga bog'liq).

## Yangi case qo'shish

`src/cases.js` faylini oching, CASES ro'yxati oxiriga faylning boshida ko'rsatilgan shablon bo'yicha yangi obyekt qo'shing, so'ng:
```
git add .
git commit -m "Yangi case qo'shildi"
git push
```
Vercel avtomatik ravishda yangi versiyani joylashtiradi.

## Mahalliy sinash

```
npm install
npm run dev
```
API funksiyasini ham sinash uchun `vercel dev` buyrug'idan foydalaning (Vercel CLI kerak: `npm i -g vercel`).
