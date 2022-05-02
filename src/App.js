
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './pages/PageLayout/PageLayout';
import Experiance from './pages/Experiance/Experiance';
import { IntlProvider } from 'react-intl';
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import { useState } from 'react';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  const [lang,setLang] = useState(LOCALES.RUSSIAN)
    const locale = lang
    console.log(lang)
  return (
  <IntlProvider messages={messages[locale]}
  locale = {locale}>
    <Routes>
        <Route element={<PageLayout lang={lang} setlang={setLang}/>}>
          <Route index element={<AboutMe value={lang}/>} />
          <Route path='experiance' element={<Experiance/>}/>
        </Route>
    </Routes>
    </IntlProvider>
  );
}

export default App;
