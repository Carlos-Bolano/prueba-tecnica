import { AddOn, Plan } from "./types";

export const typeOfPlan: Plan[] = [
  {
    id: 1,
    name: "arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    image: "/images/icon-arcade.svg",
  },
  {
    id: 2,
    name: "advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    image: "/images/icon-advanced.svg",
  },
  {
    id: 3,
    name: "pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    image: "/images/icon-pro.svg",
  },
];

export const addOns: AddOn[] = [
  {
    id: 1,
    name: "online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    name: "larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    name: "customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
export const steps = [
  {
    name: "Step 1",
    text: "Your info",
    route: "/",
  },
  {
    name: "Step 2",
    text: "Select plan",
    route: "/step-2",
  },
  {
    name: "Step 3",
    text: "Add-ons",
    route: "/step-3",
  },
  {
    name: "Step 4",
    text: "Summary",
    route: "/step-4",
  },
];
