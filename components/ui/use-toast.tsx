import { useState, useEffect } from 'react'

type ToastProps = {
  title: string
  description?: string
  duration?: number
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const [toast, setToast] = useState<ToastProps | null>(null)

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, toast.duration || 3000)

      return () => clearTimeout(timer)
    }
  }, [toast])

  const showToast = (props: ToastProps) => {
    setToast(props)
  }

  return { toast, showToast }
}

export function Toast({ title, description, variant = 'default' }: ToastProps) {
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-lg ${
      variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-white text-gray-900'
    }`}>
      <h3 className="font-bold">{title}</h3>
      {description && <p className="mt-1 text-sm">{description}</p>}
    </div>
  )
}


