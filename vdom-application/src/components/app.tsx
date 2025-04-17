/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import { registerCustomElement } from "ojs/ojvcomponent";
import { h } from "preact";
import { useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content/index";
import { Route, Routes } from 'react-router-dom';

type Props = Readonly<{
  appName?: string;
  userLogin?: string;
  navList?: Array<Route>;
}>;

export const App = registerCustomElement(
  "app-root",
  ({ appName = "Employee", userLogin = "john.hancock@oracle.com" }: Props) => {
    useEffect(() => {
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
    }, []);

    const navList : Array<Route> = [
          { path: '', redirect: 'dashboard' },
          { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
          { path: 'incidents', detail: { label: 'Incidents', iconClass: 'oj-ux-ico-fire' } },
          { path: 'customers', detail: { label: 'Customers', iconClass: 'oj-ux-ico-contact-group' } },
          { path: 'about', detail: { label: 'About', iconClass: 'oj-ux-ico-information-s' } }
        ];
    
    return (
      <div id="appContainer" class="oj-web-applayout-page">
        <Header
          appName={appName} 
          userLogin={userLogin}
          navList={navList}
        />
        <Content />
        <Footer />
      </div>
    );
  }
);
