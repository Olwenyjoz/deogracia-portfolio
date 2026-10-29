/* Wait until the page is ready */
document.addEventListener("DOMContentLoaded", () => {
    // Select page elements
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const desktopSidebarToggle = document.getElementById("desktop-sidebar-toggle");
    const navLinks = document.querySelectorAll(".nav-link");
    const typedRole = document.getElementById("typed-role");
    const currentYear = document.getElementById("current-year");
    const contactForm = document.getElementById("contact-form");
    const formNote = document.getElementById("form-note");
    const backToTop = document.getElementById("back-to-top");

    /* --- Theme Toggle --- */
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            const isDark = body.classList.contains("dark-mode");
            
            // Update icon
            if (isDark) {
                themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
                localStorage.setItem("theme", "dark");
            } else {
                themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
                localStorage.setItem("theme", "light");
            }
        });
    }

    /* --- Language Translation --- */
    const languageSelect = document.getElementById("language-select");
    
    const translations = {
        "en": {
            "nav-home": "Home", "nav-about": "About", "nav-skills": "Skills", "nav-resume": "Resume", "nav-projects": "Projects", "nav-leadership": "Leadership", "nav-interests": "Interests", "nav-contact": "Contact",
            "sidebar-footer": "Building technology that makes a difference.",
            "hero-label": "WELCOME TO MY PORTFOLIO", "hero-im": "I'm a", "hero-role": "Software Developer",
            "hero-desc": "I build practical digital solutions, develop user-centred applications, and explore technology that creates meaningful impact.",
            "hero-btn-work": "Explore my work", "hero-btn-connect": "Let's connect",
            "hero-quote": "\"Great software begins with curiosity and grows through solving real problems.\"",
            "about-heading": "About Me", "about-intro": "I am an Applied Computer Technology student at USIU-Africa with a strong interest in software engineering, web development, databases, and practical technology solutions.",
            "about-caption": "Learning. Building. Improving.", "about-title": "Software Developer in Progress",
            "about-p1": "My journey combines technical learning with hands-on projects, leadership, and community engagement. I enjoy turning ideas into useful digital experiences and continuously improving my development skills.",
            "detail-edu": "Education:", "detail-edu-val": "BSc. Applied Computer Technology", "detail-uni": "University:", "detail-uni-val": "USIU-Africa", "detail-loc": "Location:", "detail-loc-val": "Nairobi, Kenya", "detail-focus": "Focus:", "detail-focus-val": "Software and web development", "detail-lang": "Languages:", "detail-lang-val": "English, Kiswahili", "detail-email": "Email:",
            "about-p2": "Beyond coding, I value teamwork, leadership, digital literacy, and using technology to create opportunities for underserved communities.",
            "about-link": "Let's work together",
            "skills-heading": "Technical Skills", "skills-intro": "Technologies and practical skills I use, practise, or am actively developing. Skill levels are self-assessments rather than formal test results.",
            "skills-frontend": "Frontend Development", "skills-backend": "Backend & Databases", "skills-tools": "Tools & Workflow", "skills-it": "IT & Professional Skills",
            "tag-win": "Windows installation", "tag-support": "IT support", "tag-hardware": "Hardware troubleshooting", "tag-office": "Microsoft Office", "tag-digital": "Digital literacy", "tag-team": "Team leadership", "tag-comm": "Communication", "tag-network": "Networking fundamentals", "tag-design": "Graphic Design", "tag-software": "Software installation & configuration", "tag-techdoc": "Technical documentation",
            "resume-heading": "Resume", "resume-btn": "View CV", "resume-intro": "My education, experience, and training reflect a commitment to learning, technical growth, and community contribution.",
            "resume-edu": "Education", "resume-edu1-title": "BSc Applied Computer Technology", "resume-edu1-date": "Ongoing", "resume-edu1-place": "United States International University-Africa", "resume-edu1-desc": "Learning software development, systems analysis, databases, programming, and emerging technologies.",
            "resume-edu2-title": "Kenya Certificate of Secondary Education", "resume-edu2-date": "2022", "resume-edu2-place": "Butula Boys' Secondary School", "resume-edu2-desc": "Completed secondary education with a B+ grade.",
            "resume-training": "Training", "resume-train1-title": "Odoo University Training Program", "resume-train1-date": "2025", "resume-train1-desc": "Exposure to ERP workflows in sales, purchasing, inventory, project management, accounting, and human resources.",
            "resume-train2-title": "Peer-to-Peer Digital Literacy", "resume-train2-date": "2025", "resume-train2-place": "Angaza Center Foundation", "resume-train2-desc": "Supported digital literacy learning in a virtual volunteer setting.",
            "resume-exp": "Experience", "resume-exp1-title": "Computer Basics Facilitator", "resume-exp1-date": "2024", "resume-exp1-place": "Alliance Centre of Technology, Kakuma", "resume-exp1-li1": "Trained more than 60 learners in computer fundamentals.", "resume-exp1-li2": "Assisted with Windows, Office applications, drivers, and printers.", "resume-exp1-li3": "Provided first-level technical support.",
            "resume-exp2-title": "Enumerator", "resume-exp2-date": "2023", "resume-exp2-place": "EXPO Marketing / SNV-WEEE Centre", "resume-exp2-desc": "Contributed to field data collection and related project activities.",
            "resume-lead": "Leadership", "resume-lead1-title": "Co-founder & Secretary", "resume-lead1-date": "2026", "resume-lead1-place": "Technova Digital Hub", "resume-lead1-desc": "Supporting community digital skills and technology access.",
            "resume-lead2-title": "Co-founder", "resume-lead2-date": "2025 - Present", "resume-lead2-place": "UNIMART Africa", "resume-lead2-desc": "Contributed to an e-commerce platform and its digital experience.",
            "projects-heading": "Featured Projects", "projects-intro": "Explore my work in mobile and web development, graphic design, and community initiatives. Hover over a project or focus on it using your keyboard to reveal more information and project links.",
            "filter-all": "All", "filter-app": "App Development", "filter-web": "Web Development", "filter-graphic": "Graphic Design", "filter-community": "Community", "filter-more": "More Projects",
            "proj-cat-app": "Mobile application", "proj1-title": "FoodOrderingApp", "proj1-desc": "An Android food-ordering application with product listings, cart management, order summaries, and navigation.",
            "proj-cat-health-app": "Healthcare application", "proj2-title": "MediTrack App", "proj2-desc": "A healthcare application concept focused on making clinic workflows and patient-related operations easier to manage.",
            "proj-cat-ecom": "E-commerce", "proj3-title": "UNIMART Africa", "proj3-desc": "An online shopping platform connecting buyers and sellers. My work includes frontend UI Contribution, usability testing and customer support.",
            "proj-cat-health-soft": "Healthcare software", "proj4-title": "MediTrack", "proj4-desc": "A clinic management system built with FastAPI to explore digital workflows for healthcare records and clinic operations.",
            "proj-cat-prod": "Productivity", "proj5-title": "UpAhead Student Planner", "proj5-desc": "A student planner designed to organise assignments, track academic progress, manage deadlines, and support study routines.",
            "proj-cat-web": "Personal website", "proj6-title": "Developer Portfolio", "proj6-desc": "A responsive portfolio showcasing my technical skills, projects, experience, leadership, and contact information.",
            "proj-cat-brand": "Brand identity", "proj7-title": "Business Card Design", "proj7-desc": "A business card design combining contact details, branding, and a clear visual layout.",
            "proj-cat-logo": "Logo design", "proj8-title": "Logo Design 01", "proj8-desc": "A visual identity concept exploring shape, colour, and brand recognition.",
            "proj9-title": "Logo Design 02", "proj9-desc": "A second logo concept demonstrating visual identity and graphic composition.",
            "proj10-title": "Logo Design 03", "proj10-desc": "A logo design exploring distinctive forms and a memorable brand presentation.",
            "proj-cat-poster": "Poster design", "proj11-title": "Promotional Poster", "proj11-desc": "A promotional poster using visual hierarchy, typography, and colour to communicate a message.",
            "proj-cat-menu": "Menu design", "proj12-title": "Menu Design", "proj12-desc": "A food menu layout that presents products and prices in a clear, visually appealing format.",
            "proj-cat-digital": "Digital inclusion", "proj13-title": "Technova Digital Hub", "proj13-desc": "A refugee-led initiative focused on expanding digital skills and learning opportunities for refugee and host communities in Kalobeyei.",
            "proj-cat-comm-init": "Community initiative", "proj14-title": "Technova Digital Hub — Activity", "proj14-desc": "Community engagement and activities supporting digital inclusion and learning.",
            "proj15-title": "Technova Digital Hub — Project", "proj15-desc": "Project work supporting access to practical digital skills and community learning.",
            "proj-cat-comm-dev": "Community development", "proj16-title": "Technova Digital Hub — Outreach", "proj16-desc": "An initiative promoting digital opportunity and community participation.",
            "proj-cat-social": "Social impact", "proj17-title": "Hope Builders", "proj17-desc": "A community initiative using identifiable branded tracksuits to help trace children who may become lost, while supporting vegetable gardening.",
            "proj-cat-comm-supp": "Community support", "proj18-title": "Hope Builders — Activities", "proj18-desc": "Community project activities focused on practical support and improving well-being.",
            "proj-cat-digital-lit": "Digital literacy", "proj19-title": "Angaza Center", "proj19-desc": "Peer-to-peer digital literacy volunteering supporting learners in developing practical computer skills.",
            "proj-cat-achieve": "Achievement", "proj20-title": "SIKIKA Hackathon", "proj20-desc": "An accessibility-focused team solution developed during a 72-hour hackathon at USIU-Africa.",
            "proj-cat-lead-achieve": "Leadership achievement", "proj21-title": "Cultural Week Recognition", "proj21-desc": "Recognition from cultural activities and collaborative leadership at USIU-Africa.",
            "proj-cta": "View project", "proj-cta-learn": "Learn more", "proj-cta-trophy": "View Trophy",
            "proj-footer": "Want to explore more of my code?", "proj-footer-btn": "Visit GitHub",
            "leadership-heading": "Leadership & Community", "leadership-intro": "I believe technology becomes more powerful when combined with service, collaboration, and opportunities for others.",
            "leadership-1-title": "Technova Digital Hub", "leadership-1-role": "Co-founder & Secretary", "leadership-1-desc": "Supporting a community initiative focused on digital literacy and technology access.",
            "leadership-2-title": "UNIMART Africa", "leadership-2-role": "Co-founder", "leadership-2-desc": "Contributing to an e-commerce platform and collaborating on digital product development.",
            "leadership-3-title": "Ajira Digital Club", "leadership-3-role": "Secretary, 2025", "leadership-3-desc": "Supporting student engagement in digital opportunities, learning, and industry exposure.",
            "leadership-4-title": "Cultural Week Committee", "leadership-4-role": "Chairman, 2026", "leadership-4-desc": "Helped lead a cultural week committee for Sudanese and South Sudanese students; the event earned four trophies.",
            "leadership-5-title": "Hope Builders", "leadership-5-role": "Acting Team Lead & Secretary", "leadership-5-desc": "Contributed to a project supporting children's identification and nutrition through branded tracksuits and vegetables.",
            "leadership-6-title": "Digital Literacy", "leadership-6-role": "Facilitator & Volunteer", "leadership-6-desc": "Shared computer skills and practical technology knowledge with learners and community members.",
            "interests-heading": "Beyond Coding", "interests-intro": "The interests and activities that inspire me outside technology.",
            "interest-1": "Reading & Writing", "interest-2": "Music & Singing", "interest-3": "Learning Piano", "interest-4": "Football", "interest-5": "Nature Walks", "interest-6": "Community Service",
            "contact-heading": "Contact Me", "contact-intro": "Have a project idea, internship opportunity, or a chance to collaborate? I would be glad to connect.",
            "contact-loc-title": "Location", "contact-loc-val": "Nairobi, Kenya", "contact-map": "Open in Google Maps", "contact-email-title": "Email", "contact-github-title": "GitHub", "contact-linkedin-title": "LinkedIn", "contact-insta-title": "Instagram", "contact-connect": "Connect with me",
            "form-name": "Your name", "form-email": "Your email", "form-subject": "Subject", "form-message": "Message", "form-btn-send": "Send Message", "form-btn-wa": "Chat on WhatsApp", "form-note": "Submitting opens your email application with the message prepared.",
            "footer-rights": "All rights reserved."
        },
        "fr": {
            "nav-home": "Accueil", "nav-about": "À Propos", "nav-skills": "Compétences", "nav-resume": "Resume", "nav-projects": "Projets", "nav-leadership": "Leadership", "nav-interests": "Intérêts", "nav-contact": "Contact",
            "sidebar-footer": "Créer de la technologie qui fait la différence.",
            "hero-label": "BIENVENUE SUR MON PORTFOLIO", "hero-im": "Je suis", "hero-role": "Développeur Logiciel",
            "hero-desc": "Je crée des solutions numériques pratiques, développe des applications centrées sur l'utilisateur et explore des technologies à impact significatif.",
            "hero-btn-work": "Explorer mon travail", "hero-btn-connect": "Connectons-nous",
            "hero-quote": "\"Un bon logiciel commence par la curiosité et grandit en résolvant de vrais problèmes.\"",
            "about-heading": "À Propos de Moi", "about-intro": "Je suis étudiant en Technologie Informatique Appliquée à USIU-Africa, fortement intéressé par l'ingénierie logicielle, le développement web, les bases de données et les solutions technologiques pratiques.",
            "about-caption": "Apprendre. Construire. Améliorer.", "about-title": "Développeur Logiciel en Formation",
            "about-p1": "Mon parcours combine apprentissage technique, projets pratiques, leadership et engagement communautaire. J'aime transformer des idées en expériences numériques utiles.",
            "detail-edu": "Éducation:", "detail-edu-val": "Licence en Technologie Informatique Appliquée", "detail-uni": "Université:", "detail-uni-val": "USIU-Africa", "detail-loc": "Localisation:", "detail-loc-val": "Nairobi, Kenya", "detail-focus": "Spécialisation:", "detail-focus-val": "Développement logiciel et web", "detail-lang": "Langues:", "detail-lang-val": "Anglais, Kiswahili", "detail-email": "Email:",
            "about-p2": "Au-delà du code, je valorise le travail d'équipe, le leadership, la littératie numérique et l'utilisation de la technologie pour créer des opportunités.",
            "about-link": "Travaillons ensemble",
            "skills-heading": "Compétences Techniques", "skills-intro": "Technologies et compétences pratiques que j'utilise ou développe activement. Les niveaux sont des auto-évaluations.",
            "skills-frontend": "Développement Frontend", "skills-backend": "Backend & Bases de données", "skills-tools": "Outils & Workflow", "skills-it": "Compétences IT & Professionnelles",
            "tag-win": "Installation Windows", "tag-support": "Support IT", "tag-hardware": "Dépannage matériel", "tag-office": "Microsoft Office", "tag-digital": "Littératie numérique", "tag-team": "Leadership d'équipe", "tag-comm": "Communication", "tag-network": "Fondamentaux réseau", "tag-design": "Design Graphique", "tag-software": "Installation & configuration logicielle", "tag-techdoc": "Documentation technique",
            "resume-heading": "Resume", "resume-btn": "Voir le CV", "resume-intro": "Mon éducation, mon expérience et ma formation reflètent un engagement envers l'apprentissage, la croissance technique et la contribution communautaire.",
            "resume-edu": "Éducation", "resume-edu1-title": "Licence en Technologie Informatique Appliquée", "resume-edu1-date": "En cours", "resume-edu1-place": "United States International University-Africa", "resume-edu1-desc": "Apprentissage du développement logiciel, de l'analyse systémique, des bases de données, de la programmation et des technologies émergentes.",
            "resume-edu2-title": "Certificat de Fin d'Études Secondaires du Kenya", "resume-edu2-date": "2022", "resume-edu2-place": "Butula Boys' Secondary School", "resume-edu2-desc": "Fin des études secondaires avec une mention B+.",
            "resume-training": "Formation", "resume-train1-title": "Programme de Formation Odoo University", "resume-train1-date": "2025", "resume-train1-desc": "Exposition aux workflows ERP dans les ventes, les achats, l'inventaire, la gestion de projet, la comptabilité et les ressources humaines.",
            "resume-train2-title": "Littératie Numérique Pair-à-Pair", "resume-train2-date": "2025", "resume-train2-place": "Fondation Angaza Center", "resume-train2-desc": "Soutien à l'apprentissage de la littératie numérique dans un cadre de bénévolat virtuel.",
            "resume-exp": "Expérience", "resume-exp1-title": "Facilitateur en Informatique de Base", "resume-exp1-date": "2024", "resume-exp1-place": "Alliance Centre of Technology, Kakuma", "resume-exp1-li1": "Formé plus de 60 apprenants aux fondamentaux de l'informatique.", "resume-exp1-li2": "Assisté avec Windows, les applications Office, les pilotes et les imprimantes.", "resume-exp1-li3": "Fourni un support technique de premier niveau.",
            "resume-exp2-title": "Enquêteur", "resume-exp2-date": "2023", "resume-exp2-place": "EXPO Marketing / SNV-WEEE Centre", "resume-exp2-desc": "Contribution à la collecte de données sur le terrain et aux activités du projet.",
            "resume-lead": "Leadership", "resume-lead1-title": "Co-fondateur & Secrétaire", "resume-lead1-date": "2026", "resume-lead1-place": "Technova Digital Hub", "resume-lead1-desc": "Soutien à une initiative communautaire axée sur les compétences numériques et l'accès à la technologie.",
            "resume-lead2-title": "Co-fondateur", "resume-lead2-date": "2025 - Présent", "resume-lead2-place": "UNIMART Africa", "resume-lead2-desc": "Contribution à une plateforme de commerce électronique et à son expérience numérique.",
            "projects-heading": "Projets Phares", "projects-intro": "Explorez mon travail dans le développement mobile et web, le design graphique et les initiatives communautaires. Survolez un projet pour plus d'informations.",
            "filter-all": "Tous", "filter-app": "Développement d'App", "filter-web": "Développement Web", "filter-graphic": "Design Graphique", "filter-community": "Communauté", "filter-more": "Plus de Projets",
            "proj-cat-app": "Application mobile", "proj1-title": "FoodOrderingApp", "proj1-desc": "Une application Android de commande de nourriture avec listes de produits, gestion du panier et navigation.",
            "proj-cat-health-app": "Application de santé", "proj2-title": "MediTrack App", "proj2-desc": "Un concept d'application de santé axé sur la simplification des workflows cliniques.",
            "proj-cat-ecom": "E-commerce", "proj3-title": "UNIMART Africa", "proj3-desc": "Une plateforme de shopping en ligne connectant acheteurs et vendeurs. Mon travail inclut l'UI frontend, les tests d'utilisabilité et le support.",
            "proj-cat-health-soft": "Logiciel de santé", "proj4-title": "MediTrack", "proj4-desc": "Un système de gestion de clinique construit avec FastAPI pour explorer les workflows numériques de santé.",
            "proj-cat-prod": "Productivité", "proj5-title": "UpAhead Student Planner", "proj5-desc": "Un planificateur étudiant conçu pour organiser les devoirs, suivre les progrès et gérer les délais.",
            "proj-cat-web": "Site personnel", "proj6-title": "Portfolio Développeur", "proj6-desc": "Un portfolio réactif présentant mes compétences techniques, projets, expérience et informations de contact.",
            "proj-cat-brand": "Identité de marque", "proj7-title": "Design de Carte de Visite", "proj7-desc": "Un design de carte de visite combinant coordonnées, branding et mise en page claire.",
            "proj-cat-logo": "Design de logo", "proj8-title": "Design de Logo 01", "proj8-desc": "Un concept d'identité visuelle explorant la forme, la couleur et la reconnaissance de la marque.",
            "proj9-title": "Design de Logo 02", "proj9-desc": "Un deuxième concept de logo démontrant l'identité visuelle et la composition graphique.",
            "proj10-title": "Design de Logo 03", "proj10-desc": "Un design de logo explorant des formes distinctives et une présentation de marque mémorable.",
            "proj-cat-poster": "Design d'affiche", "proj11-title": "Affiche Promotionnelle", "proj11-desc": "Une affiche promotionnelle utilisant la hiérarchie visuelle, la typographie et la couleur pour communiquer.",
            "proj-cat-menu": "Design de menu", "proj12-title": "Design de Menu", "proj12-desc": "Une mise en page de menu alimentaire présentant les produits et les prix de manière claire.",
            "proj-cat-digital": "Inclusion numérique", "proj13-title": "Technova Digital Hub", "proj13-desc": "Une initiative menée par des réfugiés axée sur l'expansion des compétences numériques à Kalobeyei.",
            "proj-cat-comm-init": "Initiative communautaire", "proj14-title": "Technova Digital Hub — Activité", "proj14-desc": "Engagement communautaire et activités soutenant l'inclusion numérique et l'apprentissage.",
            "proj15-title": "Technova Digital Hub — Projet", "proj15-desc": "Travail de projet soutenant l'accès aux compétences numériques pratiques et à l'apprentissage communautaire.",
            "proj-cat-comm-dev": "Développement communautaire", "proj16-title": "Technova Digital Hub — Sensibilisation", "proj16-desc": "Une initiative promouvant l'opportunité numérique et la participation communautaire.",
            "proj-cat-social": "Impact social", "proj17-title": "Hope Builders", "proj17-desc": "Une initiative communautaire utilisant des survêtements marqués pour aider à retrouver les enfants perdus, tout en soutenant le jardinage.",
            "proj-cat-comm-supp": "Soutien communautaire", "proj18-title": "Hope Builders — Activités", "proj18-desc": "Activités de projet communautaire axées sur le soutien pratique et l'amélioration du bien-être.",
            "proj-cat-digital-lit": "Littératie numérique", "proj19-title": "Angaza Center", "proj19-desc": "Bénévolat en littératie numérique pair-à-pair soutenant les apprenants dans le développement de compétences informatiques.",
            "proj-cat-achieve": "Réalisation", "proj20-title": "Hackathon SIKIKA", "proj20-desc": "Une solution d'équipe axée sur l'accessibilité développée lors d'un hackathon de 72 heures à USIU-Africa.",
            "proj-cat-lead-achieve": "Réalisation en leadership", "proj21-title": "Reconnaissance de la Semaine Culturelle", "proj21-desc": "Reconnaissance des activités culturelles et du leadership collaboratif à USIU-Africa.",
            "proj-cta": "Voir le projet", "proj-cta-learn": "En savoir plus", "proj-cta-trophy": "Voir le Trophée",
            "proj-footer": "Vous voulez explorer plus de mon code?", "proj-footer-btn": "Visiter GitHub",
            "leadership-heading": "Leadership & Communauté", "leadership-intro": "Je crois que la technologie devient plus puissante lorsqu'elle est combinée avec le service, la collaboration et les opportunités pour les autres.",
            "leadership-1-title": "Technova Digital Hub", "leadership-1-role": "Co-fondateur & Secrétaire", "leadership-1-desc": "Soutien à une initiative communautaire axée sur la littératie numérique.",
            "leadership-2-title": "UNIMART Africa", "leadership-2-role": "Co-fondateur", "leadership-2-desc": "Contribution à une plateforme e-commerce et collaboration au développement de produits numériques.",
            "leadership-3-title": "Ajira Digital Club", "leadership-3-role": "Secrétaire, 2025", "leadership-3-desc": "Soutien à l'engagement des étudiants dans les opportunités numériques.",
            "leadership-4-title": "Comité de la Semaine Culturelle", "leadership-4-role": "Président, 2026", "leadership-4-desc": "A aidé à diriger un comité pour les étudiants soudanais et sud-soudanais; l'événement a remporté quatre trophées.",
            "leadership-5-title": "Hope Builders", "leadership-5-role": "Chef d'équipe par intérim & Secrétaire", "leadership-5-desc": "Contribution à un projet soutenant l'identification et la nutrition des enfants.",
            "leadership-6-title": "Littératie Numérique", "leadership-6-role": "Facilitateur & Bénévole", "leadership-6-desc": "Partage de compétences informatiques et de connaissances technologiques pratiques.",
            "interests-heading": "Au-delà du Code", "interests-intro": "Les intérêts et activités qui m'inspirent en dehors de la technologie.",
            "interest-1": "Lecture & Écriture", "interest-2": "Musique & Chant", "interest-3": "Apprentissage du Piano", "interest-4": "Football", "interest-5": "Promenades dans la Nature", "interest-6": "Service Communautaire",
            "contact-heading": "Contactez-Moi", "contact-intro": "Vous avez une idée de projet, une opportunité de stage ou une chance de collaborer? Je serais ravi de me connecter.",
            "contact-loc-title": "Localisation", "contact-loc-val": "Nairobi, Kenya", "contact-map": "Ouvrir dans Google Maps", "contact-email-title": "Email", "contact-github-title": "GitHub", "contact-linkedin-title": "LinkedIn", "contact-insta-title": "Instagram", "contact-connect": "Se connecter avec moi",
            "form-name": "Votre nom", "form-email": "Votre email", "form-subject": "Sujet", "form-message": "Message", "form-btn-send": "Envoyer le Message", "form-btn-wa": "Discuter sur WhatsApp", "form-note": "La soumission ouvre votre application email avec le message préparé.",
            "footer-rights": "Tous droits réservés."
        },
        "ru": {
            "nav-home": "Главная", "nav-about": "О себе", "nav-skills": "Навыки", "nav-resume": "Резюме", "nav-projects": "Проекты", "nav-leadership": "Лидерство", "nav-interests": "Интересы", "nav-contact": "Контакты",
            "sidebar-footer": "Создаю технологии, которые меняют мир к лучшему.",
            "hero-label": "ДОБРО ПОЖАЛОВАТЬ В МОЕ ПОРТФОЛИО", "hero-im": "Я", "hero-role": "Разработчик ПО",
            "hero-desc": "Я создаю практичные цифровые решения, разрабатываю удобные приложения и изучаю технологии, которые оказывают значимое влияние.",
            "hero-btn-work": "Смотреть работы", "hero-btn-connect": "Связаться со мной",
            "hero-quote": "\"Хорошее ПО начинается с любопытства и растет благодаря решению реальных проблем.\"",
            "about-heading": "Обо Мне", "about-intro": "Я студент по специальности Прикладные Компьютерные Технологии в USIU-Africa, интересуюсь разработкой ПО, веб-разработкой и практическими ИТ-решениями.",
            "about-caption": "Учусь. Создаю. Улучшаю.", "about-title": "Начинающий Разработчик ПО",
            "about-p1": "Мой путь сочетает техническое обучение с практическими проектами и лидерством. Мне нравится превращать идеи в полезные цифровые продукты.",
            "detail-edu": "Образование:", "detail-edu-val": "Бакалавр прикладных компьютерных технологий", "detail-uni": "Университет:", "detail-uni-val": "USIU-Africa", "detail-loc": "Местоположение:", "detail-loc-val": "Найроби, Кения", "detail-focus": "Специализация:", "detail-focus-val": "Разработка ПО и веб-разработка", "detail-lang": "Языки:", "detail-lang-val": "Английский, Суахили", "detail-email": "Email:",
            "about-p2": "Помимо программирования, я ценю командную работу, лидерство и использование технологий для создания возможностей.",
            "about-link": "Давайте работать вместе",
            "skills-heading": "Технические Навыки", "skills-intro": "Технологии и практические навыки, которые я использую или активно развиваю. Уровни являются самооценкой.",
            "skills-frontend": "Frontend Разработка", "skills-backend": "Backend и Базы данных", "skills-tools": "Инструменты и Workflow", "skills-it": "ИТ и Профессиональные навыки",
            "tag-win": "Установка Windows", "tag-support": "ИТ поддержка", "tag-hardware": "Диагностика оборудования", "tag-office": "Microsoft Office", "tag-digital": "Цифровая грамотность", "tag-team": "Командное лидерство", "tag-comm": "Коммуникация", "tag-network": "Основы сетей", "tag-design": "Графический дизайн", "tag-software": "Установка и настройка ПО", "tag-techdoc": "Техническая документация",
            "resume-heading": "Резюме", "resume-btn": "Смотреть резюме", "resume-intro": "Мое образование, опыт и обучение отражают стремление к обучению, техническому росту и вкладу в общество.",
            "resume-edu": "Образование", "resume-edu1-title": "Прикладные компьютерные технологии", "resume-edu1-date": "В процессе", "resume-edu1-place": "United States International University-Africa", "resume-edu1-desc": "Изучение разработки ПО, системного анализа, баз данных, программирования и новых технологий.",
            "resume-edu2-title": "Сертификат о среднем образовании Кении", "resume-edu2-date": "2022", "resume-edu2-place": "Butula Boys' Secondary School", "resume-edu2-desc": "Окончание средней школы с оценкой B+.",
            "resume-training": "Обучение", "resume-train1-title": "Программа обучения Odoo University", "resume-train1-date": "2025", "resume-train1-desc": "Знакомство с ERP-процессами в продажах, закупках, управлении запасами и проектами.",
            "resume-train2-title": "Равноправное обучение цифровой грамотности", "resume-train2-date": "2025", "resume-train2-place": "Angaza Center Foundation", "resume-train2-desc": "Поддержка обучения цифровой грамотности в качестве виртуального волонтера.",
            "resume-exp": "Опыт", "resume-exp1-title": "Преподаватель основ компьютера", "resume-exp1-date": "2024", "resume-exp1-place": "Alliance Centre of Technology, Kakuma", "resume-exp1-li1": "Обучил более 60 учеников основам работы с компьютером.", "resume-exp1-li2": "Помощь с Windows, приложениями Office, драйверами и принтерами.", "resume-exp1-li3": "Оказание технической поддержки первого уровня.",
            "resume-exp2-title": "Интервьюер", "resume-exp2-date": "2023", "resume-exp2-place": "EXPO Marketing / SNV-WEEE Centre", "resume-exp2-desc": "Участие в сборе полевых данных и сопутствующих проектных мероприятиях.",
            "resume-lead": "Лидерство", "resume-lead1-title": "Соучредитель и секретарь", "resume-lead1-date": "2026", "resume-lead1-place": "Technova Digital Hub", "resume-lead1-desc": "Поддержка общественной инициативы, направленной на цифровые навыки.",
            "resume-lead2-title": "Соучредитель", "resume-lead2-date": "2025 - Настоящее время", "resume-lead2-place": "UNIMART Africa", "resume-lead2-desc": "Вклад в развитие платформы электронной коммерции и ее цифрового опыта.",
            "projects-heading": "Избранные Проекты", "projects-intro": "Изучите мои работы в области мобильной и веб-разработки, графического дизайна и общественных инициатив.",
            "filter-all": "Все", "filter-app": "Разработка приложений", "filter-web": "Веб-разработка", "filter-graphic": "Графический дизайн", "filter-community": "Сообщество", "filter-more": "Больше проектов",
            "proj-cat-app": "Мобильное приложение", "proj1-title": "FoodOrderingApp", "proj1-desc": "Приложение для заказа еды на Android со списками товаров, корзиной и навигацией.",
            "proj-cat-health-app": "Медицинское приложение", "proj2-title": "MediTrack App", "proj2-desc": "Концепция медицинского приложения, направленная на оптимизацию рабочих процессов в клинике.",
            "proj-cat-ecom": "Электронная коммерция", "proj3-title": "UNIMART Africa", "proj3-desc": "Платформа для онлайн-покупок. Моя работа включает фронтенд, тестирование удобства использования и поддержку.",
            "proj-cat-health-soft": "Медицинское ПО", "proj4-title": "MediTrack", "proj4-desc": "Система управления клиникой на базе FastAPI для изучения цифровых рабочих процессов.",
            "proj-cat-prod": "Продуктивность", "proj5-title": "UpAhead Student Planner", "proj5-desc": "Планировщик для студентов, помогающий организовывать задания и отслеживать дедлайны.",
            "proj-cat-web": "Личный сайт", "proj6-title": "Портфолио разработчика", "proj6-desc": "Адаптивное портфолио, демонстрирующее мои технические навыки, проекты и опыт.",
            "proj-cat-brand": "Брендинг", "proj7-title": "Дизайн визитной карточки", "proj7-desc": "Дизайн визитной карточки, сочетающий контактные данные, брендинг и четкий макет.",
            "proj-cat-logo": "Дизайн логотипа", "proj8-title": "Дизайн логотипа 01", "proj8-desc": "Концепция визуальной идентичности, исследующая форму, цвет и узнаваемость бренда.",
            "proj9-title": "Дизайн логотипа 02", "proj9-desc": "Вторая концепция логотипа, демонстрирующая визуальную идентичность и графическую композицию.",
            "proj10-title": "Дизайн логотипа 03", "proj10-desc": "Дизайн логотипа, исследующий отличительные формы и запоминающуюся презентацию бренда.",
            "proj-cat-poster": "Дизайн плаката", "proj11-title": "Рекламный плакат", "proj11-desc": "Рекламный плакат, использующий визуальную иерархию, типографику и цвет для передачи сообщения.",
            "proj-cat-menu": "Дизайн меню", "proj12-title": "Дизайн меню", "proj12-desc": "Макет меню, в котором продукты и цены представлены в ясном, визуально привлекательном формате.",
            "proj-cat-digital": "Цифровая инклюзия", "proj13-title": "Technova Digital Hub", "proj13-desc": "Инициатива под руководством беженцев, направленная на расширение цифровых навыков в Калобейеи.",
            "proj-cat-comm-init": "Общественная инициатива", "proj14-title": "Technova Digital Hub — Активность", "proj14-desc": "Общественное взаимодействие и мероприятия, поддерживающие цифровую инклюзию.",
            "proj15-title": "Technova Digital Hub — Проект", "proj15-desc": "Проектная работа, поддерживающая доступ к практическим цифровым навыкам.",
            "proj-cat-comm-dev": "Развитие сообщества", "proj16-title": "Technova Digital Hub — Охват", "proj16-desc": "Инициатива, продвигающая цифровые возможности и участие сообщества.",
            "proj-cat-social": "Социальное воздействие", "proj17-title": "Hope Builders", "proj17-desc": "Общественная инициатива, использующая брендированные спортивные костюмы для помощи в поиске потерявшихся детей.",
            "proj-cat-comm-supp": "Поддержка сообщества", "proj18-title": "Hope Builders — Деятельность", "proj18-desc": "Мероприятия общественного проекта, направленные на практическую поддержку и улучшение благосостояния.",
            "proj-cat-digital-lit": "Цифровая грамотность", "proj19-title": "Angaza Center", "proj19-desc": "Волонтерство по цифровой грамотности, помогающее учащимся развивать практические компьютерные навыки.",
            "proj-cat-achieve": "Достижение", "proj20-title": "Хакатон SIKIKA", "proj20-desc": "Командное решение, ориентированное на доступность, разработанное во время 72-часового хакатона в USIU-Africa.",
            "proj-cat-lead-achieve": "Лидерское достижение", "proj21-title": "Признание Культурной Недели", "proj21-desc": "Признание за культурные мероприятия и совместное лидерство в USIU-Africa.",
            "proj-cta": "Смотреть проект", "proj-cta-learn": "Узнать больше", "proj-cta-trophy": "Смотреть трофей",
            "proj-footer": "Хотите изучить больше моего кода?", "proj-footer-btn": "Посетить GitHub",
            "leadership-heading": "Лидерство и Сообщество", "leadership-intro": "Я верю, что технологии становятся мощнее в сочетании со служением, сотрудничеством и возможностями для других.",
            "leadership-1-title": "Technova Digital Hub", "leadership-1-role": "Соучредитель и секретарь", "leadership-1-desc": "Поддержка общественной инициативы, направленной на цифровую грамотность.",
            "leadership-2-title": "UNIMART Africa", "leadership-2-role": "Соучредитель", "leadership-2-desc": "Вклад в платформу электронной коммерции и сотрудничество в разработке цифровых продуктов.",
            "leadership-3-title": "Ajira Digital Club", "leadership-3-role": "Секретарь, 2025", "leadership-3-desc": "Поддержка участия студентов в цифровых возможностях.",
            "leadership-4-title": "Комитет Культурной Недели", "leadership-4-role": "Председатель, 2026", "leadership-4-desc": "Помог возглавить комитет для суданских и южносуданских студентов; мероприятие получило четыре трофея.",
            "leadership-5-title": "Hope Builders", "leadership-5-role": "И.о. руководителя команды и секретарь", "leadership-5-desc": "Вклад в проект, поддерживающий идентификацию и питание детей.",
            "leadership-6-title": "Цифровая грамотность", "leadership-6-role": "Преподаватель и волонтер", "leadership-6-desc": "Обмен компьютерными навыками и практическими техническими знаниями.",
            "interests-heading": "За пределами Кода", "interests-intro": "Интересы и занятия, которые вдохновляют меня вне технологий.",
            "interest-1": "Чтение и Письмо", "interest-2": "Музыка и Пение", "interest-3": "Изучение Фортепиано", "interest-4": "Футбол", "interest-5": "Прогулки на Природе", "interest-6": "Общественная Работа",
            "contact-heading": "Свяжитесь со Мной", "contact-intro": "Есть идея проекта, возможность стажировки или шанс на сотрудничество? Буду рад связаться.",
            "contact-loc-title": "Местоположение", "contact-loc-val": "Найроби, Кения", "contact-map": "Открыть в Google Картах", "contact-email-title": "Email", "contact-github-title": "GitHub", "contact-linkedin-title": "LinkedIn", "contact-insta-title": "Instagram", "contact-connect": "Связаться со мной",
            "form-name": "Ваше имя", "form-email": "Ваш email", "form-subject": "Тема", "form-message": "Сообщение", "form-btn-send": "Отправить Сообщение", "form-btn-wa": "Чат в WhatsApp", "form-note": "При отправке откроется ваше почтовое приложение с подготовленным сообщением.",
            "footer-rights": "Все права защищены."
        }
    };

    function translatePage(lang) {
        const elements = document.querySelectorAll("[data-translate]");
        elements.forEach(el => {
            const key = el.getAttribute("data-translate");
            if (translations[lang] && translations[lang][key]) {
                // Check if the element is a button with an icon, keep the icon
                if (el.tagName === 'A' && el.querySelector('i')) {
                    const icon = el.querySelector('i').outerHTML;
                    el.innerHTML = translations[lang][key] + ' ' + icon;
                } else if (el.tagName === 'BUTTON' && el.querySelector('i')) {
                     const icon = el.querySelector('i').outerHTML;
                     el.innerHTML = translations[lang][key] + ' ' + icon;
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    if (languageSelect) {
        languageSelect.addEventListener("change", (e) => {
            translatePage(e.target.value);
        });
    }

    // Update the copyright year automatically
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* Desktop Sidebar Toggle */
    if (desktopSidebarToggle) {
        desktopSidebarToggle.addEventListener("click", () => {
            document.body.classList.toggle("sidebar-open");
        });
    }

    /* Mobile navigation */

    // Close the mobile navigation menu
    function closeMenu() {
        if (!sidebar || !menuToggle) return;

        sidebar.classList.remove("open");
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.innerHTML = '<i class="bi bi-list"></i>';
    }

    // Open and close the mobile navigation menu
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            
            const isOpen = sidebar.classList.toggle("open");

            document.body.classList.toggle("menu-open", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="bi bi-x-lg"></i>'
                : '<i class="bi bi-list"></i>';
        });

        // Close the menu after selecting a navigation link
        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                closeMenu();
                document.body.classList.remove("sidebar-open");
            });
        });

        // Close the menu when Escape is pressed
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });

        // Close the menu when clicking outside it
        document.addEventListener("click", (event) => {
            if (
                window.innerWidth <= 900 &&
                sidebar.classList.contains("open") &&
                !sidebar.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMenu();
            }
        });

        // Close the mobile menu when returning to desktop width
        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) closeMenu();
        });
    }

    /* Animated job titles */

    // Display different professional roles in the hero section
    if (typedRole) {
        const roles = [
            "Software Developer",
            "Web Developer",
            "Tech Enthusiast",
            "Problem Solver"
        ];

        let roleIndex = 0;
        let characterIndex = roles[0].length;
        let deleting = true;

        function typeRole() {
            const currentRole = roles[roleIndex];

            // Remove or add one character at a time
            characterIndex += deleting ? -1 : 1;

            typedRole.textContent = currentRole.substring(
                0,
                Math.max(0, characterIndex)
            );

            let delay = deleting ? 45 : 85;

            // Move to the next role after deleting the current one
            if (characterIndex <= 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                delay = 300;
            } else if (
                characterIndex >= roles[roleIndex].length &&
                !deleting
            ) {
                deleting = true;
                delay = 1500;
            }

            window.setTimeout(typeRole, delay);
        }

        // Start the typing animation after a short delay
        window.setTimeout(typeRole, 1800);
    }

    /* Active navigation links */

    // Find all main page sections that have an ID
    const sections = document.querySelectorAll("main section[id]");

    // Highlight the navigation link for the visible section
    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;

                        navLinks.forEach((link) => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === `#${sectionId}`
                            );
                        });
                    }
                });
            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: 0
            }
        );

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }

    /* Project category filters */

    // Select the category buttons and project cards
    const projectFilters = document.querySelectorAll(".project-filter");
    const galleryProjects = document.querySelectorAll(".gallery-project");

    // Filter projects according to the selected category
    if (projectFilters.length > 0 && galleryProjects.length > 0) {
        projectFilters.forEach((button) => {
            button.addEventListener("click", () => {
                // Read the selected category from the button
                const selectedCategory = (
                    button.dataset.filter || "all"
                ).toLowerCase();

                // Update the active category button
                projectFilters.forEach((filterButton) => {
                    const isActive = filterButton === button;

                    filterButton.classList.toggle("active", isActive);
                    filterButton.setAttribute(
                        "aria-pressed",
                        String(isActive)
                    );
                });

                // Show projects matching the selected category
                galleryProjects.forEach((project) => {
                    // Support projects assigned to more than one category
                    const categories = (
                        project.dataset.category || "uncategorized"
                    )
                        .toLowerCase()
                        .split(",")
                        .map((category) => category.trim());

                    // The "all" category displays every project
                    const matchesCategory =
                        selectedCategory === "all" ||
                        categories.includes(selectedCategory);

                    // Update the project visibility classes
                    project.classList.toggle("hidden", !matchesCategory);
                    project.classList.toggle(
                        "filter-hidden",
                        !matchesCategory
                    );

                    // Keep the hidden state available to assistive technology
                    project.setAttribute(
                        "aria-hidden",
                        String(!matchesCategory)
                    );
                });
            });
        });
    }

    /* Reveal cards on scroll */

    // Select cards that should animate into view
    const revealTargets = document.querySelectorAll(
        ".skill-card, .resume-item, .leadership-card, " +
        ".gallery-project, .interest-item, .contact-card"
    );

    // Reveal each card when it enters the viewport
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08
            }
        );

        revealTargets.forEach((element) => {
            element.classList.add("reveal");
            revealObserver.observe(element);
        });
    } else {
        // Display all cards if IntersectionObserver is unavailable
        revealTargets.forEach((element) => {
            element.classList.add("visible");
        });
    }

    /* Back-to-top button */

    // Show the button after scrolling down the page
    function updateBackToTop() {
        if (backToTop) {
            backToTop.classList.toggle("visible", window.scrollY > 450);
        }
    }

    // Update the button when the visitor scrolls
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();

    // Return to the top when the button is clicked
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* Contact form */

    // Prepare an email using the visitor's default email application
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Validate required form fields
            if (!contactForm.reportValidity()) return;

            // Collect and clean the visitor's details
            const visitorName =
                document.getElementById("visitor-name").value.trim();

            const visitorEmail =
                document.getElementById("visitor-email").value.trim();

            const subject =
                document.getElementById("visitor-subject").value.trim();

            const message =
                document.getElementById("visitor-message").value.trim();

            // Prepare the email subject and message
            const emailSubject = encodeURIComponent(subject);

            const emailBody = encodeURIComponent(
                `Hello Deogracia,\n\n${message}\n\n` +
                `Regards,\n${visitorName}\n${visitorEmail}`
            );

            // Explain what happens when the form is submitted
            if (formNote) {
                formNote.textContent =
                    "Your email application should open with your message prepared. Please send it from there.";
            }

            // Open the visitor's default email application
            window.location.href =
                `mailto:deograciaolweny@gmail.com` +
                `?subject=${emailSubject}&body=${emailBody}`;
        });
    }
});