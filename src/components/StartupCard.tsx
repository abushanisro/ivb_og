import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink, Users, Calendar, Leaf, GraduationCap, Utensils, Heart, Code, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Founder {
  name: string;
  avatar?: string;
}

interface StartupCardProps {
  name: string;
  description: string;
  founders: Founder[];
  batch: string;
  category: string;
  teamSize?: number;
  website?: string;
  founded?: string;
  image?: string;
}

const StartupCard = ({ 
  name, 
  description, 
  founders, 
  batch, 
  category, 
  teamSize, 
  website,
  founded,
  image 
}: StartupCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Idea":
        return "bg-secondary text-secondary-foreground";
      case "MVP":
        return "bg-accent text-accent-foreground";
      case "Launched":
        return "bg-primary text-primary-foreground";
      case "Funded":
        return "bg-gradient-primary text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Sustainability":
        return <Leaf className="h-4 w-4 text-primary" />;
      case "EdTech":
        return <GraduationCap className="h-4 w-4 text-primary" />;
      case "Food Tech":
        return <Utensils className="h-4 w-4 text-primary" />;
      case "HealthTech":
        return <Heart className="h-4 w-4 text-primary" />;
      case "IoT":
        return <Cpu className="h-4 w-4 text-primary" />;
      default:
        return <Code className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-500 bg-gradient-card border-primary/10 hover:border-primary/30 hover:scale-105 hover:-translate-y-2 transform-gpu perspective-1000">
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            srcSet={`${image} 1x, ${image} 2x`}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ imageRendering: "auto" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="text-xs flex items-center gap-1">
                {getCategoryIcon(category)}
                {category}
              </Badge>
              <Badge className={getStatusColor(status)}>
                {status}
              </Badge>
            </div>
          </div>
          {website && (
            <Button variant="ghost" size="sm" asChild>
              <a href={website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              {founders.slice(0, 3).map((founder, index) => (
                <Avatar key={index} className="h-8 w-8 border-2 border-card">
                  <AvatarImage src={founder.avatar} alt={founder.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {founder.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              ))}
              {founders.length > 3 && (
                <div className="h-8 w-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium">
                  +{founders.length - 3}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium">
                {founders.length === 1 
                  ? founders[0].name 
                  : `${founders[0].name} +${founders.length - 1} more`
                }
              </p>
              <p className="text-xs text-muted-foreground">Batch {batch}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {teamSize && (
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{teamSize}</span>
              </div>
            )}
            {founded && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{founded}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupCard;
