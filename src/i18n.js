import { createContext, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";

const messages = {
  en: {
    titleLogin: "TOO GOOD TO GO",
    subTitleLogin: "Food Wasting Solution",
    enterEmail: "Enter Email",
    enterPassword: "Enter Password",
    forgotPassword: "Forgot Password",
    login: "Login",
    menu: "MENU",
    stores: "STORES",
    cart: "CART",
  },
  es: {
    titleLogin: "MUY BUENO PARA IR",
    subTitleLogin: "Solucion al Desperdicio de Comida",
    enterEmail: "Ingresa tu correo",
    enterPassword: "Ingresa tu Contraseña",
    forgotPassword: "Olvidaste tu contraseña",
    login: "Iniciar Sesion",
    menu: "MENU",
    stores: "TIENDAS",
    cart: "CARRITO DE COMPRAS",
  },
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLocale = localStorage.getItem("locale") || "en";
  const [locale, setLocale] = useState(storedLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const switchLanguage = (lang) => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
