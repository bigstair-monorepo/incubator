import Communication from "@organisms/Communication";
import Testimonials from "@organisms/Testimonials";
import Pricing from "@organisms/Pricing";
import Email from "@organisms/Email";
import Banner from '@organisms/Banner';
import Hero from '@organisms/Hero';

export function sectionRenderer (section: any, index: number) {
  
  console.log(section)
  //  REVIEW - retrieve from db
const details = "CNS is the leading marketplace for mining supplies and services where you can find experts for any project, with any budget, and on any timeline. With over 500 categories of services you can enjoy high-quality deliveries that impress every time."

  switch (section.__component) {
    case "sections.hero":
      return <Hero/>;
    case "sections.communication":
      return <Communication
        heading='Browse our most popular service providers'
        subheading={details}
        images={[]} />;
    case "sections.testimonials-group":
      // return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      // return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      // return <Email key={index} data={section} />;
    default:
      return null;
  }
}
