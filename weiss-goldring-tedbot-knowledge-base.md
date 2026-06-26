# Weiss & Goldring / TedBot — Complete Website Knowledge Base

Everything extracted from the GitHub repo `Founditmarketing/weiss-goldring-vercel`
(the live TedBot site). This is the full content brain-dump: business facts, brand
knowledge, products, services, copy, chatbot persona, and behaviors. Use it as the
source of truth for any AI agent (Voiceflow chat, Vapi voice, etc.).

---

## 1. The Business

- **Name:** Weiss & Goldring
- **Established:** 1899 (over 125 years in business)
- **Tagline / brand line:** "The Silver Standard" • Est. 1899
- **What it is:** The premier destination for luxury menswear and fine tailoring in
  Central Louisiana — "clothing that rivaled the finest establishments in New York or London."
- **Schema type:** MensClothingStore
- **Address:** 3601 Masonic Drive, Alexandria, LA 71301
- **Phone:** (318) 443-9200  (tel:+13184439200)
- **Website:** https://www.weissgoldring.com
- **Instagram:** https://www.instagram.com/weissgoldring/
- **Facebook:** https://www.facebook.com/WeissGoldring/
- **Booking (Calendly):** https://calendly.com/kylan-founditmarketing/private-fitting

### Hours
- Monday – Friday: 10:00 AM – 6:00 PM
- Saturday: 10:00 AM – 5:00 PM
- Sunday: Closed
- Appointments booked in **30-minute intervals** only.

### SEO / meta descriptions (site copy)
- "Weiss & Goldring | Luxury Menswear & Fine Tailoring in Alexandria, LA"
- "Serving Alexandria's gentlemen for over a century with fine tailoring, luxury menswear,
  Castangia suits, and personal attention."
- "Serving Alexandria's gentlemen since 1899 with fine tailoring, Castangia suits, custom
  shirts, and personal style concierge services."

### Heritage story (from Heritage page)
- "Since 1899" — "For over 125 years, Weiss & Goldring has been the standard-bearer for
  style in Central Louisiana."
- "In 1899, Weiss & Goldring opened its doors in Alexandria, establishing a foundation built
  on integrity, quality, and service. From the very beginning, the goal was simple yet
  ambitious: to provide the gentlemen of Louisiana with clothing that rivaled the finest
  establishments in New York or London."
- "Ted's vision has transformed the store into a destination that celebrates the art of living
  well. From moving to our current, elegant location on Masonic Drive to curating exclusive
  partnerships with world-renowned brands like Castangia and Matteo Perin, the commitment
  remains unchanged: to offer an experience that is as exceptional as the clothing itself."

### Enduring values
- **Service** — personal, attentive, white-glove.
- **Quality** — "Uncompromising standards. If it's in our store, it is the best of its kind."
- **Community** — "Proudly serving Alexandria and Central Louisiana for over a century."

---

## 2. Ted Silver — The Owner & Expert

- Owner and master clothier of Weiss & Goldring.
- "In a world of fast fashion, Ted stands as a guardian of sartorial excellence. With decades
  of experience, his gift isn't just in knowing measurements, but in understanding men."
- "Generous with his time and expertise, a fitting with Ted is more than a transaction — it's
  an education in style and a boost to your confidence. He curates Weiss & Goldring with a
  singular vision: to help every man who walks through the door look and feel his absolute best."
- **Ted's quote / philosophy:** "Style is personal. It is the outward expression of your inner
  character. My job is simply to help you articulate it clearly."

---

## 3. The Chatbot — "TedBot" / Ted Silver AI

- **Names used on site:** "TedBot," "Ted Silver" (avatar), the "Personal Concierge,"
  "Style Concierge." Tooltip text: "Personal Style Consultation — Direct To TedBot" and
  "The Silver Standard — Established 1899."
- **Greeting (fallback):** "I am TedBot, your personal concierge. It would be my distinct
  pleasure to offer you a personal style consultation. How may I assist you today?"
- **Tech:** Live chat is powered by **Voiceflow** (proxied via `/api/chat`, env
  `VOICEFLOW_API_KEY`). A secondary **Gemini** style-advice helper also exists.

### Persona & tone
- Sophisticated, warm, helpful, concise; knowledgeable about high-end fashion.
- Old-world, sartorial voice. Signature phrasing:
  - Error/stall: *"I apologize, but I need to step into the tailoring room for a moment. Please
    try again shortly."* / *"my tailoring room is unusually busy right now."*
  - Thinking indicator: *"Tailoring your advice."*
- Gemini helper persona is named **"Alexander"** — "the digital concierge for Weiss & Goldring,
  a luxury menswear store in Alexandria, LA. Tone is sophisticated, warm, helpful, and concise."

### Gemini system instruction (verbatim from `geminiService.ts`)
> You are "Alexander", the digital concierge for Weiss & Goldring, a luxury menswear store in
> Alexandria, LA. Your tone is sophisticated, warm, helpful, and concise. You are knowledgeable
> about high-end fashion. The store owner is Ted, a gifted and experienced clothier. Key brands:
> Castangia 1850, Matteo Perin, Bugatchi, Fedeli, Baccarat. The user is asking for style advice
> or has an upcoming event. 1. Briefly analyze their need. 2. Suggest a general direction (e.g.,
> "A midnight blue tuxedo by Castangia would be striking..."). 3. Always encourage them to book
> a fitting with Ted for the final perfect fit. Keep the response under 100 words.

### Chatbot capabilities (from the Voiceflow trace handling)
- Text replies, choice **buttons**, and **carousels** (lookbooks of product cards).
- **Calendar picker** for booking — validates: Mon–Fri 10–6, Sat 10–5, Sun closed, 30-min slots.
  Out-of-hours error message: *"I do apologize, it appears my calendar is either already spoken
  for at that moment, or it falls outside of our standard operating hours. As a reminder, we are
  here Monday through Friday from 10 AM to 6 PM, and Saturday from 10 AM to 5 PM. What other day
  and time might suit your schedule?"*
- **Calendly popup** booking (`open_calendly`).
- **Page redirects / navigation** to site sections (heritage, brands, the Ted section, product pages).
- **UI highlight** of on-page elements, and **map / directions** redirect.

---

## 4. Brands Carried

### Marquee brands (featured)
| Brand | Heritage | Description |
|---|---|---|
| **Castangia 1850** | Since 1850 | The epitome of Italian sartorial tradition. Handmade suits that breathe history and excellence. |
| **Matteo Perin** | Contemporary Bespoke | Bespoke lifestyle design. Not just clothing, but an expression of personal luxury. |
| **Bugatchi** | Modern Luxury | Modern sophistication meets comfort. The perfect balance for the contemporary gentleman. |
| **Fedeli** | Made in Italy | Exquisite cashmere and knitwear. Texture and warmth refined to their highest forms. |
| **Baccarat** | Since 1764 | The crystal of kings. Elevating your lifestyle with the world's finest accessories. |

### Full brand list by category
- **Fine Tailoring & Clothing:** Castangia 1850, Canali, Jack Victor, Rochester Tailored
  Clothing, Scabal
- **Luxury Sportswear:** Bugatchi, Fedeli, Greyson, Johnnie-O, Stenströms, Giannetto,
  Matteo Perin, Castangia, Di Bello
- **Trousers & Denim:** Meyer, Ballin, Marco Pescarolo, Castangia, B Settecento, Paige, Malcom
- **Footwear & Accessories:** On Running, Magnanni, Santoni, Officine Creative, ONCEPT-NYC
- **Accessories:** W. Kleinberg, G. Inglese, Castangia, Matteo Perin

---

## 5. Castangia Collection (detailed product pages)

Collection headline: **"The Pinnacle of Italian Craftsmanship"** — "Explore our curated
selection of Super 180's wool suits, blazers, and formalwear. Each garment is a testament to
over a century of uncompromising sartorial excellence." Every item includes **Complimentary
Alterations**.

| Product | Fabric | Style # | Model | Tags | Description |
|---|---|---|---|---|---|
| **Grey Sharkskin Suit** | Super 180's Sharkskin (Wool) | 47667/003 | Y211/133 | Business, Formal | Command attention with the subtle texture and timeless elegance of sharkskin. Crafted from premium Super 180's wool, a sophisticated grey hue that is versatile and distinctive. |
| **Navy Blazer** | Super 180's 100% Wool | 48319/005 | Y211 | Sportcoat, Business Casual | A staple for the modern gentleman's wardrobe. Unparalleled drape and lightweight feel. Perfect from boardroom meetings to evening dinners. |
| **Navy Suit** | Super 180's Wool | 13479/005 | YZ11/133 | Business, Formal | The cornerstone of classic menswear. Quintessential navy suit with unparalleled Italian construction and luxurious Super 180's wool — sharp in any professional or formal setting. |
| **Black Suit** | Super 180's Wool | 49338/008 | Y211/133 | Formal, Eveningwear | Sleek, powerful, undeniably elegant. A masterful silhouette cut from ultra-fine Super 180's wool. Essential for evening events and solemn occasions. |
| **Tuxedo** | Super 180's Wool | 13479/008 | Y711/133 | Black Tie, Wedding, Gala | Black tie perfection. Exquisite detailing and the luxurious comfort of Super 180's wool — be the best-dressed man in the room at your next gala or formal event. |

(Note: page intros mention "Super 130's wool" in a couple of legacy descriptions, but specs
and tags consistently list **Super 180's** — treat Super 180's as authoritative.)

---

## 6. Services — "The Art of Appointment"

Three-step personal process:
1. **The Consultation** — "We begin with a conversation. Understanding your lifestyle, your
   needs, and the statement you wish to make."
2. **The Selection** — "Choose from the world's finest fabrics and brands. Castangia, Bugatchi,
   Matteo Perin — curated by Ted."
3. **The Fitting / Tailoring** — "Precision tailoring ensures your garment doesn't just fit your
   body, but enhances your presence."

---

## 7. Occasions — "Dressing for the Moment" / The Lifestyle

- **Black Tie & Formal** — "For the moments that matter most. Exquisite tuxedos and dinner jackets."
- **Executive Business** — "Command the room with power suits tailored to your exact specifications."
- **Luxury Leisure** — "Sophisticated comfort for the weekend. Cashmere knits and refined denim."

---

## 8. Appointment / Lead Capture (Appointment Modal)

- Modal tagline: "The difference between being dressed and well dressed."
- **Fields collected:** First Name, Last Name, Email Address, Phone Number, "I am interested in",
  Preferred Date, and a free-text note ("Tell us about your needs or specific brands you are
  interested in...").
- **"I am interested in" options:** Bespoke Suit • Wardrobe Refresh • Special Event • Alterations
- Shows store availability (Mon–Fri 10–6, Sat 10–5).
- Confirmation state: "Request Received."

---

## 9. Merchandise Page copy

- Section title: "Our Merchandise" / "The Collection"
- Categories shown: Fine Tailoring & Clothing • Luxury Sportswear • Trousers & Denim •
  Footwear & Accessories
- CTA: "Experience the Quality"

---

## 10. Testimonials (Google Reviews on site)

- "Ted Silver runs the finest men's store in Louisiana. The selection is incredible, but the
  service is what keeps you coming back. A true gentleman's experience." — Christopher H.
- "Excellent service and quality. Ted has a way of knowing exactly what fits and looks good on
  you. I wouldn't buy a suit anywhere else." — David M.
- "Hands down the best place to shop for men's clothing in Alexandria. The attention to detail
  and alterations are perfect every time." — Jason B.
- "Wonderful experience. They took the time to make sure my wedding tuxedo was absolutely
  perfect. Highly recommended!" — Michael P.

---

## 11. Other site copy & structure

- **Hero:** "Well Dressed" theme; "The difference between being dressed and well dressed."
- **Navigation:** Heritage (#heritage) • Store Merchandise (#brands) • The Expert (#ted)
- **Newsletter:** "The Gentleman's List — Join the Inner Circle."
- **Brand showcase:** "Curated Excellence — Store Merchandise" / "View Collection."
- **Pages/routes:** home, heritage, brands (merchandise), ted, privacy, castangia (collection),
  and product pages: castangia-blazer, castangia-sharkskin, castangia-navy-suit,
  castangia-black-suit, castangia-tuxedo.
- **Privacy:** The site has a full Privacy Policy. Notably, it discloses that **Style Concierge
  chat conversations are collected and stored** (preferences, sizing, contact details) and may be
  processed by authorized third-party AI partners.

---

## 12. Quick-reference data card (for any AI agent)

```
Business:  Weiss & Goldring — luxury menswear & fine tailoring, Est. 1899
Location:  3601 Masonic Drive, Alexandria, LA 71301
Phone:     (318) 443-9200
Hours:     Mon–Fri 10am–6pm | Sat 10am–5pm | Sun closed | 30-min appt slots
Owner:     Ted Silver, master clothier
Goal:      Book a private fitting / consultation with Ted
Top brands: Castangia 1850, Matteo Perin, Bugatchi, Fedeli, Baccarat
Signature: handmade Castangia Super 180's wool suits & tuxedos; complimentary alterations
Persona:   sophisticated, warm, concise; "step into the tailoring room"; "tailoring your advice"
Booking:   calendly.com/kylan-founditmarketing/private-fitting
```

---

### Note on the one thing not in GitHub
The chatbot's full scripted **question-and-answer dialogue tree** lives inside the **Voiceflow**
project (the repo only proxies to it). Everything else the site contains — persona, tone, all
business facts, brand knowledge, products, services, copy, and behaviors — is captured above. To
get the exact scripted Q&A, export the Voiceflow project transcripts and I can fold them in.
```
