# Norton Park — Landing Page

> **Norton Park, A Gamuda Land Community**
> Toạ độ xứng tầm đầu tiên tại Bình Dương

[![Deploy Status](https://img.shields.io/badge/staging-vercel-black?logo=vercel)](https://nortonpark-website.vercel.app)

---

## Quick Start

```bash
# Clone repo
git clone https://github.com/duytruong-lang/nortonpark-website.git
cd nortonpark-website

# Mở trực tiếp bằng browser
open norton_park_lead_a.html

# Hoặc chạy local server (recommend — để font/asset load đúng)
npx serve .
# → http://localhost:3000
```

> [!NOTE]
> Pure static site — không build step, không dependencies, không framework.

---

## Tech Stack

| Layer | Chi tiết |
|---|---|
| **Markup** | HTML5 semantic, 1 file duy nhất |
| **Styling** | CSS custom properties + `clamp()` scaling system |
| **Script** | Vanilla JS — carousel, i18n, form, map animation |
| **Fonts** | 7 WOFF2 custom fonts (116 KB total, đã subset Vietnamese) |
| **Assets** | WebP images, SVG logos, SVG map overlays |

---

## Project Structure

```
nortonpark-website/
├── norton_park_lead_a.html      ← trang chính
├── font-specimen.html           ← preview font/color/logo (dev only)
├── vercel.json                  ← Vercel routing config
│
├── css/
│   ├── brand-tokens.css         ← màu, font scale, spacing tokens
│   ├── fonts.css                ← @font-face declarations
│   ├── page.css                 ← layout, components, animations
│   └── decor.css                ← decorative elements
│
├── js/
│   └── page.js                  ← data, i18n, carousel, form, popup
│
├── fonts/                       ← 7 WOFF2 files
│   ├── seasons-{300,400,700}    ← headings
│   ├── futura-{400,700}         ← eyebrow, labels, nav
│   └── gotham-{400,700}         ← body text
│
└── assets/
    ├── images/                  ← hero, storytelling (WebP, portrait + landscape)
    ├── logos/                   ← Norton Park + Gamuda Land (SVG/PNG/WebP)
    ├── patterns/                ← quả chò tile pattern, border
    └── maps/                    ← amenities & connection maps + SVG overlays
        └── full/                ← bản gốc PNG cho lightbox
```

---

## Editing Guide

| Muốn đổi | Sửa ở đâu |
|---|---|
| Nội dung tiếng Việt | `norton_park_lead_a.html` |
| Nội dung tiếng Anh | `js/page.js` → object `I18N.en` |
| Data tiện ích, căn hộ, tin tức, logo đối tác | `js/page.js` → 6 mảng đầu file |
| Tỉ lệ co giãn toàn trang | `css/brand-tokens.css` → `font-size` của `:root` |
| Màu sắc, thang chữ, spacing | `css/brand-tokens.css` |
| Bố cục, animation | `css/page.css` |

> 📖 Chi tiết kỹ thuật đầy đủ (animation specs, screen lock, font subsetting, QA matrix...): xem **[TECHNICAL.md](TECHNICAL.md)**

---

## Deploy Workflow

```
     main branch
         │
         ▼
   ┌───────────┐     auto-deploy
   │  GitHub    │ ──────────────► Vercel Preview (staging)
   │  Push      │
   └───────────┘
         │
         │  khi sẵn sàng
         ▼
   vercel promote ──────────────► Production
```

### Staging
- **Mỗi push lên `main`** → Vercel tự deploy preview
- URL staging: *(sẽ update sau deploy)*

### Production
- Khi đã review xong trên staging → promote lên production
- Hoặc assign custom domain trên Vercel Dashboard

---

## Pending Items ⚠️

Những thứ **bắt buộc thay** trước khi go live:

- [ ] **Tin tức** — 3 tin hiện tại là tin mẫu, cần thay hết + URL bài chi tiết
- [ ] **Link VR 360** — `#REPLACE_WITH_VR_URL` (2 chỗ: nav + bản đồ)
- [ ] **Endpoint nhận lead** — `#REPLACE_WITH_ENDPOINT` (2 form)
- [ ] **Hotline, email, địa chỉ** — Form, Footer, Popup
- [ ] **Thông tin pháp nhân** — 4 dòng Footer
- [ ] **Số liệu Facts** — loại sản phẩm, quy mô, bàn giao, pháp lý
- [ ] **Diện tích căn hộ** — chưa có data
- [ ] **Ảnh thật** — Podium Duplex, Lifestyle, Blocks, Vị trí, Residences
- [ ] **12 logo đối tác** — PNG/SVG nền trong suốt
- [ ] **SĐT + Zalo** — `tel:` và `zalo.me/`
- [ ] **4 link pháp lý Footer** — `#REPLACE_WITH_PRIVACY_URL`...
- [ ] **Pixel Meta + TikTok** — chưa cắm
- [ ] **License webfont** — xác nhận trước deploy public
- [ ] **Gỡ `noindex`** — CHỈ gỡ khi trang sẵn sàng công khai

---

## Environment

| Env | URL | Status |
|---|---|---|
| **Staging** | *sẽ update* | Preview |
| **Production** | TBD | Chưa deploy |
| **GitHub** | [duytruong-lang/nortonpark-website](https://github.com/duytruong-lang/nortonpark-website) | Private |

---

## References

- **[TECHNICAL.md](TECHNICAL.md)** — Chi tiết kỹ thuật: 12 content sections, animation specs, screen lock, font subsetting, scaling system, QA matrix 22 viewports
- **[PLAN.md](PLAN.md)** — Kế hoạch vòng 1 (lưu trữ)
- **[PLAN-v2.md](PLAN-v2.md)** — Kế hoạch vòng 2 (lưu trữ)
