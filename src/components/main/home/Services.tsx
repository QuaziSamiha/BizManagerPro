// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import {
  Bell,
  Briefcase,
  CreditCard,
  Home,
  List,
  MessageCircle,
  Monitor,
  PieChart,
  Settings,
  Shield,
  Smile,
  Tractor,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <Tractor className="h-6 w-6 text-blue-600" />,
    title: "Inventory Management",
    description: "Complete control over your stock across multiple locations.",
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Employee Management",
    description: "Efficient staff scheduling and performance tracking.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    title: "Client Management",
    description:
      "Track client profiles, interactions, and engagement effortlessly.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
    title: "Support Ticketing",
    description:
      "Seamless management of customer support tickets for faster resolutions.",
  },
  {
    icon: <Home className="h-6 w-6 text-blue-600" />,
    title: "Shop Management",
    description: "Streamline operations for single or multiple shop locations.",
  },
  {
    icon: <List className="h-6 w-6 text-blue-600" />,
    title: "Audit and Reports",
    description: "Generate insightful reports and track audits for compliance.",
  },
  {
    icon: <Smile className="h-6 w-6 text-blue-600" />,
    title: "Feedback Management",
    description:
      "Collect and analyze customer feedback for better service delivery.",
  },
  {
    icon: <Bell className="h-6 w-6 text-blue-600" />,
    title: "Welcome Messages",
    description:
      "Send personalized welcome messages to enhance client relationships.",
  },
  {
    icon: <PieChart className="h-6 w-6 text-blue-600" />,
    title: "Survey Management",
    description: "Design and manage surveys to gather business insights.",
  },
  {
    icon: <Settings className="h-6 w-6 text-blue-600" />,
    title: "Administration Tools",
    description:
      "Advanced tools to manage roles, permissions, and overall administration.",
  },
  {
    icon: <Monitor className="h-6 w-6 text-blue-600" />,
    title: "Dashboard Analytics",
    description:
      "Visualize business data with interactive and detailed dashboards.",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Customer Engagement",
    description:
      "Boost customer engagement with tailored communication and follow-ups.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-blue-600" />,
    title: "Point of Sale (POS)",
    description: "Simplify transactions and sales management at the counter.",
  },
];

const Services = () => {
  return (
    <>
      <section className="py-20">
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-blue-900 text-center font-semibold">
              Our Services
            </h1>
            <div className="w-[60%] h-1 bg-blue-700"></div>
          </div>
        </div>

        {/* <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-10"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-blue-100 h-48 w-auto">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 hyphens-manual">
                    {service.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="bg-blue-600 text-white hover:text-white rounded-full" />
          <CarouselPrevious className="bg-blue-600 text-white hover:text-white rounded-full" />
        </Carousel> */}
      </section>
    </>
  );
};

export default Services;
