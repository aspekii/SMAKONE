import React from 'react'

// Import Component
import BidangSection from '../../../Component/Osis/BidangSection'
import OsisTeam from '../../../Component/Osis/OsisTeam'

// Import Image
import Laurensia from '../../../Image/Osis/Bidang_8/Laurensia.png'
import Cleon from '../../../Image/Osis/Bidang_8/Cleon.jpg'
import Gabriel from '../../../Image/Osis/Bidang_8/Gabriel.jpg'
import Nadya from '../../../Image/Osis/Bidang_8/Nadya.jpg'
import Jocelyn from '../../../Image/Osis/Bidang_8/Jocelyn.jpg'


const OSIS_8 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 8"
        desc="Bidang Pembinaan Sastra dan Budaya"

        person1={<BidangSection img={Laurensia} alt='Laurensia' name='Laurensia Edeline Santosa' desc='Hai haii!!!👋🏻 Nama aku Laurensia Edeline Santosa, biasa dipanggil Lauren, Lau atau Renn. I’m the coordinator of Bid Eight, and yeahh… we ateee👌🏻 Hobiku bernyanyi 🎙️ dan membaca novel📰, terutama karya-karyanya Tere Liye!!! Selain itu, aku juga suka banget dengerin musik genre R&B dan Pop🎷. Fun fact, aku phobia tinggi, paling nggak bisa nonton film horor dan penggemar Nailong garis kerasss💛!!! Kalau mau kasih rekomendasi novel seru atau tanya-tanya soal Smukie, boleh DM IG akuu @laurensiaedeline ^^' />}
        person2={<BidangSection img={Cleon} alt='Cleon' name='Cleon Wyn Setiawan' desc='kenalin nama aku Cleon Wyn Setiawan bisa dipanggil cleon. I’m part of Bid Eight, and yeah… we ateee👌🏻 Hobi aku adalah dance hip hop dan juga main piano, makanan favorit aku yang manis manis 😎. Kalau kalian mau tanya tanya tentang sesuatu, boleh chat ig aku ajaa di @wyncleon , salken semuaa‼️' />}
        person3={<BidangSection img={Gabriel} alt='Gabriel' name='Gabriel Ailenka Cayadi ' desc="Halo semuaa 👋🏻👋🏻 Kenalin nama aku Gabriel Ailenka Cayadi bisa dipanggil Ailenka. I’m part of Bid Eight, and yeah… we ateee👌🏻Selain pengurus OSIS, aku juga join Serenity lohh 💃 Funfact, aku dari kecil suka banget nari, mulai dari tari tradisional Indonesia sampe modern, pokoknya suka smuanya dehh hehee.. Selain nari, aku juga suka cooking 🥘 baking 🍪 dan nonton 🎥 (btw kalo mau recommend series bole banget yaa!!). Anyways, if you want to know more about me, feel free to ask me on IG @gabrielailenka_ nice to meet you all 💗💗" />}
        person4={<BidangSection img={Nadya} alt='Nadya' name='Nadya Cherry Hendro' desc='haii haii semuaa 👋🏻👋🏻👋🏻 kenalinn akuu 🍒 hehe iya cherry, panggil aja ceri, ceroy, apapun dehh asal jangan sayang, soalnya kalau udah baper ribet 😜, and i’m from bid Eight and yeah… we ateee👌🏻. this yearr aku dapet kesempatann as an anggota bidang 8 and i’m beyond grateful for thatt, sedikit tentang akuu sii aku suka dengerin dan main musikk especially violinn 🎻 and piano 🎹 dan aku hobi nontonn jugaa, that’s whyy i decided to join bidang 8, kalau kalian ada recommendation film or drama pleaseeee feel free to reach out to my ig (ceerriy) 🙂‍↕️, aku ga gigit kok ✌🏻andd i wishh kita bisa have fun together in smukiee 👋🏻gudluck in smukie and may the force be with you ✨' />}
        person5={<BidangSection img={Jocelyn} alt='Jocelyn' name='Jocelyn Haosana' desc='haii all👋🏻!! Kenalin, nama aku Jocelyn Haosana biasanya dipanggil Jocee. I’m part of Bid Eight, and yeah… we ateee👌🏻Selain Osis, aku juga terlibat aktif dalam berbagai kepanitiaan di smukiee. Aku sukaaa banget nonton moviess (esp fantasy💭) andd fun fact, publication📱has also become one of my biggest interest. Soo kalo kalian mau nanya nanya 👀 seputar publii atau rec any kind of movies 🎞️ feel free to reach me out on my insta @jocelynnn.h. Lastlyy, wishing 🫵🏻 a great experience at smukiee‼️' />}

        Description={true}
        DescBid="Selamat datang di Bidang 8 yaitu Bidang Pembinaan Sastra dan Budaya. Bidang ini bertanggung jawab mengenai kegiatan non-akademik di bidang kesenian, sastra, dan budaya. Bidang 8 juga mendukung siswa-siswi SMAK 1 dalam menyalurkan talenta kesenian pada acara STN ( Smukiez Theatre Night), kemampuan memproduksi short movie pada SMURF, dan bidang jurnalistik pada program PENS1L. Selain itu, bidang 8 juga memantau dan mempersiapkan regenerasi club-club di SMAK 1 serta masih banyak program bidang 8 yang menarik seperti Birthday Calendar, CNYxVals, dan RESONANSI."
        Program={true}
        ProgramList={
          [
            //UPDATE 2024
            'Birthday Calendar - penyampaikan pengumuman ulang tahun bagi setiap warga SMAK 1 secara rutin melalui saluran radio sekolah.',
            'REVER1E - publikasi konten yang merangkup segala macam informasi yang disalurkan melalui beberapa hasil karya siswa dalam bentuk post di media sosial.',
            'CNYxVALS - perayaan harmoni budaya antara hari raya tahun baru Imlek dan Hari Kasih Sayang dengan menghadirkan acara yang menarik dengan nuansa imlek sekaligus romantis Valentines',
            'Smukiez Art Performance (SAP) - Menyelenggarakan pertunjukan seni yang mendalam dan beragam, mengapresiasi seni teater, vokal, musik, tari, dan lukis, membawa penonton dalam perjalanan artistik yang menggugah perasaan, serta memberikan penghormatan terhadap keindahan dan ekspresi kreatif dalam segala bentuk seni.',
            'Lagu Daerah - Pemutaran lagu daerah menggunakan radio SMAK 1 dengan tujuan membantu siswa-siswi dalam mengenali lagu daerah Indonesia',
            'Sen1man - Workshop seni untuk memberikan inspirasi baru bagi anggota clubs seni melalui pengalaman dan pelatihan yang dibagikan oleh pelatih luar sesuai keahlian bidangnya masing-masing.',
            "Kalaswara - Kegiatan kunjungan  edukatif ke museum di Indonesia sebagai salah satu sarana pembelajaran seni bagi para siswa agar mereka tidak hanya dapat mempelajari seni namun juga menikmatinya."
          ]
        }
        dir="/OSIS/bidang9"
      />
    </div>
  )
}

export default OSIS_8