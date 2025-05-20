
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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 flex flex-col h-full border border-gray-100">
      <div className={`bg-${color}/10 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
        <div className={`text-${color}`}>{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow text-sm">{description}</p>
      <Button 
        asChild 
        variant="outline" 
        className={`mt-auto border-${color} text-${color} hover:bg-${color}/10 w-full justify-center`}
      >
        <Link to={link}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
