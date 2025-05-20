
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  color?: string;
  buttonText?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  link = "/services",
  color = "nutrition-green",
  buttonText = "Saiba Mais",
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-md shadow-sm h-full border border-gray-200 flex flex-col">
      <div className="p-3 flex flex-col h-full">
        <div className="bg-nutrition-green/10 rounded-full w-9 h-9 flex items-center justify-center mb-2">
          <div className="text-nutrition-green">{icon}</div>
        </div>
        <h3 className="text-base font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 mb-3 flex-grow text-sm">{description}</p>
        <Button 
          asChild 
          variant="outline" 
          size="sm"
          className="w-full justify-center border-nutrition-green text-nutrition-green hover:bg-nutrition-green/5 mt-auto transition-none"
        >
          <Link to={link}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
