import { notFound } from "next/navigation";
import JobArticle from "../../../components/JobArticle";
import { jobMetadata } from "../../../lib/careersPages";
import { JOBS, getJob } from "../../../lib/jobs";

export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return jobMetadata(slug, "en");
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  if (!getJob(slug)) notFound();
  return <JobArticle slug={slug} lang="en" />;
}
