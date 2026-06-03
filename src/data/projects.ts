export const projects = [
	{
		slug: "policy-mesh",
		name: "Policy Mesh",
		label: "AI Governance",
		status: "Active",
		summary:
			"Governed AI control plane for observable, policy-driven access to local and cloud-based LLMs.",
	},
	{
		slug: "stacklayer",
		name: "StackLayer",
		label: "Platform Lab",
		status: "Active",
		summary:
			"Reproducible platform engineering environment for exploring IDP, GitOps, observability, and DevEx patterns.",
	},
	{
		slug: "linktuate",
		name: "Linktuate",
		label: "Developer Tooling",
		status: "In progress",
		summary:
			"Website validation tool for structured analysis of site health and trust signals.",
	},
	{
		slug: "terralens",
		name: "TerraLens",
		label: "Infrastructure Analysis",
		status: "Coming soon",
		summary:
			"Terraform analysis tool for surfacing infrastructure risk before deployment.",
	},
] as const;

export type Project = (typeof projects)[number];
