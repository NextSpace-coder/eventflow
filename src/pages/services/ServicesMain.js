import React from 'react';
import ServicesPage from '../../components/Services/ServicesPage';


const ServicesMain = () => {
  const servicesData = [
    {
      id: 1,
      title: "Professional Event Planning",
      description: "Events bring people together for a shared experience and From weddings",
      link: "event-prodigy",
      icon: "icon-camera",
      wowDelay: "100ms",
    },
    {
      id: 2,
      title: "Conference Management",
      description: "Events bring people together for a shared experience and From weddings",
      link: "stellar-events-co",
      icon: "icon-skewer",
      wowDelay: "200ms",
    },
    {
      id: 3,
      title: "Corporate Event Solutions",
      description: "Events bring people together for a shared experience and From weddings",
      link: "elite-event-management",
      icon: "icon-dinner-table",
      wowDelay: "300ms",
    },
    {
      id: 4,
      title: "Wedding Planning Services",
      description: "Events bring people together for a shared experience and From weddings",
      link: "infinite-occasions",
      icon: "icon-cake",
      wowDelay: "400ms",
    },
    {
      id: 5,
      title: "Social Event Coordination",
      description: "Events bring people together for a shared experience and From weddings",
      link: "dream-event-planners",
      icon: "icon-dental-specialists",
      wowDelay: "500ms",
    },
    {
      id: 6,
      title: "Modern Cos",
      description: "Events bring people together for a shared experience and From weddings",
      link: "event-prodigy",
      icon: "icon-modern-cos",
      wowDelay: "600ms",
    },
  ];

    return (
        <React.Fragment>
            {/*Services Page Start*/}
            <ServicesPage services={servicesData} />
            {/*Services Page End*/}
        </React.Fragment>
    );
};

export default ServicesMain;
