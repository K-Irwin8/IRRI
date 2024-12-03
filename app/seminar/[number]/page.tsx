"use client"

import { useState } from 'react'
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast, Toast } from "@/components/ui/use-toast"
import Image from 'next/image'

export default function Seminar({ params }: { params: { number: string } }) {
  const [formData, setFormData] = useState({
    type: 'seminar',
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); // Add the loading state
  const { toast, showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Optional: Set loading state to indicate processing
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send the form data including the 'type' field
      });
  
      if (response.ok) {
        showToast({
          title: "お申し込みを受け付けました",
          description: "詳細情報を近日中にお送りいたします。",
        });
        // Reset the form fields
        setFormData({ type: 'seminar', name: '', email: '', company: '', position: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error("Failed to send seminar form:", errorData);
  
        showToast({
          title: "送信に失敗しました",
          description: `後ほど再度お試しください。エラー: ${errorData.message || '不明なエラー'}`,
        });
      }
    } catch (error) {
      console.error("Error submitting seminar form:", error);
      showToast({
        title: "エラーが発生しました",
        description: "後ほど再度お試しください。",
      });
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">IR英文開示セミナー</h1>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="relative h-96 w-full">
            <Image
              src="/seminar1.png"
              alt="IR英文開示"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">IR英文開示に関する洞察に満ちたセッションにご参加ください。</p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">日付</dt>
                <dd className="mt-1 text-sm text-gray-900">2024年12月11日</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">時間</dt>
                <dd className="mt-1 text-sm text-gray-900">15:00 - 15:30 JST</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">場所</dt>
                <dd className="mt-1 text-sm text-gray-900">オンライン（Zoom）</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">参加費</dt>
                <dd className="mt-1 text-sm text-gray-900">無料</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">セミナー内容</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  このセミナーでは、IR活動における英文開示の重要性、財務報告書の翻訳のベストプラクティス、
                  国際投資家とのコミュニケーション戦略について解説します。専門家が2025年の英文開示義務化に
                  向けた準備方法や、効果的な対策についての洞察を共有します。
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">お申し込みフォーム</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前<span className="text-red-500">*</span></label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス<span className="text-red-500">*</span></label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">会社名<span className="text-red-500">*</span></label>
            <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">役職<span className="text-red-500">*</span></label>
            <Input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ（任意）</label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1" />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "送信中..." : "セミナーに申し込む"}
          </Button>

        </form>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 IR Translation Research Institute. All rights reserved.</p>
        </div>
      </footer>
      {toast && <Toast {...toast} />}
    </div>
  )
}
