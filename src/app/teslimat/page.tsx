import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Teslimat ve İade | KamKam",
  description: "KamKam abonelik hizmetine ilişkin teslimat ve iade koşulları.",
};

const sections = [
  {
    title: "Hizmet Niteliği",
    content:
      "KamKam tamamen dijital bir abonelik hizmetidir. Fiziksel ürün teslimatı yapılmamaktadır.",
  },
  {
    title: "Teslimat",
    content: [
      "Ödeme onayından sonra abonelik anında aktive edilir",
      "Erişim, kayıt e-posta adresi üzerinden sağlanır",
      "Fiziksel kargo veya kurulum yoktur",
      "Aktivasyon en geç 15 dakika içinde tamamlanır",
    ],
  },
  {
    title: "İade Koşulları",
    content: [
      "Satın almadan itibaren 5 gün içinde gerekçe belirtmeksizin iade talep edilebilir",
      "İade talebi için destek@kamkamapp.com adresine 'İade Talebi' konusuyla e-posta gönderin",
      "Talep 3 iş günü içinde incelenir",
      "Onaylanan iade 14 iş günü içinde orijinal ödeme yöntemiyle aktarılır",
    ],
  },
  {
    title: "İade Dışı Durumlar",
    content: [
      "5 günü aşan talepler",
      "Kullanım Koşulları ihlaline bağlı askıya alınan hesaplar",
      "Kullanıcı hatası kaynaklı sorunlar",
      "Üçüncü taraf hizmet kesintileri",
    ],
  },
  {
    title: "Abonelik İptali",
    content:
      "Sonraki fatura döneminden 30 gün önce iptal talebinde bulunulabilir. İptal sonrası dönem sonuna kadar hizmet erişimi devam eder.",
  },
  {
    title: "Yasal Dayanak",
    content:
      "Bu belgeler 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında hazırlanmıştır.",
  },
  {
    title: "İletişim",
    content:
      "KamKam Teknoloji ve Ticaret Anonim Şirketi — Vergi No: 4941386511 — destek@kamkamapp.com",
  },
];

export default function TeslimatPage() {
  return (
    <LegalPage
      title="Teslimat ve İade"
      subtitle="Dijital abonelik hizmetimize ilişkin teslimat ve iade koşulları."
      lastUpdated="15 Haziran 2026"
      sections={sections}
    />
  );
}
