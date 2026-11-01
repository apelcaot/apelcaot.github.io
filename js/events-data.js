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
        id: "bulan-bahasa-2026",
        title: "Bulan Bahasa & Kebudayaan",
        cat: "akan-datang",
        date: "28 Oktober 2026",
        desc: "Lomba debat, cipta puisi, dan parade kostum adat nusantara.",
        icon: "fa-book-open",
        img: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1600&auto=format&fit=crop",
        location: "Aula & Lapangan SMA Tarakanita 2",
        pic: "Sekbid 3 (Seni)",
        participants: "Seluruh siswa kelas X - XII",
        about: [
            "Bulan Bahasa & Kebudayaan diselenggarakan untuk memperingati Hari Sumpah Pemuda. Kegiatan ini mengajak seluruh siswa untuk mencintai bahasa Indonesia dan merayakan keberagaman budaya nusantara.",
            "Setiap kelas berpartisipasi melalui berbagai lomba yang mengasah kemampuan berpikir kritis, berbahasa, dan berekspresi secara kreatif."
        ],
        goals: [
            "Menumbuhkan rasa cinta terhadap bahasa Indonesia dan budaya nusantara.",
            "Mengasah kemampuan berpikir kritis dan berbicara di depan umum.",
            "Merayakan semangat persatuan dalam keberagaman."
        ],
        competitions: [
            { name: "Lomba Debat Bahasa Indonesia", icon: "fa-comments", desc: "Tim terdiri dari 3 orang perwakilan kelas. Mosi diumumkan saat technical meeting.", quota: "1 tim per kelas" },
            { name: "Cipta & Baca Puisi", icon: "fa-feather", desc: "Puisi orisinal bertema persatuan, dibacakan dengan durasi maksimal 5 menit.", quota: "2 peserta per kelas" },
            { name: "Parade Kostum Adat Nusantara", icon: "fa-masks-theater", desc: "Setiap kelas menampilkan kostum adat dari daerah yang diundi, disertai narasi singkat.", quota: "1 tim per kelas" }
        ],
        schedule: [
            { date: "14 - 21 Oktober 2026", activity: "Pendaftaran peserta per kelas" },
            { date: "23 Oktober 2026", activity: "Technical meeting & pengundian daerah" },
            { date: "28 Oktober 2026", activity: "Pelaksanaan lomba & pengumuman pemenang" }
        ],
        requirements: [
            "Peserta adalah siswa aktif SMA Tarakanita 2.",
            "Pendaftaran dilakukan oleh ketua kelas atau perwakilan kelas.",
            "Karya puisi wajib orisinal dan belum pernah dilombakan."
        ],
        registration: {
            open: true,
            deadline: "21 Oktober 2026",
            steps: [
                "Ketua kelas mendata perwakilan untuk setiap lomba.",
                "Serahkan formulir pendaftaran ke Sekretariat OSIS.",
                "Hadiri technical meeting untuk pengundian dan pembagian jadwal."
            ]
        }
    },
    {
        id: "ldks-retret-2026",
        title: "LDKS & Retret OSIS",
        cat: "berlangsung",
        date: "26 - 28 Oktober 2026",
        desc: "Latihan Dasar Kepemimpinan Siswa dan retret penguatan spiritual pimpinan.",
        icon: "fa-campground",
        img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1600&auto=format&fit=crop",
        location: "Rumah Retret, Puncak - Bogor",
        pic: "BPH Core & Sekbid 1 (PDOK)",
        participants: "Pengurus OSIS & MPK periode 2026/2027",
        about: [
            "LDKS (Latihan Dasar Kepemimpinan Siswa) dan Retret OSIS adalah program pembekalan bagi pengurus OSIS dan MPK yang baru dilantik. Selama tiga hari, peserta dibekali materi kepemimpinan, manajemen organisasi, serta pendalaman spiritual.",
            "Kegiatan ini menjadi fondasi bagi pengurus untuk melayani warga sekolah dengan semangat Conviction dan Compassion."
        ],
        goals: [
            "Membentuk karakter pemimpin yang berintegritas dan melayani.",
            "Membekali pengurus dengan keterampilan manajemen organisasi dan program kerja.",
            "Memperkuat kekompakan dan kehidupan rohani pengurus."
        ],
        competitions: [],
        schedule: [
            { date: "26 Oktober 2026", activity: "Keberangkatan, pembukaan & materi kepemimpinan" },
            { date: "27 Oktober 2026", activity: "Outbound, simulasi proker & malam refleksi" },
            { date: "28 Oktober 2026", activity: "Misa penutupan & kepulangan" }
        ],
        requirements: [
            "Peserta adalah pengurus OSIS dan MPK yang telah dilantik.",
            "Membawa surat izin orang tua yang telah ditandatangani.",
            "Membawa perlengkapan pribadi sesuai daftar dari panitia."
        ],
        registration: {
            open: false,
            note: "Kegiatan sedang berlangsung. Peserta LDKS sudah ditetapkan dan pendaftaran telah ditutup."
        }
    },
    {
        id: "baksos-donor-darah-2026",
        title: "Bakti Sosial & Donor Darah",
        cat: "selesai",
        date: "12 September 2026",
        desc: "Aksi kemanusiaan belarasa (Compassion) bagi masyarakat sekitar Pluit.",
        icon: "fa-hand-holding-heart",
        img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
        location: "Lapangan SMA Tarakanita 2 & lingkungan sekitar Pluit",
        pic: "Sekbid 6 (Rohani) & Sekbid 5 (HUMAS)",
        participants: "Siswa, guru, karyawan & masyarakat umum",
        about: [
            "Bakti Sosial & Donor Darah merupakan wujud nyata nilai Compassion yang dihidupi oleh warga SMA Tarakanita 2. Kegiatan ini bekerja sama dengan PMI untuk aksi donor darah serta pembagian paket sembako bagi masyarakat sekitar Pluit.",
            "Terima kasih kepada seluruh siswa, guru, dan orang tua yang telah berpartisipasi dan berdonasi."
        ],
        goals: [
            "Menumbuhkan kepedulian dan belarasa terhadap sesama.",
            "Membantu ketersediaan stok darah bagi PMI.",
            "Mempererat hubungan sekolah dengan masyarakat sekitar."
        ],
        competitions: [],
        schedule: [
            { date: "1 - 10 September 2026", activity: "Pengumpulan donasi sembako" },
            { date: "12 September 2026", activity: "Donor darah bersama PMI & pembagian paket sembako" }
        ],
        requirements: [],
        registration: {
            open: false,
            note: "Kegiatan telah selesai dilaksanakan. Nantikan program bakti sosial berikutnya!"
        }
    },
    {
        id: "classmeeting-smt1-2026",
        title: "Classmeeting Semester 1",
        cat: "selesai",
        date: "18 - 21 Juni 2026",
        desc: "Kompetisi antar kelas penuh kebersamaan setelah Penilaian Akhir Semester.",
        icon: "fa-volleyball",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1600&auto=format&fit=crop",
        location: "Lapangan & Aula SMA Tarakanita 2",
        pic: "Sekbid 2 (Olahraga)",
        participants: "Seluruh kelas X - XII",
        about: [
            "Classmeeting diadakan setelah Penilaian Akhir Semester sebagai ajang rekreasi dan kebersamaan antarkelas. Berbagai lomba olahraga dan hiburan diselenggarakan untuk mempererat solidaritas warga sekolah.",
        ],
        goals: [
            "Menjadi sarana refreshing setelah masa ujian.",
            "Mempererat kekompakan dalam kelas dan antarkelas.",
            "Menumbuhkan sportivitas."
        ],
        competitions: [
            { name: "Voli", icon: "fa-volleyball", desc: "Pertandingan antar kelas campuran putra-putri.", quota: "1 tim per kelas" },
            { name: "Futsal", icon: "fa-futbol", desc: "Kategori putra dan putri.", quota: "1 tim per kelas" },
            { name: "Tarik Tambang", icon: "fa-people-pulling", desc: "Lomba kekompakan dengan 10 peserta per kelas.", quota: "1 tim per kelas" }
        ],
        schedule: [
            { date: "18 - 20 Juni 2026", activity: "Pertandingan penyisihan" },
            { date: "21 Juni 2026", activity: "Final & pengumuman juara umum" }
        ],
        requirements: [],
        registration: {
            open: false,
            note: "Classmeeting telah selesai dilaksanakan. Selamat kepada seluruh pemenang!"
        }
    }
];
