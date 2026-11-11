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
  {
    id: "coke_new",
    difficulty: 1,
    icon: "cup",
    name: { uz: "Yangi Coca-Cola", ru: "Новая Coca-Cola", en: "New Coke" },
    scenario: {
      uz: "1985-yilda Coca-Cola Pepsi bilan raqobatda ortda qolayotganini ko'rib, yangi, shirinroq retseptni chiqardi. Kompaniya taxminan 200 000 kishi ishtirokida ta'm sinovi o'tkazgan va ko'pchilik yangi ta'mni afzal ko'rgan. Lekin sotuvga chiqqach, xaridorlar norozilik qila boshladi va taxminan ikki yarim oydan keyin kompaniya eski retseptni qaytarishga majbur bo'ldi.",
      ru: "В 1985 году Coca-Cola, уступая Pepsi, выпустила новый, более сладкий рецепт. Компания провела дегустации примерно с 200 000 участников, и большинство предпочли новый вкус. Но после запуска покупатели возмутились, и примерно через два с половиной месяца компании пришлось вернуть старый рецепт.",
      en: "In 1985, losing ground to Pepsi, Coca-Cola launched a new, sweeter recipe. The company ran taste tests with roughly 200,000 people and most preferred the new taste. But after launch customers protested, and about two and a half months later the company had to bring the old recipe back.",
    },
    question: {
      uz: "Ta'm sinovida yutgan mahsulot nega bozorda yutqazdi? Kompaniya qanday xatoga yo'l qo'ydi?",
      ru: "Почему продукт, выигравший дегустации, проиграл на рынке? В чём ошибка компании?",
      en: "Why did a product that won taste tests lose in the market? What mistake did the company make?",
    },
    reasoning: {
      uz: "Sinovda odamlar bir xonaning ichida kichik qultum ichib, faqat ta'mni baholadi. Haqiqiy xaridda esa ular ta'mni emas, brendni, odatni va hissiy bog'liqlikni sotib oladi. Eski Coca-Cola ko'pchilik uchun shaxsiy va madaniy qadriyat edi, uni olib qo'yish yo'qotish hissini yaratdi. Xulosa: so'rovdagi ustunlik haqiqiy xatti-harakatni ko'rsatmaydi, brend sadoqatini alohida hisobga olish kerak.",
      ru: "В тестах люди пробовали маленький глоток и оценивали только вкус. В реальной покупке они покупают не вкус, а бренд, привычку и эмоциональную связь. Старая Coca-Cola была для многих личной и культурной ценностью, и её изъятие вызвало чувство потери. Вывод: преимущество в опросе не равно реальному поведению, лояльность к бренду нужно учитывать отдельно.",
      en: "In tests people took a small sip and judged only taste. In real purchases they buy the brand, the habit and an emotional bond, not just flavor. The old Coke was a personal and cultural symbol for many, and removing it felt like a loss. Lesson: winning a survey is not the same as real behavior, and brand loyalty must be accounted for separately.",
    },
    concepts: {
      uz: "Brend sadoqati va iste'molchi psixologiyasi",
      ru: "Лояльность к бренду и психология потребителя",
      en: "Brand loyalty and consumer psychology",
    },
    mistakes: {
      uz: "Ko'pchilik 'ta'mi yomon ekan' deydi yoki sinov kam odamda o'tkazilgan deb o'ylaydi, aslida muammo sinov o'lchamagan narsada, ya'ni brendga bog'liqlikda.",
      ru: "Многие говорят «вкус был плохой» или «выборка маленькая», хотя проблема в том, что тест не измерил привязанность к бренду.",
      en: "Many say 'the taste was bad' or 'the sample was too small', when the real problem is that the test never measured attachment to the brand.",
    },
  },
  {
    id: "ikea_yigma",
    difficulty: 1,
    icon: "storefront",
    name: { uz: "IKEA va qutidagi mebel", ru: "IKEA и мебель в коробке", en: "IKEA flat pack" },
    scenario: {
      uz: "IKEA mebelni tayyor holda emas, qismlarga ajratilgan yassi qutilarda sotadi, uni xaridorning o'zi uyda yig'adi. Xaridorlar yig'ish uchun vaqt va mehnat sarflaydi, lekin baribir IKEA mebeli o'xshash tayyor mebeldan ancha arzon.",
      ru: "IKEA продаёт мебель не готовой, а в плоских коробках в разобранном виде, и покупатель собирает её дома сам. Покупатели тратят время и силы на сборку, но мебель IKEA всё равно заметно дешевле похожей готовой.",
      en: "IKEA sells furniture not assembled but in flat boxes, and customers put it together at home. Customers spend time and effort on assembly, yet IKEA furniture is still much cheaper than similar ready-made pieces.",
    },
    question: {
      uz: "Yassi quti tizimi IKEA'ga qanday xarajatlarni tejaydi va narx pastligi qayerdan keladi?",
      ru: "Какие издержки экономит IKEA с помощью плоских коробок и откуда берётся низкая цена?",
      en: "Which costs does the flat-pack system save IKEA, and where does the low price come from?",
    },
    reasoning: {
      uz: "Yassi quti bir yuk mashinasiga ancha ko'p mahsulot sig'adi, shuning uchun tashish, ombor va yo'qotish xarajatlari kamayadi. Yig'ish ishini xaridor o'z zimmasiga oladi, ya'ni kompaniya ish haqi xarajatini tejaydi. Tejalgan pul narxga o'tadi. Bu xarajat ustunligi: kompaniya o'z xarajatini kamaytirib, past narxni foyda bilan birga ushlab turadi.",
      ru: "В плоскую коробку в один грузовик помещается намного больше товара, поэтому падают расходы на перевозку, склад и повреждения. Сборку берёт на себя покупатель, и компания экономит на оплате труда. Сэкономленные деньги попадают в цену. Это преимущество по издержкам: компания снижает затраты и держит низкую цену, сохраняя прибыль.",
      en: "A flat box lets far more goods fit in one truck, cutting transport, storage and damage costs. The customer does the assembly, so the company saves on labor. The savings pass into the price. This is a cost advantage: lower costs let the firm keep prices low and still earn a profit.",
    },
    concepts: {
      uz: "Xarajat ustunligi",
      ru: "Преимущество по издержкам",
      en: "Cost advantage",
    },
    mistakes: {
      uz: "Ko'pchilik 'sifati past bo'lgani uchun arzon' deb o'ylaydi, tashish va yig'ish xarajatlarini unutadi.",
      ru: "Многие думают, что «дёшево, потому что качество низкое», забывая про затраты на перевозку и сборку.",
      en: "Many assume 'it is cheap because the quality is low', forgetting the transport and assembly costs.",
    },
  },
  {
    id: "uber_surge",
    difficulty: 1,
    icon: "tag",
    name: { uz: "Uber narxi oshdi", ru: "Подорожание Uber", en: "Uber surge" },
    scenario: {
      uz: "Yangi yil kechasi soat 00:30 da Uber narxi oddiy kundagidan 3 baravar oshib ketdi. Yo'lovchilar g'azablandi: 'Bu insofsizlik!' Biroq narx oshgach, ko'proq haydovchi liniyaga chiqdi va kutish vaqti qisqardi.",
      ru: "В новогоднюю ночь в 00:30 цена в Uber выросла в 3 раза по сравнению с обычным днём. Пассажиры возмущались: «Это несправедливо!» Но после роста цены на линию вышло больше водителей, и время ожидания сократилось.",
      en: "On New Year's night at 00:30 an Uber ride cost 3 times the usual price. Riders were angry: 'This is unfair!' But after the price rose, more drivers went online and wait times dropped.",
    },
    question: {
      uz: "Narx oshishi bozorda qanday vazifani bajardi va nega aynan shunday natija chiqdi?",
      ru: "Какую роль сыграл рост цены на рынке и почему получился такой результат?",
      en: "What role did the price increase play in the market and why did this result occur?",
    },
    reasoning: {
      uz: "Kechasi talab keskin oshdi, taklif (haydovchilar soni) esa o'zgarmadi, shuning uchun taqchillik paydo bo'ldi. Yuqori narx ikki ish qiladi: eng zarur odamlar uchun mashinani qoldiradi va yangi haydovchilarni jalb qiladi. Narx signal vazifasini bajaradi. Narx cheklansa, taqchillik saqlanardi va mashina yo'q bo'lardi.",
      ru: "Ночью спрос резко вырос, а предложение (число водителей) осталось прежним, возник дефицит. Высокая цена делает две вещи: оставляет машины тем, кому они нужнее всего, и привлекает новых водителей. Цена работает как сигнал. Если бы её ограничили, дефицит остался бы и машин бы просто не было.",
      en: "At night demand jumped while supply (the number of drivers) stayed the same, creating a shortage. A high price does two things: it keeps cars for those who need them most, and it attracts new drivers. The price acts as a signal. If it were capped, the shortage would remain and there would simply be no cars.",
    },
    concepts: {
      uz: "Talab va taklif, narx signal sifatida",
      ru: "Спрос и предложение, цена как сигнал",
      en: "Supply and demand, price as a signal",
    },
    mistakes: {
      uz: "Ko'pchilik buni faqat 'ochko'zlik' deb izohlaydi va narx taqchillikni qanday bartaraf etishini ko'rmaydi.",
      ru: "Многие объясняют это просто «жадностью» и не видят, как цена устраняет дефицит.",
      en: "Many explain it as plain 'greed' and miss how the price resolves the shortage.",
    },
  },
  {
    id: "kodak_kamera",
    difficulty: 2,
    icon: "briefcase",
    name: { uz: "Kodak", ru: "Kodak", en: "Kodak" },
    scenario: {
      uz: "Kodak raqamli kamerani 1975-yilda o'zi ixtiro qilgan. Lekin kompaniya plyonka sotishdan katta foyda olardi va yangi texnologiyani jiddiy rivojlantirmadi. Raqamli suratga olish ommalashgach sotuvlar tushdi va Kodak 2012-yilda bankrotlik himoyasini (Chapter 11) so'radi.",
      ru: "Цифровую камеру Kodak изобрела сама в 1975 году. Но компания получала огромную прибыль от продажи плёнки и не стала всерьёз развивать новую технологию. Когда цифровая съёмка стала массовой, продажи рухнули, и в 2012 году Kodak обратилась за защитой от банкротства (Chapter 11).",
      en: "Kodak invented the digital camera itself in 1975. But the company earned huge profits from selling film and did not seriously develop the new technology. When digital photography went mainstream, sales collapsed and Kodak filed for bankruptcy protection (Chapter 11) in 2012.",
    },
    question: {
      uz: "Ixtirochi kompaniya nega o'z ixtirosidan yutqazdi? Qaysi iqtisodiy mantiq uni to'sib qo'ydi?",
      ru: "Почему компания-изобретатель проиграла на собственном изобретении? Какая экономическая логика ей помешала?",
      en: "Why did the inventor lose out on its own invention? What economic logic held it back?",
    },
    reasoning: {
      uz: "Kodak yangi texnologiya eski, juda foydali biznesini yeb qo'yishidan (kannibalizatsiya) qo'rqdi. Hozirgi foyda uzoq muddatli xavfdan muhimroq ko'rindi. Yangi, avvaliga arzon va sifatsiz ko'ringan texnologiya vaqt o'tib bozorni egalladi (buzuvchi innovatsiya). O'z mahsulotini o'zi eskirtirmagan kompaniyani boshqalar eskirtirdi.",
      ru: "Kodak боялась, что новая технология съест её старый, очень прибыльный бизнес (каннибализация). Сегодняшняя прибыль казалась важнее долгосрочной угрозы. Новая технология, поначалу дешёвая и несовершенная, со временем захватила рынок (подрывная инновация). Тому, кто не обесценил свой продукт сам, это сделали другие.",
      en: "Kodak feared the new technology would eat its old, very profitable business (cannibalization). Today's profit seemed more important than the long-term threat. The new technology, at first cheap and imperfect, eventually took over the market (disruptive innovation). A company that did not make its own product obsolete had it done by others.",
    },
    concepts: {
      uz: "Buzuvchi innovatsiya va kannibalizatsiya qo'rquvi",
      ru: "Подрывная инновация и страх каннибализации",
      en: "Disruptive innovation and fear of cannibalization",
    },
    mistakes: {
      uz: "Ko'pchilik 'Kodak texnologiyani bilmagan' deydi, aslida u bilgan, lekin foydasini yo'qotishni istamagan.",
      ru: "Многие говорят «Kodak не знала о технологии», хотя она знала, но не хотела терять прибыль.",
      en: "Many say 'Kodak did not know the technology', but it did; it simply did not want to give up its profits.",
    },
  },
  {
    id: "blockbuster",
    difficulty: 2,
    icon: "ticket",
    name: { uz: "Blockbuster", ru: "Blockbuster", en: "Blockbuster" },
    scenario: {
      uz: "2000-yilda Netflix asoschilari o'z kompaniyasini Blockbuster'ga taxminan 50 million dollarga sotishni taklif qilgan (o'zlarining aytishicha), lekin rad javobi olgan. Blockbuster esa kechiktirilgan videoni qaytarganlik uchun jarimalardan katta daromad olardi. 2010-yilda Blockbuster bankrot bo'ldi.",
      ru: "В 2000 году основатели Netflix, по их словам, предлагали Blockbuster купить их компанию примерно за 50 млн долларов, но получили отказ. Blockbuster при этом получал большой доход со штрафов за просрочку возврата кассет. В 2010 году Blockbuster обанкротился.",
      en: "In 2000, Netflix's founders say they offered to sell the company to Blockbuster for about 50 million dollars, but were turned down. Blockbuster, meanwhile, earned a lot from late fees on overdue rentals. In 2010 Blockbuster went bankrupt.",
    },
    question: {
      uz: "Blockbuster nega kuchli pozitsiyadan yiqildi? Qisqa muddatli foyda unga qanday zarar keltirdi?",
      ru: "Почему Blockbuster рухнул с сильных позиций? Чем ему навредила краткосрочная прибыль?",
      en: "Why did Blockbuster fall from a position of strength? How did short-term profit hurt it?",
    },
    reasoning: {
      uz: "Blockbuster do'konlar tarmog'i va jarimalardan keladigan daromadga bog'lanib qolgan edi. Netflix esa pochta orqali, keyinroq internet orqali, jarimasiz xizmat taklif qildi va mijozlar qulaylikka o'tdi. Blockbuster hozirgi daromadni himoya qilib, yangi modelni kichik deb hisobladi. Qisqa muddatli foyda strategik moslashishga xalaqit berdi.",
      ru: "Blockbuster был привязан к сети магазинов и доходам от штрафов. Netflix предложил доставку по почте, а затем через интернет и без штрафов, и клиенты ушли туда, где удобнее. Blockbuster защищал текущий доход и считал новую модель мелочью. Краткосрочная прибыль помешала стратегической адаптации.",
      en: "Blockbuster was tied to its store network and late-fee income. Netflix offered mail and later internet delivery with no late fees, and customers moved to the more convenient option. Blockbuster protected current revenue and dismissed the new model as small. Short-term profit blocked strategic adaptation.",
    },
    concepts: {
      uz: "Qisqa muddatli foyda tuzog'i va biznes modelni moslashtirish",
      ru: "Ловушка краткосрочной прибыли и адаптация бизнес-модели",
      en: "The short-term profit trap and business model adaptation",
    },
    mistakes: {
      uz: "Ko'pchilik 'internet tez rivojlandi' deydi, lekin Blockbuster'ning o'z qarorlari va mijozlarni asabiylashtirgan jarimalarini e'tiborsiz qoldiradi.",
      ru: "Многие говорят «интернет развился слишком быстро», игнорируя собственные решения Blockbuster и раздражавшие клиентов штрафы.",
      en: "Many say 'the internet moved too fast', ignoring Blockbuster's own decisions and the late fees that irritated customers.",
    },
  },
  {
    id: "jcpenney",
    difficulty: 2,
    icon: "tag",
    name: { uz: "JCPenney kuponlari", ru: "Купоны JCPenney", en: "JCPenney coupons" },
    scenario: {
      uz: "2012-yilda JCPenney do'koni doimiy chegirma va kuponlarni bekor qilib, 'har kuni halol narx' tizimiga o'tdi. Mahsulotlarning umumiy narxi aslida o'sha-o'sha, ba'zilari hatto arzonroq bo'ldi. Ammo xaridorlar ketib qoldi va sotuvlar taxminan 25% ga tushdi.",
      ru: "В 2012 году магазин JCPenney отменил постоянные скидки и купоны и перешёл на систему «честных цен каждый день». Общий уровень цен фактически остался прежним, а что-то стало даже дешевле. Но покупатели ушли, и продажи упали примерно на 25%.",
      en: "In 2012 the retailer JCPenney scrapped constant discounts and coupons and switched to 'fair prices every day'. Overall prices were actually about the same, some even lower. But shoppers left and sales fell by about 25%.",
    },
    question: {
      uz: "Narx pasaymagan bo'lsa ham, xaridorlar nega ketib qoldi? Odamlar narxni qanday baholaydi?",
      ru: "Почему покупатели ушли, хотя цены не выросли? Как люди оценивают цену?",
      en: "Why did shoppers leave even though prices did not rise? How do people judge a price?",
    },
    reasoning: {
      uz: "Odamlar narxni mutlaq qiymat bilan emas, 'avvalgi narx'ga (tayanch narx) solishtirib baholaydi. Chegirma xaridorga 'men yutdim' degan hissiyot beradi. Kuponlar yo'qolgach, bu hissiyot ham yo'qoldi, garchi pul jihatidan farq bo'lmasa ham. Xulosa: xaridor uchun narxning o'zi emas, uning idroki ham muhim.",
      ru: "Люди оценивают цену не в абсолюте, а по сравнению с «прежней ценой» (референсная цена). Скидка даёт покупателю чувство «я выиграл». Когда купоны исчезли, исчезло и это чувство, хотя в деньгах разницы не было. Вывод: для покупателя важна не только цена, но и её восприятие.",
      en: "People judge a price not in absolute terms but against a 'previous price' (a reference price). A discount gives the shopper a feeling of 'I won'. When coupons vanished, so did that feeling, even though in money terms nothing changed. Lesson: what matters to buyers is not just the price but how it is perceived.",
    },
    concepts: {
      uz: "Tayanch narx va narx idroki",
      ru: "Референсная цена и восприятие цены",
      en: "Reference price and price perception",
    },
    mistakes: {
      uz: "Ko'pchilik 'narx bir xil bo'lsa, xaridor ham bir xil bo'ladi' deb o'ylaydi, psixologiyani hisobga olmaydi.",
      ru: "Многие считают, что «если цена та же, то и покупатель тот же», не учитывая психологию.",
      en: "Many assume 'same price means same customer', leaving psychology out of the picture.",
    },
  },
  {
    id: "quibi",
    difficulty: 2,
    icon: "ticket",
    name: { uz: "Quibi", ru: "Quibi", en: "Quibi" },
    scenario: {
      uz: "Quibi nomli startap telefonda ko'rishga mo'ljallangan qisqa, qimmat ishlangan videolar xizmatini yaratdi. U taxminan 1,75 milliard dollar mablag' jalb qildi, lekin 2020-yilda ishga tushgandan atigi bir necha oy o'tib yopildi. Bunda YouTube va TikTok'da shunga o'xshash videolar bepul edi.",
      ru: "Стартап Quibi создал сервис коротких дорогих по производству видео для просмотра на телефоне. Он привлёк около 1,75 млрд долларов, но закрылся уже через несколько месяцев после запуска в 2020 году. При этом похожие видео на YouTube и TikTok были бесплатными.",
      en: "A startup called Quibi built a service of short, expensively produced videos made for phones. It raised about 1.75 billion dollars, but shut down only a few months after launching in 2020. Meanwhile, similar videos on YouTube and TikTok were free.",
    },
    question: {
      uz: "Katta pul bo'lishiga qaramay, Quibi nega muvaffaqiyatsiz bo'ldi? Asosiy xato nimada?",
      ru: "Почему Quibi провалился, несмотря на огромные деньги? В чём главная ошибка?",
      en: "Why did Quibi fail despite all that money? What was the main mistake?",
    },
    reasoning: {
      uz: "Quibi mijozlar haqiqatan ehtiyoj sezadigan muammoni hal qilmadi, ya'ni mahsulot va bozor mos kelmadi. Pul ishlab chiqarishga ketdi, lekin odamlar to'lashga tayyor emasligi tekshirilmadi, bepul muqobillar mavjud edi. Kapital mahsulot-bozor mosligining o'rnini bosa olmaydi.",
      ru: "Quibi не решал проблему, которую клиенты реально ощущали: продукт не совпал с рынком. Деньги ушли на производство, но готовность людей платить не проверили, а бесплатные альтернативы уже были. Капитал не заменяет соответствие продукта рынку.",
      en: "Quibi did not solve a problem customers actually felt: the product did not fit the market. Money went into production, but people's willingness to pay was never tested, and free alternatives already existed. Capital cannot replace product-market fit.",
    },
    concepts: {
      uz: "Mahsulot-bozor mosligi",
      ru: "Соответствие продукта рынку (product-market fit)",
      en: "Product-market fit",
    },
    mistakes: {
      uz: "Ko'pchilik 'mablag' yetmagan' yoki 'pandemiya aybdor' deydi, lekin muammo kapitalda emas, mahsulotga bo'lgan talabda.",
      ru: "Многие говорят «не хватило денег» или «виновата пандемия», но проблема была не в капитале, а в спросе на продукт.",
      en: "Many say 'not enough money' or 'blame the pandemic', but the problem was not capital, it was demand for the product.",
    },
  },
  {
    id: "peloton",
    difficulty: 2,
    icon: "briefcase",
    name: { uz: "Peloton", ru: "Peloton", en: "Peloton" },
    scenario: {
      uz: "Pandemiya paytida uyda mashq qilish keskin ommalashdi va Peloton velotrenajyorlari sotuvi keskin oshdi. Kompaniya talab doimiy bo'ladi deb o'ylab, ishlab chiqarish va omborlarni kengaytirdi. Pandemiya susaygach, talab pasaydi, tovar ortib qoldi va kompaniya zarar ko'ra boshladi.",
      ru: "Во время пандемии домашние тренировки резко стали популярными, и продажи велотренажёров Peloton взлетели. Компания решила, что спрос останется таким навсегда, и расширила производство и склады. Когда пандемия ослабла, спрос упал, товар залежался, и компания начала нести убытки.",
      en: "During the pandemic home workouts boomed and Peloton's exercise bike sales soared. The company assumed demand would stay that high and expanded production and warehouses. When the pandemic eased, demand fell, inventory piled up and the company started losing money.",
    },
    question: {
      uz: "Peloton qaysi xatoga yo'l qo'ydi? Vaqtinchalik talabni doimiy deb hisoblash nimaga olib keladi?",
      ru: "Какую ошибку допустил Peloton? К чему приводит принятие временного спроса за постоянный?",
      en: "What mistake did Peloton make? What happens when you treat temporary demand as permanent?",
    },
    reasoning: {
      uz: "Peloton vaqtinchalik shok sabab bo'lgan talab o'sishini uzoq muddatli tendensiya deb noto'g'ri baholadi (prognoz xatosi). Doimiy xarajatlar (zavod, ombor) oshdi, talab tushganda ular qoplanmay qoldi. To'g'ri yo'l: o'sishni qisman moslashuvchan quvvat bilan qondirish va stsenariylarni hisoblash.",
      ru: "Peloton принял рост спроса, вызванный временным шоком, за долгосрочный тренд (ошибка прогноза). Постоянные затраты (завод, склады) выросли, и когда спрос упал, их стало нечем покрывать. Правильнее было отвечать на рост частично гибкими мощностями и считать сценарии.",
      en: "Peloton mistook a demand spike caused by a temporary shock for a long-term trend (a forecasting error). Fixed costs (factories, warehouses) grew, and when demand fell they could no longer be covered. A better path: meet part of the growth with flexible capacity and plan for scenarios.",
    },
    concepts: {
      uz: "Talabni prognozlash xatosi va doimiy xarajatlar",
      ru: "Ошибка прогноза спроса и постоянные издержки",
      en: "Demand forecasting error and fixed costs",
    },
    mistakes: {
      uz: "Ko'pchilik 'raqobat kuchaygan' deydi, lekin asosiy sabab o'z prognozi va doimiy xarajatlarning haddan tashqari oshishi.",
      ru: "Многие говорят «усилилась конкуренция», но главная причина в собственном прогнозе и чрезмерном росте постоянных затрат.",
      en: "Many say 'competition grew', but the main cause was the company's own forecast and the overgrowth of fixed costs.",
    },
  },
  {
    id: "starbucks",
    difficulty: 2,
    icon: "cup",
    name: { uz: "Starbucks va ko'p filial", ru: "Starbucks и много точек", en: "Starbucks" },
    scenario: {
      uz: "Starbucks yillar davomida juda tez yangi filiallar ochdi, ba'zan bir-biridan bir necha qadam narida. 2008-yilda kompaniya taxminan 600 ta do'konni yopishga majbur bo'ldi, sotuvlar va foyda tushdi.",
      ru: "Годами Starbucks очень быстро открывал новые точки, иногда в нескольких шагах друг от друга. В 2008 году компании пришлось закрыть около 600 магазинов, продажи и прибыль упали.",
      en: "For years Starbucks opened new stores very fast, sometimes just a few steps apart. In 2008 the company had to close about 600 stores as sales and profit dropped.",
    },
    question: {
      uz: "Har yangi filial nega kompaniyaga foyda keltirmadi? Qaysi iqtisodiy hodisa yuz berdi?",
      ru: "Почему каждая новая точка не приносила компании прибыль? Какое экономическое явление произошло?",
      en: "Why didn't every new store add profit for the company? What economic effect was at work?",
    },
    reasoning: {
      uz: "Yangi filiallar yangi mijoz topmadi, balki yaqin turgan o'z filiallarining mijozlarini tortib oldi (kannibalizatsiya). Natijada umumiy sotuv o'smadi, doimiy xarajatlar (ijara, ish haqi) esa oshdi. Qo'shimcha filial qo'shimcha foyda keltirishi uchun yangi talab yaratishi kerak, kamayuvchi hosildorlik qonuni ham ishlaydi.",
      ru: "Новые точки не находили новых клиентов, а забирали покупателей у соседних собственных точек (каннибализация). В итоге общие продажи не росли, а постоянные расходы (аренда, зарплаты) увеличивались. Чтобы новая точка добавляла прибыль, она должна создавать новый спрос; действует и убывающая отдача.",
      en: "New stores did not find new customers; they pulled customers from nearby stores of the same chain (cannibalization). Total sales did not grow, while fixed costs (rent, wages) did. For a new store to add profit it must create new demand; diminishing returns also apply.",
    },
    concepts: {
      uz: "Kannibalizatsiya va kamayuvchi hosildorlik",
      ru: "Каннибализация и убывающая отдача",
      en: "Cannibalization and diminishing returns",
    },
    mistakes: {
      uz: "Ko'pchilik 'filial ko'p bo'lsa sotuv ham ko'p bo'ladi' deydi, mijozlar soni cheklangani va o'zaro raqobatni e'tiborsiz qoldiradi.",
      ru: "Многие говорят «больше точек, значит больше продаж», не учитывая ограниченное число клиентов и конкуренцию между своими точками.",
      en: "Many say 'more stores means more sales', ignoring the limited number of customers and competition between a chain's own stores.",
    },
  },
  {
    id: "gillette_dsc",
    difficulty: 3,
    icon: "storefront",
    name: { uz: "Gillette va Dollar Shave Club", ru: "Gillette и Dollar Shave Club", en: "Gillette vs Dollar Shave Club" },
    scenario: {
      uz: "Gillette ustaralari yillar davomida bozorning katta qismini egallagan, ularning narxi esa doimiy oshib borardi. Dollar Shave Club startapi sodda ustaralarni obuna orqali, pochta bilan, ancha arzon narxda yetkazib berishni boshladi. Texnologik jihatdan yangilik yo'q edi, ammo Gillette bozor ulushini tez yo'qota boshladi.",
      ru: "Бритвы Gillette годами занимали большую долю рынка, а их цена постоянно росла. Стартап Dollar Shave Club стал присылать простые бритвы по подписке по почте, намного дешевле. Технологически ничего нового не было, но Gillette стала быстро терять долю рынка.",
      en: "Gillette razors held a large share of the market for years while their prices kept rising. The startup Dollar Shave Club began mailing simple razors by subscription at a much lower price. There was nothing new technologically, yet Gillette began losing market share fast.",
    },
    question: {
      uz: "Texnologiya bir xil bo'lsa ham, yangi o'yinchi nega g'olib chiqdi? Uning ustunligi nimada edi?",
      ru: "Почему новый игрок победил, хотя технология была обычной? В чём было его преимущество?",
      en: "Why did the new player win even without better technology? What was its advantage?",
    },
    reasoning: {
      uz: "Raqib mahsulotni emas, sotish kanalini va to'lov modelini o'zgartirdi. Gillette qimmat, ko'p funksiyali ustaralar bilan ko'pchilik mijozga ortiqcha narsa sotayotgan edi. Obuna modeli qulaylik va doimiy daromad berdi, do'kon va reklama xarajatini kamaytirdi. Xulosa: ba'zan innovatsiya texnologiyada emas, tarqatish kanalida va mijozning haqiqiy ehtiyojiga moslashishdadir.",
      ru: "Соперник изменил не продукт, а канал продаж и модель оплаты. Gillette продавала дорогие многофункциональные бритвы тем клиентам, кому столько не нужно. Подписка дала удобство и регулярный доход и сократила расходы на магазины и рекламу. Вывод: иногда инновация не в технологии, а в канале распространения и в соответствии реальной потребности клиента.",
      en: "The rival changed not the product but the sales channel and payment model. Gillette sold pricey multi-feature razors to customers who did not need so much. The subscription gave convenience and recurring revenue and cut retail and advertising costs. Lesson: sometimes innovation is not in technology but in the distribution channel and in fitting the customer's real need.",
    },
    concepts: {
      uz: "Tarqatish kanali innovatsiyasi va obuna modeli",
      ru: "Инновация канала сбыта и модель подписки",
      en: "Distribution channel innovation and the subscription model",
    },
    mistakes: {
      uz: "Ko'pchilik 'Gillette'ning sifati yaxshiroq, demak yutishi kerak edi' deydi va mijoz ortiqcha funksiyalar uchun pul to'lashni xohlamasligini hisobga olmaydi.",
      ru: "Многие говорят «у Gillette лучше качество, значит она должна была победить», не учитывая, что клиенты не хотят платить за лишние функции.",
      en: "Many say 'Gillette had better quality so it should have won', ignoring that customers did not want to pay for extra features.",
    },
  },
  {
    id: "wework",
    difficulty: 3,
    icon: "briefcase",
    name: { uz: "WeWork", ru: "WeWork", en: "WeWork" },
    scenario: {
      uz: "WeWork binolarni uzoq muddatli (masalan, 10-15 yillik) ijaraga olib, ularni ofis o'rinlari sifatida oylik yoki hatto kunlik ijaraga berardi. 2019-yilda uning qiymati taxminan 47 milliard dollar deb baholangan, lekin IPO bekor qilindi va kompaniya keyinroq bankrot bo'ldi.",
      ru: "WeWork арендовал здания на долгий срок (например, на 10-15 лет) и сдавал рабочие места помесячно или даже посуточно. В 2019 году компанию оценивали примерно в 47 млрд долларов, но IPO отменили, а позже компания обанкротилась.",
      en: "WeWork leased buildings on long contracts (say, 10-15 years) and rented desks out monthly or even daily. In 2019 it was valued at about 47 billion dollars, but the IPO was pulled and the company later went bankrupt.",
    },
    question: {
      uz: "Daromad o'sib borayotgan bo'lsa ham, WeWork modelining qaysi zaif joyi uni tushirdi?",
      ru: "Какое слабое место модели WeWork погубило компанию, хотя выручка росла?",
      en: "Which weakness in WeWork's model sank it even though revenue was growing?",
    },
    reasoning: {
      uz: "Majburiyatlar uzoq muddatli (ijara), daromadlar esa qisqa muddatli va oson uziladigan edi. Iqtisodiy sekinlashuvda mijozlar ketadi, ijara to'lovlari esa qoladi (muddatlar nomuvofiqligi). Bundan tashqari, har bir o'rin birligi bo'yicha foyda (unit economics) manfiy bo'lsa, o'sish zararni kattalashtiradi.",
      ru: "Обязательства были долгосрочными (аренда), а доходы краткосрочными и легко прерываемыми. При спаде клиенты уходят, а арендные платежи остаются (несоответствие сроков). Кроме того, если прибыль на единицу (unit economics) отрицательна, рост лишь увеличивает убыток.",
      en: "Obligations were long-term (leases) while income was short-term and easy to cancel. In a downturn tenants leave but the rent stays (a maturity mismatch). Moreover, if unit economics are negative, growth just makes the loss bigger.",
    },
    concepts: {
      uz: "Unit-iqtisodiyot va muddatlar nomuvofiqligi",
      ru: "Unit-экономика и несоответствие сроков",
      en: "Unit economics and maturity mismatch",
    },
    mistakes: {
      uz: "Ko'pchilik 'daromad o'sgan, demak biznes yaxshi' deydi, daromadni foyda bilan va uzoq majburiyatlarni qisqa daromad bilan chalkashtiradi.",
      ru: "Многие говорят «выручка росла, значит бизнес хороший», путая выручку с прибылью и долгие обязательства с короткими доходами.",
      en: "Many say 'revenue grew, so the business was good', confusing revenue with profit and long obligations with short income.",
    },
  },
  {
    id: "toysrus",
    difficulty: 3,
    icon: "bank",
    name: { uz: "Toys R Us qarzi", ru: "Долг Toys R Us", en: "Toys R Us" },
    scenario: {
      uz: "2005-yilda Toys R Us taxminan 6,6 milliard dollarlik bitim bilan qarz hisobiga sotib olindi. Qarz kompaniyaga yuklandi va u yiliga taxminan 400 million dollar foiz to'lardi. Bu pul do'konlarni yangilashga va onlayn savdoga yetmay qoldi. 2017-yilda kompaniya bankrot bo'ldi.",
      ru: "В 2005 году Toys R Us был выкуплен за счёт заёмных средств в рамках сделки примерно на 6,6 млрд долларов. Долг лёг на саму компанию, и она платила около 400 млн долларов процентов в год. Из-за этого не хватало денег на обновление магазинов и онлайн-торговлю. В 2017 году компания обанкротилась.",
      en: "In 2005 Toys R Us was bought in a leveraged deal worth about 6.6 billion dollars. The debt landed on the company itself, which paid roughly 400 million dollars a year in interest. That left too little money to refresh stores and build online sales. In 2017 the company went bankrupt.",
    },
    question: {
      uz: "Qarz bilan sotib olish kompaniyani qanday zaiflashtirdi? Bu holatda nega raqobat bilan kurashish qiyin bo'ldi?",
      ru: "Как выкуп за счёт долга ослабил компанию? Почему ей стало трудно конкурировать?",
      en: "How did the debt-funded buyout weaken the company? Why did competing become hard?",
    },
    reasoning: {
      uz: "Katta foiz to'lovi foydaning katta qismini yeb qo'ydi, shuning uchun investitsiya (onlayn, yangi do'konlar) uchun mablag' qolmadi. Qarz (leveraj) yaxshi paytda daromadni oshiradi, lekin sotuv tushsa qattiq majburiyat bo'lib qoladi. Amazon va Walmart kabi raqiblar esa texnologiyaga sarmoya kiritib, ustun chiqdi.",
      ru: "Большие процентные платежи съедали значительную часть прибыли, и на инвестиции (онлайн, обновление магазинов) денег не оставалось. Долг (леверидж) в хорошие времена повышает доходность, но при падении продаж становится жёстким обязательством. Конкуренты вроде Amazon и Walmart инвестировали в технологии и вырвались вперёд.",
      en: "Heavy interest payments ate much of the profit, leaving no money for investment (online, store refreshes). Debt (leverage) boosts returns in good times but becomes a rigid obligation when sales fall. Rivals such as Amazon and Walmart invested in technology and pulled ahead.",
    },
    concepts: {
      uz: "Leveraj va moliyaviy majburiyatlar yuki",
      ru: "Финансовый леверидж и долговая нагрузка",
      en: "Financial leverage and debt burden",
    },
    mistakes: {
      uz: "Ko'pchilik 'Amazon o'ldirdi' deydi, lekin Toys R Us'ning o'z qarz yuki unga javob berishga imkon bermadi.",
      ru: "Многие говорят «её убил Amazon», но именно собственная долговая нагрузка не дала Toys R Us ответить.",
      en: "Many say 'Amazon killed it', but it was the company's own debt load that stopped it from responding.",
    },
  },
  {
    id: "nokia",
    difficulty: 3,
    icon: "briefcase",
    name: { uz: "Nokia", ru: "Nokia", en: "Nokia" },
    scenario: {
      uz: "Nokia yillar davomida dunyodagi eng yirik telefon ishlab chiqaruvchisi edi va qurilmalari mustahkam hamda arzon bo'lgan. iPhone va Android chiqqach, kompaniya o'z operatsion tizimida qoldi, dasturchilar esa ilovalarni boshqa platformalar uchun yozdi. 2013-yilda Nokia telefon biznesini Microsoft'ga sotdi.",
      ru: "Годами Nokia была крупнейшим производителем телефонов в мире, а её устройства были прочными и недорогими. Когда появились iPhone и Android, компания осталась на своей операционной системе, а разработчики писали приложения для других платформ. В 2013 году Nokia продала телефонный бизнес Microsoft.",
      en: "For years Nokia was the world's largest phone maker, with sturdy and affordable devices. When the iPhone and Android arrived, the company stayed on its own operating system, while developers wrote apps for other platforms. In 2013 Nokia sold its phone business to Microsoft.",
    },
    question: {
      uz: "Yaxshi qurilmalar nega yetarli bo'lmadi? Smartfon bozorida qaysi iqtisodiy kuch hal qiluvchi bo'ldi?",
      ru: "Почему хороших устройств оказалось недостаточно? Какая экономическая сила стала решающей на рынке смартфонов?",
      en: "Why weren't good devices enough? Which economic force was decisive in the smartphone market?",
    },
    reasoning: {
      uz: "Smartfon bozorida qurilma emas, ekotizim (ilovalar va dasturchilar) hal qiluvchi bo'ldi. Ko'proq foydalanuvchi ko'proq dasturchini jalb qiladi, ko'proq ilova esa yana ko'proq foydalanuvchini jalb qiladi (tarmoq effekti). Nokia bu aylanadan chetda qoldi va qurilma sifati uni qutqarmadi.",
      ru: "На рынке смартфонов решающим стало не устройство, а экосистема (приложения и разработчики). Больше пользователей привлекает больше разработчиков, а больше приложений привлекает ещё больше пользователей (сетевой эффект). Nokia осталась вне этого круга, и качество устройств её не спасло.",
      en: "In smartphones the decisive factor was not the device but the ecosystem (apps and developers). More users attract more developers, and more apps attract even more users (a network effect). Nokia was left out of this loop, and device quality did not save it.",
    },
    concepts: {
      uz: "Platforma ekotizimi va tarmoq effektlari",
      ru: "Платформенная экосистема и сетевые эффекты",
      en: "Platform ecosystem and network effects",
    },
    mistakes: {
      uz: "Ko'pchilik 'iPhone'ning uskunasi yaxshiroq edi' deydi, lekin asosiy hal qiluvchi omil dasturlar ekotizimi bo'lgan.",
      ru: "Многие говорят «железо iPhone было лучше», но решающим фактором стала экосистема приложений.",
      en: "Many say 'the iPhone hardware was better', but the deciding factor was the app ecosystem.",
    },
  },
];
