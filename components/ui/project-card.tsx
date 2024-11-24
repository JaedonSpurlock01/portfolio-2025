import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  websiteUrl,
  githubUrl,
  imageSrc,
  tags,
  date,
}: any) => {
  return (
    <Card key={date} className="overflow-hidden flex flex-col w-full shadow-md border border-border bg-primary-foreground">
      {/* Project Image */}
      <div className="relative group overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:bg-black/50 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                className="bg-white/10 backdrop-blur-sm p-2 rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>

      <CardContent className="space-y-4 mt-6 flex-grow flex flex-col">
        <div className="flex flex-col justify-between">
          <CardTitle className="text-xl font-bold text-primary">
            {title}
          </CardTitle>
        </div>

        {/* Description */}
        <CardDescription className="text-secondary flex-grow line-clamp-3">
          {description}
        </CardDescription>

        {/* Tags */}
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="outline"
              className="font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;