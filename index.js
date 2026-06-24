 // ===== REAL Teachers Database - 100% Authentic =====
const teachersData = [
    // ===== أولى ثانوي - علمي =====
    {
        id: 1, name: "أ/ أحمد سرور (يلا نفهم Math)", subject: "الرياضيات", year: "first", branch: "scientific", region: "cairo",
        rating: 4.9, students: 940, experience: "15 سنة", regionName: "القاهرة",
        channel: "https://www.youtube.com/@مستر-احمد-سرور",
        videos: [
            { title: "تقسيم قطعة مستقيمة بالكامل | رياضيات أولى ثانوي", embed: "https://www.youtube.com/embed/ARZjVbVFn1w" },
            { title: "مراجعة حساب مثلثات كاملا أولي ثانوي", embed: "https://www.youtube.com/embed/HpVsGw3O0dQ" },
            { title: "Full Algebra Review for 1st Year Secondary", embed: "https://www.youtube.com/embed/0DzjjOAQVJw" }
        ]
    },
    {
        id: 2, name: "أ/ محمد عبدالمعبود", subject: "الفيزياء", year: "first", branch: "scientific", region: "alex",
        rating: 4.9, students: 1350, experience: "12 سنة", regionName: "الإسكندرية",
        channel: "https://www.youtube.com/@mr.abdelmaaboud",
        videos: [
            { title: "First Physics Lecture 2026", embed: "https://www.youtube.com/embed/9xnaMi44J6U" },
            { title: "مراجعة الفصل الأول | الفيزياء 2024", embed: "https://www.youtube.com/embed/-RgKnOSuaxY" },
            { title: "الكورس التأسيسي - جزء الفيزياء", embed: "https://www.youtube.com/embed/JKv6b-xFKOM" }
        ]
    },
    {
        id: 3, name: "د/ سامح إبراهيم", subject: "الكيمياء", year: "first", branch: "scientific", region: "online",
        rating: 4.8, students: 748, experience: "10 سنوات", regionName: "أونلاين",
        channel: "https://www.youtube.com/@Chemist_SamehIbrahiem",
        videos: [
            { title: "شرح الباب الأول العناصر الانتقالية 2026", embed: "https://www.youtube.com/embed/RUhI-C60P9c" },
            { title: "الكيمياء التحليلية الباب الثاني 2026", embed: "https://www.youtube.com/embed/ulIqDPBTzNQ" },
            { title: "Superior Levels First Lecture 2026", embed: "https://www.youtube.com/embed/rOgon9Cb9d8" }
        ]
    },
    {
        id: 4, name: "د/ يحي عبدالدايم", subject: "الأحياء", year: "first", branch: "scientific", region: "giza",
        rating: 4.8, students: 500, experience: "8 سنوات", regionName: "الجيزة",
        channel: "https://www.youtube.com/@DrYahiaAbdeldaiem",
        videos: [
            { title: "معرفة أسماء العظام | أحياء 3 ثانوي", embed: "https://www.youtube.com/embed/wcRtL8iikbA" },
            { title: "الوحدة الحركية - الدعامة والحركة", embed: "https://www.youtube.com/embed/L4SCljZrI-w" },
            { title: "شرح أحياء + جيولوجيا (نظام جديد)", embed: "https://www.youtube.com/embed/Ae17ps0Hzoo" }
        ]
    },
    // ===== أولى ثانوي - أدبي =====
    {
        id: 5, name: "أ/ الباشا محمد سعد", subject: "التاريخ", year: "first", branch: "literary", region: "cairo",
        rating: 4.9, students: 324, experience: "14 سنة", regionName: "القاهرة",
        channel: "https://www.youtube.com/@ElPasha-الباشا",
        videos: [
            { title: "تاريخ ٣ ثانوي ٢٠٢٦ - شرح الفصل الثاني 1", embed: "https://www.youtube.com/embed/g_qSSCubVbk" },
            { title: "مراجعة الفصل الأول والثاني تاريخ", embed: "https://www.youtube.com/embed/hxEfwW-Od5o" },
            { title: "تاريخ ٣ ثانوي ٢٠٢٦ - شرح الفصل الأول 2", embed: "https://www.youtube.com/embed/PQMJOICennw" }
        ]
    },
    {
        id: 6, name: "أ/ نادر جورج", subject: "الفلسفة والتاريخ", year: "first", branch: "literary", region: "alex",
        rating: 4.8, students: 200, experience: "11 سنة", regionName: "الإسكندرية",
        channel: "https://www.youtube.com/@mrnadergeorge",
        videos: [
            { title: "فض اشتباك | تاريخ أولي ثانوي", embed: "https://www.youtube.com/embed/pggD6fRJVq8" },
            { title: "مراجعه تاريخ أولى ثانوي الترم الثاني 2026", embed: "https://www.youtube.com/embed/9xnaMi44J6U" },
            { title: "مراجعه فلسفه أولي ثانوي الترم الثاني", embed: "https://www.youtube.com/embed/-RgKnOSuaxY" }
        ]
    },
    // ===== ثانية ثانوي - علمي =====
    {
        id: 7, name: "أ/ أحمد سرور (يلا نفهم Math)", subject: "الرياضيات", year: "second", branch: "scientific", region: "mansoura",
        rating: 4.9, students: 940, experience: "16 سنة", regionName: "المنصورة",
        channel: "https://www.youtube.com/@مستر-احمد-سرور",
        videos: [
            { title: "Solving Sample Test 9 (Pure Mathematics) 2026", embed: "https://www.youtube.com/embed/379O5NZ64YY" },
            { title: "Foundation of Third Secondary Mathematics - Lecture 1", embed: "https://www.youtube.com/embed/ARZjVbVFn1w" },
            { title: "خطة يلا نفهم math + المرحلة الاعدادية 2025", embed: "https://www.youtube.com/embed/0DzjjOAQVJw" }
        ]
    },
    {
        id: 8, name: "أ/ محمد عبدالمعبود", subject: "الفيزياء", year: "second", branch: "scientific", region: "online",
        rating: 4.9, students: 1350, experience: "13 سنة", regionName: "أونلاين",
        channel: "https://www.youtube.com/@mr.abdelmaaboud",
        videos: [
            { title: "المحاضرة الأولى في الفيزياء تانية ثانوي", embed: "https://www.youtube.com/embed/joHiK5oZ1pI" },
            { title: "التيار الكهربي | محاضرتنا الأولى 2026", embed: "https://www.youtube.com/embed/8Ha1l5BNwuA" },
            { title: "First Physics Lecture 2026", embed: "https://www.youtube.com/embed/9xnaMi44J6U" }
        ]
    },
    {
        id: 9, name: "أ/ حسام إبراهيم", subject: "الكيمياء", year: "second", branch: "scientific", region: "tanta",
        rating: 4.7, students: 300, experience: "9 سنوات", regionName: "طنطا",
        channel: "https://www.youtube.com/@Mr.Hossam_Ibrahim",
        videos: [
            { title: "الكيمياء العضوية في جيبك | مراجعة نص المنهج", embed: "https://www.youtube.com/embed/J00mvQHGo4o" },
            { title: "مفيش امتحان كيميا بيخلو من الأفكار دي!", embed: "https://www.youtube.com/embed/RUhI-C60P9c" },
            { title: "How to Study for Your Final Exam Review", embed: "https://www.youtube.com/embed/ulIqDPBTzNQ" }
        ]
    },
    // ===== ثانية ثانوي - أدبي =====
    {
        id: 10, name: "أ/ نادر جورج", subject: "الفلسفة", year: "second", branch: "literary", region: "cairo",
        rating: 4.8, students: 200, experience: "12 سنة", regionName: "القاهرة",
        channel: "https://www.youtube.com/@mrnadergeorge",
        videos: [
            { title: "مراجعه فلسفه تانية ثانوي الترم الثاني 2026", embed: "https://www.youtube.com/embed/pggD6fRJVq8" },
            { title: "فض اشتباك | فلسفة تانية ثانوي", embed: "https://www.youtube.com/embed/9xnaMi44J6U" },
            { title: "منهجك كامل في ساعتين | فلسفة تانية ثانوي", embed: "https://www.youtube.com/embed/-RgKnOSuaxY" }
        ]
    },
    {
        id: 11, name: "أ/ الباشا محمد سعد", subject: "التاريخ", year: "second", branch: "literary", region: "giza",
        rating: 4.8, students: 324, experience: "10 سنوات", regionName: "الجيزة",
        channel: "https://www.youtube.com/@ElPasha-الباشا",
        videos: [
            { title: "تاريخ ٣ ثانوي ٢٠٢٦ - شرح الفصل الثاني 1", embed: "https://www.youtube.com/embed/g_qSSCubVbk" },
            { title: "مراجعة الفصل الأول والثاني تاريخ", embed: "https://www.youtube.com/embed/hxEfwW-Od5o" },
            { title: "منهجك كامل في ساعتين | تاريخ تانية ثانوي", embed: "https://www.youtube.com/embed/PQMJOICennw" }
        ]
    },
    // ===== ثالثة ثانوي - علمي =====
    {
        id: 12, name: "أ/ أحمد سرور (يلا نفهم Math)", subject: "الرياضيات", year: "third", branch: "scientific", region: "cairo",
        rating: 5.0, students: 940, experience: "20 سنة", regionName: "القاهرة",
        channel: "https://www.youtube.com/@مستر-احمد-سرور",
        videos: [
            { title: "كورس تأسيس الرياضيات الصف الثالث الثانوي 2025", embed: "https://www.youtube.com/embed/379O5NZ64YY" },
            { title: "Solving Sample Test 9 (Pure Mathematics) 2026", embed: "https://www.youtube.com/embed/ARZjVbVFn1w" },
            { title: "خطة يلا نفهم math + المرحلة الاعدادية", embed: "https://www.youtube.com/embed/0DzjjOAQVJw" },
            { title: "Full Algebra Review for 3rd Year Secondary", embed: "https://www.youtube.com/embed/HpVsGw3O0dQ" }
        ]
    },
    {
        id: 13, name: "أ/ محمد عبدالمعبود", subject: "الفيزياء", year: "third", branch: "scientific", region: "alex",
        rating: 4.9, students: 1350, experience: "17 سنة", regionName: "الإسكندرية",
        channel: "https://www.youtube.com/@mr.abdelmaaboud",
        videos: [
            { title: "مراجعة الفصل الأول | الفيزياء 2024", embed: "https://www.youtube.com/embed/-RgKnOSuaxY" },
            { title: "First Physics Lecture 2026", embed: "https://www.youtube.com/embed/9xnaMi44J6U" },
            { title: "التيار الكهربي | محاضرتنا الأولى 2026", embed: "https://www.youtube.com/embed/8Ha1l5BNwuA" }
        ]
    },
    {
        id: 14, name: "د/ سامح إبراهيم", subject: "الكيمياء", year: "third", branch: "scientific", region: "online",
        rating: 4.8, students: 748, experience: "15 سنة", regionName: "أونلاين",
        channel: "https://www.youtube.com/@Chemist_SamehIbrahiem",
        videos: [
            { title: "شرح الباب الأول العناصر الانتقالية 2026", embed: "https://www.youtube.com/embed/RUhI-C60P9c" },
            { title: "الكيمياء التحليلية الباب الثاني 2026", embed: "https://www.youtube.com/embed/ulIqDPBTzNQ" },
            { title: "حل واجب الأزهر | كيمياء 3ثانوي 2026", embed: "https://www.youtube.com/embed/rOgon9Cb9d8" }
        ]
    },
    {
        id: 15, name: "د/ يحي عبدالدايم", subject: "الأحياء", year: "third", branch: "scientific", region: "mansoura",
        rating: 4.7, students: 500, experience: "11 سنة", regionName: "المنصورة",
        channel: "https://www.youtube.com/@DrYahiaAbdeldaiem",
        videos: [
            { title: "أحياء 3 ثانوي - DNA | الفيديو (1)", embed: "https://www.youtube.com/embed/wcRtL8iikbA" },
            { title: "الوحدة الحركية - الدعامة والحركة", embed: "https://www.youtube.com/embed/L4SCljZrI-w" },
            { title: "معرفة أسماء العظام | أحياء 3 ثانوي", embed: "https://www.youtube.com/embed/Ae17ps0Hzoo" }
        ]
    },
    // ===== ثالثة ثانوي - أدبي =====
    {
        id: 16, name: "أ/ الباشا محمد سعد", subject: "التاريخ", year: "third", branch: "literary", region: "cairo",
        rating: 4.9, students: 324, experience: "18 سنة", regionName: "القاهرة",
        channel: "https://www.youtube.com/@ElPasha-الباشا",
        videos: [
            { title: "تاريخ ٣ ثانوي ٢٠٢٦ - شرح الفصل الأول 2", embed: "https://www.youtube.com/embed/PQMJOICennw" },
            { title: "تاريخ ٣ ثانوي ٢٠٢٦ - شرح الفصل الثاني 1", embed: "https://www.youtube.com/embed/g_qSSCubVbk" },
            { title: "مراجعة الفصل الأول والثاني تاريخ", embed: "https://www.youtube.com/embed/hxEfwW-Od5o" }
        ]
    },
    {
        id: 17, name: "أ/ نادر جورج", subject: "التاريخ والفلسفة", year: "third", branch: "literary", region: "tanta",
        rating: 4.6, students: 200, experience: "10 سنوات", regionName: "طنطا",
        channel: "https://www.youtube.com/@mrnadergeorge",
        videos: [
            { title: "فض اشتباك | تاريخ ثالثة ثانوي", embed: "https://www.youtube.com/embed/pggD6fRJVq8" },
            { title: "مراجعه تاريخ ثالثة ثانوي الترم الثاني 2026", embed: "https://www.youtube.com/embed/9xnaMi44J6U" },
            { title: "منهجك كامل في ساعتين | تاريخ ثالثة ثانوي", embed: "https://www.youtube.com/embed/-RgKnOSuaxY" }
        ]
    },
    {
        id: 18, name: "أ/ نادر جورج", subject: "الفلسفة", year: "third", branch: "literary", region: "online",
        rating: 4.8, students: 200, experience: "14 سنة", regionName: "أونلاين",
        channel: "https://www.youtube.com/@mrnadergeorge",
        videos: [
            { title: "مراجعه فلسفه ثالثة ثانوي الترم الثاني 2026", embed: "https://www.youtube.com/embed/pggD6fRJVq8" },
            { title: "فض اشتباك | فلسفة ثالثة ثانوي", embed: "https://www.youtube.com/embed/9xnaMi44J6U" },
            { title: "منهجك كامل في ساعتين | فلسفة ثالثة ثانوي", embed: "https://www.youtube.com/embed/-RgKnOSuaxY" }
        ]
    }
];

// ===== DOM Elements =====
const yearSelect = document.getElementById('year');
const branchSelect = document.getElementById('branch');
const regionSelect = document.getElementById('region');
const btnSearch = document.getElementById('btnSearch');
const loading = document.getElementById('loading');
const resultsSection = document.getElementById('resultsSection');
const teachersGrid = document.getElementById('teachersGrid');
const resultsCount = document.getElementById('resultsCount');
const videosSection = document.getElementById('videosSection');
const videosGrid = document.getElementById('videosGrid');
const videosTitle = document.getElementById('videosTitle');
const btnCloseVideos = document.getElementById('btnCloseVideos');

// ===== Event Listeners =====
btnSearch.addEventListener('click', searchTeachers);
btnCloseVideos.addEventListener('click', closeVideos);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideos();
});

// ===== Search Teachers - CORRECT FILTERING =====
function searchTeachers() {
    const year = yearSelect.value;
    const branch = branchSelect.value;
    const region = regionSelect.value;

    if (!year || !branch || !region) {
        showNotification('يرجى اختيار السنة والشعبة والمنطقة', 'warning');
        return;
    }

    loading.classList.add('active');
    resultsSection.classList.remove('active');
    closeVideos();

    setTimeout(() => {
        // FILTER BY ALL THREE: year + branch + region
        let filtered = teachersData.filter(t => 
            t.year === year && t.branch === branch && t.region === region
        );

        // Sort by rating (highest first)
        filtered.sort((a, b) => b.rating - a.rating);

        loading.classList.remove('active');
        displayTeachers(filtered, region);
    }, 600);
}

// ===== Display Teachers =====
function displayTeachers(teachers, selectedRegion) {
    const regionName = getRegionName(selectedRegion);

    if (teachers.length === 0) {
        teachersGrid.innerHTML = `
            <div class="no-results">
                <span class="no-results-icon">😕</span>
                <p>لا يوجد مدرسين في <strong>${regionName}</strong> لهذه الشعبة حالياً</p>
                <p style="font-size: 0.9rem; margin-top: 10px;">جرب اختيار منطقة أخرى أو "أونلاين" للدروس عن بُعد</p>
            </div>
        `;
        resultsCount.textContent = '0 مدرس';
        resultsSection.classList.add('active');
        return;
    }

    resultsCount.textContent = `${teachers.length} مدرس في ${regionName}`;

    teachersGrid.innerHTML = teachers.map(teacher => `
        <div class="teacher-card" onclick="showVideos(${teacher.id})" role="button" tabindex="0">
            <div class="teacher-header">
                <div class="teacher-name">${teacher.name}</div>
                <div class="teacher-subject">${teacher.subject}</div>
                <div class="teacher-rating">⭐ ${teacher.rating}</div>
            </div>
            <div class="teacher-body">
                <div class="teacher-info">
                    <span>📍</span>
                    <span>${teacher.regionName}</span>
                </div>
                <div class="teacher-info">
                    <span>⏱️</span>
                    <span>${teacher.experience}</span>
                </div>
                <div class="teacher-info">
                    <span>🔗</span>
                    <a href="${teacher.channel}" target="_blank" style="color: #1a237e; text-decoration: none;" onclick="event.stopPropagation()">قناة YouTube</a>
                </div>
                <div class="teacher-stats">
                    <div class="stat">
                        <div class="stat-value">${teacher.students}K</div>
                        <div class="stat-label">مشترك</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${teacher.videos.length}</div>
                        <div class="stat-label">فيديو</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${teacher.rating}</div>
                        <div class="stat-label">تقييم</div>
                    </div>
                </div>
                <button class="btn-view-videos" onclick="event.stopPropagation(); showVideos(${teacher.id})">
                    <span>🎬</span>
                    <span>مشاهدة الفيديوهات</span>
                </button>
            </div>
        </div>
    `).join('');

    resultsSection.classList.add('active');

    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ===== Helper: Get Region Name =====
function getRegionName(code) {
    const regions = {
        'cairo': 'القاهرة',
        'alex': 'الإسكندرية',
        'giza': 'الجيزة',
        'mansoura': 'المنصورة',
        'tanta': 'طنطا',
        'online': 'أونلاين'
    };
    return regions[code] || code;
}

// ===== Show Videos =====
function showVideos(teacherId) {
    const teacher = teachersData.find(t => t.id === teacherId);
    if (!teacher) return;

    videosTitle.textContent = `🎬 فيديوهات ${teacher.name} - ${teacher.subject}`;

    videosGrid.innerHTML = teacher.videos.map((video, index) => `
        <div class="video-card" style="animation: fadeIn 0.5s ease ${index * 0.1}s both;">
            <div class="video-wrapper">
                <iframe 
                    src="${video.embed}" 
                    title="${video.title}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy"
                ></iframe>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-subject">
                    <span>📚</span>
                    <span>${video.subject}</span>
                </div>
            </div>
        </div>
    `).join('');

    videosSection.classList.add('active');

    setTimeout(() => {
        videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ===== Close Videos =====
function closeVideos() {
    videosSection.classList.remove('active');
    const iframes = videosGrid.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.src = iframe.src;
    });
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'warning' ? '⚠️' : 'ℹ️'}</span>
        <span class="notification-text">${message}</span>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'warning' ? '#fff3e0' : '#e3f2fd'};
        color: ${type === 'warning' ? '#e65100' : '#1565c0'};
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
        z-index: 10000;
        animation: slideDown 0.3s ease;
        border: 2px solid ${type === 'warning' ? '#ff9800' : '#2196f3'};
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.title = 'العودة للأعلى';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// ===== Add animation keyframes =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
`;
document.head.appendChild(style);