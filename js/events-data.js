// Data Program Kerja & Event OSIS SMA Tarakanita 2
// Dipakai oleh index.html (kartu event & pencarian) dan detail.html (halaman detail).
const eventsData = [
    {
        id: "tarakupang-2026",
        title: "TARAKUPANG 2026",
        cat: "akan-datang",
        date: "15 - 20 November 2026",
        desc: "Cup tahunan SMA Tarakanita 2 mencakup Basket, Futsal, Modern Dance, dan E-Sports.",
        icon: "fa-trophy",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
        location: "Kampus SMA Tarakanita 2, Pluit - Jakarta Utara",
        pic: "Sekbid 2 (Olahraga) & Sekbid 3 (Seni)",
        participants: "Siswa SMP & SMA se-DKI Jakarta",
        about: [
            "TARAKUPANG adalah kompetisi tahunan terbesar yang diselenggarakan oleh OSIS SMA Tarakanita 2 Jakarta. Tahun ini, TARAKUPANG mengundang lebih dari 40 sekolah di DKI Jakarta untuk bertanding secara sportif di bidang olahraga, seni, dan e-sports.",
            "Lebih dari sekadar kompetisi, TARAKUPANG menjadi ruang perjumpaan antarsekolah yang menghidupi nilai Celebration, Competence, dan Community dalam semangat Cc5+."
        ],
        goals: [
            "Mewadahi bakat dan minat siswa di bidang olahraga, seni, dan teknologi.",
            "Mempererat persaudaraan antarsekolah di DKI Jakarta.",
            "Melatih kepemimpinan dan manajemen acara bagi pengurus OSIS."
        ],
        competitions: [
            { name: "Basket 3x3 & 5x5", icon: "fa-basketball", desc: "Kategori putra dan putri. Sistem gugur dengan babak penyisihan grup.", quota: "16 tim per kategori" },
            { name: "Futsal", icon: "fa-futbol", desc: "Kategori putra. Setiap tim terdiri dari maksimal 12 pemain dan 2 official.", quota: "24 tim" },
            { name: "Modern Dance", icon: "fa-music", desc: "Penampilan tim 5-10 orang dengan durasi 5-7 menit. Penilaian: koreografi, kekompakan, dan ekspresi.", quota: "20 tim" },
            { name: "E-Sports (Mobile Legends)", icon: "fa-gamepad", desc: "Format 5v5, best of 3 di babak penyisihan dan best of 5 di final.", quota: "32 tim" }
        ],
        schedule: [
            { date: "24 Okt - 8 Nov 2026", activity: "Pendaftaran tim peserta" },
            { date: "10 November 2026", activity: "Technical meeting & pengundian grup" },
            { date: "15 - 19 November 2026", activity: "Babak penyisihan hingga semifinal" },
            { date: "20 November 2026", activity: "Grand final, closing ceremony & penyerahan piala" }
        ],
        requirements: [
            "Peserta merupakan siswa aktif yang dibuktikan dengan kartu pelajar.",
            "Setiap tim membawa surat rekomendasi dari sekolah asal.",
            "Satu peserta hanya boleh terdaftar di satu tim per cabang lomba.",
            "Wajib mengikuti technical meeting (diwakili minimal 1 orang per tim)."
        ],
        registration: {
            open: true,
            deadline: "8 November 2026",
            steps: [
                "Hubungi Sekretariat OSIS atau Humas melalui WhatsApp untuk meminta formulir pendaftaran.",
                "Lengkapi formulir beserta data anggota tim dan surat rekomendasi sekolah.",
                "Kirimkan berkas ke email OSIS paling lambat tanggal batas pendaftaran.",
                "Tunggu konfirmasi dan undangan technical meeting dari panitia."
            ]
        }
    },
    {
        id: "classmeeting-2026",
        title: "Lomba Classmeeting 2026",
        cat: "akan-datang",
        date: "15 Oktober 2026",
        desc: "Ajang kompetisi antarkelas SMA Tarakanita 2 Jakarta setelah ujian akhir semester yang memadukan perlombaan olahraga, penalaran, kewirausahaan, e-sport, hingga kreativitas seni untuk mengasah bakat, sportivitas, dan kekompakan siswa.",
        icon: "fa-trophy",
        img: "",
        location: "SMA Tarakanita 2",
        pic: "Sekbid 2 (Olahraga)",
        participants: "Seluruh siswa dan guru SMA Tarakanita 2",
        about: [
            "Classmeeting 2026 merupakan program kerja rutin OSIS SMA Tarakanita 2 Jakarta yang diselenggarakan sebagai wadah penyegaran (refreshing) sekaligus eksplorasi minat dan bakat siswa setelah menyelesaikan rangkaian penilaian akhir semester.",
            "Melalui keberagaman cabang lomba tersebut, setiap siswa memiliki kesempatan yang setara untuk berkontribusi mengharumkan nama kelasnya sekaligus menghidupi nilai-nilai Competence, Creativity, Celebration, dan Community."
        ],
        goals: [
            "Melepas penat siswa setelah menjalani evaluasi akademik melalui kegiatan yang positif, seru, dan rekreatif.",
	    "Membangun rasa kebersamaan, kerja sama tim, dan kekeluargaan antarsiswa di dalam kelas maupun lintas angkatan.",
            "Memfasilitasi beragam potensi siswa di bidang olahraga, berpikir kritis, wirausaha muda, strategi gim, hingga seni musik dan rupa.",
            "Melatih sikap jujur, adil, dan saling menghargai dalam berkompetisi baik saat meraih kemenangan maupun menerima kekalahan."
        ],
        competitions: [
            { name: "Lomba Debat Bahasa Indonesia", icon: "fa-comments", desc: "Tim terdiri dari 3 orang perwakilan kelas. Mosi diumumkan saat technical meeting (Promptu).", quota: "1 tim per kelas" },
            { name: "Lomba Voli", icon: "fa-volleyball", desc: "Setiap kelas menampilkan kostum adat dari daerah yang diundi, disertai narasi singkat.", quota: "1 tim per kelas" },
	    { name: "Basket 3x3 & 5x5", icon: "fa-basketball", desc: "Kategori putra dan putri. Sistem gugur dengan babak penyisihan grup.", quota: "16 tim per kategori" },
            { name: "Futsal", icon: "fa-futbol", desc: "Kategori putra. Setiap tim terdiri dari maksimal 12 pemain dan 2 official.", quota: "24 tim" },
            { name: "E-Sports (Mobile Legends)", icon: "fa-gamepad", desc: "Format 5v5, best of 3 di babak penyisihan dan best of 5 di final.", quota: "32 tim" }
        ],
        schedule: [
            { date: "14 - 21 Oktober 2026", activity: "Pendaftaran peserta per kelas" },
            { date: "23 Oktober 2026", activity: "Technical meeting & pengundian daerah" },
            { date: "15 - 17 Desember 2026", activity: "Pelaksanaan lomba & pengumuman pemenang" }
        ],
        requirements: [
            "Peserta adalah siswa aktif SMA Tarakanita 2.",
            "Pendaftaran dilakukan oleh ketua kelas atau perwakilan kelas.",
            "Semua siswa wajib mengikuti kegiatan Classmeeting 2026."
        ],
        registration: {
            open: true,
            deadline: "21 Oktober 2026",
            steps: [
                "Ketua kelas mendata perwakilan untuk setiap lomba.",
                "Serahkan list peserta ke PIC Lomba.",
                "Hadiri technical meeting untuk pengundian dan pembagian jadwal."
            ]
        }
    },
    {
        id: "morning-greet-26-27",
        title: "Kegiatan Morning Greet",
        cat: "berlangsung",
        date: "Rutin Setiap Hari",
        desc: "Kegiatan penyambutan siswa di pintu masuk sekolah setiap pagi dengan menerapkan budaya 5S serta menertibkan kerapian seragam sebagai wujud kedisiplinan KPKC.",
        icon: "fa-campground",
        img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",
        location: "Lobi Barat SMA Tarakanita 2",
        pic: "SEKBID 5 (HUMAS)",
        participants: "Seluruh Siswa dan Guru SMA Tarakanita 2",
        about: [
            "Morning Greet adalah kegiatan penyambutan rutin yang dilaksanakan setiap hari di pagi hari oleh pengurus OSIS, perwakilan siswa, dan guru untuk menyapa seluruh siswa yang tiba di sekolah. Kegiatan ini menjadi sarana awal pembentukan pembiasaan positif sebelum proses pembelajaran dimulai.",
	    "Kegiatan Morning Greet dilakukan di area gerbang utama atau pintu masuk sekolah, di mana petugas berdiri menyambut kedatangan siswa dengan menerapkan budaya 5S (Senyum, Salam, Sapa, Sopan, Santun). Selain itu, kegiatan ini juga berfungsi sebagai sarana pemantauan kerapian serta ketertiban atribut seragam siswa sebagai wujud penegakan nilai kedisiplinan dan integrasi nilai KPKC (Keadilan, Perdamaian, dan Keutuhan Ciptaan).",
            "Kegiatan ini menjadi fondasi budaya 5S (senyum, salam, sapa, sopan, santun) dengan mengembangkan nilai Kedisiplinan (KPKC)."
        ],
        goals: [
	"Menanamkan kebiasaan 5S (Senyum, Salam, Sapa, Sopan, dan Santun) dalam interaksi sehari-hari di lingkungan sekolah.",
	"Melatih kedisiplinan siswa terkait ketepatan waktu hadir dan kerapian berpakaian sebagai bentuk penghormatan terhadap aturan serta keutuhan komunitas sekolah.",
	"Menciptakan suasana pagi yang hangat dan bersahabat sehingga siswa merasa diterima, dihargai, dan bersemangat untuk memulai kegiatan belajar.",
	"Meningkatkan rasa kekeluargaan dan rasa saling menghargai antara siswa, pengurus OSIS, serta bapak/ibu guru."
        ],
        competitions: [],
        schedule: [],
        requirements: [],
        registration: {
            open: false,
            note: "Kegiatan sedang berlangsung. Diharapkan untuk siswa untuk berperan aktif dalam kegiatan ini."
        }
    },
    {
        id: "hari-pangan-sedunia-2026",
        title: "Hari Pangan Sedunia 2026",
        cat: "selesai",
        date: "19 Oktober 2026",
        desc: "Perlombaan menghias tumpeng berbahan dasar buah-buahan dan umbi-umbian lokal antarkelas di SMA Tarakanita 2 Pluit.",
        icon: "fa-hand-holding-heart",
        img: "https://i.imgur.com/eu0SNxr.png?q=80&w=1600&auto=format&fit=crop",
        location: "SMA Tarakanita 2 Pluit (di kelas masing-masing).",
        pic: "Sekbid 5 (HUMAS)",
        participants: "Seluruh siswa-siswa SMA Tarakanita 2",
        about: [
            "Kegiatan Perayaan Hari Pangan Sedunia (HPS) 2026 di SMA Tarakanita 2 Pluit diisi dengan Lomba Menghias Tumpeng dari Buah dan Umbi-umbian antar kelas. Acara ini bertujuan untuk mengedukasi siswa mengenai pentingnya gizi seimbang dan pemanfaatan hasil bumi lokal sekaligus memfasilitasi nilai Community (komunitas) dan Creativity (kreativitas). Selain berlomba menghias dan mengunggah video hasil karya ke Instagram kelas, kegiatan ini ditutup dengan sesi makan bersama seluruh siswa di kelas masing-masing.",
            "Terima kasih kepada seluruh siswa dan guru yang telah berpartisipasi."
        ],
        goals: [
	"Meningkatkan rasa bersama dengan teman sekelas (Community).",
	"Membentuk sikap menghargai makanan.",
	"Mengenal dan melestarikan keragaman pangan lokal.",
	"Menjadi wadah kreativitas (Creativity) dan kekompakan antar kelas.",
	"Mempererat rasa kebersamaan dan kekeluargaan antar-siswa melalui acara makan bersama.",
	"Menumbuhkan semangat kerja sama dan solidaritas."
        ],
        competitions: [],
        schedule: [
            { date: "16 Oktober 2026", activity: "Technical Meeting HPS" },
            { date: "19 Oktober 2026", activity: "Lomba Hias Tumpeng" }
        ],
        requirements: [],
        registration: {
            open: false,
            note: "Kegiatan telah selesai dilaksanakan. Nantikan program berikutnya!"
        }
    },
    {
        id: "encore-day-2026",
        title: "Encore Day",
        cat: "selesai",
        date: "5 November 2026",
        desc: "Kompetisi antar kelas penuh kebersamaan setelah Penilaian Akhir Semester.",
        icon: "fa-volleyball",
        img: "https://i.imgur.com/D26R5y1.png?q=80&w=1600&auto=format&fit=crop",
        location: "SMA Tarakanita 2",
        pic: "Seluruh Pengurus OSIS",
        participants: "Seluruh siswa SMA Tarakanita 2",
        about: [
            "Encore Day merupakan kegiatan kolaboratif yang menggabungkan tiga peringatan penting sekaligus, yaitu Perayaan Hari Santo Carolus, Bulan Bahasa, dan Hari Pahlawan. Acara ini dikemas melalui serangkaian perlombaan antarkelas yang menguji ketangkasan akademik, kreativitas seni, semangat kebangsaan, serta kekompakan fisik. Jenis perlombaan yang diadakan meliputi Triple C (Cerdas Cermat), LKBB (PBB), Bung Tomo Jr. (Pidato), Jelajah Kata Nusantara, Pos Outbound, Paduan Suara, dan Satu Ikatan.",
        ],
        goals: [
	"Menghayati semangat perjuangan para pahlawan dan nilai-nilai keteladanan Pelindung Yayasan (Santo Carolus Borromeus).",
	"Meningkatkan kecintaan siswa terhadap bahasa, budaya, dan wawasan Nusantara melalui kompetisi berbahasa dan pidato.",
	"Wadah eksplorasi bakat seni, wawasan umum, serta kemampuan berorasi siswa.",
	"Membangun kerja sama tim, kedisiplinan, ketangkasan fisik, dan solidaritas antarsiswa melalui lomba PBB, outbound, serta permainan kelompok."
        ],
        competitions: [
	    { name: "LKBB", icon: "fa-volleyball", desc: "Lomba Penilaian PBB.", quota: "1 tim per kelas (9 orang)" },
            { name: "Satu Ikatan", icon: "fa-futbol", desc: "Lomba mencari naskah", quota: "1 tim per kelas (5 orang)" },
            { name: "Pos Outbond", icon: "fa-people-pulling", desc: "Lomba terdiri dari 5 pos.", quota: "1 tim per kelas (5 orang)" },
            { name: "Triple C", icon: "fa-volleyball", desc: "Lomba Cerdas Cermat antar kelas", quota: "1 tim per kelas (3 orang)" },
            { name: "Jelajah Kata Nusantara", icon: "fa-futbol", desc: "Bermain Ular tangga dan menjawab quiz", quota: "1 tim per kelas (4 orang)" },
            { name: "Bungtomo JR", icon: "fa-people-pulling", desc: "Lomba berpidato.", quota: "1 perwakilan per kelas" },
	    { name: "Paduan Suara", icon: "fa-people-pulling", desc: "Lomba bernyanyi lagu rohani antar kelas", quota: "Seluruh siswa per kelas" }
        ],
        schedule: [
            { date: "5 November 2026", activity: "Lomba Encore Day" },
            { date: "9 November 2026", activity: "Pembagian Juara dan Hadiah" }
        ],
        requirements: [],
        registration: {
            open: false,
            note: "Classmeeting telah selesai dilaksanakan. Selamat kepada seluruh pemenang!"
        }
    }
];