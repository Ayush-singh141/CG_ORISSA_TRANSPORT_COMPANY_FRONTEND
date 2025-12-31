<div align="center">

  # 🚛 C.G. ORISSA TRANSPORT
  ### Official Client-Side Application

  <p>
    A high-performance logistics platform bridging Uttar Pradesh, Chhattisgarh, and Odisha.<br>
    Built with modern web technologies for speed, reliability, and scale.
  </p>

  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://www.framer.com/motion/">
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </a>
  <a href="https://www.emailjs.com/">
    <img src="https://img.shields.io/badge/EmailJS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="EmailJS" />
  </a>

  <br />
  <br />

  [**Explore the Docs**](https://nextjs.org/docs) · [**Report Bug**](https://github.com/yourusername/repo/issues) · [**Request Feature**](https://github.com/yourusername/repo/issues)
</div>

---

## ⚡ About The Project

This repository contains the frontend source code for the **C.G. Orissa Transport Co.** official website. The application is designed to serve as the digital storefront for the company's logistics operations, featuring real-time route maps, service catalogs, and instant booking inquiries.

### Key Features
* **🎨 Industrial Aesthetic:** Custom Black, White, and Neon Green (`#39FF14`) design system.
* **🚀 High Performance:** Server-Side Rendering (SSR) via Next.js for optimal SEO and load speeds.
* **✨ Interactive UI:** Smooth animations using Framer Motion for a premium user experience.
* **📨 Serverless Contact:** Integrated EmailJS for handling quotes and inquiries directly from the frontend.
* **📱 Fully Responsive:** Mobile-first approach for drivers and clients on the go.

---

## 🛠️ Tech Stack

This project is built using the **MERN** ecosystem standards (Frontend focused):

* **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome 5 / Material)
* **Email Service:** [EmailJS](https://www.emailjs.com/) (Client-side SMTP)

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js 18.17 or later
* npm / yarn / pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/cg-orissa-transport.git](https://github.com/yourusername/cg-orissa-transport.git)
    cd cg-orissa-transport
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables**
    Create a `.env.local` file in the root directory and add your EmailJS keys:
    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
├── app/                  # Next.js App Router
│   ├── about/            # About Page
│   ├── contact/          # Contact Page (Form Logic)
│   ├── network/          # Network & Routes Page
│   ├── services/         # Services Page
│   ├── layout.js         # Root Layout (Navbar/Footer)
│   └── page.js           # Home Page
├── components/           # Reusable UI Components
│   ├── Navbar.js         # Responsive Navigation
│   └── ...
├── public/               # Static Assets (Images, Icons)
├── styles/               # Global Styles
└── tailwind.config.js    # Design System Config
