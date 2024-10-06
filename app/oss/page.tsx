import Link from 'next/link'
import { dataset } from 'app/components/oss'
import { GitPullRequestIcon, MarkGithubIcon } from 'app/components/svg/icons'

export const metadata = {
  title: 'OSS',
  description: 'My open source contribution.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Open source contribution</h1>
      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Projects</h2>
      <div className='flex flex-col gap-y-4 mb-8'>
        {dataset
          .projects
          .map((project) => (
            <div key={project.repository}>
              <Link
                key={project.repository}
                className="flex items-center gap-x-1 font-semibold tracking-tight"
                href={`https://github.com/${project.repository}`}
              >
                <MarkGithubIcon />
                {project.repository}
              </Link>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {project.description}
              </p>
            </div>
          ))}
      </div>
      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Pull requests</h2>
      <div className='flex flex-col gap-y-2'>
        {dataset
          .pulls
          .map((pull) => (
            <Link
              key={pull.url}
              className="flex items-start tracking-tight"
              href={pull.url}
            >
              <GitPullRequestIcon className="shrink-0 mr-1 h-6" />
              {pull.title}
            </Link>
          ))}
      </div>
    </section>
  )
}

