
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './pages/PageLayout/PageLayout';
import { IntlProvider } from 'react-intl';
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useState } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';

function App() {
  const [lang,setLang] = useState(LOCALES.RUSSIAN)
    const locale = lang
  return (
  <IntlProvider messages={messages[locale]}
  locale = {locale}>
    <Routes>
        <Route element={<PageLayout lang={lang} setlang={setLang}/>}>
          <Route index element={<AboutMe value={lang}/>} />
          <Route path='skills' element={<Skills/>}/>
        </Route>
    </Routes>
    </IntlProvider>
  );
}

export default App;
