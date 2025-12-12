# Screen Time Journey - Shopify Headless Integration

A modern Next.js application designed for seamless integration with Shopify's headless commerce platform. Built with TypeScript, Tailwind CSS, and modular component architecture.

## 🚀 Features

### ✅ **Complete Modular Component System**
- **Reusable UI Components**: Header, Footer, ScrollingBanner, ImageWithText
- **E-commerce Ready**: Product grids, shopping cart, checkout flow components
- **Milestone & Leaderboard**: Custom engagement widgets from Shopify theme
- **Responsive Design**: Mobile-first approach with tablet and desktop optimizations

### ✅ **Professional Tech Stack**
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom component styles
- **State Management**: Redux Toolkit for cart and product state
- **Performance**: Optimized images, lazy loading, SEO-ready

### ✅ **Shopify Integration Ready**
- **Headless Architecture**: Prepared for Shopify Storefront API
- **Product Components**: Grid, cards, quickview, filtering
- **Cart Management**: Add to cart, quantity updates, checkout flow
- **Customer Features**: Authentication, accounts, order history

## 📱 Responsive Design

| Device | Layout | Features |
|--------|---------|----------|
| **Mobile** | Stacked, touch-optimized | Hamburger menu, optimized spacing |
| **Tablet** | Hybrid layout | Side-by-side buttons, 40px margins |
| **Desktop** | Full grid system | Complete navigation, hover effects |

## 🎨 Key Components

### **HomePage** (`/src/components/Home/`)
- **Hero Section**: Dynamic image banners with CTAs
- **Scrolling Banner**: Infinite scroll with customizable speed
- **Image With Text**: About sections with dual CTAs
- **Milestone Preview**: Level 0 & 10 cards with gender switching
- **Leaderboard Preview**: Top 3 performers in podium style

### **Headers** (`/src/components/Common/`)
- **HomeHeader**: Transparent header with logo animations
- **DefaultHeader**: Standard header for other pages
- **Mobile Menu**: Slide-out navigation with smooth animations

### **E-commerce** (`/src/components/Shop/`, `/Cart/`, `/Checkout/`)
- **Product Grid/List**: Multiple layout options
- **Shopping Cart**: Full cart management with Redux
- **Checkout Flow**: Multi-step with payment integration
- **Wishlist**: Save for later functionality

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/merijnkok959595/screentimejourney-nextjs-headless.git
cd screentimejourney-nextjs-headless

# Install dependencies
cd template_boiler
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔗 Shopify Integration

### **Next Steps for Headless Commerce**

1. **Install Shopify Dependencies**
   ```bash
   npm install shopify-buy @shopify/storefront-api-client
   ```

2. **Configure Storefront API**
   ```typescript
   // lib/shopify.ts
   import Client from 'shopify-buy'
   
   const client = Client.buildClient({
     domain: 'screentimejourney.myshopify.com',
     storefrontAccessToken: 'your-token'
   })
   ```

3. **Connect Existing Components**
   - Product components are ready for API integration
   - Cart state management already implemented
   - Checkout flow prepared for Shopify Checkout API

## 📂 Project Structure

```
template_boiler/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # Reusable UI components
│   │   ├── Common/         # Shared components (Header, Footer, etc.)
│   │   ├── Home/           # Homepage specific components
│   │   ├── Shop/           # E-commerce components
│   │   └── Cart/           # Shopping cart components
│   ├── redux/              # State management
│   ├── types/              # TypeScript definitions
│   └── css/                # Global styles and component CSS
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based splitting
- **SEO Ready**: Meta tags, structured data, sitemap
- **Mobile Performance**: Optimized scrolling, touch interactions
- **Accessibility**: ARIA labels, keyboard navigation

## 🌟 Current Shopify Theme Integration

This headless app replicates and enhances your existing Shopify theme:
- **screentimejourney.com** visual parity achieved
- **Milestone & Leaderboard** widgets integrated from theme extensions
- **Brand consistency** maintained with exact color schemes and animations
- **API endpoints** ready for live data integration

## 🚀 Deployment Ready

### **Vercel (Recommended)**
```bash
npm run build
# Deploy to Vercel with automatic GitHub integration
```

### **Other Platforms**
- **Netlify**: Static site generation support
- **AWS Amplify**: Full-stack deployment
- **Railway**: Container deployment

## 📊 Development Status

| Feature | Status | Ready for Shopify |
|---------|--------|-------------------|
| Homepage | ✅ Complete | ✅ Yes |
| Components | ✅ Complete | ✅ Yes |
| Responsive Design | ✅ Complete | ✅ Yes |
| Cart System | ✅ Complete | 🔄 API Integration Needed |
| Product Pages | 🔄 Template Ready | 🔄 API Integration Needed |
| Checkout | 🔄 Template Ready | 🔄 Shopify Checkout API |
| Customer Accounts | 🔄 Template Ready | 🔄 Customer API |

## 🔧 Configuration

### **Environment Variables**
```env
NEXT_PUBLIC_SHOPIFY_DOMAIN=screentimejourney.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token
```

### **Customization**
All components accept props for:
- Colors and theming
- Layout options  
- Content configuration
- Animation preferences

---

**Ready for Shopify headless integration!** 🛍️ Your modular component architecture makes API integration straightforward and scalable.




