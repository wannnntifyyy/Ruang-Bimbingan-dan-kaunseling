document.addEventListener("DOMContentLoaded", () => {

    // ELEMEN UTAMA
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalClose = document.getElementById("modalClose");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const toast = document.getElementById("toast");

    // TAHUN AUTOMATIK
    document.getElementById("year").textContent =
        new Date().getFullYear();

    // TOAST NOTIFICATION
    let toastTimer;

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);
    }

    // MENU MOBILE
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // TUTUP MENU SELEPAS KLIK
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    // MODAL
    function openModal(title, content) {
        modalTitle.textContent = title;
        modalContent.innerHTML = content;
        modalBackdrop.classList.add("show");
        document.body.style.overflow = "hidden";
        modalClose.focus();
    }

    function closeModal() {
        modalBackdrop.classList.remove("show");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener("click", closeModal);

    modalBackdrop.addEventListener("click", event => {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    // DATA PERKHIDMATAN
    const services = {
        individu: {
            title: "Bimbingan Individu",
            description:
                "Bimbingan individu menyediakan ruang perbincangan secara peribadi antara murid dengan kaunselor.",
            items: [
                "Mengenali kekuatan dan kelemahan diri.",
                "Mengurus tekanan dan emosi.",
                "Membincangkan cabaran peribadi.",
                "Membina pilihan dan tindakan yang sesuai."
            ]
        },

        kelompok: {
            title: "Bimbingan Kelompok",
            description:
                "Bimbingan kelompok membantu murid belajar dan berkembang melalui interaksi bersama ahli kumpulan.",
            items: [
                "Meningkatkan kemahiran komunikasi.",
                "Membina keyakinan diri.",
                "Belajar bekerjasama.",
                "Memupuk empati dan hubungan positif."
            ]
        },

        akademik: {
            title: "Bimbingan Akademik",
            description:
                "Bimbingan akademik memberi tumpuan kepada pengurusan pembelajaran dan pencapaian murid.",
            items: [
                "Membina jadual belajar.",
                "Mengurus masa dengan berkesan.",
                "Meningkatkan motivasi pembelajaran.",
                "Menetapkan matlamat akademik."
            ]
        },

        kerjaya: {
            title: "Bimbingan Kerjaya",
            description:
                "Bimbingan kerjaya membantu murid mengenali minat, bakat dan peluang pendidikan serta pekerjaan.",
            items: [
                "Mengenal pasti minat dan kecenderungan.",
                "Meneroka bidang pekerjaan.",
                "Mengenali laluan pendidikan.",
                "Merancang hala tuju masa depan."
            ]
        }
    };

    // BUTANG PERKHIDMATAN
    document.querySelectorAll("[data-service]").forEach(button => {
        button.addEventListener("click", () => {
            const service = services[button.dataset.service];

            if (!service) return;

            const list = service.items.map(item =>
                `<li>${item}</li>`
            ).join("");

            openModal(
                service.title,
                `
                    <p>${service.description}</p>
                    <h3>Antara fokus perkhidmatan:</h3>
                    <ul class="modal-content-list">${list}</ul>
                `
            );
        });
    });

    // DATA RUANG ILMU
    const learningContent = {
        emosi: {
            title: "Mengurus Emosi Dengan Bijak",
            paragraphs: [
                "Emosi merupakan sebahagian daripada pengalaman manusia. Mengenali emosi membantu kita memahami keperluan diri.",
                "1. Berhenti seketika dan tarik nafas dengan perlahan.",
                "2. Kenal pasti perasaan yang sedang dialami.",
                "3. Fikirkan perkara yang mencetuskan perasaan tersebut.",
                "4. Pilih tindakan yang tidak memudaratkan diri atau orang lain.",
                "5. Dapatkan sokongan daripada individu yang dipercayai jika memerlukan bantuan."
            ]
        },

        belajar: {
            title: "Teknik Belajar Berkesan",
            paragraphs: [
                "Pembelajaran yang berkesan memerlukan perancangan dan konsistensi.",
                "1. Sediakan jadual belajar yang realistik.",
                "2. Bahagikan tugasan besar kepada tugasan kecil.",
                "3. Gunakan teknik belajar aktif seperti latihan kendiri.",
                "4. Ambil rehat secara berkala.",
                "5. Semak kemajuan dan perbaiki strategi pembelajaran."
            ]
        },

        kerjaya: {
            title: "Mengenali Potensi Kerjaya",
            paragraphs: [
                "Perancangan kerjaya bermula dengan mengenali diri sendiri.",
                "1. Kenal pasti minat dan aktiviti yang disukai.",
                "2. Senaraikan kemahiran dan kekuatan diri.",
                "3. Teroka bidang pendidikan dan pekerjaan.",
                "4. Dapatkan maklumat tentang kelayakan yang diperlukan.",
                "5. Bina perancangan pendidikan dan kerjaya."
            ]
        },

        rakan: {
            title: "Membina Persahabatan Sihat",
            paragraphs: [
                "Hubungan yang sihat terbina melalui rasa hormat, kepercayaan dan komunikasi.",
                "1. Mendengar pandangan orang lain.",
                "2. Menghormati perbezaan pendapat.",
                "3. Menggunakan bahasa yang sopan.",
                "4. Menghormati sempadan peribadi.",
                "5. Menyelesaikan perselisihan secara matang."
            ]
        }
    };

    // BUTANG BACA PANDUAN
    document.querySelectorAll("[data-learning]").forEach(button => {
        button.addEventListener("click", () => {
            const article = learningContent[button.dataset.learning];

            if (!article) return;

            const paragraphs = article.paragraphs.map(text =>
                `<p>${text}</p>`
            ).join("");

            openModal(article.title, paragraphs);
        });
    });

    // REFLEKSI KENDIRI
    const reflectionContent = `
        <p>Pilih keadaan yang paling hampir dengan perasaan anda hari ini.</p>

        <div class="reflection-options">
            <button class="reflection-choice" data-mood="Tenang">
                ☺ Saya berasa tenang
            </button>

            <button class="reflection-choice" data-mood="Kurang bersemangat">
                ◇ Saya kurang bersemangat
            </button>

            <button class="reflection-choice" data-mood="Tertekan">
                ○ Saya berasa tertekan
            </button>

            <button class="reflection-choice" data-mood="Keliru">
                ? Saya berasa keliru
            </button>
        </div>

        <div id="reflectionResult" aria-live="polite"></div>
    `;

    function startReflection() {
        openModal("Refleksi Kendiri", reflectionContent);

        document.querySelectorAll(".reflection-choice")
            .forEach(button => {

                button.style.display = "block";
                button.style.width = "100%";
                button.style.padding = "13px";
                button.style.margin = "10px 0";
                button.style.textAlign = "left";
                button.style.background = "#ffffff";
                button.style.border = "1px solid #e4e1d9";
                button.style.color = "#25362f";

                button.addEventListener("click", () => {
                    const mood = button.dataset.mood;
                    const result = document.getElementById("reflectionResult");

                    const advice = {
                        "Tenang":
                            "Teruskan amalan positif yang membantu anda mengekalkan keseimbangan diri.",

                        "Kurang bersemangat":
                            "Cuba mulakan hari dengan satu tugasan kecil yang mudah dicapai. Raikan setiap kemajuan.",

                        "Tertekan":
                            "Berhenti seketika, tarik nafas perlahan dan cuba kenal pasti perkara yang membebankan anda. Pertimbangkan untuk mendapatkan sokongan.",

                        "Keliru":
                            "Ambil masa untuk menyusun fikiran. Senaraikan perkara yang boleh anda kawal dan dapatkan pandangan individu yang dipercayai."
                    };

                    result.innerHTML = `
                        <div style="
                            background:#e5e8df;
                            padding:20px;
                            margin-top:20px;
                        ">
                            <strong>Terima kasih kerana berkongsi.</strong>
                            <p>Keadaan anda: ${mood}</p>
                            <p>${advice[mood]}</p>
                            <p>Ingat, anda tidak perlu menghadapi semuanya sendirian.</p>
                        </div>
                    `;

                    document.querySelectorAll(".reflection-choice")
                        .forEach(choice => {
                            choice.disabled = true;
                            choice.style.opacity = ".5";
                        });
                });
            });
    }

    document.getElementById("reflectionBtn")
        .addEventListener("click", startReflection);

    document.getElementById("reflectionBtn2")
        .addEventListener("click", startReflection);

    // CARIAN RUANG ILMU
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const learningCards = document.querySelectorAll(".learning-card");
    const emptyState = document.getElementById("emptyState");

    let activeFilter = "semua";

    function filterLearning() {
        const keyword = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        learningCards.forEach(card => {
            const category = card.dataset.category;
            const content = card.textContent.toLowerCase();

            const matchesKeyword = content.includes(keyword);

            const matchesCategory =
                activeFilter === "semua" ||
                category === activeFilter;

            const visible = matchesKeyword && matchesCategory;

            card.style.display = visible ? "block" : "none";

            if (visible) visibleCount++;
        });

        emptyState.hidden = visibleCount !== 0;
    }

    searchBtn.addEventListener("click", filterLearning);

    searchInput.addEventListener("input", filterLearning);

    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            filterLearning();
        }
    });

    // FILTER KATEGORI
    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", () => {

            document.querySelectorAll(".filter-btn")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            activeFilter = button.dataset.filter;

            filterLearning();
        });
    });

    // HUBUNGI KAUNSELOR
    document.getElementById("contactBtn")
        .addEventListener("click", () => {

            openModal(
                "Hubungi Kaunselor",
                `
                    <p>
                        Anda boleh menyediakan mesej permohonan
                        untuk mendapatkan maklumat atau janji temu.
                    </p>

                    <label for="contactName">Nama anda</label>

                    <input
                        id="contactName"
                        type="text"
                        placeholder="Masukkan nama"
                        style="
                            width:100%;
                            padding:12px;
                            margin:10px 0;
                            border:1px solid #ddd;
                        "
                    >

                    <label for="contactMessage">Mesej</label>

                    <textarea
                        id="contactMessage"
                        rows="4"
                        placeholder="Saya ingin mendapatkan maklumat..."
                        style="
                            width:100%;
                            padding:12px;
                            margin:10px 0;
                            border:1px solid #ddd;
                            resize:vertical;
                        "
                    ></textarea>

                    <button
                        id="prepareMessage"
                        class="btn btn-dark"
                        style="width:100%;"
                    >
                        Sediakan mesej
                    </button>

                    <p style="font-size:10px;margin-top:12px;">
                        Mesej akan disediakan untuk disalin.
                        Ia tidak dihantar secara automatik.
                    </p>
                `
            );

            document.getElementById("prepareMessage")
                .addEventListener("click", async () => {

                    const name =
                        document.getElementById("contactName")
                            .value.trim();

                    const message =
                        document.getElementById("contactMessage")
                            .value.trim();

                    if (!name || !message) {
                        showToast("Sila lengkapkan nama dan mesej.");
                        return;
                    }

                    const fullMessage =
                        `Salam sejahtera. Nama saya ${name}.\n\n${message}\n\nTerima kasih.`;

                    try {
                        await navigator.clipboard.writeText(fullMessage);
                        showToast("Mesej berjaya disalin!");
                    } catch (error) {
                        const temporary = document.createElement("textarea");
                        temporary.value = fullMessage;
                        document.body.appendChild(temporary);
                        temporary.select();

                        const copied = document.execCommand("copy");
                        temporary.remove();

                        showToast(
                            copied
                                ? "Mesej berjaya disalin!"
                                : "Sila salin mesej secara manual."
                        );
                    }
                });
        });

    // BACK TO TOP
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // NAVIGASI AKTIF MENGIKUT SEKSYEN
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll("#navMenu a");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") ===
                        `#${entry.target.id}`
                    );
                });
            }
        });
    }, {
        rootMargin: "-30% 0px -60% 0px"
    });

    sections.forEach(section => observer.observe(section));

});