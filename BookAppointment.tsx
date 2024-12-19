import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from 'lucide-react'

export default function BookAppointment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('Appointment booked:', { name, email, date })
    alert('Your appointment has been booked. We will contact you shortly.')
  }

  return (
    <Card className="border-none shadow-lg bg-gradient-to-br from-[#87CEEB]/20 to-[#87CEEB]/10">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="p-2.5 rounded-full bg-[#87CEEB]/10 ring-2 ring-[#87CEEB]/20">
            <Calendar className="w-6 h-6 text-[#87CEEB]" />
          </div>
          <div>
            <CardTitle className="text-[#2C3E50]">Book a One-on-One Session</CardTitle>
            <CardDescription className="text-[#607D8B]">Get a personalized diet plan from our doctors</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#2C3E50] font-medium">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-[#87CEEB]/20 focus:border-[#87CEEB] focus:ring-[#87CEEB]/20"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2C3E50] font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-[#87CEEB]/20 focus:border-[#87CEEB] focus:ring-[#87CEEB]/20"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date" className="text-[#2C3E50] font-medium">Preferred Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border-[#87CEEB]/20 focus:border-[#87CEEB] focus:ring-[#87CEEB]/20"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#87CEEB] hover:bg-[#87CEEB]/90 text-white font-medium rounded-full"
          >
            Book Appointment
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

