import React, { useState, useEffect, useCallback } from "react";
import { CASES } from "./cases.js";

const C = {
  navy: "#10233D",
  paper: "#F1EEE2",
  card: "#FAF8F1",
  brass: "#9C7A29",
  brassDark: "#6E5719",
  brassBg: "#EFE6CC",
  ink: "#1B1B18",
  muted: "#615C4E",
  line: "#D8D2BE",
  good: "#2F5D45",
  goodBg: "#E4ECE4",
  bad: "#8B2E2E",
  badBg: "#F1E1DF",
  partial: "#7A5A16",
  partialBg: "#F1E9D4",
};

const UI = {
  uz: {
    kicker: "Amaliy iqtisod reestri",
    title: "Iqtisodiy vaziyatlar",
    subtitle: "Har bir ish — kundalik hayotdan olingan real qaror. Tahlil qiling, xatoni toping.",
    unsolved: "Ko'rib chiqilmagan ishlar",
    solvedSection: "Yakunlangan ishlar",
    noSolved: "Hali birorta ish yakunlanmagan.",
    noUnsolved: "Barcha ishlar ko'rib chiqildi.",
    caseNo: "Ish",
    scenario: "Vaziyat bayoni",
    question: "Ko'rib chiqiladigan savol",
    answerLabel: "Sizning xulosangiz",
    answerPlaceholder: "Vaziyatni tahlil qiling va xulosangizni shu yerga yozing...",
    submit: "Ko'rib chiqishga topshirish",
    checking: "Ko'rib chiqilmoqda...",
    back: "Reestrga qaytish",
    correct: "To'g'ri xulosa",
    partial: "Qisman to'g'ri",
    incorrect: "Noto'g'ri xulosa",
    analysisLabel: "Ekspert tahlili",
    correctSolutionLabel: "Rasmiy yechim",
    conceptLabel: "Qo'llanilgan tushuncha",
    errorMsg: "Ko'rib chiqishda xatolik yuz berdi. Qayta urinib ko'ring.",
    emptyAnswer: "Xulosa yozmasdan topshirib bo'lmaydi.",
    scoreLabel: "Yakunlangan",
    yourAnswerLabel: "Topshirilgan xulosangiz",
  },
  ru: {
    kicker: "Реестр практической экономики",
    title: "Экономические дела",
    subtitle: "Каждое дело — реальное решение из повседневной жизни. Разберите его и найдите ошибку.",
    unsolved: "Дела на рассмотрении",
    solvedSection: "Завершённые дела",
    noSolved: "Пока ни одно дело не завершено.",
    noUnsolved: "Все дела рассмотрены.",
    caseNo: "Дело",
    scenario: "Изложение ситуации",
    question: "Рассматриваемый вопрос",
    answerLabel: "Ваше заключение",
    answerPlaceholder: "Разберите ситуацию и напишите здесь своё заключение...",
    submit: "Отправить на рассмотрение",
    checking: "Рассматривается...",
    back: "Вернуться в реестр",
    correct: "Верное заключение",
    partial: "Частично верно",
    incorrect: "Неверное заключение",
    analysisLabel: "Экспертный разбор",
    correctSolutionLabel: "Официальное решение",
    conceptLabel: "Применённое понятие",
    errorMsg: "Ошибка при рассмотрении. Попробуйте ещё раз.",
    emptyAnswer: "Нельзя отправить пустое заключение.",
    scoreLabel: "Завершено",
    yourAnswerLabel: "Ваше поданное заключение",
  },
  en: {
    kicker: "Registry of applied economics",
    title: "Economic cases",
    subtitle: "Each case is a real decision from everyday life. Examine it and find what went wrong.",
    unsolved: "Cases pending review",
    solvedSection: "Closed cases",
    noSolved: "No cases closed yet.",
    noUnsolved: "All cases have been reviewed.",
    caseNo: "Case",
    scenario: "Statement of facts",
    question: "Question under review",
    answerLabel: "Your finding",
    answerPlaceholder: "Examine the situation and write your finding here...",
    submit: "Submit for review",
    checking: "Under review...",
    back: "Return to registry",
    correct: "Correct finding",
    partial: "Partially correct",
    incorrect: "Incorrect finding",
    analysisLabel: "Expert analysis",
    correctSolutionLabel: "Official ruling",
    conceptLabel: "Concept applied",
    errorMsg: "Something went wrong during review. Try again.",
    emptyAnswer: "Write a finding before submitting.",
    scoreLabel: "Closed",
    yourAnswerLabel: "Your submitted finding",
  },
};

function Seal({ size = 40, color = C.brass }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.4" />
      <circle cx="20" cy="20" r="13.5" stroke={color} strokeWidth="1" />
      <path d="M12 22 L17 15 L22 20 L28 12" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="28" cy="12" r="1.6" fill={color} />
    </svg>
  );
}

function CaseIcon({ type, size = 34, color = C.brassDark }) {
  const stroke = { stroke: color, strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const paths = {
    cup: (
      <>
        <path d="M9 11h16v9a8 8 0 0 1-8 8 8 8 0 0 1-8-8v-9z" {...stroke} />
        <path d="M25 13h2.5a3 3 0 0 1 0 6H25" {...stroke} />
        <path d="M12 7c0-1.2.9-1.4.9-2.6 0-.8-.5-1.1-.5-1.9" {...stroke} />
        <path d="M17 7c0-1.2.9-1.4.9-2.6 0-.8-.5-1.1-.5-1.9" {...stroke} />
      </>
    ),
    briefcase: (
      <>
        <rect x="6" y="13" width="24" height="16" rx="1.5" {...stroke} />
        <path d="M14 13v-2.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V13" {...stroke} />
        <path d="M6 20h24" {...stroke} />
        <path d="M17 18.5h2v3h-2z" {...stroke} />
      </>
    ),
    ticket: (
      <>
        <path d="M6 15a3 3 0 0 0 0-6H4v18h28V9h-2a3 3 0 0 0 0 6" {...stroke} />
        <path d="M18 8v3M18 15v2M18 21v3" {...stroke} />
      </>
    ),
    storefront: (
      <>
        <path d="M5 10l1.5-4h25L33 10" {...stroke} />
        <path d="M5 10v3.5a3 3 0 0 0 6 0V10M11 13.5a3 3 0 0 0 6 0V10M17 13.5a3 3 0 0 0 6 0V10M23 13.5a3 3 0 0 0 6 0V10M29 13.5a3 3 0 0 0 4 0V10" {...stroke} />
        <path d="M8 15v14h22V15" {...stroke} />
        <path d="M15 29v-8h8v8" {...stroke} />
      </>
    ),
    tag: (
      <>
        <path d="M6 6h11l15 15-11 11L6 17z" {...stroke} />
        <circle cx="13" cy="13" r="2" {...stroke} />
        <path d="M13 25l6 6" {...stroke} />
      </>
    ),
    bank: (
      <>
        <path d="M4 14l14-8 14 8" {...stroke} />
        <path d="M6 14h24v3H6z" {...stroke} />
        <path d="M8 17v11M14 17v11M20 17v11M26 17v11" {...stroke} />
        <path d="M4 31h28" {...stroke} />
      </>
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      {paths[type] || paths.tag}
    </svg>
  );
}

const STORAGE_LANG_KEY = "econ_lang";
const STORAGE_SOLVED_KEY = "econ_solved";

export default function App() {
  const [lang, setLang] = useState("uz");
  const [solved, setSolved] = useState({});
  const [view, setView] = useState("home");
  const [answer, setAnswer] = useState("");
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  const t = UI[lang];

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_LANG_KEY);
      if (savedLang) setLang(savedLang);
      const savedSolved = localStorage.getItem(STORAGE_SOLVED_KEY);
      if (savedSolved) setSolved(JSON.parse(savedSolved));
    } catch (e) {}
  }, []);

  const changeLang = useCallback((newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, newLang);
    } catch (e) {}
  }, []);

  const persistSolved = useCallback((next) => {
    setSolved(next);
    try {
      localStorage.setItem(STORAGE_SOLVED_KEY, JSON.stringify(next));
    } catch (e) {}
  }, []);

  const openCase = (id) => {
    setAnswer("");
    setError("");
    setView(id);
  };

  const goHome = () => {
    setView("home");
    setAnswer("");
    setError("");
  };

  const langShort = { uz: "UZ", ru: "RU", en: "EN" };
  const activeCase = CASES.find((c) => c.id === view);
  const activeIndex = CASES.findIndex((c) => c.id === view);

  const submitAnswer = async () => {
    if (!answer.trim()) {
      setError(t.emptyAnswer);
      return;
    }
    setError("");
    setChecking(true);
    try {
      const response = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          scenario: activeCase.scenario[lang],
          question: activeCase.question[lang],
          reasoning: activeCase.reasoning[lang],
          concept: activeCase.concepts[lang],
          mistakes: activeCase.mistakes[lang],
          answer: answer.trim(),
        }),
      });

      if (!response.ok) throw new Error("bad response");
      const parsed = await response.json();

      const next = {
        ...solved,
        [activeCase.id]: {
          verdict: parsed.verdict,
          analysis: parsed.analysis,
          correctSolution: parsed.correctSolution,
          concept: parsed.concept,
          userAnswer: answer.trim(),
          ts: Date.now(),
        },
      };
      persistSolved(next);
    } catch (e) {
      setError(t.errorMsg);
    } finally {
      setChecking(false);
    }
  };

  const stars = (n) => "●".repeat(n) + "○".repeat(3 - n);
  const caseNo = (i) => String(i + 1).padStart(2, "0");

  const unsolvedCases = CASES.filter((c) => !solved[c.id]);
  const solvedCases = CASES.filter((c) => solved[c.id]);

  const verdictColor = (v) => (v === "correct" ? C.good : v === "partial" ? C.partial : C.bad);
  const verdictBg = (v) => (v === "correct" ? C.goodBg : v === "partial" ? C.partialBg : C.badBg);
  const verdictLabel = (v) => (v === "correct" ? t.correct : v === "partial" ? t.partial : t.incorrect);

  return (
    <div
      style={{
        fontFamily: "'IBM Plex Sans', sans-serif",
        background: C.paper,
        color: C.ink,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          background: C.paper,
          border: `1px solid ${C.line}`,
          borderTop: "none",
          borderBottom: "none",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            background: C.navy,
            padding: "32px 32px 26px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <Seal size={44} color={C.brass} />
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.04em", color: "#B9C4D4", marginBottom: "4px" }}>
                {t.kicker}
              </div>
              <h1
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontWeight: 600,
                  fontSize: "28px",
                  margin: 0,
                  color: "#FAF8F1",
                }}
              >
                {t.title}
              </h1>
              <p style={{ fontSize: "14px", color: "#C7CFDB", margin: "8px 0 0", maxWidth: "420px", lineHeight: 1.5 }}>
                {t.subtitle}
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
            {["uz", "ru", "en"].map((l) => (
              <button
                key={l}
                onClick={() => changeLang(l)}
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  border: `1px solid ${l === lang ? C.brass : "#3A4E68"}`,
                  background: l === lang ? C.brass : "transparent",
                  color: l === lang ? C.navy : "#B9C4D4",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                {langShort[l]}
              </button>
            ))}
          </div>
        </div>

        {view === "home" && (
          <div style={{ padding: "28px 32px 40px" }}>
            <div
              style={{
                fontSize: "12px",
                color: C.muted,
                borderBottom: `1px solid ${C.line}`,
                paddingBottom: "14px",
                marginBottom: "26px",
              }}
            >
              {t.scoreLabel}: {solvedCases.length} / {CASES.length}
            </div>

            <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "17px", fontWeight: 600, margin: "0 0 14px", color: C.navy }}>
              {t.unsolved}
            </h2>
            {unsolvedCases.length === 0 && (
              <p style={{ fontSize: "13px", color: C.muted, marginBottom: "28px" }}>{t.noUnsolved}</p>
            )}
            <div style={{ marginBottom: "32px" }}>
              {unsolvedCases.map((c) => {
                const idx = CASES.findIndex((x) => x.id === c.id);
                return (
                  <div
                    key={c.id}
                    onClick={() => openCase(c.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "15px 16px",
                      background: C.card,
                      border: `1px solid ${C.line}`,
                      marginBottom: "9px",
                      cursor: "pointer",
                    }}
                  >
                    <CaseIcon type={c.icon} size={32} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "11px", color: C.brassDark, letterSpacing: "0.03em", marginBottom: "2px" }}>
                        {t.caseNo} №{caseNo(idx)}
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: 500 }}>{c.name[lang]}</div>
                    </div>
                    <span style={{ color: C.brass, fontSize: "12px", letterSpacing: "2px", flexShrink: 0 }}>
                      {stars(c.difficulty)}
                    </span>
                  </div>
                );
              })}
            </div>

            <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "17px", fontWeight: 600, margin: "0 0 14px", color: C.navy }}>
              {t.solvedSection}
            </h2>
            {solvedCases.length === 0 && <p style={{ fontSize: "13px", color: C.muted }}>{t.noSolved}</p>}
            <div>
              {solvedCases.map((c) => {
                const rec = solved[c.id];
                const idx = CASES.findIndex((x) => x.id === c.id);
                return (
                  <div
                    key={c.id}
                    onClick={() => openCase(c.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "15px 16px",
                      background: C.card,
                      border: `1px solid ${C.line}`,
                      borderLeft: `3px solid ${verdictColor(rec.verdict)}`,
                      marginBottom: "9px",
                      cursor: "pointer",
                      opacity: 0.88,
                    }}
                  >
                    <CaseIcon type={c.icon} size={32} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "11px", color: C.brassDark, letterSpacing: "0.03em", marginBottom: "2px" }}>
                        {t.caseNo} №{caseNo(idx)}
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: 500 }}>{c.name[lang]}</div>
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: verdictColor(rec.verdict),
                        background: verdictBg(rec.verdict),
                        padding: "4px 10px",
                        flexShrink: 0,
                      }}
                    >
                      {verdictLabel(rec.verdict)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeCase && (
          <div style={{ padding: "28px 32px 40px" }}>
            <button
              onClick={goHome}
              style={{ fontSize: "13px", color: C.muted, background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: "20px" }}
            >
              ← {t.back}
            </button>

            <div style={{ display: "flex", gap: "18px", alignItems: "flex-start", marginBottom: "20px" }}>
              <div style={{ background: C.brassBg, padding: "12px", border: `1px solid ${C.line}`, flexShrink: 0 }}>
                <CaseIcon type={activeCase.icon} size={38} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "11px", color: C.brassDark, letterSpacing: "0.03em", marginBottom: "3px" }}>
                  {t.caseNo} №{caseNo(activeIndex)}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "10px", flexWrap: "wrap" }}>
                  <h2 style={{ fontFamily: "'Source Serif 4', serif", fontSize: "22px", fontWeight: 600, margin: 0, color: C.navy }}>
                    {activeCase.name[lang]}
                  </h2>
                  <span style={{ color: C.brass, fontSize: "13px", letterSpacing: "2px", flexShrink: 0 }}>
                    {stars(activeCase.difficulty)}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "18px", borderTop: `1px solid ${C.line}`, paddingTop: "18px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: C.brassDark, letterSpacing: "0.03em", marginBottom: "7px" }}>
                {t.scenario}
              </div>
              <p style={{ fontSize: "15.5px", lineHeight: 1.7, margin: 0 }}>{activeCase.scenario[lang]}</p>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: C.brassDark, letterSpacing: "0.03em", marginBottom: "7px" }}>
                {t.question}
              </div>
              <p style={{ fontSize: "15.5px", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>{activeCase.question[lang]}</p>
            </div>

            {!solved[activeCase.id] && (
              <div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: C.brassDark, letterSpacing: "0.03em", marginBottom: "8px" }}>
                  {t.answerLabel}
                </div>
                <textarea
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder={t.answerPlaceholder}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    fontSize: "14.5px",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    border: `1px solid ${error ? C.bad : C.line}`,
                    background: C.card,
                    color: C.ink,
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
                {error && <p style={{ fontSize: "13px", color: C.bad, margin: "6px 0 0" }}>{error}</p>}
                <button
                  onClick={submitAnswer}
                  disabled={checking}
                  style={{
                    marginTop: "16px",
                    padding: "12px 24px",
                    fontSize: "14.5px",
                    fontWeight: 500,
                    background: C.navy,
                    color: "#FAF8F1",
                    border: "none",
                    cursor: checking ? "default" : "pointer",
                    opacity: checking ? 0.7 : 1,
                  }}
                >
                  {checking ? t.checking : t.submit}
                </button>
              </div>
            )}

            {solved[activeCase.id] && (
              <div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: C.brassDark, letterSpacing: "0.03em", marginBottom: "7px" }}>
                  {t.yourAnswerLabel}
                </div>
                <p
                  style={{
                    fontSize: "14.5px",
                    lineHeight: 1.65,
                    margin: "0 0 20px",
                    padding: "12px 14px",
                    background: C.card,
                    border: `1px solid ${C.line}`,
                    color: C.muted,
                    fontStyle: "italic",
                  }}
                >
                  {solved[activeCase.id].userAnswer}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: verdictColor(solved[activeCase.id].verdict),
                    background: verdictBg(solved[activeCase.id].verdict),
                    padding: "7px 14px",
                    marginBottom: "20px",
                  }}
                >
                  {verdictLabel(solved[activeCase.id].verdict)}
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: C.brassDark, letterSpacing: "0.03em", marginBottom: "7px" }}>
                    {t.analysisLabel}
                  </div>
                  <p style={{ fontSize: "14.5px", lineHeight: 1.7, margin: 0 }}>{solved[activeCase.id].analysis}</p>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: C.brassDark, letterSpacing: "0.03em", marginBottom: "7px" }}>
                    {t.correctSolutionLabel}
                  </div>
                  <p style={{ fontSize: "14.5px", lineHeight: 1.7, margin: 0 }}>{solved[activeCase.id].correctSolution}</p>
                </div>

                <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: "16px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 500, color: C.navy, background: C.brassBg, padding: "6px 12px" }}>
                    {t.conceptLabel}: {solved[activeCase.id].concept}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
