import React from "react";

// Import Component
import BidangSection from "../../../Component/Osis/BidangSection";
import OsisTeam from "../../../Component/Osis/OsisTeam";

// Import Image
import Joanne from "../../../Image/Osis/Bidang_9/Joanne.jpg"
import Richelle from "../../../Image/Osis/Bidang_9/Richelle.jpg"
import Diego from "../../../Image/Osis/Bidang_9/Die.jpg"
import Fernysia from "../../../Image/Osis/Bidang_9/Fernysia.jpg"
import Shenny from "../../../Image/Osis/Bidang_9/Shenny.jpg"

const OSIS_9 = () => {
  return (
    <div>
      <OsisTeam
        bidang="Bidang 9"
        desc="Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)"


        person1={
          <BidangSection
            img={Joanne}
            alt="Joanne"
            name="Joanne Gisella Yusmita"
            desc="Koneksi kentang, tapi acara harus tetap jalan.. Kenalin aku Gisel, koorbid dari bidang sembilann 🙌🏻 funfactt, aku suka aktif dalam organisasi n clubs di smukie seperti Monograph, Shutterone, CodeOne (yang bantu bikin this website ur seeing rn hihi) and kegiatan kepanitiaan lainnya 👾 My passion are in coding, color grading, graphic design and many more 🦆 Dont worry, smukie lengkap banget kok untuk kembangin hobby ato skill kalian (●’∇’)♪ Semangat berjuang di smukie ol, kalo mau mutualan/temenan/anythingg bisa ke ig akuu @gisellayusmita 👈🏻 Acara mulus bukan karena satu orang.. tapi satu tim, jadii check out anak mulmed lainnya ya! 🙌 janlupaa pantau kita-kita di balik layar, biar acara nggak bubar 💥"
          />
        }
        person2={
          <BidangSection
            img={Shenny}
            alt="Shenny"
            name="Shenny Pannya Lowis"
            desc='Laptop nge-lag, lampu padam, tapi MC udah berdiri di depan....Kenalin aku Shenny, anggota dari bidang sembilann yey ☺️ Hobi aku simple : menonton film dan dengerin musik. Tetapi kl  di smukiee, aku suka banget aktif dalam organisasi n clubs, seperti MASK, Shutterone, ONEFM, dll. Jujur aja smukiee ada banyak banget club n ekskur yang kalian bisa ikuti dan kembangin skill terpendam kalian lho..jadi ayolah gas ikutt club-club di smukie hehe siapa tau kita bisa kerja barengg!! 😎🔥 If you need anything (mau ngobrol/mutualan/kenalan/dll) bisa dm akuu di @shennylowis yaa 💁🏻 Kunci sukses acara itu dari tim yang SOLID, jadi jan lupaa check out mulmed-erz lainnyaa yaa!! 🙌🏻 anyways goodluck n have fun in SMUKIE semua, 加油‼️'
          />
        }
        person3={
          <BidangSection
            img={Richelle}
            alt="Richelle"
            name="Richelle Liu"
            desc="Slide belum di share, tapi MC udah nungguin… haiii all!!👋🏻 Kenalin aku Richelle dari bidang 9️⃣, kalian bisa panggil aku ricell / richelle 😆. Hobi aku yaa nonton, baking👩‍🍳, scroll tiktok. Kalau mau mutualan atauu kenalan bolee bgtt dm akuu di @ricell.liu"
          />
        }
        person4={
          <BidangSection
            img={Fernysia}
            alt="Fernysia"
            name="Fernysia Edbert Samsie"
            desc="Sistem error, jaringan bermasalah, tapi koordinasi tim tetap jalan… haii semuanyaa👋!! kenalin aku Fernysia dari bidang sembilan 9️⃣!! Aku dari kelas 10-✌️dan kalian bisa panggil aku ferny. Aku suka banget dengerin lagu 🎧 apalagi lagunya LANY 🎶 and suka nonton film/series juga 🎬, jadi kalau ada any recommendation atau mau ngobrol ngobrol 💌, feel free to dm me on ig @fernysia 🙌!! goodluckk n have fun di smukiee 🫵‼️"
          />
        }
        person5={
          <BidangSection
            img={Diego}
            alt="Diego"
            name="Diego Leander Wilbert"
            desc="Sinyal ngadat, LED black out, tapi pembicara udah di depan. Hai semuanya 👋 nama aku Diego Leander Wilbert, salah satu anggota bidang sembilan, saat ini aku merupakan warga kelas X-4. Kalian bisa panggil aku Di, Go or Die, atau go die juga gapapa angangang🤣🤣 you can call me anything you want! Selain di OSIS, aku juga suka ikut kegiataan kepanitian di sekolah maupun di gereja. Kalo ada waktu luang biasanya aku main voli 🏐, main mobile legend 🎮, and nonton film . Kalau mau nanya apa-apa atau kenalan langsung dm aja ke @diegooo.lw. Have fun jadi warga smukie semuanya 🤩🎇"

          />
        }

        Description={true}
        DescBid="Bidang 9, Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK) adalah bidang yang bertanggung jawab mengenai pemanfaatan TIK untuk melancarkan kegiatan-kegiatan ataupun acara di sekolah, seperti menjadi tim multimedia saat ada seminar. Selain itu, bidang 9 menggunakan TIK sebagai sumber informasi bagi para siswa agar dapat mengenal OSIS SMAK 1 lebih dalam lagi. Bidang 9 juga peduli akan talenta siswa-siswi SMAK 1. Salah satu bentuk kepeduliannya adalah dengan mewadahi siswa-siswi yang ingin mengembangkan talentanya di bidang desain dan perfilman dengan Monograph dan Shutterone."
        Program={true}
        ProgramList={
          [
            //PENDING
            'Website: Situs resmi OSIS SMAK 1 PENABUR Jakarta dimana terdapat informasi mengenai OSIS SMAK 1 dan acara-acara OSIS yang sudah maupun akan diadakan',
            'E-Magazine - Majalah elektronik resmi OSIS SMAK 1 PENABUR Jakarta yang bertujuan untuk menambah wawasan siswa-siswi SMAK1. Ditulis langsung oleh OneJournal dan dapat diakses di website ini',
            'SMAK One Social Network: Sosial media (Instagram, Line, dan Youtube) resmi OSIS SMAK 1 PENABUR Jakarta yang memberikan konten mengenai program OSIS dan tempat untuk lebih berinteraktif antara OSIS dengan warga SMAK 1',
            'Shutterone - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam video editing dan mendokumentasi foto maupun video dari sebuah acara',
            'Monograph - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam membuat desain yang akan digunakan untuk acara',
            'CodeOne - Sebuah komunitas coder naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam Web-Development dan bertugas membantu keperluan programming OSIS SMAK 1',
            'KRIZA e-Sports - Tim e-Sports SMAK 1 dalam Mobile Legends dan Valorant, yang telah ikut serta dalam berbagai lomba dan memenangkan banyak prestasi',
            'One Journal - Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam menulis dan memproduksi majalah digital (Emagazine) untuk diunggah di Website Smakone.org',
          ]
        }
        dir="/OSIS/bidang10"
      />
    </div>
  );
};

export default OSIS_9;
