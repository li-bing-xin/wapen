<template>
  <div class="page">
    <h1 class="mb-8">Frequently Asked Questions</h1>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="item in list"
        :key="item.question"
        :title="item.question"
        :text="item.answer"
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
const list = [
  {
    question:
      "What’s the difference between Grammarly Premium and Grammarly Business?",
    answer:
      "Grammarly Premium is built for individuals, while Grammarly Business is built for teams. With Grammarly Premium, individuals can up-level their communication at work, school, or elsewhere. With Grammarly Business, enterprises, organizations, and teams can access additional features for consistent communication and additional security.",
  },
  {
    question: "How secure is Grammarly?",
    answer:
      "Grammarly keeps security at the heart of our product, infrastructure, and company operations. Learn more about our security practices. Grammarly’s SOC 2 (Type 2) report attests to our enterprise-grade system and organization controls regarding security, privacy, availability, and confidentiality.",
  },
  {
    question: "Do you have any volume discounts?",
    answer:
      "Yes! We offer volume discounts on annual plans for 10 or more members. The discount is automatically applied if you use our self-checkout process. Contact sales if you’re buying a plan for 150 or more members.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept major credit cards (Visa, American Express, Mastercard, Discover) or PayPal. If you are purchasing Grammarly Business for 10 or more members on an annual plan, you can request an invoice. Invoices can be paid by bank transfer (ACH/Wire), major credit cards, Apple Pay, and Google Pay. Note: PayPal cannot be used to pay invoices.",
  },
  {
    question: "Do you offer discounts for educational institutions?",
    answer: "Yes! Learn more about our discounts for educational institutions.",
  },
];
</script>

<style lang="scss" scoped>
.page {
  max-width: 600px;
  margin: 5vh auto;
}
</style>
