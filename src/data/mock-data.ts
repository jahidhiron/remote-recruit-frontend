export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface PricingFeature {
  text: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string | null
  period: string | null
  features: PricingFeature[]
  ctaLabel: string
  highlighted: boolean
}

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'Do I have to sign a long-term contract?',
    answer:
      'No, there are no long-term contracts required. RemoteRecruit operates on a month-to-month subscription model, so you can cancel at any time without penalties or hidden fees.',
  },
  {
    id: '2',
    question: 'Can I pay for a whole year?',
    answer:
      'Yes! Annual billing is available and comes with a significant discount compared to monthly plans. Reach out to our team for details on annual pricing options.',
  },
  {
    id: '3',
    question: 'What if I need help?',
    answer:
      'Our support team is available Monday through Friday via live chat and email. Premium subscribers get priority support with guaranteed response times within 4 hours.',
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Basic',
    price: null,
    period: null,
    features: [
      { text: '1 Active Job' },
      { text: 'Basic List Placement' },
      { text: 'Unlimited Job Applicants' },
      { text: 'Invite Anyone to Apply to Your Jobs' },
    ],
    ctaLabel: 'Get Started',
    highlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$79.99',
    period: 'Per Month',
    features: [
      { text: 'Unlimited Job Posts' },
      { text: 'Instant Job Post Approval' },
      { text: 'Premium List Placement' },
      { text: 'Unlimited Job Applicants' },
    ],
    ctaLabel: 'Get Started',
    highlighted: true,
  },
]
