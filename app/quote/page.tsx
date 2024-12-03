"use client"

import { useState } from 'react'
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast, Toast } from "@/components/ui/use-toast"

export default function Quote() {
  const [formData, setFormData] = useState({
    type: 'quote',
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    documentType: '',
    pageCount: '',
    deadline: '',
    additionalInfo: ''
  });
  const [loading, setLoading] = useState(false); // Add the loading state
  const { toast, showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData({ ...formData, [name]: value });
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
          title: "見積もり依頼を受け付けました",
          description: "担当者より速やかにご連絡いたします。",
        });
        // Reset the form fields
        setFormData({ type: 'quote', name: '', email: '', phone: '', company: '', service: '', documentType: '', pageCount: '', deadline: '', additionalInfo: '' });
      } else {
        const errorData = await response.json();
        console.error("Failed to send quote request:", errorData);
  
        showToast({
          title: "送信に失敗しました",
          description: `後ほど再度お試しください。エラー: ${errorData.message || '不明なエラー'}`,
        });
      }
    } catch (error) {
      console.error("Error submitting quote form:", error);
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
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">見積もり依頼</h1>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前 <span className="text-red-500">*</span></label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス <span className="text-red-500">*</span></label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号 <span className="text-red-500">*</span></label>
            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">会社名 <span className="text-red-500">*</span></label>
            <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className="mt-1" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">ご希望のサービス <span className="text-red-500">*</span></label>
            <Select onValueChange={handleSelectChange('service')} value={formData.service}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="サービスを選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="決算短信翻訳">決算短信翻訳</SelectItem>
                <SelectItem value="決算補足説明資料翻訳">決算補足説明資料翻訳</SelectItem>
                <SelectItem value="適時開示情報翻訳">適時開示情報翻訳</SelectItem>
                <SelectItem value="その他">その他</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">資料の種類</label>
            <Input type="text" id="documentType" name="documentType" value={formData.documentType} onChange={handleChange} className="mt-1" />
          </div>
          <div>
            <label htmlFor="pageCount" className="block text-sm font-medium text-gray-700">ページ数</label>
            <Input type="number" id="pageCount" name="pageCount" value={formData.pageCount} onChange={handleChange} className="mt-1" />
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">希望納期</label>
            <Input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="mt-1" />
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">追加情報</label>
            <Textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="mt-1" />
          </div>
          <Button type="submit" className="w-full">見積もり依頼を送信</Button>
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
