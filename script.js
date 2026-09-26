// ==================================================
// DATA EDITING SYSTEM (सम्पादन हेतु डेटा)
// ==================================================

const gurukulFeatures = [
    { icon: "fa-om", title: "वेद एवं वेदाङ्ग", desc: "पारम्परिक सस्वर वेद पाठ एवं वेदाङ्गों का विशद अध्ययन।" },
    { icon: "fa-book-open", title: "संस्कृत शिक्षा", desc: "संस्कृत व्याकरण, साहित्य और दर्शन का गहन अध्ययन।" },
    { icon: "fa-chalkboard-teacher", title: "उपनिषद् अध्ययन", desc: "ब्रह्मविद्या एवं उपनिषदों का दार्शनिक ज्ञान।" },
    { icon: "fa-laptop", title: "Computer Education", desc: "आधुनिक तकनीकी शिक्षा और कंप्यूटर ज्ञान।" },
    { icon: "fa-music", title: "Music", desc: "शास्त्रीय संगीत एवं भजन गायन।" },
    { icon: "fa-square-root-alt", title: "Mathematics", desc: "आधुनिक एवं वैदिक गणित।" }
];

const activities = [
    { icon: "fa-fire", title: "दैनिक हवन", desc: "विश्व कल्याण हेतु प्रतिदिन प्रात: सायं अग्निहोत्र।" },
    { icon: "fa-praying-hands", title: "शालग्राम सेवा", desc: "भगवान शालग्राम जी की नित्य पूजा एवं अर्चना।" },
    { icon: "fa-book", title: "वेद पारायण", desc: "चतुर्वेद पारायण एवं पाठ।" },
    { icon: "fa-om", title: "संस्कार", desc: "उपनयन, विद्यारम्भ आदि षोडश संस्कार।" }
];

const galleryImages = [
    { src: "assets/images/placeholder.jpg", title: "गुरुकुल परिसर" },
    { src: "assets/images/placeholder.jpg", title: "दैनिक हवन" },
    { src: "assets/images/placeholder.jpg", title: "वेद पाठ" },
    { src: "assets/images/placeholder.jpg", title: "संस्कृत सम्भाषण" },
    { src: "assets/images/placeholder.jpg", title: "उत्सव" }
];

const elibraryBooks = [
    { title: "ऋग्वेद संहिता", author: "महर्षि वेदव्यास", desc: "मूल मन्त्र पाठ", link: "#" },
    { title: "लघुसिद्धान्तकौमुदी", author: "वरदराज", desc: "व्याकरण शास्त्र", link: "#" },
    { title: "श्रीमद्भगवद्गीता", author: "महर्षि वेदव्यास", desc: "शाङ्करभाष्य सहित", link: "#" },
    { title: "तर्कसङ्ग्रह", author: "अन्नंभट्ट", desc: "न्याय दर्शन", link: "#" }
];

const sevaItems = [
    { icon: "fa-child", title: "बालक को गोद लेकर सहायता", desc: "एक विद्यार्थी के सम्पूर्ण अध्ययन एवं आवास का व्यय।" },
    { icon: "fa-utensils", title: "अन्नदान सेवा", desc: "ब्रह्मचारियों के लिए मासिक भोजन व्यवस्था।" },
    { icon: "fa-book-reader", title: "विद्यादान", desc: "पुस्तकों एवं पठन सामग्री हेतु सहयोग।" },
    { icon: "fa-fire", title: "हवन एवं शालग्राम सेवा", desc: "विशेष अवसरों पर अनुष्ठान।" }
];


// ==================================================
// SYSTEM LOGIC & RENDERING
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation & Page Transitions
    const navigate = () => {
        let hash = window.location.hash || '#home';
        
        // Hide all sections
        document.querySelectorAll('.page-section').forEach(sec => {
            sec.classList.remove('active');
            sec.style.display = 'none';
        });

        // Show target section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.style.display = 'block';
            // slight delay for CSS transition to trigger
            setTimeout(() => {
                targetSection.classList.add('active');
            }, 50);
        } else {
            // fallback to home
            document.querySelector('#home').style.display = 'block';
            setTimeout(() => document.querySelector('#home').classList.add('active'), 50);
        }

        // Update active class in Nav
        document.querySelectorAll('.nav-item').forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('show');
    };

    window.addEventListener('hashchange', navigate);
    navigate(); // Init on load

    // Mobile Menu Toggle
    document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('show');
    });

    // 2. Render Data
    renderGridData('gurukul-cards', gurukulFeatures);
    renderGridData('activities-grid', activities);
    renderGridData('seva-grid', sevaItems);
    renderBooksData('elibrary-grid', elibraryBooks, true);
    renderBooksData('library-grid', elibraryBooks, false); // using same array for demo
    renderGallery();
    
    // Set current date in Panchang
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date-info').innerText = "आज का पञ्चाङ्ग: " + new Date().toLocaleDateString('hi-IN', dateOptions);

    // Dummy Panchang Data
    const panchangData = [
        { title: "सूर्योदय", val: "06:15 AM" },
        { title: "चन्द्रोदय", val: "08:30 PM" },
        { title: "तिथि", val: "एकादशी" },
        { title: "नक्षत्र", val: "रोहिणी" }
    ];
    const pGrid = document.getElementById('panchang-grid');
    if(pGrid) {
        panchangData.forEach(p => {
            pGrid.innerHTML += `<div class="panchang-card"><h4>${p.title}</h4><p>${p.val}</p></div>`;
        });
    }
});

// Utility Functions
function renderGridData(containerId, dataArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    dataArray.forEach(item => {
        html += `
            <div class="card">
                <i class="fas ${item.icon}"></i>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                ${item.title.includes('सेवा') ? `<a href="#contact" class="btn btn-secondary btn-shine" style="margin-top:15px;">सेवा करें</a>` : ''}
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderBooksData(containerId, booksArray, isDigital) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '';
    booksArray.forEach(book => {
        html += `
            <div class="book-card">
                <div class="book-cover"><i class="fas fa-book"></i></div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">✍️ ${book.author}</p>
                    <p>${book.desc}</p>
                    ${isDigital ? `<a href="${book.link}" target="_blank" class="btn btn-primary btn-shine" style="margin-top:15px; width:100%;">📖 Archive में पढ़ें</a>` : ''}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;
    
    let html = '';
    galleryImages.forEach(img => {
        html += `
            <div class="gallery-item" onclick="openLightbox('${img.src}')">
                <img src="${img.src}" alt="${img.title}">
                <div class="gallery-overlay">${img.title}</div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Copy to Clipboard
window.copyToClipboard = function(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert(text + " copied to clipboard!");
    });
}

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
window.openLightbox = function(src) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}
document.querySelector('.close-lightbox').addEventListener('click', () => {
    lightbox.style.display = 'none';
});
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});
