import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

interface DietPlanProps {
  glucoseLevel: number
}

export default function DietPlan({ glucoseLevel }: DietPlanProps) {
  const getDietPlan = (level: number) => {
    if (level < 54) {
      return {
        title: 'Severe Hypoglycemia',
        description: 'Immediate medical attention required',
        recommendations: [
          'Seek immediate medical help',
          'If conscious, consume fast-acting glucose',
          'Do not attempt to drive or operate machinery',
        ],
        icon: <AlertTriangle className="w-6 h-6" />,
        color: 'from-red-500/20 to-red-500/10',
        iconColor: 'text-red-500',
      }
    } else if (level < 70) {
      return {
        title: 'Low Blood Sugar Diet Plan',
        description: 'Immediate action required to raise blood sugar levels safely',
        recommendations: [
          'breakfast: Oatmeal with a banana and honey',
          'lunch: Grilled chicken with quinoa and steamed vegetables',
          'dinner: Sweet potatoes with lentils and a small fruit',
          'snacks: Handful of nuts or a fruit smoothie',
        ],
        icon: <AlertTriangle className="w-6 h-6" />,
        color: 'from-[#F39C12]/20 to-[#F39C12]/10',
        iconColor: 'text-[#F39C12]',
      }
    } else if (level >= 70 && level <= 90) {
      return {
        title: 'Optimal Blood Sugar Diet Plan',
        description: 'Maintain your healthy blood sugar levels with these recommendations',
        recommendations: [
          'breakfast: Whole-grain toast with avocado and eggs',
          'lunch: Grilled salmon with a side of roasted vegetables',
          'dinner: Lentil soup with a side salad',
          'snacks: Greek yogurt with a drizzle of honey',
        ],
        icon: <CheckCircle className="w-6 h-6" />,
        color: 'from-[#2ECC71]/20 to-[#2ECC71]/10',
        iconColor: 'text-[#2ECC71]',
      }
    } else if (level >= 90 && level <= 110) {
      return {
        title: 'Optimal Blood Sugar Diet Plan',
        description: 'Maintain your healthy blood sugar levels with these recommendations',
        recommendations: [
          'breakfast: Scrambled eggs with whole-grain toast and spinach',
          'lunch: Grilled chicken Caesar salad (light dressing)',
          'dinner: Stir-fried tofu with brown rice and vegetables',
          'snacks: Hummus with carrot and cucumber sticks',
        ],
        icon: <CheckCircle className="w-6 h-6" />,
        color: 'from-[#2ECC71]/20 to-[#2ECC71]/10',
        iconColor: 'text-[#2ECC71]',
      }

    }else if (level >= 110 && level <= 140) {
      return {
        title: 'Optimal Blood Sugar Diet Plan',
        description: 'Maintain your healthy blood sugar levels with these recommendations',
        recommendations: [
          'breakfast: Smoothie with spinach, berries, and almond milk',
          'lunch: Quinoa bowl with roasted veggies and chickpeas',
          'dinner: Grilled turkey burger (no bun) with a side salad',
          'snacks: Apple slices with almond butter',
        ],
        icon: <CheckCircle className="w-6 h-6" />,
        color: 'from-[#2ECC71]/20 to-[#2ECC71]/10',
        iconColor: 'text-[#2ECC71]',
      }

    }
    else if (level > 140 && level <= 180) {
      return {
        title: 'High Blood Sugar Diet Plan',
        description: 'Follow these dietary guidelines to help lower your blood sugar',
        recommendations: [
          'breakfast: Steel-cut oats with walnuts and a dash of cinnamon',
          ' lunch: Grilled shrimp with a kale and quinoa salad',
          'dinner: Zucchini noodles with marinara sauce and turkey meatballs',
          'snacks: Handful of mixed nuts or a boiled egg',
          'Stay hydrated and consider sugar-free beverages',
        ],
        icon: <AlertCircle className="w-6 h-6" />,
        color: 'from-[#E74C3C]/20 to-[#E74C3C]/10',
        iconColor: 'text-[#E74C3C]',
      }
    }
    else if (level > 180 && level <= 220) {
      return {
        title: 'High Blood Sugar Diet Plan',
        description: 'Follow these dietary guidelines to help lower your blood sugar',
        recommendations: [
          'breakfast: Low-sugar green smoothie with spinach and avocado',
          ' lunch: Grilled fish with a side of leafy greens',
          'dinner: Roasted broccoli with tofu and brown rice',
          'snacks: Carrot sticks or celery with hummus',
          'Stay hydrated and consider sugar-free beverages',
        ],
        icon: <AlertCircle className="w-6 h-6" />,
        color: 'from-[#E74C3C]/20 to-[#E74C3C]/10',
        iconColor: 'text-[#E74C3C]',
      }
    } 
    else if (level > 220 && level <= 300) {
      return {
        title: 'High Blood Sugar Diet Plan',
        description: 'Follow these dietary guidelines to help lower your blood sugar',
        recommendations: [
          'breakfast: Veggie omelet with a side of sautéed spinach',
          ' lunch: Baked chicken breast with steamed broccoli',
          'dinner: Grilled salmon with asparagus and quinoa',
          'snacks: A small handful of almonds or walnuts',
          'Stay hydrated and consider sugar-free beverages',
        ],
        icon: <AlertCircle className="w-6 h-6" />,
        color: 'from-[#E74C3C]/20 to-[#E74C3C]/10',
        iconColor: 'text-[#E74C3C]',
      }
    } 
    else {
      return {
        title: 'Severe Hyperglycemia',
        description: 'Urgent medical attention may be required',
        recommendations: [
          'breakfast: Small portion of unsweetened Greek yogurt with flaxseeds',
          'lunch: Grilled turkey breast with a side of green beans',
          'dinner: Steamed fish with a side of boiled vegetables',
          'snacks: Cucumber slices or a small handful of plain almonds',
        ],
        icon: <AlertCircle className="w-6 h-6" />,
        color: 'from-purple-500/20 to-purple-500/10',
        iconColor: 'text-purple-500',
      }
    }
  }

  const plan = getDietPlan(glucoseLevel)

  return (
    <Card className={`border-none shadow-lg bg-gradient-to-br ${plan.color}`}>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className={`p-2.5 rounded-full bg-white/90 ${plan.iconColor}`}>
            {plan.icon}
          </div>
          <div>
            <CardTitle className="text-[#2C3E50]">{plan.title}</CardTitle>
            <CardDescription className="text-[#607D8B]">{plan.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Utensils className="w-5 h-5 text-[#2C3E50]" />
            <h4 className="font-semibold text-[#2C3E50]">Dietary Recommendations</h4>
          </div>
          <ul className="space-y-2 ml-6">
            {plan.recommendations.map((recommendation, index) => (
              <li key={index} className="list-disc text-[#607D8B]">
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <Alert className={`mt-4 ${glucoseLevel < 54 || glucoseLevel > 200 ? 'bg-red-100 border-red-200' : 'bg-yellow-50 border-yellow-100'}`}>
        <AlertTriangle className={`h-4 w-4 ${glucoseLevel < 54 || glucoseLevel > 200 ? 'text-red-600' : 'text-yellow-600'}`} />
        <AlertDescription className={`${glucoseLevel < 54 || glucoseLevel > 200 ? 'text-red-800 font-bold' : 'text-yellow-800'}`}>
          {glucoseLevel < 54 || glucoseLevel > 200
            ? 'URGENT: This glucose level requires immediate medical attention. This plan is for informational purposes only.'
            : 'This is a generalized diet plan based on your glucose level. If you have allergies or specific health conditions, please consult a doctor before following this diet plan.'}
        </AlertDescription>
      </Alert>
    </Card>
  )
}

