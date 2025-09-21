import { Leader } from "@/types/leader";

export const leaders: Leader[] = [
  {
    id: "steve-jobs",
    name: "Steve Jobs",
    role: "Co-founder & CEO",
    companies: ["Apple"],
    bio: "Visionary entrepreneur who revolutionized personal computing, mobile devices, and digital media. Known for his perfectionist approach and design philosophy that emphasized simplicity and user experience.",
    substances: [
      {
        name: "LSD",
        category: "psychedelic",
        context: "Experimented with LSD in the 1970s during his spiritual exploration phase",
        purpose: "Spiritual exploration and consciousness expansion"
      },
      {
        name: "Psilocybin",
        category: "psychedelic", 
        context: "Used psilocybin mushrooms as part of his interest in Eastern philosophy and meditation",
        purpose: "Enhanced creativity and spiritual insight"
      }
    ],
    quotes: [
      {
        text: "Taking LSD was a profound experience, one of the two or three most important things I have done in my life.",
        context: "Walter Isaacson biography, 2011"
      },
      {
        text: "It was a positive life-changing experience for me and I am glad I went through that experience.",
        context: "Interview about his psychedelic experiences"
      }
    ],
    impact: "Jobs credited psychedelic experiences with enhancing his creative vision and contributing to Apple's revolutionary design philosophy. His holistic thinking and emphasis on user experience may have been influenced by these consciousness-expanding experiences."
  },
  {
    id: "bryan-johnson",
    name: "Bryan Johnson",
    role: "Founder & CEO",
    companies: ["Kernel", "Blueprint"],
    bio: "Entrepreneur focused on brain-computer interfaces and anti-aging research. Pioneer in the quantified self movement and extreme biohacking protocols.",
    substances: [
      {
        name: "Metformin",
        category: "biotech",
        context: "Part of his comprehensive anti-aging protocol Blueprint",
        purpose: "Metabolic optimization and longevity"
      },
      {
        name: "Rapamycin",
        category: "biotech",
        context: "Included in his Blueprint longevity stack",
        purpose: "Cellular regeneration and anti-aging"
      },
      {
        name: "NAD+ Precursors",
        category: "biotech",
        context: "Regular supplementation as part of Blueprint protocol",
        purpose: "Cellular energy and DNA repair"
      }
    ],
    quotes: [
      {
        text: "I'm trying to become the most measured human in history.",
        context: "Blueprint protocol announcement"
      },
      {
        text: "My goal is to reduce my speed of aging and achieve the biological age of an 18-year-old.",
        context: "Blueprint methodology explanation"
      }
    ],
    impact: "Johnson's systematic approach to biohacking and longevity research represents the cutting edge of human optimization. His Blueprint protocol combines multiple biotech interventions with rigorous measurement and optimization."
  },
  {
    id: "peter-thiel",
    name: "Peter Thiel",
    role: "Co-founder",
    companies: ["PayPal", "Palantir"],
    bio: "Entrepreneur, venture capitalist, and author. Known for contrarian thinking and investments in breakthrough technologies including life extension research.",
    substances: [
      {
        name: "HGH (Human Growth Hormone)",
        category: "biotech",
        context: "Reportedly uses HGH as part of anti-aging regimen",
        purpose: "Anti-aging and physical optimization"
      },
      {
        name: "Young Blood Transfusions",
        category: "biotech",
        context: "Investor and reported user of parabiosis treatments",
        purpose: "Longevity research and cellular rejuvenation"
      }
    ],
    quotes: [
      {
        text: "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create.",
        context: "Zero to One book"
      },
      {
        text: "Death is a problem to be solved.",
        context: "Various interviews on life extension"
      }
    ],
    impact: "Thiel's investments in life extension and anti-aging research reflect his belief in using technology to transcend human limitations. His contrarian approach extends to exploring unconventional longevity treatments."
  },
  {
    id: "elon-musk",
    name: "Elon Musk",
    role: "CEO & Founder",
    companies: ["Tesla", "SpaceX", "Neuralink", "xAI"],
    bio: "Serial entrepreneur working on electric vehicles, space exploration, brain-computer interfaces, and artificial intelligence. Known for ambitious goals and rapid innovation cycles.",
    substances: [
      {
        name: "Ketamine",
        category: "psychedelic",
        context: "Publicly disclosed prescription ketamine use for depression",
        purpose: "Mental health treatment and mood regulation"
      },
      {
        name: "Ambien",
        category: "nootropic",
        context: "Admitted to using sleep aids due to intense work schedule",
        purpose: "Sleep optimization and recovery"
      }
    ],
    quotes: [
      {
        text: "Ketamine taken occasionally is a much better option than being depressed all the time.",
        context: "Interview about mental health treatment"
      },
      {
        text: "I'm not going to stop innovating because some people think I'm crazy.",
        context: "Response to criticism about his methods"
      }
    ],
    impact: "Musk's openness about mental health treatments and performance optimization reflects a pragmatic approach to using available tools for peak performance while managing the psychological demands of multiple ambitious ventures."
  },
  {
    id: "sergey-brin",
    name: "Sergey Brin",
    role: "Co-founder",
    companies: ["Google", "Alphabet"],
    bio: "Computer scientist and entrepreneur who co-founded Google. Pioneer in search technology and artificial intelligence research.",
    substances: [
      {
        name: "Nootropics",
        category: "nootropic",
        context: "Reportedly interested in cognitive enhancement compounds",
        purpose: "Cognitive optimization and focus"
      },
      {
        name: "Meditation Protocols",
        category: "nootropic",
        context: "Practices various forms of meditation for mental clarity",
        purpose: "Mental performance and stress management"
      }
    ],
    quotes: [
      {
        text: "We want Google to be the third half of your brain.",
        context: "Vision for Google's AI capabilities"
      },
      {
        text: "The only way you are going to have success is to have lots of failures first.",
        context: "On innovation and experimentation"
      }
    ],
    impact: "Brin's interest in cognitive enhancement aligns with Google's mission to organize and amplify human knowledge. His approach to optimization focuses on enhancing mental performance and decision-making capabilities."
  },
  {
    id: "bill-gates",
    name: "Bill Gates",
    role: "Co-founder",
    companies: ["Microsoft"],
    bio: "Software pioneer who built Microsoft into a global technology empire. Now focused on philanthropy and global health initiatives through the Gates Foundation.",
    substances: [
      {
        name: "Experimental Vaccines",
        category: "biotech",
        context: "Tests new vaccines and treatments through Gates Foundation research",
        purpose: "Global health research and disease prevention"
      },
      {
        name: "Longevity Research Compounds",
        category: "biotech",
        context: "Invests in and reportedly tests anti-aging research",
        purpose: "Life extension and healthspan optimization"
      }
    ],
    quotes: [
      {
        text: "Your most unhappy customers are your greatest source of learning.",
        context: "Business philosophy on feedback and improvement"
      },
      {
        text: "As we look ahead into the next century, leaders will be those who empower others.",
        context: "Vision for future leadership"
      }
    ],
    impact: "Gates' systematic approach to problem-solving extends to personal optimization and health research. His philanthropic work in global health has led to personal experimentation with preventive treatments and longevity research."
  },
  {
    id: "sam-altman",
    name: "Sam Altman",
    role: "CEO",
    companies: ["OpenAI"],
    bio: "CEO of OpenAI, known for his leadership in artificial intelligence and his advocacy for AI safety and alignment.",
    substances: [
      {
        name: "Psychedelics",
        category: "psychedelic",
        context: "Used during a guided retreat in Mexico, describing it as a transformative experience that helped with anxiety and mindset",
        purpose: "Personal growth and mental wellness"
      }
    ],
    quotes: [
      {
        text: "I believe that psychedelics can be a powerful tool for personal growth and innovation.",
        context: "Various interviews and discussions"
      }
    ],
    impact: "Altman's openness about his psychedelic experiences reflects a growing trend among tech leaders to explore consciousness-expanding substances for personal and professional growth. His advocacy for AI safety and alignment complements his interest in expanding human potential through various means."
  }
];
