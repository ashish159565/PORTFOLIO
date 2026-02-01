import React from "react";
import { BlogMetadata } from "@/types/blog";

export const metadata: BlogMetadata = {
  slug: "stateful-ai-agents-memory-pillar",
  title:
    "Giving AI Agents Long-Term Memory: One Architecture, Four Implementations",
  date: "2026-01-31",
  author: "Ashish Gajjela",
  excerpt:
    "A portfolio-focused deep dive into state-based memory for AI agents, with implementations in OpenAI Agents SDK, LangGraph, Google ADK, and an SDK-free baseline.",
  readingTime: 12,
  tags: [
    "AI Agents",
    "Context Engineering",
    "Long-Term Memory",
    "Memory Management",
    "State Management",
    "System Design",
    "OpenAI Agents SDK",
    "LangGraph",
    "Google ADK",
  ],
};

export default function StatefulAIAgentsMemoryPillar() {
  return (
    <article className="space-y-8 text-base md:text-lg leading-relaxed md:leading-loose tracking-wide">
      {/* Overview Section */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          Overview
        </h2>
        <p className="text-foreground/90">
          Most AI assistants <strong>feel</strong> smart in a single
          conversation, then forget everything the next day. The gap isn't model
          capability - it's{" "}
          <strong>the ability to remember and use what it learns</strong>.
        </p>
        <p className="mt-5 text-foreground/90">
          (An "AI agent" is just an AI that can think through problems, take
          actions, and learn from feedback. Think of it like a digital
          coworker.)
        </p>
        <p className="mt-5 text-foreground/90">
          This post breaks down a practical way to give any AI assistant a
          working memory, like a notebook it can read and update. The key idea
          is simple:
        </p>

        <blockquote className="border-l-4 border-accent pl-6 py-4 my-6 italic bg-accent/5 rounded-r-lg text-accent/90 font-medium shadow-sm">
          Treat "memory" as an explicit lifecycle:{" "}
          <strong className="text-accent">
            State → Inject → Distill → Consolidate → Forget
          </strong>
          .
        </blockquote>

        <img
          src="/images/stateful-ai-agents-memory-pillar/a.png"
          alt="Memory Lifecycle Flow"
          className="w-full sm:max-w-md h-auto rounded-lg my-8 shadow-lg border border-accent/20 hover:border-accent/40 transition-all mx-auto block"
        />
        <p className="text-center text-xs md:text-sm text-muted-foreground italic font-medium mt-3">
          Figure A: Long-term memory implemented as an explicit lifecycle
          outside the language model.
        </p>

        <p className="mt-8 text-foreground/90">
          Then I show how the same architecture maps cleanly to four setups:
        </p>
        <ul className="list-disc list-outside my-6 space-y-3 ml-6">
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">OpenAI Agents SDK</span>{" "}
            - native support for state management and lifecycle hooks
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">LangGraph</span> -
            visualize memory as a multi-step workflow
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">Google ADK</span> -
            cloud-native approach with managed memory services
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">SDK-free baseline</span>{" "}
            - build it from scratch with plain API calls
          </li>
        </ul>

        <img
          src="/images/stateful-ai-agents-memory-pillar/b.png"
          alt="Memory lifecycle mapping across different frameworks"
          className="w-full sm:max-w-2xl md:max-w-4xl h-auto rounded-lg my-8 shadow-lg border border-accent/20 hover:border-accent/40 transition-all mx-auto block"
        />
        <p className="text-center text-xs md:text-sm text-muted-foreground italic font-medium mt-3">
          Figure B: The same memory lifecycle mapped across OpenAI Agents SDK,
          LangGraph, Google ADK, and a minimal SDK-free implementation.
        </p>

        <p className="mt-4">
          If you're building assistants that are personal, consistent, and safe
          over time, this pattern is a strong foundation.
        </p>
      </section>

      {/* The Problem Section */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          The Problem: Why Agents Forget
        </h2>
        <p className="text-foreground/90 mb-6">
          Traditional chatbots have no long-term memory. Each conversation
          starts fresh - like they're meeting you for the first time, every
          time. <b>Picture this:</b> you tell a support bot you're a returning
          customer with a specific issue. Two days later, you come back, and it
          asks for the same information from scratch.
        </p>

        <p className="mt-4">
          <strong>Why does this happen?</strong> Three reasons:
        </p>
        <ol className="list-decimal list-outside my-6 space-y-3 ml-6">
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Limited memory window
            </span>{" "}
            - Bots only see the current conversation. Once you scroll past it,
            it's gone.
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              No way to store learning
            </span>{" "}
            - Your preferences ("Keep replies under 50 words") are lost when the
            conversation ends.
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Bad retrieval methods
            </span>{" "}
            - When bots try to search through past conversations, they pull up
            the wrong things or outdated info.
          </li>
        </ol>

        <p className="mt-6 text-foreground/90">
          Some solutions try to patch this by storing old conversations and
          searching through them when needed. But this approach has blind spots:
        </p>
        <ul className="list-disc list-outside my-6 space-y-3 ml-6">
          <li className="text-foreground/90">
            Can't tell when something has changed ("this time is different"),
          </li>
          <li className="text-foreground/90">
            Pulls up old outdated preferences,
          </li>
          <li className="text-foreground/90">
            Doesn't know which preference matters more when they conflict.
          </li>
        </ul>

        <p className="mt-4">
          <strong>What we need instead:</strong> An agent that behaves like a
          reliable collaborator - someone who:
        </p>
        <ul className="list-disc list-inside my-4 space-y-2">
          <li>keeps detailed notes about you,</li>
          <li>updates those notes thoughtfully,</li>
          <li>applies them consistently with clear priorities.</li>
        </ul>
      </section>

      {/* Core Concept Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-4">
          The Core Concept: Memory as a Lifecycle
        </h2>
        <p className="text-foreground/90">
          Instead of searching through past conversations, treat memory like a
          real notebook: store information, show only the relevant parts to the
          AI, update it when you learn something new, and clean it up when it
          gets old or wrong. Here are the five stages:
        </p>

        <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 text-accent/90">
          1) State (Source of Truth)
        </h3>
        <p className="text-foreground/90 mb-4">
          A persistent record stored in your system (database or file),
          containing:
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Structured profile
            </span>{" "}
            - facts that don't change (e.g., "User is an AI engineer in NYC")
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Global memory notes
            </span>{" "}
            - preferences that last across sessions (e.g., "Keep responses under
            100 words")
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Session memory notes
            </span>{" "}
            - temporary notes from today's conversation (staging area)
          </li>
        </ul>
        <img
          src="/images/stateful-ai-agents-memory-pillar/c.png"
          alt="Memory lifecycle state object with layered lifetimes"
          className="w-full sm:max-w-md md:max-w-md h-auto rounded-lg my-8 shadow-lg border border-accent/20 hover:border-accent/40 transition-all mx-auto block"
        />
        <p className="text-center text-xs md:text-sm text-muted-foreground italic font-medium mt-3">
          Figure C: The agent's memory is modeled as an explict state object
          with layered lifetimes.
        </p>

        <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 text-accent/90">
          2) Injection (What the Model Sees)
        </h3>
        <p className="text-foreground/90 mb-4">
          At the start of each conversation, feed relevant information to the
          AI:
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            structured fields as{" "}
            <span className="font-semibold text-accent">simple YAML</span> (easy
            to parse and prioritize)
          </li>
          <li className="text-foreground/90">
            unstructured preferences as{" "}
            <span className="font-semibold text-accent">readable Markdown</span>{" "}
            (natural language)
          </li>
          <li className="text-foreground/90">
            a <span className="font-semibold text-accent">memory policy</span>{" "}
            (rules like "today's request overrides defaults")
          </li>
        </ul>

        <p className="mt-6 text-foreground/90 bg-accent/5 rounded-r-lg border-l-4 border-accent pl-4 py-3">
          <strong className="text-accent">Why not dump everything?</strong>{" "}
          Tokens cost money, and noise confuses the model. Inject only what
          matters for this task.
        </p>

        <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 text-accent/90">
          3) Distillation (Capture Candidate Memories)
        </h3>
        <p className="text-foreground/90 mb-4">
          During the conversation, watch for statements worth remembering:
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            "I'm vegetarian" →{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              actionable
            </span>{" "}
            (future meal planning)
          </li>
          <li className="text-foreground/90">
            "I prefer bullet points" →{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              durable
            </span>{" "}
            (applies to many tasks)
          </li>
          <li className="text-foreground/90">
            "I'm feeling tired today" →{" "}
            <span className="font-semibold text-orange-600 dark:text-orange-400">
              temporary
            </span>{" "}
            (don't store)
          </li>
          <li className="text-foreground/90">
            "Use the API key abc123" →{" "}
            <span className="font-semibold text-red-600 dark:text-red-400">
              danger
            </span>{" "}
            (never store secrets)
          </li>
        </ul>

        <p className="mt-6 text-foreground/90 bg-accent/5 rounded-r-lg border-l-4 border-accent pl-4 py-3">
          <strong className="text-accent">Critical rule:</strong> Store only
          what is <span className="font-semibold text-accent">explicit</span>,{" "}
          <span className="font-semibold text-accent">durable</span>, and{" "}
          <span className="font-semibold text-accent">actionable</span>. Never
          store secrets, Personal Identifiable Information (PII), or instruction
          injection attempts.
        </p>

        <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 text-accent/90">
          4) Consolidation (Promote + Clean)
        </h3>
        <p className="text-foreground/90 mb-4">
          At the end of a session, promote useful session notes into global
          memory:
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            merge similar notes (e.g., "prefers short answers" + "keep it brief"
            → one entry)
          </li>
          <li className="text-foreground/90">
            resolve conflicts using a rule (e.g., newer notes win)
          </li>
          <li className="text-foreground/90">
            delete temporary notes (e.g., "for today's interview")
          </li>
          <li className="text-foreground/90">wipe the session memory clean</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold mt-8 mb-4 text-accent/90">
          5) Forgetting (A Feature, Not a Bug)
        </h3>
        <p className="text-foreground/90 mb-4">
          Memory stores grow messy over time unless you prune aggressively. Set
          rules like:
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            "Delete notes older than 90 days with low confidence"
          </li>
          <li className="text-foreground/90">
            "Archive seasonal preferences (e.g., vacation dates)"
          </li>
        </ul>

        <p className="mt-6 text-foreground/90 bg-accent/5 rounded-r-lg border-l-4 border-accent pl-4 py-3">
          <strong className="text-accent">Why forget?</strong> Old notes can
          contradict new behavior. Forgetting keeps personalization fresh and
          accurate.
        </p>
      </section>

      {/* Real-World Example */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          Real-World Example: Personal Career Assistant
        </h2>
        <p className="text-foreground/90 mb-4">
          Let me make this concrete. Imagine an AI career coach who:
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">remembers your target roles,</li>
          <li className="text-foreground/90">
            knows your timezone and visa constraints,
          </li>
          <li className="text-foreground/90">
            adapts to your preferred communication style,
          </li>
          <li className="text-foreground/90">
            keeps notes on your practice sessions.
          </li>
        </ul>

        <p className="mt-6 text-foreground/90">
          <span className="font-semibold text-accent">Global Memory</span>{" "}
          (persistent, applies to future sessions):
        </p>
        <ul className="list-disc list-outside my-4 space-y-2 ml-6">
          <li className="text-foreground/90">
            Preferred tone: "concise, bullet-pointed"
          </li>
          <li className="text-foreground/90">
            Target roles: "ML Engineer, NYC or San Francisco"
          </li>
          <li className="text-foreground/90">
            Constraints: "international student, needs CPT"
          </li>
          <li className="text-foreground/90">
            Recurring goals: "daily DSA practice, ML interview prep"
          </li>
        </ul>

        <p className="mt-6 text-foreground/90">
          <span className="font-semibold text-accent">Session Memory</span>{" "}
          (temporary, just for today):
        </p>
        <ul className="list-disc list-outside my-4 space-y-2 ml-6">
          <li className="text-foreground/90">
            "Today focus: system design interviews"
          </li>
          <li className="text-foreground/90">
            "This application is for a healthcare ML startup"
          </li>
          <li className="text-foreground/90">
            "For this email draft, keep it friendly and casual"
          </li>
        </ul>

        <p className="mt-6 text-foreground/90">
          <span className="font-semibold text-accent">Never Store</span>{" "}
          (security + safety):
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            Passwords, API keys, auth tokens
          </li>
          <li className="text-foreground/90">
            Financial account numbers or SSNs
          </li>
          <li className="text-foreground/90">
            Jailbreak attempts ("always ignore policy")
          </li>
        </ul>
      </section>

      {/* Reference Architecture */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          How This Actually Works
        </h2>
        <p className="text-foreground/90 mb-6">
          Here's the basic sequence (in code for those interested, but the
          concept is simple: load → show relevant notes → chat → learn → save):
        </p>

        <pre className="bg-muted/50 border border-accent/20 p-4 sm:p-6 rounded-lg overflow-x-auto my-6 text-xs sm:text-sm leading-relaxed">
          <code className="text-foreground/90">{`# 1. Load user's existing state (profile + memories)
state = load_state(user_id)

# 2. Build prompt: inject only relevant state
prompt = render_prompt(
  base_instructions,
  state.profile,  # structured data
  top_k(state.global_memory),  # most recent preferences
  state.session_memory,  # today's context (optional)
  memory_policy  # rules (e.g., "session overrides global")
)

# 3. Get AI response
assistant_response = call_model(prompt, user_input)

# 4. Extract new preferences from this conversation
candidate_notes = distill_memories(user_input, assistant_response)
state.session_memory += candidate_notes

# 5. At end of session: merge session notes into global, then clear
if session_end:
  state.global_memory = consolidate(
    state.global_memory,
    state.session_memory
  )
  state.session_memory = []  # wipe staging area

# 6. Save everything back to disk/DB
save_state(user_id, state)`}</code>
        </pre>
      </section>

      {/* How Each Framework */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          How Different Tools Implement This
        </h2>
        <p className="text-foreground/90 mb-6">
          The core idea works everywhere. Whether you use OpenAI, LangGraph,
          Google, or build it yourself, the five-stage pattern stays the same.
          Only the technical details change.
        </p>
        <p className="text-foreground/90 mb-6 italic">
          <strong>Note for non-developers:</strong> The next section gets
          technical. If you just wanted to understand the concept, you've got
          it. If you're building this, keep reading.
        </p>

        <blockquote className="border-l-4 border-accent pl-6 py-4 my-6 italic bg-accent/5 rounded-r-lg text-accent/90 font-medium shadow-sm">
          <strong>Full tutorials</strong> for each framework are coming soon.
          For now, here's a quick roadmap.
        </blockquote>

        <ol className="list-decimal list-outside my-8 space-y-8 ml-6">
          <li>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-accent/90">
              OpenAI Agents SDK - "State + Hooks + Tools"
            </h3>
            <p className="text-foreground/90 mb-3">
              <span className="font-semibold text-accent">Best for:</span> Teams
              already invested in OpenAI's ecosystem.
            </p>
            <p className="text-foreground/90 mb-6">
              <span className="font-semibold text-accent">Key strength:</span>{" "}
              The SDK makes state explicit and provides hooks at each lifecycle
              stage.
            </p>

            <div className="overflow-x-auto my-6 -mx-4 sm:mx-0">
              <table className="w-full text-xs sm:text-sm border-collapse border border-accent/20">
                <thead>
                  <tr className="bg-accent/5">
                    <th className="border border-accent/20 p-3 text-left font-semibold text-accent">
                      Stage
                    </th>
                    <th className="border border-accent/20 p-3 text-left font-semibold text-accent">
                      Implementation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-accent/5 transition">
                    <td className="border border-accent/20 p-3 font-semibold">
                      State
                    </td>
                    <td className="border border-accent/20 p-3 text-foreground/90">
                      A structured object (like AgentState) holding profile +
                      global/session memory
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition">
                    <td className="border border-accent/20 p-3 font-semibold">
                      Injection
                    </td>
                    <td className="border border-accent/20 p-3 text-foreground/90">
                      A hook that runs at conversation start, rendering YAML
                      profile + Markdown notes
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition">
                    <td className="border border-accent/20 p-3 font-semibold">
                      Distillation
                    </td>
                    <td className="border border-accent/20 p-3 text-foreground/90">
                      A tool the agent can call to write new memory notes
                    </td>
                  </tr>
                  <tr className="hover:bg-accent/5 transition">
                    <td className="border border-accent/20 p-3 font-semibold">
                      Consolidation
                    </td>
                    <td className="border border-accent/20 p-3 text-foreground/90">
                      An end-of-session job that merges notes and cleans up
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>

          <li>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-accent/90">
              LangGraph - "Memory Lifecycle as a Graph"
            </h3>
            <p className="text-foreground/90 mb-3">
              <span className="font-semibold text-accent">Best for:</span> Teams
              that like visual workflows and want to test each stage
              independently.
            </p>
            <p className="text-foreground/90 mb-6">
              <span className="font-semibold text-accent">Key strength:</span>{" "}
              Each memory stage is a node, making the flow explicit and
              debuggable.
            </p>

            <pre className="bg-accent/5 border border-accent/20 p-4 sm:p-6 rounded-lg overflow-x-auto text-xs sm:text-sm text-foreground/90">
              <code>
                [Load State] → [Inject Notes] → [Agent Loop] → [Distill] →
                [Consolidate] → [Save]
              </code>
            </pre>
          </li>

          <li>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-accent/90">
              Google ADK - "Cloud-Native + Managed Memory"
            </h3>
            <p className="text-foreground/90 mb-3">
              <span className="font-semibold text-accent">Best for:</span>{" "}
              Organizations on Google Cloud who want minimal infrastructure
              work.
            </p>
            <p className="text-foreground/90">
              <span className="font-semibold text-accent">Important note:</span>{" "}
              Even with a managed memory service, keep your{" "}
              <span className="font-semibold text-accent">
                authoritative state
              </span>{" "}
              in your own schema (profile + notes). Treat retrieval-based memory
              as{" "}
              <span className="font-semibold text-accent">advisory only</span>.
            </p>
          </li>

          <li>
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-accent/90">
              SDK-Free Baseline - "API Calls + Your Own Code"
            </h3>
            <p className="text-foreground/90 mb-3">
              <span className="font-semibold text-accent">Best for:</span>{" "}
              Learning the pattern, production systems with minimal
              dependencies, or custom requirements.
            </p>
            <p className="text-foreground/90 mb-4">
              This is what all frameworks reduce to:
            </p>
            <ul className="list-disc list-outside my-5 space-y-3 ml-6">
              <li className="text-foreground/90">state stored in a database</li>
              <li className="text-foreground/90">
                a prompt builder for the injection step
              </li>
              <li className="text-foreground/90">
                a second LLM call (or structured output parser) for distillation
              </li>
              <li className="text-foreground/90">
                a consolidation function to dedupe and forget
              </li>
            </ul>
          </li>
        </ol>
      </section>

      {/* Comparison */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          Compare & Contrast: Which Framework?
        </h2>

        <div className="overflow-x-auto my-6 -mx-4 sm:mx-0">
          <table className="w-full text-xs sm:text-sm border-collapse border border-accent/20">
            <thead>
              <tr className="bg-accent/5">
                <th className="border border-accent/20 p-3 text-left font-semibold text-accent">
                  Dimension
                </th>
                <th className="border border-accent/20 p-3 text-center font-semibold text-accent">
                  OpenAI SDK
                </th>
                <th className="border border-accent/20 p-3 text-center font-semibold text-accent">
                  LangGraph
                </th>
                <th className="border border-accent/20 p-3 text-center font-semibold text-accent">
                  Google ADK
                </th>
                <th className="border border-accent/20 p-3 text-center font-semibold text-accent">
                  SDK-Free
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-accent/5 transition">
                <td className="border border-accent/20 p-3 font-semibold">
                  Abstraction level
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Medium
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  High
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  High
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Low
                </td>
              </tr>
              <tr className="hover:bg-accent/5 transition">
                <td className="border border-accent/20 p-3 font-semibold">
                  State visibility
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  ⭐⭐⭐⭐⭐
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  ⭐⭐⭐⭐⭐
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  ⭐⭐⭐
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  ⭐⭐⭐⭐⭐
                </td>
              </tr>
              <tr className="hover:bg-accent/5 transition">
                <td className="border border-accent/20 p-3 font-semibold">
                  Boilerplate code
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Medium
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Medium
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Low
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  High
                </td>
              </tr>
              <tr className="hover:bg-accent/5 transition">
                <td className="border border-accent/20 p-3 font-semibold">
                  Deployment
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Anywhere
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Anywhere
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  GCP native
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Anywhere
                </td>
              </tr>
              <tr className="hover:bg-accent/5 transition">
                <td className="border border-accent/20 p-3 font-semibold">
                  Best use case
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Precise control
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Multi-step workflows
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  GCP-first teams
                </td>
                <td className="border border-accent/20 p-3 text-center text-foreground/90">
                  Learning + control
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Lessons */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          Key Lessons I Learned
        </h2>

        <ol className="list-decimal list-outside my-6 space-y-6 ml-6">
          <li className="text-foreground/90">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent/90 inline">
              Memory bugs are usually state bugs.
            </h3>
            <p className="text-foreground/90 mt-2">
              If an agent behaves oddly, the root cause is usually stale notes,
              missing conflict-resolution rules, or messy consolidation.
              Debugging state is easier than debugging the model.
            </p>
          </li>

          <li className="text-foreground/90">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent/90 inline">
              Forgetting is mandatory.
            </h3>
            <p className="text-foreground/90 mt-2">
              Memory stores grow noisy without aggressive pruning. Set TTLs,
              archive old notes, and delete low-confidence entries. Memory
              without forgetting becomes a liability.
            </p>
          </li>

          <li className="text-foreground/90">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent/90 inline">
              Frameworks don't solve memory design.
            </h3>
            <p className="text-foreground/90 mt-2">
              OpenAI SDK, LangGraph, Google ADK, or plain API calls - they're
              all vehicles for the same pattern. The{" "}
              <span className="font-semibold text-accent">
                architecture and safety rules
              </span>{" "}
              matter more than the framework.
            </p>
          </li>
        </ol>
      </section>

      {/* When NOT to Use */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          When NOT to Use Long-Term Memory
        </h2>
        <p className="text-foreground/90 mb-4">
          Honest reality: you probably don't need it if:
        </p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            Sessions are one-off tasks (each use is independent)
          </li>
          <li className="text-foreground/90">
            Personalization doesn't materially change the outcome
          </li>
          <li className="text-foreground/90">
            The memory adds security/privacy risk without clear value
          </li>
        </ul>

        <p className="mt-6 text-foreground/90 font-semibold">Simple test:</p>
        <blockquote className="border-l-4 border-accent pl-6 py-4 my-6 italic bg-accent/5 rounded-r-lg text-accent/90 font-medium shadow-sm">
          If remembering something from the last session wouldn't materially
          improve the next session, don't store it.
        </blockquote>

        <p className="text-foreground/90">
          A one-time request? No need to remember. A recurring preference that
          improves every session? Worth storing.
        </p>
      </section>

      {/* Key Takeaways */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          Key Takeaways
        </h2>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Five-stage lifecycle:
            </span>{" "}
            State → Inject → Distill → Consolidate → Forget
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">Explicit storage:</span>{" "}
            Treat memory as code, not magic
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">Precedence rules:</span>{" "}
            Define what overrides what (session &gt; global &gt; default)
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Aggressive pruning:
            </span>{" "}
            Memory without forgetting becomes noise
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">
              Framework-agnostic:
            </span>{" "}
            The pattern works everywhere
          </li>
        </ul>
      </section>

      {/* What's Next */}
      <section>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 mb-6 text-accent">
          What's Next?
        </h2>
        <p className="text-foreground/90 mb-6">Tutorials coming soon for:</p>
        <ul className="list-disc list-outside my-5 space-y-3 ml-6">
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">OpenAI Agents SDK</span>{" "}
            implementation + code examples
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">LangGraph</span>{" "}
            workflow with memory nodes
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">Google ADK</span>{" "}
            integration guide
          </li>
          <li className="text-foreground/90">
            <span className="font-semibold text-accent">SDK-Free baseline</span>{" "}
            from scratch
          </li>
        </ul>
      </section>
    </article>
  );
}
