import { Button } from "@/components/ui/button";
import { Users, Beaker, TrendingUp } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent"></div>
            <span className="text-xl font-bold">Neural Research</span>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant={activeSection === "profiles" ? "default" : "ghost"}
              onClick={() => onSectionChange("profiles")}
              className="flex items-center space-x-2"
            >
              <Users className="h-4 w-4" />
              <span>Leaders</span>
            </Button>
            
            <Button
              variant={activeSection === "substances" ? "default" : "ghost"}
              onClick={() => onSectionChange("substances")}
              className="flex items-center space-x-2"
            >
              <Beaker className="h-4 w-4" />
              <span>Substances</span>
            </Button>
            
            <Button
              variant={activeSection === "analysis" ? "default" : "ghost"}
              onClick={() => onSectionChange("analysis")}
              className="flex items-center space-x-2"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Analysis</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
