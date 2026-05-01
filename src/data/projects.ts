export const projects = [
	{
			slug: "policy-mesh",
			name: "Policy Mesh",
			label: "AI Governance",
			status: "Active",
			summary:
				"Deterministic AI control plane for auditable model routing across local and cloud providers.",
			overview:
				"Policy Mesh is a lightweight AI control plane that routes LLM requests between local and cloud providers based on explicit, deterministic policy.",
			overviewDetails: [
				"It acts as a governed gateway for AI usage, enabling teams to control where prompts are processed, enforce decision logic, and generate audit evidence without exposing raw data.",
			],
			problem:
				"Teams adopting LLMs lack control over where prompts are processed, how routing decisions are made, how to enforce cost, security, and compliance constraints, and what audit trail exists after a request is executed.",
			problemDetails: [
				"Most integrations rely on implicit logic or application-level decisions, which makes behavior difficult to reason about and hard to audit.",
			],
			approach:
				"Policy Mesh centralizes AI routing decisions behind a single service.",
			approachPoints: [
				"evaluates each request against policy rules",
				"deterministically selects a provider",
				"executes the request",
				"records a structured audit event",
				"exposes metrics for observability",
			],
			approachNote:
				"This separates application logic from governance and control, allowing consistent enforcement across systems.",
			keyCapabilities: [
				{
					title: "Deterministic Policy Engine",
					description:
						"Routes between Ollama and OpenAI using sensitivity signals, prompt characteristics, and configurable defaults, with explicit reason codes for every decision.",
				},
				{
					title: "Audit-First Design",
					description:
						"Persists structured audit events including prompt hash, metadata, decision, latency, and status without storing raw prompts by default.",
				},
				{
					title: "Operational Observability",
					description:
						"Exposes Prometheus-compatible metrics and structured logs for request volume, provider usage, latency, and failures.",
				},
				{
					title: "API-Driven Control Plane",
					description:
						"FastAPI service with endpoints for chat, health, audit retrieval, and metrics, with OpenAPI documentation.",
				},
				{
					title: "Configurable Development Model",
					description:
						"Supports configurable routing across local and cloud providers, with Docker-based dependencies for repeatable development.",
				},
			],
			currentState: [
				"End-to-end request flow implemented (/v1/chat) including decision, execution, audit persistence, and response handling.",
				"Integration tests validate the full request lifecycle.",
				"CI pipeline builds, tests, and runs the containerized service with health validation.",
				"Metrics and audit endpoints are operational.",
			],
			whyItMatters: [
				"Policy Mesh demonstrates how AI usage can be treated as a platform capability, not an application concern.",
				"It provides a foundation for governance and compliance controls, cost-aware model routing, configurable AI provider strategies, and standardized AI access patterns across teams.",
			],
			technologies: [
			"Python",
			"FastAPI",
			"Pydantic",
			"Postgres",
			"Alembic",
			"Ollama",
			"OpenAI",
			"Prometheus metrics",
			"Docker Compose",
			"GitHub Actions",
			"pytest",
		],
		links: [
			{ label: "GitHub repository", href: "https://github.com/liorabitbol/policy-mesh" },
			{
				label: "Architecture docs",
				href: "https://github.com/liorabitbol/policy-mesh/blob/main/docs/architecture.md",
			},
			{
				label: "Getting started",
				href: "https://github.com/liorabitbol/policy-mesh/blob/main/docs/getting_started.md",
			},
		],
	},
	{
			slug: "stacklayer",
			name: "StackLayer",
			label: "Platform Lab",
			status: "Active",
			summary:
				"Reproducible Kubernetes platform environment for validating infrastructure, GitOps, and observability patterns.",
			overview:
				"StackLayer is a locally reproducible platform lab that provisions a multi-node Kubernetes environment and incrementally layers core platform capabilities including networking, ingress, TLS, GitOps, and observability.",
			overviewDetails: [
				"It is designed to simulate production-like behavior on a local workstation, enabling safe validation of platform patterns, workflows, and operational models.",
			],
			problem:
				"Platform and infrastructure ideas are difficult to validate when they depend on multi-node Kubernetes scheduling behavior, ingress, TLS, networking configurations, GitOps-driven delivery workflows, and observability systems.",
			problemDetails: [
				"These capabilities are often only available in shared or production environments, increasing risk and slowing iteration.",
			],
			approach:
				"StackLayer creates a phased, reproducible environment that mirrors real platform architecture.",
			approachPoints: [
				"provisions infrastructure locally using virtual machines",
				"bootstraps a multi-node Kubernetes cluster",
				"incrementally installs platform primitives",
				"enables GitOps-based application delivery",
				"adds observability and monitoring layers",
			],
			approachNote:
				"This allows platform concepts to be tested end-to-end before production rollout.",
			keyCapabilities: [
				{
					title: "Multi-Node Kubernetes Environment",
					description:
						"Provisions a kubeadm-based cluster with control plane and worker nodes, enabling realistic scheduling and networking behavior.",
				},
				{
					title: "Platform Primitives Layer",
					description:
						"Installs core components including MetalLB, ingress-nginx, cert-manager, TLS, and storage to simulate production platform foundations.",
				},
				{
					title: "GitOps Integration",
					description:
						"Deploys ArgoCD to manage application delivery from Git repositories, enabling validation of GitOps workflows.",
				},
				{
					title: "Observability Stack",
					description:
						"Includes Prometheus, Grafana, Alertmanager, and supporting components for monitoring cluster and application behavior.",
				},
				{
					title: "Phased Build Model",
					description:
						"Infrastructure, platform, GitOps, and observability layers can be applied incrementally to support controlled experimentation.",
				},
				{
					title: "Repeatable Lifecycle",
					description:
						"Make-based workflows enable consistent provisioning, teardown, and validation across all phases.",
				},
			],
			currentState: [
				"Four phases implemented: Infrastructure, Platform Primitives, GitOps, and Observability.",
				"Three-node Kubernetes cluster provisioned via VMware and Vagrant.",
				"Production-like cluster setup using kubeadm, containerd, and Flannel CNI.",
				"ArgoCD deployed with ingress for Git-based application delivery.",
				"kube-prometheus-stack deployed for monitoring and visualization.",
				"Documentation includes architecture, setup, and example application deployment workflows.",
			],
			whyItMatters: [
				"StackLayer demonstrates how platform engineering concepts can be developed and validated in a controlled, reproducible environment.",
				"It provides a foundation for testing platform architectures before production, validating CI/CD and GitOps workflows, experimenting with observability and operational models, and reducing risk in platform and infrastructure changes.",
				"It reflects a platform-first approach to infrastructure, where environments are designed to enable learning, iteration, and system-level validation.",
			],
			technologies: [
			"Kubernetes",
			"kubeadm",
			"Vagrant",
			"VMware Workstation",
			"Ubuntu 22.04",
			"containerd",
			"Flannel",
			"MetalLB",
			"ingress-nginx",
			"cert-manager",
			"ArgoCD",
			"Prometheus",
			"Grafana",
			"Helm",
			"Make",
		],
		links: [
			{ label: "GitHub repository", href: "https://github.com/liorabitbol/stacklayer" },
			{
				label: "Architecture docs",
				href: "https://github.com/liorabitbol/stacklayer/blob/main/docs/architecture.md",
			},
			{
				label: "Prerequisites",
				href: "https://github.com/liorabitbol/stacklayer/blob/main/docs/prerequisites.md",
			},
			{
				label: "Tutorials",
				href: "https://github.com/liorabitbol/stacklayer/tree/main/docs/tutorials",
			},
		],
	},
	{
			slug: "linktuate",
			name: "Linktuate",
			label: "Developer Tooling (in progress)",
			status: "In progress",
			summary:
				"Website validation tool for structured analysis of site health and trust signals.",
			overview:
				"Linktuate is a planned website validation tool designed to analyze a given URL and surface common issues related to site health, trust, and discoverability.",
			overviewDetails: [
				"It focuses on providing a clear, structured view of problems that are often overlooked in day-to-day development and content updates.",
			],
			problem:
				"Website issues such as broken links, expired SSL certificates, and missing metadata are easy to miss until they begin to impact user experience, search visibility, and overall credibility.",
			problemDetails: [
				"These issues are often identified reactively rather than proactively, and existing tools tend to produce noisy or fragmented outputs.",
			],
			approach:
				"Linktuate is designed as a simple, focused validation tool.",
			approachPoints: [
				"scans a website starting from a root URL",
				"identifies common issues across links, security, and metadata",
				"aggregates findings into a structured report",
			],
			approachNote:
				"The goal is to make site health easy to understand without requiring deep technical analysis.",
			keyCapabilities: [
				{
					title: "Link Integrity Checks",
					description: "Detection of broken, invalid, or unreachable links.",
				},
				{
					title: "SSL Validation",
					description: "Inspection of certificate status and expiration.",
				},
				{
					title: "Metadata Analysis",
					description: "Identification of missing or inconsistent titles and descriptions.",
				},
				{
					title: "Basic SEO Signals",
					description: "Surface-level checks for discoverability issues.",
				},
				{
					title: "Structured Reporting",
					description: "Clear, organized output instead of raw crawler logs.",
				},
				{
					title: "Future Enhancements",
					description: "Historical scans, exportable reports, and deeper technical analysis.",
				},
			],
			whyItMatters: [
				"Validation should be simple, repeatable, and accessible, not buried in complex tooling.",
				"Linktuate demonstrates how common site health concerns can be surfaced in a way that is easy to understand, actionable, and consistent across use cases.",
				"While simple in scope, it aligns with developer tooling principles around clarity, feedback, and usability.",
			],
			technologies: ["Website scanning", "Link analysis", "SSL checks", "SEO signals", "Reporting"],
		},
	{
			slug: "terralens",
			name: "TerraLens",
			label: "Infrastructure Analysis (in progress)",
			status: "Coming soon",
			summary:
				"Terraform analysis tool for surfacing infrastructure risk before deployment.",
			overview:
				"TerraLens is a planned Terraform analysis tool designed to surface infrastructure risks before deployment.",
			overviewDetails: [
				"It focuses on making configuration, security, and governance issues visible during development rather than at apply time.",
			],
			problem:
				"Infrastructure-as-code changes often introduce security risks, misconfigurations, and policy violations that are difficult to detect during code review and are typically discovered late in the deployment process.",
			problemDetails: [
				"This creates delayed feedback, inconsistent standards, and increased operational risk.",
			],
			approach:
				"TerraLens is designed as a pre-deployment validation layer.",
			approachPoints: [
				"analyzes Terraform configurations and plans",
				"identifies risky patterns and misconfigurations",
				"evaluates code against defined rules and policies",
				"produces structured findings for developers",
			],
			approachNote:
				"The goal is to shift infrastructure validation earlier into the workflow, where issues are easier to understand and fix.",
			keyCapabilities: [
				{
					title: "Terraform Analysis",
					description: "Detection of misconfigurations, unsafe defaults, and anti-patterns.",
				},
				{
					title: "Policy Checks",
					description: "Rule-based validation aligned to organizational standards.",
				},
				{
					title: "Risk Classification",
					description: "Severity-based findings to prioritize remediation.",
				},
				{
					title: "Pre-Deployment Focus",
					description:
						"Designed to run before terraform apply as part of development workflows.",
				},
				{
					title: "Extensible Policy Model (Future)",
					description: "Support for reusable policy packs and customizable rules.",
				},
				{
					title: "CI/CD Integration (Future)",
					description: "Pipeline-based validation with pass/fail enforcement.",
				},
				{
					title: "Explainable Findings (Future)",
					description: "Clear reasoning and remediation guidance for each issue.",
				},
			],
			whyItMatters: [
				"Infrastructure validation should be part of the development workflow, not a post-deployment concern.",
				"TerraLens is intended to demonstrate how infrastructure governance can be consistent, automated, and developer-friendly.",
				"TerraLens complements linters and scanners by focusing on when and how infrastructure risk is surfaced in the development lifecycle.",
			],
			technologies: ["Terraform", "IaC analysis", "Policy checks", "Risk detection", "CI/CD"],
		},
] as const;

export type Project = (typeof projects)[number];
