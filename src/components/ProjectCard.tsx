import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  overlayText: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  link,
  overlayText
}: ProjectCardProps) => {
  return (
    <Link 
      to={link} 
      className="block h-full no-underline text-inherit"
    >
      <motion.div 
        className="group relative h-full"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Card className="h-full overflow-hidden transition-all duration-300 group-hover:shadow-lg">
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.span 
                className="text-white font-medium text-lg"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                {overlayText}
              </motion.span>
            </motion.div>
          </div>
          <CardContent className="p-6">
            <h3 className="font-bold text-xl mb-2 group-hover:text-portfolio-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                  className="text-xs group-hover:border-portfolio-primary/50 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;