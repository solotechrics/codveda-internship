# Blog Layout with Flexbox and Grid

A responsive blog layout that demonstrates the combined power of CSS Flexbox and CSS Grid for building modern web layouts.

---

## 📸 Preview

> Responsive blog with sidebar, featured post and posts grid

---

## 📄 Sections

### Navigation

A sticky navigation bar that stays at the top as you scroll.

- Logo on the left
- Navigation links on the right (hidden on mobile, visible on desktop)
- Sticky positioning so it follows the user as they scroll

### Hero Header

A warm, elegant header section that introduces the blog.

- Welcome tag line
- Large heading with Playfair Display font
- Short blog description
- Search bar with icon

### Featured Post

The most important article displayed prominently at the top.

- Full width on mobile
- Side by side layout on desktop (image left, content right) using Flexbox
- Category tag, title, description, date and read time

### Posts Grid

A grid of regular blog post cards below the featured post.

- 1 column on mobile
- 2 columns on tablet and desktop using CSS Grid
- Each card has image, category, title, description and meta info
- Hover lift effect and image zoom animation

### Sidebar

A right-side panel visible on desktop that provides extra information.

- About widget — short description of the blog
- Categories widget — list of categories with post count badges
- Popular Posts widget — small thumbnails with titles and dates

### Footer

A simple footer with logo, navigation links and copyright.

---

## ✨ Features

- CSS Grid for main layout (blog posts + sidebar)
- CSS Flexbox for navigation, featured post and footer
- Fully responsive — 1 column mobile, 2 columns tablet, sidebar on desktop
- Sticky navigation
- Hover animations on cards
- Image zoom effect on hover
- Warm elegant color palette

---

## 🎨 Design Decisions

- **Color scheme:** Cremé `#F0EBE1`, Bone `#D9D0C1`, Oak `#B5A898`, Clay `#8B7D6B` — a warm neutral palette inspired by interior design
- **Typography:** Playfair Display for headings (elegant, editorial feel) + Lato for body text (clean, readable)
- **Layout:** Mobile-first approach — single column on mobile, expanding to multi-column on larger screens

---

## 🛠️ Technologies Used

| Technology   | Purpose                                   |
| ------------ | ----------------------------------------- |
| HTML5        | Semantic page structure                   |
| CSS3         | Styling, animations and responsive layout |
| Google Fonts | Playfair Display and Lato typography      |
| Font Awesome | Search icon                               |
| Unsplash     | Free stock images for blog posts          |

---

## 📐 CSS Concepts Demonstrated

- **CSS Grid** — main content area (blog posts + sidebar), posts grid
- **CSS Flexbox** — navigation, featured post, footer, card internals
- `position: sticky` for navigation
- `object-fit: cover` for consistent image sizing
- `@media queries` for responsive breakpoints
- CSS transitions for hover effects
- `transform: scale()` for image zoom
- `box-shadow` for card depth

---

## 📂 File Structure

task-1-flexbox-grid/
├── index.html → Blog layout page
└── css/
├── variables.css → CSS custom properties
├── style.css → Main styles
└── media-query.css → Responsive breakpoints

---

## 👨‍💻 Author

**Oluwasegun Opeyemi Solomon**  
Lagos, Nigeria  
[github.com/solotechrics](https://github.com/solotechrics)
