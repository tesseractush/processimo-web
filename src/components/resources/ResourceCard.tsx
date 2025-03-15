
import { CalendarIcon, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  readTime?: string;
  link: string;
  type: 'blog' | 'documentation' | 'video' | 'guide';
}

const ResourceCard = ({ title, description, imageUrl, date, readTime, link, type }: ResourceCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-md hover:border-primary/20 animate-fade-in">
      <div className="relative">
        <div className="aspect-[16/9] bg-secondary/50 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-muted-foreground">{type === 'video' ? 'Video Thumbnail' : 'Resource Image'}</p>
          </div>
        </div>
        {type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-primary-foreground ml-1"></div>
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            {type === 'blog' ? 'Blog Post' : type === 'documentation' ? 'Documentation' : type === 'video' ? 'Video Tutorial' : 'Guide'}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="px-5 py-4 border-t flex justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {date && (
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-1" />
              <span>{date}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{readTime}</span>
            </div>
          )}
        </div>
        <Link to={link} className="text-primary hover:text-primary/80 flex items-center">
          Read more
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
