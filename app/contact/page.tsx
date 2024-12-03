"use client"

import { useState } from 'react'
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast, Toast } from "@/components/ui/use-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    type: 'contact',
    name: '',
    email: '',
    phone: '',
    company: '',
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
          title: "お問い合わせを受け付けました",
          description: "担当者より速やかにご連絡いたします。",
        });
        // Reset the form fields
        setFormData({ type: 'contact', name: '', email: '', phone: '', company: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error("Failed to send contact form:", errorData);
  
        showToast({
          title: "送信に失敗しました",
          description: `後ほど再度お試しください。エラー: ${errorData.message || '不明なエラー'}`,
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
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
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">お問い合わせ</h1>
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">お問い合わせ内容 <span className="text-red-500">*</span></label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="mt-1" />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "送信中..." : "送信"}
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
