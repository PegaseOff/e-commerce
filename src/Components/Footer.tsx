import { Footer, FooterBrand, FooterContent, FooterDivider, FooterNav, FooterNavGroup, FooterNavItem, FooterSocial, FooterSocialItem, FooterBottom, Icon } from "@pegaseoff/pegase-ds";
import { FaHorse } from "react-icons/fa";

export const FooterComponent = () => {
    return (
        <Footer variant="default">
        <FooterContent>
          <FooterBrand name="Pégase" description="Design system made with ♥" />
          <FooterNav>
            <FooterNavGroup title="Produit">
              <FooterNavItem href="/features">Fonctionnalités</FooterNavItem>
              <FooterNavItem href="/pricing">Tarifs</FooterNavItem>
              <FooterNavItem disabled>Roadmap</FooterNavItem>
            </FooterNavGroup>
            <FooterNavGroup title="Ressources">
              <FooterNavItem href="/docs">Documentation</FooterNavItem>
              <FooterNavItem href="/changelog">Changelog</FooterNavItem>
            </FooterNavGroup>
          </FooterNav>
          <FooterSocial>
            <FooterSocialItem href="https://github.com/PegaseOff" label="GitHub">
              <Icon variant='secondary' icon={FaHorse} />
            </FooterSocialItem>
          </FooterSocial>
        </FooterContent>
        <FooterDivider />
        <FooterBottom>
          <span>© 2026 Pégase. Tous droits réservés.</span>
        </FooterBottom>
      </Footer>
    )
}