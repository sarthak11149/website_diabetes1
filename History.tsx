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

interface HistoryProps {
  entries: GlucoseEntry[]
}

export default function History({ entries }: HistoryProps) {
  const getStatusColor = (level: number) => {
    if (level < 70) return 'text-yellow-600'
    if (level > 140) return 'text-red-600'
    return 'text-green-600'
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#2C3E50]">Glucose Level History</h2>
      {entries.length === 0 ? (
        <p className="text-[#607D8B]">No entries recorded yet.</p>
      ) : (
        entries.slice().reverse().map((entry, index) => (
          <Card key={index} className="border-none shadow-lg bg-gradient-to-br from-[#87CEEB]/20 to-[#87CEEB]/10">
            <CardHeader>
              <CardTitle className={`text-2xl font-bold ${getStatusColor(entry.level)}`}>
                {entry.level} mg/dL
              </CardTitle>
              <CardDescription className="text-[#607D8B]">
                {format(new Date(entry.timestamp), 'MMMM d, yyyy h:mm a')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-[#2C3E50] mb-2">Recommended Diet Plan:</h3>
              <p className="font-medium text-[#607D8B] mb-1">{entry.dietPlan.title}</p>
              <ul className="list-disc pl-5 space-y-1">
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

