const pages = {
home: () => `
<section class="page">
  <div class="hero">
    <div class="hero-inner">
      <div>
        <span class="kicker">🪷 वसुधैव कुटुम्बकम् · संस्कृत · वेद · संस्कार · सेवा</span>
        <h1>श्रीहरिप्रिया आश्रम <span>श्रीहरिप्रिया संस्कृत वैदिक गुरुकुलम्</span></h1>
        <p>भारतीय वैदिक सनातन परम्परा, संस्कृत विद्या, संस्कार और सेवा की भावना से राष्ट्र एवं समाज के लिए समर्पित गुरुकुल परिवार।</p>
        <div class="hero-actions">
          <button class="btn primary shine" data-page="gurukul">🎓 गुरुकुल देखें</button>
          <button class="btn secondary shine" data-page="elibrary">📖 ई-पुस्तकालय</button>
          <button class="btn light shine" data-page="seva">🙏 सेवा करें</button>
        </div>
      </div>
      <div class="hero-art">
        <div class="temple-mark">🛕</div>
        <span class="floating-badge badge-a">ॐ ज्ञानं परमं बलम्</span>
        <span class="floating-badge badge-b">🌸 संस्कृत-संवर्धन</span>
      </div>
    </div>
  </div>
  <section class="section">
    <div class="container">
      <div class="section-head"><div><div class="eyebrow">हमारी पहचान</div><h2>परम्परा से भविष्य की ओर</h2><p>गुरुकुल जीवन के चार प्रमुख आयाम</p></div></div>
      <div class="feature-grid">
        ${[
          ["🎓","गुरुकुलम्","संस्कृत, वेद, वेदाङ्ग एवं आधुनिक विषयों का गुरुकुल पद्धति से अध्ययन.","gurukul"],
          ["📖","ई-पुस्तकालय","डिजिटल रूप में संस्कृत एवं वैदिक ग्रन्थों तक सरल पहुँच.","elibrary"],
          ["🌸","संस्कृत-संवर्धन","दुर्लभ ग्रन्थों, स्तोत्रों और ज्ञान-परम्परा के संरक्षण का प्रयास.","publications"],
          ["🙏","सेवा एवं सहयोग","विद्या, अन्न, वस्त्र और गुरुकुल सेवा में सहभागिता का अवसर.","donation"]
        ].map(x=>`<article class="card color-card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p><button class="mini-btn" data-page="${x[3]}">विस्तार से देखें →</button></article>`).join("")}
      </div>
    </div>
  </section>
</section>`,

ashram: () => pageShell("🛕","आश्रम एवं मन्दिर","आध्यात्मिक वातावरण, परम्परा और सेवा का केन्द्र",`
<div class="split">
  <div class="visual-placeholder"><div><div class="big">🛕</div><strong>श्रीहरिप्रिया आश्रम</strong><span>यहाँ आश्रम/मन्दिर का वास्तविक फोटो लगाया जा सकता है</span></div></div>
  <div>
    <div class="info-list">
      <div class="info-item"><b>🌺 आध्यात्मिक वातावरण</b><span>भगवान लक्ष्मीनारायण के दिव्य सान्निध्य में गुरुकुल का संचालन।</span></div>
      <div class="info-item"><b>🪔 मन्दिर परिसर</b><span>श्रीसनातन धर्म मन्दिर, शीदीपुरा, करोलबाग, नई दिल्ली।</span></div>
      <div class="info-item"><b>🤝 संरक्षण एवं सहयोग</b><span>मन्दिर समिति एवं स्थानीय भक्तों के सहयोग से गुरुकुल गतिविधियाँ।</span></div>
      <div class="info-item"><b>📍 पता</b><span>8844, राजा लेन, शीदीपुरा, करोलबाग, नई दिल्ली–110005</span></div>
    </div>
  </div>
</div>
<div class="quote">“तन्मे मनः शिवसंकल्पमस्तु” — संस्कृत विद्या एवं वैदिक संस्कृति के संरक्षण हेतु सतत संकल्प।</div>`),

gurukul: () => pageShell("🎓","श्रीहरिप्रिया संस्कृत वैदिक गुरुकुलम्","विद्या, संस्कार, अनुशासन और सेवा का समन्वित जीवन",`
<div class="feature-grid">
${[
["📜","संस्कृत एवं वेद अध्ययन","संस्कृत भाषा, वेद, वेदाङ्ग, उपनिषद् एवं वैदिक विषय।"],
["💻","आधुनिक विषय","अंग्रेजी, गणित, कम्प्यूटर और संगीत आदि का अध्ययन।"],
["🍚","गुरुकुल जीवन","अध्ययन के साथ अनुशासन, सेवा, सहजीवन और संस्कार।"],
["🪔","वैदिक वातावरण","हवन, पारायण, पूजा-पाठ और आध्यात्मिक अभ्यास।"]
].map(x=>`<article class="card color-card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}
</div>
<div class="section" style="padding:45px 0 0"><div class="split">
<div class="visual-placeholder" style="background:linear-gradient(135deg,#2d8a63,#2879a8)"><div><div class="big">🎓</div><strong>गुरुकुल विद्यार्थी जीवन</strong><span>यहाँ विद्यार्थियों का वास्तविक फोटो लगाया जा सकता है</span></div></div>
<div><h2>अध्ययन की व्यापक परम्परा</h2><p>गुरुकुल में वेद, वेदाङ्ग, उपनिषद्, व्याकरण, कर्मकाण्ड के साथ अंग्रेजी, गणित, कम्प्यूटर और संगीत आदि की शिक्षा प्रदान करने का उद्देश्य बच्चों के उज्ज्वल भविष्य तथा उत्तम संस्कारों को बढ़ावा देना है।</p>
<div class="info-list"><div class="info-item"><b>📚 शास्त्रीय अध्ययन</b><span>वेद · वेदाङ्ग · उपनिषद् · व्याकरण · कर्मकाण्ड</span></div><div class="info-item"><b>💡 आधुनिक अध्ययन</b><span>अंग्रेजी · गणित · कम्प्यूटर · संगीत</span></div></div></div>
</div></div>`),

activities: () => pageShell("🌿","हमारी गतिविधियाँ","अध्ययन, साधना, संस्कार और सांस्कृतिक आयोजन",`
<div class="feature-grid three">
${[
["📚","संस्कृत अध्ययन","भाषा, श्लोक एवं शास्त्रीय अध्ययन का अभ्यास।"],
["🔥","दैनिक हवन","वैदिक वातावरण में नित्य हवन एवं आध्यात्मिक अनुशासन।"],
["🎶","संगीत एवं संस्कृत कार्यक्रम","संगीत, संस्कृत प्रस्तुति और सांस्कृतिक अभिव्यक्ति।"],
["📿","पारायण एवं सेवा","चतुर्वेद पारायण, कथा, पूजा-पाठ एवं सेवा।"],
["🪷","आध्यात्मिक कार्यक्रम","विशेष पर्व, अनुष्ठान और आध्यात्मिक आयोजन।"],
["🎓","गुरुकुल शिक्षा","गुरुकुल पद्धति में अध्ययन एवं जीवन-प्रशिक्षण।"],
["🌸","सांस्कृतिक आयोजन","सनातन संस्कृति एवं संस्कार आधारित गतिविधियाँ।"]
].map(x=>`<article class="card activity-card"><div class="activity-visual">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}
</div>`),

events: () => pageShell("📅","कार्यक्रम एवं पञ्चाङ्ग","गुरुकुल के अध्ययन, प्रार्थना और उत्सवों का दृश्य कैलेंडर",`
<div class="event-grid">
${[
["01","वैदिक प्रार्थना एवं हवन","गुरुकुल परिसर","🔥"],
["02","संस्कृत पाठ एवं श्लोक-अभ्यास","गुरुकुल कक्षा","📜"],
["03","विशेष पर्व / उत्सव","आश्रम परिसर","🌸"]
].map(x=>`<article class="event"><div class="event-date"><strong>${x[0]}</strong><span>${x[3]}</span></div><div class="event-body"><h3>${x[1]}</h3><p>${x[2]}</p><button class="mini-btn" onclick="showToast('कार्यक्रम विवरण शीघ्र जोड़ा जा सकता है')">विवरण देखें →</button></div></article>`).join("")}
</div>
<div class="section" style="padding:40px 0 0"><div class="card"><h3>📅 पञ्चाङ्ग एवं विशेष आयोजन</h3><p>यह स्थान वास्तविक कार्यक्रमों, पर्व-तिथियों, अनुष्ठानों और गुरुकुल के आगामी आयोजनों को जोड़ने के लिए तैयार है।</p></div></div>`),

library: () => pageShell("📚","पुस्तकालय","वेद, साहित्य, स्तोत्र और दर्शन की ज्ञान-परम्परा",`
<div class="book-grid">${bookData.slice(0,8).map(bookCard).join("")}</div>`),

elibrary: () => pageShell("📖","श्रीहरिप्रिया ई-पुस्तकालय","Internet Archive पर सुरक्षित डिजिटल ग्रन्थों तक सरल पहुँच",`
<div class="card" style="margin-bottom:24px;background:linear-gradient(135deg,#eef8fb,#fff7e7)"><h3>🌐 डिजिटल पुस्तकालय</h3><p>बड़ी PDF फाइलें वेबसाइट पर रखने के बजाय प्रत्येक ग्रन्थ के लिए Internet Archive का लिंक प्रयोग किया जा सकता है। नीचे दिए नमूना लिंक बाद में वास्तविक Archive URLs से बदले जा सकते हैं।</p></div>
<div class="library-tools">
<input class="search" id="bookSearch" type="search" placeholder="🔎 पुस्तक खोजें…" aria-label="पुस्तक खोजें">
${["सभी","संस्कृत ग्रन्थ","स्तोत्र","साहित्य","वैदिक ग्रन्थ","शैक्षिक सामग्री"].map((x,i)=>`<button class="filter ${i===0?'active':''}" data-filter="${x}">${x}</button>`).join("")}
</div>
<div class="book-grid" id="elibraryGrid">${bookData.map(bookCard).join("")}</div>`),

publications: () => pageShell("📜","श्रीहरिप्रिया सुरभारती प्रकाशन","संस्कृत ग्रन्थों के संरक्षण, संपादन, प्रकाशन और प्रसार की दिशा में प्रयास",`
<div class="split"><div class="visual-placeholder" style="background:linear-gradient(135deg,#7d3155,#e87518)"><div><div class="big">📜</div><strong>श्रीहरिप्रिया सुरभारती प्रकाशन</strong><span>दुर्लभ एवं अप्रकाशित ग्रन्थों के प्रकाशन का प्रयास</span></div></div><div><h2>ज्ञान-परम्परा का प्रसार</h2><p>वेद, वेदाङ्ग, वेदान्त सहित संस्कृत के दुर्लभ एवं अप्रकाशित ग्रन्थों और स्तोत्रों को सरल भाषा में प्रकाशित कर अध्यात्म एवं ज्ञान के जिज्ञासुओं तक पहुँचाने का प्रयास।</p><div class="info-list"><div class="info-item"><b>📚 ग्रन्थ</b><span>संस्कृत एवं वैदिक साहित्य</span></div><div class="info-item"><b>📖 वितरण</b><span>निःशुल्क वितरण में सहयोग की सम्भावना</span></div><div class="info-item"><b>📱 संपर्क</b><span>+91-8076804373 · 9625184928 · 9773534321</span></div></div></div></div>
<div class="section" style="padding:45px 0 0"><div class="book-grid">${bookData.slice(0,4).map(bookCard).join("")}</div></div>`),

gallery: () => pageShell("🖼️","फोटो एवं वीडियो गैलरी","आश्रम, गुरुकुल, अध्ययन, हवन, सेवा और उत्सवों की दृश्य झलक",`
<div class="gallery-grid">${[
["🛕","आश्रम","आश्रम एवं मन्दिर"],["🎓","गुरुकुल","विद्यार्थी एवं अध्ययन"],["📚","अध्ययन","पुस्तक एवं कक्षा"],["🔥","हवन","वैदिक हवन"],["🙏","सेवा","सेवा गतिविधियाँ"],["🌸","उत्सव","पर्व एवं सांस्कृतिक आयोजन"],["🪷","अनुष्ठान","पूजा एवं पारायण"],["🎶","संगीत","सांस्कृतिक प्रस्तुति"]
].map(x=>`<div class="gallery-item"><div class="visual">${x[0]}</div><div><strong>${x[1]}</strong><span>${x[2]}</span></div></div>`).join("")}</div>`),

seva: () => pageShell("🙏","सेवा","गुरुकुल एवं आश्रम के सतत संचालन में सहभागिता",`
<div class="feature-grid">
${[
["🍚","अन्न सेवा","गुरुकुल परिवार के भोजन एवं आवश्यक खाद्य सामग्री में योगदान।"],
["📚","विद्या सेवा","पुस्तक, स्टेशनरी एवं शिक्षा-संबंधी आवश्यकताओं में सहयोग।"],
["🪔","नित्य सेवा","हवन, पूजा, आश्रम और दैनिक व्यवस्था में सेवा।"],
["👕","आवश्यक वस्तु सेवा","वस्त्र, तेल, घी, साबुन तथा अन्य उपयोगी सामग्री।"]
].map(x=>`<article class="card color-card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p><button class="mini-btn" data-page="donation">सहयोग विवरण →</button></article>`).join("")}
</div>`),

donation: () => pageShell("💰","धर्मार्थ सहयोग एवं दान","अपनी सामर्थ्य के अनुसार तन, मन और धन से गुरुकुल सेवा में सहभागी बनें",`
<div class="donation-wrap">
<h2>एक विनम्र निवेदन</h2>
<p>गुरुकुल में अध्ययनरत बच्चों की शिक्षा, भोजन, वस्त्र, चिकित्सा तथा अन्य आवश्यकताओं के लिए समाजसेवी श्रद्धालुओं से सहयोग का निवेदन किया गया है। सेवा का स्वरूप अपनी सामर्थ्य एवं सुविधा के अनुसार चुना जा सकता है।</p>
<div class="donation-grid">${[
["🌸","पुण्य अवसर सेवा","जन्मदिन, वर्षगांठ, पुण्यतिथि, अमावस्या, एकादशी आदि पर सेवा दान।"],
["👦","बालक सहायता","एक या अधिक बच्चों के भोजन, रहन-सहन, शिक्षा, स्वास्थ्य एवं वस्त्र में सहायता।"],
["🧺","आवश्यक वस्तु सहायता","अन्न, वस्त्र, तेल, घी एवं अन्य खाद्य सामग्री का योगदान।"],
["📅","मासिक सहयोग","गुरुकुल संचालन एवं नियमित आवश्यकताओं में मासिक/वार्षिक सहयोग।"],
["🛕","मन्दिर सेवा","मन्दिर एवं आश्रम की सेवा-व्यवस्था में सहभागिता।"],
["🌱","भूमिदान","गुरुकुल के संवर्धन एवं विस्तार हेतु भूमि सहयोग की योजना।"]
].map(x=>`<div class="donation-card"><div class="icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join("")}</div>
<div class="hero-actions"><button class="btn primary shine" data-page="contact">🙏 सहयोग हेतु सम्पर्क करें</button></div>
</div>
<div class="quote"><strong>ट्रस्ट विवरण:</strong> श्रीहरिप्रिया सुरभारती सेवा ट्रस्ट · REGD. NO. 2024/20/IV/934 · PAN: ABJTS8368K · NGO DARPAN: DL/2024/0450326 · 80-G के संबंध में दिए गए संस्थागत विवरण के अनुसार।</div>`),

contact: () => pageShell("📞","सम्पर्क","श्रीहरिप्रिया आश्रम एवं श्रीहरिप्रिया संस्कृत वैदिक गुरुकुलम्",`
<div class="contact-grid">
<div class="contact-card"><div class="icon">📍</div><h3>पता</h3><p>श्रीसनातन धर्म मन्दिर<br>8844, राजा लेन,<br>शीदीपुरा, करोलबाग,<br>नई दिल्ली–110005</p></div>
<div class="contact-card"><div class="icon">✉️</div><h3>ईमेल</h3><p><a href="mailto:shriharipriyaashram@gmail.com">shriharipriyaashram@gmail.com</a></p></div>
<div class="contact-card"><div class="icon">📱</div><h3>फोन</h3><p><a href="tel:9810816905">9810816905</a><br><a href="tel:9818157104">9818157104</a><br><a href="tel:9810963108">9810963108</a></p></div>
<div class="contact-card"><div class="icon">🌐</div><h3>वेबसाइट</h3><p><a href="http://www.shriharipriyaashram.com" target="_blank" rel="noopener">shriharipriyaashram.com ↗</a></p></div>
</div>
<div class="section" style="padding:45px 0 0"><div class="split"><div class="card"><h2>श्रीहरिप्रिया सुरभारती सेवा ट्रस्ट</h2><p><b>Bank:</b> HDFC BANK<br><b>IFSC:</b> HDFC00007694<br><b>Saving A/c:</b> 50100767842764<br><b>Branch:</b> Civil Lines, New Delhi-110054</p><p style="color:var(--muted)">यह वित्तीय विवरण आपके दिए संस्थागत सामग्री के अनुसार प्रदर्शित किया गया है। प्रकाशित करने से पहले बैंक/ट्रस्ट विवरण की स्वयं पुष्टि करना उचित है।</p></div><div class="visual-placeholder" style="background:linear-gradient(135deg,#2879a8,#2d8a63)"><div><div class="big">📞</div><strong>सम्पर्क करें</strong><span>जय श्रीमन्नारायण · राधे राधे</span></div></div></div></div>`),
};

const bookData = [
  {title:"वेद एवं वेदाङ्ग",cat:"वैदिक ग्रन्थ",author:"श्रीहरिप्रिया सुरभारती",desc:"वैदिक ज्ञान-परम्परा से सम्बद्ध अध्ययन सामग्री।"},
  {title:"संस्कृत साहित्य-संग्रह",cat:"साहित्य",author:"श्रीहरिप्रिया प्रकाशन",desc:"संस्कृत साहित्य के अध्ययन हेतु चयनित सामग्री।"},
  {title:"स्तोत्र-संग्रह",cat:"स्तोत्र",author:"श्रीहरिप्रिया प्रकाशन",desc:"स्तोत्र, प्रार्थना और उपासना से सम्बद्ध ग्रन्थ।"},
  {title:"संस्कृत व्याकरण",cat:"संस्कृत ग्रन्थ",author:"श्रीहरिप्रिया गुरुकुलम्",desc:"संस्कृत भाषा-अध्ययन के लिए उपयोगी सामग्री।"},
  {title:"उपनिषद् अध्ययन",cat:"वैदिक ग्रन्थ",author:"श्रीहरिप्रिया सुरभारती",desc:"उपनिषद् एवं वैदिक चिन्तन के अध्ययन की दिशा में।"},
  {title:"रामायण",cat:"साहित्य",author:"परम्परागत ग्रन्थ",desc:"भारतीय ज्ञान और आदर्श जीवन का महत्त्वपूर्ण स्रोत।"},
  {title:"शैक्षिक सामग्री",cat:"शैक्षिक सामग्री",author:"श्रीहरिप्रिया गुरुकुलम्",desc:"विद्यार्थियों के अध्ययन एवं अभ्यास के लिए।"},
  {title:"दर्शन एवं धर्म",cat:"संस्कृत ग्रन्थ",author:"श्रीहरिप्रिया प्रकाशन",desc:"दर्शन, धर्म और भारतीय चिन्तन पर केन्द्रित सामग्री।"}
];

function bookCard(b){
  return `<article class="book" data-cat="${b.cat}" data-title="${b.title.toLowerCase()}">
    <div class="book-cover"><small>${b.cat}</small><b>${b.title}</b><small>${b.author}</small></div>
    <div class="book-info"><strong>${b.author}</strong><p>${b.desc}</p><a class="btn secondary shine" href="https://archive.org/" target="_blank" rel="noopener">📖 Archive में पढ़ें ↗</a></div>
  </article>`;
}
function pageShell(icon,title,sub,body){
 return `<section class="page"><div class="page-title"><div class="container"><div class="eyebrow">${icon} श्रीहरिप्रिया आश्रम</div><h1>${title}</h1><p>${sub}</p></div></div><section class="section"><div class="container">${body}</div></section></section>`;
}
function showToast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
function setPage(page){
 if(!pages[page]) page="home";
 document.getElementById("app").innerHTML=pages[page]();
 document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 document.getElementById("mainNav").classList.remove("open");
 document.getElementById("menuToggle").setAttribute("aria-expanded","false");
 window.scrollTo({top:0,behavior:"smooth"});
 document.getElementById("app").focus({preventScroll:true});
 history.replaceState(null,"","#"+page);
 if(page==="elibrary") initLibrary();
 attachTouchEffects();
}
function initLibrary(){
 const search=document.getElementById("bookSearch"), grid=document.getElementById("elibraryGrid");
 if(!search||!grid)return;
 let active="सभी";
 const filter=()=>{const q=search.value.trim().toLowerCase();grid.querySelectorAll(".book").forEach(el=>{const okCat=active==="सभी"||el.dataset.cat===active;const okText=!q||el.dataset.title.includes(q);el.style.display=okCat&&okText?"":"none"})};
 search.addEventListener("input",filter);
 document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.filter;filter()}));
}
function attachTouchEffects(){
 document.querySelectorAll(".card,.book,.gallery-item,.btn").forEach(el=>{
   el.addEventListener("pointerdown",()=>{el.classList.add("touching");setTimeout(()=>el.classList.remove("touching"),420)},{passive:true});
 });
}
document.addEventListener("click",e=>{
 const target=e.target.closest("[data-page]");
 if(target){e.preventDefault();setPage(target.dataset.page)}
});
document.getElementById("menuToggle").addEventListener("click",()=>{
 const n=document.getElementById("mainNav"), open=n.classList.toggle("open");
 document.getElementById("menuToggle").setAttribute("aria-expanded",String(open));
});
window.addEventListener("hashchange",()=>setPage(location.hash.slice(1)||"home"));
document.getElementById("year").textContent=new Date().getFullYear();
setPage(location.hash.slice(1)||"home");
