import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white py-20 border-b border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                2025年義務化に向けた<br className="hidden sm:inline" />
                <span className="text-blue-600">IR資料の専門的英語翻訳</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                東証プライム市場上場企業の皆様に、決算短信、適時開示情報を日本語と同時に英語で開示するための、高品質かつ効率的な専門翻訳サービスをご提供いたします。
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">無料相談を予約する</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              2025年4月義務化対応 専門翻訳サービス
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">決算短信・四半期決算短信翻訳</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    財務データと事業概況を正確かつ効率的に翻訳。日本語開示と同時に高品質な英語版をご提供いたします。
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">決算補足説明資料翻訳</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    決算説明会資料等、詳細な財務情報を迅速かつ正確に翻訳。グラフや表の英語化にも対応いたします。
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">適時開示情報翻訳</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    TDnetを通じて開示するすべての会社情報を、正確かつ迅速に英語化。タイムリーな情報発信をサポートいたします。
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              当社の強み
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">効率的な翻訳プロセス</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    日本語開示と同時に英語版を提供。最短2時間での納品など、お客様のニーズに柔軟に対応いたします。
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">専門性</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    財務・IR専門の翻訳者が、正確かつ洗練された翻訳をご提供いたします。
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">品質管理</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    複数の専門家による厳格なチェック体制で、高品質を保証いたします。
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">セキュリティ</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    厳重な情報管理体制で、お客様の機密情報を確実に保護いたします。
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Translator Profile */}
<section className="bg-white py-16 border-t border-gray-200">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
      翻訳責任者プロフィール
    </h2>
    <Card className="bg-gray-50 border-gray-200 max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          <div className="w-48 h-48 relative">
            <Image
              src="/kai-irwin.jpg"
              alt="アーウィン海"
              width={192}
              height={192}
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold mb-4 lg:mb-0">アーウィン海 / Kai Irwin</CardTitle>
            <CardDescription>IR翻訳総合研究所 代表</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
  <div className="mt-14">
    <p className="text-sm text-gray-600">
      慶應義塾大学商学部で会計学を専攻。外資系コンサルティングファームで上場企業のプロジェクトに従事後、IR翻訳総合研究所を設立。英国と日本で現地教育を受け、バイリンガルである。
    </p>
    <Button asChild className="mt-4 w-full">
      <Link href="/translators">翻訳者一覧を見る</Link>
    </Button>
  </div>
</CardContent>

    </Card>
  </div>
</section>


        {/* Contact Section */}
        <section className="bg-blue-50 py-16 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                お問い合わせ
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                2025年の英文開示義務化に向けた準備や、IR資料の英語翻訳についてのご相談は、こちらからお気軽にお問い合わせください。
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">お問い合わせフォームへ</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">IR翻訳総合研究所</h3>
              <p className="text-sm text-gray-300">
                2025年英文開示義務化に対応した、高品質かつ効率的なIR資料英語翻訳サービスを提供し、日本企業のグローバルなコミュニケーションをサポートいたします。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-sm text-gray-300 hover:text-white">サービス</Link></li>
                <li><Link href="/translators" className="text-sm text-gray-300 hover:text-white">翻訳者</Link></li>
                <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">会社概要</Link></li>
                <li><Link href="/contact" className="text-sm text-gray-300 hover:text-white">お問い合わせ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <p className="text-sm text-gray-300">
                〒153-0063<br />
                東京都目黒区目黒4-11-10<br />
                TEL: (代表)090-2889-4343<br />
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-300">&copy; 2024 IR Translation Research Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

