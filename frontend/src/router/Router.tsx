// External Imports
import React, { Fragment } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

// Internal Imports
import { CreditsPage } from "pages/CreditsPage/CreditsPage";
import { Demo } from "pages/Demo/Demo";
import DemoTailwind from "pages/Demo/DemoTailwind";
import { NotFoundPage } from "pages/NotFoundPage/NotFoundPage";
import { LandingPage } from "pages/LandingPage/LandingPage";
import {
  QualifierPage,
  QualifierContent,
  loader as qualifierLoader,
} from "pages/QualifierPage/QualifierPage";
import AuthenticationPage from "pages/Authentication/page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<AuthenticationPage />} />
      <Route path="/signup" element={<AuthenticationPage />} />
      <Route path="qualifier/" element={<QualifierPage />}>
        <Route
          path=":page/"
          element={<QualifierContent />}
          loader={qualifierLoader}
        />
      </Route>
      <Route path="/demo" element={<Demo />} />
      <Route path="/demo-tailwind" element={<DemoTailwind />} />
      <Route path="/credits" element={<CreditsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Fragment>
  )
);

export default router;