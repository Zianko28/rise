import { useState, useEffect, useCallback, useMemo } from "react";

// ═══════════════════════════════════════════════════════════
// TOM'S DAILY TRAINING APP — 500 LESSONS, 5 PILLARS
// ═══════════════════════════════════════════════════════════

const TRACK_META = {
  conversation: { name: "Empowering Conversation", icon: "💬", color: "#2D9CDB", desc: "Clear, empathetic, empowering speech" },
  confidence: { name: "Warm Confidence", icon: "🔥", color: "#F2994A", desc: "Authority that feels safe and approachable" },
  presence: { name: "Presence", icon: "✨", color: "#9B51E0", desc: "Speech, body language, and written communication" },
  father: { name: "Being a Great Father", icon: "👨‍👧‍👦", color: "#27AE60", desc: "Role model, teacher, present" },
  husband: { name: "Being a Great Husband", icon: "❤️", color: "#EB5757", desc: "Romantic, caring, present" },
};

const TRACKS = ["conversation", "confidence", "presence", "father", "husband"];

// ── Lesson data generator ──────────────────────────────────
function generateAllLessons() {
  const frameworks = {
    conversation: [
      ["Motivational Interviewing", "Miller & Rollnick"],
      ["Health Literacy", "Kutner et al."],
      ["Narrative Medicine", "Rita Charon"],
      ["Teach-Back Method", "Schillinger et al."],
      ["Shared Decision Making", "Elwyn et al."],
      ["OARS Technique", "Miller & Rollnick"],
      ["Active Listening", "Carl Rogers"],
      ["Empathic Communication", "Hojat et al."],
      ["Plain Language", "Doak et al."],
      ["Patient-Centred Communication", "Stewart et al."],
    ],
    confidence: [
      ["Polyvagal Theory", "Stephen Porges"],
      ["Self-Efficacy Theory", "Albert Bandura"],
      ["Power Posing Research", "Carney et al."],
      ["Vocal Authority", "Klofstad et al."],
      ["Cognitive Reappraisal", "Gross & John"],
      ["Growth Mindset", "Carol Dweck"],
      ["Psychological Safety", "Amy Edmondson"],
      ["Self-Determination Theory", "Deci & Ryan"],
      ["Flow State", "Mihaly Csikszentmihalyi"],
      ["Impostor Phenomenon", "Clance & Imes"],
    ],
    presence: [
      ["Nonverbal Communication", "Albert Mehrabian"],
      ["Mindfulness-Based Stress Reduction", "Jon Kabat-Zinn"],
      ["Embodied Cognition", "George Lakoff"],
      ["Emotional Intelligence", "Daniel Goleman"],
      ["Professional Writing", "Williams & Bizup"],
      ["Prosody Research", "Anne Cutler"],
      ["Micro-Expressions", "Paul Ekman"],
      ["Somatic Awareness", "Peter Levine"],
      ["Attentional Control", "Posner & Rothbart"],
      ["Social Presence Theory", "Short, Williams & Christie"],
    ],
    father: [
      ["Social Learning Theory", "Albert Bandura"],
      ["Growth Mindset", "Carol Dweck"],
      ["Attachment Theory", "John Bowlby"],
      ["Authoritative Parenting", "Diana Baumrind"],
      ["Scaffolding Theory", "Vygotsky"],
      ["Emotion Coaching", "John Gottman"],
      ["Self-Regulation", "Walter Mischel"],
      ["Play Theory", "Stuart Brown"],
      ["Positive Discipline", "Jane Nelsen"],
      ["Moral Development", "Lawrence Kohlberg"],
    ],
    husband: [
      ["Gottman Method", "John & Julie Gottman"],
      ["Attachment Theory", "Sue Johnson"],
      ["Love Languages", "Gary Chapman"],
      ["Polyvagal Theory in Relationships", "Deb Dana"],
      ["Emotionally Focused Therapy", "Sue Johnson"],
      ["Positive Sentiment Override", "John Gottman"],
      ["Bids for Connection", "John Gottman"],
      ["Vulnerability Research", "Brené Brown"],
      ["Relational Mindfulness", "Siegel & Hartzell"],
      ["Repair Attempts", "John Gottman"],
    ],
  };

  const topicSets = {
    conversation: [
      "open-ended questions", "reflective listening", "summarising effectively",
      "delivering difficult news", "building rapport quickly", "empowering patient autonomy",
      "checking understanding", "motivating behaviour change", "handling resistance",
      "communicating with empathy", "setting expectations clearly", "explaining complex information simply",
      "shared goal setting", "cultural sensitivity", "managing time pressure in consultations",
      "telephone consultation skills", "breaking bad news compassionately", "supporting anxious patients",
      "family-centred communication", "affirming patient strengths",
    ],
    confidence: [
      "grounding before difficult conversations", "vocal projection and pace",
      "managing self-doubt in the moment", "owning your expertise", "confident body language",
      "speaking up in meetings", "handling disagreement gracefully", "recovering from mistakes publicly",
      "setting boundaries with authority", "radiating calm under pressure",
      "confident decision-making", "embracing uncertainty openly", "structured public speaking",
      "assertive yet warm communication", "building inner resilience daily",
      "reframing negative self-talk", "confidence in unfamiliar situations",
      "leading with appropriate vulnerability", "trusting your clinical instincts", "celebrating your wins",
    ],
    presence: [
      "eye contact and genuine connection", "slowing your speech intentionally", "the power of the pause",
      "writing clear professional emails", "posture and physical alignment", "breathing techniques for presence",
      "entering a room with intention", "active listening body language", "tone modulation for impact",
      "matching written tone to context", "eliminating filler words", "using gesture for emphasis",
      "screen presence on video calls", "mindful transitions between tasks",
      "voice warm-up techniques", "pacing and rhythm in speech", "reading the emotional room",
      "physical stillness as power", "storytelling with presence and purpose",
      "ending conversations with lasting impact",
    ],
    father: [
      "modelling emotional regulation", "active play and deep connection", "creating meaningful bedtime rituals",
      "teaching through curious questions", "praising effort over outcome", "responding to tantrums with calm",
      "being fully present during daily routines", "teaching kindness through your example",
      "giving age-appropriate explanations", "building your children's confidence",
      "truly listening to your children", "navigating sibling conflict fairly",
      "creating meaningful family traditions", "teaching resilience through setbacks",
      "supporting school and social transitions", "managing screen time collaboratively",
      "encouraging natural curiosity", "physical affection and emotional safety",
      "modelling how to apologise", "celebrating each child's individuality",
    ],
    husband: [
      "daily micro-bids for connection", "specific active appreciation", "repair after conflict",
      "romantic gestures that actually matter", "listening without trying to fix",
      "expressing vulnerability safely", "managing external stress as a team",
      "keeping genuine curiosity alive", "physical affection as daily ritual",
      "actively supporting her personal goals", "intentional date nights",
      "navigating parenting disagreements together", "expressing gratitude with specifics",
      "turning towards her bids consistently", "creating shared meaning and dreams",
      "protecting couple time fiercely", "emotional check-ins that go deeper",
      "surprising with genuine thoughtfulness", "growing together through life changes",
      "building trust through daily consistency",
    ],
  };

  const bridgeTargets = {
    conversation: ["Warm Confidence", "Presence", "Being a Great Father", "Being a Great Husband"],
    confidence: ["Empowering Conversation", "Presence", "Being a Great Father", "Being a Great Husband"],
    presence: ["Empowering Conversation", "Warm Confidence", "Being a Great Father", "Being a Great Husband"],
    father: ["Empowering Conversation", "Warm Confidence", "Presence", "Being a Great Husband"],
    husband: ["Empowering Conversation", "Warm Confidence", "Presence", "Being a Great Father"],
  };

  const trackContexts = {
    conversation: "as a clinician communicating with patients",
    confidence: "in building your inner authority and calm presence",
    presence: "in how you show up physically and verbally",
    father: "as a father shaping your children's world",
    husband: "as a partner nurturing your relationship",
  };

  const practiceTemplates = {
    conversation: (t) => `Today, in one patient interaction, consciously practise ${t}. Notice what shifts when you focus on this specifically. After the consultation, take 30 seconds to reflect: what changed in the dynamic?`,
    confidence: (t) => `Today, find one moment to deliberately practise ${t}. Before you begin, take three slow breaths. Notice how your body feels before, during, and after. Confidence is built in these micro-moments of intentional action.`,
    presence: (t) => `Today, choose one interaction where you deliberately focus on ${t}. Remove one distraction — phone, screen, or mental to-do list — and give your full attention. Notice the difference in the other person's response to you.`,
    father: (t) => `Today, create one moment with your children where you practise ${t}. Get down to their eye level. Be fully there, with no agenda other than connection. Notice what they do when they feel your complete presence and attention.`,
    husband: (t) => `Today, find one moment with your wife to practise ${t}. Put your phone away completely. Make eye contact. Be genuinely curious about her experience today. Notice what happens when she feels truly seen by you.`,
  };

  const quizSets = {
    conversation: [
      { q: (fw,r) => `What is the primary goal of ${fw}?`, opts: ["To empower the patient to find their own solutions", "To tell the patient what to do", "To finish the consultation quickly", "To demonstrate your expertise"], a: 0 },
      { q: (fw,r) => `According to ${r}, what builds genuine rapport?`, opts: ["Authentic curiosity about the person's perspective", "Using medical jargon to show competence", "Keeping conversations brief", "Avoiding emotional topics"], a: 0 },
      { q: (fw,r) => `Which approach best supports lasting behaviour change?`, opts: ["Exploring the person's own motivations for change", "Giving direct instructions", "Using fear-based messaging", "Repeating information more firmly"], a: 0 },
    ],
    confidence: [
      { q: (fw,r) => `What does ${r} say about building confidence?`, opts: ["It's built through repeated small actions, not grand gestures", "It's an innate trait you either have or don't", "It requires never showing uncertainty", "It means always speaking the loudest"], a: 0 },
      { q: (fw,r) => `According to ${fw}, how do you build presence under pressure?`, opts: ["Regulate your nervous system first, then respond", "Push through anxiety and ignore your body", "Avoid difficult situations entirely", "Pretend you're not nervous"], a: 0 },
      { q: (fw,r) => `What is the foundation of authentic confidence?`, opts: ["Self-awareness combined with growing competence", "Never admitting mistakes to others", "Always having the right answer ready", "Speaking over others to assert dominance"], a: 0 },
    ],
    presence: [
      { q: (fw,r) => `What does ${r} identify as key to genuine presence?`, opts: ["Full attention to the current moment and person", "Thinking ahead about what to say next", "Maintaining a rigid, imposing posture", "Speaking as quickly and efficiently as possible"], a: 0 },
      { q: (fw,r) => `According to ${fw}, what creates real impact in communication?`, opts: ["Strategic pauses and intentional pacing", "Speaking without any breaks", "Using the most complex vocabulary", "Minimising eye contact to seem mysterious"], a: 0 },
      { q: (fw,r) => `Which habit most undermines your presence?`, opts: ["Mental multitasking during conversations", "Speaking slowly and deliberately", "Making sustained eye contact", "Using natural hand gestures"], a: 0 },
    ],
    father: [
      { q: (fw,r) => `What does ${r} say children learn most powerfully from?`, opts: ["Watching what you do, not hearing what you say", "Strict rules and firm consequences", "Lengthy verbal explanations and lectures", "Being left to figure things out alone"], a: 0 },
      { q: (fw,r) => `According to ${fw}, what builds lasting resilience in children?`, opts: ["Helping them name and process their emotions", "Shielding them from all difficulty", "Dismissing minor setbacks quickly", "Rewarding only successful outcomes"], a: 0 },
      { q: (fw,r) => `What is the most powerful parenting tool according to research?`, opts: ["Consistent, warm presence during everyday moments", "Expensive activities and enrichment experiences", "Academic pressure from an early age", "Strict scheduling and structure"], a: 0 },
    ],
    husband: [
      { q: (fw,r) => `What does ${r} identify as the #1 predictor of relationship success?`, opts: ["How you respond to your partner's small bids for connection", "How often you agree on everything", "How much money you spend on dates", "How rarely you have arguments"], a: 0 },
      { q: (fw,r) => `According to ${fw}, what matters most after conflict?`, opts: ["Making a genuine repair attempt", "Proving that you were right", "Giving each other indefinite space", "Pretending it didn't happen"], a: 0 },
      { q: (fw,r) => `What strengthens a relationship most over time?`, opts: ["Daily micro-moments of turning towards each other", "Grand romantic gestures on special occasions", "Avoiding all sources of conflict", "Maintaining complete independence"], a: 0 },
    ],
  };

  const allLessons = {};

  for (const track of TRACKS) {
    const lessons = [];
    const fws = frameworks[track];
    const tops = topicSets[track];
    const bridges = bridgeTargets[track];
    const quizzes = quizSets[track];

    for (let i = 0; i < 100; i++) {
      const fw = fws[i % fws.length];
      const topic = tops[i % tops.length];
      const bridge = bridges[i % bridges.length];
      const quiz = quizzes[i % quizzes.length];
      const level = i < 20 ? "Foundation" : i < 50 ? "Intermediate" : i < 80 ? "Advanced" : "Mastery";
      const levelNum = i < 20 ? 1 : i < 50 ? 2 : i < 80 ? 3 : 4;

      const insights = [
        `"${fw[0]} teaches us that the smallest shifts in how we communicate can transform outcomes entirely." — ${fw[1]}`,
        `"Mastery of ${topic} isn't about perfection — it's about consistent, intentional practice over time." — Based on ${fw[0]}`,
        `"The research is unambiguous: ${topic} is a learnable skill, not an innate talent." — Principle from ${fw[1]}'s work`,
      ];

      lessons.push({
        id: i + 1,
        title: `${topic.charAt(0).toUpperCase() + topic.slice(1)}`,
        subtitle: `${level} · Lesson ${i + 1} of 100`,
        level,
        levelNum,
        framework: fw[0],
        researcher: fw[1],
        topic,
        evidence: `Research from ${fw[0]} (${fw[1]}) demonstrates that ${topic} is a critical skill ${trackContexts[track]}. At the ${level.toLowerCase()} level, this means moving beyond basic awareness into deliberate, nuanced practice that becomes second nature. The evidence is clear: clinicians and individuals who master ${topic} create measurably better outcomes — whether that's improved patient adherence, deeper personal wellbeing, or stronger relationship satisfaction. This lesson builds on foundational principles and challenges you to apply them with increasing subtlety and precision.`,
        practice: practiceTemplates[track](topic),
        bridge,
        insight: insights[i % insights.length],
        takeaway: `This week, set a daily micro-intention around ${topic}. Write it somewhere visible — a sticky note, your phone lock screen, your desk. Track it for 7 days. ${fw[1]}'s research confirms: small, consistent practice creates the kind of lasting change that transforms how people experience you.`,
        quizQuestion: quiz.q(fw[0], fw[1]),
        quizOptions: quiz.opts,
        quizAnswer: quiz.a,
      });
    }
    allLessons[track] = lessons;
  }
  return allLessons;
}

// ── Styles ─────────────────────────────────────────────────
const font = "'DM Sans', 'Segoe UI', system-ui, sans-serif";
const displayFont = "'Playfair Display', Georgia, serif";

// ── Main App ───────────────────────────────────────────────
export default function App() {
  const [allLessons] = useState(() => generateAllLessons());
  const [view, setView] = useState("home"); // home | track | lesson | starred
  const [activeTrack, setActiveTrack] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [lessonStep, setLessonStep] = useState(0); // 0-5 steps
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [stars, setStars] = useState(() => {
    try { return JSON.parse(window.localStorage?.getItem?.("tom_stars") || "{}"); } catch { return {}; }
  });
  const [completedLessons, setCompletedLessons] = useState(() => {
    try { return JSON.parse(window.localStorage?.getItem?.("tom_completed") || "{}"); } catch { return {}; }
  });
  const [levelFilter, setLevelFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Persist stars and completed
  useEffect(() => {
    try { window.localStorage?.setItem?.("tom_stars", JSON.stringify(stars)); } catch {}
  }, [stars]);
  useEffect(() => {
    try { window.localStorage?.setItem?.("tom_completed", JSON.stringify(completedLessons)); } catch {}
  }, [completedLessons]);

  const starKey = (track, lessonId) => `${track}_${lessonId}`;
  const toggleStar = useCallback((track, lessonId) => {
    const key = starKey(track, lessonId);
    setStars(prev => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = { track, lessonId, time: Date.now() };
      return next;
    });
  }, []);

  const markCompleted = useCallback((track, lessonId) => {
    const key = starKey(track, lessonId);
    setCompletedLessons(prev => ({ ...prev, [key]: Date.now() }));
  }, []);

  const isStarred = (track, lessonId) => !!stars[starKey(track, lessonId)];
  const isCompleted = (track, lessonId) => !!completedLessons[starKey(track, lessonId)];

  const starredLessons = useMemo(() => {
    return Object.values(stars)
      .sort((a, b) => b.time - a.time)
      .map(s => ({ ...s, lesson: allLessons[s.track]?.find(l => l.id === s.lessonId) }))
      .filter(s => s.lesson);
  }, [stars, allLessons]);

  const getTrackProgress = (track) => {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
      if (completedLessons[starKey(track, i)]) count++;
    }
    return count;
  };

  const openLesson = (track, lesson) => {
    setActiveTrack(track);
    setActiveLesson(lesson);
    setLessonStep(0);
    setQuizAnswer(null);
    setQuizSubmitted(false);
    setView("lesson");
  };

  const steps = ["Evidence", "Daily Practice", "Cross-Role Bridge", "Expert Insight", "Quiz", "Takeaway"];

  // ── Render ─────────────────────────────────────────────
  const bg = "#0A0E17";
  const surface = "#131926";
  const surfaceHover = "#1A2236";
  const text1 = "#F0F2F5";
  const text2 = "#8892A4";
  const text3 = "#5A6478";
  const accent = activeTrack ? TRACK_META[activeTrack]?.color : "#2D9CDB";

  const baseStyles = {
    fontFamily: font,
    background: bg,
    color: text1,
    minHeight: "100vh",
    maxWidth: 480,
    margin: "0 auto",
    padding: "0 0 100px 0",
    position: "relative",
    WebkitFontSmoothing: "antialiased",
  };

  // ── HOME VIEW ──────────────────────────────────────────
  if (view === "home") {
    const totalCompleted = Object.keys(completedLessons).length;
    const totalStarred = Object.keys(stars).length;

    return (
      <div style={baseStyles}>
        {/* Header */}
        <div style={{ padding: "48px 24px 24px", textAlign: "center" }}>
          <div style={{ fontFamily: displayFont, fontSize: 28, fontWeight: 700, marginBottom: 6, letterSpacing: "-0.5px" }}>
            Your Daily Training
          </div>
          <div style={{ color: text2, fontSize: 14 }}>500 lessons across 5 pillars of growth</div>
        </div>

        {/* Stats bar */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, padding: "8px 24px 28px", borderBottom: `1px solid ${surfaceHover}` }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>{totalCompleted}</div>
            <div style={{ fontSize: 11, color: text3, textTransform: "uppercase", letterSpacing: 1 }}>Completed</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#F2C94C" }}>⭐ {totalStarred}</div>
            <div style={{ fontSize: 11, color: text3, textTransform: "uppercase", letterSpacing: 1 }}>Starred</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>500</div>
            <div style={{ fontSize: 11, color: text3, textTransform: "uppercase", letterSpacing: 1 }}>Total</div>
          </div>
        </div>

        {/* Starred shortcut */}
        {totalStarred > 0 && (
          <div
            onClick={() => setView("starred")}
            style={{
              margin: "20px 24px 0",
              padding: "16px 20px",
              background: "linear-gradient(135deg, #2A1F0A, #1A1506)",
              borderRadius: 14,
              cursor: "pointer",
              border: "1px solid #3D2E0A",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 15 }}>⭐ Starred Lessons</div>
              <div style={{ color: text2, fontSize: 13, marginTop: 2 }}>{totalStarred} lesson{totalStarred !== 1 ? "s" : ""} you want to remember</div>
            </div>
            <div style={{ color: text3, fontSize: 18 }}>→</div>
          </div>
        )}

        {/* Track cards */}
        <div style={{ padding: "20px 24px" }}>
          {TRACKS.map(track => {
            const meta = TRACK_META[track];
            const progress = getTrackProgress(track);
            return (
              <div
                key={track}
                onClick={() => { setActiveTrack(track); setView("track"); setLevelFilter("all"); setSearchQuery(""); }}
                style={{
                  padding: "20px",
                  background: surface,
                  borderRadius: 14,
                  marginBottom: 12,
                  cursor: "pointer",
                  border: `1px solid transparent`,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = meta.color + "40"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: meta.color + "18",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22,
                  }}>
                    {meta.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>{meta.name}</div>
                    <div style={{ color: text2, fontSize: 12 }}>{meta.desc}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: meta.color }}>{progress}/100</div>
                  </div>
                </div>
                {/* Progress bar */}
                <div style={{ marginTop: 14, height: 3, background: surfaceHover, borderRadius: 2 }}>
                  <div style={{
                    height: "100%", borderRadius: 2,
                    background: meta.color,
                    width: `${progress}%`,
                    transition: "width 0.3s",
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── STARRED VIEW ───────────────────────────────────────
  if (view === "starred") {
    return (
      <div style={baseStyles}>
        <div style={{ padding: "20px 24px 0", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setView("home")} style={{
            background: "none", border: "none", color: text2, cursor: "pointer", fontSize: 18, padding: "8px 0",
          }}>←</button>
          <div style={{ fontFamily: displayFont, fontSize: 22, fontWeight: 700 }}>⭐ Starred Lessons</div>
        </div>
        <div style={{ color: text2, fontSize: 13, padding: "4px 24px 16px 54px" }}>
          {starredLessons.length} lesson{starredLessons.length !== 1 ? "s" : ""} you want to remember
        </div>

        <div style={{ padding: "0 24px" }}>
          {starredLessons.length === 0 ? (
            <div style={{ color: text3, textAlign: "center", padding: 40, fontSize: 14 }}>
              No starred lessons yet. Tap the star icon on any lesson to save it here.
            </div>
          ) : starredLessons.map(({ track, lesson }) => {
            const meta = TRACK_META[track];
            return (
              <div
                key={`${track}_${lesson.id}`}
                onClick={() => openLesson(track, lesson)}
                style={{
                  padding: "16px", background: surface, borderRadius: 12, marginBottom: 8,
                  cursor: "pointer", borderLeft: `3px solid ${meta.color}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <div>
                    <div style={{ fontSize: 11, color: meta.color, fontWeight: 600, marginBottom: 4 }}>
                      {meta.icon} {meta.name}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{lesson.title}</div>
                    <div style={{ color: text2, fontSize: 12, marginTop: 2 }}>{lesson.subtitle}</div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleStar(track, lesson.id); }}
                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, padding: 4 }}
                  >⭐</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── TRACK VIEW ─────────────────────────────────────────
  if (view === "track" && activeTrack) {
    const meta = TRACK_META[activeTrack];
    const lessons = allLessons[activeTrack];
    const levels = ["all", "Foundation", "Intermediate", "Advanced", "Mastery"];

    const filtered = lessons.filter(l => {
      if (levelFilter !== "all" && l.level !== levelFilter) return false;
      if (searchQuery && !l.title.toLowerCase().includes(searchQuery.toLowerCase()) && !l.topic.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });

    return (
      <div style={baseStyles}>
        {/* Track header */}
        <div style={{ padding: "20px 24px 0", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setView("home")} style={{
            background: "none", border: "none", color: text2, cursor: "pointer", fontSize: 18, padding: "8px 0",
          }}>←</button>
          <div>
            <div style={{ fontFamily: displayFont, fontSize: 22, fontWeight: 700 }}>{meta.icon} {meta.name}</div>
            <div style={{ color: text2, fontSize: 13 }}>{getTrackProgress(activeTrack)} of 100 completed</div>
          </div>
        </div>

        {/* Search */}
        <div style={{ padding: "16px 24px 8px" }}>
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: "100%", padding: "10px 14px", background: surface, border: `1px solid ${surfaceHover}`,
              borderRadius: 10, color: text1, fontSize: 14, fontFamily: font, outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Level filter */}
        <div style={{ display: "flex", gap: 6, padding: "4px 24px 16px", overflowX: "auto" }}>
          {levels.map(lv => (
            <button
              key={lv}
              onClick={() => setLevelFilter(lv)}
              style={{
                padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                border: "none", cursor: "pointer", whiteSpace: "nowrap", fontFamily: font,
                background: levelFilter === lv ? meta.color : surface,
                color: levelFilter === lv ? "#fff" : text2,
              }}
            >
              {lv === "all" ? "All" : lv}
            </button>
          ))}
        </div>

        {/* Lesson list */}
        <div style={{ padding: "0 24px" }}>
          {filtered.map(lesson => {
            const starred = isStarred(activeTrack, lesson.id);
            const completed = isCompleted(activeTrack, lesson.id);
            const levelColors = { Foundation: "#27AE60", Intermediate: "#2D9CDB", Advanced: "#9B51E0", Mastery: "#F2994A" };
            return (
              <div
                key={lesson.id}
                onClick={() => openLesson(activeTrack, lesson)}
                style={{
                  padding: "14px 16px", background: surface, borderRadius: 12, marginBottom: 6,
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
                  opacity: completed ? 0.7 : 1,
                  borderLeft: `3px solid ${completed ? text3 : levelColors[lesson.level] || meta.color}`,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4,
                      background: (levelColors[lesson.level] || meta.color) + "22",
                      color: levelColors[lesson.level] || meta.color,
                      textTransform: "uppercase", letterSpacing: 0.5,
                    }}>{lesson.level}</span>
                    {completed && <span style={{ fontSize: 10, color: text3 }}>✓ Done</span>}
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {lesson.title}
                  </div>
                  <div style={{ color: text2, fontSize: 12, marginTop: 1 }}>{lesson.framework} · {lesson.researcher}</div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleStar(activeTrack, lesson.id); }}
                  style={{
                    background: "none", border: "none", cursor: "pointer", fontSize: 18,
                    padding: 4, opacity: starred ? 1 : 0.3, transition: "opacity 0.2s",
                  }}
                >{starred ? "⭐" : "☆"}</button>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div style={{ color: text3, textAlign: "center", padding: 40, fontSize: 14 }}>No lessons match your filters.</div>
          )}
        </div>
      </div>
    );
  }

  // ── LESSON VIEW ────────────────────────────────────────
  if (view === "lesson" && activeLesson && activeTrack) {
    const meta = TRACK_META[activeTrack];
    const lesson = activeLesson;
    const starred = isStarred(activeTrack, lesson.id);
    const completed = isCompleted(activeTrack, lesson.id);

    const stepContent = () => {
      switch (lessonStep) {
        case 0: // Evidence
          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                Evidence Base
              </div>
              <div style={{ fontSize: 12, color: meta.color + "88", marginBottom: 16, fontWeight: 600 }}>
                Framework: {lesson.framework} · {lesson.researcher}
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.7, color: text1 }}>{lesson.evidence}</div>
            </div>
          );
        case 1: // Practice
          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                Today's Practice
              </div>
              <div style={{
                fontSize: 15, lineHeight: 1.7, color: text1,
                padding: 20, background: meta.color + "0D", borderRadius: 12, border: `1px solid ${meta.color}22`,
              }}>{lesson.practice}</div>
            </div>
          );
        case 2: // Bridge
          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                Cross-Role Bridge
              </div>
              <div style={{
                fontSize: 15, lineHeight: 1.7, color: text1,
                padding: 20, background: surface, borderRadius: 12, border: `1px solid ${surfaceHover}`,
              }}>
                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontWeight: 600 }}>Also carries over to:</span>{" "}
                  <span style={{ color: meta.color }}>{lesson.bridge}</span>
                </div>
                The skill of {lesson.topic} you're developing here doesn't stay in one domain. When you practise this as part of {meta.name.toLowerCase()}, you're simultaneously becoming better at {lesson.bridge.toLowerCase()}. The neural pathways and habits you build transfer directly — your patients, your children, and your wife all benefit from the same core skill expressed in different contexts.
              </div>
            </div>
          );
        case 3: // Insight
          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                Expert Insight
              </div>
              <div style={{
                fontSize: 17, lineHeight: 1.7, fontStyle: "italic", color: text1,
                padding: "24px 20px", background: meta.color + "0A", borderRadius: 12,
                borderLeft: `3px solid ${meta.color}`,
              }}>{lesson.insight}</div>
            </div>
          );
        case 4: // Quiz
          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                30-Second Quiz
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, lineHeight: 1.5 }}>{lesson.quizQuestion}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {lesson.quizOptions.map((opt, idx) => {
                  let optBg = surface;
                  let optBorder = surfaceHover;
                  let optColor = text1;
                  if (quizSubmitted) {
                    if (idx === lesson.quizAnswer) { optBg = "#27AE6022"; optBorder = "#27AE60"; optColor = "#27AE60"; }
                    else if (idx === quizAnswer) { optBg = "#EB575722"; optBorder = "#EB5757"; optColor = "#EB5757"; }
                  } else if (quizAnswer === idx) {
                    optBg = meta.color + "18"; optBorder = meta.color;
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => { if (!quizSubmitted) setQuizAnswer(idx); }}
                      style={{
                        padding: "12px 16px", background: optBg, border: `1px solid ${optBorder}`,
                        borderRadius: 10, color: optColor, fontSize: 14, textAlign: "left",
                        cursor: quizSubmitted ? "default" : "pointer", fontFamily: font, lineHeight: 1.4,
                      }}
                    >{opt}</button>
                  );
                })}
              </div>
              {quizAnswer !== null && !quizSubmitted && (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  style={{
                    marginTop: 16, padding: "12px 0", width: "100%", background: meta.color,
                    border: "none", borderRadius: 10, color: "#fff", fontSize: 15, fontWeight: 600,
                    cursor: "pointer", fontFamily: font,
                  }}
                >Check Answer</button>
              )}
              {quizSubmitted && (
                <div style={{
                  marginTop: 16, padding: 16, borderRadius: 10,
                  background: quizAnswer === lesson.quizAnswer ? "#27AE6015" : "#EB575715",
                  border: `1px solid ${quizAnswer === lesson.quizAnswer ? "#27AE6040" : "#EB575740"}`,
                  fontSize: 14, color: quizAnswer === lesson.quizAnswer ? "#27AE60" : "#EB5757",
                }}>
                  {quizAnswer === lesson.quizAnswer ? "Correct! You've got this." : "Not quite — the correct answer is highlighted in green above."}
                </div>
              )}
            </div>
          );
        case 5: // Takeaway
          return (
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>
                Your Takeaway Action
              </div>
              <div style={{
                fontSize: 15, lineHeight: 1.7, color: text1,
                padding: 20, background: meta.color + "0D", borderRadius: 12, border: `1px solid ${meta.color}22`,
              }}>{lesson.takeaway}</div>
              {!completed && (
                <button
                  onClick={() => { markCompleted(activeTrack, lesson.id); }}
                  style={{
                    marginTop: 20, padding: "14px 0", width: "100%",
                    background: `linear-gradient(135deg, ${meta.color}, ${meta.color}CC)`,
                    border: "none", borderRadius: 12, color: "#fff", fontSize: 15, fontWeight: 700,
                    cursor: "pointer", fontFamily: font, letterSpacing: 0.3,
                  }}
                >✓ Mark as Completed</button>
              )}
              {completed && (
                <div style={{
                  marginTop: 20, padding: 14, textAlign: "center", borderRadius: 12,
                  background: "#27AE6015", border: "1px solid #27AE6030", color: "#27AE60",
                  fontSize: 14, fontWeight: 600,
                }}>✓ Lesson Completed</div>
              )}
            </div>
          );
        default: return null;
      }
    };

    return (
      <div style={baseStyles}>
        {/* Lesson header */}
        <div style={{ padding: "20px 24px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => setView("track")} style={{
            background: "none", border: "none", color: text2, cursor: "pointer", fontSize: 18, padding: "8px 0",
          }}>←</button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => toggleStar(activeTrack, lesson.id)}
              style={{
                background: "none", border: "none", cursor: "pointer", fontSize: 22, padding: 4,
              }}
            >{starred ? "⭐" : "☆"}</button>
          </div>
        </div>

        {/* Lesson title */}
        <div style={{ padding: "12px 24px 20px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
            {meta.icon} {meta.name}
          </div>
          <div style={{ fontFamily: displayFont, fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginBottom: 4 }}>
            {lesson.title}
          </div>
          <div style={{ color: text2, fontSize: 13 }}>{lesson.subtitle}</div>
        </div>

        {/* Step indicators */}
        <div style={{ display: "flex", gap: 4, padding: "0 24px 20px" }}>
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => { setLessonStep(idx); }}
              style={{
                flex: 1, height: 4, borderRadius: 2, border: "none", cursor: "pointer",
                background: idx <= lessonStep ? meta.color : surfaceHover,
                opacity: idx <= lessonStep ? 1 : 0.5,
                transition: "background 0.2s, opacity 0.2s",
              }}
              title={step}
            />
          ))}
        </div>

        {/* Step label */}
        <div style={{ padding: "0 24px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 12, color: text3 }}>Step {lessonStep + 1} of 6</div>
          <div style={{ fontSize: 12, color: text2, fontWeight: 600 }}>{steps[lessonStep]}</div>
        </div>

        {/* Step content */}
        <div style={{ padding: "16px 24px" }}>
          {stepContent()}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", gap: 10, padding: "8px 24px 40px" }}>
          {lessonStep > 0 && (
            <button
              onClick={() => setLessonStep(s => s - 1)}
              style={{
                flex: 1, padding: "13px 0", background: surface, border: `1px solid ${surfaceHover}`,
                borderRadius: 10, color: text2, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font,
              }}
            >← Previous</button>
          )}
          {lessonStep < 5 && (
            <button
              onClick={() => setLessonStep(s => s + 1)}
              style={{
                flex: 1, padding: "13px 0", background: meta.color, border: "none",
                borderRadius: 10, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font,
              }}
            >Next →</button>
          )}
        </div>
      </div>
    );
  }

  return null;
}
