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

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header>
        <h3 className={styles.headerTopTitle}>
          <span className={styles.headerTopTitleVital}>Socket</span> IO
        </h3>
      </header>
      <MessageForm />
      <footer className={styles.footer}>
        <a href="https://github.com/jvidalv">
          Rabin Thapa @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default App;
