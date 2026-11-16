import HomeView from "@/components/views/HomeView";
import { cv } from "@/data/cv";
import { t } from "@/lib/i18n";

// Arabic home page: /ar
export const metadata = {
  title: `${t(cv.shortName, "ar")} | الموقع الشخصي`,
  description: t(cv.summary, "ar"),
};

export default function HomeAr() {
  return <HomeView lang="ar" />;
}
