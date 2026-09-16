export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "method_not_allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "server_not_configured" });
    return;
  }

  try {
    const { lang, scenario, question, reasoning, concept, mistakes, answer } = req.body || {};

    if (!scenario || !question || !answer) {
      res.status(400).json({ error: "missing_fields" });
      return;
    }

    const langInstruction =
      lang === "ru"
        ? "Отвечай ТОЛЬКО на русском языке."
        : lang === "en"
        ? "Answer ONLY in English."
        : "Javobingizni FAQAT o'zbek tilida yoz.";

    const prompt = `Sen tajribali iqtisodiyot o'qituvchisisan. Foydalanuvchiga quyidagi vaziyat berildi:

Vaziyat: ${scenario}
Savol: ${question}

To'g'ri fikrlash namunasi (foydalanuvchiga ko'rsatilmagan, faqat baholash uchun): ${reasoning}
Tegishli tushuncha: ${concept}
Odatiy uchraydigan xatolar: ${mistakes}

Foydalanuvchining javobi: "${answer}"

Vazifang: foydalanuvchi javobini baholash. Uning o'z gapiga tayanib, aynan qaysi joyda to'g'ri yoki xato fikrlaganini ko'rsat. ${langInstruction}

FAQAT quyidagi JSON formatida javob ber, boshqa hech qanday matn, izoh yoki markdown belgisi qo'shma:
{"verdict": "correct" | "partial" | "incorrect", "analysis": "foydalanuvchi javobiga tayangan qisqa tahlil, 2-4 gap", "correctSolution": "to'g'ri yechim tushuntirilishi, 2-4 gap", "concept": "asosiy tushuncha nomi, qisqa"}`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      res.status(502).json({ error: "upstream_error" });
      return;
    }

    const data = await response.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) {
      res.status(502).json({ error: "no_text_in_response" });
      return;
    }

    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    res.status(200).json(parsed);
  } catch (e) {
    console.error("check.js error:", e);
    res.status(500).json({ error: "check_failed" });
  }
}
