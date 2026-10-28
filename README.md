# Shashwat Multi-Speciality Hospital — Official Website

> A premium, modern, professional, fully responsive hospital website for **Shashwat Multi-Speciality Hospital** in Savedi, Ahilyanagar (Ahmednagar), Maharashtra. Built with React 19, TypeScript, Tailwind CSS v4, and Vite.

---

## 🏥 Hospital Overview & Verified Details

- **Hospital Name:** Shashwat Multi-Speciality Hospital
- **Address:** Nagar–Manmad Road, Near Naik Hospital, Kaman, Savedi Gaon, Ahilyanagar (Ahmednagar) - 414003, Maharashtra, India
- **24x7 Emergency Helpline:** `+91 98679 87698`
- **Reception Telephone:** `(0241) 2427949`
- **Official Email:** `shashwathospital2025@gmail.com`
- **Operating Hours:**
  - Emergency & Casualty: Open 24 Hours / 7 Days
  - In-House Pharmacy: 24 Hours / 7 Days
  - ICU & Critical Care: 24 Hours / 7 Days
  - OPD Consultation Timings: Mon – Sat: 10:00 AM – 02:00 PM & 05:00 PM – 09:00 PM

### Verified Consultant Medical Faculty:
1. **Dr. Deepak Kalamkar** – MBBS, D.Ortho (Consultant Orthopedic & Joint Replacement Surgeon)
2. **Dr. Yogita Darekar Pawar** – MBBS, MS (OBGY) (Consultant Obstetrician & Gynecologist, High-Risk Pregnancy Specialist)
3. **Dr. Vishwajit Pawar** – MBBS, MS (General Surgery), FIAGE, FMAS (Consultant Laparoscopic & General Surgeon)
4. **Dr. Apoorva Mate-Kalamkar** – MBBS, MS (OBGY) (Consultant Gynecologist & Infertility Specialist)
5. **Dr. Akash Berad** – MBBS, MD, DNB (Medicine), FICN (Nephrologist, Kidney Disease & Dialysis Specialist)
6. **Dr. Pradeep Kanthali** – Consultant Physician, Diabetologist & Critical Care Specialist

---

## ✨ Features & Architecture

1. **Emergency Announcement Strip**: High-visibility top banner displaying the verified 24/7 casualty helpline (`+91 98679 87698`) and Savedi location.
2. **Sticky Header**: Hospital wordmark, clean single-line navigation links, and "Book Appointment" primary call to action.
3. **High-Impact Hero Section**: Value proposition, dual CTAs ("Book Doctor Appointment" and "Emergency Call"), and key statistics.
4. **Quick-Access Action Cards**: Fast navigation for Emergency, OPD, Diagnostics, and Online Appointment booking.
5. **About Shashwat Hospital**: Verified institutional history, clinical values, and embedded video tour.
6. **Complete Verified Services Section**: Category filter tabs, search bar, deep-dive detail modal, and direct booking trigger.
7. **Clinical Departments & Specialties**: Orthopaedics, Gynaecology, Laparoscopic Surgery, Nephrology & Dialysis, General Medicine, and Radiology.
8. **Consultant Doctors**: Verified qualifications, specialization, OPD schedules, and direct consultation booking.
9. **Hospital Infrastructure**: Modular Operation Theatre with laminar flow, ICU with mechanical ventilators, dedicated haemodialysis unit, patient rooms, and 24x7 ambulance.
10. **Diagnostics & Laboratory**: Digital high-frequency X-Ray, 2D Echocardiography, computerized 12-lead ECG, and automated clinical pathology testing.
11. **Appointment Process**: 4-step patient journey guide.
12. **Cashless Mediclaim & TPA Facilities**: Document checklist, guidelines for planned vs. emergency admission, and accepted network partners (Star Health, Care Health, HDFC ERGO, ICICI Lombard, Medi Assist, Vidal Health, etc.).
13. **Hospital Photo Gallery**: Category filterable gallery with full image lightbox modal.
14. **Frequently Asked Questions (FAQ)**: Interactive accordion answering patient queries.
15. **Location, Map & Contacts**: Address, interactive Google Map embed, direct driving directions button, contact emails, and phone numbers.
16. **Footer with Medical Disclaimer**: Hospital links, operating schedule, and mandatory clinical emergency disclaimer.
17. **Floating Action Triggers**: Floating WhatsApp button with pre-formatted message, click-to-call helpline, and back-to-top button.
18. **Mobile Bottom Action Bar**: Slim sticky bottom bar on mobile (<15% viewport height) for Call, Directions, and Appointment.
19. **Appointment Enquiry System**: Validated booking form with instant reference ID generation and 1-click WhatsApp forwarding.
20. **SEO & Structured Data**: OpenGraph tags, Twitter cards, `robots.txt`, `sitemap.xml`, and Google Schema.org `Hospital` JSON-LD.

---

## 🛠️ Tech Stack

- **Framework:** React 19 (Functional components, Hooks)
- **Language:** TypeScript 5+ (Strict typing)
- **Build Tool:** Vite 6+
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Design System:** Clean white canvas, medical navy `#0369A1` / `#0F172A`, teal accents `#0D9488`, zero-pill typographic discipline, responsive mobile-first layouts.

---

## 📁 Project Structure

```
├── public/
│   ├── robots.txt              # Search engine crawler instructions
│   └── sitemap.xml             # Search engine URL index
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── EmergencyStrip.tsx    # 24/7 announcement bar
│   │   │   ├── Header.tsx            # Sticky navigation bar
│   │   │   ├── Footer.tsx            # Footer & clinical disclaimer
│   │   │   ├── FloatingActions.tsx   # WhatsApp, Call & Back-to-top
│   │   │   ├── MobileBottomBar.tsx   # Mobile sticky action bar
│   │   │   └── SmartImage.tsx        # Resilient image component with CSS fallback
│   │   ├── home/
│   │   │   ├── Hero.tsx              # Hero banner with primary CTAs
│   │   │   ├── QuickAccessCards.tsx  # 4 quick action cards
│   │   │   ├── AboutSection.tsx      # Hospital background & video tour
│   │   │   ├── ServicesSection.tsx   # Filterable services cards & search
│   │   │   ├── DepartmentsSection.tsx# Clinical divisions & lead doctors
│   │   │   ├── DoctorsSection.tsx    # Verified doctor profiles & OPD timings
│   │   │   ├── FacilitiesSection.tsx # Modular OT, ICU, dialysis & rooms
│   │   │   ├── DiagnosticsSection.tsx# Digital X-Ray, Echo & pathology lab
│   │   │   ├── AppointmentProcess.tsx# 4-step patient guide
│   │   │   ├── InsuranceSection.tsx  # Cashless TPA & mediclaim support
│   │   │   ├── GallerySection.tsx    # Photo gallery & lightbox modal
│   │   │   ├── FaqSection.tsx        # Interactive accordion FAQ
│   │   │   └── LocationSection.tsx   # Google Map & contact info
│   │   └── modals/
│   │       ├── AppointmentModal.tsx  # Validated appointment booking form
│   │       └── ServiceDetailModal.tsx# Clinical service detail view
│   ├── data/
│   │   ├── hospitalData.ts     # Verified contact, hours, insurance & FAQs
│   │   ├── doctorsData.ts      # Doctor profiles & schedules
│   │   ├── servicesData.ts     # Medical services & departments
│   │   ├── facilitiesData.ts   # Infrastructure & diagnostic tests
│   │   └── galleryData.ts      # Photo gallery items
│   ├── types/
│   │   └── index.ts            # TypeScript definitions
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global Tailwind CSS styles
│   └── main.tsx                # React entry point
├── index.html                  # HTML entry with OpenGraph & Schema.org JSON-LD
├── metadata.json               # Applet metadata
├── package.json                # Dependencies & build scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Documentation
```

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/shashwat-hospital.git
   cd shashwat-hospital
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` or the port shown in your terminal.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 GitHub & Vercel Deployment Instructions

### Deploy to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Shashwat Multi-Speciality Hospital Website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Deploy to Vercel (Recommended):
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New"** > **"Project"**.
3. Import your GitHub repository (`shashwat-hospital`).
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**. Your website will be live in under 60 seconds with an SSL certificate and global CDN!

---

## 📝 Updating Hospital Content

All hospital content is organized cleanly in `src/data/`:
- **Change Doctors & Timings:** Edit `src/data/doctorsData.ts`
- **Add or Edit Medical Services:** Edit `src/data/servicesData.ts`
- **Update Contact Numbers, Address, or FAQs:** Edit `src/data/hospitalData.ts`
- **Update Facilities & Diagnostic Tests:** Edit `src/data/facilitiesData.ts`
- **Add Gallery Photos:** Edit `src/data/galleryData.ts`

---

## ⚖️ License & Disclaimer

- **License:** Apache-2.0
- **Medical Notice:** Medical content is provided for informational and patient coordination purposes only. For life-threatening emergencies, call `+91 98679 87698` immediately.
