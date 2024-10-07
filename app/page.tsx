import { BlogPosts } from 'app/components/posts'

const aboutMe = "I’m a full-stack software engineer with a primary focus on Elixir and TypeScript, along with related frameworks and tools. I’m currently writing some Rust code too. I love building products and contributing to open source, and I actively contribute to the open source community."

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        {`Hi, I'm Phil Chen (fahchen).`}
      </h1>
      <p className="mb-4">{aboutMe}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
