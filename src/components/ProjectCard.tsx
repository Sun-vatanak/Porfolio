import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  codeUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${featured ? "ring-2 ring-portfolio-primary/20" : ""}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-4 left-4 bg-portfolio-primary text-white">
            Featured
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            {liveUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live
                </a>
              </Button>
            )}
            {codeUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/90 hover:bg-white"
                asChild
              >
                <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-3 group-hover:text-portfolio-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
