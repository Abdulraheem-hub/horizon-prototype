# Horizon - Medical Testing Platform

A modern, multilingual medical testing platform built with Next.js 15, featuring comprehensive portal management for patients, physicians, laboratories, and administrators.

## 🌟 Features

- 🌍 **Multilingual Support**: English and Arabic with RTL support
- 🏥 **Multi-Portal Architecture**: Patient, Physician, Lab, and Admin portals
- 📱 **Responsive Design**: Modern UI with Tailwind CSS
- 🔐 **Authentication System**: Secure sign-in/sign-up flows
- 💳 **Payment Integration**: Test booking and payment processing
- � **Analytics Dashboard**: Comprehensive reporting and analytics

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl 4.3.4
- **UI Components**: Radix UI, Lucide React
- **Build Tool**: Turbopack
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
horizon-prototype/
├── src/
│   ├── app/
│   │   ├── [locale]/                    # Internationalized routes
│   │   │   ├── layout.tsx               # Locale-specific layout
│   │   │   ├── page.tsx                 # Homepage with navigation
│   │   │   ├── about/                   # About page
│   │   │   ├── contact/                 # Contact page
│   │   │   ├── tests/                   # Medical tests listing
│   │   │   ├── profile/                 # User profile
│   │   │   ├── rating/                  # Rating system
│   │   │   ├── auth/                    # Authentication
│   │   │   │   ├── signin/              # Patient sign-in
│   │   │   │   └── signup/              # Patient registration
│   │   │   ├── physician/               # Physician Portal
│   │   │   │   ├── layout.tsx           # Physician-specific layout
│   │   │   │   ├── dashboard/           # Physician dashboard
│   │   │   │   ├── referrals/           # Patient referrals
│   │   │   │   ├── reports/             # Medical reports
│   │   │   │   ├── signin/              # Physician authentication
│   │   │   │   ├── signup/              # Physician registration
│   │   │   │   └── support/             # Support system
│   │   │   ├── lab/                     # Laboratory Portal
│   │   │   │   ├── layout.tsx           # Lab-specific layout
│   │   │   │   ├── bookings/            # Test bookings
│   │   │   │   ├── communications/      # Lab communications
│   │   │   │   ├── payments/            # Payment management
│   │   │   │   ├── reports/             # Lab reports
│   │   │   │   └── signin/              # Lab authentication
│   │   │   ├── admin/                   # Admin Portal
│   │   │   │   ├── layout.tsx           # Admin-specific layout
│   │   │   │   ├── analytics/           # System analytics
│   │   │   │   ├── bookings/            # Booking management
│   │   │   │   ├── labs/                # Lab management
│   │   │   │   ├── reports/             # System reports
│   │   │   │   ├── signin/              # Admin authentication
│   │   │   │   └── users/               # User management
│   │   │   ├── booking/                 # Test booking flow
│   │   │   │   └── [testId]/            # Dynamic test booking
│   │   │   └── payment/                 # Payment processing
│   │   │       ├── [testId]/            # Payment for specific test
│   │   │       └── success/             # Payment confirmation
│   │   ├── globals.css                  # Global styles with RTL
│   │   └── layout.tsx                   # Root layout
│   ├── components/
│   │   ├── MobileMenu.tsx               # Mobile navigation
│   │   └── ui/                          # Reusable UI components
│   │       ├── button.tsx               # Button component
│   │       ├── card.tsx                 # Card component
│   │       ├── input.tsx                # Input component
│   │       └── textarea.tsx             # Textarea component
│   ├── i18n/
│   │   └── request.ts                   # Internationalization config
│   ├── lib/
│   │   └── utils.ts                     # Utility functions
│   └── middleware.ts                    # Route middleware
├── messages/
│   ├── en.json                          # English translations
│   └── ar.json                          # Arabic translations
├── designs/                             # Design system assets
│   ├── design.json                      # Design tokens
│   └── *.webp                           # Design references
├── public/                              # Static assets
└── package.json                         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abdulraheem-hub/horizon-prototype.git
   cd horizon-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Available Routes

### Public Routes
- `/` - Homepage with service overview
- `/en` or `/ar` - Localized homepage
- `/[locale]/tests` - Available medical tests
- `/[locale]/about` - About page
- `/[locale]/contact` - Contact information
- `/[locale]/auth/signin` - Patient sign-in
- `/[locale]/auth/signup` - Patient registration

### Portal Access
- `/[locale]/physician/signin` - Physician Portal Access
- `/[locale]/lab/signin` - Laboratory Portal Access  
- `/[locale]/admin/signin` - Admin Portal Access

### Protected Routes (Post-Authentication)
- **Physician Portal**: Dashboard, referrals, reports, support
- **Lab Portal**: Bookings, reports, communications, payments
- **Admin Portal**: User management, lab oversight, analytics, system reports

## 🎨 Design System

The project includes a comprehensive design system located in `/designs/design.json` with:
- Color palettes and themes
- Typography scales
- Spacing and layout tokens
- Component specifications
- Responsive breakpoints

## 🌍 Internationalization

- **Supported Languages**: English (en), Arabic (ar)
- **RTL/LTR Support**: Automatic layout direction
- **Translation Files**: Located in `/messages/`
- **Dynamic Switching**: Runtime language switching
- **URL Structure**: `/en/...` and `/ar/...`

## 📦 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🏗️ Architecture Overview

### Portal System
- **Patient Portal**: Test booking, profile management, results
- **Physician Portal**: Patient referrals, medical reports, dashboard
- **Lab Portal**: Test management, result uploads, communications
- **Admin Portal**: System oversight, user management, analytics

### Key Features
- **Multi-tenant Architecture**: Separate interfaces per user type
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized with Next.js 15 and Turbopack

## 🔧 Development

### Adding New Routes
1. Create page component in appropriate locale directory
2. Add translations to `/messages/en.json` and `/messages/ar.json`
3. Update navigation components if needed

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow RTL-compatible patterns
- Utilize design tokens from `/designs/design.json`
- Maintain responsive design principles

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🔗 Links

- **Repository**: [https://github.com/Abdulraheem-hub/horizon-prototype](https://github.com/Abdulraheem-hub/horizon-prototype)
- **Documentation**: See inline code comments and component documentation
- **Design System**: `/designs/design.json`

---

**Horizon Medical Testing Platform** - Streamlining healthcare through technology.
