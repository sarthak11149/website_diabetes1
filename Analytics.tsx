import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { format } from 'date-fns'

interface GlucoseEntry {
  level: number
  timestamp: string
}

interface AnalyticsProps {
  entries: GlucoseEntry[]
}

export default function Analytics({ entries }: AnalyticsProps) {
  const getAverageLevel = () => {
    return (entries.reduce((acc, entry) => acc + entry.level, 0) / entries.length).toFixed(1)
  }

  const getLatestTrend = () => {
    if (entries.length < 2) return 'Not enough data'
    const latest = entries[entries.length - 1].level
    const previous = entries[entries.length - 2].level
    const diff = ((latest - previous) / previous * 100).toFixed(1)
    return diff > 0 ? `+${diff}%` : `${diff}%`
  }

  const chartData = entries.map(entry => ({
    timestamp: format(new Date(entry.timestamp), 'MMM d, HH:mm'),
    level: entry.level
  }))

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="border-none shadow-lg bg-gradient-to-br from-[#87CEEB]/20 to-[#87CEEB]/10">
        <CardHeader>
          <CardTitle className="text-[#2C3E50]">Key Metrics</CardTitle>
          <CardDescription className="text-[#607D8B]">Overview of your glucose levels</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#607D8B]">Average Level</p>
            <p className="text-3xl font-bold text-[#2C3E50]">{getAverageLevel()} <span className="text-lg">mg/dL</span></p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#607D8B]">Latest Trend</p>
            <p className="text-3xl font-bold text-[#2C3E50]">{getLatestTrend()}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg bg-gradient-to-br from-[#87CEEB]/20 to-[#87CEEB]/10">
        <CardHeader>
          <CardTitle className="text-[#2C3E50]">Glucose Level Trend</CardTitle>
          <CardDescription className="text-[#607D8B]">Your glucose levels over time</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E8" />
              <XAxis 
                dataKey="timestamp" 
                stroke="#607D8B"
                angle={-45}
                textAnchor="end"
                height={70}
                tick={{fontSize: 12}}
              />
              <YAxis stroke="#607D8B" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(135, 206, 235, 0.2)',
                  borderRadius: '6px',
                  boxShadow: '0 2px 4px rgba(135, 206, 235, 0.1)'
                }}
              />
              <Line type="monotone" dataKey="level" stroke="#87CEEB" strokeWidth={2} dot={{ fill: '#87CEEB' }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

