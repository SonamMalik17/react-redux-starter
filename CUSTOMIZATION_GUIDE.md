# Portfolio Customization Guide

This portfolio is designed to be easily customizable by editing just two JSON files. No React/TypeScript knowledge required!

## Quick Setup for Friends

### 1. Copy the Example Files

```bash
# Copy the example files to create your own
cp src/data/userData.example.json src/data/userData.json
cp src/data/uiText.example.json src/data/uiText.json
```

### 2. Customize Your Data

Edit these two files with your information:

#### `src/data/userData.json` - Your Personal Information
- **personalInfo**: Your name, title, contact details, bio
- **titles**: Different titles that cycle in the hero section
- **experiences**: Your work experience
- **projects**: Your portfolio projects
- **skills**: Your technical skills with proficiency levels
- **seo**: SEO metadata for better search engine visibility

#### `src/data/uiText.json` - UI Text & Labels
- Change button labels, section titles, descriptions
- Customize theme names
- Modify form labels and placeholders
- Update footer text

### 3. Key Sections to Update

#### Personal Information
```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Job Title",
    "email": "your.email@example.com",
    "phone": "+1-234-567-8900",
    "location": "Your City, Country",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

#### Projects
Add your projects with:
- Title and description
- Technologies used
- Live demo and GitHub links
- Project images (use placeholder URLs or your own)

#### Skills
Customize your technical skills:
- Skill name and proficiency level (0-100)
- Color codes for visual styling
- Icons (use existing icon names from the example)

#### SEO & Metadata
Update for better search engine visibility:
- Page titles and descriptions
- Social media preview information
- Keywords relevant to your skills

### 4. Image Setup

#### Project Images
- Use the provided placeholder URLs, or
- Add your own images to `/public/images/projects/`
- Update the `imageUrl` field in your projects

#### Profile/Social Images
- Add OpenGraph and Twitter card images to `/public/`
- Update the image URLs in the SEO section

### 5. Deployment

1. Update the website URL in `userData.json` > `seo` > `website` > `url`
2. Deploy to your preferred platform (Vercel, Netlify, etc.)
3. Update social media image URLs to point to your deployed site

## File Structure

```
src/data/
├── userData.json          # Your personal data (main file to edit)
├── uiText.json           # UI text and labels (secondary customization)
├── userData.example.json  # Example template (don't edit)
└── uiText.example.json   # Example template (don't edit)
```

## Available Skill Icons

The portfolio includes icons for common technologies. Available icons include:
- `FaReact`, `FaNode`, `FaJs`, `FaHtml5`, `FaCss3`, `FaGitAlt`, etc.
- `SiTypescript`, `SiNextdotjs`, `SiTailwindcss`, `SiMongodb`, etc.

Refer to the example files for the complete list.

## Customization Tips

1. **Keep it consistent**: Use similar color schemes and formatting
2. **Optimize images**: Compress images for better performance
3. **Test thoroughly**: Check all pages after making changes
4. **SEO matters**: Fill out all SEO fields for better discoverability
5. **Mobile-first**: The design is responsive, but test on mobile devices

## Need Help?

- Check the example files for proper formatting
- Ensure all JSON is valid (use a JSON validator if needed)
- Contact the original developer if you encounter issues

## Color Palette for Skills

Use these hex colors for consistency:
- Primary: `#61DAFB` (React Blue)
- Secondary: `#3178C6` (TypeScript Blue)
- Success: `#339933` (Node Green)
- Warning: `#F7DF1E` (JavaScript Yellow)
- Danger: `#F05032` (Git Red)

Happy customizing! 🚀