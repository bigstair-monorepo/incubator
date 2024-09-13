import {sectionRenderer} from "@utils/section-renderer";
import {Metadata} from "next";
import {getPageBySlug, getAllSlugs} from "@utils/get-page-by-slug";
import {FALLBACK_SEO} from "@utils/constants";


type Props = {
    params: {
        lang: string,
        slug: string
    }
}



export async function generateStaticParams() {
  // Fetch all available slugs and languages
  const pages = await getAllSlugs(); // This should return an array of { lang: string, slug: string[] }

  // Map through the pages to generate the params object for each possible route
  return pages.map((page) => ({
    lang: page.lang,
    slug: page.slug,
  }));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const page = await getPageBySlug(params.slug, params.lang);

    if (!page.data[0].attributes?.seo) return FALLBACK_SEO;
    const metadata = page.data[0].attributes.seo

    return {
        title: metadata.metaTitle,
        description: metadata.metaDescription
    }
}


export default async function PageRoute({params}: Props) {
    const page = await getPageBySlug(params.slug, params.lang);
    if (page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
