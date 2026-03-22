# 🌐 Portfolio Website – Domain & Hosting Migration Guide

Hi 👋  
This guide explains how to move your website to your own domain name.  
You have multiple options depending on your budget and how much control you want.

---

# ✅ OPTION 1 – Easiest (Recommended for Most People)

## Use GitHub Pages + Custom Domain

Best if:
- You want something simple
- You don’t expect heavy traffic
- You don’t need a backend

### Step 1: Buy a Domain
Buy from any trusted provider:

- Namecheap  
- Google Domains (if available in your region)  
- GoDaddy  

Choose something clean like:
yourname.com  
yourname.dev  
yourname.ng  

---

### Step 2: Add Domain to GitHub

1. Go to your repository
2. Click **Settings**
3. Go to **Pages**
4. Under “Custom domain”, enter:
   yourdomain.com
5. Save

---

### Step 3: Configure DNS

In your domain provider dashboard:

Add these A records:

185.199.108.153  
185.199.109.153  
185.199.110.153  
185.199.111.153  

Or add a CNAME record:

www → yourgithubusername.github.io  

Wait 10–30 minutes (sometimes up to 24 hours).

---

### Step 4: Enable HTTPS

Back in GitHub Pages settings:
✔ Enable “Enforce HTTPS”

Done 🎉

---

# ✅ OPTION 2 – More Professional / Scalable

## Deploy with Vercel (Recommended for Modern Projects)

Best if:
- You may expand later
- You want easy scaling
- You want faster global performance

### Steps:

1. Create account at vercel.com  
2. Import your GitHub repository  
3. Click Deploy  
4. Go to Project → Settings → Domains  
5. Add your custom domain  
6. Follow DNS instructions provided  

Vercel automatically:
- Sets SSL
- Handles CDN
- Optimizes performance

Very beginner-friendly.

---

# ✅ OPTION 3 – Traditional Hosting (Full Control)

Use hosting providers like:

- Hostinger  
- Bluehost  
- SiteGround  

Best if:
- You plan to add backend (PHP, database, etc.)
- You want email hosting included
- You prefer classic hosting

### Steps:

1. Buy hosting plan  
2. Connect your domain to the hosting nameservers  
3. Upload files via:
   - cPanel File Manager
   - FTP (FileZilla)
4. Point domain to hosting server  
5. Enable SSL  

---

# 💰 Cost Overview (Approximate)

| Item | Estimated Cost |
|------|---------------|
| Domain (.com) | $10–15 per year |
| GitHub Pages | Free |
| Vercel | Free (basic) |
| Traditional Hosting | $3–10 per month |

---

# 🚀 My Recommendation

If you just want a clean professional portfolio with no backend:

→ Use **Vercel + Custom Domain**

If you want the simplest possible setup:

→ Use **GitHub Pages + Custom Domain**

---

# 📩 If You’re Unsure

If you don’t know which option to choose:

1. Tell me your budget  
2. Tell me if you plan to expand the site  
3. Tell me if you need professional email  

I’ll help you choose the best path.

---

# 🔒 Important Notes

- Always enable HTTPS  
- Keep your domain renewal on auto-renew  
- Keep GitHub access secure  
- Do not delete your repository after deployment  