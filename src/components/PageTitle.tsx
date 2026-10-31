import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Soffia Visual";

const TITLES: Record<string, string> = {
  "/": `${SITE_NAME} | Fotografia em Cuiabá`,
  "/sobre": `Sobre | ${SITE_NAME}`,
  "/servicos": `Serviços | ${SITE_NAME}`,
  "/portfolio": `Portfólio | ${SITE_NAME}`,
  "/blog": `Blog | ${SITE_NAME}`,
  "/contato": `Contato | ${SITE_NAME}`,
};

/** Atualiza o título da aba conforme a rota atual. */
const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] ?? `Página não encontrada | ${SITE_NAME}`;
  }, [pathname]);

  return null;
};

export default PageTitle;
