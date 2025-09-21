export interface Substance {
  name: string;
  category: 'psychedelic' | 'biotech' | 'nootropic';
  context: string;
  purpose?: string;
}

export interface Quote {
  text: string;
  context?: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  companies: string[];
  bio: string;
  substances: Substance[];
  quotes: Quote[];
  impact: string;
}