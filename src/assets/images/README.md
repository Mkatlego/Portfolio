# Images

Place your optimized images here.

## Profile Image Optimization

Your profile image should be optimized for web performance:

1. **Resize to 800×800px maximum** (or smaller if displayed smaller)
2. **Compress to 70-80% quality**
3. **Convert to WebP format** for modern browsers
4. **Expected result:** ~50-100KB instead of 2.1MB

### Tools to Optimize:

- **Online:** https://squoosh.app/ (Google's image optimizer)
- **CLI:** `magick profile.jpg -resize 800x800 -quality 80 profile-optimized.jpg`
- **Node.js:** Use `sharp` package in a script

### Current Issue:

The original profile image is 2.1MB at 3456×3456px, which causes:
- 5-10+ second load times on slow connections
- Poor Core Web Vitals (LCP)
- Bad user experience

### After Optimization:

Rename your optimized image to `profile.jpg` and place it in this directory.
Then update the import in components that use it.
