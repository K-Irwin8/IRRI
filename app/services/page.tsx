import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">サービス一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>決算短信・四半期決算短信翻訳</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                財務データと事業概況を正確かつ効率的に翻訳いたします。日本語開示と同時に高品質な英語版をご提供し、グローバル投資家とのコミュニケーションを円滑に進めます。
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>決算補足説明資料翻訳</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                決算説明会資料等、詳細な財務情報を迅速かつ正確に翻訳いたします。グラフや表の英語化にも対応し、海外投資家向けの分かりやすい資料作成をサポートいたします。
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>適時開示情報翻訳</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                TDnetを通じて開示するすべての会社情報を、正確かつ迅速に英語化いたします。重要な企業情報を遅滞なくグローバルに発信し、海外投資家との信頼関係構築をサポートいたします。
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>統合報告書・アニュアルレポート翻訳</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                財務情報と非財務情報を統合した報告書の翻訳を行います。ESG要素を含む企業の長期的価値創造ストーリーを、海外投資家に適切に伝えるサポートをいたします。
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 IR Translation Research Institute. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
