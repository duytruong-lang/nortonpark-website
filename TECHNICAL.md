# Norton Park — Landing Page Package

Gói giao hàng độc lập. Zip cả thư mục là gửi được cho client, không cần kèm file nào từ bên ngoài.
Mở `norton_park_lead_a.html` bằng trình duyệt để xem.

Không dùng thư viện ngoài. Không có build step.

---

## 1. Cấu trúc

```
norton_park_landing/
├── norton_park_lead_a.html    trang chính, 617 dòng
├── README.md                  file này
├── PLAN.md                    kế hoạch vòng 1, lưu trữ
├── PLAN-v2.md                 kế hoạch vòng 2, lưu trữ
├── font-specimen.html         trang mẫu font, màu, logo, CTA
├── css/
│   ├── fonts.css              7 khai báo @font-face, 72 dòng
│   ├── brand-tokens.css       nút chỉnh tỉ lệ, màu, thang chữ, nhịp, 173 dòng
│   └── page.css               toàn bộ layout và animation, 1108 dòng
├── js/page.js                 dữ liệu, i18n, carousel, form, popup, 951 dòng
├── fonts/                     7 file WOFF2, tổng 116 KB
├── preview/                   ảnh chụp thật từng section, không phải file chạy
└── assets/
    ├── images/                hero và ảnh Storytelling, mỗi ảnh 2 bản ngang dọc
    ├── logos/                 logo SVG PNG WebP, biểu tượng quả chò 4 màu
    ├── patterns/              hoạ tiết lặp và viền dọc
    ├── maps/                  bản đồ WebP, bản gốc trong full/, 2 file SVG phủ
    └── news/                  ảnh tin tức, hiện đang trống
```

**Sửa gì thì sửa ở đâu:**

| Muốn đổi | File |
|---|---|
| Chữ tiếng Việt | `norton_park_lead_a.html` |
| Chữ tiếng Anh | `js/page.js`, object `I18N.en` |
| Nội dung tiện ích, căn hộ, tin tức, logo đối tác | `js/page.js`, sáu mảng ở đầu file |
| **Tỉ lệ cả trang trên màn lớn nhỏ khác nhau** | `css/brand-tokens.css`, `font-size` của `:root` |
| Màu, thang chữ, khoảng cách chuẩn | `css/brand-tokens.css` |
| Bố cục và animation | `css/page.css` |

---

## 2. Mười hai khối nội dung

| # | Section | Nội dung |
|---|---|---|
| 1 | Hero | Tràn kín một màn hình `100dvh`. Câu quote, nút Đăng ký tư vấn riêng và nút Khám phá Norton Park dạng trong suốt. Ảnh zoom out nhẹ từ 1.03 trong 6 giây, mobile dùng bản crop dọc |
| 2 | Storytelling | Ảnh phố thương mại tràn viền, lưới hai cột: trái là tiêu đề giữa hai đường kẻ, phải là đoạn kể chuyện |
| 3 | Facts and Figures | Tám ô số thật, dải bảy loại sản phẩm, dải ba mục có biểu tượng. Nền Off White phủ hoạ tiết quả chò chìm |
| 4 | Vị trí trong tổng thể | Nền Hoa Dầu Brown, viền hoạ tiết dọc, khung ảnh 4:5 và ba điểm nhấn vị trí |
| 5 | Hai bản đồ | Thanh tiêu đề tĩnh ở trên gồm hai tab và nút VR 360, dải bốn mốc, rồi bản đồ hiện trọn vẹn. Có animation tuyến sáng, pin dự án, lightbox phóng to |
| 6 | Lifestyle and Amenities | Carousel năm nhóm tiện ích, thẻ giữa lớn và hai thẻ ló hai bên. Có nút mũi tên, phím mũi tên, vuốt ngang |
| 7 | Block B và Block C | Hai toà song song, mỗi toà một khung ảnh và ba dòng đặc điểm |
| 8 | The Residences | Tab bốn loại căn cộng carousel ảnh bên trong mỗi loại |
| 9 | Tin tức | Ba thẻ tin nền tối, có nhãn loại và ngày. Dữ liệu nằm trong mảng JS, đặt tên trường sẵn để nối CMS |
| 10 | Form đăng ký | Hai bước, panel liên hệ bên phải. Kèm một form popup riêng |
| 11 | Chủ đầu tư | Giới thiệu Gamuda Land bên trái, 5 ô logo đội ngũ và 7 ô logo dự án bên phải |
| 12 | Footer | Bốn cột, dải pháp nhân, dải miễn trừ. Cao 559px và **không khoá màn hình** |

**Ngoài 12 khối:** Nav ghim, Drawer sidebar 6 mục, ba nút nổi (Gọi, Zalo, lên đầu trang), lightbox bản đồ, popup form.

---

## 3. Hệ co giãn

Cả trang có **một nút chỉnh tỉ lệ duy nhất**: `font-size` của `:root`. Mọi cỡ chữ và mọi kích thước phần tử đều là `rem` nên đi theo nó.

| Chế độ | Công thức | Vì sao |
|---|---|---|
| Ngoài Screen Lock | `clamp(16px, 0.62vw + 13.7px, 19px)` | trang cuộn tự do, chỉ bề ngang là ràng buộc |
| Trong Screen Lock | `clamp(15px, 1.05vmin + 8px, 26px)` | section khoá 100dvh nên chiều cao mới là ràng buộc chặt. `vmin` là cạnh nhỏ hơn, nên cửa sổ càng thấp chữ càng nhỏ |

Đo thật: 360px cho 16,0px; 1440x900 cho 17,4px; **1440x650 cho 15,0px**; 1920x1080 cho 19,3px; **1920x700 cho 15,3px**; 2560x1440 cho 23,1px; 3008x1692 cho 25,8px.

Dải nội dung `--wrap` là `min(94vw, 2800px)`, không còn trần pixel thấp. Ở 2560 lề mỗi bên còn 69px thay vì 433px.

Khoảng cách dọc của Facts và Chủ đầu tư lấy `vh` làm số giữa, vì hai section này thuần chữ, không có khung ảnh nào để `flex:1` kéo giãn. Nhờ vậy nội dung lấp 87 tới 100% chiều cao section ở mọi khổ thay vì trôi lơ lửng giữa nền.

---

## 4. Screen Lock

Từ **1041px rộng và 600px cao** trở lên, mỗi section khoá đúng một màn hình, cuộn kiểu nam châm.

**Vì sao ngưỡng là 1041px.** Dưới 1040px mọi lưới hai cột sụp về một cột, và một cột thì không vừa một màn hình. Đo ở 1024x768: Facts tràn 110px, Blocks tràn 116px, Chủ đầu tư tràn 948px. Dưới ngưỡng này trang trở về cuộn bình thường, đúng hơn là khoá màn rồi để từng section mọc thanh cuộn riêng.

**Được miễn trừ:** Form nhận `min-height` thay vì `height`, Footer giữ chiều cao tự nhiên.

`scroll-snap-stop: normal` chứ không phải `always`, để người xem lăn mạnh vẫn lướt qua nhiều màn một lúc tới được form.

**Nguyên tắc chiều cao, rút ra từ ba lần sửa:** trong Screen Lock, khung ảnh phải lấy chiều cao từ chỗ còn lại (`flex:1`), không lấy từ `aspect-ratio`. Đặt tỉ lệ cứng từng làm Blocks tràn 415px và Residences tràn 313px ở 1366x768.

**Đã kiểm 22 khổ màn hình, không khổ nào tràn:**

```
320x568   360x740   390x844   430x932   768x1024
820x1180  1024x600  1024x768  1050x600  1100x700
1180x820  1280x800  1366x768  1440x650  1440x900
1600x900  1920x700  1920x1080 2560x1080 2560x1440
3008x1692 3840x2160
```

---

## 5. Animation bản đồ

Điểm loá hình sao chạy dọc tuyến, kéo theo dải sáng dài dần phía sau. Hết đường thì giữ một nhịp, tắt dần, nghỉ, rồi lặp lại. Chạy liên tục khi bản đồ còn trong tầm nhìn, tự dừng khi cuộn qua.

**Chu kỳ 4,6 giây:** chạy 2,2s, giữ 0,8s, tắt dần 1,0s, nghỉ 0,6s. Ba tuyến lệch pha nhau 0,22s.

| Mốc | Diễn ra |
|---|---|
| 0,05s | Bản đồ hiện dần theo vòng tròn mở rộng từ đúng vị trí dự án |
| 0,34s | Vòng khoá siết vào pin |
| 0,60s | Bắt đầu chu kỳ dải sáng |
| 1,20s | Vệt sáng trắng quét ngang khối lục giác NORTON PARK |
| 1,30s | Vòng sóng toả ra từ pin, 3 giây một nhịp |

**Dải sáng ba lớp**, phủ đè lên thân đường nhưng mỏng hơn nên hai mép đường vẫn lộ ra:

| Lớp | Màu | Dày |
|---|---|---|
| Quầng | `#B8874F` | 20 |
| Thân | `#E9B96B` | 13 |
| Lõi | `#FFF1D0` | 5,5 |

Bộ màu lấy gốc Champagne Bronze `#A78061` nhưng đẩy độ bão hoà lên. Bản nhạt hơn đã thử và bị chìm vào nền kem của bản đồ.

**Điểm loá** là ngôi sao bốn cánh chạy bằng `offset-path: path()`, bám đúng đường cong của tuyến.

> **Hai bẫy kỹ thuật cần nhớ:**
> `stroke-dashoffset` không nội suy được khi giá trị viết bằng `calc()` với biến CSS. Phải dùng `pathLength="1"` rồi cho dasharray và dashoffset đều bằng 1.
> `offset-path: path()` không nhận biến CSS. Dữ liệu đường phải ghi thẳng vào `style` của từng phần tử lúc sinh file SVG.

**Ba quy tắc riêng của khối bản đồ:**

1. **Không được `object-fit:cover` cho ảnh bản đồ.** Lớp SVG phủ căn theo toạ độ ảnh, cắt ảnh là lệch hết mọi tuyến sáng. Cách đúng là `.map-canvas` khoá tỉ lệ rồi cho `width:min(100cqw, calc(100cqh * var(--ar)))`.
2. **`.map-pin` phải nằm bên trong `.map-canvas`.** `--px` và `--py` là phần trăm, hai hộp khác nhau là pin trôi khỏi vị trí thật, mà lệch ít nên rất khó phát hiện.
3. **`--ar` do JS ghi, không phải hằng số.** Bản đồ tiện ích tiếng Việt là 1800x916 còn tiếng Anh là 1800x927. Đổi ngôn ngữ mà giữ tỉ lệ cũ là làm méo một trong hai bản.

**Vì sao không còn thanh HUD nổi.** Bản trước có một dải thẻ nổi đè lên bản đồ, che 16 tới 29% diện tích, mà nội dung trong đó là lặp lại thứ bản đồ đã in sẵn. Bản này chuyển thành thanh tĩnh ở trên.

---

## 6. Popup form

```
Đã qua 3 section  ->  hiện popup  ->  mỗi phiên đúng một lần
```

**Không hiện khi:** đã gửi form ở bất kỳ đâu (`localStorage.np_lead_sent`), đang ở chính section form, hoặc drawer hay lightbox đang mở.

**Rủi ro SEO đã tính tới.** Google phạt "intrusive interstitial" với trang vào từ kết quả tìm kiếm, nặng nhất trên di động khi popup che phần lớn màn hình. Ba cách giảm rủi ro đã áp dụng: chỉ hiện sau 3 section, mỗi phiên một lần, và trên mobile panel ảnh bị ẩn nên popup chỉ che **54%** chiều cao (48% trên desktop).

**Trường ẩn `form_position`** phân biệt hai nguồn lead: `page_end` cho form ở section, `popup` cho form popup. CRM và `dataLayer` nhờ đó biết popup có đáng giữ hay không.

---

## 7. Font

Convert từ `Brand kit/Font` sang WOFF2, subset Latin + Latin Extended + Vietnamese.

| File | Nguồn | Vai trò | KB |
|---|---|---|---|
| `seasons-300.woff2` | SVN-TheSeasons-Light | Hero H1 | 17,0 |
| `seasons-400.woff2` | SVN-TheSeasons-Regular | H2 section | 17,2 |
| `seasons-700.woff2` | SVN-TheSeasons-Bold | H3 thẻ | 16,7 |
| `futura-400.woff2` | SFUFuturaBook | Eyebrow, nhãn, nav | 9,7 |
| `futura-700.woff2` | SFUFuturaExtraBold | Nhãn đậm, nút | 10,5 |
| `gotham-400.woff2` | SVN-Gotham Book | Body | 15,5 |
| `gotham-700.woff2` | SVN-Gotham Bold | Body đậm | 15,2 |

Gốc 477 KB xuống 116 KB. Đã chạy script kiểm tra: đủ 134 ký tự có dấu tiếng Việt trên cả 7 face.

Bộ SFUFutura không có weight Bold upright, chỉ có BoldOblique. Face 700 dùng ExtraBold thay thế.

---

## 8. Kết quả kiểm tra

Chạy trên Chromium thật.

| Hạng mục | Kết quả |
|---|---|
| Lỗi JavaScript | Không có |
| Request thất bại | Không có |
| Tràn section, **22 khổ màn hình** từ 320x568 tới 3840x2160 | Không khổ nào tràn |
| Thanh cuộn ngang, 22 khổ | Không khổ nào có |
| Co giãn trên màn lớn | Dải nội dung và cỡ chữ bám theo màn hình tới 3008px, sau đó giữ nguyên |
| Chữ nav trên Hero, 1440x900 | **11,52 : 1** trung vị, 9,40 : 1 ở p90 |
| Chữ nav trên Hero, 390x844 | **7,39 : 1** trung vị |
| Câu quote Hero (chữ lớn, ngưỡng 3 : 1) | 7,19 : 1 trung vị, **4,01 : 1** ở p90 |
| Nút trong suốt trên ảnh | 7,06 : 1 trung vị, 5,08 : 1 ở p90 |
| Chuyển VI sang EN | Đổi đủ 137 khoá, đổi placeholder, tiêu đề trang, `html lang`, ảnh bản đồ và tỉ lệ khung |
| Bản đồ đổi ngôn ngữ | `--ar` cập nhật đúng: 1,9651 cho VI và 1,9417 cho EN |
| Hai tab bản đồ | Mỗi tab 3 nhánh tuyến, animation chạy lại khi đổi tab, tự dừng ngoài tầm nhìn |
| Carousel tiện ích | 5 nhóm, nút, chấm, phím mũi tên, vuốt ngang |
| Tab căn hộ | 4 loại, đổi tab reset carousel ảnh, số thanh khớp số ảnh trong kho |
| Form section | Hai bước, validate, màn cảm ơn, `dataLayer` đủ sự kiện |
| Popup | Hiện sau 3 section, không hiện lại sau reload cùng phiên, không hiện khi đã gửi lead, không hiện khi đang ở section form |
| Drawer và lightbox | Mở đóng đúng, khoá cuộn đúng, Esc đóng được |
| Em dash và en dash | Không còn ký tự nào |

**Dung lượng lần tải đầu:** khoảng **658 KB khi server bật gzip**, 19 file. Trong đó code và logo SVG 69 KB, font 102 KB, ảnh 487 KB. Bản đồ, ảnh gốc cho lightbox và ảnh các section dưới chỉ tải khi người xem cuộn tới.

Hai file logo SVG nặng 187 KB và 182 KB ở dạng thô nhưng gzip xuống còn 14 KB và 13 KB. **Bắt buộc bật gzip hoặc brotli trên server.**

---

## 9. Còn chờ dữ liệu

Mọi chỗ chờ đều mang chip viền đứt nét. Đếm bằng `document.querySelectorAll('.pending').length`.

| Việc | Trạng thái |
|---|---|
| **Tin tức** | Ba tin hiện tại là **tin mẫu**, phải thay hết trước khi công khai. Cần cả URL bài viết chi tiết |
| **Link sa bàn ảo 360** | `#REPLACE_WITH_VR_URL`, ở hai nút: nav và bản đồ |
| **Endpoint nhận lead** | `#REPLACE_WITH_ENDPOINT`, ở cả hai form |
| Thông tin liên hệ | Hotline, email, địa chỉ dự án. Hiện ở Form, Footer và Popup |
| Thông tin pháp nhân | Bốn dòng ở Footer |
| Số liệu Facts | Bảy loại sản phẩm, quy mô công trình, bàn giao dự kiến, pháp lý và sở hữu |
| Diện tích từng loại căn | File context không có dòng nào về diện tích Norton Park |
| Ảnh Podium Duplex | Là căn biểu tượng của dự án mà chưa có ảnh nào |
| Ảnh Lifestyle, Blocks, Vị trí, Residences | Khung placeholder đã ghi rõ kích thước cần chụp |
| 12 logo đối tác và dự án | Nên là PNG hoặc SVG nền trong suốt, tỉ lệ ngang khoảng 3:2 |
| Danh sách đội ngũ thật | Năm nhãn vai trò hiện tại là **giả định**, rút ra từ ví dụ client gửi |
| Số điện thoại và Zalo | `tel:+84900000000`, `zalo.me/0900000000` |
| Bốn link pháp lý ở Footer | `#REPLACE_WITH_PRIVACY_URL` và ba link tương tự |
| Pixel Meta và TikTok | Chưa cắm |
| License webfont | Cần xác nhận trước khi deploy public |

**`<meta name="robots" content="noindex">` vẫn còn trong `<head>`.** Bắt buộc gỡ trước khi làm SEO, và chỉ gỡ khi trang thật sự sẵn sàng công khai.

---

## 10. Ghi chú kỹ thuật

- Animation bằng CSS, phát hiện vào tầm mắt bằng `IntersectionObserver`, không có listener scroll nào.
- `prefers-reduced-motion: reduce` tắt toàn bộ chuyển động, kể cả Screen Lock, hero zoom và animation bản đồ.
- **Không bao giờ đổi màu logo bằng CSS.** Mỗi biến thể là một file riêng, lấy đúng từ bảng Logo Colours trang 4 guideline. Bản trắng tinh là bản Monochrome, guideline chỉ cho dùng khi in ấn bị hạn chế màu, nên không dùng trên web.
- **Logo Gamuda Land là logo của bên khác.** Chữ đỏ `#E31937`, trên nền Hoa Dầu Brown chỉ đạt 1,79 : 1 nên ở Footer bắt buộc đặt lên tấm nền sáng `.gam-plate`, đạt 4,26 : 1. Không nhuộm logo.
- Hoạ tiết quả chò gốc có hoa văn nằm ở kênh màu chứ không phải kênh alpha. Tô đè một màu phẳng sẽ xoá mất hoa văn.
- Hoạ tiết lặp dùng ở ba section với `opacity` 0,045 tới 0,062 cộng `mix-blend-mode: multiply`. File đã thu về 572x540 và 77 KB, vì `background-size` chỉ 280px nên không cần bản lớn hơn.
- Champagne Bronze `#A78061` trên Beige Sand `#DCD3C0` chỉ đạt 2,4 : 1. Vì vậy CTA trên nền sáng dùng nền bronze đặc chữ trắng, bản viền rỗng chỉ dùng trên nền tối. Nút trong suốt trên ảnh Hero cũng không dùng màu này, mà dùng viền trắng cộng `backdrop-filter`.
- Token `--tx-on-dark-2` dùng Warm Sand `#D5CEB8` để chữ trên nền Hoa Dầu Brown đạt WCAG AA.
- Màu Zalo gốc `#0068FF` không nằm trong bảng màu thương hiệu nên nút Zalo dùng Dark Pine.
- Badge Gamuda Land đỏ không dùng trên landing page theo yêu cầu client, badge chỉ áp cho post social.
- **Không bao giờ viết cỡ chữ hoặc kích thước phần tử bằng px.** Dùng `rem` để nó đi theo nút chỉnh tỉ lệ. Toàn bộ 35 chỗ px còn sót đã đổi ở vòng này: biểu tượng, nút tròn, padding CTA và tab, chấm carousel, bề ngang logo, panel popup và drawer, bo góc.
- `container-type: size` kéo theo `contain: size`, tức element không còn lấy chiều cao từ nội dung. Trong file này nó chỉ được bật bên trong Screen Lock, nơi lưới đã cho thẻ một chiều cao xác định.
- Trường `website` trong cả hai form là bẫy bot. Bot điền vào là JS bỏ qua lượt gửi. Không xoá, không đổi thành `display:none`.
