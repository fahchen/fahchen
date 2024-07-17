import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`Hi, I'm Phil Chen.`}
      </h1>
      <p className="mb-4">
        {`I’m a full-stack software engineer, with a primary focus on Elixir and TypeScript, and related frameworks and tools. I love building products and open source, and actively contribute to the open source community.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
