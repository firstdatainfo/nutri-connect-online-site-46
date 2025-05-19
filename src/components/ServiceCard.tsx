
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
  // Create dynamic class names using template literals
  const iconBgClass = `bg-${color}/10`;
  const iconTextClass = `text-${color}`;
  const buttonClass = `mt-auto border-${color} text-${color} hover:bg-${color}/10`;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full">
      <div className={`${iconBgClass} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
        <div className={iconTextClass}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Button asChild variant="outline" className={buttonClass}>
        <Link to={link}>{buttonText}</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
