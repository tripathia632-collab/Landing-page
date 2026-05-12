
// ╔══════════════════════════════════════════════════════════════╗
// ║         MA SHARANAM ASHRAM — WEBSITE CONTENT FILE           ║
// ║                                                              ║
// ║  HOW TO EDIT: Change any text between the quote marks " "   ║
// ║  Save the file after editing. That's it!                    ║
// ║  DO NOT delete commas, colons, or curly brackets { }        ║
// ╚══════════════════════════════════════════════════════════════╝

const SITE = {

  // ── SITE-WIDE SETTINGS ──────────────────────────────────────
  name:        "Ma Sharanam Ashram",
  tagline:     "A Divine Abode of Peace, Love & Spiritual Growth",
  email:       "gurusharan7@gmail.com",
  phone:       "+91-930-200-1809",
  phone2:      "",                              // second number if any
  address:     "Ma Sharanam Ashram, [Village], [District], [State] — India",
  mapLink:     "https://maps.google.com/?q=Ma+Sharanam+Ashram",
  facebook:    "https://www.facebook.com/ma.sharanam.58",
  youtube:     "http://www.youtube.com/@masharanam",
  instagram:   "",                              // add when available
  whatsapp:    "919302001809",                  // digits only for wa.me link
  brochure:    "https://masharanam.org/wp-content/uploads/2024/07/masharanam-ashram-brochure.pdf",
  founded:     "2018",
  regNo:       "063300151R",

  // ── HOME PAGE ────────────────────────────────────────────────
  home: {
    heroBadge:    "🕉️  A Sacred Abode of Ma",
    heroHeading:  "Ma Sharanam Ashram",
    heroSub:      "A Divine Abode of Peace, Love & Spiritual Growth",
    heroDesc:     "Nestled in the lap of nature, Ma Sharanam Ashram is a spiritual sanctuary dedicated to holistic living, ancient wisdom, and compassionate service — under the divine guidance of Swami Gurusharan.",
    heroCta1:     "Explore the Ashram",
    heroCta1Link: "about.html",
    heroCta2:     "Join a Retreat",
    heroCta2Link: "satsang.html",
    // Change this to a real ashram photo path later e.g. "images/hero.jpg"
    heroImage:    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",

    stats: [
      { number: "2018",  label: "Year Established" },
      { number: "1000+", label: "Lives Touched" },
      { number: "365",   label: "Days of Seva" },
      { number: "50+",   label: "Retreats Held" },
    ],

    aboutBadge:   "Our Mission",
    aboutHeading: "Where Ancient Wisdom Meets Compassionate Living",
    aboutText1:   "Ma Sharanam Ashram is more than a spiritual centre — it is a living embodiment of the ancient Vedic way of life. Guided by the teachings of Swami Gurusharan, the ashram serves as a beacon of light for seekers from all walks of life.",
    aboutText2:   "The ashram runs a Gurukul for children, a full-fledged school, a sacred Gaushala, organic farming, and daily spiritual programs — all rooted in living in harmony with nature and the Divine.",
    aboutImage:   "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",

    programsBadge:   "What We Do",
    programsHeading: "Programs & Initiatives",
    programsSub:     "From Gurukul education to Gaushala service — every initiative is a step towards a more conscious and compassionate world.",

    programs: [
      { icon:"🏛️", title:"Gurukul",          desc:"Traditional Vedic education combining ancient wisdom with modern learning in a residential setting.",  link:"gurukul.html" },
      { icon:"📚", title:"School",            desc:"Formal education with a spiritual foundation, providing quality learning to children of the region.",   link:"school.html" },
      { icon:"🐄", title:"Gaushala",          desc:"A sacred cow sanctuary where desi cows are protected and cared for as an act of divine service.",       link:"gaushala.html" },
      { icon:"🌱", title:"Organic Farming",   desc:"Natural, chemical-free farming using traditional methods, providing pure food for the community.",     link:"organic-farming.html" },
      { icon:"🕉️", title:"Satsang & Yoga",   desc:"Daily Matri Vani, Satsang, Swakriya Yoga, and meditation open to all seekers.",                       link:"satsang.html" },
      { icon:"✍️", title:"Blog & Teachings",  desc:"Spiritual articles, teachings, and ashram updates — wisdom freely shared with the world.",             link:"blog.html" },
    ],

    schedule: [
      { time:"5:00 AM",  act:"Brahma Muhurta — Rise & Morning Prayers" },
      { time:"5:30 AM",  act:"Nitnem & Bani at Gurudwara Anand Sahib" },
      { time:"6:30 AM",  act:"Swakriya Yoga & Meditation" },
      { time:"8:00 AM",  act:"Pooja at Temples & Daily Yagna at Kali Temple" },
      { time:"9:00 AM",  act:"Breakfast — Sattvic Vegetarian Meal" },
      { time:"10:00 AM", act:"Gurukul & School Sessions" },
      { time:"12:30 PM", act:"Lunch & Rest" },
      { time:"2:00 PM",  act:"Seva — Gaushala, Farming, Campus Work" },
      { time:"5:00 PM",  act:"Evening Yoga & Group Study" },
      { time:"6:30 PM",  act:"Matri Vani by Swami Gurusharan" },
      { time:"7:30 PM",  act:"Evening Aarti & Prayers" },
      { time:"8:30 PM",  act:"Dinner & Silence" },
    ],

    testimonials: [
      { name:"Rajesh Kumar",   role:"Retreat Attendee, Delhi",      text:"My stay at Ma Sharanam Ashram transformed my life. The serenity, the teachings, and the community energy are unlike anything I have experienced.", img:"https://randomuser.me/api/portraits/men/45.jpg" },
      { name:"Priya Sharma",   role:"Yoga Student, Mumbai",         text:"Swakriya Yoga here is not just exercise — it is a deep spiritual journey. Swami Gurusharan's guidance is gentle yet profoundly transformative.",  img:"https://randomuser.me/api/portraits/women/44.jpg" },
      { name:"Anand Mehta",    role:"Donor & Volunteer, Ahmedabad", text:"Seeing the Gaushala and the Gurukul gives me immense hope. This ashram truly embodies what our ancient civilization was built upon.",           img:"https://randomuser.me/api/portraits/men/67.jpg" },
    ],
  },

  // ── ABOUT PAGE ───────────────────────────────────────────────
  about: {
    heroHeading: "About Ma Sharanam Ashram",
    heroSub:     "A sanctuary of peace, wisdom, and service — where every soul finds its way home.",

    mission: "To create a living model of the Vedic way of life — where education, spirituality, nature, and compassion come together in perfect harmony.",
    vision:  "A world where human beings live in harmony with nature, honor all living creatures, and serve with love — guided by the eternal truths of Sanatan Dharma.",

    values: [
      { icon:"🌿", title:"Ahimsa",         desc:"Non-violence and compassion towards all living beings." },
      { icon:"🙏", title:"Seva",           desc:"Selfless service as a spiritual practice and way of life." },
      { icon:"📿", title:"Sadhana",        desc:"Daily spiritual practice as the foundation of a meaningful life." },
      { icon:"🌱", title:"Sustainability", desc:"Living in harmony with nature, wasting nothing, cherishing everything." },
      { icon:"🎓", title:"Vidya",          desc:"Knowledge that liberates — both ancient wisdom and modern understanding." },
      { icon:"💛", title:"Bhakti",         desc:"Devotion to the Divine, the source of all love and wisdom." },
    ],

    founderName:  "Swami Gurusharan",
    founderRole:  "Founder & Spiritual Head, Ma Sharanam Ashram",
    founderBio1:  "Swami Gurusharan is the spiritual heart of Ma Sharanam Ashram. With decades of sadhana and deep study of ancient Vedic texts, Swamiji has dedicated his life to the spiritual upliftment of all who come to him.",
    founderBio2:  "Every morning, Swamiji delivers Matri Vani — a discourse on the divine teachings of Ma — broadcast live on the Ma Sharanam YouTube channel, reaching thousands of seekers worldwide.",
    founderBio3:  "Under his guidance the ashram has grown from a small spiritual gathering to a thriving community engaged in education, cow protection, organic farming, and daily sadhana.",
    founderImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&q=80",

    storyText1: "Ma Sharanam Ashram was founded in 2018 under the divine inspiration of Swami Gurusharan. What began as a small gathering of sincere seekers has evolved into a comprehensive community dedicated to Vedic living.",
    storyText2: "The ashram is registered under FCRA and follows strict financial transparency, publishing annual audited reports. All donations are used solely for ashram seva and community welfare.",
    storyText3: "Today the ashram is home to a Gurukul, a school, a Gaushala, organic farms, multiple temples including a Kali temple and Gurudwara Anand Sahib, and daily programs welcoming all seekers.",

    milestones: [
      { year:"2018", event:"Ma Sharanam Ashram established under divine guidance of Swami Gurusharan" },
      { year:"2019", event:"Gurukul program launched for residential students" },
      { year:"2020", event:"Gaushala founded — first desi cows welcomed" },
      { year:"2021", event:"Organic farm established on ashram grounds" },
      { year:"2022", event:"School inaugurated for local children" },
      { year:"2023", event:"Daily Matri Vani broadcast launched on YouTube" },
      { year:"2024", event:"FCRA registration — opening doors to international support" },
    ],

    facilities: [
      { icon:"🏠", title:"Accommodation",   desc:"Clean, comfortable quarters for ashram residents, students, and visiting devotees." },
      { icon:"🍱", title:"Sattvic Kitchen", desc:"Pure vegetarian meals prepared with love, using ingredients from our own organic farm." },
      { icon:"🛕", title:"Temples",          desc:"Multiple temples: Kali temple, Shri Ma temple, and Gurudwara Anand Sahib." },
      { icon:"🧘", title:"Yoga Hall",        desc:"A dedicated, peaceful hall for daily yoga, meditation, and Swakriya sessions." },
      { icon:"📚", title:"Library",          desc:"A curated collection of Vedic scriptures, spiritual texts, and educational resources." },
      { icon:"🌿", title:"Nature Campus",    desc:"Spread across a natural landscape with gardens, farms, and the sacred Gaushala." },
    ],
  },

  // ── GURUKUL PAGE ─────────────────────────────────────────────
  gurukul: {
    heroHeading: "The Gurukul",
    heroSub:     "Where ancient wisdom comes alive — a residential school rooted in Vedic tradition.",
    heroImage:   "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1920&q=80",
    intro1: "The Gurukul at Ma Sharanam Ashram revives the ancient Indian tradition of gurukul education — where students (shishyas) live with the teacher (guru) in a natural setting, learning not just academics but the complete art of living.",
    intro2: "Children immerse themselves in Sanskrit, Vedic scriptures, yoga, meditation, and classical arts — alongside their modern academic curriculum, creating truly holistic individuals.",
    curriculum: [
      { title:"Vedic Studies",       items:["Sanskrit language & grammar","Vedic chanting & mantras","Upanishads & Bhagavad Gita","Indian philosophy & ethics"] },
      { title:"Yoga & Wellness",     items:["Swakriya Yoga","Pranayama & breathing","Meditation techniques","Ayurveda & nature healing"] },
      { title:"Academic Excellence", items:["Mathematics & science","Language arts (Hindi & English)","History & geography","Digital literacy"] },
      { title:"Life Skills",         items:["Gaushala seva","Organic farming","Cooking & nutrition","Music & classical arts"] },
    ],
    ageRange:    "6 to 16 years",
    admissionMonth: "April (annual)",
    admissionFee: "Fees are kept deliberately modest. No sincere student is denied education for financial reasons. Scholarship and sponsorship options are available on request.",
    admissionSteps: [
      { step:"01", title:"Inquiry",     text:"Contact the ashram by phone or email to receive the application form." },
      { step:"02", title:"Application", text:"Submit the completed form along with student details and a brief family introduction." },
      { step:"03", title:"Visit",       text:"Visit the ashram with your child for a day to experience ashram life and meet Swamiji." },
      { step:"04", title:"Enrollment",  text:"Upon acceptance, complete enrollment. Support available for those with financial need." },
    ],
  },

  // ── SCHOOL PAGE ──────────────────────────────────────────────
  school: {
    heroHeading: "Ma Sharanam School",
    heroSub:     "Quality education with spiritual values — shaping tomorrow's leaders today.",
    heroImage:   "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
    intro1: "Ma Sharanam School provides formal education to children from surrounding villages. We believe every child deserves quality education regardless of economic background.",
    intro2: "The school follows the national curriculum while infusing each subject with values of compassion, honesty, environmental awareness, and respect — making students not just knowledgeable, but truly educated.",
    features: [
      { icon:"🎯", title:"Values-Based Curriculum", desc:"Academic excellence combined with character building and ethical development." },
      { icon:"👩‍🏫", title:"Qualified Teachers",    desc:"Dedicated educators who are mentors and guides, not just instructors." },
      { icon:"🌍", title:"Inclusive Admission",      desc:"Open to all children regardless of caste, religion, or economic background." },
      { icon:"🏃", title:"Sports & Activities",      desc:"Physical education, sports, and extracurricular activities for all-round development." },
      { icon:"🌿", title:"Eco-Conscious Campus",     desc:"Children learn sustainability through direct participation in the ashram's green initiatives." },
      { icon:"💝", title:"Affordable Education",     desc:"Nominal fees with scholarship options — no child is turned away." },
    ],
    classes: [
      { level:"Pre-Primary", grades:"Nursery & KG",      age:"3–5 years" },
      { level:"Primary",     grades:"Class 1–5",         age:"6–10 years" },
      { level:"Middle",      grades:"Class 6–8",         age:"11–13 years" },
      { level:"Secondary",   grades:"Class 9–12 (soon)", age:"14–17 years" },
    ],
  },

  // ── GAUSHALA PAGE ────────────────────────────────────────────
  gaushala: {
    heroHeading: "Gaushala",
    heroSub:     "Honoring the sacred cow — protection, love, and service as a divine practice.",
    heroImage:   "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920&q=80",
    intro1: "The Gaushala at Ma Sharanam Ashram is a sacred haven for desi (indigenous Indian) cows. In the Vedic tradition, the cow is revered as Gau Mata — and her protection is considered a form of divine service.",
    intro2: "Our cows are treated with love and respect. They graze on natural pasture, eat organic fodder, and are never subjected to cruelty or commercial exploitation. The Gaushala produces pure A2 milk and ghee for ashram use.",
    features: [
      { icon:"🐄", title:"Desi Cow Protection",  desc:"We protect native Indian breeds including Gir, Sahiwal, and Tharparkar — preserving their genetic heritage." },
      { icon:"🌾", title:"Natural Fodder",        desc:"Our cows eat only organic fodder and natural grass — no chemical feed or hormones." },
      { icon:"🫙", title:"Pure A2 Products",      desc:"Pure A2 milk and ghee are produced for ashram use, supporting health and spiritual practice." },
      { icon:"🌱", title:"Panchagavya Farming",   desc:"Cow dung and urine enrich the soil of our organic farm through Panchagavya preparations." },
      { icon:"🙏", title:"Gau Seva as Sadhana",   desc:"Volunteers and residents participate in Gaushala care as a form of daily spiritual practice." },
      { icon:"💰", title:"Sponsor a Cow",         desc:"You can sponsor the care of one cow. Contact us for details and sponsorship packages." },
    ],
    cowCount: "20+",           // UPDATE this number as your herd grows
    sponsorCta: "Sponsor a Gau Mata",
    sponsorLink: "donate.html",
  },

  // ── ORGANIC FARMING PAGE ─────────────────────────────────────
  organicFarming: {
    heroHeading: "Organic Farming",
    heroSub:     "Growing food the way nature intended — pure, chemical-free, and full of life.",
    heroImage:   "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1920&q=80",
    intro1: "At Ma Sharanam Ashram, we believe that the food we eat is the foundation of physical, mental, and spiritual health. Our organic farm produces fresh, chemical-free vegetables, grains, and herbs using traditional methods.",
    intro2: "The farm is enriched by our Gaushala through Panchagavya and composted cow dung — a completely natural and self-sustaining cycle that mirrors the ancient Vedic model of integrated living.",
    practices: [
      { icon:"🌱", title:"Zero Chemical Farming",  desc:"No pesticides, herbicides, or synthetic fertilizers are used. Ever." },
      { icon:"🐄", title:"Panchagavya Inputs",     desc:"Cow dung compost, jeevamrit, and panchagavya preparations nourish the soil naturally." },
      { icon:"💧", title:"Water Conservation",     desc:"Traditional water harvesting and efficient irrigation minimize water usage." },
      { icon:"🌾", title:"Heirloom Seeds",          desc:"We grow traditional desi varieties of vegetables and grains, preserving biodiversity." },
      { icon:"♻️", title:"Zero Waste Cycle",        desc:"All farm waste is composted and returned to the soil. Nothing is wasted." },
      { icon:"🧑‍🌾", title:"Community Farming",     desc:"Ashram residents, students, and volunteers participate in farming as a learning and seva activity." },
    ],
    produce: ["Vegetables (seasonal)", "Herbs & medicinal plants", "Grains & millets", "Fruits", "Cow-based products (ghee, paneer, curd)"],
    volunteerText: "Join us for a farming seva weekend — roll up your sleeves and reconnect with the earth. Contact us to register.",
  },

  // ── SATSANG PAGE ─────────────────────────────────────────────
  satsang: {
    heroHeading: "Satsang & Spiritual Programs",
    heroSub:     "Daily immersion in spiritual bliss — Yoga, Matri Vani, Yagna, and sacred community.",
    heroImage:   "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80",
    intro: "Ma Sharanam Ashram is alive with spiritual energy every single day. Whether you are a long-term resident, a weekend visitor, or joining us online — our programs are open to all sincere seekers.",
    programs: [
      {
        icon: "🔥",
        title: "Pooja, Yagna & Mantra Chanting",
        desc: "Daily pooja is performed at the temples within the ashram campus. A daily Yagna is conducted at the Kali temple, and Mantra Chanting takes place at the Shri Ma temple. Daily Nitnem and Bani are recited at Gurudwara Anand Sahib.",
      },
      {
        icon: "🧘",
        title: "Swakriya Yoga & Meditation",
        desc: "Daily yoga and meditation sessions are held at the ashram. Special residential retreats led by Swami Gurusharan are conducted periodically — an intensive inner journey for serious seekers.",
      },
      {
        icon: "🎶",
        title: "Matri Vani & Satsang",
        desc: "Every morning, Swami Gurusharan delivers Matri Vani — a heartfelt discourse on the divine teachings of Ma. This is broadcast live on our YouTube channel. Time-to-time, visiting saints also conduct beautiful Satsangs at the ashram.",
      },
      {
        icon: "📖",
        title: "Scripture Study",
        desc: "Regular group study of the Bhagavad Gita, Upanishads, and other sacred texts. Open to all residents and long-term guests.",
      },
      {
        icon: "🌕",
        title: "Special Festivals & Camps",
        desc: "Major Hindu festivals are celebrated with full devotion. Special camps and events are organized around Navaratri, Mahashivaratri, Guru Purnima, and other auspicious occasions.",
      },
    ],
    retreatHeading: "Join a Retreat",
    retreatText: "Residential retreats are organized periodically throughout the year, led by Swami Gurusharan. These are intensive programs combining yoga, meditation, scripture study, and community living. Accommodation and meals are provided.",
    retreatCta: "Contact Us to Register",
    retreatCtaLink: "contact.html",
    onlineHeading: "Watch Live on YouTube",
    onlineText:  "Can't visit in person? Daily Matri Vani by Swami Gurusharan is live on our YouTube channel every morning. Subscribe to receive notifications.",
    youtubeLink: "http://www.youtube.com/@masharanam",
  },

  // ── DONATE PAGE ──────────────────────────────────────────────
  donate: {
    heroHeading: "Support the Ashram",
    heroSub:     "Your donation sustains education, cow protection, organic farming, and daily seva.",
    ways: [
      { icon:"🐄", title:"Sponsor a Cow",          desc:"₹3,000/month covers the complete care of one Gau Mata in our Gaushala." },
      { icon:"📚", title:"Sponsor a Student",      desc:"₹1,500/month provides education and meals for one Gurukul student." },
      { icon:"🌱", title:"Support the Farm",        desc:"₹5,000 helps purchase organic seeds and tools for seasonal farming." },
      { icon:"🛕", title:"Temple Maintenance",      desc:"Contribute towards the upkeep and renovation of our sacred temple spaces." },
      { icon:"💊", title:"Medical Seva",            desc:"Support medical care for cows, students, and ashram residents in need." },
      { icon:"🏗️", title:"Infrastructure",         desc:"Help build new classrooms, dormitories, or expand the Gaushala facility." },
    ],
    indianHeading:  "For Indian Donors",
    indianDetails: [
      "Account Name:    Ma Sharanam Ashram",
      "Account Number:  [ADD YOUR BANK ACCOUNT NUMBER]",
      "IFSC Code:       [ADD YOUR IFSC CODE]",
      "Bank:            [ADD YOUR BANK NAME & BRANCH]",
      "UPI ID:          [ADD UPI ID]",
    ],
    foreignHeading:  "For Foreign Donors (FCRA)",
    foreignDetails: [
      "FCRA Registration No: 063300151R",
      "Account Name:         Ma Sharanam Ashram",
      "Account Number:       [ADD FCRA ACCOUNT NUMBER]",
      "IFSC Code:            [ADD FCRA IFSC CODE]",
      "Bank:                 [ADD FCRA BANK NAME & BRANCH]",
      "SWIFT Code:           [ADD SWIFT CODE]",
    ],
    taxNote: "Donations may be eligible for 80G tax exemption (for Indian donors). Please contact us for a donation receipt and 80G certificate.",
    financialReports: [
      { label:"Financial Year 2018-19", link:"https://masharanam.org/wp-content/uploads/2024/09/063300151R-1-FY-2018-19.pdf" },
      { label:"Financial Year 2019-20", link:"https://masharanam.org/wp-content/uploads/2024/09/063300151R-2-FY-2019-20.pdf" },
      { label:"Financial Year 2020-21", link:"https://masharanam.org/wp-content/uploads/2024/09/063300151R-3-2020-21.pdf" },
      { label:"Financial Year 2021-22", link:"https://masharanam.org/wp-content/uploads/2024/09/063300151R-4-FY-2021-22.pdf" },
      { label:"Financial Year 2022-23", link:"https://masharanam.org/wp-content/uploads/2024/09/063300151R-5-FY-2022-23.pdf" },
      { label:"Financial Year 2023-24", link:"https://masharanam.org/wp-content/uploads/2025/06/FC4-Form-2023-24.pdf" },
    ],
  },

  // ── CONTACT PAGE ─────────────────────────────────────────────
  contact: {
    heroHeading: "Get in Touch",
    heroSub:     "We welcome all inquiries about stays, retreats, admissions, donations, and volunteering.",
    formNote:    "We will respond to your message within 2–3 working days. For urgent matters, please call or WhatsApp us.",
    visitHeading: "Plan Your Visit",
    visitText:    "The ashram welcomes sincere seekers for day visits and residential stays. Please contact us in advance to arrange your visit. No walk-ins for overnight stays.",
    nearestCity:  "[Nearest City — e.g., Haridwar / Dehradun / Rishikesh]",    // UPDATE
    nearestRly:   "[Nearest Railway Station]",                                   // UPDATE
    nearestAirport: "[Nearest Airport]",                                         // UPDATE
    directions:   "[Add specific directions to reach the ashram from the nearest city here. E.g. Take NH-58 from Haridwar for 12 km, turn left at the banyan tree...]",
  },

  // ── MEMBERS PAGE (Login-protected) ──────────────────────────
  members: {
    heroHeading: "Members' Sacred Space",
    heroSub:     "Exclusive spiritual teachings and resources for registered members.",
    teachings: [
      {
        title:    "Matri Vani Archives — Volume I",
        date:     "Jan–Mar 2024",
        desc:     "Complete recordings of Swami Gurusharan's daily Matri Vani discourses from January to March 2024.",
        type:     "audio",
        locked:   false,
        // Replace with actual audio/video link when available
        link:     "https://www.youtube.com/@masharanam",
      },
      {
        title:    "Bhagavad Gita Study Notes",
        date:     "Ongoing",
        desc:     "Detailed study notes from the weekly scripture class led by Swami Gurusharan. All 18 chapters covered.",
        type:     "pdf",
        locked:   false,
        link:     "#",                          // replace with actual PDF link
      },
      {
        title:    "Swakriya Yoga Practice Guide",
        date:     "2023",
        desc:     "Step-by-step guide to the Swakriya Yoga practice as taught at the ashram. For members only.",
        type:     "pdf",
        locked:   false,
        link:     "#",                          // replace with actual PDF link
      },
      {
        title:    "Navaratri Sadhana Program 2024",
        date:     "Oct 2024",
        desc:     "The complete Navaratri sadhana program including daily practices, mantras, and guided meditations.",
        type:     "video",
        locked:   false,
        link:     "#",                          // replace with actual link
      },
    ],
  },
};

// Make available globally
window.SITE = SITE;
