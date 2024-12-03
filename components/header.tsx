import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">IR翻訳総合研究所</span>
              <Image
                src="/logo5.png" // Path to your logo in the public directory
                alt="IR Translation research institute Logo"
                width={210} // Width of the image
                height={60} // Height of the image
                priority
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/services" className="text-base font-medium text-gray-500 hover:text-gray-900">
              サービス
            </Link>
            <Link href="/translators" className="text-base font-medium text-gray-500 hover:text-gray-900">
              翻訳者
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
              会社概要
            </Link>
            <Link href="/seminar/103" className="text-base font-medium text-gray-500 hover:text-gray-900">
              セミナー
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button asChild variant="outline" className="mr-4">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
            <Button asChild>
              <Link href="/quote">見積もり依頼</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
