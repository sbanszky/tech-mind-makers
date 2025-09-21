import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Lightbulb } from "lucide-react";

export const AnalysisSection = () => {
  return (
    <section className="research-section">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Comparative Analysis</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="research-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <span>Openness Spectrum</span>
              </CardTitle>
              <CardDescription>
                How openly these leaders discuss their substance use
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <span className="font-medium">Very Open</span>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Steve Jobs</Badge>
                    <Badge variant="secondary">Elon Musk</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <span className="font-medium">Selectively Open</span>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Bryan Johnson</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <span className="font-medium">Private/Reported</span>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Peter Thiel</Badge>
                    <Badge variant="secondary">Sergey Brin</Badge>
                    <Badge variant="secondary">Bill Gates</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="research-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-accent" />
                <span>Primary Focus Areas</span>
              </CardTitle>
              <CardDescription>
                Main categories of substance use by leader
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-psychedelic/10 border border-psychedelic/20">
                  <h4 className="font-medium mb-2 psychedelic-text">Consciousness Expansion</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Steve Jobs</Badge>
                    <Badge variant="outline">Elon Musk</Badge>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-biotech/10 border border-biotech/20">
                  <h4 className="font-medium mb-2" style={{color: 'hsl(var(--biotech))'}}>Longevity & Optimization</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Bryan Johnson</Badge>
                    <Badge variant="outline">Peter Thiel</Badge>
                    <Badge variant="outline">Bill Gates</Badge>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-neural/10 border border-neural/20">
                  <h4 className="font-medium mb-2" style={{color: 'hsl(var(--neural))'}}>Cognitive Enhancement</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Sergey Brin</Badge>
                    <Badge variant="outline">Elon Musk</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="research-card xl:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span>Innovation Patterns</span>
              </CardTitle>
              <CardDescription>
                Common threads in tech innovation and consciousness exploration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Early Adopters</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Many tech leaders experimented with consciousness-altering substances early in their careers, 
                    often during formative periods of creativity and innovation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Steve Jobs - 1970s</Badge>
                    <Badge variant="secondary">Gates - Early Microsoft</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Systematic Approaches</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Modern tech leaders tend to approach optimization systematically, 
                    with measured protocols and scientific rigor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Bryan Johnson</Badge>
                    <Badge variant="secondary">Peter Thiel</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Mental Health Focus</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Recent openness about using substances for mental health, 
                    breaking stigma around psychological optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Elon Musk</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Investment Patterns</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Personal use often correlates with investment in related 
                    research and companies developing these technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Thiel - Life Extension</Badge>
                    <Badge variant="secondary">Gates - Global Health</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="research-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-6 w-6 text-tech-leader" />
                <span>Key Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-muted/20">
                  <h5 className="font-medium mb-2">Risk Tolerance</h5>
                  <p className="text-xs text-muted-foreground">
                    Tech leaders show higher willingness to experiment with unproven substances, 
                    paralleling their approach to business innovation.
                  </p>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/20">
                  <h5 className="font-medium mb-2">Data-Driven</h5>
                  <p className="text-xs text-muted-foreground">
                    Modern leaders increasingly take systematic, measured approaches 
                    to optimization, treating their bodies like systems to optimize.
                  </p>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/20">
                  <h5 className="font-medium mb-2">Cultural Shift</h5>
                  <p className="text-xs text-muted-foreground">
                    Growing openness about mental health and optimization reflects 
                    broader cultural acceptance of previously taboo substances.
                  </p>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/20">
                  <h5 className="font-medium mb-2">Innovation Link</h5>
                  <p className="text-xs text-muted-foreground">
                    Many leaders credit consciousness-expanding experiences with 
                    breakthrough insights and enhanced creative problem-solving.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
