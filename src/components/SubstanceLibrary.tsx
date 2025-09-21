import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { substanceData } from "@/data/substances";
import { AlertTriangle, Brain, Zap, FlaskConical } from "lucide-react";

export const SubstanceLibrary = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'psychedelic': return <Zap className="h-5 w-5" />;
      case 'biotech': return <FlaskConical className="h-5 w-5" />;
      case 'nootropic': return <Brain className="h-5 w-5" />;
      default: return <Brain className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'psychedelic': return 'bg-psychedelic/20 text-psychedelic border-psychedelic';
      case 'biotech': return 'bg-biotech/20 text-biotech border-biotech';
      case 'nootropic': return 'bg-neural/20 text-neural border-neural';
      default: return 'bg-muted/20 text-muted-foreground';
    }
  };

  return (
    <section className="research-section">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">Substance Research Library</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {substanceData.map((substance) => (
            <Card key={substance.id} className="research-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center space-x-2">
                      {getCategoryIcon(substance.category)}
                      <span>{substance.name}</span>
                    </CardTitle>
                    <CardDescription className="font-mono text-sm">
                      {substance.scientificName}
                    </CardDescription>
                  </div>
                  <Badge className={getCategoryColor(substance.category)}>
                    {substance.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Mechanism of Action</h4>
                  <p className="text-sm text-muted-foreground">{substance.mechanism}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Effects</h4>
                  <div className="flex flex-wrap gap-1">
                    {substance.effects.map((effect, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {effect}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Medical/Research Uses</h4>
                  <p className="text-sm text-muted-foreground">{substance.medicalUse}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Risks & Considerations</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">{substance.risks}</p>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Cultural Context</h4>
                  <p className="text-sm text-muted-foreground">{substance.culturalContext}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};