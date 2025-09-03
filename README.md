# Uday Ayyagari Website - React.js Version

This is a React.js conversion of the Uday Ayyagari website (https://uday.info/), featuring the exact look, feel, and functionality of the original site.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **React Router**: Client-side routing for smooth navigation
- **TypeScript**: Full TypeScript support for better development experience
- **Modern UI**: Clean, professional design matching the original website
- **Interactive Components**: Hover effects, smooth transitions, and responsive navigation

## Pages

- **Home**: Hero section with executive profile and key statistics
- **About**: Detailed information about Uday's background and expertise
- **Media**: Speaking engagements and media presence
- **Insights**: Thought leadership articles with filtering
- **Portfolio**: Success stories and case studies
- **Contact**: Contact form and connection links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd F:\Aurus_Uday
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── *.css           # Component styles
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Media.tsx       # Media page
│   ├── Insights.tsx    # Insights page
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Contact.tsx     # Contact page
│   └── *.css           # Page styles
├── App.tsx             # Main app component
├── App.css             # Global styles
├── index.tsx           # App entry point
└── index.css           # Base styles
```

## Customization

The website is designed to be easily customizable:

- **Colors**: Update CSS variables in component files
- **Content**: Modify text content in the respective component files
- **Styling**: Adjust CSS properties to match your preferences
- **Functionality**: Add new features or modify existing ones

## Deployment

To build for production:

```bash
npm run build
```

The build folder will contain the production-ready files that can be deployed to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes. Please respect the original website's content and design.
