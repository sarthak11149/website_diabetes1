import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity } from 'lucide-react'

interface GlucoseFormProps {
  onSubmit: (level: number) => void
}

export default function GlucoseForm({ onSubmit }: GlucoseFormProps) {
  const [level, setLevel] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const glucoseLevel = parseFloat(level)
    if (!isNaN(glucoseLevel) && glucoseLevel > 0 && glucoseLevel <= 1000) {
      onSubmit(glucoseLevel)
      setLevel('')
    } else {
      alert('Please enter a valid glucose level between 1 and 1000 mg/dL')
    }
  }

  return (
    <Card className="backdrop-blur-md bg-white/80 shadow-lg border-t-2 border-t-[#87CEEB]/50">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="p-2.5 rounded-full bg-[#87CEEB]/10 ring-2 ring-[#87CEEB]/20">
            <Activity className="w-6 h-6 text-[#87CEEB]" />
          </div>
          <div>
            <CardTitle className="text-[#2C3E50]">Record Glucose Level</CardTitle>
            <CardDescription className="text-[#607D8B]">Enter your current blood glucose measurement</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="glucose-level" className="text-[#2C3E50] font-medium">
              Blood Glucose Level (mg/dL)
            </Label>
            <Input
              id="glucose-level"
              type="number"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Enter your blood glucose level"
              className="text-lg border-[#87CEEB]/20 focus:border-[#87CEEB] focus:ring-[#87CEEB]/20"
              required
              min="1"
              max="1000"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-[#87CEEB] hover:bg-[#87CEEB]/90 text-white font-medium rounded-full"
          >
            Record Measurement
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

