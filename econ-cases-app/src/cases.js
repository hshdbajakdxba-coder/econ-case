// Har bir yangi case qo'shish uchun quyidagi shablonni nusxalab, ro'yxat oxiriga joylashtiring:
//
// {
//   id: "noyob_id",              // faqat lotin harflar va pastki chiziq, boshqa case bilan bir xil bo'lmasin
//   difficulty: 1,                // 1 = oson, 2 = o'rta, 3 = qiyin
//   icon: "cup",                  // cup | briefcase | ticket | storefront | tag | bank
//   name: { uz: "...", ru: "...", en: "..." },
//   scenario: { uz: "...", ru: "...", en: "..." },
//   question: { uz: "...", ru: "...", en: "..." },
//   reasoning: { uz: "...", ru: "...", en: "..." },   // to'g'ri fikrlash, foydalanuvchiga ko'rsatilmaydi
//   concepts: { uz: "...", ru: "...", en: "..." },
//   mistakes: { uz: "...", ru: "...", en: "..." },    // odatiy xatolar
// },

export const CASES = [
  {
    id: "kofe_narxi",
    difficulty: 1,
    icon: "cup",
    name: { uz: "Kofe narxi", ru: "Цена кофе", en: "Coffee price" },
    scenario: {
      uz: "Mahalladagi kofexona egasi bir chashka kofe narxini 15 ming so'mdan 25 ming so'mga oshirdi, chunki don kofe narxi qimmatlashdi. Bir oydan keyin sotuvlar 40% ga tushib ketdi, umumiy daromad esa avvalgidan ham kamroq bo'ldi.",
      ru: "Владелец кофейни поднял цену чашки кофе с 15 до 25 тысяч сум, потому что подорожали зёрна. Через месяц продажи упали на 40%, а общая выручка стала даже ниже, чем раньше.",
      en: "A neighborhood coffee shop owner raised the price of a cup from 15,000 to 25,000 som because bean prices rose. A month later sales dropped 40%, and total revenue ended up lower than before.",
    },
    question: {
      uz: "Nima uchun narxni oshirish daromadni kamaytirdi? Egasi keyingi safar nima qilishi kerak edi?",
      ru: "Почему повышение цены снизило выручку? Что владельцу стоило сделать по-другому?",
      en: "Why did raising the price lower revenue? What should the owner have done instead?",
    },
    reasoning: {
      uz: "Bu talabning narx elastikligi yuqori ekanligini ko'rsatadi: kofe kabi mahsulot uchun ko'p muqobil bor, shuning uchun narx 67% oshganda mijozlar boshqa joyga o'tib ketdi va sotuv 40% tushdi. Elastiklik yuqori bo'lgani uchun narx oshishi umumiy daromadni kamaytirdi. To'g'ri javobda narxni oshirishdan oldin raqobatchilar narxini va mijozlarning muqobil variantlarini hisobga olish kerakligi, va narxni asta-sekin yoki qo'shimcha qiymat (sifat, xizmat) bilan asoslab oshirish kerakligi aytilishi kerak.",
      ru: "Это высокая ценовая эластичность спроса: у кофе много альтернатив, поэтому при росте цены на 67% часть клиентов ушла, продажи упали на 40%. При высокой эластичности рост цены снижает общую выручку. В правильном ответе должно быть: перед повышением цены нужно учитывать цены конкурентов и наличие альтернатив у клиентов, повышать цену постепенно или обосновывать её дополнительной ценностью (качество, сервис).",
      en: "This shows high price elasticity of demand: coffee has many substitutes, so a 67% price increase drove customers elsewhere and sales fell 40%. With high elasticity, raising price lowers total revenue. A good answer notes that before raising prices, the owner should consider competitor pricing and customer alternatives, and should raise prices gradually or justify them with added value (quality, service).",
    },
    concepts: {
      uz: "Narx elastikligi va raqobat",
      ru: "Ценовая эластичность и конкуренция",
      en: "Price elasticity and competition",
    },
    mistakes: {
      uz: "Ko'pchilik shunchaki 'narx qimmat bo'lgani uchun odamlar kelmay qo'ydi' deydi, lekin nega aynan shu miqdorda sotuv tushganini va bu umumiy daromadga qanday ta'sir qilganini (elastiklik) tushuntirmaydi.",
      ru: "Многие просто говорят «цена стала слишком высокой», не объясняя связь между эластичностью спроса и падением общей выручки.",
      en: "Many people just say 'it got too expensive' without connecting the size of the drop to elasticity and its effect on total revenue.",
    },
  },
  {
    id: "ikkinchi_ish",
    difficulty: 2,
    icon: "briefcase",
    name: { uz: "Qo'shimcha ish", ru: "Вторая работа", en: "Second job" },
    scenario: {
      uz: "Alisher kunduzgi ishida oyiga 6 million so'm oladi. Unga kechqurunlari qo'shimcha ish taklif qilishdi: haftasiga 15 soat, oyiga qo'shimcha 1.5 million so'm. Bu ish uchun u oilasi bilan vaqt va dam olishdan voz kechishi kerak edi. U rozi bo'ldi, lekin 2 oydan keyin charchab, asosiy ishida xatolar qila boshladi va oy oxirida ish beruvchisi 2 million so'mlik mukofot pulini bermadi.",
      ru: "Алишер получает 6 млн сум в месяц на основной работе. Ему предложили вечернюю подработку: 15 часов в неделю за дополнительные 1.5 млн сум в месяц, но ради неё пришлось отказаться от времени с семьёй и отдыха. Он согласился, но через 2 месяца устал, начал ошибаться на основной работе, и работодатель не выплатил ему премию в 2 млн сум.",
      en: "Aliher earns 6 million som a month at his day job. He was offered evening work: 15 hours a week for an extra 1.5 million som a month, at the cost of family time and rest. He took it, but after two months he was exhausted, started making mistakes at his main job, and lost a 2-million-som bonus.",
    },
    question: {
      uz: "Alisherning qarori iqtisodiy jihatdan qanday xato edi? Muqobil xarajat (opportunity cost) orqali tushuntiring.",
      ru: "В чём экономическая ошибка решения Алишера? Объясните через понятие альтернативных издержек.",
      en: "What was economically wrong with Aliher's decision? Explain using opportunity cost.",
    },
    reasoning: {
      uz: "Alisher faqat ko'zga ko'ringan pulga (1.5 million) e'tibor berdi, lekin yashirin muqobil xarajatlarni — charchoq tufayli asosiy ishdagi unumdorlik pasayishini (2 million bonus yo'qotildi), sog'lig'i va oila bilan vaqtni — hisobga olmadi. Haqiqiy natija: +1.5 million - 2 million yo'qotilgan bonus = aslida salbiy. To'g'ri javobda qo'shimcha daromadni faqat pul bilan emas, vaqt va energiya, hamda asosiy ishga ta'sirini ham hisoblash kerakligi aytilishi kerak.",
      ru: "Алишер учёл только видимые деньги (1.5 млн), но не учёл скрытые альтернативные издержки: снижение продуктивности на основной работе из-за усталости (потеря премии в 2 млн), здоровье и время с семьёй. Реальный итог: +1.5 млн − 2 млн потерянной премии = фактически убыток. В правильном ответе должно быть, что дополнительный доход нужно оценивать не только деньгами, но и временем, энергией и влиянием на основную работу.",
      en: "Aliher only weighed the visible money (1.5 million) and ignored hidden opportunity costs: lower productivity at his main job from fatigue (losing the 2-million bonus), health, and family time. The real outcome: +1.5 million − 2 million lost bonus = actually negative. A good answer notes that extra income should be weighed against time, energy, and the effect on the main job, not just cash.",
    },
    concepts: {
      uz: "Muqobil xarajat (opportunity cost)",
      ru: "Альтернативные издержки",
      en: "Opportunity cost",
    },
    mistakes: {
      uz: "Ko'pchilik shunchaki 'juda ko'p ishlagani uchun charchagan' deydi, lekin umumiy foyda-zarar hisobini pul bilan taqqoslab chiqarmaydi.",
      ru: "Многие просто говорят «он слишком много работал», но не сводят итоговый баланс выгод и потерь в деньгах.",
      en: "Many just say 'he overworked himself' without actually tallying the net financial gain or loss.",
    },
  },
  {
    id: "konsert_chiptasi",
    difficulty: 1,
    icon: "ticket",
    name: { uz: "Konsert chiptasi", ru: "Билет на концерт", en: "Concert ticket" },
    scenario: {
      uz: "Malika konsertga 300 ming so'mlik chipta oldi, pulni qaytarib bo'lmaydi. Konsert kuni kuchli yomg'ir yog'ib, tashqariga chiqish xavfli bo'lib qoldi. Malika 'pul to'laganman, borishim kerak' deb, yomg'irda borib shamollab qoldi va ish joyida 3 kun ishlay olmadi (1 kunlik maosh 200 ming so'm).",
      ru: "Малика купила билет на концерт за 300 тысяч сум, деньги не возвращаются. В день концерта пошёл сильный дождь, выходить на улицу стало рискованно. Малика решила «я уже заплатила, надо идти», пошла под дождём, простудилась и не смогла работать 3 дня (дневная зарплата 200 тысяч сум).",
      en: "Malika bought a 300,000-som concert ticket, non-refundable. On the day of the concert there was heavy rain, making it risky to go out. Telling herself 'I already paid, I have to go', she went anyway, caught a cold, and missed 3 days of work (200,000 som per day).",
    },
    question: {
      uz: "Malikaning 'pul to'laganman, borishim kerak' degan mulohazasida qanday xato bor?",
      ru: "В чём ошибка рассуждения Малики «я уже заплатила, значит должна пойти»?",
      en: "What's wrong with Malika's reasoning, 'I already paid, so I have to go'?",
    },
    reasoning: {
      uz: "Bu klassik cho'kib ketgan xarajat (sunk cost) xatosi: 300 ming so'm allaqachon sarflangan va uni qaytarib bo'lmaydi, shuning uchun bu qaror qabul qilishga ta'sir qilmasligi kerak. Qaror faqat kelajakdagi xarajat-foyda asosida qabul qilinishi kerak: yomg'irda borish xavfi (kasal bo'lish, 600 ming so'mlik yo'qotilgan maosh) chiptaning narxidan (300 ming) ancha katta. To'g'ri javobda allaqachon sarflangan pulni kelajakdagi qarorga aralashtirmaslik kerakligi va faqat qolgan xavf-foyda balansi hisobga olinishi kerakligi aytilishi kerak.",
      ru: "Это классическая ошибка невозвратных издержек (sunk cost): 300 тысяч уже потрачены и не вернутся, поэтому они не должны влиять на решение. Решение нужно принимать только исходя из будущих издержек и выгод: риск похода под дождём (болезнь, потеря 600 тысяч зарплаты) намного больше цены билета. В правильном ответе должно быть, что уже потраченные деньги не должны влиять на будущее решение — важен только оставшийся баланс риска и выгоды.",
      en: "This is the classic sunk cost fallacy: the 300,000 som is already spent and gone regardless of what she does, so it shouldn't factor into the decision. The decision should rest only on future costs and benefits: the risk of going out in the rain (illness, losing 600,000 in wages) far outweighs the ticket price. A good answer explains that money already spent shouldn't influence a forward-looking decision — only the remaining risk-benefit balance matters.",
    },
    concepts: {
      uz: "Cho'kib ketgan xarajat (sunk cost)",
      ru: "Невозвратные издержки (sunk cost)",
      en: "Sunk cost fallacy",
    },
    mistakes: {
      uz: "Ko'pchilik 'pulni behuda ketkazmaslik kerak' deb o'ylab, aslida yanada ko'proq zarar ko'radi — bu sunk cost xatosining aynan o'zi.",
      ru: "Многие думают «нельзя тратить деньги впустую» и в итоге теряют ещё больше — это и есть сама ошибка невозвратных издержек.",
      en: "Many reason 'I shouldn't waste the money' and end up losing even more — which is the sunk cost fallacy itself.",
    },
  },
  {
    id: "yangi_dokon",
    difficulty: 3,
    icon: "storefront",
    name: { uz: "Yangi do'kon", ru: "Новый магазин", en: "The new store" },
    scenario: {
      uz: "Kichik mahalla do'konining egasi Dilnoza 10 yildan beri barqaror mijozlarga ega edi. Ko'cha boshida katta supermarket ochildi va deyarli barcha mahsulotlarni 10-15% arzonroq sotmoqda. Dilnoza raqobatga bardosh berish uchun narxlarini supermarket darajasigacha tushirdi, lekin uning ulgurji xarid narxi supermarketnikidan yuqoriroq edi, shuning uchun u zararga ishlay boshladi.",
      ru: "У Дильноры, владелицы небольшого районного магазина, 10 лет была стабильная клиентура. В начале улицы открылся крупный супермаркет и продаёт почти все товары на 10-15% дешевле. Дильнора снизила цены до уровня супермаркета, чтобы конкурировать, но её оптовые закупочные цены выше, поэтому она стала работать в убыток.",
      en: "Dilnoza has run a small neighborhood store with loyal customers for 10 years. A large supermarket opened nearby, selling nearly everything 10-15% cheaper. To compete, Dilnoza cut her prices to match it, but her wholesale costs are higher than the supermarket's, so she started losing money.",
    },
    question: {
      uz: "Dilnoza qanday strategik xato qildi? U buning o'rniga nima qilishi mumkin edi?",
      ru: "Какую стратегическую ошибку допустила Дильнора? Что она могла сделать вместо этого?",
      en: "What strategic mistake did Dilnoza make? What could she have done instead?",
    },
    reasoning: {
      uz: "Dilnoza narx bo'yicha raqobatga kirdi, lekin uning xarajat tuzilishi (kichik hajmda xarid qilgani uchun ulgurji chegirmasi kam) katta supermarketnikidan farq qiladi, shuning uchun bir xil narxda ishlab zarar ko'radi. To'g'ri strategiya — narx emas, farqlanish (differentiation) orqali raqobatlashish: qulay joylashuv, tezkor xizmat, shaxsiy munosabat, kreditga sotish, yetkazib berish kabi supermarket taklif qilmaydigan qulayliklar. To'g'ri javobda kichik biznes uchun narx raqobati yutuqsiz ekanligi va qiymat asosida farqlanish kerakligi tushuntirilishi kerak.",
      ru: "Дильнора начала конкурировать по цене, но её структура издержек (меньшие объёмы закупки — меньшие оптовые скидки) отличается от супермаркета, поэтому при тех же ценах она уходит в минус. Правильная стратегия — конкурировать не ценой, а дифференциацией: удобное расположение, быстрое обслуживание, личный подход, продажа в долг, доставка — то, чего супермаркет не предлагает. В правильном ответе должно быть объяснено, что ценовая конкуренция проигрышна для малого бизнеса и нужна дифференциация по ценности.",
      en: "Dilnoza competed on price, but her cost structure (smaller purchase volumes mean smaller wholesale discounts) differs from the supermarket's, so matching its prices puts her at a loss. The right strategy is to compete on differentiation, not price: convenient location, fast service, personal relationships, credit sales, delivery — things the supermarket doesn't offer. A good answer explains that price competition is a losing game for a small business and value-based differentiation is the way forward.",
    },
    concepts: {
      uz: "Raqobatiy ustunlik va xarajat tuzilishi",
      ru: "Конкурентное преимущество и структура издержек",
      en: "Competitive advantage and cost structure",
    },
    mistakes: {
      uz: "Ko'pchilik 'narxni yanada tushirish kerak edi' deb javob beradi, lekin bu aynan Dilnoza qilgan va zarar keltirgan xato edi.",
      ru: "Многие отвечают «нужно было снизить цену ещё сильнее», но это именно та ошибка, которую уже совершила Дильнора.",
      en: "Many answer 'she should have cut prices further', but that's exactly the mistake that already hurt Dilnoza.",
    },
  },
  {
    id: "chegirma_kuni",
    difficulty: 2,
    icon: "tag",
    name: { uz: "Chegirma kuni", ru: "День скидок", en: "Discount day" },
    scenario: {
      uz: "Kiyim do'koni egasi barcha mahsulotlarga 50% chegirma e'lon qildi. Sotuvlar keskin oshdi, do'kon to'la odam bo'ldi, lekin oy oxirida hisoblab ko'rsa, umumiy foyda chegirmasiz oydagidan kam bo'lib chiqdi.",
      ru: "Владелец магазина одежды объявил скидку 50% на всё. Продажи резко выросли, в магазине было полно людей, но в конце месяца оказалось, что общая прибыль ниже, чем в обычный месяц без скидки.",
      en: "A clothing store owner announced a 50% discount on everything. Sales surged and the store was packed, but at the end of the month total profit turned out lower than a normal month without the discount.",
    },
    question: {
      uz: "Ko'p mijoz kelib, ko'p sotuv bo'lgani holda, nega foyda kamaydi?",
      ru: "Почему при большом наплыве покупателей и высоких продажах прибыль оказалась ниже?",
      en: "With so many customers and so many sales, why did profit end up lower?",
    },
    reasoning: {
      uz: "Sotilgan dona soni (revenue hajmi) oshgan bo'lishi mumkin, lekin har bir mahsulotdan olinadigan foyda marjasi yarmiga tushgan. Agar asl narx tannarxdan unchalik baland bo'lmasa, 50% chegirma marjani juda pastga tushirib yuborishi mumkin. Ko'proq sotuv ko'proq foyda degani emas — muhimi umumiy foyda = (narx - tannarx) x sotilgan miqdor. To'g'ri javobda foyda marjasi va sotuv hajmi orasidagi farq, va chegirmadan oldin marjani hisoblash zarurligi aytilishi kerak.",
      ru: "Количество проданных единиц могло вырасти, но маржа прибыли на каждый товар упала вдвое. Если исходная цена не сильно превышала себестоимость, скидка 50% могла увести маржу почти в ноль. Больше продаж не значит больше прибыли — важна формула: прибыль = (цена − себестоимость) × количество. В правильном ответе должна быть разница между объёмом продаж и общей прибылью, и необходимость считать маржу перед скидкой.",
      en: "Unit sales may have risen, but the profit margin on each item was cut in half. If the original price wasn't far above cost, a 50% discount can push margin close to zero or negative. More sales doesn't mean more profit — what matters is profit = (price − cost) × units sold. A good answer distinguishes sales volume from total profit and stresses checking margin before running a discount.",
    },
    concepts: {
      uz: "Foyda marjasi va narxlash strategiyasi",
      ru: "Маржа прибыли и ценовая стратегия",
      en: "Profit margin and pricing strategy",
    },
    mistakes: {
      uz: "Ko'pchilik 'ko'p odam kelgani uchun foyda ko'p bo'lishi kerak edi' deydi, sotilgan dona soni bilan umumiy foydani chalkashtiradi.",
      ru: "Многие говорят «раз пришло много людей, прибыль должна была вырасти», путая количество продаж с итоговой прибылью.",
      en: "Many say 'so many customers means profit should be up', confusing unit sales with actual profit.",
    },
  },
  {
    id: "bank_foizi",
    difficulty: 3,
    icon: "bank",
    name: { uz: "Bank hisobi", ru: "Банковский вклад", en: "The bank deposit" },
    scenario: {
      uz: "Yusuf 50 million so'mini bankka yillik 14% foiz stavkasi bilan qo'ydi. Yil oxirida u 7 million so'm foiz oldi va xursand bo'ldi. Lekin o'sha yili narxlar (inflyatsiya) 18% ga oshgan edi.",
      ru: "Юсуф положил 50 млн сум в банк под 14% годовых. В конце года он получил 7 млн сум процентов и был доволен. Но в том же году цены (инфляция) выросли на 18%.",
      en: "Yusuf deposited 50 million som in a bank at 14% annual interest. At year's end he earned 7 million som in interest and was pleased. But that same year, prices (inflation) rose 18%.",
    },
    question: {
      uz: "Yusuf haqiqatan ham boyidimi? Nega yoki nega yo'q?",
      ru: "Стал ли Юсуф действительно богаче? Почему да или почему нет?",
      en: "Did Yusuf actually get richer? Why or why not?",
    },
    reasoning: {
      uz: "Bu yerda nominal foiz stavkasi (14%) bilan real foiz stavkasi (inflyatsiyaga tuzatilgan) orasidagi farqni tushunish kerak. Real foiz stavkasi taxminan 14% - 18% = -4% ga teng, ya'ni Yusufning pulining sotib olish qobiliyati aslida kamaydi, garchi nominal miqdor oshgan bo'lsa ham. To'g'ri javobda nominal va real daromad farqi, inflyatsiya pulning qadrsizlanishiga olib kelishi, va Yusuf aslida real ma'noda boyimagani, balki 'pul illyuziyasi' holatida ekanligi aytilishi kerak.",
      ru: "Здесь важно различие между номинальной ставкой (14%) и реальной ставкой (с поправкой на инфляцию). Реальная ставка примерно 14% − 18% = −4%, то есть покупательная способность денег Юсуфа фактически снизилась, хотя номинальная сумма выросла. В правильном ответе должно быть объяснение разницы между номинальным и реальным доходом, обесценивание денег из-за инфляции, и что Юсуф в реальном выражении не разбогател — это «денежная иллюзия».",
      en: "The key here is the gap between the nominal rate (14%) and the real, inflation-adjusted rate. The real rate is roughly 14% − 18% = −4%, meaning Yusuf's purchasing power actually fell even though the nominal amount grew. A good answer explains the difference between nominal and real returns, how inflation erodes money's value, and that Yusuf didn't really get richer — he experienced 'money illusion'.",
    },
    concepts: {
      uz: "Inflyatsiya va real foiz stavkasi",
      ru: "Инфляция и реальная процентная ставка",
      en: "Inflation and real interest rate",
    },
    mistakes: {
      uz: "Ko'pchilik faqat nominal raqamga qarab 'ha, u 7 million foyda oldi, boyidi' deydi, inflyatsiyani hisobga olmaydi.",
      ru: "Многие смотрят только на номинальную цифру и говорят «да, он заработал 7 млн, разбогател», не учитывая инфляцию.",
      en: "Many look only at the nominal figure and say 'yes, he earned 7 million, he's richer', ignoring inflation.",
    },
  },
];
