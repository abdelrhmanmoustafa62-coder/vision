import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// API endpoint for contact form
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    const { name, company, email, service, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return c.json({ success: false, error: 'الرجاء ملء جميع الحقول المطلوبة' }, 400)
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return c.json({ success: false, error: 'البريد الإلكتروني غير صالح' }, 400)
    }

    // Here you would typically send an email or save to database
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, company, email, service, message })

    return c.json({ 
      success: true, 
      message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً!' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ success: false, error: 'حدث خطأ أثناء إرسال الرسالة' }, 500)
  }
})

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Main HTML page with SEO optimization
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
    <!-- Primary Meta Tags -->
    <title>رؤية لحلول الأعمال | Roaia Business Solutions - شريكك الاستراتيجي للنمو</title>
    <meta name="title" content="رؤية لحلول الأعمال | Roaia Business Solutions - شريكك الاستراتيجي للنمو" />
    <meta name="description" content="رؤية لحلول الأعمال - شريكك الاستراتيجي الموثوق لإدارة المناقصات، تطوير الأعمال، والحلول المالية في السعودية ومصر. نقدم خدمات متكاملة لتحقيق النمو المستدام." />
    <meta name="keywords" content="إدارة مناقصات, تطوير أعمال, حلول مالية, استشارات أعمال, ERP, أيزو, السعودية, مصر, Roaia, رؤية" />
    <meta name="author" content="Roaia Business Solutions" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="Arabic" />
    <link rel="canonical" href="https://www.roaia.org/" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.roaia.org/" />
    <meta property="og:title" content="رؤية لحلول الأعمال | Roaia Business Solutions" />
    <meta property="og:description" content="شريكك الاستراتيجي الموثوق لإدارة المناقصات وتطوير الأعمال في السعودية ومصر. حلول متكاملة لتحقيق النمو المستدام." />
    <meta property="og:image" content="https://www.roaia.org/static/og-image.jpg" />
    <meta property="og:locale" content="ar_SA" />
    <meta property="og:site_name" content="Roaia Business Solutions" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://www.roaia.org/" />
    <meta name="twitter:title" content="رؤية لحلول الأعمال | Roaia Business Solutions" />
    <meta name="twitter:description" content="شريكك الاستراتيجي الموثوق لإدارة المناقصات وتطوير الأعمال في السعودية ومصر" />
    <meta name="twitter:image" content="https://www.roaia.org/static/og-image.jpg" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Cairo', 'sans-serif'],
            },
            colors: {
              primary: {
                50: '#f0f5fa',
                100: '#e1ebf5',
                200: '#c3d7eb',
                300: '#a5c3e1',
                400: '#87afd7',
                500: '#1e3a8a',
                600: '#172d6d',
                700: '#102050',
                800: '#091333',
                900: '#020617',
              },
              accent: {
                400: '#fbbf24',
                500: '#f59e0b',
                600: '#d97706',
              }
            }
          }
        }
      }
    </script>
    
    <style>
      body {
        font-family: 'Cairo', sans-serif;
        background-color: #f8fafc;
        cursor: none;
      }
      
      * {
        cursor: none !important;
      }
      
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      ::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }

      /* Keyframe Animations */
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      @keyframes gradient-slow {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }

      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-30px) rotate(-5deg); }
      }

      @keyframes pulse-slow {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }

      @keyframes scroll {
        0% { transform: translateY(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(100%); opacity: 0; }
      }

      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }

      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }

      .animate-gradient-slow {
        background-size: 200% 200%;
        animation: gradient-slow 8s ease infinite;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-float-delayed {
        animation: float-delayed 8s ease-in-out infinite;
      }

      .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
      }

      .animate-scroll {
        animation: scroll 2s ease-in-out infinite;
      }

      .animate-shimmer {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }

      /* Smooth scroll */
      html {
        scroll-behavior: smooth;
      }

      /* Card hover effects */
      .group:hover .group-hover\:animate-bounce {
        animation: bounce 1s ease-in-out infinite;
      }

      /* Perspective container */
      .perspective-1000 {
        perspective: 1000px;
      }

      /* 3D Transform utilities */
      .transform-3d {
        transform-style: preserve-3d;
      }

      /* Backdrop blur support */
      @supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
        .backdrop-blur-custom {
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
        }
      }
    </style>
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Roaia Business Solutions",
      "alternateName": "رؤية لحلول الأعمال",
      "url": "https://www.roaia.org",
      "logo": "https://www.roaia.org/static/logo.png",
      "description": "شريكك الاستراتيجي الموثوق لإدارة المناقصات وتطوير الأعمال في السعودية ومصر",
      "foundingDate": "2021",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-57-152-1400",
        "contactType": "Customer Service",
        "email": "info@roaia.org",
        "availableLanguage": ["Arabic", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressRegion": "الرياض"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        {
          "@type": "Country",
          "name": "Egypt"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/roaia",
        "https://twitter.com/roaia",
        "https://www.facebook.com/roaia"
      ]
    }
    </script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Roaia Business Solutions",
      "image": "https://www.roaia.org/static/logo.png",
      "telephone": "+966-57-152-1400",
      "email": "info@roaia.org",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA"
      },
      "priceRange": "$$",
      "openingHours": "Mo-Th 09:00-17:00"
    }
    </script>
    
    <!-- Import Maps -->
    <script type="importmap">
    {
      "imports": {
        "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
        "lucide-react": "https://aistudiocdn.com/lucide-react@^0.555.0",
        "react/": "https://aistudiocdn.com/react@^19.2.0/",
        "react": "https://aistudiocdn.com/react@^19.2.0"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/static/client.js"></script>
  </body>
</html>`)
})

export default app
