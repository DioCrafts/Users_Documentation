import { defineConfig } from "vitepress";

// AXIOM — User Guide.
// This site documents what AXIOM does for the people who use it: analysts,
// reviewers, and administrators. It is intentionally non-technical — there is
// nothing here about how AXIOM is built. If you are looking for screens,
// workflows, and step-by-step recipes, you are in the right place.

export default defineConfig({
  title: "AXIOM User Guide",
  description: "How to investigate, analyze, and act with AXIOM — a guide for everyday users.",

  lastUpdated: true,
  cleanUrls: true,

  ignoreDeadLinks: true,

  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "FAQ", link: "/faq" },
    ],

    sidebar: {
      "/": [
        {
          text: "Getting started",
          items: [
            { text: "What is AXIOM?", link: "/guide/" },
            { text: "First steps", link: "/guide/getting-started" },
            { text: "Core concepts", link: "/guide/concepts" },
            { text: "Finding your way around", link: "/guide/navigation" },
          ],
        },
        {
          text: "Your workspace",
          items: [
            { text: "Projects", link: "/guide/projects" },
            { text: "The Library", link: "/guide/library" },
            { text: "Watchlists", link: "/guide/watchlists" },
          ],
        },
        {
          text: "Your data model",
          items: [
            { text: "The Ontology", link: "/guide/ontology" },
            { text: "Exploring objects & the 360° profile", link: "/guide/objects" },
            { text: "Data Catalog & glossary", link: "/guide/catalog" },
            { text: "Entity Resolution", link: "/guide/entity-resolution" },
          ],
        },
        {
          text: "Analyzing",
          items: [
            { text: "Graph & link analysis", link: "/guide/graph" },
            { text: "Geospatial & maps", link: "/guide/geospatial" },
            { text: "Dashboard & ad-hoc analysis", link: "/guide/analytics" },
          ],
        },
        {
          text: "Deciding & acting",
          items: [
            { text: "Alerts & Cases", link: "/guide/alerts-cases" },
            { text: "Rules", link: "/guide/rules" },
            { text: "Actions & approvals", link: "/guide/actions" },
            { text: "AI Copilot & agents", link: "/guide/ai" },
            { text: "Reports & Notepad", link: "/guide/reports" },
          ],
        },
        {
          text: "Bringing in data",
          items: [
            { text: "Sources & CSV import", link: "/guide/sources" },
            { text: "Pipelines & data health", link: "/guide/pipelines" },
            { text: "Drive & Models", link: "/guide/code-models" },
          ],
        },
        {
          text: "Governance & administration",
          items: [
            { text: "Governance, access & audit", link: "/guide/governance" },
            { text: "Administration", link: "/guide/administration" },
          ],
        },
        {
          text: "Reference",
          items: [
            { text: "Keyboard shortcuts", link: "/guide/keyboard-shortcuts" },
            { text: "FAQ", link: "/faq" },
          ],
        },
      ],
    },

    footer: {
      message: "AXIOM User Guide",
      copyright: "Internal documentation — for AXIOM users.",
    },
  },
});
