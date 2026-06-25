import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Kullanım Şartları | KamKam",
  description: "KamKam uygulaması kullanım şartları ve koşulları.",
};

const sections = [
  {
    title: "Taraflar ve Amaç",
    content:
      "KamKam Teknoloji A.Ş. ile platforma kayıt olan kullanıcılar arasındaki bu sözleşme; puan kazanma, ayrıcalıklar ve kampanya takibini içeren sadakat ve keşif platformunun kullanım koşullarını düzenler.",
  },
  {
    title: "Hesap Gereksinimleri",
    content: [
      "Kullanıcıların 13 yaşından büyük olması gerekmektedir (18 yaş altı için ebeveyn onayı zorunludur)",
      "Doğru ve güncel bilgi sağlanması zorunludur",
      "Her kullanıcı yalnızca bir hesap oluşturabilir",
      "Hesap güvenliğinden kullanıcı sorumludur",
    ],
  },
  {
    title: "Puan Sistemi",
    content: [
      "Puanlar, ortak işletmelerde QR kod okutularak kazanılır",
      "Puanlar yalnızca KamKam üzerinden katılımcı işletmelerde kullanılabilir",
      "Nakit'e çevrilemez ve devredilemez",
      "12 ay işlem yapılmayan hesaplardaki puanlar silinebilir",
    ],
  },
  {
    title: "Kullanıcı Yükümlülükleri",
    content: [
      "Sahte QR kod kullanmak ve sistemi manipüle etmek yasaktır",
      "Başkalarının hesabına erişmek yasaktır",
      "Bot ve otomatik araç kullanımı yasaktır",
      "Zararlı yazılım yayma ve izinsiz veri toplama yasaktır",
    ],
  },
  {
    title: "Fikri Mülkiyet",
    content:
      "KamKam'ın tüm marka unsurları ve yazılımları Türk telif hukuku kapsamında korunmaktadır. Kullanıcılara yalnızca kişisel kullanım amacıyla sınırlı lisans tanınır.",
  },
  {
    title: "Sorumluluk Sınırlaması",
    content: [
      "Ortak işletme kaynaklı sorunlardan KamKam sorumlu değildir",
      "Kullanıcı hatalarından doğan zararlardan KamKam sorumlu değildir",
      "Üçüncü taraf hizmet kesintilerinden KamKam sorumlu değildir",
      "Kontrol dışı teknik arızalardan KamKam sorumlu değildir",
    ],
  },
  {
    title: "Değişiklikler",
    content:
      "Şartlarda yapılacak değişiklikler 15 gün önceden duyurulur. Hizmetin kullanılmaya devam edilmesi, yeni şartların kabul edildiği anlamına gelir.",
  },
  {
    title: "Yetki ve Uygulanacak Hukuk",
    content:
      "Türk hukuku geçerlidir. Uyuşmazlıklarda İstanbul Mahkemeleri yetkilidir. Destek: destech@kamkamapp.com",
  },
];

export default function KullanimSartlariPage() {
  return (
    <LegalPage
      title="Kullanım Şartları"
      subtitle="KamKam platformunu kullanırken geçerli olan hüküm ve koşullar."
      lastUpdated="20 Haziran 2026"
      sections={sections}
    />
  );
}
