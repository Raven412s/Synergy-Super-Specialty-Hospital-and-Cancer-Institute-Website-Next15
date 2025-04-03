import { pressReleases } from '@/data';
import { DownloadItem, PressRelease } from '@/types';
import { notFound } from 'next/navigation';





export default function PressReleasePage({
  params,
}: {
  params: { id: string };
}) {
  const release = pressReleases.find((r: PressRelease) => r.id === params.id);

  if (!release) return notFound();

  return (
    <div className="container mx-auto py-12">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <span className="text-sm text-gray-500">
            {new Date(release.date).toLocaleDateString()}
          </span>
          <h1 className="text-3xl font-bold mt-2">{release.title}</h1>
          <p className="text-lg mt-4">{release.summary}</p>
        </header>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: release.content }} />

        {/* Media section */}
        {release.videoPreview && (
          <div className="mt-8 aspect-video">
            <iframe
              src={release.videoPreview}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        {/* Downloads section */}

        {release.downloads && release.downloads?.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Downloads</h3>
            <div className="flex flex-wrap gap-4">
              {release.downloads.map((download: DownloadItem) => (
                <a
                  key={download.name}
                  href={download.url}
                  download
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  {download.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

// Generate static paths
export async function generateStaticParams() {
  return pressReleases.map((release: PressRelease) => ({
    id: release.id,
  }));
}
