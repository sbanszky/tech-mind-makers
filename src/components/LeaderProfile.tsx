import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Quote, Building, Calendar, Target } from "lucide-react";
import { Leader } from "@/types/leader";

interface LeaderProfileProps {
  leader: Leader;
  index: number;
}

export const LeaderProfile = ({ leader, index }: LeaderProfileProps) => {
  return (
    <Card className="research-card p-0 hover:scale-[1.02] transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl mb-2">{leader.name}</CardTitle>
            <CardDescription className="flex items-center space-x-2 text-lg">
              <Building className="h-4 w-4" />
              <span>{leader.role}</span>
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-tech-leader/10 text-tech-leader border-tech-leader">
            {leader.companies.join(", ")}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
        
        <Separator />
        
        <div>
          <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2">
            <Target className="h-5 w-5 text-primary" />
            <span>Reported Substance Use</span>
          </h4>
          
          <div className="space-y-4">
            {leader.substances.map((substance, idx) => (
              <div key={idx} className="border rounded-lg p-4 bg-muted/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-primary">{substance.name}</span>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      substance.category === 'psychedelic' ? 'bg-psychedelic/20 text-psychedelic' :
                      substance.category === 'biotech' ? 'bg-biotech/20 text-biotech' :
                      'bg-neural/20 text-neural'
                    }`}
                  >
                    {substance.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{substance.context}</p>
                
                {substance.purpose && (
                  <div className="text-sm">
                    <span className="font-medium">Purpose:</span> {substance.purpose}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {leader.quotes.length > 0 && (
          <>
            <Separator />
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                <Quote className="h-5 w-5 text-accent" />
                <span>Notable Quotes</span>
              </h4>
              
              <div className="space-y-3">
                {leader.quotes.map((quote, idx) => (
                  <blockquote key={idx} className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                    "{quote.text}"
                    {quote.context && (
                      <div className="flex items-center space-x-2 mt-2 text-xs">
                        <Calendar className="h-3 w-3" />
                        <span>{quote.context}</span>
                      </div>
                    )}
                  </blockquote>
                ))}
              </div>
            </div>
          </>
        )}
        
        <Separator />
        
        <div>
          <h4 className="text-lg font-semibold mb-2">Innovation Impact</h4>
          <p className="text-muted-foreground text-sm">{leader.impact}</p>
        </div>
      </CardContent>
    </Card>
  );
};
