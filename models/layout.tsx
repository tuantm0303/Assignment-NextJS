import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};
export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutProps) => ReactElement;
};
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};