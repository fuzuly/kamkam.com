import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi | KamKam",
  description: "KamKam yazılım abonelik hizmetine ilişkin mesafeli satış sözleşmesi.",
};

const sections = [
  {
    title: "Taraflar",
    content:
      "Satıcı: KamKam Teknoloji A.Ş. (info@kamkamapp.com) — Alıcı: Platforma kayıt olan işletme sahipleri.",
  },
  {
    title: "Hizmet Kapsamı",
    content: [
      "İşletme yönetim paneline erişim",
      "QR kod tabanlı müşteri sadakat altyapısı",
      "Kampanya oluşturma ve yönetim araçları",
      "Mobil uygulamada işletme listeleme",
    ],
  },
  {
    title: "Ödeme Şartları",
    content: [
      "Ödeme abonelik başında peşin gerçekleşir",
      "Aylık abonelikte otomatik yenileme uygulanır",
      "Yıllık abonelikte 12 aylık tutar tek seferde tahsil edilir",
    ],
  },
  {
    title: "Hizmet Aktivasyonu",
    content:
      "Ödeme onayından en geç 15 dakika içinde hizmet aktif hale getirilir ve erişim bilgileri kayıtlı e-posta adresine iletilir.",
  },
  {
    title: "Cayma Hakkı",
    content:
      "Sözleşme kurulduğundan itibaren 14 gün içinde herhangi bir gerekçe olmaksızın cayma hakkı kullanılabilir. Ancak hizmetin müşteri onayıyla başlatılmış olması durumunda cayma hakkı kullanılamaz.",
  },
  {
    title: "Sözleşme Süresi ve Fesih",
    content:
      "Abonelik otomatik yenilenir. Fesih için en az 30 gün öncesinden yazılı bildirim gereklidir.",
  },
  {
    title: "Yetki ve Uygulanacak Hukuk",
    content:
      "Türk hukuku uygulanır. Uyuşmazlıklarda İstanbul Tüketici Mahkemeleri yetkilidir.",
  },
];

export default function MesafeliSatisPage() {
  return (
    <LegalPage
      title="Mesafeli Satış Sözleşmesi"
      subtitle="KamKam yazılım abonelik hizmetine ilişkin mesafeli satış koşulları."
      lastUpdated="15 Haziran 2026"
      sections={sections}
    />
  );
}
