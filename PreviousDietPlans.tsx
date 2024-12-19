import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'

interface GlucoseEntry {
  level: number
  timestamp: string
  dietPlan: {
    title: string
    recommendations: string[]
  }
}

interface PreviousDietPlansProps {
  entries: GlucoseEntry[]
}

export default function PreviousDietPlans({ entries }: PreviousDietPlansProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#2C3E50]">Previous Diet Plans</h2>
      {entries.length === 0 ? (
        <p className="text-[#607D8B]">No previous diet plans available.</p>
      ) : (
        entries.slice().reverse().map((entry, index) => (
          <Card key={index} className="border-none shadow-lg bg-gradient-to-br from-[#87CEEB]/20 to-[#87CEEB]/10">
            <CardHeader>
              <CardTitle className="text-[#2C3E50]">{entry.dietPlan.title}</CardTitle>
              <CardDescription className="text-[#607D8B]">
                Glucose Level: {entry.level} mg/dL | Date: {format(new Date(entry.timestamp), 'MMMM d, yyyy')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {entry.dietPlan.recommendations.map((recommendation, idx) => (
                  <li key={idx} className="text-[#607D8B]">{recommendation}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}

