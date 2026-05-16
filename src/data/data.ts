export const POST_CATEGORIES = [
  "Seminar",
  "Webinar",
  "Organized Event",
] as const;
export type PostCategory = (typeof POST_CATEGORIES)[number];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: PostCategory;

  images?: string[];
  pdfs?: string[];
};

export const MAX_POST_IMAGES = 5;

export const blogPosts: BlogPost[] = [
  // === WEBINARS / COURSES (IDs 1-5) ===

  {
    id: "1",
    slug: "course-front-end-development-meta",
    title: "Introduction to Front-End Development – Meta (Coursera)",
    excerpt:
      "Completed Meta’s official introductory course on front-end web development.",
    content: `
      <p>On April 8, 2026, I successfully completed the online course <strong>“Introduction to Front-End Development”</strong> authorized by Meta and offered through Coursera. This beginner-friendly course marked my formal entry into professional web development and is part of Meta’s Front-End Developer Professional Certificate program.</p>
      <p>Over approximately 19 hours, the course provided a strong foundation in modern web technologies. I learned how to structure web pages using HTML, style them beautifully with CSS, and make them responsive across different devices. The course also introduced UI frameworks like Bootstrap and the basics of React.</p>
      <p>The biggest takeaway for me was realizing that front-end development is not just about writing code — it’s about crafting seamless, intuitive, and visually appealing user experiences that people actually enjoy using.</p>
    `,
    author: "Dominic L. Molino",
    date: "April 8, 2026",
    readTime: "6 min read",
    category: "Webinar",
    pdfs: ["/webinars/frontend/Introduction to Front-End Development.pdf"],
  },
  {
    id: "2",
    slug: "course-intermediate-python-datacamp",
    title: "Intermediate Python for Developers – DataCamp",
    excerpt:
      "Leveled up my Python skills with advanced functions, modules, and error handling.",
    content: `
      <p>On April 7, 2026, I successfully completed the <strong>“Intermediate Python for Developers”</strong> course on DataCamp. This concise but impactful 2-hour course helped me move beyond basic Python scripting and start writing cleaner, more professional, and maintainable code.</p>
      <p>The course covered important topics such as working with Python modules and packages, creating flexible functions using *args and **kwargs, lambda expressions, and proper error handling using try/except blocks.</p>
      <p>This course came at the perfect time and gave me the confidence to refactor my existing code and prepare for more advanced programming challenges in my Computer Science projects.</p>
    `,
    author: "Dominic L. Molino",
    date: "April 7, 2026",
    readTime: "5 min read",
    category: "Webinar",
    pdfs: ["/webinars/python/Intermediate Python for Developers.pdf"],
  },
  {
    id: "3",
    slug: "course-aws-ai-practitioner-challenge",
    title: "AWS AI Practitioner Challenge – Udacity",
    excerpt: "Completed hands-on training on AI, Generative AI, and AWS tools.",
    content: `
      <p>On April 19, 2026, I completed the <strong>AWS AI Practitioner Challenge</strong> through Udacity in collaboration with AWS. This hands-on, self-paced program consisted of 14 lessons and 2 major practical projects focused on building foundational AI and Machine Learning skills using real AWS tools.</p>
      <p>The challenge covered core AI/ML concepts, responsible AI practices, generative AI technologies (including RAG and prompt engineering), and hands-on development using Amazon PartyRock. It gave me real experience in building AI-powered applications without managing complex backend infrastructure.</p>
      <p>This program perfectly complements my other courses and strengthened my ability to apply AI responsibly in future projects.</p>
    `,
    author: "Dominic L. Molino",
    date: "April 19, 2026",
    readTime: "7 min read",
    category: "Webinar",
    pdfs: ["/webinars/aws-ai/AWS AI Practitioner Challenge Certificate.pdf"],
  },
  {
    id: "4",
    slug: "course-linux-for-beginners",
    title: "Linux for Beginners with Hands-On Labs",
    excerpt:
      "Mastered essential Linux commands through practical hands-on laboratories.",
    content: `
      <p>I recently completed the <strong>“Linux for Beginners with Hands-On Labs”</strong> course on the Tutorials Dojo platform. This comprehensive course with 40 interactive lessons and hands-on labs helped me build a solid foundation in Linux operating system.</p>
      <p>I learned essential commands for file navigation (<code>pwd</code>, <code>ls</code>, <code>cd</code>), directory management, file permissions using <code>chmod</code>, searching with <code>grep</code>, and monitoring system processes with <code>ps</code> and <code>top</code>.</p>
      <p>The practical labs made the learning very effective and gave me the confidence to work comfortably in Linux environments — a crucial skill for any Computer Science student.</p>
    `,
    author: "Dominic L. Molino",
    date: "April 20, 2026",
    readTime: "6 min read",
    category: "Webinar",
    pdfs: ["/webinars/linux/Linux for Beginners with Hands-On Labs.pdf"],
  },
  {
    id: "5",
    slug: "workshop-git-github",
    title: "Git Going with GitHub Workshop",
    excerpt:
      "Hands-on workshop on Git and GitHub fundamentals including pull requests.",
    content: `
      <p>On August 27, 2025, I attended the <strong>“Git Going with GitHub Workshop”</strong> hosted by AWS Learning Club - Legarda. This practical session provided a clear introduction to version control using Git and GitHub.</p>
      <p>I learned essential Git commands, how to create repositories, work with branches, resolve merge conflicts, and collaborate effectively through pull requests. The workshop ended with participants submitting their first pull request.</p>
      <p>This workshop is extremely valuable as proper version control is fundamental for both academic projects and professional software development.</p>
    `,
    author: "Dominic L. Molino",
    date: "August 27, 2025",
    readTime: "5 min read",
    category: "Webinar",
    pdfs: ["/webinars/git/Git Going with GitHub.pdf"],
  },

  // === SEMINARS (IDs 6-10) ===
  {
    id: "6",
    slug: "seminar-psite-it-beyond-tomorrow",
    title: "Shaping the Digital Frontier: PSITE Central Luzon Seminar",
    excerpt:
      "Insightful discussions on AI, ethics, digital security, and responsible innovation.",
    content: `
      <p>On October 17, 2025, I attended the seminar titled <strong>“I.T. Beyond Tomorrow: Shaping the Digital Frontier”</strong> organized by <strong>PSITE – Central Luzon</strong>. The event brought together IT professionals, educators, and students from the region to discuss emerging technologies and future trends.</p>
      <p>The sessions covered critical topics including Artificial Intelligence, digital footprints, data security, and the ethical implications of technology. Industry experts shared real-world experiences and emphasized the importance of using AI responsibly and maintaining strong ethical standards.</p>
      <p>This seminar reinforced my belief that as future IT professionals, we must ensure technological innovation always aligns with human values, privacy, and societal good.</p>
    `,
    author: "Dominic L. Molino",
    date: "October 17, 2025",
    readTime: "6 min read",
    category: "Seminar",
    images: ["/seminars/raite/raite1.jpg", "/seminars/raite/raite2.jpg"],
    pdfs: ["/seminars/raite/RAITE_CERT.pdf"],
  },
  {
    id: "7",
    slug: "seminar-ygg-play-summit-2025",
    title: "Welcome to the City of Play: YGG Play Summit 2025",
    excerpt: "An exciting four-day Web3 gaming and blockchain summit.",
    content: `
      <p>From November 19 to 22, 2025, I attended the <strong>YGG Play Summit 2025</strong> at SM Aura, Bonifacio Global City — recognized as the world’s largest player-focused Web3 gaming summit. The event was themed <strong>“The City That Never Stops Playing.”</strong></p>
      <p>The four-day summit featured exciting game showcases, hands-on workshops in the Skill District, high-level esports tournaments, and great networking opportunities. I gained valuable insights into Web3 technologies, play-to-own models, AI in gaming, and how the Philippines is becoming a major hub in the global gaming industry.</p>
    `,
    author: "Dominic L. Molino",
    date: "November 19–22, 2025",
    readTime: "7 min read",
    category: "Seminar",
    images: [
      "/seminars/ygg/ygg1.PNG",
      "/seminars/ygg/ygg2.PNG",
      "/seminars/ygg/ygg3.PNG",
    ],
    pdfs: ["/seminars/ygg/ygg-ticket.pdf"],
  },
  {
    id: "8",
    slug: "seminar-iot-smart-city-techtalk",
    title: "Where Values Guide Innovation: IoT & Smart City TechTalk",
    excerpt: "TechTalk sessions during the 8th Olongapo City Robotics Cup.",
    content: `
      <p>On March 26, 2026, I attended two insightful TechTalk sessions at the Olongapo City Civic Center as part of the <strong>8th Olongapo City Robotics Cup</strong>. The sessions were <strong>“Introduction to IoT: Internet of Things”</strong> and <strong>“Smart City Roadmap”</strong>.</p>
      <p>I learned how IoT connects everyday devices to improve efficiency and safety, and how cities like Olongapo can strategically implement smart technologies while staying true to local values and traditions. The theme <strong>“Olongapo Code of Traditions: Where Values Guide Innovation Forward”</strong> was very inspiring.</p>
    `,
    author: "Dominic L. Molino",
    date: "March 26, 2026",
    readTime: "6 min read",
    category: "Seminar",
    images: ["/seminars/techtalk/occc.jpg", "/seminars/techtalk/occc2.jpg"],
    pdfs: [
      "/seminars/techtalk/Introduction to IoT.pdf",
      "/seminars/techtalk/Smart City Roadmap.pdf",
    ],
  },
  {
    id: "9",
    slug: "seminar-gabay-data-privacy",
    title: "Demystifying Data Privacy: GABAY Seminar",
    excerpt:
      "Learned about the Data Privacy Act and responsible digital citizenship.",
    content: `
      <p>On October 14, 2025, I attended the <strong>GABAY Seminar Series</strong> titled <strong>“Demystifying Data Privacy: What Every Filipino Should Know”</strong> held at GC Function Hall. The session focused on the Data Privacy Act of the Philippines and responsible online behavior.</p>
      <p>I learned practical tips on protecting personal information, the risks of oversharing, and the importance of being a responsible netizen in today’s digital world.</p>
    `,
    author: "Dominic L. Molino",
    date: "October 14, 2025",
    readTime: "5 min read",
    category: "Seminar",
    pdfs: ["/seminars/gabay/GABAY_Certificate.pdf"],
  },
  {
    id: "10",
    slug: "seminar-ircite-2026",
    title:
      "IRCITE 2026: International Research Conference on Information Technology Education",
    excerpt:
      "Valuable insights on bridging research and real-world application in IT Education.",
    content: `
      <p>On March 19, 2026, I attended the <strong>IRCITE 2026: International Research Conference on Information Technology Education</strong> at Bulacan State University, City of Malolos, Bulacan.</p>
      <p>The conference theme <strong>“Ideation, Utilization, and Adoption: Strengthening the Research-to-Practice Cycle in IT Education”</strong> was highly relevant. It emphasized that research should not remain theoretical but must be utilized to solve real-world problems.</p>
      <p>This experience encouraged me to create more impactful projects that address genuine community needs and to always consider the practical application of my work as a Computer Science student.</p>
    `,
    author: "Dominic L. Molino",
    date: "March 19, 2026",
    readTime: "7 min read",
    category: "Seminar",
    images: ["/seminars/ircite/ircite1.jpg", "/seminars/ircite/ircite2.jpg"],
    pdfs: ["/seminars/ircite/MOLINO.DOMINIC.pdf"],
  },

  // {
  //   id: "1",
  //   slug: "course-front-end-development-meta",
  //   title: "Introduction to Front-End Development – Meta (Coursera)",
  //   excerpt:
  //     "Completed Meta’s official introductory course on front-end web development.",
  //   content: `
  //           <p>On April 8, 2026, I successfully completed <strong>Introduction to Front-End Development</strong> authorized by Meta on Coursera. This course served as my foundational step into professional web development.</p>
  //           <p>I learned HTML, CSS, responsive design, Bootstrap, and the basics of React. The course helped me understand that front-end development is not just about coding — it’s about creating excellent user experiences.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "April 8, 2026",
  //   readTime: "5 min read",
  //   category: "Webinar",
  //   pdfs: ["/webinars/frontend/Introduction to Front-End Development.pdf"],
  // },
  // {
  //   id: "2",
  //   slug: "course-intermediate-python-datacamp",
  //   title: "Intermediate Python for Developers – DataCamp",
  //   excerpt:
  //     "Leveled up my Python skills with advanced functions, modules, and error handling.",
  //   content: `
  //           <p>On April 7, 2026, I completed <strong>Intermediate Python for Developers</strong> on DataCamp. This course helped me write cleaner, more professional, and maintainable Python code.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "April 7, 2026",
  //   readTime: "4 min read",
  //   category: "Webinar",
  //   pdfs: ["/webinars/python/Intermediate Python for Developers.pdf"],
  // },
  // {
  //   id: "3",
  //   slug: "course-aws-ai-practitioner-challenge",
  //   title: "AWS AI Practitioner Challenge – Udacity",
  //   excerpt: "Completed hands-on training on AI, Generative AI, and AWS tools.",
  //   content: `
  //           <p>On April 19, 2026, I finished the <strong>AWS AI Practitioner Challenge</strong> through Udacity in collaboration with AWS. The program covered responsible AI, generative AI, and practical projects using PartyRock.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "April 19, 2026",
  //   readTime: "6 min read",
  //   category: "Webinar",
  //   pdfs: ["/webinars/aws-ai/AWS AI Practitioner Challenge Certificate.pdf"],
  // },
  // {
  //   id: "4",
  //   slug: "course-linux-for-beginners",
  //   title: "Linux for Beginners with Hands-On Labs",
  //   excerpt:
  //     "Mastered essential Linux commands through practical hands-on laboratories.",
  //   content: `
  //           <p>I recently completed the <strong>Linux for Beginners with Hands-On Labs</strong> course on Tutorials Dojo, gaining strong command-line skills.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "April 20, 2026",
  //   readTime: "5 min read",
  //   category: "Webinar",
  //   pdfs: ["/webinars/linux/Linux for Beginners with Hands-On Labs.pdf"],
  // },
  // {
  //   id: "5",
  //   slug: "workshop-git-github",
  //   title: "Git Going with GitHub Workshop",
  //   excerpt:
  //     "Hands-on workshop on Git and GitHub fundamentals including pull requests.",
  //   content: `
  //           <p>On August 27, 2025, I attended the <strong>Git Going with GitHub Workshop</strong> hosted by AWS Learning Club - Legarda.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "August 27, 2025",
  //   readTime: "5 min read",
  //   category: "Webinar",
  //   pdfs: ["/webinars/git/Git Going with GitHub.pdf"],
  // },

  // // === SEMINARS (IDs 6-10) ===
  // {
  //   id: "6",
  //   slug: "seminar-raite-it-beyond-tomorrow",
  //   title: "Shaping the Digital Frontier: PSITE Central Luzon Seminar",
  //   excerpt:
  //     "Insightful discussions on AI, ethics, digital security, and responsible innovation.",
  //   content: `
  //           <p>On October 17, 2025, I attended the seminar <strong>“I.T. Beyond Tomorrow: Shaping the Digital Frontier”</strong> organized by PSITE – Central Luzon.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "October 17, 2025",
  //   readTime: "6 min read",
  //   category: "Seminar",
  //   images: ["/seminars/raite/raite1.jpg", "/seminars/raite/raite2.jpg"],
  //   pdfs: ["/seminars/raite/RAITE_CERT.pdf"],
  // },
  // {
  //   id: "7",
  //   slug: "seminar-ygg-play-summit-2025",
  //   title: "Welcome to the City of Play: YGG Play Summit 2025",
  //   excerpt: "An exciting four-day Web3 gaming and blockchain summit.",
  //   content: `
  //           <p>From November 19 to 22, 2025, I attended the <strong>YGG Play Summit 2025</strong> at SM Aura, BGC.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "November 19–22, 2025",
  //   readTime: "7 min read",
  //   category: "Seminar",
  //   images: [
  //     "/seminars/ygg/ygg1.PNG",
  //     "/seminars/ygg/ygg2.PNG",
  //     "/seminars/ygg/ygg3.PNG",
  //     "/seminars/ygg/ygg4.jpg",
  //     "/seminars/ygg/ygg5.jpg",
  //   ],
  //   pdfs: ["/seminars/ygg/ygg-ticket.pdf"],
  // },
  // {
  //   id: "8",
  //   slug: "seminar-iot-smart-city-techtalk",
  //   title: "Where Values Guide Innovation: IoT & Smart City TechTalk",
  //   excerpt: "TechTalk sessions during the 8th Olongapo City Robotics Cup.",
  //   content: `
  //           <p>On March 26, 2026, I attended TechTalk sessions on IoT and Smart City Roadmap at the Olongapo City Civic Center.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "March 26, 2026",
  //   readTime: "6 min read",
  //   category: "Seminar",
  //   images: [
  //     "/seminars/techtalk/occc.jpg",
  //     "/seminars/techtalk/occc2.jpg",
  //     "/seminars/techtalk/occc3.jpg",
  //   ],
  //   pdfs: [
  //     "/seminars/techtalk/Introduction to IoT.pdf",
  //     "/seminars/techtalk/Smart City Roadmap.pdf",
  //   ],
  // },
  // {
  //   id: "9",
  //   slug: "seminar-gabay-data-privacy",
  //   title: "Demystifying Data Privacy: GABAY Seminar",
  //   excerpt:
  //     "Learned about the Data Privacy Act and responsible digital citizenship.",
  //   content: `
  //           <p>On October 14, 2025, I attended the GABAY Seminar on Data Privacy at GC Function Hall.</p>
  //       `,
  //   author: "Dominic L. Molino",
  //   date: "October 14, 2025",
  //   readTime: "5 min read",
  //   category: "Seminar",
  // },
  // {
  //   id: "10",
  //   slug: "seminar-ircite-2026",
  //   title:
  //     "IRCITE 2026: International Research Conference on Information Technology Education",
  //   excerpt:
  //     "Valuable insights on bridging research and real-world application in IT Education at Bulacan State University.",
  //   content: `
  //       <p>On March 19, 2026, I attended the <strong>IRCITE 2026: International Research Conference on Information Technology Education</strong> held at Bulacan State University, City of Malolos, Bulacan.</p>

  //       <p>The conference carried the theme <strong>“Ideation, Utilization, and Adoption: Strengthening the Research-to-Practice Cycle in IT Education.”</strong> It focused on transforming academic research into practical and impactful solutions in the field of Information Technology Education.</p>

  //       <p>One of the biggest realizations I had is that research should not remain theoretical but must contribute to solving real-world problems. The discussions emphasized the importance of innovation, critical thinking, and continuous improvement through the cycle of ideation, utilization, and adoption.</p>

  //       <p>As a Computer Science student, this event encouraged me to develop projects that are not only technically sound but also relevant and beneficial to the community.</p>
  //   `,
  //   author: "Dominic L. Molino",
  //   date: "March 19, 2026",
  //   readTime: "6 min read",
  //   category: "Seminar",
  //   images: ["/seminars/ircite/ircite1.jpg", "/seminars/ircite/ircite2.jpg"],
  //   pdfs: ["/seminars/ircite/MOLINO.DOMINIC.pdf"],
  // },

  //   === ORGANIZED EVENTS (IDs 11-14) ===
  {
    id: "11",
    slug: "event-blockchain-unleashed-zellense-september-2025",
    title:
      "Blockchain Unleashed: reflections on an online Zellense program (26 September 2025)",
    excerpt:
      "A structured Discord session on blockchain fundamentals, delivered with clear staging, strong attendance, and a focused post-event debrief.",
    content: `
			<p>On <strong>26 September 2025</strong>, I participated in <strong>Blockchain Unleashed</strong>, an online program hosted under <strong>Zellense – Online Events</strong> and delivered through Discord. The session used a dedicated voice channel (<strong>Blockchain Unleashed Voice</strong>) and a shared screen workflow so participants could follow the program agenda without ambiguity.</p>
			<p>The opening screen set expectations explicitly: participants were asked to remain on standby until the official start. That approach reduced cross-talk during setup and allowed the technical team to confirm audio, video, and presentation routing before the main content began.</p>
			<p>Attendance was substantial throughout the run of the event. The gallery view showed sustained engagement across a wide range of participants, with most attendees keeping microphones muted unless recognized by the hosts. This discipline is typical of well-run online technical sessions and it contributed to a workable signal-to-noise ratio during explanations.</p>
			<p>The substantive portion of the program addressed blockchain concepts in a format suitable for students and early-career practitioners: definitions, use cases, and practical cautions rather than promotional claims. Where participants had connectivity or hardware limitations, the organizers handled transitions calmly and kept the session on schedule.</p>
			<p>Following the main segment, the team conducted a <strong>post-event meeting</strong> to review logistics, audience questions, and follow-up items. That closing step is worth highlighting: structured retrospectives improve documentation, clarify responsibilities, and raise the quality of the next iteration.</p>
			<p>Overall, the event demonstrated competent online production, respectful audience management, and a clear learning objective. For my own notes, it reinforced a straightforward principle: credible technical communities scale when hosts treat timing, communication, and follow-through as part of the curriculum—not as afterthoughts.</p>
		`,
    author: "Zellense",
    date: "September 26, 2025",
    readTime: "6 min read",
    category: "Organized Event",
    images: [
      encodeURI("/organized-events/blockchain/10 MINUTES BEFORE START.png"),
      encodeURI("/organized-events/blockchain/ATTENDEES BEFORE ENDING - 3.png"),
      encodeURI("/organized-events/blockchain/ATTENDEES BEFORE ENDING - 4.png"),
      encodeURI("/organized-events/blockchain/DRY RUN - Opening.png"),
    ],
  },
  {
    id: "12",
    slug: "event-designing-the-future-uiux-webinar",
    title:
      "Designing the Future: UI/UX, career relevance, and delivery via Google Meet",
    excerpt:
      "A Zellense-run webinar on UI and UX career pathways, co-hosted from opening through Q&A, with stable Meet delivery and strong concurrent attendance.",
    content: `
			<p><strong>Zellense</strong> ran <strong>Designing the Future</strong>, a webinar built around <em>Why UI/UX Matters in Tech &amp; Career Growth</em>. I am <strong>Xai</strong>; I co-hosted the program with <strong>Denzel</strong> under the Zellense brand, managed transitions with him, and kept the session aligned to the published agenda.</p>
			<p>We opened with housekeeping—timing, muting expectations, and how questions would be taken—so participants could focus on the material instead of guessing at format. Slide visuals followed a single system so branding, typography, and section breaks stayed consistent from welcome through closing.</p>
			<p>Our featured speaker was <strong>Rejy Joash D. Requiez</strong> (<strong>RJ Requiez</strong> on stream), described in the program as a <strong>product designer</strong> and <strong>community leader</strong>, with industry experience in UI/UX and branding-oriented graphic design, plus instructional responsibility in higher education. That profile set an appropriate bar: practice-led explanation rather than generic inspiration.</p>
			<p>The technical segment separated <strong>user interface (UI)</strong> outputs from <strong>user experience (UX)</strong> planning artifacts, including wireframes and annotated flows. For many attendees, that distinction is the practical hinge between “what ships on screen” and “what has to be validated before engineering commits.”</p>
			<p>Delivery used <strong>Google Meet</strong> with identifier <code>ttk-mgyj-bjf</code>. <strong>Eunille Jan</strong> operated screen share so RJ could concentrate on instruction. During the segments I monitored, concurrent attendance remained above fifty users, which is a useful indicator of both promotion accuracy and content-market fit for a weekday technical webinar.</p>
			<p>From an organizer’s standpoint, the outcome I value is procedural: clear learning outcomes, disciplined timeboxing, dependable A/V routing, and documented follow-ups for any questions we could not close on air. Those items are how Zellense keeps public programming repeatable—not only watchable once.</p>
		`,
    author: "Xai (Zellense)",
    date: "October 2025",
    readTime: "6 min read",
    category: "Organized Event",
    images: [
      encodeURI("/organized-events/ui-ux/uiux  header.PNG"),
      "/organized-events/ui-ux/ui1.PNG",
      "/organized-events/ui-ux/ui2.PNG",
      "/organized-events/ui-ux/ui3.PNG",
    ],
  },
  {
    id: "13",
    slug: "event-sip-scale-founders-mindset-cafecito-bataan",
    title: "Sip & Scale (Bataan): Founder's Mindset session at Cafecito",
    excerpt:
      "An afternoon workshop on entrepreneurial orientation, delivered in a café setting with structured time, a clear theme, and strong participant turnout.",
    content: `
			<p>I attended <strong>Sip &amp; Scale: Bataan</strong>, a session titled <strong>Founders Mindset</strong>, held at <strong>Cafecito, Bataan</strong> from <strong>1:00 p.m. to 4:00 p.m.</strong> The format combined short-form instruction with open-floor discussion, which is appropriate for founder-oriented topics where participants benefit as much from clarification as from lecture content.</p>
			<p>The venue supported the objectives of the program: adequate seating, workable sightlines to the presenter, and a layout that allowed small-group conversation without disrupting adjacent tables. Lighting and acoustics were sufficient for note-taking and for recording on personal devices where attendees chose to document segments for later review.</p>
			<p>The facilitator delivered the material while standing, with a laptop positioned for slide control and a microphone available for projection across the room. Audience members were generally attentive; several attendees used laptops or phones to capture key points, which is typical for professional development sessions aimed at students and early-career professionals.</p>
			<p>From a content standpoint, the emphasis remained on decision-making under uncertainty, prioritization, and communication habits associated with founding teams. The discussion stayed anchored to operational realities—constraints, timelines, and stakeholder expectations—rather than motivational generalities.</p>
			<p>Networking occurred naturally during breaks and after the formal segment, including short exchanges among participants who had not previously met. Those interactions are part of the value proposition for in-person community events: they create low-friction introductions that are harder to replicate in purely asynchronous formats.</p>
			<p>In summary, Sip &amp; Scale delivered a disciplined half-day experience: a defined schedule, a coherent theme, and an environment conducive to both learning and follow-up conversation. I am recording it here as part of my professional log of organized programs I have joined in Bataan.</p>
		`,
    author: "Zellense",
    date: "November 2025",
    readTime: "6 min read",
    category: "Organized Event",
    images: [
      "/organized-events/sip-and-scale/sipheader.PNG",
      "/organized-events/sip-and-scale/sip1.PNG",
      "/organized-events/sip-and-scale/sip2.PNG",
      "/organized-events/sip-and-scale/sip3.PNG",
    ],
  },
  {
    id: "14",
    slug: "event-sparkcon-next-wave-innovation-2025",
    title: "SparkCon: The Next Wave of Innovation",
    excerpt:
      "A full-day conference in Olongapo bringing students and partners together for keynotes, Q&A, raffles, and a closing panel on real tech careers.",
    content: `
			<p><strong>SparkCon: The Next Wave of Innovation</strong> was pitched as a day for students and partners to hear several focused talks and still have room to meet people between sessions. The public line was straightforward: shaping the future of innovation by bringing together people who build, teach, and support tech communities.</p>
			<p>It ran on <strong>Sunday, 14 December 2025</strong>, from <strong>8:00 a.m. to 6:00 p.m.</strong> at <strong>SMX Convention Center Central, Olongapo City</strong>. <strong>Denzel</strong> served as event host.</p>

			<h3>Morning</h3>
			<ul>
				<li><strong>8:00–9:00</strong> — Registration and check-in; ID and nametag distribution; networking with partners, speakers, and students.</li>
				<li><strong>9:00–9:30</strong> — Opening, introductions, and an icebreaker; acknowledgments of confirmed partners (including DevCon Ambassador, Zellense, and others listed in the program); agenda overview.</li>
				<li><strong>9:30–10:00</strong> — Introduction to DevCon: mission, community initiatives, and student opportunities.</li>
				<li><strong>10:00–10:40</strong> — Keynote 1, Q&amp;A, and first certificate distribution. <strong>Chris Allen Pineda</strong> (Gordon College part-time lecturer; Cybersecurity Society of the Philippines) on <em>Cybersecurity Uncovered: Protecting Innovation in a Digital World</em>.</li>
				<li><strong>10:40–10:55</strong> — Icebreaker and raffle.</li>
				<li><strong>10:55–11:05</strong> — Q&amp;A with Speaker 1.</li>
				<li><strong>11:05–11:45</strong> — Keynote 2 (online), Q&amp;A, and second certificate distribution. <strong>Rachelle Perez</strong> (DevCon Philippines — Campus Program Lead) on <em>AI’s Quiet Revolution: From Smart Assistants to Everyday Solutions</em>.</li>
				<li><strong>11:45–12:00</strong> — Icebreaker and raffle.</li>
				<li><strong>12:00–12:10</strong> — Q&amp;A with Speaker 2.</li>
				<li><strong>12:10–1:10</strong> — Lunch and networking.</li>
			</ul>

			<h3>Afternoon</h3>
			<ul>
				<li><strong>1:10–1:50</strong> — Keynote 3 (online), Q&amp;A, and third certificate distribution. <strong>Michael Lance Domagas</strong> (PR and Code Camps Lead, DevCon Philippines) on <em>Blockchain Beyond Crypto: Transparency, Trust, and Decentralization</em>.</li>
				<li><strong>1:50–2:05</strong> — Icebreaker and raffle.</li>
				<li><strong>2:05–2:15</strong> — Q&amp;A with Speaker 3.</li>
				<li><strong>2:15–2:55</strong> — Keynote 4, Q&amp;A, and fourth certificate distribution. <strong>Arjohn Capucion</strong> (Starpay Corporation — product manager and UI/UX designer; DevCon Philippines community leader) on <em>Designing the Future: Why Tech is Nothing Without People</em>.</li>
				<li><strong>2:55–3:10</strong> — Icebreaker and raffle.</li>
				<li><strong>3:10–3:20</strong> — Q&amp;A with Speaker 4.</li>
				<li><strong>3:20–4:05</strong> — Keynote 5, Q&amp;A, and fifth certificate distribution. <strong>Mark Estopace</strong> (senior full-stack developer, Cambridge University; founder, Microsoft Azure Community Philippines) on observability and monitoring in Azure.</li>
				<li><strong>4:05–4:20</strong> — Icebreaker and raffle.</li>
				<li><strong>4:20–4:30</strong> — Q&amp;A with Speaker 5.</li>
			</ul>

			<h3>Panel and close</h3>
			<ul>
				<li><strong>4:30–5:15</strong> — Panel: <em>Stories Behind the Spark: Lessons, Failures, and Wins from the Tech Journey</em>. Panelists: <strong>John Christopher T. Illano</strong> (KloudTech, co-founder); <strong>Mark Estopace</strong>; <strong>Mark Angelo Santonil</strong> (system administrator and SOC analyst; founder of seraphiem; leader of Ghostscript collective); <strong>Grahssel Dungca</strong> (DevCon Pampanga president; Ascendion senior IT business analyst); <strong>Arjohn Capucion</strong>; <strong>John Neo Lopez</strong> (RIOT Staffing; Gordon College part-time instructor). Focus: careers, community leadership, and challenges in a changing industry.</li>
				<li><strong>5:15–5:35</strong> — Panel Q&amp;A from the audience.</li>
				<li><strong>5:35–6:00</strong> — Closing and acknowledgments; short recap of takeaways; appreciation; group photo and photo opportunity.</li>
			</ul>

			<p>That structure kept the day readable on paper: repeated blocks (talk → raffle → short Q&amp;A) so participants knew what to expect, and a longer panel at the end for broader questions. If you were in the room, the goal was simply to leave with a clearer map of where to study next—security, AI, blockchain, product design, or cloud—and a few new contacts to follow up with after the photo.</p>
		`,
    author: "Zellense",
    date: "December 14, 2025",
    readTime: "8 min read",
    category: "Organized Event",
    images: [
      encodeURI("/organized-events/sparkon/spark header.PNG"),
      "/organized-events/sparkon/spark1.PNG",
      "/organized-events/sparkon/spark2.PNG",
      "/organized-events/sparkon/spark3.PNG",
    ],
  },
];

const SEMINAR_LANDING_ORDER: readonly string[] = [
  "seminar-psite-it-beyond-tomorrow",
  "seminar-ygg-play-summit-2025",
  "seminar-iot-smart-city-techtalk",
  "seminar-gabay-data-privacy",
  "seminar-ircite-2026",
];

const WEBINAR_LANDING_ORDER: readonly string[] = [
  "course-front-end-development-meta",
  "course-intermediate-python-datacamp",
  "course-aws-ai-practitioner-challenge",
  "course-linux-for-beginners",
  "workshop-git-github",
];

const ORGANIZED_EVENT_LANDING_ORDER: readonly string[] = [
  "event-sparkcon-next-wave-innovation-2025",
  "event-sip-scale-founders-mindset-cafecito-bataan",
  "event-designing-the-future-uiux-webinar",
  "event-blockchain-unleashed-zellense-september-2025",
];

export function postsInCategory(category: PostCategory): BlogPost[] {
  const list = blogPosts.filter((p) => p.category === category);
  if (category === "Seminar") {
    return [...list].sort((a, b) => {
      const ia = SEMINAR_LANDING_ORDER.indexOf(a.slug);
      const ib = SEMINAR_LANDING_ORDER.indexOf(b.slug);
      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }
  if (category === "Webinar") {
    return [...list].sort((a, b) => {
      const ia = WEBINAR_LANDING_ORDER.indexOf(a.slug);
      const ib = WEBINAR_LANDING_ORDER.indexOf(b.slug);
      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }
  if (category === "Organized Event") {
    return [...list].sort((a, b) => {
      const ia = ORGANIZED_EVENT_LANDING_ORDER.indexOf(a.slug);
      const ib = ORGANIZED_EVENT_LANDING_ORDER.indexOf(b.slug);
      if (ia === -1 && ib === -1) return 0;
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }
  return list;
}

export function postBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function carouselImageUrls(images: readonly string[]): string[] {
  return images.slice(1, Math.min(images.length, MAX_POST_IMAGES));
}
