import { notFound } from "next/navigation";
import { cv } from "@/data/cv";
import { t } from "@/lib/i18n";
import ProjectView from "@/components/views/ProjectView";

// Arabic version of each project page: /ar/projects/<slug>
export function generateStaticParams() {
  return cv.projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = cv.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | ${t(cv.shortName, "ar")}`,
    description: t(project.summary, "ar"),
  };
}

export default async function ProjectPageAr({ params }) {
  const { slug } = await params;
  const project = cv.projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectView project={project} lang="ar" />;
}
