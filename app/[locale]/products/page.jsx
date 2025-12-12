import AppListWrapper from "@/component/appListWrapper";

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ru' },
    { locale: 'kk' }
  ]
}

export const revalidate = 60

export default async function AppsSection({ params }) {
    const {locale} = await params;
    
    return <AppListWrapper database={process.env.NOTION_DATABASE_PRODUCTS_ID} locale={locale} />;
}
