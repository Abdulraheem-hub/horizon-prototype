# Horizon Prototype - Multilingual Next.js Application

A modern Next.js application with internationalization support for English and Arabic languages, built with TypeScript and Tailwind CSS.

## Features

- 🌍 **Multilingual Support**: Supports English and Arabic languages
- 🔄 **Dynamic Language Switching**: Switch between languages with a single click
- 📱 **RTL Support**: Proper Right-to-Left support for Arabic text
- 🎨 **Modern UI**: Built with Tailwind CSS for responsive design
- ⚡ **Next.js 15**: Latest Next.js features with App Router
- 🔧 **TypeScript**: Full TypeScript support for better development experience
- 🌙 **Dark Mode**: Supports both light and dark themes

## Technologies Used

- **Next.js 15.4.5** - React framework with App Router
- **next-intl** - Internationalization library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React version

## Project Structure

```
horizon-prototype/
├── src/
│   ├── app/
│   │   ├── [locale]/              # Locale-specific routes
│   │   │   ├── layout.tsx         # Locale layout with i18n provider
│   │   │   ├── page.tsx           # Home page
│   │   │   ├── about/
│   │   │   │   └── page.tsx       # About page
│   │   │   └── contact/
│   │   │       └── page.tsx       # Contact page
│   │   ├── globals.css            # Global styles with RTL support
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Root page (redirects to /en)
│   ├── i18n/
│   │   └── request.ts             # i18n configuration
│   └── middleware.ts              # Next.js middleware for locale routing
├── messages/
│   ├── en.json                    # English translations
│   └── ar.json                    # Arabic translations
└── next.config.ts                 # Next.js configuration with i18n plugin
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd horizon-prototype
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Internationalization

### Supported Languages

- **English (en)** - Default language
- **Arabic (ar)** - RTL support enabled

### URL Structure

- `/` - Redirects to `/en`
- `/en` - English version
- `/ar` - Arabic version
- `/en/about` - English about page
- `/ar/about` - Arabic about page

### Adding New Languages

1. Add the language code to the `locales` array in:
   - `src/middleware.ts`
   - `src/i18n/request.ts`
   - `src/app/[locale]/layout.tsx`

2. Create a new translation file in `messages/{language}.json`

3. Update the language switcher in your components

### Adding New Translations

Edit the translation files in the `messages/` directory:

- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations

Example structure:
```json
{
  "title": "Page Title",
  "navigation": {
    "home": "Home",
    "about": "About"
  },
  "content": {
    "welcome": "Welcome message"
  }
}
```

## RTL Support

The application automatically applies RTL (Right-to-Left) layout for Arabic:

- Text direction is set to RTL
- CSS styles are adapted for RTL layout
- Navigation and forms work correctly in RTL mode

## Dark Mode

The application supports both light and dark themes based on system preferences. Tailwind CSS dark mode classes are used throughout the application.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.
