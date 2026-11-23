// js/literasi-data.js
const literasiData = [
    {
        id: "pomodoro-active-recall",
        category: "tips",
        badge: "Tips & Tricks Belajar",
        date: "20 November 2026",
        readTime: "4 Menit Baca",
        author: "Sekbid Pendidikan & Akademik",
        title: "Metode Pomodoro & Active Recall: Rahasia Belajar Tanpa Begadang",
        caption: "Sering membaca catatan berulang kali tapi tetap lupa saat ulangan? Pelajari kombinasi teknik Pomodoro (25 menit fokus) dan Active Recall agar materi menempel lebih lama.",
        coverImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
                caption: "Suasana belajar terstruktur dengan pembagian waktu fokus 25 menit."
            },
            {
                url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop",
                caption: "Membuat ringkasan mandiri tanpa melihat buku sebagai latihan Active Recall."
            }
        ],
        content: `
            <p>Banyak siswa menghabiskan waktu berjam-jam hanya dengan membaca ulang buku catatan atau menstabilo halaman buku. Secara ilmiah, metode ini termasuk <em>passive learning</em> yang kurang efektif untuk daya ingat jangka panjang.</p>
            <h3>1. Terapkan Teknik Pomodoro (25/5)</h3>
            <p>Bagi waktu belajarmu menjadi sesi fokus selama <strong>25 menit tanpa gangguan ponsel</strong>, lalu istirahat singkat selama 5 menit. Setelah 4 sesi, ambil istirahat panjang 15–20 menit. Cara ini mencegah otak mengalami kelelahan (<em>burnout</em>).</p>
            <h3>2. Gunakan Active Recall (Mengingat Aktif)</h3>
            <p>Setelah membaca satu sub-bab, tutup bukumu dan coba tuliskan atau jelaskan kembali poin-poin pentingnya dengan bahasamu sendiri. Semakin keras otak berusaha menarik informasi dari ingatan, semakin kuat jalur memori terbentuk.</p>
            <blockquote>
                <strong>Tips Ekstra:</strong> Uji pemahamanmu dengan mengerjakan soal latihan dari bab tersebut sebelum melihat kunci jawaban!
            </blockquote>
        `
    },
    {
        id: "competence-era-ai",
        category: "artikel",
        badge: "Artikel Bulanan",
        date: "15 November 2026",
        readTime: "5 Menit Baca",
        author: "Tim Redaksi OSIS Tarakanita 2",
        title: "Menghidupi Nilai Competence di Era AI: Bijak Memanfaatkan Teknologi",
        caption: "Kecerdasan buatan (AI) kini hadir di sekitar pelajar. Bagaimana cara memanfaatkannya sebagai asisten belajar tanpa mematikan daya pikir kritis siswa Tarakanita?",
        coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=900&auto=format&fit=crop",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
                caption: "Pemanfaatan perangkat digital secara bijak untuk mendukung literasi siswa."
            },
            {
                url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
                caption: "Diskusi kelompok tetap menjadi kunci utama mengasah daya pikir kritis."
            },
            {
                url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
                caption: "Kolaborasi pembelajaran di lingkungan SMA Tarakanita 2 Jakarta."
            }
        ],
        content: `
            <p>Perkembangan teknologi digital dan kecerdasan buatan (AI) membawa kemudahan luar biasa dalam mencari informasi. Namun, bagi pelajar berkarakter <strong>Competence</strong> dan <strong>Conviction</strong>, teknologi harus ditempatkan sebagai alat bantu berpikir, bukan pengganti proses belajar itu sendiri.</p>
            <h3>Jadikan AI sebagai Tutor Diskusi</h3>
            <p>Alih-alih menyalin jawaban secara instan, gunakan teknologi untuk meminta penjelasan konsep yang sulit dipahami dengan analogi sederhana, atau mintalah dibuatkan kuis latihan mandiri menjelang ujian.</p>
            <h3>Jaga Integritas Akademik</h3>
            <p>Kejujuran dan orisinalitas karya tetap menjadi fondasi utama seorang pelajar. Pastikan setiap tugas yang dikumpulkan mencerminkan pemahaman serta usaha terbaik dirimu sendiri.</p>
        `
    },
    {
        id: "cornell-notes-system",
        category: "tips",
        badge: "Tips & Tricks Belajar",
        date: "28 Oktober 2026",
        readTime: "3 Menit Baca",
        author: "Sekbid Pendidikan & Akademik",
        title: "Teknik Mencatat Cornell Notes: Rapi, Terstruktur, dan Siap Pakai",
        caption: "Ubah catatan pelajaran yang berantakan menjadi ringkasan sistematis dengan membagi halaman kertas menjadi 3 bagian utama: Kata Kunci, Catatan, dan Kesimpulan.",
        coverImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=900&auto=format&fit=crop",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
                caption: "Contoh pembagian kolom catatan agar mudah dibaca kembali saat menjelang ujian."
            }
        ],
        content: `
            <p><strong>Cornell Note-Taking System</strong> adalah metode mencatat yang dikembangkan di Universitas Cornell dan terbukti membantu siswa meninjau materi jauh lebih cepat menjelang Ujian Tengah Semester maupun Akhir Semester.</p>
            <ul>
                <li><strong>Kolom Kanan (Catatan Utama):</strong> Tulis poin-poin penjelasan guru selama jam pelajaran berlangsung menggunakan kalimat singkat.</li>
                <li><strong>Kolom Kiri (Kata Kunci / Pertanyaan):</strong> Setelah kelas selesai, tuliskan kata kunci, rumus penting, atau pertanyaan pemicu yang berkaitan dengan catatan di sebelah kanan.</li>
                <li><strong>Bagian Bawah (Ringkasan):</strong> Simpulkan seluruh isi halaman tersebut dalam 2–3 kalimat singkat dengan bahasamu sendiri.</li>
            </ul>
        `
    },
    {
        id: "manajemen-waktu-organisasi",
        category: "artikel",
        badge: "Artikel Bulanan",
        date: "10 Oktober 2026",
        readTime: "4 Menit Baca",
        author: "BPH OSIS Tarakanita 2",
        title: "Aktif Berorganisasi Tanpa Mengorbankan Nilai Akademik: Mungkinkah?",
        caption: "Simak cerita dan strategi pengurus OSIS dalam membagi prioritas antara tugas sekolah, latihan lomba, dan tanggung jawab kepanitiaan.",
        coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop",
        photos: [
            {
                url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
                caption: "Rapat koordinasi program kerja yang terjadwal dengan rapi."
            },
            {
                url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
                caption: "Kerja sama tim membantu meringankan beban pekerjaan setiap anggota."
            }
        ],
        content: `
            <p>Banyak siswa ragu mengikuti kepanitiaan atau organisasi karena takut nilai akademiknya turun. Padahal, berorganisasi justru melatih kemampuan <em>time management</em> dan pemecahan masalah yang sangat berguna hingga jenjang kuliah.</p>
            <h3>Gunakan Matriks Prioritas</h3>
            <p>Bedakan mana tugas yang <strong>Penting & Mendesak</strong> (seperti tugas harian yang dikumpulkan besok) dan mana yang bisa dicicil lebih awal. Jangan menunda pekerjaan hingga mendekati tenggat waktu.</p>
        `
    }
];