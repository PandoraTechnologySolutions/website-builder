"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type WorkflowContextValue = {
  isVisible: boolean;
  showWorkflow: () => void;
};

const WorkflowContext = createContext<WorkflowContextValue | null>(null);

function useWorkflow() {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error("Workflow components must be used within WorkflowProvider");
  }
  return context;
}

export function WorkflowProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  const showWorkflow = useCallback(() => {
    setIsVisible(true);
  }, []);

  return (
    <WorkflowContext.Provider value={{ isVisible, showWorkflow }}>
      {children}
    </WorkflowContext.Provider>
  );
}

export function SeeWorkflowButton() {
  const { showWorkflow } = useWorkflow();

  return (
    <button
      type="button"
      onClick={showWorkflow}
      className="mt-8 inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
    >
      See the workflow
    </button>
  );
}

function FlowNode({
  icon,
  label,
  subtitle,
  accentClass,
}: {
  icon: ReactNode;
  label: string;
  subtitle: string;
  accentClass: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-border bg-card shadow-sm ${accentClass}`}
      >
        {icon}
      </div>
      <p className="mt-3 text-sm font-semibold text-foreground">{label}</p>
      <p className="mt-1 max-w-[9rem] text-xs leading-5 text-muted">{subtitle}</p>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12h38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 6l8 6-8 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDown({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 24 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0v38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 32l6 8 6-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      aria-hidden
      className="h-7 w-7 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden
      className="h-7 w-7 text-foreground"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function DeployIcon() {
  return (
    <svg
      aria-hidden
      className="h-7 w-7 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l9 16H3L12 3z" />
      <path d="M12 11v4" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      aria-hidden
      className="h-7 w-7 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 010 18" />
      <path d="M12 3a15 15 0 000 18" />
    </svg>
  );
}

export function WorkflowFlowchart() {
  const { isVisible } = useWorkflow();

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      document
        .getElementById("workflow")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      id="workflow"
      className="scroll-mt-24 border-t border-border pt-12 workflow-reveal"
    >
      <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent">
        Workflow
      </span>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        Code → Save → Ship
      </h2>
      <p className="mt-3 text-base leading-7 text-muted">
        Every change follows the same loop. Edit locally, push to GitHub, and
        Vercel publishes the update to your live site.
      </p>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="hidden items-center justify-between gap-2 sm:flex">
          <FlowNode
            icon={<CodeIcon />}
            label="Code"
            subtitle="Edit in Cursor on your machine"
            accentClass="ring-2 ring-accent/20"
          />
          <ArrowRight className="h-6 w-10 shrink-0 text-accent" />
          <FlowNode
            icon={<GitHubIcon />}
            label="Save"
            subtitle="Commit and push to GitHub"
            accentClass=""
          />
          <ArrowRight className="h-6 w-10 shrink-0 text-accent" />
          <FlowNode
            icon={<DeployIcon />}
            label="Ship"
            subtitle="Vercel builds and deploys"
            accentClass="ring-2 ring-accent/20"
          />
          <ArrowRight className="h-6 w-10 shrink-0 text-accent" />
          <FlowNode
            icon={<GlobeIcon />}
            label="Live site"
            subtitle="Users see your latest changes"
            accentClass="ring-2 ring-accent/20"
          />
        </div>

        <div className="flex flex-col items-center gap-2 sm:hidden">
          <FlowNode
            icon={<CodeIcon />}
            label="Code"
            subtitle="Edit in Cursor on your machine"
            accentClass="ring-2 ring-accent/20"
          />
          <ArrowDown className="h-10 w-6 text-accent" />
          <FlowNode
            icon={<GitHubIcon />}
            label="Save"
            subtitle="Commit and push to GitHub"
            accentClass=""
          />
          <ArrowDown className="h-10 w-6 text-accent" />
          <FlowNode
            icon={<DeployIcon />}
            label="Ship"
            subtitle="Vercel builds and deploys"
            accentClass="ring-2 ring-accent/20"
          />
          <ArrowDown className="h-10 w-6 text-accent" />
          <FlowNode
            icon={<GlobeIcon />}
            label="Live site"
            subtitle="Users see your latest changes"
            accentClass="ring-2 ring-accent/20"
          />
        </div>

        <div className="relative mt-8 hidden sm:block">
          <svg
            aria-hidden
            className="mx-auto h-16 w-full max-w-xl text-accent/70"
            viewBox="0 0 480 64"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M440 12 C 300 12, 300 52, 40 52"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            <path
              d="M40 52 L28 52 L34 44"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="absolute inset-x-0 bottom-0 text-center text-xs font-medium text-muted">
            Need another change? Loop back to Code and repeat.
          </p>
        </div>

        <p className="mt-4 text-center text-xs font-medium text-muted sm:hidden">
          Need another change? Start again at Code.
        </p>
      </div>
    </section>
  );
}
