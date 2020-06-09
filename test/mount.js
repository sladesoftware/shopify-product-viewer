import React from "react";
import { Container } from "next/app";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import { mount as shopifyMount } from "@shopify/react-testing";

export default function mount(component) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  return shopifyMount(
    <Container>
      <AppProvider i18n={translations}>{component}</AppProvider>
    </Container>
  );
}
