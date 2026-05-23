import type { ReactNode } from "react";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#cursor", label: "Cursor" },
  { href: "#github", label: "GitHub" },
  { href: "#vercel", label: "Vercel" },
  { href: "#walkthrough", label: "Walkthrough" },
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-zinc-950 p-4 text-sm leading-relaxed text-zinc-100">
      <code className="font-mono">{children}</code>
    </pre>
  );
}

function ToolBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent">
      {children}
    </span>
  );
}

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="list-decimal space-y-2 pl-5 text-muted">
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  );
}

function ToolSection({
  id,
  badge,
  title,
  intro,
  steps,
  proTip,
  children,
}: {
  id: string;
  badge: string;
  title: string;
  intro: string;
  steps: string[];
  proTip: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-12">
      <ToolBadge>{badge}</ToolBadge>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-muted">{intro}</p>
      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Steps
        </h3>
        <div className="mt-3">
          <StepList steps={steps} />
        </div>
      </div>
      {children ? <div className="mt-6">{children}</div> : null}
      <p className="mt-6 rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted">
        <span className="font-semibold text-foreground">Pro tip: </span>
        {proTip}
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            AI Dev Workflow
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-16">
        <section id="top" className="scroll-mt-24 py-16 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Start here
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-accent sm:text-5xl">
            Build software with AI
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Use Cursor to write code with an AI partner, GitHub to save every
            change, and Vercel to ship updates to the web in minutes.
          </p>
          <a
            href="#overview"
            className="mt-8 inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            See the workflow
          </a>
        </section>

        <section id="overview" className="scroll-mt-24 border-t border-border pt-12">
          <ToolBadge>Overview</ToolBadge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Code → Save → Ship
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">
            Think of building software as three repeating moves. You change code
            locally, save a snapshot on GitHub, and Vercel publishes that
            snapshot to a live website whenever you push.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Code (Cursor)</p>
              <p className="mt-1 text-sm text-muted">
                Edit files in your project folder. Ask the AI to implement
                features, fix bugs, and explain diffs before you accept them.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Save (GitHub)</p>
              <p className="mt-1 text-sm text-muted">
                Commit bundles your changes with a message. Push uploads commits
                so your work is backed up and shareable.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Ship (Vercel)</p>
              <p className="mt-1 text-sm text-muted">
                Connect your repo once. Every push to main triggers a fresh
                deployment - your site updates automatically.
              </p>
            </li>
          </ul>
        </section>

        <ToolSection
          id="cursor"
          badge="Cursor"
          title="Your AI-powered editor"
          intro="Cursor is a code editor built on VS Code with Chat and Agent modes. It reads your project, proposes edits, and applies changes as diffs you can review line by line."
          steps={[
            "Install Cursor from cursor.com and sign in.",
            "Open your project folder (File, Open Folder).",
            "Use Chat (Ctrl+L) for questions, or Agent for multi-file tasks.",
            "Review every diff before accepting - you stay in control.",
          ]}
          proTip="Start prompts with context: mention the file, the goal, and any constraints (framework, styling, no new dependencies)."
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Example prompt
          </h3>
          <div className="mt-3">
            <CodeBlock>{`In app/page.tsx, update the hero headline to:
"Ship your first site today"

Keep the same layout and Tailwind classes. Do not add dependencies.`}</CodeBlock>
          </div>
        </ToolSection>

        <ToolSection
          id="github"
          badge="GitHub"
          title="Version control in the cloud"
          intro="GitHub stores your repository - the full history of your project. Git tracks changes on your machine; GitHub hosts them remotely so you can collaborate and connect deployment tools."
          steps={[
            "Create a new empty repository on github.com (no README if you already have code locally).",
            "In your project folder, run git init if the folder is not already a repo.",
            "Stage and commit your files with git add and git commit.",
            "Add the remote and push: git push -u origin main.",
          ]}
          proTip={'Write commit messages in the imperative: "Add hero section" not "Added hero section" - it reads like a changelog.'}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
            Git commands
          </h3>
          <div className="mt-3">
            <CodeBlock>{`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main`}</CodeBlock>
          </div>
        </ToolSection>

        <ToolSection
          id="vercel"
          badge="Vercel"
          title="Deploy on every push"
          intro="Vercel builds your Next.js app in the cloud and gives you a HTTPS URL. Import your GitHub repo once; later pushes to main redeploy automatically."
          steps={[
            "Sign in to vercel.com with your GitHub account.",
            "Click Add New → Project and import your repository.",
            "Accept the defaults for a Next.js app and deploy.",
            "After setup, git push origin main to publish new changes.",
          ]}
          proTip="Open the deployment log if a build fails - the error usually points to the exact file and line to fix locally before pushing again."
        />

        <section id="walkthrough" className="scroll-mt-24 border-t border-border pt-12">
          <ToolBadge>Walkthrough</ToolBadge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            End-to-end exercise
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">
            Practice the full loop in about ten minutes. You will change copy,
            save it on GitHub, and see it live on Vercel.
          </p>
          <ol className="mt-6 list-decimal space-y-3 pl-5 text-muted">
            <li>
              In Cursor, open{" "}
              <code className="rounded bg-zinc-100 px-1 font-mono text-sm text-foreground">
                app/page.tsx
              </code>{" "}
              and change the hero headline to something personal.
            </li>
            <li>
              Run{" "}
              <code className="rounded bg-zinc-100 px-1 font-mono text-sm text-foreground">
                npm run dev
              </code>{" "}
              locally and confirm the page looks right at localhost.
            </li>
            <li>
              Commit:{" "}
              <code className="rounded bg-zinc-100 px-1 font-mono text-sm text-foreground">
                git add .
              </code>{" "}
              then{" "}
              <code className="rounded bg-zinc-100 px-1 font-mono text-sm text-foreground">
                git commit -m "Update hero headline"
              </code>
              .
            </li>
            <li>
              Push to GitHub:{" "}
              <code className="rounded bg-zinc-100 px-1 font-mono text-sm text-foreground">
                git push origin main
              </code>
              .
            </li>
            <li>
              Wait for Vercel to finish deploying, then open your live site and refresh:{" "}
              <a
                href="https://website-builder-wheat-mu.vercel.app"
                className="font-medium text-accent hover:text-accent-hover"
              >
                https://website-builder-wheat-mu.vercel.app
              </a>
              .
            </li>
          </ol>
          <p className="mt-6 rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted">
            <span className="font-semibold text-foreground">Pro tip: </span>
            Keep Vercel and GitHub open in browser tabs while you work - watching the deploy turn green is the best confirmation your push succeeded.
          </p>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Built to teach Code → Save → Ship.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://cursor.com" className="hover:text-accent">
              cursor.com
            </a>
            <a href="https://github.com" className="hover:text-accent">
              github.com
            </a>
            <a href="https://vercel.com/docs" className="hover:text-accent">
              vercel.com/docs
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}