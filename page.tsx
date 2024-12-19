'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, HistoryIcon, Calendar, AlertTriangle } from 'lucide-react'
import Layout from './components/layout'
import GlucoseForm from './components/GlucoseForm'
import DietPlan from './components/DietPlan'
import History from './components/History'
import Analytics from './components/Analytics'
import PreviousDietPlans from './components/PreviousDietPlans'
import BookAppointment from './components/BookAppointment'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface GlucoseEntry {
  level: number
  timestamp: string
  dietPlan: {
    title: string
    recommendations: string[]
  }
}

export default function Home() {
  const [glucoseLevel, setGlucoseLevel] = useState<number | null>(null)
  const [history, setHistory] = useState<GlucoseEntry[]>([])
  const [showWarning, setShowWarning] = useState(false)
  const [warningMessage, setWarningMessage] = useState('')

  useEffect(() => {
    const savedHistory = localStorage.getItem('glucoseHistory')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const handleGlucoseSubmit = (level: number) => {
    setGlucoseLevel(level)
    const dietPlan = getDietPlan(level)
    const newEntry: GlucoseEntry = { 
      level, 
      timestamp: new Date().toISOString(),
      dietPlan: {
        title: dietPlan.title,
        recommendations: dietPlan.recommendations
      }
    }
    const updatedHistory = [...history, newEntry]
    setHistory(updatedHistory)
    localStorage.setItem('glucoseHistory', JSON.stringify(updatedHistory))

    if (level < 54) {
      setShowWarning(true)
      setWarningMessage('Severe Hypoglycemia: Seek immediate medical attention!')
    } else if (level > 200) {
      setShowWarning(true)
      setWarningMessage('Severe Hyperglycemia: Urgent medical attention may be required!')
    } else if (level < 70 || level > 140) {
      setShowWarning(true)
      setWarningMessage(`Your glucose level is ${level < 70 ? 'below' : 'above'} the recommended range. Please consult a doctor.`)
    } else {
      setShowWarning(false)
      setWarningMessage('')
    }
  }

  const getDietPlan = (level: number) => {
    if (level < 70) {
      return {
        title: 'Low Blood Sugar Diet Plan',
        recommendations: [
          'Consume 15-20 grams of fast-acting carbohydrates immediately',
          'Follow up with a balanced meal containing complex carbohydrates',
          'Include protein-rich foods to stabilize blood sugar',
          'Avoid sugary drinks and snacks',
        ],
      }
    } else if (level >= 70 && level <= 140) {
      return {
        title: 'Normal Blood Sugar Diet Plan',
        recommendations: [
          'Maintain a balanced diet with whole grains, lean proteins, and vegetables',
          'Include fiber-rich foods to help regulate blood sugar',
          'Limit processed foods and added sugars',
          'Stay hydrated with water and unsweetened beverages',
        ],
      }
    } else {
      return {
        title: 'High Blood Sugar Diet Plan',
        recommendations: [
          'Focus on low glycemic index foods',
          'Increase fiber intake to help lower blood sugar',
          'Limit carbohydrate intake, especially refined carbs',
          'Include more non-starchy vegetables in your meals',
          'Stay hydrated and consider sugar-free beverages',
        ],
      }
    }
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-[#2C3E50]">Glucose Management System</h1>
          <p className="text-lg text-[#607D8B]">Track, analyze, and manage your blood glucose levels effectively.</p>
        </div>

        <Tabs defaultValue="tracker" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 rounded-full bg-[#E8E8E8] p-1">
            <TabsTrigger
              value="tracker"
              className="rounded-full data-[state=active]:bg-[#87CEEB] data-[state=active]:text-white"
            >
              <Activity className="w-4 h-4 mr-2" />
              Tracker
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-full data-[state=active]:bg-[#87CEEB] data-[state=active]:text-white"
            >
              <HistoryIcon className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger
              value="previous-plans"
              className="rounded-full data-[state=active]:bg-[#87CEEB] data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Previous Plans
            </TabsTrigger>
            <TabsTrigger
              value="appointment"
              className="rounded-full data-[state=active]:bg-[#87CEEB] data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Doctor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tracker" className="mt-6 space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <GlucoseForm onSubmit={handleGlucoseSubmit} />
              {glucoseLevel !== null && <DietPlan glucoseLevel={glucoseLevel} />}
            </div>
            {showWarning && (
              <Alert variant={glucoseLevel < 54 || glucoseLevel > 200 ? "destructive" : "warning"}>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>{glucoseLevel < 54 || glucoseLevel > 200 ? 'Urgent Warning' : 'Warning'}</AlertTitle>
                <AlertDescription>
                  {warningMessage}
                </AlertDescription>
              </Alert>
            )}
            {history.length > 0 && <Analytics entries={history} />}
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <History entries={history} />
          </TabsContent>

          <TabsContent value="previous-plans" className="mt-6">
            <PreviousDietPlans entries={history} />
          </TabsContent>

          <TabsContent value="appointment" className="mt-6">
            <BookAppointment />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}

