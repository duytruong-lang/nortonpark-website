# Norton Park — Landing Page, PLAN v2

> Bản sửa đổi sau vòng feedback ngày 04/09/2026. Thay thế các phần tương ứng trong `PLAN.md`.
> Những gì không nhắc tới trong file này thì giữ nguyên như PLAN v1 đã duyệt.
> **Chốt bản này mới bắt đầu sửa code.**

---

## 0. Tóm tắt quyết định vòng này

| Hạng mục | Quyết định |
|---|---|
| Màu highlight bản đồ | Charcoal Grey `#3C3C3C` làm nét chính, Off White `#FBFAF6` làm viền lót |
| Trục được highlight | QL13 và Đại lộ Bình Dương, cùng Vành đai 3 đoạn Mỹ Phước Tân Vạn |
| Cách dựng tuyến | Vẽ tay, bỏ hướng trích tự động cho phần highlight |
| Chuyển động | Chạy liên tục, tự dừng khi section trôi khỏi tầm nhìn |
| Loá sáng | Quét sáng trên khối lục giác NORTON PARK nằm trong bản đồ |
| Phạm vi hiệu ứng | Cắt cứng trong khung bản đồ, không chạm bảng chú thích |
| Nav | Nền Beige Sand đặc ngay từ đầu, dùng logo Primary hai tông |
| Logo nền tối | File SVG một tông Beige Sand, không dùng bộ lọc CSS nữa |
| Hero | Crop hai bên ảnh gốc về tỉ lệ khớp khung hero |
| Bóng mờ quả chò | Bỏ hẳn |
| Nền hoạ tiết sau Tiện ích | Bỏ hẳn |
| Dải chevron | Giữ độ đậm thật, dùng làm vạch ngăn giữa các section |
| Dấu quả chò | Đặt trên mọi đầu section, và làm dấu đầu dòng danh sách |

---

## 1. Ba lỗi trong bản đang chạy, phải sửa

Phát hiện khi đào sâu để trả lời feedback. Ghi ra đây để bạn nắm, không phải để bào chữa.

**1.1 Thứ tự lan toả là giả.** Mọi path trong file bản đồ đều mang `transform="matrix(...)"`. Khi tính khoảng cách từ pin để xếp độ trễ, tôi đo toạ độ thô chưa qua ma trận. Hiệu ứng vẫn chạy nhưng thứ tự các tuyến sáng lên là ngẫu nhiên, không toả ra từ dự án như plan v1 mô tả. Đã tính lại đúng trong ma trận.

**1.2 Mười chín trên hai mươi lăm tuyến là rác.** Bộ lọc theo màu nét bắt nhầm các vạch trang trí nhỏ trong bảng chú thích và các dấu lá cạnh mốc thời gian. Chỉ 6 path là đường thật.

**1.3 QL13 vắng mặt hoàn toàn.** Trục mặt tiền dự án được vẽ bằng hình tô màu `#F0B85E` chứ không phải nét, nên bộ lọc theo màu nét không thể thấy. Đây chính là lý do highlight cũ bám vào mấy đoạn vành đai xa tít phía tây, không liên quan tới câu chuyện bán hàng.

**Kết luận:** bỏ hướng trích tự động cho lớp highlight. Lớp trích tự động vẫn giữ cho phần nền bản đồ hiện dần, vì ở đó nó vẫn đúng việc.

---

## 2. Bản đồ, thiết kế lại phần hiệu ứng

### 2.1 Cấu tạo ba lớp

| Lớp | Nội dung | Cách dựng |
|---|---|---|
| 1. Nền | Ảnh WebP bản đồ đã duyệt | Giữ nguyên |
| 2. Highlight | 2 tuyến vẽ tay | Polyline SVG dựng thủ công, cùng viewBox với ảnh nền |
| 3. Điểm nhấn | Vòng pin, sóng toả, quét sáng lục giác | HTML và SVG định vị theo phần trăm |

Lớp 2 và 3 đặt trong một `clipPath` hình chữ nhật ôm đúng vùng vẽ của bản đồ. Bảng chú thích và mọi lề ngoài nằm ngoài vùng cắt, không nét nào lọt ra được. Đây là cách sửa dứt điểm lỗi ở hình 1 và hình 2 bạn gửi.

### 2.2 Kiểu nét highlight

```
Viền lót   Off White #FBFAF6, dày 26 đơn vị viewBox, bo tròn hai đầu
Nét chính  Charcoal Grey #3C3C3C, dày 13, nét đứt 70 hở 42
```

Hai lớp chồng nhau tạo cấu tạo dày và có viền sáng, khác hẳn nét đứt mảnh màu đồng mà bản đồ dùng cho vành đai chưa hoàn thiện. Cộng thêm việc nét của ta chuyển động còn nét của bản đồ đứng yên, khả năng nhầm lẫn gần như bằng không.

Viền lót còn giữ cho nét luôn đọc được khi chạy qua cả vùng đường olive đậm lẫn vùng nền kem sáng.

### 2.3 Hai tuyến vẽ tay

**Tuyến 1, QL13 và Đại lộ Bình Dương.** Trục cam chạy dọc suốt bản đồ, ôm mặt tiền dự án. Vẽ từ vị trí dự án lan về hai đầu.

**Tuyến 2, Vành đai 3 đoạn Mỹ Phước Tân Vạn.** Tuyến chéo từ khu dự án xuống nút giao Tân Vạn rồi về hướng TP HCM.

Cả hai đều vẽ theo hướng bắt đầu từ điểm gần dự án nhất, để nét đứt chạy ra ngoài chứ không chạy ngược vào. Đây là chi tiết nhỏ nhưng quyết định việc người xem đọc ra "từ đây đi được tới đâu" thay vì "có cái gì đó đang nhấp nháy".

Bản đồ tiện ích cũng áp dụng hai tuyến tương ứng trên khung hình của nó.

### 2.4 Chuyển động

| Thành phần | Hành vi |
|---|---|
| Nét đứt trên tuyến | Chạy liên tục ra xa dự án, một vòng 2,6 giây, tuyến tính đều |
| Vòng khoá pin | Siết vào một lần khi section xuất hiện, rồi giữ nguyên |
| Sóng toả từ pin | Lặp 3 giây một nhịp |
| Quét sáng lục giác | Vệt sáng chéo quét ngang khối NORTON PARK, 4,5 giây một nhịp, lệch pha với sóng pin |
| Nền bản đồ hiện dần | Vòng tròn mở rộng từ vị trí dự án, chạy một lần |
| Mốc thời gian | Hiện lần lượt một lần |

**Tự dừng khi ra khỏi tầm nhìn.** Dùng `IntersectionObserver` gắn class vào section, CSS đặt `animation-play-state: paused` khi mất class. Không tốn CPU và pin khi người xem đã cuộn qua.

Quét sáng trên lục giác dựng bằng một hình chữ nhật phủ đúng vùng khối lục giác, tô bằng gradient chéo trong suốt tới trắng rồi lại trong suốt, dịch chuyển ngang, đặt ở chế độ hoà trộn sáng. Không đụng vào ảnh gốc.

### 2.5 Điều kiện giảm chuyển động

`prefers-reduced-motion: reduce` tắt toàn bộ: nét đứt đứng yên, sóng và quét sáng không chạy, bản đồ hiện ngay không có vòng mở rộng.

---

## 3. Logo, sửa đúng guideline

### 3.1 Tôi đã sai ở đâu

Guideline trang 4 chia ba nhóm màu logo. Tôi trích màu trực tiếp từ file:

| Nhóm | Nền | Màu logo | Ràng buộc |
|---|---|---|---|
| Primary | Trắng | Dark Pine + cánh hoa Champagne Bronze | Khuyến nghị cho hầu hết ứng dụng |
| Secondary | Hoa Dầu Brown | Beige Sand `#DDD4C0`, một tông | |
| Secondary | Dark Pine | Beige Sand `#DDD4C0`, một tông | |
| Monochrome | Gần đen | Trắng tinh `#FFFFFF` | Chỉ dùng khi in ấn hoặc sản xuất bị hạn chế màu |

Bản đang chạy dùng trắng tinh, tức bản Monochrome, trong khi web không hề bị hạn chế màu. Lại còn tạo ra bằng bộ lọc `brightness(0) invert(1)` nên mất luôn cánh hoa dầu. Sai cả về màu lẫn về cách làm.

### 3.2 Cách sửa

**Dựng file `norton-park-logo-beige.svg`**, tô Beige Sand `#DCD3C0` trực tiếp lên path, một tông đúng bản Secondary. Không còn bộ lọc CSS ở bất kỳ đâu trong trang.

| Vị trí | Nền | Logo dùng |
|---|---|---|
| Nav | Beige Sand đặc | Primary hai tông, đúng bản guideline khuyến nghị |
| Footer | Hoa Dầu Brown | Beige Sand một tông, đúng bản Secondary |

Nav đổi sang nền đặc ngay từ đầu theo lựa chọn của bạn, nên cũng khớp luôn với mẫu Website Design trang 27 của guideline. Hệ quả là hero bắt đầu ngay dưới nav thay vì chạy dưới nav, ảnh hero được trọn khung, không bị thanh nav cắt mất một dải.

### 3.3 Quy tắc chốt cho về sau

Không bao giờ đổi màu logo bằng CSS. Mỗi biến thể màu là một file riêng, lấy đúng từ bảng trang 4. Ba file cần có: Primary hai tông, Beige Sand một tông, và bản đen một tông để dự phòng.

---

## 4. Hoạ tiết và dấu quả chò

### 4.1 Bỏ

- **Bóng mờ quả chò** trong section Bối cảnh: bỏ hẳn, xoá cả file khỏi trang.
- **Nền hoạ tiết lặp** sau section Tiện ích: bỏ hẳn. Ở độ đậm thật nó ăn mất chữ, mà hạ opacity thì bạn thấy xấu, nên cách đúng là không dùng làm nền chữ.

### 4.2 Giữ và tăng

**Dải chevron ngăn section, độ đậm thật.** Từ 4 tới 5 dải, đặt tại các mối nối cần ngắt nhịp: sau hero, trước Bản đồ, trước Form, trên đầu Footer. Cao 40 tới 56px, không hạ opacity.

**Dấu quả chò trên mọi đầu section.** Đặt ngay trên tiêu đề, canh cùng lề với tiêu đề, cỡ khoảng 26px, màu Champagne Bronze trên nền sáng và Beige Sand trên nền tối. Tạo nhịp nhận diện chạy dọc trang.

**Dấu quả chò làm đầu dòng danh sách.** Áp cho danh sách uy tín và danh sách vị trí, thay các biểu tượng nét mảnh chung chung hiện tại.

> **Một điểm tôi muốn bạn cân nhắc.** Danh sách vị trí đang dùng ba biểu tượng khác nhau là ghim, toà nhà, trung tâm thương mại. Ba biểu tượng đó đang mang nghĩa riêng cho từng dòng. Đổi hết sang cùng một dấu quả chò sẽ đậm chất Norton hơn nhưng mất phần nghĩa đó. Tôi sẽ làm theo yêu cầu của bạn, chỉ nêu ra để bạn biết mình đánh đổi cái gì. Riêng ba thẻ Tiện ích tôi đề xuất giữ biểu tượng riêng, vì đó là thứ duy nhất phân biệt ba thẻ với nhau khi ảnh chưa có.

### 4.3 Giới hạn để không quá tay

Tổng cộng trong trang: tối đa 5 dải chevron, 7 dấu quả chò đầu section, và các dấu đầu dòng. Không thêm mảng hoạ tiết lớn nào khác.

---

## 5. Hero

### 5.1 Vấn đề

Ảnh gốc 1858 x 796, tỉ lệ 2,33:1, quá ngang so với khung hero. Trình duyệt cắt hai bên nên vào trang là mất một phần bố cục.

### 5.2 Cách xử lý

Crop ảnh gốc về **tỉ lệ 1,85:1**, lấy cụm tháp chính làm tâm, cắt bớt hai rìa. Kích thước sau crop khoảng 1473 x 796. Khung hero cũng đặt đúng tỉ lệ này nên trình duyệt không phải cắt thêm gì, vào trang là thấy trọn bố cục.

Trên mobile khung dựng đứng nên vẫn phải cắt. Tôi đặt `object-position` lệch về phía cụm tháp để phần bị cắt rơi vào vùng trời trống bên trái.

Vẫn giữ hiệu ứng zoom out 12 giây, chạy một lần.

Ảnh gốc chỉ rộng 1858px nên sau khi crop còn 1473px, trên màn 2K sẽ hơi mềm nét. Nếu xin được bản render lớn hơn từ chủ đầu tư thì chất lượng tốt hơn hẳn, còn không thì vẫn dùng được.

### 5.3 Hệ quả từ việc nav đổi sang nền đặc

Nav không còn đè lên ảnh nữa. Lớp scrim chéo màu nâu vì thế cũng nhẹ đi được, chỉ cần đủ cho khối chữ đọc rõ ở góc dưới trái, không cần phủ cả vùng trên như trước. Ảnh hoàng hôn được khoe nhiều hơn.

---

## 6. Kết quả audit typography

Đã đối chiếu từng selector với guideline mục 1.9.

| Vai trò | Font | Áp cho | Kết luận |
|---|---|---|---|
| Headline | The Seasons | h1, h2, h3, số liệu lớn, số mốc thời gian | Đúng |
| Sub-heading và nhãn | Futura | eyebrow, chuyển ngữ, CTA, nhãn số liệu, tab, nút phóng to, đơn vị mốc, nhãn form, tagline footer | Đúng |
| Body | Gotham | toàn bộ đoạn văn, ô nhập form | Đúng |

Không có chỗ nào dùng The Seasons dưới 18px, nên dấu tiếng Việt không bị vỡ ở cỡ nhỏ.

**Một chỗ cần sửa:** ba dòng tiêu đề trong section Vị trí, gồm Mặt tiền Đại lộ Bình Dương, Liền kề VSIP 1, AEON Mall Bình Dương, hiện dùng Gotham Bold. Theo guideline đây là vai trò sub-heading nên phải là Futura. Sẽ đổi.

Ngoài ra không phát hiện vi phạm nào khác về hierarchy.

---

## 7. Danh sách việc, theo thứ tự thực hiện

1. Dựng file logo Beige Sand một tông, bỏ mọi bộ lọc CSS trên logo
2. Đổi nav sang nền Beige Sand đặc, dùng logo Primary
3. Crop ảnh hero về 1,85:1, chỉnh lại khung hero và lớp scrim
4. Bỏ bóng mờ quả chò và nền hoạ tiết sau Tiện ích
5. Thêm dấu quả chò đầu section và dấu đầu dòng danh sách
6. Tăng dải chevron lên độ đậm thật, bố trí lại vị trí
7. Đổi ba tiêu đề trong section Vị trí sang Futura
8. Vẽ tay hai tuyến highlight cho từng bản đồ
9. Dựng lại lớp hiệu ứng: màu Charcoal, viền lót, vùng cắt cứng, chạy liên tục, tự dừng ngoài tầm nhìn
10. Thêm quét sáng trên khối lục giác NORTON PARK
11. Tính lại độ trễ trong đúng hệ toạ độ đã qua ma trận
12. Chụp kiểm tra lại toàn bộ ở ba khổ màn hình, đối chiếu lần nữa với guideline

---

## 8. Sẽ kiểm tra lại những gì

- Không còn bộ lọc màu nào tác động lên logo, ở bất kỳ trạng thái nào
- Không có nét hiệu ứng nào chạm vào bảng chú thích, kiểm bằng ảnh chụp ở cả hai tab
- Nét highlight không bị nhầm với nét đứt vành đai chưa hoàn thiện, kiểm bằng mắt trên ảnh chụp
- Animation dừng thật khi section ra khỏi tầm nhìn
- Hero vào trang là thấy trọn bố cục, không bị cắt ở 1440, 768 và 390
- Font đúng vai trò trên mọi thành phần
- Không tràn ngang, không lỗi console, không request hỏng
- Dung lượng lần tải đầu không tăng quá 5% so với bản hiện tại

---

## 9. Vẫn chờ dữ liệu, không cản việc code

Số điện thoại, link Zalo, ảnh CGI Norton Park cho Tiện ích và Vị trí, endpoint form, xác nhận license webfont. Ảnh hero độ phân giải cao hơn là tuỳ chọn.

---

*Lập ngày 04/09/2026. Chốt bản này mới bắt đầu sửa code.*
