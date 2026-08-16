import { LazyMotion, domAnimation } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import I18nProvider from "./i18n/I18nProvider";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    /* LazyMotion + the `m` component ships only the animation features this
       site actually uses, keeping the Framer Motion payload small.
       `strict` fails loudly in dev if a full `motion.*` component sneaks in. */
    <I18nProvider>
      <LazyMotion features={domAnimation} strict>
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main id="main">
          <Hero />
          <Projects />
          <Services />
          <Skills />
          <About />
          <Contact />
        </main>

        <Footer />
      </LazyMotion>
    </I18nProvider>
  );
}
