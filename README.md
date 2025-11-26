# hn-retro

A minimal, retro-styled [Eleventy](https://www.11ty.dev/) theme featuring clean typography, SASS styling, and syntax highlighting. Perfect for developers who want a fast, no-nonsense blog with a nostalgic aesthetic.

## ✨ Features

- **Minimal & Fast** - Clean, lightweight design focused on content
- **Retro Aesthetic** - Nostalgic design with pixel-perfect fonts and classic styling
- **SASS Support** - Organized, maintainable stylesheets with SCSS
- **Syntax Highlighting** - Beautiful code blocks with PrismJS (Tomorrow Night theme)
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **SEO Friendly** - Proper meta tags and semantic HTML structure
- **Liquid Templating** - Powerful and flexible template engine
- **Zero JavaScript** - Pure HTML and CSS (except for syntax highlighting)

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository:**
   ```bash
   git clone https://github.com/heiswayi/hn-retro.git
   cd hn-retro
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080`

### Building for Production

To build the static site for deployment:

```bash
npm run build
```

The generated site will be in the `_site` directory.

## 📁 Project Structure

```
hn-retro/
├── src/
│   ├── _data/              # Global data files
│   │   └── global.json     # Site name and global variables
│   ├── _includes/
│   │   └── _layouts/       # Layout templates
│   │       ├── base.liquid # Base HTML template
│   │       └── post.liquid # Blog post template
│   ├── assets/
│   │   ├── _scss/          # SASS source files
│   │   │   ├── style.scss  # Main stylesheet
│   │   │   └── _syntax.scss # Syntax highlighting styles
│   │   ├── css/            # Compiled CSS (generated)
│   │   └── img/            # Images
│   ├── writing/            # Blog posts (markdown)
│   │   ├── writing.json    # Directory data file
│   │   └── *.md            # Individual blog posts
│   ├── index.liquid        # Homepage
│   └── writing.liquid      # Blog index page
├── eleventy.config.js      # Eleventy configuration
├── package.json            # Node dependencies and scripts
└── README.md               # This file
```

## ✍️ Writing Content

### Creating a New Post

1. Create a new markdown file in `src/writing/`:
   ```bash
   touch src/writing/my-new-post.md
   ```

2. Add front matter and content:
   ```markdown
   ---
   title: My New Post
   date: 2025-01-15
   ---

   Your content here...
   ```

3. The post will automatically:
   - Use the `post` layout
   - Appear in the writing index
   - Support syntax highlighting for code blocks

### Syntax Highlighting

Use fenced code blocks with language identifiers:

````markdown
```javascript
function hello() {
  console.log('Hello, world!');
}
```
````

Supported languages include JavaScript, Python, HTML, CSS, SCSS, Rust, and many more.

## 🎨 Customization

### Changing the Site Name

Edit `src/_data/global.json`:
```json
{
    "sitename": "Your Site Name"
}
```

### Modifying Styles

All styles are in `src/assets/_scss/style.scss`. The theme uses SASS variables for easy customization:

```scss
// Font Variables
$font-body: "Space Mono", monospace;
$font-code: "Space Mono", monospace;
$font-title: 'Atari ST 8x16 System Font', sans-serif;
```

### Changing Colors

The retro color gradient can be customized in the `.colorize` class:

```scss
.colorize {
  background: linear-gradient(219deg,
      #186cb8 19%,
      #2a9a9f 20% 39%,
      #f1b211 40% 59%,
      #e83611 60% 79%,
      #f9002f 80%);
}
```

## 📝 Configuration

### Eleventy Config

The `eleventy.config.js` file includes:
- Syntax highlighting plugin
- SASS file watching
- Asset passthrough copying
- Liquid template engine configuration
- Custom collections for blog posts

### Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm run 11ty:serve` - Run Eleventy dev server only
- `npm run sass:watch` - Watch and compile SASS only

## 🌐 Deployment

This theme generates static HTML files that can be deployed anywhere:

### Netlify

1. Push your repository to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `_site`

### Vercel

1. Import your repository
2. Framework preset: Other
3. Build command: `npm run build`
4. Output directory: `_site`

### GitHub Pages

1. Build locally: `npm run build`
2. Push the `_site` directory to your `gh-pages` branch

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

MIT License - feel free to use this theme for your own projects!

## 🙏 Credits

- Built with [Eleventy](https://www.11ty.dev/)
- Syntax highlighting by [PrismJS](https://prismjs.com/)
- Fonts: [Space Mono](https://fonts.google.com/specimen/Space+Mono) and Atari ST System Font
- Created by [Heiswayi Nrird](https://github.com/heiswayi)

## 💬 Support

If you find this theme useful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 📢 Sharing it with others

---

**Happy blogging!** 🚀