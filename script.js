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
            hot_job_content: "Hot Job Of The Week!",
            hot_job_description: "Check out our <strong>\"Hot Job of the Week\"</strong> and join our award-winning team! This role offers fantastic growth opportunities, competitive benefits, and the chance to work with cutting-edge AI technology. Apply now and be part of our journey to excellence!",
            apply_now: "Apply Now!",
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
            no_job_found: "No matching job found"
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
            hot_job_content: "本周热门职位!",
            hot_job_description: "查看我们的<strong>\"本周热门职位\"</strong>，加入我们屡获殊荣的团队吧！这个职位提供了绝佳的成长机会、具有竞争力的福利待遇，以及与尖端AI技术合作的机会。立即申请，成为我们追求卓越之旅的一部分！",
            apply_now: "立即申请！",
            find_job: "找到你的理想工作！",
            choose_language: "选择语言",
            choose_location: "选择地点",
            choose_job_type: "选择工作类型",
            generate_qr: "生成二维码并立即申请！",
            intro_text: "我们正在寻找<span class='highlight'>合适的人选</span>",
            team_response: "我们的团队将在<span class='highlighted-word'>48小时</span>内回复！",
            share_via: "分享",
            preferred_language: "首选语言",
            scan_to_apply: "扫码申请",
            select_all_options: "请选择所有选项",
            no_job_found: "未找到匹配的工作"
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            hot_jobMY: "ホットジョブ マレーシア🔥",
            hot_jobTH: "ホットジョブ タイ🔥",
            opportunities: "求人情報 🌟",
            refer_friend: "友達を紹介🌟",
            stay_connected: "つながりを保つ",
            contact_us: "お問い合わせ",
            language: "言語",
            hot_job_content: "今週の注目の求人!",
            hot_job_description: "当社の<strong>「今週の注目の求人」</strong>をチェックして、受賞歴のあるチームに参加しましょう！この役職は、素晴らしい成長機会、競争力のある福利厚生、最先端のAI技術に携わる機会を提供します。今すぐ応募して、私たちの卓越性への旅に参加しましょう！",
            apply_now: "今すぐ応募!",
            find_job: "理想の仕事を見つけよう!",
            choose_language: "言語を選択",
            choose_location: "場所を選択",
            choose_job_type: "職種を選択",
            generate_qr: "QRコードを生成して今すぐ応募!",
            intro_text: "私たちは<span class='highlight'>適任者</span>を探しています",
            team_response: "チームは<span class='highlighted-word'>48時間</span>以内に返信します!",
            share_via: "共有",
            preferred_language: "希望言語",
            scan_to_apply: "スキャンして応募",
            select_all_options: "すべてのオプションを選択してください",
            no_job_found: "一致する仕事が見つかりません"
        },
        kr: {
            about_us: "회사소개",
            careers: "채용정보",
            hot_jobMY: "핫잡 말레이시아🔥",
            hot_jobTH: "핫잡 태국🔥",
            opportunities: "채용기회 🌟",
            refer_friend: "친구추천🌟",
            stay_connected: "연락유지",
            contact_us: "문의하기",
            language: "언어",
            hot_job_content: "이번 주 핫잡!",
            hot_job_description: "우리의 <strong>\"이번 주 핫잡\"</strong>을 확인하고 수상 경력이 있는 팀에 합류하세요! 이 역할은 훌륭한 성장 기회, 경쟁력 있는 혜택 및 최첨단 AI 기술을 사용할 수 있는 기회를 제공합니다. 지금 지원하여 우리의 탁월함을 향한 여정에 동참하세요!",
            apply_now: "지금 지원하세요!",
            find_job: "당신에게 딱 맞는 일자리를 찾아보세요!",
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
            no_job_found: "일치하는 직업을 찾을 수 없음"
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
            hot_job_content: "Kerja Hangat Minggu Ini!",
            hot_job_description: "Lihat <strong>\"Kerja Hangat Minggu Ini\"</strong> kami dan sertai pasukan pemenang anugerah kami! Peranan ini menawarkan peluang pertumbuhan yang hebat, faedah yang kompetitif, dan peluang untuk bekerja dengan teknologi AI canggih. Mohon sekarang dan jadilah sebahagian daripada perjalanan kami ke kecemerlangan!",
            apply_now: "Mohon Sekarang!",
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
            no_job_found: "Tiada pekerjaan yang sepadan ditemui"
        },
        th: {
            about_us: "เกี่ยวกับเรา",
            careers: "อาชีพ",
            hot_job: "งานร้อนแรง มาเลเซีย🔥",
            hot_job: "งานร้อนแรง ไทย🔥",
            opportunities: "โอกาสในการทำงาน 🌟",
            refer_friend: "แนะนำเพื่อน🌟",
            stay_connected: "ติดต่อกันไว้",
            contact_us: "ติดต่อเรา",
            language: "ภาษา",
            hot_job_content: "งานร้อนแรงประจำสัปดาห์!",
            hot_job_description: "ตรวจสอบ<strong>\"งานร้อนแรงประจำสัปดาห์\"</strong>ของเราและเข้าร่วมทีมที่ได้รับรางวัลของเรา! ตำแหน่งนี้เปิดโอกาสในการเติบโตอย่างยอดเยี่ยม สวัสดิการที่แข่งขันได้ และโอกาสในการทำงานกับเทคโนโลยี AI ล้ำสมัย สมัครตอนนี้และเป็นส่วนหนึ่งของการเดินทางสู่ความเป็นเลิศของเรา!",
            apply_now: "สมัครเลย!",
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
            no_job_found: "ไม่พบงานที่ตรงกับเงื่อนไข"
        }
    };

    // Initialize variables
    let jsonData = [];
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobTypeSelect = document.getElementById('job-type-select');
    const generateBtn = document.getElementById('generate-btn');
    const applyBtn = document.getElementById('apply-btn');
    const urlParams = new URLSearchParams(window.location.search);

    // Get current language from URL
    function getLanguageFromUrl() {
        return urlParams.get('lang') || 'en';
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
                setHotJob(getLanguageFromUrl());
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
                setHotJob(getLanguageFromUrl());
            });
    }

    // Initially populate dropdowns with all options
    function populateInitialDropdowns() {
        // Clear existing options
        languageSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_language || 'Choose your language') + '</option>';
        locationSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_location || 'Choose your location') + '</option>';
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_job_type || 'Choose your job type') + '</option>';

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
        const currentSelected = dropdown.value;
        dropdown.innerHTML = '';
        
        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.disabled = true;
        defaultOption.selected = true;
        defaultOption.textContent = dropdown.id === 'language-select' 
            ? (languages[getLanguageFromUrl()]?.choose_language || 'Choose your language')
            : (languages[getLanguageFromUrl()]?.choose_location || 'Choose your location');
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
        
        // Clear existing options
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_job_type || 'Choose your job type') + '</option>';
        
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

        switch (medium) {
            case 'social':
            case 'Social':
                iisValue = "Social Media";
                iisnValue = `${encodeURIComponent(source).replace(/%2B/g, '+')}`;
                break;
            case 'Career':
            case 'career':
                iisValue = "Career Fair";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'digital':
                iisValue = "Digital Ad";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'mobile':
            case 'Mobile':
                iisValue = "Mobile Stand";
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
            case 'FoTG':
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
            case 'Email':
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
            case 'Broadcast':
                iisValue = "Broadcast Comms";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            default:
                console.error("Unknown utm_medium");
                return baseURL;
        }

        finalURL.searchParams.set('mode', 'job');
        finalURL.searchParams.set('iis', encodeURIComponent(iisValue).replace(/%20/g, '+'));
        finalURL.searchParams.set('iisn', encodeURIComponent(iisnValue).replace(/%2B/g, '+'));

        return decodeURIComponent(finalURL.toString());
    }

    // Generate QR code and show modal
    function openQrModal(url) {
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
        
        const qrModal = new bootstrap.Modal(document.getElementById('qrModal'));
        qrModal.show();
    }

    // Set hot job based on language
    function setHotJob(lang) {
        const hotJobs = {
            en: jsonData.find(job => job.Language === "English"),
            zh: jsonData.find(job => job.Language === "Mandarin"),
            jp: jsonData.find(job => job.Language === "Japanese"),
            kr: jsonData.find(job => job.Language === "Korean"),
            my: jsonData.find(job => job.Language === "Malay"),
            th: jsonData.find(job => job.Language === "Thai")
        };
        
        const hotJob = hotJobs[lang] || jsonData[0];
        
        if (hotJob && applyBtn) {
            applyBtn.onclick = function(e) {
                e.preventDefault();
                const urlParams = new URLSearchParams(window.location.search);
                const sourceParam = urlParams.get('utm_source') || '';
                const mediumParam = urlParams.get('utm_medium') || '';
                const finalLink = generateFinalURL(hotJob['Evergreen link'], sourceParam, mediumParam);
                window.open(finalLink, '_blank');
            };
        }
    }

    // Initialize event listeners
    function initEventListeners() {
        // Language dropdown change - update locations
        languageSelect.addEventListener('change', function() {
            updateLocations();
            updateContent(this.value);
            urlParams.set('lang', this.value);
            window.history.replaceState(null, '', `?${urlParams.toString()}`);
        });

        // Location dropdown change - update languages
        locationSelect.addEventListener('change', updateLanguages);

        // Generate QR button click
        if (generateBtn) {
            generateBtn.addEventListener('click', function() {
                const selectedLanguage = languageSelect.value;
                const selectedLocation = locationSelect.value;
                const selectedJob = jobTypeSelect.value;
                
                if (!selectedLanguage || !selectedLocation || !selectedJob) {
                    alert(languages[getLanguageFromUrl()]?.select_all_options || 'Please select all options');
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
                    const finalLink = generateFinalURL(jobData["Evergreen link"], sourceParam, mediumParam);
                    openQrModal(finalLink);
                } else {
                    alert(languages[getLanguageFromUrl()]?.no_job_found || 'No matching job found');
                }
            });
        }

        // Language selector dropdown items
        document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLanguage = this.getAttribute('data-lang');
                updateContent(selectedLanguage);
                
                urlParams.set('lang', selectedLanguage);
                window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
                
                setHotJob(selectedLanguage);
            });
        });

        // Share buttons
        document.getElementById('share-button-whatsapp')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at Teleperformance!");
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        });

        document.getElementById('share-button-line')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at Teleperformance!");
            window.open(`https://line.me/R/msg/text/?${text}%0A%0A${url}`, '_blank');
        });
    }

    // Initialize everything
    function init() {
        updateContent(getLanguageFromUrl());
        loadJobData();
        initEventListeners();
    }

    init();
});
