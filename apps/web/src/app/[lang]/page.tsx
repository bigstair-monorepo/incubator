import LangRedirect from './components/organisms/LangRedirect';
import {sectionRenderer} from './utils/section-renderer';
import {getPageBySlug} from "@utils/get-page-by-slug";


export default async function RootRoute ({ params }: { params: { lang: string; }; }) {
  
  
  try {
      
      const page = await getPageBySlug('home', params.lang);

      if (page.error && page.error.status == 401) {
           throw new Error(
          'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://127.0.0.1:1337/admin/'
        );
      }
    
        console.log({page})
     

      if (page?.data?.length == 0 && params?.lang !== 'en') return <LangRedirect />;
      if (page?.data?.length === 0) return null;

      const contentSections = page.data[0].attributes.contentSections;
      return contentSections.map((section: any, index: number) =>
        sectionRenderer(section, index)
      );
    } catch (error: any) {
     console.error({message: error.message})
  }
}
