import React from "react";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { mount as shopifyMount } from "@shopify/react-testing";

export default function mount(component) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  return shopifyMount(
    <AppProvider i18n={translations}>{component}</AppProvider>
  );
}
