# Alan Lici - Portfolio

Modern, lightweight portfolio built with Vue 3 and Vite. Features a professional design with no heavy frameworks, a client-side contact form, and GitHub Pages auto-deployment.

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Customization

### 1. Update Your Information

Edit `src/App.vue` to replace personal details:
- **Name** in navbar and hero section
- **Title/Role** in the hero subtitle (currently "Full Stack Developer")
- **About section** with your bio and values
- **Project cards** with your real projects
- **Email address** in contact form and footer

### 2. Add Your Profile Picture

Replace `public/profile.jpg` with your own photo:
- Recommended: Square image (500×500px or larger)
- It will automatically display as a circular avatar in the hero section

### 3. Configure Contact Form Email

The contact form generates a mailto link that opens your user's default email client. You **must** set your email address:

In `src/App.vue`, replace all instances of `<PUT_MY_EMAIL_HERE>` with your actual email address (e.g., `alan@example.com`):

```vue
<!-- Example: -->
action="mailto:alan@example.com?subject=..."
<!-- Or in the contact section: -->
<a href="mailto:alan@example.com">...
```

**How it works:**
- User fills out the contact form
- Clicks "Send Message"
- Their default email client opens with the form data pre-filled
- They complete and send the email from their own account

**Fallback:** Users can also click "Copy" to copy your email address to their clipboard.

### 4. Update Social Links

In `src/App.vue`, update the social media links at the bottom of the contact section:
- Replace GitHub URL
- Replace LinkedIn URL

### 5. Customize Design

Edit `src/style.css` to change:
- **Color scheme**: Update CSS variables at the top (`:root` section)
- **Hero gradient**: Find `.hero` selector
- **Typography**: Adjust font sizes and weights
- **Spacing**: Use CSS variables (`--spacing-*`)

All colors and spacing use CSS variables for easy customization.

## Features

✅ **Lightweight**: Plain CSS, no Bootstrap or large frameworks  
✅ **Fast**: Minimal dependencies, optimized build  
✅ **Modern Design**: Clean typography, smooth animations, subtle hover effects  
✅ **Accessible**: Semantic HTML, proper labels, keyboard navigation  
✅ **Responsive**: Mobile-first design (mobile, tablet, desktop)  
✅ **Contact Form**: Client-side mailto links with validation  
✅ **No Third-party Services**: No Formspree, Firebase, or external APIs needed  
✅ **GitHub Pages Ready**: Auto-deploy on push to `main`

## GitHub Pages Deployment

### Step 1: Set Repository Name in Config

Edit `vite.config.js`:
- If repo name is `PORTOFØLJESIDE`, set `base: '/PORTOFØLJESIDE/'`
- If using a custom domain later, change to `base: '/'`

Currently configured: `base: '/PORTOFØLJESIDE/'`

### Step 2: Enable GitHub Actions

1. Go to your GitHub repository
2. **Settings** → **Pages**
3. Set **Source** to **GitHub Actions**

### Step 3: Deploy

Push to `main` branch — the workflow will automatically build and deploy:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The `.github/workflows/deploy.yml` handles building and deployment automatically.

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── App.vue          # Main component (edit content here)
├── style.css        # Global styles (edit design here)
└── main.js          # Vue app entry point

public/
└── profile.jpg      # Your profile picture

.github/workflows/
└── deploy.yml       # Auto-deployment workflow

vite.config.js       # Vite configuration
package.json         # Dependencies
```

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Uses modern CSS features (Grid, Flexbox, CSS variables).

## License

Free to use and modify for your own portfolio.

