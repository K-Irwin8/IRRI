import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const translators = [
  {
    name: "アーウィン海 / Kai Irwin",
    title: "IR翻訳総合研究所 代表",
    image: "/kai-irwin.jpg",
    bio: "慶應義塾大学商学部で会計学を専攻。外資系コンサルティングファームで上場企業のプロジェクトに従事後、IR翻訳総合研究所を設立。英国と日本で現地教育を受け、バイリンガルである。",
    specialties: ["金融分野日英翻訳","財務会計", "企業財務"],
    qualifications: [
      "英検1級"
    ],
    experience: [
      "東証プライム市場上場企業の決算短信（80社以上）",
      "大手製造業の統合報告書（10社以上）",
      "金融機関の適時開示情報（30件以上）",
      "IT企業のIR説明会資料（四半期ごと20社以上）",
      "決算説明会動画翻訳 (四半期ごと20社以上)"
    ],
    publications: [
    ]
  }
  // Add more translators here if needed
]

export default function Translators() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">翻訳責任者プロフィール</h1>
        <div className="grid grid-cols-1 gap-8">
          {translators.map((translator, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-48 h-48 relative">
                    <Image
                      src={translator.image}
                      alt={translator.name}
                      width={192}
                      height={192}
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-semibold">{translator.name}</CardTitle>
                    <CardDescription className="text-lg">{translator.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 mt-16">{translator.bio}</p>
                  <div>
                    <h3 className="text-lg font-semibold">専門分野</h3>
                    <ul className="list-disc list-inside">
                      {translator.specialties.map((specialty, idx) => (
                        <li key={idx}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">資格</h3>
                    <ul className="list-disc list-inside">
                      {translator.qualifications.map((qualification, idx) => (
                        <li key={idx}>{qualification}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">翻訳実績</h3>
                    <ul className="list-disc list-inside">
                      {translator.experience.map((exp, idx) => (
                        <li key={idx}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">著書・講演</h3>
                    <ul className="list-disc list-inside">
                      {translator.publications.map((pub, idx) => (
                        <li key={idx}>{pub}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 IR Translation Research Institute. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

