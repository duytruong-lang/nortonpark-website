/* ==========================================================================
   NORTON PARK - LANDING PAGE (LEAD VARIANT A)
   Vanilla JavaScript, khong thu vien, khong build step.

   QUY UOC NGON NGU, QUAN TRONG:
   HTML chua ban TIENG VIET. File nay chua ban TIENG ANH.
   Luc khoi dong, script doc text tieng Viet tu DOM vao I18N.vi, nen KHONG
   duoc viet lai chuoi tieng Viet o day. Sua chu tieng Viet thi sua trong HTML.

   MUC LUC
   00. Tien ich chung
   01. Du lieu: LIFE, RESI, NEWS, TEAM, PROJ
   02. Tu dien tieng Anh
   03. Doi ngon ngu
   04. Khoa cuon trang
   05. Nav va Drawer
   06. Vao tam mat
   07. Ban do: tab, hoat anh, phong to
   08. Carousel tien ich
   09. Cac loai can ho
   10. Tin tuc
   11. O logo chu dau tu
   12. Form hai buoc
   13. Popup
   14. Nut noi va UTM
   ========================================================================== */
(function () {
  'use strict';

  /* ---- 00. TIEN ICH CHUNG ---------------------------------------------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function on(el, ev, fn, opt) { if (el) el.addEventListener(ev, fn, opt); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  window.dataLayer = window.dataLayer || [];
  function push(ev, o) {
    o = o || {}; o.event = ev; o.page_variant = 'norton_park_lead_a';
    window.dataLayer.push(o);
  }

  /* ---- 01. DU LIEU ------------------------------------------------------
     Nam nhom tien ich. Anh that chua co, moi nhom giu mot khung cho.
     Khi co anh that chi can dien truong img, phan render khong doi.        */
  var LIFE = [
    { id: 'wellness',
      name: { vi: 'Wellness', en: 'Wellness' },
      desc: { vi: 'Hồ bơi, phòng tập và không gian yoga được bố trí trong khối tiện ích nội khu, tách khỏi trục giao thông chính.',
              en: 'Pool, gym and yoga spaces are arranged within the internal amenity block, set away from the main circulation.' },
      img: '', shot: { vi: 'Hồ bơi và khối wellness nội khu', en: 'Pool and the internal wellness block' } },
    { id: 'green',
      name: { vi: 'Xanh và tĩnh', en: 'Green and Calm' },
      desc: { vi: 'Cảnh quan xanh đan xuyên suốt đời sống thường ngày.',
              en: 'Green landscape woven through everyday life.' },
      img: '', shot: { vi: 'Cảnh quan xanh và lối dạo nội khu', en: 'Landscape and internal walkways' } },
    { id: 'work',
      name: { vi: 'Làm việc và tập trung', en: 'Work and Focus' },
      desc: { vi: 'Co working lounge, không gian làm việc yên tĩnh dành cho cư dân.',
              en: 'A co working lounge, a quiet working space reserved for residents.' },
      img: '', shot: { vi: 'Co working lounge', en: 'The co working lounge' } },
    { id: 'community',
      name: { vi: 'Cộng đồng', en: 'Community' },
      desc: { vi: 'Một cộng đồng quốc tế thân thuộc.',
              en: 'A familiar international community.' },
      img: '', shot: { vi: 'Sinh hoạt cộng đồng cư dân', en: 'Resident community life' } },
    { id: 'retail',
      name: { vi: 'Mua sắm và cà phê', en: 'Retail and Café' },
      desc: { vi: 'Shop và F&B, tiện ích hàng ngày trong tầm đi bộ.',
              en: 'Shops and F&B, daily conveniences within walking distance.' },
      img: '', shot: { vi: 'Phố thương mại và cà phê tại podium', en: 'The podium retail street and café' } }
  ];

  /* Bon loai can ho. Truong shots la SO ANH DANG CO TRONG KHO, chua gan.
     Podium Duplex chua co anh nao nen chi mot khung cho.                   */
  var RESI = [
    { id: '1br', shots: 4,
      name: { vi: '1 phòng ngủ', en: '1 Bedroom' },
      tag:  { vi: 'Nhà đầu tư · Chuyên gia', en: 'Investor · Professional' },
      desc: { vi: 'Thông minh, hiệu quả và dễ cho thuê. Phù hợp với chuyên gia và nhà đầu tư.',
              en: 'Smart, efficient and highly rentable. Suited to professionals and investors.' },
      feat: { vi: ['Giải pháp lưu trữ thông minh', 'Góc làm việc tại nhà', 'Bếp mở đầy đủ công năng', 'Ánh sáng tự nhiên dịu'],
              en: ['Smart storage solutions', 'A work from home corner', 'A fully functional open kitchen', 'Soft natural light'] } },
    { id: '2br', shots: 4,
      name: { vi: '2 phòng ngủ', en: '2 Bedroom' },
      tag:  { vi: 'Gia đình · Chuyên gia nước ngoài', en: 'Family · Expatriate' },
      desc: { vi: 'Trái tim linh hoạt của Norton Park, hợp với cả cặp đôi, gia đình nhỏ và người thuê nước ngoài.',
              en: 'The flexible heart of Norton Park, suited to couples, small families and expatriate tenants.' },
      feat: { vi: ['Phòng ngủ thứ hai linh hoạt', 'Phòng khách rộng rãi', 'Bếp đầy đủ công năng', 'Ban công tầm nhìn mở'],
              en: ['A flexible second bedroom', 'A generous living room', 'A fully functional kitchen', 'A balcony with open views'] } },
    { id: '3br', shots: 5,
      name: { vi: '3 phòng ngủ', en: '3 Bedroom' },
      tag:  { vi: 'Gia đình', en: 'Family' },
      desc: { vi: 'Không gian cho đời sống gia đình, phân khu rõ ràng, ánh sáng tự nhiên và bảng màu trầm tĩnh.',
              en: 'Space for family life, with clear zoning, natural light and a calm material palette.' },
      feat: { vi: ['Phân khu ngày và đêm rõ ràng', 'Phòng khách lớn cho gia đình', 'Bếp đầy đủ công năng', 'Ánh sáng tự nhiên ở mọi phòng'],
              en: ['Clear day and night zoning', 'A large family living room', 'A fully functional kitchen', 'Natural light in every room'] } },
    { id: 'duplex', shots: 0,
      name: { vi: 'Podium Duplex', en: 'Podium Duplex' },
      tag:  { vi: 'Bộ sưu tập đặc biệt', en: 'A Special Collection' },
      desc: { vi: 'Bộ sưu tập duplex hiếm có vườn riêng, căn hộ biểu tượng của Norton Park.',
              en: 'A rare duplex collection with private gardens, the signature residence of Norton Park.' },
      feat: { vi: ['Vườn riêng', 'Không gian hai tầng phân khu rõ', 'Riêng tư ở tầng podium', 'Vật liệu hoàn thiện đặc trưng'],
              en: ['A private garden', 'Clearly zoned two level living', 'Privacy at podium level', 'Signature finishing materials'] } }
  ];

  /* TIN TUC. Ba tin MAU, khong phai tin that.
     Cau truc truong dat giong cach CMS thuong tra ve de sau nay khop thang.
     Noi CMS thi chi thay ham lay du lieu, phan render giu nguyen.          */
  var NEWS = [
    { id: 'sample-progress', cat: 'progress', date: '2026-09-01',
      img: '', imgAlt: '',
      title:   { vi: 'Cập nhật tiến độ xây dựng', en: 'Construction progress update' },
      excerpt: { vi: 'Tin mẫu. Toàn bộ tin phải thay bằng nội dung thật trước khi công khai.',
                 en: 'Sample entry. Every item must be replaced with real content before going live.' },
      url: '#REPLACE_WITH_ARTICLE_URL' },
    { id: 'sample-infra', cat: 'infra', date: '2026-08-01',
      img: '', imgAlt: '',
      title:   { vi: 'Cập nhật hạ tầng khu vực', en: 'Regional infrastructure update' },
      excerpt: { vi: 'Tin mẫu. Toàn bộ tin phải thay bằng nội dung thật trước khi công khai.',
                 en: 'Sample entry. Every item must be replaced with real content before going live.' },
      url: '#REPLACE_WITH_ARTICLE_URL' },
    { id: 'sample-legal', cat: 'legal', date: '2026-07-01',
      img: '', imgAlt: '',
      title:   { vi: 'Cập nhật pháp lý dự án', en: 'Project legal update' },
      excerpt: { vi: 'Tin mẫu. Toàn bộ tin phải thay bằng nội dung thật trước khi công khai.',
                 en: 'Sample entry. Every item must be replaced with real content before going live.' },
      url: '#REPLACE_WITH_ARTICLE_URL' }
  ];
  var CAT = {
    progress: { vi: 'Tiến độ', en: 'Progress' },
    infra:    { vi: 'Hạ tầng', en: 'Infrastructure' },
    legal:    { vi: 'Pháp lý', en: 'Legal' }
  };

  /* Nam vai tro duoi day la VAI TRO CHUNG rut ra tu vi du client gui,
     KHONG phai doi ngu that cua Norton Park. Cho client dua danh sach that. */
  var TEAM = [
    { role: { vi: 'Tư vấn kiến trúc',  en: 'Architecture' },        logo: '', name: '' },
    { role: { vi: 'Tư vấn kết cấu',    en: 'Structural' },          logo: '', name: '' },
    { role: { vi: 'Nhà thầu thi công', en: 'Main contractor' },     logo: '', name: '' },
    { role: { vi: 'Tư vấn cơ điện',    en: 'MEP' },                 logo: '', name: '' },
    { role: { vi: 'Tư vấn cảnh quan',  en: 'Landscape' },           logo: '', name: '' }
  ];
  var PROJ = [
    { name: 'Gamuda City', logo: '' }, { name: 'Ambience', logo: '' },
    { name: 'Eaton Park',  logo: '' }, { name: 'Elysian',  logo: '' },
    { name: 'Springville', logo: '' }, { name: 'The Meadow', logo: '' },
    { name: 'Artisan',     logo: '' }
  ];

  /* ---- 02. TU DIEN TIENG ANH -------------------------------------------
     Ban tieng Viet duoc doc tu DOM luc khoi dong, khong liet ke o day.     */
  var I18N = { vi: {}, en: {
    'nav.cta': 'Enquire',
    'cta.main': 'Request a Private Consultation',
    'cta.explore': 'Explore Norton Park',
    'hero.eyebrow': 'Binh Duong Boulevard',
    'hero.quote': 'The first worthy address in Binh Duong',

    'story.eyebrow': 'The Spirit of the Project',
    'story.title': 'A global sanctuary in the heart of Binh Duong',
    'story.body': 'Norton Park is more than an urban address. It is an international standard of living, told through stillness. For the global professionals who live and work to the rhythm of Binh Duong, this is a place to return to, quiet, modern, green, and shared with a familiar community. A calm homecoming after a day of intensity.',

    'facts.eyebrow': 'Project Overview',
    'facts.title': 'The area that was kept open',
    'facts.n1': '17.5 <i>ha</i>', 'facts.k1': 'Integrated masterplan',
    'facts.n2': '2.8 <i>ha</i>',  'facts.k2': 'Residential site',
    'facts.n3': '1,286',          'facts.k3': 'Total residences',
    'facts.n4': '27<i>%</i>',     'facts.k4': 'Building density',
    'facts.n5': '2.5 <i>ha</i>',  'facts.k5': 'Landscape and parks',
    'facts.n6': '3 : 1',          'facts.k6': 'Car park ratio',
    'facts.n7': '12',             'facts.k7': 'Units per floor, three lift cars',
    'facts.n8': '2',              'facts.k8': 'Residential blocks, B and C',
    'facts.types': 'Seven product types',
    'facts.t1': 'Studio', 'facts.t2': '1 Bedroom', 'facts.t3': '2 Bedroom',
    'facts.t4': '3 Bedroom', 'facts.t5': 'Podium Duplex',
    'facts.t6': 'Stand Alone Shops', 'facts.t7': 'Podium Shops',
    'facts.b1t': 'Building scale', 'facts.b2t': 'Expected handover',
    'facts.b3t': 'Legal status and ownership',

    'loc.title': 'Position within the masterplan',
    'loc.sub': 'Norton Park fronts Binh Duong Boulevard, within an integrated development of 17.5 hectares.',
    'loc.1t': 'Fronting Binh Duong Boulevard', 'loc.1s': 'Direct connection to National Road 13',
    'loc.2t': 'Adjacent to VSIP 1', 'loc.2s': 'The principal industrial zone of the region',
    'loc.3t': 'AEON Mall Binh Duong', 'loc.3s': 'Within the same masterplan',

    'map.eyebrow': 'Location and connectivity',
    'map.title': 'At the centre of every connection',
    'map.t1': 'Connectivity', 'map.t2': 'Amenities',
    'map.vr': 'Explore the 360 scale model',
    'map.zoom': 'Enlarge',
    'map.hint': 'Drag to pan, pinch to zoom',
    'mq.c1': 'min to VSIP 1', 'mq.c2': 'min to Thuan An',
    'mq.c3': 'min to Thu Dau Mot', 'mq.c4': 'min to Tan Son Nhat',
    'mq.a1': 'schools', 'mq.a2': 'retail destinations',
    'mq.a3': 'healthcare facilities', 'mq.a4': 'adjacent parks',

    'life.eyebrow': 'Lifestyle and Amenities',
    'life.title': 'A day that restores you',

    'blk.eyebrow': 'Two residential blocks',
    'blk.title': 'Two characters within one masterplan',
    'blk.ct': 'Block C. The resort side',
    'blk.cd': 'A larger pool with an extended amenity set, more shops, upgraded handover brands and smart home features, a few steps from Park 1 and Park 2.',
    'blk.c1': 'Extended pool and wellness', 'blk.c2': 'Smart home features',
    'blk.c3': 'Adjacent to Park 1 and Park 2',
    'blk.bt': 'Block B. The convenient side',
    'blk.bd': 'Closest to AEON Mall and the VSIP gate. Daily conveniences and living close to work at their most practical.',
    'blk.b1': 'Closest to AEON Mall', 'blk.b2': 'Closest to the VSIP 1 gate',
    'blk.b3': 'Daily retail within walking distance',

    'resi.eyebrow': 'The Residences',
    'resi.title': 'Thoughtful homes for modern life',
    'resi.cta': 'Register your interest',

    'news.eyebrow': 'News and Updates',
    'news.title': 'The project in progress',
    'news.more': 'Read more',
    'news.sample': 'Sample entry',
    'news.prev': 'Previous', 'news.next': 'Next',

    'form.eyebrow': 'Enquiry', 'form.title': 'Private consultation',
    'form.sub': 'The project brochure and a private consultation are arranged upon registration.',
    'form.s1': 'Step one of two', 'form.s2': 'Step two of two',
    'form.unitq': 'Residence of interest',
    'form.u1': '1 Bedroom', 'form.u2': '2 Bedroom', 'form.u3': '3 Bedroom',
    'form.next': 'Continue', 'form.back': 'Return to the previous step',
    'form.name': 'Full name', 'form.phone': 'Phone number',
    'form.email': 'Email, optional',
    'form.consent': 'Consent is given to be contacted regarding Norton Park and to the privacy policy.',
    'form.privacy': 'Information is protected under the privacy policy of Gamuda Land Vietnam.',
    'form.okt': 'Registration has been received',
    'form.okb': 'A consultant will be in contact shortly.',

    'pop.sub': 'Leave your details and a consultant will be in contact with the project brochure.',
    'pop.unit': 'Residence of interest',
    'pop.cta': 'Request a consultation',
    'pop.name': 'Full name', 'pop.phone': 'Phone number', 'pop.email': 'Email',

    'ct.title': 'Contact', 'ct.addr': 'Project address',
    'ct.hot': 'Hotline', 'ct.mail': 'Email',

    'dev.eyebrow': 'The Developer',
    'dev.title': 'Built by Gamuda Land',
    'dev.body': 'Part of Gamuda Berhad of Malaysia, established in 1995. Gamuda Land has created landmark communities in Vietnam since 2007, from Gamuda City and Ambience in the north to Eaton Park, Elysian, Springville, The Meadow and Artisan in the south. Every project is built on sustainable living, careful planning and lasting quality of life.',
    'dev.team': 'The Team', 'dev.proj': 'A Portfolio of Placemaking',

    'f.explore': 'Explore', 'f.contact': 'Contact', 'f.legal': 'Legal',
    'f.l1': 'Privacy policy', 'f.l2': 'Terms of use',
    'f.l3': 'Disclaimer', 'f.l4': 'Fraud warning',
    'f.entity': 'Legal entity', 'f.e1': 'Company name',
    'f.e2': 'Business registration number', 'f.e3': 'Issued by',
    'f.e4': 'Registered address',
    'foot.disclaimer': 'Images, renders and information are for illustration purposes and may be adjusted by the developer. This is not an offer or a contract. Official information is governed by the sale and purchase agreement.',

    'dr.1': 'Overview', 'dr.2': 'Location', 'dr.3': 'Amenities',
    'dr.4': 'Residences', 'dr.5': 'News', 'dr.6': 'Register',
    'dr.call': 'Call an advisor',

    'pend': 'Pending data',
    'ph.b': 'Image',
    'ph.img': 'Image',
    'ph.loc': '1400 x 1750, 4:5 portrait. Binh Duong Boulevard frontage with the residential blocks and AEON Mall in frame',
    'ph.blkc': '1500 x 1000, 3:2. Block C, the pool and resort amenities',
    'ph.blkb': '1500 x 1000, 3:2. Block B, the entrance and retail frontage',
    'ph.regbg': '2000 x 1200. Background image of the amenity area or community',
    'ph.pop': '1000 x 1200, portrait'
  } };

  var ERR = {
    vi: { name: 'Vui lòng nhập họ và tên.', phone: 'Vui lòng nhập số điện thoại hợp lệ.',
          consent: 'Cần xác nhận đồng ý trước khi gửi.' },
    en: { name: 'A full name is required.', phone: 'A valid phone number is required.',
          consent: 'Consent is required before submitting.' }
  };
  var PH_RESI = {
    vi: function (n) { return n ? ('1500 x 1000, tỉ lệ 3:2. Kho hiện có ' + n + ' ảnh cho loại căn này, chưa gắn')
                                : '1500 x 1000, tỉ lệ 3:2. Chưa có ảnh nào cho loại căn này'; },
    en: function (n) { return n ? ('1500 x 1000, 3:2. ' + n + ' images available for this type, not yet placed')
                                : '1500 x 1000, 3:2. No images available for this type yet'; }
  };
  var PH_LIFE = {
    vi: function (s) { return '1600 x 1000, tỉ lệ 16:10. ' + s; },
    en: function (s) { return '1600 x 1000, 16:10. ' + s; }
  };
  var PH_NEWS = { vi: '1200 x 800, tỉ lệ 3:2', en: '1200 x 800, 3:2' };
  var PH_LOGO = { vi: 'LOGO 240 x 160', en: 'LOGO 240 x 160' };

  /* ---- 03. DOI NGON NGU -------------------------------------------------
     Text tieng Viet duoc thu tu DOM mot lan duy nhat luc khoi dong.        */
  var lang = 'vi';
  $$('[data-i18n]').forEach(function (n) { I18N.vi[n.getAttribute('data-i18n')] = n.innerHTML; });
  $$('[data-ph]').forEach(function (n) { I18N.vi[n.getAttribute('data-ph')] = n.placeholder; });

  function t(key) { var d = I18N[lang]; return (d && d[key] != null) ? d[key] : I18N.vi[key]; }

  var TITLE = {
    vi: 'Norton Park | Toạ độ xứng tầm đầu tiên tại Bình Dương',
    en: 'Norton Park | The first worthy address in Binh Duong'
  };

  function setLang(next) {
    if (next === lang || !I18N[next]) return;
    lang = next;
    document.documentElement.lang = next;

    $$('[data-i18n]').forEach(function (n) {
      var v = I18N[next][n.getAttribute('data-i18n')];
      if (v != null) n.innerHTML = v;
    });
    $$('[data-ph]').forEach(function (n) {
      var v = I18N[next][n.getAttribute('data-ph')];
      if (v != null) n.placeholder = v;
    });
    $$('.lang button').forEach(function (b) {
      var isOn = b.getAttribute('data-lang') === next;
      b.classList.toggle('on', isOn);
      b.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    });

    /* Ban do co ban tieng Anh rieng. HAI BAN KHONG CUNG TI LE:
       tien ich VI la 1800x916 con EN la 1800x927. Doi ngon ngu ma giu ti le
       cu se lam meo mot trong hai ban, nen phai cap nhat --ar theo anh that. */
    $$('.map-base').forEach(function (img) {
      var src = img.getAttribute('data-' + next);
      if (src && img.getAttribute('src') !== src) img.src = src;
      syncAR(img);
    });

    document.title = TITLE[next];
    renderLife(); renderResi(); renderNews(); renderSlots();
    /* i18n vua ghi de innerHTML cua cac o so, ke ca phan don vi. Neu khong
       dem lai thi o se ket o gia tri cua ngon ngu truoc. Chi dem lai nhung o
       dang nam trong tam mat, cac o khac van cho IntersectionObserver. */
    recount();
    push('language_change', { language: next });
  }
  $$('.lang button').forEach(function (b) {
    on(b, 'click', function () { setLang(b.getAttribute('data-lang')); });
  });

  /* Ghi ti le that cua anh dang hien vao .map-canvas. CSS dung --ar de khoa
     khung, nho vay lop SVG phu luon nam dung cho tren anh. */
  function syncAR(img) {
    var box = img.closest ? img.closest('.map-canvas') : null;
    if (!box) return;
    function apply() {
      var w = img.naturalWidth, h = img.naturalHeight;
      if (w && h) box.style.setProperty('--ar', (w / h).toFixed(4));
    }
    if (img.complete && img.naturalWidth) apply();
    else on(img, 'load', apply);
  }
  $$('.map-base').forEach(syncAR);

  /* ---- 04. KHOA CUON TRANG ---------------------------------------------
     Drawer, lightbox va popup deu khoa cuon. Dem bang bo dem de dong cai
     nay khong mo khoa cua cai kia. Scroll Snap phai tat theo, neu khong
     trinh duyet van truot ngam ben duoi lop phu.                            */
  var lockCount = 0;
  function lockScroll(lock) {
    lockCount = Math.max(0, lockCount + (lock ? 1 : -1));
    var h = document.documentElement;
    document.body.style.overflow = lockCount > 0 ? 'hidden' : '';
    h.style.scrollSnapType = lockCount > 0 ? 'none' : '';
  }
  /* Doc chieu cao THAT cua thanh nav.
     KHONG parseInt token --nav-h nua: tu khi nav cao theo ti le man hinh, gia
     tri cua no la mot bieu thuc clamp(). Custom property duoc thay the nguyen
     van chu khong duoc tinh, nen getPropertyValue tra ve chuoi "clamp(54px..."
     va parseInt cho ra 54 o moi khoi man hinh. */
  function navH() {
    var el = document.querySelector('.nav');
    var h = el ? Math.round(el.getBoundingClientRect().height) : 0;
    return h || 62;
  }

  /* ---- 05. NAV VA DRAWER ------------------------------------------------ */
  var nav = $('#nav'), hero = $('.hero');
  if (nav && hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      nav.classList.toggle('is-solid', !es[0].isIntersecting);
    }, { rootMargin: '-' + (navH() + 10) + 'px 0px 0px 0px', threshold: 0 }).observe(hero);
  } else if (nav) {
    nav.classList.add('is-solid');
  }

  (function drawerModule() {
    var drawer = $('#drawer'), burger = $('#burger');
    if (!drawer || !burger) return;
    var panel = $('.drawer-panel', drawer), lastFocus = null;

    function open() {
      lastFocus = document.activeElement;
      drawer.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      lockScroll(true);
      var c = $('.drawer-close', drawer); if (c) c.focus();
      push('drawer_open', {});
    }
    function close() {
      if (!drawer.classList.contains('is-open')) return;
      drawer.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      lockScroll(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    drawer.npClose = close;
    drawer.npIsOpen = function () { return drawer.classList.contains('is-open'); };

    on(burger, 'click', open);
    $$('[data-drawer-close]', drawer).forEach(function (el) { on(el, 'click', close); });
    $$('.drawer-nav a', drawer).forEach(function (a) {
      on(a, 'click', function () {
        push('drawer_nav', { target: a.getAttribute('href') });
        close();
      });
    });
    document.addEventListener('keydown', function (e) {
      if (!drawer.classList.contains('is-open')) return;
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab' || !panel) return;
      var f = $$('a[href],button:not([disabled])', panel);
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }());

  /* ---- 06. VAO TAM MAT -------------------------------------------------- */
  function watchReveal(list) {
    if (!('IntersectionObserver' in window) || reduce) {
      list.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var o = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    list.forEach(function (el) { o.observe(el); });
  }
  watchReveal($$('[data-rv]'));

  /* ---- 06B. DEM SO O FACTS ----------------------------------------------
     Bay o co `data-count` chay tu 0 len so dich. O "3 : 1" KHONG dem, vi dem
     mot ti le la vo nghia, no chi hien dan cung cac o khac.

     BA DIEU PHAI GIU:
     1. Dinh dang so kieu Viet Nam: dau PHAY la thap phan, dau CHAM la phan
        cach nghin. `1.286` chu khong phai `1,286`.
     2. Don vi di kem nam trong the <i> ben trong o, vi du `17,5 <i>ha</i>`.
        Chi duoc thay phan SO, giu nguyen the <i>.
     3. Doi ngon ngu la i18n ghi de lai innerHTML cua o. Vi vay sau moi lan
        doi ngon ngu phai dem lai, neu khong o se ket o gia tri tieng Viet.  */
  /* Dinh dang so THEO NGON NGU DANG CHON.
       tieng Viet : dau PHAY thap phan, dau CHAM phan cach nghin -> 1.286  17,5
       tieng Anh  : dau CHAM thap phan, dau PHAY phan cach nghin -> 1,286  17.5
     Ban dau toi ap cung kieu Viet cho ca hai, nen ban EN hien "1.286" va
     "17,5" sai chuan. */
  function fmtNum(v, dec, grp) {
    var dp = lang === 'en' ? '.' : ',';
    var gs = lang === 'en' ? ',' : '.';
    var s = dec > 0 ? v.toFixed(dec) : String(Math.round(v));
    var parts = s.split('.');
    if (grp) parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, gs);
    return parts.length > 1 ? parts[0] + dp + parts[1] : parts[0];
  }

  function runCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
    var grp = el.getAttribute('data-grp') === '1';
    if (reduce) { return; }                 /* giam chuyen dong: de nguyen so that */

    /* Tach phan don vi ra de lat lai NGUYEN VEN sau khi dem xong.
       Phai giu ca khoang trang GOC giua so va don vi: nguon co hai kieu
       `17,5 <i>ha</i>` co khoang trang, va `27<i>%</i>` khong co. Chen bua
       mot khoang trang se bien 27% thanh "27 %". */
    var unit = el.querySelector('i');
    var unitHTML = '';
    if (unit) {
      var before = unit.previousSibling;
      var gap = (before && before.nodeType === 3 && /\s$/.test(before.nodeValue)) ? ' ' : '';
      unitHTML = gap + unit.outerHTML;
    }

    var dur = 1400, t0 = null;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      /* easeOutCubic: chay nhanh luc dau roi ha dan, cam giac "dung lai" chu
         khong phai "bi cat". */
      var e = 1 - Math.pow(1 - p, 3);
      el.innerHTML = fmtNum(target * e, dec, grp) + unitHTML;
      if (p < 1) requestAnimationFrame(step);
    }
    el.innerHTML = fmtNum(0, dec, grp) + unitHTML;   /* bat dau tu 0 ngay */
    requestAnimationFrame(step);
  }

  var countEls = $$('#facts [data-count]');
  function armCount() {
    if (!countEls.length || reduce) return;
    if (!('IntersectionObserver' in window)) { countEls.forEach(runCount); return; }
    var o = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        runCount(e.target);
        o.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    countEls.forEach(function (el) { o.observe(el); });
  }
  armCount();

  /* Goi lai sau khi doi ngon ngu. Chi chay cho o dang hien tren man hinh. */
  function recount() {
    if (reduce) return;
    countEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) runCount(el);
    });
  }

  /* ---- 07. BAN DO -------------------------------------------------------
     Hai tab. Panel dang xem nhan .is-view, panel da tung xem nhan .is-live.
     .is-live bat hoat anh, .is-view quyet dinh chay hay tam dung.           */
  (function mapModule() {
    var tabs = $$('.tabs [role="tab"]'), panels = $$('.map-panel');
    if (!tabs.length || !panels.length) return;

    function select(i, focus) {
      tabs.forEach(function (b, k) {
        var on_ = k === i;
        b.setAttribute('aria-selected', on_ ? 'true' : 'false');
        b.tabIndex = on_ ? 0 : -1;
        if (on_ && focus) b.focus();
      });
      panels.forEach(function (p, k) {
        p.hidden = k !== i;
        if (k === i) { p.classList.add('is-live', 'is-view'); }
      });
      push('map_tab', { tab: panels[i].getAttribute('data-map') });
    }
    tabs.forEach(function (b, i) {
      on(b, 'click', function () { select(i, false); });
      on(b, 'keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length, true); }
        if (e.key === 'ArrowLeft')  { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
      });
    });

    /* Chi chay hoat anh khi section nam trong tam nhin. Tiet kiem pin va
       tranh cho hoat anh chay het mot vong khi khong ai nhin. */
    var sec = $('#location');
    if (sec && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        var inView = es[0].isIntersecting;
        panels.forEach(function (p) {
          if (p.hidden) return;
          p.classList.toggle('is-view', inView);
          if (inView) p.classList.add('is-live');
        });
      }, { threshold: 0.25 }).observe(sec);
    } else {
      panels.forEach(function (p) { if (!p.hidden) p.classList.add('is-live', 'is-view'); });
    }

    /* Phong to. Dung ban PNG do phan giai day du, khong phong to ban WebP
       da nen cho web. */
    var lb = $('#lightbox'), lbImg = $('#lbImg'), lbScroll = $('#lbScroll'), lbClose = $('#lbClose');
    function openLb(stage) {
      var img = $('.map-base', stage);
      if (!img || !lb) return;
      lbImg.src = img.getAttribute('data-full-' + lang) || img.currentSrc || img.src;
      lbImg.alt = stage.getAttribute('aria-label') || '';
      lb.classList.add('is-open');
      lockScroll(true);
      if (lbClose) lbClose.focus();
      push('map_zoom', { tab: stage.closest('.map-panel').getAttribute('data-map') });
    }
    function closeLb() {
      if (!lb || !lb.classList.contains('is-open')) return;
      lb.classList.remove('is-open');
      lbImg.src = '';
      lockScroll(false);
    }
    if (lb) {
      lb.npClose = closeLb;
      lb.npIsOpen = function () { return lb.classList.contains('is-open'); };
      $$('[data-zoom]').forEach(function (stage) { on(stage, 'click', function () { openLb(stage); }); });
      $$('[data-zoom-btn]').forEach(function (btn) {
        on(btn, 'click', function (e) {
          e.preventDefault();
          openLb($('.map-stage', btn.closest('.map-panel')));
        });
      });
      on(lbClose, 'click', closeLb);
      on(lb, 'click', function (e) { if (e.target === lb || e.target === lbScroll) closeLb(); });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLb();
      });
      /* Keo de di chuyen anh da phong to */
      var dragging = false, sx = 0, sy = 0, sl = 0, st = 0;
      on(lbScroll, 'pointerdown', function (e) {
        dragging = true; sx = e.clientX; sy = e.clientY;
        sl = lbScroll.scrollLeft; st = lbScroll.scrollTop;
        lbScroll.setPointerCapture(e.pointerId);
        lbScroll.style.cursor = 'grabbing';
      });
      on(lbScroll, 'pointermove', function (e) {
        if (!dragging) return;
        lbScroll.scrollLeft = sl - (e.clientX - sx);
        lbScroll.scrollTop  = st - (e.clientY - sy);
      });
      ['pointerup', 'pointercancel'].forEach(function (ev) {
        on(lbScroll, ev, function () { dragging = false; lbScroll.style.cursor = 'grab'; });
      });
    }
  }());

  /* ---- 08. CAROUSEL TIEN ICH -------------------------------------------- */
  var lifeI = 0;
  var lifeEls = {
    ph: $('#lifePh'), title: $('#lifeTitle'), desc: $('#lifeDesc'), dots: $('#lifeDots'),
    prevFig: $('#lifePrevFig'), nextFig: $('#lifeNextFig'),
    prev: $('#lifePrev'), next: $('#lifeNext')
  };
  function sideLabel(fig, item) {
    if (!fig) return;
    var s = $('.ph span', fig);
    if (s) s.textContent = item.name[lang];
  }
  function renderLife() {
    if (!lifeEls.title) return;
    var n = LIFE.length, cur = LIFE[lifeI];
    lifeEls.title.textContent = cur.name[lang];
    if (lifeEls.desc) lifeEls.desc.textContent = cur.desc[lang];
    if (lifeEls.ph) lifeEls.ph.textContent = PH_LIFE[lang](cur.shot[lang]);
    sideLabel(lifeEls.prevFig, LIFE[(lifeI - 1 + n) % n]);
    sideLabel(lifeEls.nextFig, LIFE[(lifeI + 1) % n]);

    if (lifeEls.dots) {
      if (lifeEls.dots.children.length !== n) {
        lifeEls.dots.innerHTML = LIFE.map(function (it, i) {
          return '<button type="button" role="tab" data-i="' + i + '" aria-label="' + esc(it.name[lang]) + '"></button>';
        }).join('');
        $$('button', lifeEls.dots).forEach(function (b) {
          on(b, 'click', function () { goLife(parseInt(b.getAttribute('data-i'), 10)); });
        });
      }
      $$('button', lifeEls.dots).forEach(function (b, i) {
        b.classList.toggle('on', i === lifeI);
        b.setAttribute('aria-selected', i === lifeI ? 'true' : 'false');
        b.setAttribute('aria-label', LIFE[i].name[lang]);
      });
    }
  }
  function goLife(i) {
    var n = LIFE.length;
    lifeI = (i % n + n) % n;
    renderLife();
    push('lifestyle_slide', { amenity: LIFE[lifeI].id });
  }
  on(lifeEls.prev, 'click', function () { goLife(lifeI - 1); });
  on(lifeEls.next, 'click', function () { goLife(lifeI + 1); });
  swipe($('.life-stage'), function (d) { goLife(lifeI + d); });
  arrowKeys($('.life-stage'), function (d) { goLife(lifeI + d); });
  renderLife();

  /* ---- 09. CAC LOAI CAN HO ----------------------------------------------
     Hai tang dieu khien: tab chon loai can, thanh nho lat anh trong loai do. */
  var resiI = 0, resiShot = 0;
  var resiEls = {
    tabs: $('#resiTabs'), ph: $('#resiPh'), thumbs: $('#resiThumbs'),
    tag: $('#resiTag'), name: $('#resiName'), desc: $('#resiDesc'), feat: $('#resiFeat')
  };
  function renderResi() {
    if (!resiEls.tabs) return;
    var cur = RESI[resiI];

    if (resiEls.tabs.children.length !== RESI.length) {
      resiEls.tabs.innerHTML = RESI.map(function (r, i) {
        return '<button type="button" role="tab" data-i="' + i + '" aria-selected="' +
               (i === resiI) + '" tabindex="' + (i === resiI ? 0 : -1) + '"></button>';
      }).join('');
      $$('button', resiEls.tabs).forEach(function (b, i) {
        on(b, 'click', function () { goResi(i, false); });
        on(b, 'keydown', function (e) {
          if (e.key === 'ArrowRight') { e.preventDefault(); goResi(i + 1, true); }
          if (e.key === 'ArrowLeft')  { e.preventDefault(); goResi(i - 1, true); }
        });
      });
    }
    $$('button', resiEls.tabs).forEach(function (b, i) {
      b.textContent = RESI[i].name[lang];
      b.setAttribute('aria-selected', i === resiI ? 'true' : 'false');
      b.tabIndex = i === resiI ? 0 : -1;
    });

    if (resiEls.tag)  resiEls.tag.textContent = cur.tag[lang];
    if (resiEls.name) resiEls.name.textContent = cur.name[lang];
    if (resiEls.desc) resiEls.desc.textContent = cur.desc[lang];
    if (resiEls.ph)   resiEls.ph.textContent = PH_RESI[lang](cur.shots);
    if (resiEls.feat) {
      resiEls.feat.innerHTML = cur.feat[lang].map(function (f) {
        return '<li><svg class="ic ic-s"><use href="#i-check"/></svg><span>' + esc(f) + '</span></li>';
      }).join('');
    }
    if (resiEls.thumbs) {
      var n = Math.max(1, cur.shots);
      resiEls.thumbs.innerHTML = '';
      for (var k = 0; k < n; k++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = k === resiShot ? 'on' : '';
        b.setAttribute('aria-label', (lang === 'en' ? 'Image ' : 'Ảnh ') + (k + 1));
        (function (idx) { on(b, 'click', function () { resiShot = idx; renderResi(); }); }(k));
        resiEls.thumbs.appendChild(b);
      }
    }
  }
  function goResi(i, focus) {
    var n = RESI.length;
    resiI = (i % n + n) % n;
    resiShot = 0;
    renderResi();
    if (focus) $$('button', resiEls.tabs)[resiI].focus();
    push('residence_tab', { residence: RESI[resiI].id });
  }
  renderResi();

  /* ---- 10. TIN TUC ------------------------------------------------------ */
  var newsPage = 0;
  var newsEls = { track: $('#newsTrack'), dots: $('#newsDots'), prev: $('#newsPrev'), next: $('#newsNext') };
  function perPage() {
    var w = window.innerWidth;
    return w <= 820 ? 1 : (w <= 1040 ? 2 : 3);
  }
  function fmtDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    if (lang === 'en') {
      return d.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
    }
    return 'Tháng ' + (d.getMonth() + 1) + ', ' + d.getFullYear();
  }
  function renderNews() {
    if (!newsEls.track) return;
    var per = perPage(), pages = Math.max(1, Math.ceil(NEWS.length / per));
    if (newsPage >= pages) newsPage = 0;
    var start = newsPage * per;
    var slice = NEWS.slice(start, start + per);

    newsEls.track.innerHTML = slice.map(function (it) {
      var media = it.img
        ? '<img src="' + esc(it.img) + '" alt="' + esc(it.imgAlt || '') + '" loading="lazy">'
        : '<div class="ph"><span><b>' + esc(t('ph.b')) + '</b><span>' + esc(PH_NEWS[lang]) + '</span></span></div>';
      var sample = it.id.indexOf('sample') === 0
        ? '<span class="pending nsample">' + esc(lang === 'en' ? I18N.en['news.sample'] : 'Tin mẫu') + '</span>' : '';
      return '<a class="ncard" href="' + esc(it.url) + '" data-news="' + esc(it.id) + '" data-cat="' + esc(it.cat) + '">' +
        '<div class="ncard-fig">' + media + '</div>' +
        '<div class="nmeta"><span class="ncat">' + esc(CAT[it.cat][lang]) + '</span>' +
        '<span class="ndate">' + esc(fmtDate(it.date)) + '</span>' + sample + '</div>' +
        '<h3>' + esc(it.title[lang]) + '</h3>' +
        '<p class="nexc">' + esc(it.excerpt[lang]) + '</p>' +
        '<span class="nlink">' + esc(lang === 'en' ? I18N.en['news.more'] : 'Xem chi tiết') +
        '<svg class="ic ic-s"><use href="#i-arrow"/></svg></span></a>';
    }).join('');

    $$('.ncard', newsEls.track).forEach(function (a) {
      on(a, 'click', function () {
        push('news_click', { id: a.getAttribute('data-news'), cat: a.getAttribute('data-cat') });
      });
    });

    if (newsEls.dots) {
      newsEls.dots.innerHTML = '';
      for (var p = 0; p < pages; p++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = p === newsPage ? 'on' : '';
        b.setAttribute('aria-label', (lang === 'en' ? 'Page ' : 'Trang ') + (p + 1));
        (function (idx) { on(b, 'click', function () { newsPage = idx; renderNews(); }); }(p));
        newsEls.dots.appendChild(b);
      }
      newsEls.dots.hidden = pages < 2;
    }
    var single = pages < 2;
    if (newsEls.prev) newsEls.prev.disabled = single;
    if (newsEls.next) newsEls.next.disabled = single;
  }
  function goNews(d) {
    var pages = Math.max(1, Math.ceil(NEWS.length / perPage()));
    newsPage = (newsPage + d % pages + pages) % pages;
    renderNews();
  }
  on(newsEls.prev, 'click', function () { goNews(-1); });
  on(newsEls.next, 'click', function () { goNews(1); });
  swipe(newsEls.track, function (d) { goNews(d); });
  renderNews();

  var lastPer = perPage();
  window.addEventListener('resize', function () {
    var p = perPage();
    if (p !== lastPer) { lastPer = p; newsPage = 0; renderNews(); }
  });

  /* ---- 11. O LOGO CHU DAU TU --------------------------------------------
     Muoi hai o deu la khung cho. Khi co file logo that chi can dien truong
     logo va name, phan render khong doi.                                    */
  function slotHTML(logo, key, name) {
    var box = logo
      ? '<img src="' + esc(logo) + '" alt="' + esc(name || '') + '" loading="lazy">'
      : '<span>' + esc(PH_LOGO[lang]) + '</span>';
    return '<div class="slot"><div class="slot-box">' + box + '</div>' +
      (key ? '<span class="slot-k">' + esc(key) + '</span>' : '') +
      (name ? '<span class="slot-n">' + esc(name) + '</span>' : '') + '</div>';
  }
  function renderSlots() {
    var team = $('#devTeam'), proj = $('#devProj');
    if (team) team.innerHTML = TEAM.map(function (x) {
      return slotHTML(x.logo, x.role[lang], x.name);
    }).join('');
    if (proj) proj.innerHTML = PROJ.map(function (x) {
      return slotHTML(x.logo, '', x.name);
    }).join('');
  }
  renderSlots();

  /* ---- 12. FORM HAI BUOC ------------------------------------------------ */
  function validPhone(v) {
    var d = v.replace(/[^0-9]/g, '');
    return d.length >= 9 && d.length <= 12;
  }
  function setErr(input, node, msg) {
    if (node) node.textContent = msg || '';
    if (input) {
      if (msg) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    }
    return !msg;
  }
  function markSent() {
    try { localStorage.setItem('np_lead_sent', '1'); } catch (e) {}
  }
  function leadSent() {
    try { return localStorage.getItem('np_lead_sent') === '1'; } catch (e) { return false; }
  }

  (function regForm() {
    var form = $('#leadForm'), s1 = $('#step1'), s2 = $('#step2');
    if (!form) return;
    var head = $('#formHead'), ok = $('#success');
    var d1 = $('#d1'), d2 = $('#d2');

    on($('#next'), 'click', function () {
      s1.classList.add('hidden'); s2.classList.remove('hidden');
      if (d2) d2.classList.add('on');
      var f = $('#fullname'); if (f) f.focus();
      var pick = $('input[name="unit_interest"]:checked', form);
      push('form_step', { step: 2, unit_interest: pick ? pick.value : '' });
    });
    on($('#back'), 'click', function () {
      s2.classList.add('hidden'); s1.classList.remove('hidden');
      if (d2) d2.classList.remove('on');
      push('form_step', { step: 1 });
    });

    on(form, 'submit', function (e) {
      e.preventDefault();
      if ($('#website') && $('#website').value) return;     /* bay bot */

      var name = $('#fullname'), phone = $('#phone'), consent = $('#consent');
      var okName = setErr(name, $('#err-fullname'), name.value.trim() ? '' : ERR[lang].name);
      var okPhone = setErr(phone, $('#err-phone'), validPhone(phone.value) ? '' : ERR[lang].phone);
      var okCons = setErr(consent, $('#err-consent'), consent.checked ? '' : ERR[lang].consent);
      if (!(okName && okPhone && okCons)) return;

      var pick = $('input[name="unit_interest"]:checked', form);
      push('generate_lead', {
        form_position: 'page_end', language: lang,
        unit_interest: pick ? pick.value : ''
      });
      markSent();
      form.hidden = true;
      if (head) head.hidden = true;
      if (ok) { ok.classList.add('on'); ok.focus && ok.focus(); }

      /* Endpoint chua noi. Khi co endpoint that: bo e.preventDefault() o tren
         hoac gui bang fetch roi moi hien man cam on. */
    });
  }());

  /* ---- 13. POPUP --------------------------------------------------------
     Hien sau khi nguoi xem da qua 3 section, moi phien dung mot lan.
     KHONG hien khi: da gui form, dang o chinh section form, hoac dang co
     drawer hay lightbox mo.                                                 */
  (function popModule() {
    var pop = $('#pop'), form = $('#popForm');
    if (!pop) return;
    var ok = $('#popOk'), lastFocus = null;

    function seen() { try { return sessionStorage.getItem('np_pop_seen') === '1'; } catch (e) { return true; } }
    function markSeen() { try { sessionStorage.setItem('np_pop_seen', '1'); } catch (e) {} }

    function blocked() {
      var dr = $('#drawer'), lb = $('#lightbox');
      if (dr && dr.npIsOpen && dr.npIsOpen()) return true;
      if (lb && lb.npIsOpen && lb.npIsOpen()) return true;
      var reg = $('#register');
      if (reg) {
        var r = reg.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.6 && r.bottom > 0) return true;
      }
      return false;
    }
    function open() {
      if (seen() || leadSent() || blocked()) return;
      markSeen();
      lastFocus = document.activeElement;
      pop.classList.add('is-open');
      lockScroll(true);
      var c = $('.pop-close', pop); if (c) c.focus();
      push('popup_open', { trigger: 'section_3' });
    }
    function close() {
      if (!pop.classList.contains('is-open')) return;
      pop.classList.remove('is-open');
      lockScroll(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    $$('[data-pop-close]', pop).forEach(function (el) { on(el, 'click', close); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    /* Dem section da qua. Screen Lock lam moi section la mot diem dung ro
       rang nen dem kieu nay chinh xac hon han dem phan tram cuon. */
    var passed = {}, count = 0, fired = false;
    if ('IntersectionObserver' in window) {
      var o = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.id || e.target.className;
          if (passed[id]) return;
          passed[id] = 1; count++;
          if (count >= 4 && !fired) {   /* hero tinh la 1, nen 4 la qua 3 section */
            fired = true;
            setTimeout(open, 600);
          }
        });
      }, { threshold: 0.5 });
      $$('main > section').forEach(function (s) { o.observe(s); });
    }

    if (form) {
      on(form, 'submit', function (e) {
        e.preventDefault();
        if ($('#pWebsite') && $('#pWebsite').value) return;
        var name = $('#pName'), phone = $('#pPhone');
        var okName = setErr(name, $('#err-pName'), name.value.trim() ? '' : ERR[lang].name);
        var okPhone = setErr(phone, $('#err-pPhone'), validPhone(phone.value) ? '' : ERR[lang].phone);
        if (!(okName && okPhone)) return;

        push('generate_lead', {
          form_position: 'popup', language: lang,
          unit_interest: $('#pUnit') ? $('#pUnit').value : ''
        });
        markSent();
        form.hidden = true;
        var sub = $('#popSub'), logo = $('.pop-logo', pop);
        if (sub) sub.hidden = true;
        if (logo) logo.hidden = true;
        if (ok) ok.classList.add('on');
      });
    }
  }());

  /* ---- 14. NUT NOI VA UTM ----------------------------------------------- */
  var toTop = $('#toTop');
  if (toTop) {
    on(toTop, 'click', function () {
      var top = $('#top');
      if (top) top.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
    if ('IntersectionObserver' in window && hero) {
      new IntersectionObserver(function (es) {
        toTop.classList.toggle('on', !es[0].isIntersecting);
      }, { threshold: 0 }).observe(hero);
    } else {
      toTop.classList.add('on');
    }
  }
  $$('[data-cta]').forEach(function (el) {
    on(el, 'click', function () { push('cta_click', { cta: el.getAttribute('data-cta') }); });
  });

  (function utm() {
    var p = new URLSearchParams(location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) {
      var v = p.get(k); if (!v) return;
      $$('input[name="' + k + '"]').forEach(function (i) { i.value = v; });
    });
  }());

  /* ---- TIEN ICH DUNG CHUNG CHO CAROUSEL --------------------------------- */
  function swipe(el, fn) {
    if (!el) return;
    var x0 = null, y0 = null;
    on(el, 'touchstart', function (e) {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    on(el, 'touchend', function (e) {
      if (x0 == null) return;
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      /* Chi tinh la vuot ngang khi do lech ngang lon hon han do lech doc,
         neu khong se cuop mat thao tac cuon trang doc. */
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.6) fn(dx < 0 ? 1 : -1);
      x0 = y0 = null;
    }, { passive: true });
  }
  function arrowKeys(el, fn) {
    if (!el) return;
    el.tabIndex = el.tabIndex || 0;
    on(el, 'keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); fn(1); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); fn(-1); }
    });
  }
}());
