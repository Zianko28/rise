import { useState } from "react";

const tracks = {
  conversation: {
    label: "Empowering Conversation",
    shortLabel: "Conversation",
    emoji: "💬",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
    tagline: "Clear, empathetic, empowering — in clinic and beyond",
    lessons: [
      {
        title: "Ask, Don't Tell",
        source: "Motivational Interviewing — Miller & Rollnick",
        core: "People act on change they voice themselves — not change that's prescribed to them. This is the central finding of Motivational Interviewing, one of the most replicated behaviour-change frameworks in medicine. The instinct to advise is strong, especially as a GP. But advice given before someone is ready slides off. Questions draw out their own motivation — which sticks.",
        practice: "Today, replace one piece of advice with a genuine question: 'What do you think would help?' Then listen without steering the answer.",
        forHome: "Works identically with your kids. 'What feels right to you?' builds lasting motivation far better than instructions. And with your wife — ask before suggesting.",
        insight: "The righting reflex — the urge to fix — is the greatest barrier to empowering conversation.",
        quiz: {
          question: "Why do open questions empower others more than direct advice?",
          options: ["They avoid giving away your expertise", "People act most powerfully on change they articulate themselves", "They make conversations shorter", "They put responsibility on the other person"],
          correct: 1,
          explanation: "Self-determination theory shows that self-authored motivation drives action far more reliably than externally prescribed advice — in clinic, at home, everywhere."
        },
        takeaway: "Today: swap one piece of advice for one genuine question."
      },
      {
        title: "Let Them Finish",
        source: "Narrative Medicine — Charon; Rhoades et al.",
        core: "The average GP interrupts a patient within 11–23 seconds. Yet patients who speak uninterrupted finish within 60–90 seconds — and surface information that would otherwise be missed. The same dynamic plays out in every relationship. We interrupt because we think we know where it's going. We're often wrong — and even when we're right, the interruption signals 'I'm not fully here for you.'",
        practice: "In one conversation today, let the other person fully finish before you respond. Count silently if it helps. Notice what they say in the last 20 seconds.",
        forHome: "When your child is upset, or your wife is sharing her day — finish line first, then respond. What people need most is to feel heard before they need to be helped.",
        insight: "The most powerful thing you can offer another person is your unhurried attention.",
        quiz: {
          question: "How long does an uninterrupted person typically take to finish their opening?",
          options: ["3–5 minutes", "60–90 seconds", "It varies too much to measure", "Under 30 seconds"],
          correct: 1,
          explanation: "Research shows people finish within 60–90 seconds when not interrupted — yet we intervene at 11–23 seconds on average, missing critical content every time."
        },
        takeaway: "Today: let one person finish completely before you respond."
      },
      {
        title: "Signpost Before You Speak",
        source: "Health Literacy Research — Kessels, 2003",
        core: "Patients forget up to 80% of what their GP tells them — not from inattention, but because information without structure is hard for the brain to file. Signposting solves this: tell people what you're about to say, say it, then briefly confirm. 'I want to cover three things: what's happening, what we'll do, and what to watch for.' This dramatically improves what's retained — and how safe people feel.",
        practice: "Open one conversation or meeting today with a clear map: 'I want to talk about two things.' Then follow it.",
        forHome: "With your children, a heads-up before a serious conversation ('I want to talk about something — it's nothing scary') reduces anxiety and invites them in rather than shutting them down.",
        insight: "Clarity is kindness. A map reduces fear before you've said anything important.",
        quiz: {
          question: "Why do patients forget so much of what their GP tells them?",
          options: ["They aren't motivated to listen", "Information arrives without clear structure", "Consultations are too short", "GPs use too much jargon"],
          correct: 1,
          explanation: "Kessels (2003) found recall failure is primarily a structure problem. Signposting gives the brain a framework to store and retrieve what matters."
        },
        takeaway: "Today: open one conversation with an explicit roadmap."
      },
      {
        title: "Acknowledge Before You Advise",
        source: "Gottman Institute; Rogers, 1957 — Unconditional Positive Regard",
        core: "Carl Rogers identified the most consistent predictor of effective communication: making the other person feel genuinely understood before anything else happens. In medicine this is called empathic acknowledgement. In relationships it's the difference between 'Here's what you should do' and 'That sounds really hard — tell me more.' The advice may be identical. The experience is completely different.",
        practice: "Before advising, fixing, or redirecting — say one thing that acknowledges what the person is experiencing. 'That sounds exhausting.' 'I can see why that's frustrating.' Then pause.",
        forHome: "This is the single most transferable skill from clinic to home. Your family doesn't always need Dr [Your Name]. Sometimes they just need you — present, warm, listening.",
        insight: "People don't care how much you know until they know how much you care — and they can feel the difference.",
        quiz: {
          question: "What does acknowledgement do before advice is given?",
          options: ["It wastes time in busy consultations", "It makes the other person feel understood — which makes them receptive", "It avoids giving clinical responsibility", "It works only in therapy settings"],
          correct: 1,
          explanation: "Rogers' research showed that feeling genuinely understood is the foundation of all effective communication — it opens people to what comes next."
        },
        takeaway: "Today: acknowledge once before you advise — with anyone."
      },
      {
        title: "Check What They Heard",
        source: "Teach-Back Method — AHRQ",
        core: "Patients misremember nearly half of what they're told. The teach-back method — asking someone to reflect back what they understood — is the most evidence-supported tool to close this gap. The key is framing: it's not a test of them, it's a check on your own clarity. 'I want to make sure I explained that well — what will you do if the pain returns?' Same check, completely different dynamic.",
        practice: "End one important conversation today by checking understanding: 'Just so I know I've been clear — what are you taking away from this?'",
        forHome: "With your kids: 'Can you tell me what our plan is?' builds understanding and gives them ownership. With your wife after an important discussion: 'Are we on the same page about this?' — genuinely, not rhetorically.",
        insight: "If they can't say it back, you haven't communicated. You've just talked.",
        quiz: {
          question: "How should you frame a teach-back check to be most effective?",
          options: ["As a test of their attention", "As a check on your own clarity, not theirs", "Only after complex medical information", "At the very start of the conversation"],
          correct: 1,
          explanation: "Framing it as checking your own explanation removes the power imbalance and makes people comfortable responding honestly — which is when you get real information."
        },
        takeaway: "Today: end one important exchange by checking what was understood."
      }
    ]
  },
  confidence: {
    label: "Warm Confidence",
    shortLabel: "Confidence",
    emoji: "✨",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
    tagline: "Authority that feels safe — not distant",
    lessons: [
      {
        title: "Warmth Opens the Door",
        source: "Fiske et al., 2007 — Princeton Social Cognition Lab",
        core: "People judge warmth before competence — and warmth has the greater influence on trust. Your knowledge only becomes credible once warmth has been established. This is counterintuitive for professionals trained to demonstrate expertise first. But lead with competence alone and you're seen as brilliant but cold. Lead with warmth, and your competence becomes trustworthy.",
        practice: "In your next consultation, bring one warmth cue before the clinical agenda begins: their name, eye contact, one unhurried moment. It takes under 10 seconds and changes everything that follows.",
        forHome: "Connection before content — always. With your kids and your wife, warmth is the neurological gateway through which your influence actually works.",
        insight: "Lead with warmth, and your competence becomes trusted. Lead with competence alone, and you'll be respected but not reached.",
        quiz: {
          question: "According to Princeton's social cognition research, in what order do people judge others?",
          options: ["Competence first, then warmth", "Warmth first, then competence", "Both equally and simultaneously", "Confidence, then warmth"],
          correct: 1,
          explanation: "Fiske et al. found warmth is judged first and carries more weight in determining trust. Competence only lands once warmth has been established."
        },
        takeaway: "Today: one warmth cue before every agenda — clinic, home, anywhere."
      },
      {
        title: "Your Calm Is Contagious",
        source: "Polyvagal Theory — Porges; Cuddy et al., 2010",
        core: "Your nervous system broadcasts safety signals — open posture, soft eyes, steady breathing — that others pick up before a word is spoken. When you're regulated, patients and family feel safer without knowing why. Anxiety is equally contagious. As a GP and a father, your physiological state is always doing something in the room. The question is whether it's helping or not.",
        practice: "Before a difficult consultation, a tense moment at home, or any situation where you want to show up well — take three slow diaphragmatic breaths. This activates the vagal brake within 60 seconds.",
        forHome: "Your children co-regulate with your nervous system. After a hard clinic day, your calm is their anchor. Regulate yourself first — before you walk through the door.",
        insight: "Presence isn't a performance. It's a physiological state — and it's trainable.",
        quiz: {
          question: "What does polyvagal theory say about how others detect calm and safety in a person?",
          options: ["Through their credentials", "Through pre-conscious nervous system cues like posture and breathing", "Through what they say", "Through their response speed"],
          correct: 1,
          explanation: "Porges showed the nervous system detects safety pre-consciously — before language is processed — through physical signals like open posture, soft facial expression, and regulated breath."
        },
        takeaway: "Today: three breaths before one difficult moment."
      },
      {
        title: "Clear Is Not Cold",
        source: "Rogers, 1957; Baumrind, Authoritative Parenting Research",
        core: "Many people hedge their speech to seem approachable. 'It might perhaps be worth possibly considering…' But research shows hedging undermines both confidence and trust at the same time. The optimal combination is clear, direct language paired with warm body language — not one or the other. In medicine and at home, people need both to feel safe and guided.",
        practice: "Notice once today where you hedge unnecessarily. Replace it with a direct, warm statement. Same care in your voice — sharper words.",
        forHome: "Baumrind's parenting research found 'authoritative' parenting — warm but clear and boundaried — produces the strongest outcomes for children. Not permissive. Not authoritarian. Both, together.",
        insight: "Secure authority is not the absence of warmth. It is clarity held gently.",
        quiz: {
          question: "What does research show about hedging language to appear more approachable?",
          options: ["It successfully balances warmth and authority", "It undermines both confidence and trust simultaneously", "It only becomes a problem in formal settings", "It is more effective than direct language"],
          correct: 1,
          explanation: "Hedging reduces perceived competence without increasing perceived warmth. Clear speech with warm non-verbals is more effective than hedged speech alone."
        },
        takeaway: "Today: replace one hedged sentence with a direct, warm one."
      },
      {
        title: "Composure Under Uncertainty",
        source: "Simpkin & Schwartzstein, NEJM 2016",
        core: "Patients can tolerate significant diagnostic uncertainty — but only when it's delivered with composure and a plan. Anxious uncertainty is contagious and erodes trust faster than the uncertainty itself. Calm uncertainty with a clear next step is a completely different experience. The skill is separating your internal uncertainty from how you hold and communicate it.",
        practice: "Replace: 'I'm not sure, it could be a few things…' with: 'I don't have a definitive answer yet — and that's appropriate at this stage. Here's exactly what we're going to do next.'",
        forHome: "With your children: 'I don't know — let's find out together' with genuine curiosity models intellectual honesty and emotional security at the same time.",
        insight: "They don't need you to be certain. They need you to be calm, present, and to have a plan.",
        quiz: {
          question: "What makes uncertainty tolerable to patients, according to Simpkin & Schwartzstein?",
          options: ["GP experience level", "Length of the consultation", "Composure and a clear plan communicated alongside it", "Apologising for not knowing"],
          correct: 2,
          explanation: "The research found that anxious uncertainty — not uncertainty itself — erodes trust. Composure with a clear next step makes uncertainty feel safe."
        },
        takeaway: "Today: if uncertain, name it calmly and follow with a plan."
      }
    ]
  },
  presence: {
    label: "Speech, Body & Writing",
    shortLabel: "Presence",
    emoji: "🎯",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    tagline: "How you speak, move, and write changes what people hear",
    lessons: [
      {
        title: "Your Voice Is Your First Signal",
        source: "Roter et al., 2002 — Vocal Affect in Clinical Communication",
        core: "Roter et al. found that GPs with warmer, more varied vocal tones had patients with better satisfaction, adherence, and health outcomes — independently of what was actually said. Tone carries emotional content that words cannot. A slow, warm delivery signals care. A fast, flat one signals detachment — even if the words are excellent. Your voice lands before your content does.",
        practice: "In one conversation today, slow your speaking pace by about 20%. Notice what changes — in the other person, and in yourself.",
        forHome: "Young children read vocal tone before they fully process language. Your tone is your children's first signal of whether they're safe, seen, and welcome.",
        insight: "People won't always remember what you said. They will remember how your voice made them feel.",
        quiz: {
          question: "What did Roter et al. find about GP vocal tone and patient outcomes?",
          options: ["It had no measurable effect", "Warmer tones improved adherence and outcomes independently of content", "Patients preferred fast, confident delivery", "Tone only matters in mental health settings"],
          correct: 1,
          explanation: "Roter's research showed vocal warmth and variety correlated with better outcomes across primary care — independent of clinical content."
        },
        takeaway: "Today: slow your pace in one important conversation."
      },
      {
        title: "Your Body Speaks First",
        source: "Cuddy et al., 2010; Mehrabian, 1971",
        core: "Before you say a word, your body has already communicated. Open posture — shoulders back, chest open, weight evenly distributed — signals confidence and safety. Closed posture does the opposite. Mehrabian's research found that in emotionally significant conversations, non-verbal signals carry more weight than words. Your body language is not decoration. It is your primary communication channel.",
        practice: "Before your next important conversation, take 10 seconds to check your posture: feet grounded, shoulders open, eye contact ready. Notice how it changes how you feel — not just how you look.",
        forHome: "When your child wants to tell you something, turn your whole body toward them. Not a glance over your phone. Full body, full face. They know the difference.",
        insight: "Your body is not a vehicle for your words. It is the first word.",
        quiz: {
          question: "What does research show about non-verbal communication in emotionally significant conversations?",
          options: ["Words carry the most weight", "Non-verbal signals carry more weight than words", "Tone matters but body language is secondary", "It depends on the context"],
          correct: 1,
          explanation: "Mehrabian's research found that in emotionally significant exchanges, non-verbal signals — posture, expression, eye contact — outweigh verbal content in how we're experienced by others."
        },
        takeaway: "Today: turn your full body toward one person who's speaking to you."
      },
      {
        title: "The Pause That Commands",
        source: "Public Speaking Research — Gallo, 2014; TED Talk Analysis",
        core: "Most people treat silence as something to fill. Experienced communicators treat it as a tool. A pause before a key point builds anticipation. A pause after one lets it land. Analysis of the most effective TED talks found that strategic pauses were one of the strongest predictors of audience engagement. The speakers who paused were perceived as more confident, more authoritative, and more trustworthy — not less.",
        practice: "In one conversation today, pause for two full seconds before making your most important point. It will feel longer than it is. Do it anyway.",
        forHome: "When your child asks a big question, a pause before you answer signals: this question deserves real thought. That message alone matters.",
        insight: "Silence is not dead air. It is punctuation — and the most powerful speakers use it constantly.",
        quiz: {
          question: "What effect do strategic pauses have on how speakers are perceived?",
          options: ["They make speakers seem unprepared", "Speakers are perceived as more confident, authoritative, and trustworthy", "Pauses are only effective in formal presentations", "They distract audiences from the message"],
          correct: 1,
          explanation: "Research and TED talk analysis both show that deliberate pauses — before and after key points — increase perceived confidence and engagement significantly."
        },
        takeaway: "Today: pause for two seconds before your most important point in one conversation."
      },
      {
        title: "Writing That Connects",
        source: "Plain Language Research — Kimble, 2012; Nielsen UX Research",
        core: "The most effective professional writing — emails, letters, referrals — has three qualities: it opens with what matters most, it uses short sentences, and it ends with a clear action. Most professional writing does the opposite: buries the key point, uses complex sentence structures, and ends vaguely. Warm, clear writing is a skill — and it reflects directly on how you're experienced as a communicator, even when you're not in the room.",
        practice: "Write one email today using this structure: (1) What this is about — one sentence. (2) What you need from them or what they need to know — briefly. (3) What happens next. Nothing else.",
        forHome: "A short, warm message to your wife or children — unprompted, specific — does more for connection than a long conversation at the wrong moment.",
        insight: "Good writing is thinking made visible. Clear writing signals a clear, caring mind.",
        quiz: {
          question: "What do the most effective professional emails and letters have in common?",
          options: ["They are comprehensive and detailed", "They open with context before the main point", "They open with what matters most, use short sentences, and end with a clear action", "They use formal language throughout"],
          correct: 2,
          explanation: "Plain language research consistently shows that burying the key point and ending vaguely are the most common failures. The best communication leads with what matters and ends with what's next."
        },
        takeaway: "Today: write one email — lead with what matters, end with what's next."
      },
      {
        title: "Eye Contact That Connects",
        source: "Binetti et al., 2016 — Eye Contact and Social Cognition",
        core: "Eye contact is one of the fastest trust-builders available — and one of the most misunderstood. The goal is not sustained staring (which reads as aggressive or unsettling) but natural, intentional contact held for the duration of a thought or sentence. Research shows 60–70% eye contact in conversation is perceived as engaged and warm. Less reads as distracted. More reads as intense.",
        practice: "In one conversation today, make conscious, warm eye contact when the other person is speaking — not just when you are. Listening with your eyes changes the quality of what people share.",
        forHome: "When your child is showing you something — a drawing, a story, a worry — make eye contact before you respond. It tells them: you have my full attention. You matter.",
        insight: "Eye contact says: I see you, and what you say matters to me.",
        quiz: {
          question: "What level of eye contact is perceived as most warm and engaged?",
          options: ["100% — constant eye contact shows full attention", "20–30% — any more feels intense", "60–70% — natural and engaged without being intense", "It makes no measurable difference"],
          correct: 2,
          explanation: "Research shows 60–70% eye contact is the sweet spot — perceived as warm and engaged. Constant eye contact reads as intense; too little reads as distracted."
        },
        takeaway: "Today: make conscious eye contact while listening — not just while speaking."
      }
    ]
  },
  father: {
    label: "Being a Great Father",
    shortLabel: "As a Dad",
    emoji: "👨‍👧‍👦",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.2)",
    tagline: "Role model, teacher, anchor — every day",
    lessons: [
      {
        title: "You Are the Lesson",
        source: "Bandura, 1977 — Social Learning Theory",
        core: "Albert Bandura's social learning theory established what every parent intuitively knows but easily forgets: children learn far more from what they observe than from what they're taught. Your children are studying you constantly — how you handle frustration, how you speak to your wife, whether you apologise, how you treat strangers. You are not just raising children. You are modelling a human being.",
        practice: "Today, do one thing intentionally — knowing your child might be watching. Handle a frustration calmly. Show kindness to someone. Apologise if you get something wrong.",
        forHome: "The most powerful parenting moments are often unplanned. Your child sees you navigate difficulty. How you do that teaches more than any conversation about it.",
        insight: "Children are not shaped by what we tell them. They are shaped by what we show them.",
        quiz: {
          question: "What does Bandura's social learning theory say about how children primarily learn?",
          options: ["Through formal instruction and rules", "Through rewards and consequences", "Through observing and modelling the behaviour of others", "Through their own experimentation"],
          correct: 2,
          explanation: "Bandura's research showed that observational learning is the primary driver of behaviour in children — they model what they see, not what they're told."
        },
        takeaway: "Today: do one thing the way you'd want your child to do it."
      },
      {
        title: "Connection Before Correction",
        source: "Gottman, Emotion Coaching Research",
        core: "John Gottman's research on parenting found that children whose parents consistently acknowledged their emotions before redirecting behaviour were significantly more resilient, better at self-regulation, and had stronger relationships as adults. 'Connection before correction' is not permissiveness — it's sequence. Feel heard first. Boundary second. The order is everything.",
        practice: "Next time your child misbehaves or gets upset, pause. Name what you see before you correct: 'I can see you're really frustrated right now.' Then — and only then — address the behaviour.",
        forHome: "This is also the key to your marriage. Connection before correction, always. Warm before direct. Seen before guided.",
        insight: "A child who feels heard is a child who can be reached. Skip the connection and you lose the correction too.",
        quiz: {
          question: "What did Gottman's emotion coaching research find about children whose feelings were acknowledged first?",
          options: ["They became overly sensitive", "They were significantly more resilient and better at self-regulation", "They struggled with boundaries later", "The effect was only seen in early childhood"],
          correct: 1,
          explanation: "Gottman's research found that children whose emotional experiences were consistently acknowledged first became more resilient, regulated, and relationally capable as they grew."
        },
        takeaway: "Today: name what your child is feeling before you respond to their behaviour."
      },
      {
        title: "Presence Is the Gift",
        source: "Reis & Shaver, Intimacy Theory; Child Development Research",
        core: "Children don't experience love primarily as duration of time — they experience it as quality of attention. Research on childhood memory consistently shows that children remember moments of feeling fully seen far more vividly than the amount of time spent together. Five minutes of completely undivided, phone-away, eye-contact presence is remembered differently than an hour of distracted co-existence.",
        practice: "Today, give your child five minutes of total presence — phone in another room, no TV, no half-attention. Nothing else. Just them. Let them lead.",
        forHome: "This applies equally to your wife. Presence is the gift that costs nothing and means everything.",
        insight: "The opposite of presence isn't absence — it's distraction. And children feel the difference.",
        quiz: {
          question: "What does child development research show about quality vs quantity of parental attention?",
          options: ["More total time always produces stronger attachment", "Children primarily need structured, educational time", "Quality of attention — feeling fully seen — is remembered more powerfully than duration", "Both are equally important and cannot be separated"],
          correct: 2,
          explanation: "Research consistently shows that children remember moments of genuine, undivided presence far more vividly than quantity of time — what matters is feeling truly seen."
        },
        takeaway: "Today: five minutes of total, phone-away presence with your child."
      },
      {
        title: "Teach By Wondering Together",
        source: "Dweck, 2006 — Growth Mindset; Inquiry-Based Learning Research",
        core: "Carol Dweck's research on mindset found that children who were praised for curiosity and effort — rather than intelligence and outcome — developed stronger resilience, greater love of learning, and higher achievement over time. The most powerful thing a parent can model is not knowing the answer, but being genuinely curious about finding it. 'I don't know — what do you think?' is not a weakness. It's the best lesson you can give.",
        practice: "When your child asks a question you don't know today, resist the urge to look it up immediately. Wonder out loud first: 'Hmm — what's your theory?' Then explore together.",
        forHome: "As a GP, you hold a lot of expertise. At home, let some of it go. The parent who doesn't know everything but is endlessly curious raises curious children.",
        insight: "Curiosity is more teachable than knowledge — and more valuable.",
        quiz: {
          question: "What does Dweck's mindset research say about praising curiosity and effort?",
          options: ["It produces children who avoid challenges", "It leads to stronger resilience and love of learning over time", "It is less effective than praising intelligence", "The effect is only seen in academic settings"],
          correct: 1,
          explanation: "Dweck found that praising effort and curiosity — not fixed intelligence — produces children who persist through difficulty, love learning, and achieve more over time."
        },
        takeaway: "Today: wonder out loud with your child about something neither of you knows."
      },
      {
        title: "Repair Is Fathering Too",
        source: "Gottman, 2002; Bowlby, Attachment Theory",
        core: "No parent gets it right every time. Bowlby's attachment research shows that children's security comes not from perfect parenting but from consistent repair — the parent who gets it wrong, recognises it, and comes back. 'I'm sorry I snapped at you earlier. That wasn't fair.' This does two things: it restores the relationship, and it shows your child what accountability looks like in practice — the most powerful lesson in character you can give.",
        practice: "Think of one moment recently where you weren't the father you wanted to be. If appropriate, go back and repair it today. Simple, direct, genuine.",
        forHome: "Modelling repair in front of your children — including repair with your wife — teaches them one of the most valuable relationship skills they will ever have.",
        insight: "Perfection isn't the standard. Return is. The parent who comes back teaches more than the parent who never falters.",
        quiz: {
          question: "What does Bowlby's attachment research say about children's sense of security?",
          options: ["It comes from consistent, perfect parenting", "It comes from consistent repair after moments of disconnection", "It is primarily determined by early infancy", "It depends mainly on the mother's availability"],
          correct: 1,
          explanation: "Bowlby's research shows that secure attachment comes from the parent's consistent willingness to repair — to return after disconnection — not from never making mistakes."
        },
        takeaway: "Today: if there's a repair to make with your child, make it."
      }
    ]
  },
  husband: {
    label: "Being a Great Husband",
    shortLabel: "As a Husband",
    emoji: "❤️",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    tagline: "Romantic, caring, present — for the long run",
    lessons: [
      {
        title: "Understand Before You Solve",
        source: "Gottman Institute — 40 Years of Relationship Research",
        core: "Gottman's research found that in the strongest marriages, partners consistently sought to understand each other's emotional experience before moving to problem-solving. The most common failure: your partner shares something difficult and receives a solution instead of acknowledgement. They feel unheard — even when the advice is good. As a GP, your instinct to fix is strong. With your wife, it's often the wrong first move.",
        practice: "When your wife shares something difficult today, respond with understanding before anything else: 'That sounds really hard' or 'Tell me more.' Hold the fix — even a good one — until she's felt heard.",
        forHome: "The same principle works with your children. Hear the feeling before you address the behaviour. The sequence is the skill.",
        insight: "In a relationship, the problem is rarely the problem. The problem is feeling unheard about the problem.",
        quiz: {
          question: "What does Gottman identify as the most common communication failure between partners?",
          options: ["Arguing too often", "Receiving a solution instead of acknowledgement when sharing a problem", "Not spending enough time together", "Discussing problems late at night"],
          correct: 1,
          explanation: "Gottman found that offering solutions before acknowledgement is one of the most common and damaging patterns — the partner feels unheard even when the advice is helpful."
        },
        takeaway: "Today: acknowledge before you advise — with your wife, once."
      },
      {
        title: "Notice the Small Bids",
        source: "Gottman, 1999 — The Marriage Clinic",
        core: "Gottman identified 'bids for connection' — small, often subtle moments when a partner reaches out: 'Did you see this?', a sigh, 'I'm exhausted', 'Look at that.' Couples who consistently 'turned toward' these bids had dramatically more stable, satisfying relationships. Those who missed or dismissed them consistently drifted. The bid itself is rarely the point. The point is: I wanted to share this moment with you.",
        practice: "Today, notice one bid from your wife. It may be tiny — a comment, a look, a question. Turn toward it: put the phone down, make eye contact, engage. The response matters more than the topic.",
        forHome: "Your children make bids constantly. The same turning-toward principle applies — and the quality of your response matters more than how much time you give.",
        insight: "Masters of relationships turn toward each other's bids 86% of the time. Those who divorce turn toward only 33%.",
        quiz: {
          question: "What is a 'bid for connection' in Gottman's research?",
          options: ["A formal request for a conversation", "A small, often subtle moment when a partner reaches out emotionally", "A complaint about the relationship", "A request for planned time together"],
          correct: 1,
          explanation: "Bids are often tiny — a comment, a gesture, a glance. Consistently turning toward them is one of the strongest predictors of long-term relationship satisfaction."
        },
        takeaway: "Today: notice and turn toward one bid from your wife."
      },
      {
        title: "Stay Curious About Her",
        source: "Perel, Mating in Captivity; Gottman, Attunement Research",
        core: "Long-term partners often stop asking questions — they assume they already know. But people change, and the partner who feels deeply known now — not just remembered from five years ago — reports significantly higher relationship satisfaction. Curiosity is what keeps intimacy alive. It says: I'm interested in who you are becoming, not just who I remember you being.",
        practice: "Ask your wife one genuine question today that you don't already know the answer to. Not 'how was your day?' Something more specific: 'What's been on your mind lately?' or 'Is there anything you need this week that you haven't asked for?'",
        forHome: "The same curiosity that makes you an excellent GP — genuine interest in the person in front of you — is one of the greatest things you can bring home.",
        insight: "The couples who sustain intimacy are those who remain genuinely curious about who their partner is becoming.",
        quiz: {
          question: "What does attunement research suggest about curiosity in long-term relationships?",
          options: ["Partners who have been together long enough don't need to keep asking questions", "Feeling deeply known now — not just historically — predicts relationship satisfaction", "Curiosity is most important in the early years only", "Shared history replaces the need for ongoing curiosity"],
          correct: 1,
          explanation: "Research shows that feeling currently known — not just assumed or remembered — strongly predicts relationship satisfaction. Ongoing curiosity sustains this feeling."
        },
        takeaway: "Today: ask your wife one question you genuinely don't know the answer to."
      },
      {
        title: "Presence Over Duration",
        source: "Reis & Shaver, 1988 — Intimacy Theory",
        core: "Intimacy is built in moments of feeling truly known — seen, heard, and responded to. Research consistently shows that quality of presence matters far more than quantity of time. As a GP with young children, you can't always give more hours. But you can almost always give more presence in the hours you have. Five minutes of genuine, phone-away, eyes-on attention produces more connection than an hour of distracted co-existence.",
        practice: "Choose one moment today — dinner, after the kids are in bed, a short walk — and be fully present for it. Phone in another room. Eye contact. Actually listening. Let that moment count.",
        forHome: "Your wife and your children feel the difference between your presence and your proximity. They need the first, not just the second.",
        insight: "The opposite of presence isn't absence. It's distraction — and the people you love feel it acutely.",
        quiz: {
          question: "What does intimacy research show about time vs presence with a partner?",
          options: ["More total time always produces stronger connection", "Weekly date nights are the most important factor", "Quality of presence — feeling truly seen — matters more than quantity of time", "Shared activities matter more than conversation"],
          correct: 2,
          explanation: "Intimacy theory shows that feeling genuinely seen and heard — even briefly — builds connection more powerfully than extended but distracted time together."
        },
        takeaway: "Today: one phone-away, eyes-on, fully present moment with your wife."
      },
      {
        title: "Go First in Repair",
        source: "Gottman, 2002 — The Relationship Cure",
        core: "Happy couples don't avoid conflict — they repair it effectively. The ability to de-escalate during or after a difficult moment is a stronger predictor of relationship health than how often conflict happens. And the key insight: someone has to go first. A simple, genuine repair attempt — 'I was defensive and I'm sorry', 'Can we start again?' — can shift the trajectory of an entire argument. The willingness to go first, without waiting to be right, is the skill.",
        practice: "After the next tense moment with your wife, be the one to repair first. It doesn't need to be long: 'I don't want to be like this with you. Can we try again?' Then mean it.",
        forHome: "Repairing in front of your children — including repairing with your wife — teaches them one of the most important relationship skills they'll ever have.",
        insight: "It's not about whether you fight. It's about whether you know how to find your way back to each other.",
        quiz: {
          question: "What did Gottman's research find about conflict in the happiest relationships?",
          options: ["Happy couples avoid conflict almost entirely", "Conflict frequency is the strongest predictor of problems", "The ability to repair effectively matters more than conflict frequency", "Happy couples resolve every disagreement completely"],
          correct: 2,
          explanation: "Gottman found that repair ability — not conflict avoidance — is the key variable. Strong couples have conflicts; they just know how to find their way back."
        },
        takeaway: "Today: if tension arises, be the first to offer a genuine repair."
      }
    ]
  }
};

const trackOrder = ["conversation", "confidence", "presence", "father", "husband"];

export default function App() {
  const [active, setActive] = useState("conversation");
  const [lessonIdx, setLessonIdx] = useState({ conversation: 0, confidence: 0, presence: 0, father: 0, husband: 0 });
  const [stage, setStage] = useState({ conversation: "intro", confidence: "intro", presence: "intro", father: "intro", husband: "intro" });
  const [quizAnswer, setQuizAnswer] = useState({ conversation: null, confidence: null, presence: null, father: null, husband: null });
  const [started, setStarted] = useState(new Set());

  const track = tracks[active];
  const idx = lessonIdx[active];
  const lesson = track.lessons[idx];
  const currentStage = stage[active];
  const answered = quizAnswer[active];
  const c = track.color;
  const isLast = idx === track.lessons.length - 1;

  function start() {
    setStage(s => ({ ...s, [active]: "lesson" }));
    setStarted(d => new Set([...d, active]));
  }
  function goQuiz() { setStage(s => ({ ...s, [active]: "quiz" })); }
  function answer(i) {
    if (answered !== null) return;
    setQuizAnswer(q => ({ ...q, [active]: i }));
    setStage(s => ({ ...s, [active]: "done" }));
  }
  function nextLesson() {
    setLessonIdx(p => ({ ...p, [active]: idx + 1 }));
    setStage(s => ({ ...s, [active]: "intro" }));
    setQuizAnswer(q => ({ ...q, [active]: null }));
  }

  const totalLessons = trackOrder.reduce((sum, t) => sum + tracks[t].lessons.length, 0);
  const completedLessons = trackOrder.reduce((sum, t) => sum + lessonIdx[t] + (stage[t] === "done" ? 1 : 0), 0);

  return (
    <div style={{ background: "#09090c", minHeight: "100vh", color: "#eeedf0", fontFamily: "system-ui,sans-serif", paddingBottom: 100 }}>
      <div style={{ maxWidth: 620, margin: "0 auto", padding: "0 18px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", borderBottom: "1px solid #18181f", marginBottom: 22 }}>
          <div>
            <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: -0.3 }}>Rise<span style={{ color: "#f5c842" }}>Guide</span></div>
            <div style={{ fontSize: 11, color: "#3a3a44", marginTop: 2 }}>3 minutes · Evidence-based · Built for you</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, color: "#f5c842", fontWeight: 700 }}>🔥 Day 1</div>
            <div style={{ fontSize: 11, color: "#3a3a44", marginTop: 2 }}>{completedLessons} of {totalLessons} lessons done</div>
          </div>
        </div>

        {/* Daily nudge */}
        <div style={{ background: "#13131c", border: "1px solid #1c1c26", borderRadius: 12, padding: "14px 18px", marginBottom: 20, display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ fontSize: 24 }}>☀️</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>One lesson. One practice. Three minutes.</div>
            <div style={{ fontSize: 12, color: "#44444f", lineHeight: 1.5 }}>Pick a track below. Read, reflect, and do just the one thing at the end.</div>
          </div>
        </div>

        {/* Track grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9, marginBottom: 22 }}>
          {trackOrder.map(t => {
            const tr = tracks[t];
            const isActive = active === t;
            const done = stage[t] === "done";
            const li = lessonIdx[t];
            return (
              <button key={t} onClick={() => setActive(t)} style={{
                padding: "13px 14px", borderRadius: 12, cursor: "pointer",
                border: `1.5px solid ${isActive ? tr.color : tr.border}`,
                background: isActive ? tr.bg : "#0e0e15",
                textAlign: "left", fontFamily: "inherit", transition: "all 0.15s"
              }}>
                <div style={{ fontSize: 18, marginBottom: 5 }}>{tr.emoji}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: tr.color, lineHeight: 1.2 }}>{tr.shortLabel}</div>
                <div style={{ fontSize: 11, color: "#3a3a44", marginTop: 3 }}>
                  {done ? "✓ Done today" : `Lesson ${li + 1} of ${tr.lessons.length}`}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 12, color: "#3a3a44", marginBottom: 16, fontStyle: "italic" }}>{track.tagline}</div>

        {/* Main lesson card */}
        <div style={{ background: "#12121a", border: "1px solid #1c1c26", borderRadius: 16, padding: 26, marginBottom: 12, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${c},transparent)` }} />

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, color: c }}>{track.emoji} {track.label}</div>
            {currentStage !== "intro" && <div style={{ fontSize: 11, color: "#2e2e3a", marginTop: 5, fontStyle: "italic" }}>{lesson.source}</div>}
          </div>

          {/* INTRO STATE */}
          {currentStage === "intro" && (
            <>
              <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, lineHeight: 1.3 }}>{lesson.title}</div>
              <div style={{ fontSize: 12, color: "#3a3a44", marginBottom: 18, fontStyle: "italic" }}>{lesson.source}</div>
              <div style={{ color: "#66666f", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
                One concept grounded in research. One specific practice. One 30-second quiz. About 3 minutes total.
              </div>
              <button onClick={start} style={{ background: c, color: "#000", border: "none", borderRadius: 100, padding: "11px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                Start →
              </button>
            </>
          )}

          {/* LESSON / QUIZ / DONE STATES */}
          {currentStage !== "intro" && (
            <>
              <div style={{ fontSize: 17, fontWeight: 800, marginBottom: 18, lineHeight: 1.35 }}>{lesson.title}</div>

              {/* Evidence */}
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "#33333f", fontWeight: 600, marginBottom: 8 }}>The Evidence</div>
                <div style={{ color: "#b0afb8", fontSize: 14, lineHeight: 1.8 }}>{lesson.core}</div>
              </div>

              {/* Practice */}
              <div style={{ background: track.bg, border: `1px solid ${track.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 16 }}>
                <div style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c, fontWeight: 700, marginBottom: 8 }}>Today's Practice</div>
                <div style={{ fontSize: 14, color: "#ddd", lineHeight: 1.75 }}>{lesson.practice}</div>
              </div>

              {/* Also at home */}
              <div style={{ borderLeft: `2px solid #22222e`, paddingLeft: 14, marginBottom: 18 }}>
                <div style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "#33333f", fontWeight: 600, marginBottom: 6 }}>Also carries over to</div>
                <div style={{ fontSize: 13, color: "#66666f", lineHeight: 1.7 }}>{lesson.forHome}</div>
              </div>

              {/* Insight quote */}
              <div style={{ borderLeft: `3px solid ${c}`, background: "rgba(255,255,255,0.025)", borderRadius: "0 8px 8px 0", padding: "12px 16px", marginBottom: 20, fontSize: 14, fontStyle: "italic", color: "#ccc", lineHeight: 1.7 }}>
                "{lesson.insight}"
              </div>

              {currentStage === "lesson" && (
                <button onClick={goQuiz} style={{ background: "transparent", border: `1.5px solid ${c}`, color: c, borderRadius: 100, padding: "10px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Quick Quiz →
                </button>
              )}
            </>
          )}
        </div>

        {/* QUIZ CARD */}
        {(currentStage === "quiz" || currentStage === "done") && (
          <div style={{ background: "#12121a", border: "1px solid #1c1c26", borderRadius: 16, padding: 24, marginBottom: 12 }}>
            <div style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700, color: c, marginBottom: 14 }}>30-Second Check</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 16, lineHeight: 1.5, color: "#eee" }}>{lesson.quiz.question}</div>
            {lesson.quiz.options.map((opt, i) => {
              let bg = "#0c0c13", border = "#1c1c26", color = "#bbb", opacity = 1;
              if (answered !== null) {
                if (i === lesson.quiz.correct) { bg = "rgba(52,211,153,0.1)"; border = "#34d399"; color = "#34d399"; }
                else if (i === answered) { bg = "rgba(248,113,113,0.1)"; border = "#f87171"; color = "#f87171"; }
                else opacity = 0.28;
              }
              return (
                <button key={i} onClick={() => answer(i)} disabled={answered !== null} style={{
                  width: "100%", textAlign: "left", background: bg, border: `1.5px solid ${border}`,
                  borderRadius: 10, padding: "12px 15px", marginBottom: 8, fontSize: 13,
                  cursor: answered !== null ? "default" : "pointer", color, opacity,
                  fontFamily: "inherit", lineHeight: 1.5, transition: "all 0.15s"
                }}>{opt}</button>
              );
            })}
            {answered !== null && (
              <>
                <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: "12px 14px", fontSize: 13, color: "#aaa", lineHeight: 1.65, marginBottom: 16 }}>
                  {answered === lesson.quiz.correct ? "✓ " : "Not quite — "}{lesson.quiz.explanation}
                </div>
                <div style={{ background: track.bg, border: `1px solid ${track.border}`, borderRadius: 10, padding: "13px 16px" }}>
                  <div style={{ fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c, fontWeight: 700, marginBottom: 6 }}>Your one thing today</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#ddd", lineHeight: 1.6 }}>{lesson.takeaway}</div>
                </div>
              </>
            )}
          </div>
        )}

        {/* NEXT */}
        {currentStage === "done" && (
          <div style={{ background: "#0c0c13", border: "1px dashed #1c1c26", borderRadius: 14, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            {!isLast ? (
              <>
                <div>
                  <div style={{ fontSize: 11, color: "#33333f", marginBottom: 3 }}>Next lesson — come back tomorrow:</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#ddd" }}>{track.lessons[idx + 1].title}</div>
                </div>
                <button onClick={nextLesson} style={{ background: "transparent", border: `1.5px solid ${c}`, color: c, borderRadius: 100, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>
                  Unlock →
                </button>
              </>
            ) : (
              <div style={{ width: "100%", textAlign: "center" }}>
                <div style={{ fontSize: 26, marginBottom: 6 }}>✅</div>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 3, color: "#ddd" }}>Track complete.</div>
                <div style={{ color: "#33333f", fontSize: 13 }}>Choose another track or come back tomorrow.</div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
