import Logos from "components/atoms/logos";
import Card from "components/organisms/card";
import {
  BeakerIcon,
  BookmarkAltIcon,
  CakeIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  FilmIcon,
  LocationMarkerIcon,
  LockClosedIcon,
  MenuIcon,
  PencilIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import Button from "components/atoms/button";
import CopyButton from "components/molecules/copy-button";

import styles from "./app.module.css";
import MessageForm from "components/organisms/form";
import Sidebar from "components/organisms/side-bar";
import HomePage from "../../src/pages/home-page";

import LoginPage from "pages/login-page";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "src/pages/dashboard";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <main className={styles.main}>
          {/* <MessageForm /> */}
          {/* <Sidebar /> */}
          {/* <HomePage /> */}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;

// <footer className={styles.footer}>
//   <a href="https://github.com/jvidalv">
//     Rabin Thapa @ {new Date().getFullYear()}
//   </a>
// </footer>
