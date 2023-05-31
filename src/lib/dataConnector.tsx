import rolesData from "@/data/roles.json";
import faqData from "@/data/faq.json";

export function getRoleData() {
  return rolesData.roles;
}

export function getFAQData() {
  return faqData.faqs;
}
