# Event Management Platform

A modern, responsive React template designed for event management companies, conference organizers, and event planning professionals. This template provides a comprehensive solution for showcasing event services, managing event information, and creating professional event websites.

## 🚀 Features

- **Multiple Layout Options**: 3 different home page variations to choose from
- **One-Page Navigation**: Single-page website options with smooth scrolling
- **Event Management**: Dedicated pages for event listings, details, and scheduling
- **Gallery Integration**: Beautiful image galleries to showcase past events
- **Blog System**: Built-in blog functionality for event updates and news
- **Team Showcase**: Professional team member profiles and details
- **Contact Forms**: Multiple contact form variations for client inquiries
- **Pricing Tables**: Service pricing display with multiple plan options
- **Testimonials**: Client feedback and testimonial sections
- **FAQ Section**: Frequently asked questions with accordion functionality
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🛠 Tech Stack

- **React 18.3.1** - Latest React with hooks and functional components
- **React Router Dom 6.26.2** - Client-side routing and navigation
- **Bootstrap 5.3.3** - Responsive grid system and components
- **Swiper 11.1.14** - Touch slider and carousel functionality
- **React Helmet 6.1.0** - Document head management for SEO
- **Supabase Integration** - Ready-to-use backend integration setup
- **SCSS/CSS3** - Modern styling with custom animations
- **FontAwesome Icons** - Comprehensive icon library
- **jQuery** - Legacy support for certain plugins

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout/         # Header, Footer, Navigation
│   ├── Blog/           # Blog-related components
│   ├── Common/         # Shared components
│   ├── Services/       # Service display components
│   └── elements/       # UI elements and utilities
├── pages/              # Page components and layouts
│   ├── home/           # Home page variations
│   ├── about/          # About page
│   ├── services/       # Services pages
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── event/          # Event-related pages
│   ├── gallery/        # Gallery pages
│   └── team/           # Team pages
├── assets/             # Static assets
│   ├── css/            # Compiled CSS files
│   ├── images/         # Image assets
│   └── vendors/        # Third-party CSS/JS
└── integrations/       # External service integrations
    └── supabase/       # Supabase backend integration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd event-management-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Supabase (Optional)**
   
   If you want to use the included Supabase integration:
   - Create a Supabase account at [supabase.com](https://supabase.com)
   - Create a new project
   - Copy your project URL and anon key
   - Update the configuration in `src/integrations/supabase/client.ts`

4. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000` to view the application.

### Build for Production

```bash
npm run build
# or
yarn build
```

The build folder will contain the optimized production files ready for deployment.

## 📱 Pages Included

- **Home Variations**: 3 different home page designs
- **One-Page Styles**: 3 single-page website variations
- **About Us**: Company information and story
- **Services**: Event planning and management services
- **Team**: Team member profiles and contact information
- **Gallery**: Event photo galleries with lightbox functionality
- **Blog**: News and updates with category filtering
- **Events**: Event listings and detailed event pages
- **Contact**: Contact forms and company information
- **Pricing**: Service pricing and packages
- **FAQ**: Frequently asked questions
- **Testimonials**: Client reviews and feedback

## 🎨 Customization

### Styling
- Main styles are located in `src/assets/scss/`
- Component-specific styles are in individual component folders
- CSS variables are defined in `src/assets/scss/common/_variables.scss`

### Colors and Branding
- Update brand colors in the SCSS variables file
- Replace logo images in `src/assets/images/resources/`
- Modify footer and header components for branding

### Content Management
- Page content is managed through component props and state
- Contact information can be updated in footer components
- Service information is configured in page components

## 🔧 Configuration

### Email Configuration
Update email addresses in:
- Footer components (`src/components/Layout/Footer/`)
- Contact forms
- Mailchimp integration (if used)

### Social Media Links
Update social media links in:
- Header and footer components
- Team member profiles

## 📧 Contact Integration

The template includes contact form functionality that can be integrated with:
- Supabase (included setup)
- Mailchimp (existing integration)
- Custom backend API
- Third-party form services

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Support

For support and questions:
- Email: contact@example.com
- Documentation: Included in the project
- Issues: Submit through the project repository

## 🙏 Acknowledgments

- React team for the amazing framework
- Bootstrap team for the responsive framework
- Swiper.js for the slider functionality
- FontAwesome for the icon library
- All contributors and supporters of this project

---

**Note**: This template is designed to be easily customizable and can be adapted for various event management needs including corporate events, weddings, conferences, and social gatherings.
