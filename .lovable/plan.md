

# Md. Atiqur Rahman — Portfolio Website

## Overview
A clean, professional single-page portfolio website showcasing Atiqur's multidisciplinary background in banking, research, data analysis, environmental economics, and HRM. Includes a working contact form that sends emails via Resend.

---

## Sections

### 1. Hero Section
- Professional photo (uploaded image)
- Name: **Md. Atiqur Rahman**
- Tagline highlighting key roles: Banking Professional | Research Assistant | Environmentalist | Data Analyst | HRM | Economic Policy Analyst
- Location: Dhaka, Bangladesh
- CTA button scrolling to contact form

### 2. About Me
- Brief professional summary drawn from CV — multidisciplinary background in economics, research, and banking
- Key highlights: University of Dhaka graduate, BRAC International research experience, teaching, data analysis

### 3. Experience
- **Happycoders** — Teaching Assistant (Sep 2022 – Present)
- **Growing Together** — Research Assistant, reporting to BRAC International country director (Jan 2023 – Nov 2023)
- **DataSense** — Interviewer

### 4. Education
- Bachelor of Economics in Environmental and Resource Economics, University of Dhaka (CGPA 3.16/4.00)
- HR for People Managers Specialization, University of Minnesota
- HSC & SSC with GPA 5.0

### 5. Skills & Certifications
- Technical: MS Office, SPSS, Stata, Data Analysis, Research
- Soft: Critical Thinking, Risk Management, Project Management, Communication
- Languages: Bangla (native), English (proficient), French (beginner)
- IELTS Band 6.5
- Trainings: Disaster Management, Digital Marketing, British Council Active Citizen

### 6. Contact Form (with Resend integration)
- Fields: Name, Email, Subject, Message
- Sends email directly to atiqur.mdrahman96@gmail.com via a Lovable Cloud edge function using the Resend API
- Success/error toast notifications
- Input validation with Zod

---

## Design
- Clean, modern, professional aesthetic with a navy blue and white color scheme (banking-inspired)
- Smooth scroll navigation with a sticky top navbar
- Fully responsive (mobile-friendly)
- Subtle animations on scroll

## Backend (Lovable Cloud)
- One edge function: `send-contact-email` — receives form data, validates it, and sends email via Resend API
- Resend API key stored securely as a secret

