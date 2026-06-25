import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Gizlilik Politikası | KamKam",
  description: "KamKam uygulaması gizlilik politikası ve KVKK aydınlatma metni.",
};

const sections = [
  {
    title: "Veri Sorumlusu",
    content:
      "KamKam Teknoloji A.Ş. ('KamKam'), 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında veri sorumlusudur. İletişim: info@kamkamapp.com",
  },
  {
    title: "Toplanan Kişisel Veriler",
    content: [
      "Hesap bilgileri: ad, e-posta, telefon, isteğe bağlı doğum tarihi ve profil fotoğrafı",
      "Yaklaşık konum verisi (uygulama aktifken ve izin verildiğinde)",
      "Kamera erişimi: ortak işletmelerde QR kod tarama amacıyla",
      "Kullanım analitiği: puan geçmişi, ziyaret edilen işletmeler, uygulama etkileşimleri",
      "Cihaz ve teknik bilgiler: işletim sistemi sürümü, IP adresi, çökme raporları",
      "Kampanyalar için push bildirim token'ları",
      "Üçüncü taraf giriş verileri: Google, Facebook, Apple",
    ],
  },
  {
    title: "İşleme Amaçları",
    content: [
      "Hesap oluşturma ve hizmet sunumu",
      "Konum tabanlı öneri ve kişiselleştirme",
      "Müşteri desteği",
      "Yasal yükümlülüklere uyum",
      "Hizmet iyileştirme ve analiz",
      "Pazarlama iletişimi (onay alınmak kaydıyla)",
    ],
  },
  {
    title: "Veri Paylaşımı",
    content: [
      "Ortak işletmeler: yalnızca işlem onayı için, kimlik paylaşılmaz",
      "Altyapı ve teknoloji sağlayıcıları",
      "Yasal zorunluluk halinde yetkili makamlar",
      "Birleşme veya devir durumlarında ilgili taraflar",
    ],
  },
  {
    title: "Saklama Süreleri",
    content: [
      "Hesap verisi: silme + 3 yıl",
      "İşlem geçmişi: 5 yıl",
      "Konum verisi: 90 gün",
      "Çerezler: en fazla 2 yıl",
    ],
  },
  {
    title: "Kullanıcı Hakları",
    content: [
      "Verilerinize erişim talep etme",
      "Yanlış verilerin düzeltilmesini isteme",
      "Verilerin silinmesini talep etme",
      "Türkiye Kişisel Verileri Koruma Kurumu'na (KVKK) şikayette bulunma",
    ],
  },
  {
    title: "Güvenlik",
    content:
      "Verileriniz TLS şifrelemesi, rol tabanlı erişim kontrolü ve düzenli güvenlik açığı taramaları ile korunmaktadır. Olası bir ihlal durumunda 72 saat içinde bildirim yapılır.",
  },
  {
    title: "Çocukların Gizliliği",
    content:
      "Hizmetlerimiz 13 yaşın altındaki kullanıcılara yönelik değildir ve bu yaş grubundan bilerek veri toplanmamaktadır.",
  },
];

export default function GizlilikPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      subtitle="Kişisel verilerinizi nasıl işlediğimizi ve koruduğumuzu öğrenin."
      lastUpdated="20 Haziran 2026"
      sections={sections}
    />
  );
}
