# Developer Portfolio

A single-page developer portfolio built with a dark, bold design aesthetic to showcase my projects, skills and experience as a freelance web developer.

---

## 📸 Preview

> Single page portfolio with dark theme and orange accent color

---

## 📄 Sections

### Navigation

A fixed navigation bar with a unique toggle switch that opens a slide-in drawer menu on mobile devices.

- Custom toggle switch (replaces traditional hamburger menu)
- Smooth slide-in drawer from the right side
- Dark overlay when drawer is open
- Regular horizontal navigation links on desktop

### Hero Section

The first thing visitors see when they land on the page.

- Animated tag line (`// hello world`)
- Bold heading with orange accent words
- Short bio description
- Dark hooded figure image that blends with the background

### Projects Section

A grid of project cards showcasing my real-world work.

- Project thumbnail screenshots
- Technology tags for each project
- Project name and description
- Live and GitHub links for each project

### Skills Section

A categorized display of my technical and professional skills.

- Frontend skills (HTML, CSS, JavaScript)
- Tools (Git, VS Code, Firebase)
- Data Services (Excel, Data Entry, Data Cleaning)
- Hover lift effect on each card

### About Section

A brief personal introduction with facts about my work.

- Profile photo with orange circular border
- Two paragraph bio
- Fun facts (Projects Built, Years Experience, Happy Clients)

### Contact Section

A contact form alongside my contact information.

- Email, location, GitHub and LinkedIn details
- Contact form with JavaScript validation
- Error messages for empty fields and invalid email
- Success message on successful submission

### Footer

A minimal footer with logo, social links and copyright.

---

## ✨ Features

- Unique toggle switch mobile navigation with slide-in drawer
- Scroll reveal animations using Intersection Observer API
- Card hover animations (lift, image zoom, border color change)
- JavaScript form validation
- Smooth scrolling
- Hidden scrollbar
- CSS custom properties for consistent theming
- Separate CSS files for better code organization

---

## 🎨 Design Decisions

- **Color scheme:** Near black background (`#0d0d0d`) with orange accent (`#e07b39`), warm floral white (`#FFFBF4`) for light sections
- **Typography:** Fira Code monospace font — chosen to give a developer/terminal feel
- **Layout:** Mobile-first approach with sections alternating between dark and light backgrounds

---

## 🛠️ Technologies Used

| Technology   | Purpose                                           |
| ------------ | ------------------------------------------------- |
| HTML5        | Semantic page structure                           |
| CSS3         | Styling, animations and responsive layout         |
| JavaScript   | Navigation, scroll animations and form validation |
| Font Awesome | Icons                                             |
| Google Fonts | Fira Code typography                              |

---

## 📐 CSS Concepts Demonstrated

- CSS custom properties (variables) in separate file
- Flexbox for navigation and section layouts
- CSS Grid for projects and skills sections
- `position: fixed` for navigation and drawer
- `transform: translateX()` for drawer slide animation
- `Intersection Observer API` for scroll reveal
- `mix-blend-mode` for hero image blending
- `@keyframes` animations
- `backdrop-filter` for overlay effect

---

## 🧠 JavaScript Concepts Demonstrated

- DOM manipulation
- Event listeners
- `classList.toggle()` for drawer open/close
- `Intersection Observer API` for scroll animations
- Form validation with regex email check

---

## 📂 File Structure

task-2-portfolio/
├── index.html → Single page portfolio
├── script.js → Navigation toggle JavaScript
├── form-validation.js → Contact form validation
├── scroll-animation.js → Scroll reveal animations
├── images/
│ ├── hero-image.jpg → Hooded figure hero image
│ ├── profile.jpg → Profile photo
│ ├── project-1.png → Personal brand website screenshot
│ ├── project-2.png → Property acquisition ledger screenshot
│ └── project-3.png → InspectPro screenshot
└── css/
├── variables.css → CSS custom properties
├── base.css → Reset and base styles
├── animations.css → Keyframes and animation classes
├── style.css → Component styles
└── media-query.css → Responsive breakpoints

---

## 👨‍💻 Author

**Oluwasegun Opeyemi Solomon**  
Lagos, Nigeria  
[github.com/solotechrics](https://github.com/solotechrics)
