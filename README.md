# 🍕 Pizza App Landing Page

A modern, responsive pizza restaurant landing page built with Next.js, featuring a beautiful UI with smooth animations and user authentication capabilities.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean and intuitive interface with smooth animations
- **User Authentication**: Firebase-powered sign-in and sign-up functionality
- **Interactive Menu**: Browse through delicious pizza options
- **Contact Form**: Get in touch with the restaurant
- **Profile Management**: User account management system
- **Shopping Cart**: Add pizzas to cart functionality
- **Smooth Animations**: Framer Motion powered transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.2
- **Language**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Authentication**: Firebase
- **Icons**: Lucide React
- **UI Components**: Radix UI + Custom Components

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd pizza-app-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add your Firebase configuration:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
pizza-app-landing-page/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.jsx        # Home page
│   │   ├── layout.jsx      # Root layout
│   │   ├── globals.css     # Global styles
│   │   ├── data.js         # Pizza menu data
│   │   ├── about/          # About page
│   │   ├── cart/           # Shopping cart
│   │   ├── contact/        # Contact page
│   │   ├── menus/          # Menu page
│   │   ├── profile/        # User profile
│   │   ├── signin/         # Sign in page
│   │   └── signup/         # Sign up page
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components
│   │   ├── HeroArea.jsx   # Hero section
│   │   ├── FoodItem.jsx   # Pizza item component
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Footer component
│   │   └── ...            # Other components
│   ├── context/           # React context providers
│   ├── firebase/          # Firebase configuration
│   └── lib/              # Utility functions
├── public/               # Static assets
│   ├── pizza-hero.png   # Hero image
│   ├── contact.jpg      # Contact background
│   ├── about.jpg        # About background
│   └── logo.svg         # Logo
└── package.json         # Dependencies and scripts
```


## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by modifying:
- `src/app/globals.css` - Global styles
- Component-specific classes in each component file

### Content
- Update pizza menu in `src/app/data.js`
- Modify hero content in `src/components/HeroArea.jsx`
- Update about section in `src/components/About.jsx`

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Firebase](https://firebase.google.com/) for authentication and backend services
- [Lucide React](https://lucide.dev/) for beautiful icons



Made with ❤️ and 🍕 by Mehrab Ahsan Shovon
