export interface SubstanceInfo {
  id: string;
  name: string;
  scientificName: string;
  category: 'psychedelic' | 'biotech' | 'nootropic';
  mechanism: string;
  effects: string[];
  medicalUse: string;
  risks: string;
  culturalContext: string;
}

export const substanceData: SubstanceInfo[] = [
  {
    id: 'lsd',
    name: 'LSD',
    scientificName: 'Lysergic acid diethylamide',
    category: 'psychedelic',
    mechanism: 'Agonist at serotonin 5-HT2A receptors, promoting neuroplasticity and altered perception through increased neural connectivity and reduced default mode network activity.',
    effects: ['Enhanced creativity', 'Ego dissolution', 'Visual hallucinations', 'Altered time perception', 'Increased empathy', 'Novel insights'],
    medicalUse: 'Research for treatment-resistant depression, PTSD, anxiety, and addiction. Shows promise in enhancing psychotherapy effectiveness and promoting long-term psychological benefits.',
    risks: 'Potential for psychological distress, anxiety, paranoia. Risk of accidents during intoxication. Possible triggering of latent mental health conditions. No physical addiction but psychological dependence possible.',
    culturalContext: 'Central to 1960s counterculture movement. Associated with tech innovation in Silicon Valley. Recent renaissance in clinical research and therapeutic applications.'
  },
  {
    id: 'psilocybin',
    name: 'Psilocybin',
    scientificName: 'Psilocybin mushrooms (Psilocybe species)',
    category: 'psychedelic',
    mechanism: 'Converts to psilocin in the body, acting as serotonin 5-HT2A receptor agonist. Promotes neurogenesis and reduces activity in the default mode network.',
    effects: ['Introspective insights', 'Emotional processing', 'Spiritual experiences', 'Enhanced problem-solving', 'Mood improvement', 'Increased openness'],
    medicalUse: 'FDA breakthrough therapy designation for depression. Clinical trials for PTSD, addiction, end-of-life anxiety. Shows rapid and sustained antidepressant effects.',
    risks: 'Similar to LSD - psychological distress, anxiety during experience. Risk of dangerous behavior. Contraindicated with certain psychiatric conditions and medications.',
    culturalContext: 'Used in traditional indigenous ceremonies for millennia. Growing acceptance in therapeutic settings. Increasing interest from tech entrepreneurs and creatives.'
  },
  {
    id: 'ketamine',
    name: 'Ketamine',
    scientificName: 'Ketamine hydrochloride',
    category: 'psychedelic',
    mechanism: 'NMDA receptor antagonist that blocks glutamate signaling, leading to rapid antidepressant effects through BDNF and mTOR pathway activation.',
    effects: ['Rapid mood improvement', 'Dissociation', 'Reduced depression', 'Pain relief', 'Introspective experiences', 'Temporary euphoria'],
    medicalUse: 'FDA-approved for treatment-resistant depression (Spravato/esketamine). Used off-label for chronic pain, PTSD, and other psychiatric conditions.',
    risks: 'Potential for abuse and tolerance. Dissociative effects can be disorienting. Bladder problems with chronic use. Respiratory depression at high doses.',
    culturalContext: 'Originally developed as anesthetic. Growing acceptance as legitimate psychiatric treatment. Increasingly used by high-performers for mental health optimization.'
  },
  {
    id: 'metformin',
    name: 'Metformin',
    scientificName: 'Metformin hydrochloride',
    category: 'biotech',
    mechanism: 'Activates AMPK pathway, improves insulin sensitivity, reduces glucose production, and may extend lifespan through cellular stress response activation.',
    effects: ['Improved glucose metabolism', 'Potential longevity benefits', 'Weight management', 'Reduced inflammation', 'Enhanced cellular repair'],
    medicalUse: 'Primary treatment for type 2 diabetes. Research into anti-aging effects, cancer prevention, and cardiovascular protection. TAME trial investigating longevity benefits.',
    risks: 'Gastrointestinal side effects, lactic acidosis (rare), vitamin B12 deficiency with long-term use. Generally well-tolerated in healthy individuals.',
    culturalContext: 'Popular in biohacking community for anti-aging potential. Used off-label by health-conscious individuals without diabetes. Growing interest in longevity research.'
  },
  {
    id: 'rapamycin',
    name: 'Rapamycin',
    scientificName: 'Sirolimus',
    category: 'biotech',
    mechanism: 'mTOR inhibitor that mimics caloric restriction effects, promoting autophagy, cellular repair, and potentially extending lifespan.',
    effects: ['Enhanced autophagy', 'Potential longevity extension', 'Improved immune function', 'Reduced cancer risk', 'Cellular regeneration'],
    medicalUse: 'FDA-approved immunosuppressant for organ transplants. Research for aging, cancer prevention, neurodegeneration, and age-related diseases.',
    risks: 'Immunosuppression increases infection risk. Potential for delayed wound healing. Metabolic effects including insulin resistance and lipid changes.',
    culturalContext: 'Discovered on Easter Island. Emerging as premier anti-aging compound in longevity research. Used by biohackers despite limited human longevity data.'
  },
  {
    id: 'nad-precursors',
    name: 'NAD+ Precursors',
    scientificName: 'Nicotinamide riboside (NR), Nicotinamide mononucleotide (NMN)',
    category: 'biotech',
    mechanism: 'Boost NAD+ levels, supporting mitochondrial function, DNA repair, and sirtuin activation. Essential for cellular energy production and longevity pathways.',
    effects: ['Increased cellular energy', 'Enhanced DNA repair', 'Improved mitochondrial function', 'Potential longevity benefits', 'Better metabolic health'],
    medicalUse: 'Research for age-related diseases, neurodegeneration, metabolic disorders. Clinical trials for Alzheimer\'s, Parkinson\'s, and cardiovascular disease.',
    risks: 'Generally well-tolerated. Mild nausea or flushing possible. Limited long-term safety data. Quality varies significantly between supplements.',
    culturalContext: 'Popular in longevity and biohacking communities. Promoted by anti-aging researchers like David Sinclair. Growing commercial market despite limited human studies.'
  },
  {
    id: 'hgh',
    name: 'Human Growth Hormone',
    scientificName: 'Somatotropin',
    category: 'biotech',
    mechanism: 'Stimulates growth, cell reproduction, and regeneration. Increases protein synthesis, promotes lipolysis, and may have anti-aging effects.',
    effects: ['Increased muscle mass', 'Reduced body fat', 'Improved skin quality', 'Enhanced recovery', 'Potential anti-aging effects'],
    medicalUse: 'Approved for growth hormone deficiency in children and adults. Used for muscle wasting conditions and short stature.',
    risks: 'Joint pain, edema, increased cancer risk, diabetes risk, carpal tunnel syndrome. Expensive and requires medical supervision.',
    culturalContext: 'Popular in anti-aging and athletic enhancement communities. Associated with Silicon Valley biohacking. Controversial due to limited evidence and significant risks.'
  },
  {
    id: 'nootropics',
    name: 'Nootropics',
    scientificName: 'Various cognitive enhancers (Modafinil, Racetams, etc.)',
    category: 'nootropic',
    mechanism: 'Varies by compound. May affect neurotransmitter systems, increase blood flow to brain, enhance neuroplasticity, or modulate attention networks.',
    effects: ['Enhanced focus', 'Improved memory', 'Increased alertness', 'Better cognitive performance', 'Reduced mental fatigue'],
    medicalUse: 'Some approved for narcolepsy, ADHD, or cognitive impairment. Others used off-label for cognitive enhancement in healthy individuals.',
    risks: 'Varies by substance. Potential for dependence, sleep disruption, anxiety, or cardiovascular effects. Limited long-term safety data for many compounds.',
    culturalContext: 'Popular in Silicon Valley and academic settings. Growing market for cognitive enhancement. Ethical debates about fairness and safety in healthy populations.'
  }
];