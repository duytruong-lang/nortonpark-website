# Norton Park — Landing Page Plan

> Bản kế hoạch chờ duyệt. Chốt xong bản này mới bắt đầu code HTML.
> Nguồn: `sb79_lead_variant_a.html` (bản client đã chọn), `Brand Guidelines (Markdown)/brand-guidelines.md`, brief client ngày 03/09/2026.

---

## 1. Những gì đã chốt

| Hạng mục | Quyết định |
|---|---|
| Tên dự án | Norton Park, bỏ hoàn toàn mọi nhắc tới SB7.9 |
| Phạm vi | Giữ nguyên bố cục 8 section của variant A, thay da toàn bộ theo brand guideline, viết lại copy, thêm section bản đồ |
| Hero | Tràn viền, chữ đè lên ảnh, hiệu ứng zoom out chậm |
| Bản đồ | Hướng A: nền ảnh WebP đã duyệt, phủ lớp SVG mỏng để animate |
| Bố cục map | Một section, hai tab Kết nối và Tiện ích, ngôn ngữ theo nút VI/EN |
| Map mobile | Vừa khung cho animation chạy, chạm mở toàn màn zoom được, kèm danh sách mốc thời gian dạng chữ |
| Sơ đồ cũ | Bỏ hẳn SVG khối tự vẽ trong section Vị trí, thay bằng bản đồ chính thức |
| Nav | Trong suốt trên hero, nền Beige Sand đặc dần khi cuộn. Chỉ logo, chuyển ngữ và CTA. Không menu section, không hamburger |
| CTA nav | Cuộn xuống form đăng ký |
| Nút nổi | Gọi, Zalo, lên đầu trang. Giữ cụm nút tròn trên mọi thiết bị |
| Badge Gamuda Land | Không dùng trên landing page. Badge chỉ dành cho post social |
| Form | Giữ placeholder, chưa nối endpoint và pixel |
| File output | `norton_park_lead_a.html` trong thư mục `norton_park_landing/` |

**Lệch so với ảnh mẫu:** ảnh mẫu trang 27 guideline có 360VR và hamburger. Theo quyết định của bạn, nav chỉ còn logo, chuyển ngữ và CTA. Nút 360VR sẽ dựng nếu bạn gửi link, không có thì bỏ.

---

## 2. Nguyên tắc thiết kế

### 2.1 Ba tầng nền

Guideline lấy Beige Sand `#DCD3C0` làm nền chủ đạo. Nhưng nếu cả trang cùng một nền thì trang bị phẳng và nặng mắt. Cách xử lý: giữ Beige Sand làm **tông trung tâm**, dao động lên xuống quanh nó theo nhịp section.

```
Sáng   #FBFAF6  Off White     Trust, Số liệu, Form. Vùng cần đọc kỹ
Nền    #F2EEE4  Beige nhạt    Bối cảnh, chuyển tiếp
Chuẩn  #DCD3C0  Beige Sand    Nav, Tiện ích, Bản đồ. Tông thương hiệu
Tối    #594A42  Hoa Dầu Brown Section Vị trí, Footer
```

Nguyên tắc: không bao giờ để hai section liền nhau cùng một nền. Không quá hai section tối trong toàn trang.

### 2.2 Chữ

| Vai trò | Font | Weight | Áp dụng |
|---|---|---|---|
| H1, H2, H3 | The Seasons | 300 cho hero, 400 cho section, 700 cho card | Toàn bộ tiêu đề |
| Eyebrow, nhãn, nav, nút | Futura | 400 và 700 | Uppercase, letter-spacing 0.32em |
| Body, caption, form | Gotham | 400 và 700 | Mọi đoạn văn |

Quy tắc cứng: **không dùng The Seasons cho chữ dưới 18px**. Font serif display này mất nét ở cỡ nhỏ, đặc biệt là dấu tiếng Việt.

### 2.3 Hoạ tiết quả chò

Đây là chỗ dễ lạm dụng nhất. Quy tắc:

| Material | Dùng ở đâu | Độ đậm | Số lần xuất hiện tối đa |
|---|---|---|---|
| `Hoạ tiết quả chò 2` (chevron dày) | Băng ngăn giữa section, cao 40 tới 56px | opacity 0.5 | 3 lần trong trang |
| `Hoạ tiết quả chò 3` (thưa) | Nền lặp cho đúng 1 section | opacity 0.28 | 1 lần |
| `Hoạ tiết quả chò` (dọc mảnh) | Viền cạnh trái section Vị trí | opacity 0.4 | 1 lần |
| `Bóng mờ quả chò` | Watermark sau tiêu đề section Bối cảnh | opacity 0.35 | 1 lần |
| `Logo quả chò chính` | Nút nổi, favicon, dấu ngắt giữa các khối chữ | 100% | Tự do, cỡ nhỏ |

Tổng cộng tối đa 6 mảng hoạ tiết lớn trong toàn trang. Nhiều hơn là trang biến thành giấy gói quà.

### 2.4 Chuyển động

Tông brand là quiet confidence. Mọi chuyển động phải chậm và chỉ chạy một lần.

- Đường cong chuẩn: `cubic-bezier(.16,1,.3,1)`
- Nội dung vào tầm mắt: mờ lên và trượt 18px, 0.9 giây, so le 90ms
- Hero zoom out: scale 1.08 về 1.0 trong 12 giây, chạy một lần khi tải trang
- Đếm số: 1.6 giây, chỉ chạy lần đầu
- Toàn bộ nằm trong `prefers-reduced-motion: reduce`, ai bật thì mọi thứ đứng yên

---

## 3. Cấu trúc trang

### Section 0 — Thanh điều hướng

**Bố cục:** VI | EN bên trái, logo Norton Park chính giữa, nút TƯ VẤN bên phải.

**Hành vi:** trên hero nền trong suốt, logo và chữ dùng bản sáng `#F4F0E7`, có đổ bóng chữ nhẹ để đọc được trên ảnh. Cuộn quá 80% chiều cao hero thì nền Beige Sand mờ vào trong 0.4 giây, logo và chữ đổi sang Dark Pine. Dùng `IntersectionObserver` trên hero, không dùng sự kiện scroll.

**Logo:** file `norton-park-logo-primary.svg`. Bản sáng tạo bằng bộ lọc CSS, không cần file thứ hai.

**Mobile:** cùng cấu trúc, logo thu còn 150px, nút TƯ VẤN rút gọn thành biểu tượng quả chò.

---

### Section 1 — Hero

**Mục đích:** trong 3 giây đầu nói rõ đây là dự án gì, ở đâu, khác biệt ở chỗ nào.

**Bố cục:** ảnh `hero norton park demo.png` tràn toàn khung, chiều cao `min(88vh, 760px)`. Khối chữ căn trái, cách đáy 15%.

**Lớp scrim:** chuyển sắc chéo từ `rgba(89,74,66,.72)` góc dưới trái sang trong suốt ở 62% chiều ngang. Giữ nguyên mảng hoàng hôn bên phải làm điểm nhấn, khối chữ bên trái vẫn đạt tương phản trên 4.5:1.

**Zoom out:** scale 1.08 về 1.0, 12 giây, ease-out, một lần.

**Nội dung:**

```
eyebrow   ĐẠI LỘ BÌNH DƯƠNG                    (Futura, uppercase)
H1        Chốn an trú giữa nhịp sống toàn cầu  (The Seasons 300)
lead      Mật độ xây dựng hai mươi bảy phần trăm. 2,5 hecta cảnh quan,
          trong tổng thể quy hoạch cùng AEON Mall Bình Dương.
CTA       ĐĂNG KÝ TƯ VẤN RIÊNG                 (nền bronze đặc)
```

> **Điểm cần bạn quyết.** Headline cũ của variant A là "Không gian sống mật độ thấp, liền kề VSIP 1", thuần lợi ích, hợp với persona chưa nhận thức về giải pháp và tốt cho conversion. Headline mới ở trên thiên về thương hiệu, bám tagline "The Global Sanctuary in Your Rhythm" hơn. Tôi đề xuất **giữ headline cũ làm H1** và đưa câu thương hiệu xuống làm dòng eyebrow phụ. Lý do: đây là trang chạy traffic Meta và TikTok tới người chưa biết dự án, họ cần biết ngay lợi ích cụ thể chứ không phải câu thơ. Bạn chốt giúp hướng nào.

**Dải hoạ tiết:** băng chevron cao 44px ngay dưới hero, đúng như mẫu trang 27 guideline.

---

### Section 2 — Uy tín chủ đầu tư

**Nền:** Off White `#FBFAF6`.

**Bố cục:** logo Gamuda Land bên trái, ba dòng tin cậy bên phải, mỗi dòng một biểu tượng nét mảnh.

**Nội dung:** giữ nguyên ba ý của variant A, đổi tên dự án.

**Chuyển động:** ba dòng mờ lên so le 90ms.

---

### Section 3 — Bối cảnh và Lời đáp

**Nền:** Beige nhạt `#F2EEE4`, có `Bóng mờ quả chò` làm watermark góc phải, opacity 0.35.

**Bố cục:** hai cột. Trái là Bối cảnh, phải là Lời đáp. Trên mobile xếp dọc, giữa hai khối là một dấu quả chò nhỏ làm vạch ngăn.

**Nội dung:** giữ nguyên cấu trúc lập luận của variant A. Đây là phần mạnh nhất của trang: nêu vấn đề khu công nghiệp rồi mới đưa lời đáp mật độ thấp. Chỉ đổi tên dự án và siết lại câu chữ.

---

### Section 4 — Số liệu

**Nền:** Off White.

**Bố cục:** ba số lớn nằm ngang, font The Seasons 400, cỡ `clamp(3.2rem, 7vw, 5.6rem)`, màu Hoa Dầu Brown. Nhãn bên dưới bằng Futura uppercase.

**Nội dung:** 27% mật độ xây dựng · 2,5 hecta cảnh quan · 12 căn mỗi tầng ba thang máy.

**Chuyển động:** đếm từ 0 trong 1.6 giây khi vào tầm mắt, một lần.

---

### Section 5 — Tiện ích

**Nền:** Beige Sand `#DCD3C0`, nền lặp `Hoạ tiết quả chò 3` opacity 0.28.

**Bố cục:** ba thẻ ngang. Mỗi thẻ có khung ảnh tỉ lệ 4:3, biểu tượng, tiêu đề The Seasons 700, mô tả Gotham.

**Ảnh:** chưa có material Norton Park nên dùng khung placeholder ghi rõ kích thước và nội dung cần thay. Khi có ảnh chỉ cần đổi đường dẫn.

**Nội dung:** Hồ bơi và wellness · Co working lounge · Công viên và cảnh quan.

---

### Section 6 — Bản đồ  ⭐ MỚI

Đây là phần lớn nhất và mới hoàn toàn. Spec chi tiết ở mục 4.

---

### Section 7 — Vị trí trong tổng thể

**Nền:** Hoa Dầu Brown `#594A42`, viền trái là `Hoạ tiết quả chò` dọc opacity 0.4.

**Bố cục:** khung ảnh dọc 4:5 bên trái, danh sách ba điểm vị trí bên phải.

**Thay đổi so với variant A:** bỏ hẳn sơ đồ SVG khối tự vẽ. Nội dung sơ đồ đó đã được bản đồ chính thức ở section 6 thay thế tốt hơn.

**Nội dung:** Mặt tiền Đại lộ Bình Dương · Liền kề VSIP 1 · AEON Mall Bình Dương trong cùng tổng thể.

---

### Section 8 — Form đăng ký

**Nền:** Beige Sand, thẻ form nền Off White, bo góc 10px, viền `rgba(89,74,66,.16)`.

**Giữ nguyên toàn bộ logic hai bước của variant A**, đây là phần quyết định tỉ lệ điền:
- Bước 1 chỉ hỏi loại căn quan tâm, dạng nút chọn. Câu hỏi dễ, tạo đà cam kết.
- Bước 2 mới hỏi tên và số điện thoại.
- Honeypot chống bot, hidden field UTM, dataLayer push giữ nguyên.

**Thay đổi:** nút bấm đổi sang Champagne Bronze nền đặc, ô nhập bo 8px, nhãn Futura uppercase, chữ nhập Gotham.

**Nút chọn loại căn:** thêm trạng thái được chọn với viền bronze và nền `rgba(167,128,97,.14)`.

---

### Section 9 — Footer

**Nền:** Hoa Dầu Brown. Logo Norton Park bản sáng, dòng miễn trừ trách nhiệm, bản quyền.

**Thêm:** dải chevron mảnh ở mép trên footer làm điểm kết.

---

## 4. Spec section Bản đồ

### 4.1 Cấu trúc

```
┌─────────────────────────────────────────────┐
│  eyebrow  VỊ TRÍ VÀ KẾT NỐI                 │
│  H2       Trung tâm của mọi kết nối         │
│                                             │
│  [ Kết nối ]  [ Tiện ích ]      ← hai tab   │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │   ảnh WebP nền                        │  │
│  │   + lớp SVG phủ (đường, pin)          │  │
│  │   + lớp HTML (thẻ POI, nút phóng to)  │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  10 phút · 15 phút · 20-30 phút · 40-60     │
│  danh sách mốc dạng chữ, đọc được thật      │
└─────────────────────────────────────────────┘
```

Tab đổi bằng thuộc tính `hidden`, không phải `display:none` trong style, để trình đọc màn hình hiểu đúng. Ngôn ngữ bản đồ nối vào nút VI/EN có sẵn: đổi ngữ thì đổi luôn file ảnh nền.

### 4.2 Ba lớp chồng

| Lớp | Nội dung | Dung lượng |
|---|---|---|
| 1. Nền | `connection-map-vi/en.webp` hoặc `amenities-vi/en.webp`, 1800px | 120 tới 150 KB |
| 2. SVG phủ | Chỉ các tuyến đường và điểm cần animate, trích tự động từ file .ai gốc | 25 tới 35 KB |
| 3. HTML | Pin Norton Park, thẻ tên POI, nút phóng to | Không đáng kể |

Lớp 2 dùng chung `viewBox` với ảnh nền nên **trùng khớp toạ độ tuyệt đối**, không phải căn tay. Đây là điểm mấu chốt khiến hướng A khả thi.

### 4.3 Cách trích lớp phủ

Đã chạy thử thành công. Quy trình:

1. `pdftocairo -svg` chuyển file `.ai` sang SVG. Bản kết nối ra 1.374 path, bản tiện ích ra 1.236 path, chữ đã outline nên không phụ thuộc font.
2. Lọc path theo màu nét: `#243C34` đường bộ chính, `#5F6635` đường phụ, `#BB865B` vành đai hoàn thiện, `#C7AA8A` vành đai quy hoạch.
3. Gán class cho từng nhóm, xuất ra file phủ.
4. Riêng QL13 và Đại lộ Bình Dương được vẽ bằng hình khối tô màu chứ không phải nét, cần lọc thêm một lượt theo màu tô cam. Đây là việc phát sinh đã lường trước.

### 4.4 Kịch bản chuyển động

**Lớp kể chuyện, chạy một lần khi section vào tầm mắt, tổng 2.4 giây:**

| Mốc | Diễn ra |
|---|---|
| 0.0s | Ảnh nền mờ lên |
| 0.3s | Pin quả chò rơi từ trên xuống vị trí Norton Park, nảy nhẹ khi chạm |
| 0.6s | Vòng sóng bronze đầu tiên toả ra từ pin |
| 0.7s | QL13 và Vành đai 3 bắt đầu vẽ, `stroke-dashoffset` từ chiều dài path về 0, 1.1 giây |
| 1.0s | Các tuyến phụ vẽ theo, so le 120ms |
| 1.6s | Chấm nút giao nảy lên dọc tuyến đã vẽ xong, so le 70ms |
| 1.9s | Vòng thời gian 10, 15, 20-30, 40-60 phút sáng dần lần lượt, mỗi vòng cách 180ms |
| 2.4s | Dừng hẳn |

**Lớp duy trì, lặp:** chỉ giữ vòng sóng bronze từ pin Norton Park, 3 giây một nhịp, mờ dần từ opacity 0.5 về 0 kèm scale 1 lên 2.4. Không có gì khác lặp.

**Hover POI trên tab Tiện ích:** di chuột vào số thứ tự thì hiện thẻ tên địa điểm ngay tại chỗ, nền Off White, viền mảnh, mũi tên chỉ xuống. Mobile thì chạm. Cần nhập toạ độ 28 điểm, tôi trích từ file .ai nên không phải đo tay.

**Ưu tiên nếu thiếu thời gian:** pin và đường tự vẽ là bắt buộc. Vòng thời gian là nên có. Hover POI có thể cắt sang đợt sau mà không ảnh hưởng phần còn lại.

### 4.5 Mobile

- Bản đồ thu vừa bề ngang, animation vẫn chạy đủ để thấy câu chuyện kết nối.
- Ngay dưới bản đồ là danh sách mốc thời gian dạng chữ HTML thật, đọc được và có ích cho SEO.
- Chạm vào bản đồ mở lớp phủ toàn màn hình, dùng ảnh PNG gốc trong `assets/maps/full/`, chụm hai ngón để zoom, kéo để di chuyển. Thoát bằng nút X hoặc phím Esc.
- Ảnh gốc chỉ tải khi người dùng thật sự mở lightbox, không tải sẵn.

---

## 5. Nút nổi

Cụm ba nút tròn 52px, góc phải, cách đáy 24px, xếp dọc cách nhau 14px. Giữ nguyên trên mọi thiết bị.

| Nút | Nền | Biểu tượng | Hành động |
|---|---|---|---|
| Gọi | Hoa Dầu Brown `#594A42` | Ống nghe | `tel:` số điện thoại |
| Zalo | Dark Pine `#5D614F` | Chữ Z trong bong bóng | Mở link Zalo tab mới |
| Lên đầu | Hoa Dầu Brown | Mũi tên lên | Cuộn mượt lên đầu trang |

Nút lên đầu chỉ hiện sau khi cuộn qua hero, mờ vào trong 0.3 giây. Hai nút kia hiện suốt. Mỗi nút có `aria-label`, vùng chạm tối thiểu 44px theo chuẩn tiếp cận. Nút Gọi và Zalo đều bắn sự kiện vào dataLayer để đo được.

Màu xanh Zalo gốc là `#0068FF`, lệch hoàn toàn khỏi bảng màu. Tôi dùng Dark Pine để giữ brand, biểu tượng vẫn nhận ra ngay.

---

## 6. Copy: bảng đổi chữ

Toàn bộ chuỗi có SB7.9 phải đổi. Danh sách các chuỗi cần bạn duyệt:

| Vị trí | Bản mới (VI) | Bản mới (EN) |
|---|---|---|
| Tiêu đề trang | Norton Park \| Không gian sống mật độ thấp, liền kề VSIP 1 | Norton Park \| Low Density Living, Adjacent to VSIP 1 |
| Logo nav | NORTON PARK, phụ đề A GAMUDA LAND COMMUNITY | như VI |
| Hero eyebrow | ĐẠI LỘ BÌNH DƯƠNG | BINH DUONG BOULEVARD |
| Hero H1 | *chờ bạn chốt, xem mục 3 section 1* | |
| Bối cảnh | Norton Park được quy hoạch với mật độ xây dựng hai mươi bảy phần trăm trên 2,8 hecta khu căn hộ. | Norton Park is planned at twenty seven percent building density across a 2.8 hectare residential site. |
| Vị trí | Norton Park tọa lạc tại mặt tiền Đại lộ Bình Dương, trong tổng thể phát triển tích hợp 17,5 hecta. | Norton Park fronts Binh Duong Boulevard, within an integrated development of 17.5 hectares. |
| Bản đồ eyebrow | VỊ TRÍ VÀ KẾT NỐI | LOCATION AND CONNECTIVITY |
| Bản đồ H2 | Trung tâm của mọi kết nối | At the centre of every connection |
| Form đồng ý | Đồng ý được liên hệ về Norton Park và đồng ý với chính sách bảo mật. | Consent is given to be contacted regarding Norton Park and to the privacy policy. |
| Footer | Norton Park, A Gamuda Land Community | như VI |

Tagline **THE GLOBAL SANCTUARY IN YOUR RHYTHM** đặt ở footer, ngay dưới logo, dạng Futura uppercase letter-spacing rộng.

---

## 7. Kỹ thuật

### 7.1 Cấu trúc file

```
norton_park_landing/
├── norton_park_lead_a.html      ← file chính
├── css/fonts.css                 đã có
├── css/brand-tokens.css          đã có
├── fonts/                        đã có, 7 face, 102 KB
├── assets/logos/                 đã có, bổ sung 5 material mới của client
├── assets/maps/                  đã có, bổ sung 2 file SVG phủ
└── assets/images/hero.webp       chuyển từ PNG 2.4 MB sang WebP
```

CSS để ngoài thành hai file thay vì nhồi hết vào HTML, vì gói này giao dạng thư mục chứ không phải một file rời. Dễ sửa và cache tốt hơn.

### 7.2 Ngân sách hiệu năng

| Thành phần | Mục tiêu |
|---|---|
| HTML + CSS | dưới 60 KB |
| Font | 102 KB, preload 2 face |
| Hero WebP | dưới 280 KB, hiện đang 2.4 MB PNG nên bắt buộc chuyển |
| Bản đồ | chỉ tải tab đang mở, tab còn lại `loading="lazy"` |
| Ảnh gốc lightbox | chỉ tải khi người dùng mở |
| **Tổng lần tải đầu** | **dưới 550 KB** |

Không dùng thư viện ngoài. Toàn bộ animation bằng CSS và `IntersectionObserver`.

### 7.3 Tiếp cận

- Mọi ảnh có `alt` mô tả thật, không để trống.
- Bản đồ có `role="img"` và `aria-label` mô tả nội dung.
- Tab bản đồ dùng đúng mẫu `role="tablist"`, điều khiển được bằng phím mũi tên.
- Lightbox bẫy tiêu điểm bàn phím, Esc để thoát.
- Tương phản chữ tối thiểu 4.5:1. Champagne Bronze không dùng cho chữ nhỏ trên nền sáng.
- `prefers-reduced-motion` tắt toàn bộ chuyển động kể cả hero zoom và animation bản đồ.

---

## 8. Cần bạn cung cấp

| Việc | Trạng thái |
|---|---|
| Số điện thoại cho nút Gọi | ⏳ chưa có, đang dùng `+84 900 000 000` |
| Link hoặc số Zalo | ⏳ chưa có |
| Link 360VR | ⏳ chưa có, không có thì bỏ nút |
| Chốt hướng headline hero | ⏳ xem mục 3 section 1 |
| Ảnh hero độ phân giải cao hơn 1858px | ⏳ tuỳ chọn, không có vẫn làm được |
| Xác nhận license webfont | ⏳ cần trước khi deploy, không cản việc code |
| Ảnh CGI Norton Park cho section Tiện ích | ⏳ chưa có, dùng placeholder |

---

## 9. Ngoài phạm vi lần này

- Nối endpoint nhận lead và pixel Meta, TikTok
- Meta CAPI phía server
- Trang cảm ơn sau khi gửi form
- Bản branding dài và variant B
- Trang `norton_park_coming_soon.html`

---

## 10. Tự kiểm trước khi code

- [x] Mỗi quyết định bố cục có lý do, không làm theo cảm tính
- [x] Mọi màu và font lấy từ brand guideline, không tự chế
- [x] Logic conversion hai bước của variant A giữ nguyên
- [x] Không có section nào lặp nền với section liền kề
- [x] Hoạ tiết giới hạn 6 mảng lớn trong toàn trang
- [x] Animation bản đồ đã thử nghiệm thật, không phải giả định
- [x] Có phương án mobile riêng cho bản đồ
- [x] Ngân sách hiệu năng dưới 550 KB
- [x] Tương phản CTA đã tính toán, tránh lỗi Champagne Bronze trên nền sáng
- [ ] Chờ bạn chốt headline hero và ba dữ liệu liên hệ

---

*Lập ngày 03/09/2026. Chốt bản này mới bắt đầu code.*
