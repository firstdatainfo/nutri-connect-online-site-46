
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  color?: string;
  buttonText?: string;
  imageUrl?: string;
}
const ServiceCard = ({
  title,
  description,
  icon,
  link = "/services",
  color = "nutrition-green",
  buttonText = "Saiba Mais",
  imageUrl
}: ServiceCardProps) => {
  return <div className="bg-white rounded-lg shadow-md h-full border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="p-5 flex flex-col h-full">
        <div className={`bg-${color}/10 rounded-full w-12 h-12 flex items-center justify-center mb-3`}>
          <div className={`text-${color} text-xl`}>{icon}</div>
        </div>
        {imageUrl && (
          <div className="mb-3">
            <img src={imageUrl} alt={title} className="w-full h-auto rounded-md" />
          </div>
        )}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Button asChild variant="outline" className={`w-full justify-center border-${color} text-${color} hover:bg-${color}/10 mt-auto`}>
          <Link to={link}>{buttonText}</Link>
        </Button>
      </div>
    </div>;
};
export default ServiceCard;
