// ============ NEW: Interview booking logic ============
const interviewLinks = {
    'Mandarin': 'https://outlook.office.com/book/Chinese@teleperformance.onmicrosoft.com/s/7lYQUtBQp0O-ps7TnPavzA2?ismsaljsauthenabled',
    'Cantonese': 'https://outlook.office.com/book/Chinese@teleperformance.onmicrosoft.com/s/MV4FDjJs7EeuSYmAOiz6zQ2?ismsaljsauthenabled',
    'Korean': 'https://outlook.office.com/book/TeleperformanceMalaysiaThailandinterviews@teleperformance.onmicrosoft.com/s/VOKIhr5rN0CbMRcvzrUyIw2?ismsaljsauthenabled',
    'Japanese': 'https://outlook.office.com/book/TeleperformanceMalaysiaThailandinterviews@teleperformance.onmicrosoft.com/s/G_rYtA5Pg0ebNjlKhHtTGg2?ismsaljsauthenabled',
    'English': 'https://outlook.office.com/book/EnglishMalay@teleperformance.onmicrosoft.com/s/1VrPYr8cmESlwvf5rfq-Og2?ismsaljsauthenabled',
    'Malay': 'https://outlook.office.com/book/EnglishMalay@teleperformance.onmicrosoft.com/s/1VrPYr8cmESlwvf5rfq-Og2?ismsaljsauthenabled',
    'Thai': 'https://outlook.office.com/book/TeleperformanceMalaysiaSupportHiring@teleperformance.onmicrosoft.com/s/8uzkPuNYJEWfdPhpfRoQag2?ismsaljsauthenabled'
};

const agentJobKeywords = ['customer service', 'content mod', 'content moderator', 'agent', 'support', 'representative', 'specialist', 'associate', 'advisor', 'care'];

function isAgentPosition(jobType) {
    if (!jobType) return false;
    return agentJobKeywords.some(keyword => jobType.toLowerCase().includes(keyword));
}

function getInterviewLink(languageOption) {
    return interviewLinks[languageOption] || interviewLinks['English'];
}
// ============ END NEW CODE ============

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Language translation functionality
    const languages = {
        en: {
            about_us: "About Us",
            careers: "Careers",
            hot_jobMY: "Hot Job MALAYSIA🔥",
            hot_jobTH: "Hot Job THAILAND🔥",
            opportunities: "Job Opportunities 🌟",
            refer_friend: "Refer A Friend🌟",
            stay_connected: "Stay Connected",
            contact_us: "Contact Us",
            language: "Language",
            language_pages: "Language-Specific Pages",
            language_pages_desc: "Explore our dedicated landing pages for each language",
            find_job: "Find your perfect job!",
            choose_language: "Choose your language",
            choose_location: "Choose your location",
            choose_job_type: "Choose your job type",
            generate_qr: "Generate QR Code & Apply Now!",
            intro_text: "We are on the hunt for the <span class='highlight'>One</span>",
            team_response: "Our team will respond within <span class='highlighted-word'>48 hours!</span>",
            share_via: "Share Via",
            preferred_language: "Preferred Language",
            scan_to_apply: "Scan to Apply",
            select_all_options: "Please select all options",
            no_job_found: "No matching job found",
            step_one: "Submit Your Application",
            step_one_desc: "Click the link below or scan the QR code to apply for this position",
            apply_online: "Apply Online Now",
            or_scan: "Or scan QR",
            step_two: "Book Your Interview",
            step_two_desc: "After submitting your application, schedule your interview at your convenience",
            book_interview: "Schedule Interview Now",
            interview_note: "Our team will contact you within 48 hours of your application",
            share_opportunity: "Share This Opportunity"
        },
        zh: {
            about_us: "关于我们",
            careers: "职业机会",
            hot_jobMY: "热门职位 马来西亚🔥",
            hot_jobTH: "热门职位 泰国🔥",
            opportunities: "机会 🌟",
            refer_friend: "介绍个朋友🌟",
            stay_connected: "保持联系",
            contact_us: "联系我们",
            language: "语言",
            language_pages: "语言专属页面",
            language_pages_desc: "浏览我们为各语言专门设计的招聘页面",
            find_job: "找到你的理想工作！",
            choose_language: "选择语言",
            choose_location: "选择地点",
            choose_job_type: "选择工作类型",
            generate_qr: "生成二维码并立即申请！",
            intro_text: "我们正在寻找<span class='highlight'>合适的人选</span>",
            team_response: "我们的团队将在<span class='highlighted-word'>48小时内</span>回复！",
            share_via: "分享方式",
            preferred_language: "首选语言",
            scan_to_apply: "扫描申请",
            select_all_options: "请选择所有选项",
            no_job_found: "未找到匹配的工作",
            step_one: "提交您的申请",
            step_one_desc: "点击下方链接或扫描二维码申请此职位",
            apply_online: "立即在线申请",
            or_scan: "或扫描二维码",
            step_two: "预约面试",
            step_two_desc: "提交申请后，请按您的方便时间安排面试",
            book_interview: "立即预约面试",
            interview_note: "我们的团队将在您申请后48小时内与您联系",
            share_opportunity: "分享此机会"
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            hot_jobMY: "ホットジョブ マレーシア🔥",
            hot_jobTH: "ホットジョブ タイ🔥",
            opportunities: "求人情報 🌟",
            refer_friend: "友人を紹介🌟",
            stay_connected: "つながりを保つ",
            contact_us: "お問い合わせ",
            language: "言語",
            language_pages: "言語別ページ",
            language_pages_desc: "各言語専用のランディングページをご覧ください",
            find_job: "あなたにぴったりの仕事を見つけましょう！",
            choose_language: "言語を選択",
            choose_location: "場所を選択",
            choose_job_type: "仕事の種類を選択",
            generate_qr: "QRコードを生成して今すぐ申し込む！",
            intro_text: "私たちは<span class='highlight'>適任者</span>を探しています",
            team_response: "私たちのチームは<span class='highlighted-word'>48時間以内</span>に返信します！",
            share_via: "共有",
            preferred_language: "希望言語",
            scan_to_apply: "スキャンして応募",
            select_all_options: "すべてのオプションを選択してください",
            no_job_found: "一致する仕事が見つかりません",
            step_one: "応募書類を提出",
            step_one_desc: "下のリンクをクリックするか、QRコードをスキャンしてこのポジションに応募してください",
            apply_online: "今すぐオンラインで応募",
            or_scan: "またはQRをスキャン",
            step_two: "面接を予約",
            step_two_desc: "応募後、ご都合の良い時間に面接を予約してください",
            book_interview: "今すぐ面接を予約",
            interview_note: "チームは応募後48時間以内にご連絡いたします",
            share_opportunity: "この機会を共有"
        },
        kr: {
            about_us: "회사 소개",
            careers: "채용",
            hot_jobMY: "핫한 직업 말레이시아🔥",
            hot_jobTH: "핫한 직업 태국🔥",
            opportunities: "기회 🌟",
            refer_friend: "친구 추천🌟",
            stay_connected: "연결 유지",
            contact_us: "문의하기",
            language: "언어",
            language_pages: "언어별 페이지",
            language_pages_desc: "각 언어를 위한 전용 랜딩 페이지를 살펴보세요",
            find_job: "완벽한 직업을 찾으세요!",
            choose_language: "언어 선택",
            choose_location: "위치 선택",
            choose_job_type: "직무 유형 선택",
            generate_qr: "QR 코드 생성 및 지금 지원!",
            intro_text: "우리는 <span class='highlight'>적임자</span>를 찾고 있습니다",
            team_response: "우리 팀은 <span class='highlighted-word'>48시간</span> 이내에 답변드립니다!",
            share_via: "공유하기",
            preferred_language: "선호 언어",
            scan_to_apply: "스캔하여 지원",
            select_all_options: "모든 옵션을 선택하세요",
            no_job_found: "일치하는 직업을 찾을 수 없음",
            step_one: "지원서 제출",
            step_one_desc: "아래 링크를 클릭하거나 QR 코드를 스캔하여 이 포지션에 지원하세요",
            apply_online: "지금 온라인으로 지원",
            or_scan: "또는 QR 스캔",
            step_two: "면접 예약",
            step_two_desc: "지원서를 제출한 후 편리한 시간에 면접을 예약하세요",
            book_interview: "지금 면접 예약",
            interview_note: "저희 팀이 지원 후 48시간 이내에 연락드립니다",
            share_opportunity: "이 기회 공유"
        },
        my: {
            about_us: "Tentang Kami",
            careers: "Peluang Kerjaya",
            hot_jobMY: "Kerja Hangat MALAYSIA🔥",
            hot_jobTH: "Kerja Hangat THAILAND🔥",
            opportunities: "Peluang Pekerjaan 🌟",
            refer_friend: "Rakan Rujuk🌟",
            stay_connected: "Terus Berhubung",
            contact_us: "Hubungi Kami",
            language: "Bahasa",
            language_pages: "Halaman Khusus Bahasa",
            language_pages_desc: "Terokai halaman khusus kami untuk setiap bahasa",
            find_job: "Cari pekerjaan sempurna anda!",
            choose_language: "Pilih bahasa anda",
            choose_location: "Pilih lokasi anda",
            choose_job_type: "Pilih jenis pekerjaan anda",
            generate_qr: "Hasilkan Kod QR & Mohon Sekarang!",
            intro_text: "Kami mencari <span class='highlight'>Yang Satu</span>",
            team_response: "Pasukan kami akan membalas dalam masa <span class='highlighted-word'>48 jam!</span>",
            share_via: "Kongsi Melalui",
            preferred_language: "Bahasa Pilihan",
            scan_to_apply: "Imbas untuk Memohon",
            select_all_options: "Sila pilih semua pilihan",
            no_job_found: "Tiada pekerjaan yang sepadan ditemui",
            step_one: "Hantar Permohonan Anda",
            step_one_desc: "Klik pautan di bawah atau imbas kod QR untuk memohon jawatan ini",
            apply_online: "Mohon Dalam Talian Sekarang",
            or_scan: "Atau imbas QR",
            step_two: "Tempah Temu Duga Anda",
            step_two_desc: "Selepas menghantar permohonan, jadualkan temu duga anda mengikut keselesaan anda",
            book_interview: "Jadualkan Temu Duga Sekarang",
            interview_note: "Pasukan kami akan menghubungi anda dalam masa 48 jam selepas permohonan",
            share_opportunity: "Kongsi Peluang Ini"
        },
        th: {
            about_us: "เกี่ยวกับเรา",
            careers: "อาชีพ",
            hot_jobMY: "งานร้อนแรง มาเลเซีย🔥",
            hot_jobTH: "งานร้อนแรง ไทย🔥",
            opportunities: "โอกาสในการทำงาน 🌟",
            refer_friend: "แนะนำเพื่อน🌟",
            stay_connected: "ติดต่อกันไว้",
            contact_us: "ติดต่อเรา",
            language: "ภาษา",
            language_pages: "หน้าเฉพาะภาษา",
            language_pages_desc: "สำรวจหน้าแลนดิ้งเฉพาะของเราสำหรับแต่ละภาษา",
            find_job: "หางานในฝันของคุณ!",
            choose_language: "เลือกภาษาของคุณ",
            choose_location: "เลือกสถานที่ของคุณ",
            choose_job_type: "เลือกประเภทงานของคุณ",
            generate_qr: "สร้าง QR Code และสมัครเลย!",
            intro_text: "เรากำลังตามหา<span class='highlight'>คนที่ใช่</span>",
            team_response: "ทีมงานของเราจะตอบกลับภายใน<span class='highlighted-word'>48 ชั่วโมง!</span>",
            share_via: "แชร์ผ่าน",
            preferred_language: "ภาษาที่ต้องการ",
            scan_to_apply: "สแกนเพื่อสมัคร",
            select_all_options: "กรุณาเลือกตัวเลือกทั้งหมด",
            no_job_found: "ไม่พบงานที่ตรงกับเงื่อนไข",
            step_one: "ส่งใบสมัคร",
            step_one_desc: "คลิกลิงก์ด้านล่างหรือสแกน QR Code เพื่อสมัครตำแหน่งนี้",
            apply_online: "สมัครออนไลน์ทันที",
            or_scan: "หรือสแกน QR",
            step_two: "จองการสัมภาษณ์",
            step_two_desc: "หลังจากส่งใบสมัคร กำหนดเวลาสัมภาษณ์ตามความสะดวกของคุณ",
            book_interview: "จองการสัมภาษณ์ทันที",
            interview_note: "ทีมของเราจะติดต่อคุณภายใน 48 ชั่วโมงหลังจากการสมัคร",
            share_opportunity: "แชร์โอกาสนี้"
        }
    };

    // Initialize variables
    let jsonData = [];
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobTypeSelect = document.getElementById('job-type-select');
    const generateBtn = document.getElementById('generate-btn');
    const urlParams = new URLSearchParams(window.location.search);

    // Get current language from URL
    function getLanguageFromUrl() {
        return urlParams.get('lang') || 'en';
    }

    // Toggle video section based on language
    function toggleVideoSection(language) {
        const videoSection = document.getElementById('thai-video-section');
        if (videoSection) {
            if (language === 'th') {
                videoSection.style.display = 'block';
            } else {
                videoSection.style.display = 'none';
            }
        }
    }

    // Update content based on language
    function updateContent(language) {
        const langContent = languages[language] || languages['en'];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langContent[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langContent[key];
                } else {
                    element.innerHTML = langContent[key];
                }
            }
        });

        // Toggle video section visibility
        toggleVideoSection(language);
    }

    // Load job data from JSON file
    function loadJobData() {
        fetch('data.json')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                jsonData = data;
                populateInitialDropdowns();
            })
            .catch(error => {
                console.error('Error loading job data:', error);
                alert(languages[getLanguageFromUrl()]?.no_job_found || 'Failed to load job data. Using default data instead.');
                // Fallback to default data
                jsonData = [
                    {
                        "Positions": "Customer Success Specialist",
                        "Language": "Japanese",
                        "Location": "Penang",
                        "Evergreen title": "Customer Success Specialist - Japanese - Penang",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49421/customer-success-specialist---japanese---penang/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Customer Success Specialist",
                        "Language": "Korean",
                        "Location": "Penang",
                        "Evergreen title": "Customer Success Specialist - Korean - Penang",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49422/customer-success-specialist---korean---penang/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Customer Service Representative",
                        "Language": "English",
                        "Location": "Kuala Lumpur",
                        "Evergreen title": "Customer Service Representative - English - KL",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49423/customer-service-representative---english---kl/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Technical Support Specialist",
                        "Language": "Mandarin",
                        "Location": "Penang",
                        "Evergreen title": "Technical Support Specialist - Mandarin - Penang",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49424/technical-support-specialist---mandarin---penang/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Customer Service Representative",
                        "Language": "Thai",
                        "Location": "Bangkok",
                        "Evergreen title": "Customer Service Representative - Thai - Bangkok",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49425/customer-service-representative---thai---bangkok/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Sales Consultant",
                        "Language": "Malay",
                        "Location": "Kuala Lumpur",
                        "Evergreen title": "Sales Consultant - Malay - KL",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49426/sales-consultant---malay---kl/job?mode=job&iis=LandingPage&iisn="
                    }
                ];
                populateInitialDropdowns();
            });
    }

    // Initially populate dropdowns with all options
    function populateInitialDropdowns() {
        const currentPageLang = getLanguageFromUrl();
        
        // Clear existing options
        languageSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentPageLang]?.choose_language || 'Choose your language') + '</option>';
        locationSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentPageLang]?.choose_location || 'Choose your location') + '</option>';
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentPageLang]?.choose_job_type || 'Choose your job type') + '</option>';

        // Get all unique languages and locations
        const allLanguages = [...new Set(jsonData.map(item => item.Language))];
        const allLocations = [...new Set(jsonData.map(item => item.Location))];

        // Populate language dropdown
        allLanguages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = lang;
            languageSelect.appendChild(option);
        });

        // Populate location dropdown
        allLocations.forEach(loc => {
            const option = document.createElement('option');
            option.value = loc;
            option.textContent = loc;
            locationSelect.appendChild(option);
        });
    }

    // Update locations based on selected language
    function updateLocations() {
        const selectedLanguage = languageSelect.value;
        const currentLocation = locationSelect.value;
        
        // Filter locations based on selected language
        const filteredLocations = selectedLanguage 
            ? [...new Set(jsonData
                .filter(item => item.Language === selectedLanguage)
                .map(item => item.Location))]
            : [...new Set(jsonData.map(item => item.Location))];
        
        // Update location dropdown
        updateDropdown(locationSelect, filteredLocations, currentLocation);
        
        // Update job types based on new selections
        updateJobTypes();
    }

    // Update languages based on selected location
    function updateLanguages() {
        const selectedLocation = locationSelect.value;
        const currentLanguage = languageSelect.value;
        
        // Filter languages based on selected location
        const filteredLanguages = selectedLocation 
            ? [...new Set(jsonData
                .filter(item => item.Location === selectedLocation)
                .map(item => item.Language))]
            : [...new Set(jsonData.map(item => item.Language))];
        
        // Update language dropdown
        updateDropdown(languageSelect, filteredLanguages, currentLanguage);
        
        // Update job types based on new selections
        updateJobTypes();
    }

    // Helper function to update a dropdown while preserving current selection if possible
    function updateDropdown(dropdown, options, currentValue) {
        const currentPageLang = getLanguageFromUrl();
        const currentSelected = dropdown.value;
        dropdown.innerHTML = '';
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = dropdown.id === 'language-select' 
            ? (languages[currentPageLang]?.choose_language || 'Choose your language')
            : (languages[currentPageLang]?.choose_location || 'Choose your location');
        dropdown.appendChild(defaultOption);
        
        // Add all options
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            dropdown.appendChild(opt);
        });
        
        // Restore previous selection if it still exists
        if (options.includes(currentValue)) {
            dropdown.value = currentValue;
        }
    }

    // Update job types based on current selections
    function updateJobTypes() {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        const currentPageLang = getLanguageFromUrl();
        
        // Clear existing options
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentPageLang]?.choose_job_type || 'Choose your job type') + '</option>';
        
        if (selectedLanguage && selectedLocation) {
            // Filter jobs based on selections
            const filteredJobs = jsonData.filter(item => 
                item.Language === selectedLanguage && 
                item.Location === selectedLocation
            );
            
            // Get unique job types
            const jobTypes = [...new Set(filteredJobs.map(item => item.Positions))];
            
            // Populate job types dropdown
            jobTypes.forEach(job => {
                const option = document.createElement('option');
                option.value = job;
                option.textContent = job;
                jobTypeSelect.appendChild(option);
            });
        }
    }

    // Generate final URL with UTM parameters
    function generateFinalURL(baseURL, source, medium) {
        let finalURL = new URL(baseURL);
        let iisValue, iisnValue;

        // Normalise to lowercase so casing in the URL never matters
        // e.g. "LinkedIn", "linkedin", "LINKEDIN" all work
        switch (medium.toLowerCase()) {
            case 'tpmy':
                iisValue = "TPMY Website";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'digitalm':
                iisValue = "Digital Marketing";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'social':
                iisValue = "Social Media";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'career':
                iisValue = "Career Fair";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'digital':
                iisValue = "Digital Ad";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'mobile':
                iisValue = "Mobile Stand";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'university':
                iisValue = "University";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'poster':
                iisValue = "Poster";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'flyers':
                iisValue = "Flyers";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'physical':
                iisValue = "Physical QR";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'fotg':
                iisValue = "FoTG";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'banner1':
                iisValue = "Banner 1";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'banner2':
                iisValue = "Banner 2";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'email':
                iisValue = "Email Blast";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'public':
                iisValue = "Public Stands";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'grab':
                iisValue = "Grab";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'linkedin':
                iisValue = "LinkedIn Recruiter";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'broadcast':
                iisValue = "Broadcast Comms";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            default:
                console.error("Unknown utm_medium:", medium);
                return baseURL;
        }

        // Let URLSearchParams handle all encoding cleanly
    finalURL.searchParams.set('mode', 'job');
    finalURL.searchParams.set('iis', iisValue);
    finalURL.searchParams.set('iisn', source);

    return finalURL.toString();

        return decodeURIComponent(finalURL.toString());
    }

    // Generate QR code and show modal
    function openQrModal(url, selectedLanguage, selectedJob) {
        const qr = new QRious({
            element: document.getElementById('qr-code'),
            value: url,
            size: 200,
            background: 'white',
            foreground: 'black'
        });
        
        const jobUrlElement = document.getElementById('job-url');
        jobUrlElement.href = url;
        jobUrlElement.textContent = url;
        
        // Check if this is an agent position and show/hide interview step
        const interviewStep = document.getElementById('interview-step');
        if (isAgentPosition(selectedJob)) {
            interviewStep.style.display = 'block';
            const interviewUrl = getInterviewLink(selectedLanguage);
            const interviewUrlElement = document.getElementById('interview-url');
            interviewUrlElement.href = interviewUrl;
        } else {
            interviewStep.style.display = 'none';
        }
        
        const qrModal = new bootstrap.Modal(document.getElementById('qrModal'));
        qrModal.show();
        
        // Add QR expand functionality
        const qrCanvas = document.getElementById('qr-code');
        qrCanvas.onclick = function() {
            // Create expanded QR code
            const expandedQR = new QRious({
                element: document.getElementById('qr-code-expanded'),
                value: url,
                size: 400,
                background: 'white',
                foreground: 'black'
            });
            
            // Show expanded modal
            const expandModal = new bootstrap.Modal(document.getElementById('qrExpandedModal'));
            expandModal.show();
        };
    }

    // Initialize event listeners
    function initEventListeners() {
        // Language dropdown change - ONLY update locations, NOT page language
        languageSelect.addEventListener('change', function() {
            updateLocations();
        });

        // Location dropdown change - update languages
        locationSelect.addEventListener('change', updateLanguages);

        // Generate QR button click
        if (generateBtn) {
            generateBtn.addEventListener('click', function() {
                const selectedLanguage = languageSelect.value;
                const selectedLocation = locationSelect.value;
                const selectedJob = jobTypeSelect.value;
                const currentPageLang = getLanguageFromUrl();
                
                if (!selectedLanguage || !selectedLocation || !selectedJob) {
                    alert(languages[currentPageLang]?.select_all_options || 'Please select all options');
                    return;
                }
                
                const jobData = jsonData.find(item => 
                    item.Language === selectedLanguage && 
                    item.Location === selectedLocation && 
                    item.Positions === selectedJob
                );
                
                if (jobData) {
                    const urlParams = new URLSearchParams(window.location.search);
                    const sourceParam = urlParams.get('utm_source') || '';
                    const mediumParam = urlParams.get('utm_medium') || '';

                    // Build the iCIMS link (iis + iisn from utm_source + utm_medium)
                    let finalLink = generateFinalURL(jobData["Evergreen link"], sourceParam, mediumParam);

                    // Append ALL remaining URL params (utm_campaign, lang, etc.)
                    // so nothing from the original URL is lost
                    const finalURL = new URL(finalLink);
                    urlParams.forEach((value, key) => {
                        if (!finalURL.searchParams.has(key)) {
                            finalURL.searchParams.set(key, value);
                        }
                    });
                    finalLink = finalURL.toString();

                    openQrModal(finalLink, selectedLanguage, selectedJob);
                } else {
                    alert(languages[currentPageLang]?.no_job_found || 'No matching job found');
                }
            });
        }

        // Language selector dropdown items (for PAGE language)
        document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLanguage = this.getAttribute('data-lang');
                updateContent(selectedLanguage);
                
                urlParams.set('lang', selectedLanguage);
                window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
                
                populateInitialDropdowns();
            });
        });

        // Share buttons
        document.getElementById('share-button-whatsapp')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at TP!");
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        });

        document.getElementById('share-button-line')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at TP!");
            window.open(`https://line.me/R/msg/text/?${text}%0A%0A${url}`, '_blank');
        });
    }

    // Append current URL params to landing page buttons at click time (always fresh)
    function initLandingButtonParams() {
    document.querySelectorAll('.landing-page-btn.active').forEach(btn => {
        btn.setAttribute('data-base-url', btn.href.split('?')[0]);

        btn.addEventListener('click', function(e) {
            const params = new URLSearchParams(window.location.search);
            const source = params.get('utm_source') || '';
            const medium = params.get('utm_medium') || '';

            if (medium) {
                e.preventDefault();
                const baseURL = btn.getAttribute('data-base-url');
                const finalURL = generateFinalURL(baseURL, source, medium);
                window.open(finalURL, '_blank');
            }
            // If no utm_medium, default href fires normally
        });
    });
}

    // Initialize everything
    function init() {
        updateContent(getLanguageFromUrl());
        loadJobData();
        initEventListeners();
        initLandingButtonParams();
    }

    init();
});
