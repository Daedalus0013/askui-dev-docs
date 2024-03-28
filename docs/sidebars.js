/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSidebar: [{ type: 'autogenerated', dirName: 'general' }],
  apiSidebar: [{ type: 'autogenerated', dirName: 'api' }],

  // But you can create a sidebar manually
  docsSidebar: [
    {
      type: 'doc',
      id: 'general/Getting Started/start',
      label: 'Home',
      className: 'menu_category_home',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'general/Getting Started/guide-how-askui-works',
        {
          type: 'category',
          label: 'Installing AskUI',
          collapsed: true,
          className: 'menu_category_installing_askui',
          items: [
            'general/Getting Started/Installing AskUI/getting-started',
            'general/Getting Started/Installing AskUI/getting-started-linux',
            'general/Getting Started/Installing AskUI/getting-started-macos',
            'general/Getting Started/Installing AskUI/getting-started-android',
            'general/Getting Started/Installing AskUI/enterprise-checklist',
          ],
        },
        'general/Getting Started/write-your-first-instruction',        
        'general/Getting Started/whats-next'
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      className: 'menu_category_guides',
      items: [
        {
          type: 'category',
          label: 'How to Select Elements',
          collapsed: true,
          className: 'menu_category_element_selection',
          items: [
            'general/Element Selection/text-and-element-selectors',
            'general/Element Selection/relational-selectors',
            'general/Element Selection/scraping-and-storing-lements',
            'general/Element Selection/assertions',
          ],
        },
        'general/Executing Automations/mobile-automation',
        'general/Executing Automations/multi-device-automation',
        'general/Element Selection/annotations-and-screenshots',
        {
          type: 'category',
          label: 'Examples',
          collapsed: true,
          className: 'menu_category_examples',
          items: [
            'general/Tutorials/android-search-in-browser',
            'general/Tutorials/flutter-android-sample-app',
            'general/Tutorials/google-cat-search',
            'general/Tutorials/index',
            'general/Tutorials/shop-demo',
            'general/Tutorials/spotify-tutorial',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'AskUI Controller',
      collapsed: true,
      className: 'menu_category_askui_controller',
      items: [
        {
          type: 'doc',
          id: 'general/Components/AskUI-Controller',
          label: 'Introduction',
        },
        'general/Components/Supported-Keys',
        'general/Components/askui-ui-control-client',
        'general/Components/askui-ui-controller',
      ],
    },
    {
      type: 'category',
      label: 'AskUI Development Kit',
      collapsed: true,
      className: 'menu_category_askui_development_kit',
      items: [
        'general/Components/AskUI-Development-Environment',
      ],
    },
    {
      type: 'category',
      label: 'AskUI Packages',
      collapsed: true,
      className: 'menu_category_askui_packages',
      items: [
        'general/Components/AskUI-Runner'
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      className: 'menu_category_integrations',
      items: [
        {
          type: 'category',
          label: 'Reporting',
          collapsed: true,
          className: 'menu_category_reporting',
          items: [
            'general/Integrations/reporting',
            'general/Integrations/allure-reporting',
            'general/Integrations/html-reporting',
            'general/Integrations/xray-reporting',
            'general/Integrations/annotation-reporting',
          ],
        },
        'general/Integrations/visual-regression',
        'general/Integrations/continuous-integration',
        'general/Integrations/containers',
        'general/Integrations/SSO',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      className: 'menu_category_troubleshooting',
      items: [
        'general/Troubleshooting/cannot_find_element_error',
        'general/Troubleshooting/deprecated-endpoints',
        'general/Troubleshooting/index',
        'general/Troubleshooting/ipv6',
        'general/Troubleshooting/jest',
        'general/Troubleshooting/linux',
        'general/Troubleshooting/mac-os',
        'general/Troubleshooting/proxy',
        'general/Troubleshooting/windows',
      ],
    },
    {
      type: 'doc',
      id: 'general/Terminology',
      className: 'menu_category_terminology',
    },
    {
      type: 'link',
      label: 'Release Notes',
      href: '/release-notes',
      className: 'menu_category_release_notes' 
    }
  ],
};

module.exports = sidebars;
