<template>
    <div class="page pa-5">
        <h1>Elevate Your Writing</h1>
        <p class="sub-title">
            Go beyond grammar. Choose a plan to ensure everything you write is
            clear, engaging, and polished.
        </p>
        <div class="plans-card mt-10">
            <div class="basic plan" v-for="plan in plans" :key="plan.name">
                <h2>{{ plan.name }}</h2>
                <p>{{ plan.desc }}</p>

                <div class="price mt-10">
                    <div>Starting at</div>
                    <div class="bold font-10">
                        ${{ plan.money.toFixed(2) }} USD
                    </div>
                    <div>/ month</div>
                </div>
                <v-btn
                    class="mb-5 mt-6"
                    size="large"
                    block
                    color="primary"
                    @click="$router.push('/payment')"
                >
                    Get Started
                </v-btn>
                <ul class="features">
                    <li
                        v-for="fea in plan.features"
                        :key="fea.name"
                        class="pointer feature flex align-center"
                    >
                        <v-icon icon="mdi-check" color="primary" class="mr-2">
                        </v-icon>
                        <v-tooltip
                            v-if="fea.desc.text"
                            :text="fea.desc.text"
                            location="bottom left"
                            content-class="fea-desc"
                        >
                            <template v-slot:activator="{ props }">
                                <span
                                    v-bind="props"
                                    :class="{
                                        'has-desc-item': !!fea.desc.text,
                                        'font-weight-bold': !fea.desc.text,
                                    }"
                                >
                                    {{ fea.name }}
                                </span>
                            </template>
                        </v-tooltip>
                        <span
                            v-else
                            :class="{
                                'has-desc-item': !!fea.desc.text,
                                'font-weight-bold': !fea.desc.text,
                            }"
                        >
                            {{ fea.name }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mv-20">
            <h2 class="mb-8">Frequently Asked Questions</h2>
            <v-expansion-panels>
                <v-expansion-panel
                    v-for="item in list"
                    :key="item.question"
                    :title="item.question"
                    :text="item.answer"
                ></v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const BASIC = "Basic";
const Premium = "Premium";

const plans = [
    {
        name: BASIC,
        desc: "Basic writing suggestions and tone detection",
        money: 12,
        features: [
            {
                name: "Grammar",
                desc: {
                    imgUrl: null,
                    text: "Fix grammatical errors.",
                },
            },
            {
                name: "Spelling",
                desc: {
                    imgUrl: null,
                    text: "Fix spelling errors.",
                },
            },
            {
                name: "Punctuation",
                desc: {
                    imgUrl: null,
                    text: "Fix punctuation errors.",
                },
            },
            {
                name: "Conciseness",
                desc: {
                    imgUrl: null,
                    text: "Fix punctuation errors.",
                },
            },
            {
                name: "Tone detection",
                desc: {
                    imgUrl: null,
                    text: "Fix punctuation errors.",
                },
            },
        ],
    },
    {
        name: Premium,
        desc: "Clarity, vocabulary, and tone improvements",
        money: 20,
        features: [
            {
                name: "Everything in Free",
                desc: {
                    imgUrl: null,
                    text: null,
                },
            },
            {
                name: "Word choice",
                desc: {
                    imgUrl: null,
                    text: "Fix spelling errors.",
                },
            },
            {
                name: "Full-sentence rewrites",
                desc: {
                    imgUrl: null,
                    text: "Fix spelling errors.",
                },
            },
            {
                name: "Tone suggestions",
                desc: {
                    imgUrl: null,
                    text: "Fix spelling errors.",
                },
            },
            {
                name: "Citations",
                desc: {
                    imgUrl: null,
                    text: "Fix spelling errors.",
                },
            },
        ],
    },
];

const list = [
    {
        question:
            "What’s the difference between Grammarly Premium and Grammarly Business?",
        answer: "Grammarly Premium is built for individuals, while Grammarly Business is built for teams. With Grammarly Premium, individuals can up-level their communication at work, school, or elsewhere. With Grammarly Business, enterprises, organizations, and teams can access additional features for consistent communication and additional security.",
    },
    {
        question: "How secure is Grammarly?",
        answer: "Grammarly keeps security at the heart of our product, infrastructure, and company operations. Learn more about our security practices. Grammarly’s SOC 2 (Type 2) report attests to our enterprise-grade system and organization controls regarding security, privacy, availability, and confidentiality.",
    },
    {
        question: "Do you have any volume discounts?",
        answer: "Yes! We offer volume discounts on annual plans for 10 or more members. The discount is automatically applied if you use our self-checkout process. Contact sales if you’re buying a plan for 150 or more members.",
    },
    {
        question: "What forms of payment do you accept?",
        answer: "We accept major credit cards (Visa, American Express, Mastercard, Discover) or PayPal. If you are purchasing Grammarly Business for 10 or more members on an annual plan, you can request an invoice. Invoices can be paid by bank transfer (ACH/Wire), major credit cards, Apple Pay, and Google Pay. Note: PayPal cannot be used to pay invoices.",
    },
    {
        question: "Do you offer discounts for educational institutions?",
        answer: "Yes! Learn more about our discounts for educational institutions.",
    },
];

const currentPlan = ref(BASIC);
</script>

<style lang="scss" scoped>
.page {
    max-width: 1000px;
    margin: 5vh auto;

    h1 {
        font-size: 42px;
        letter-spacing: -0.005em;
        line-height: 52px;
    }

    .sub-title {
        font-size: 18px;
        margin-top: 24px;
    }

    .plans-card {
        border: 1px solid #cdd1dc;
        border-radius: 8px;
        display: flex;

        .plan {
            flex: 1;
            padding: 24px 40px;

            &:nth-child(2) {
                border-left: 1px solid #cdd1dc;
            }

            .features {
                .feature {
                    margin-bottom: 8px;
                    margin-left: 20px;
                    list-style: none;
                    margin-left: 0;

                    span {
                        position: relative;
                    }
                }

                .has-desc-item:after {
                    background-image: linear-gradient(
                        90deg,
                        #9fa6bf 33%,
                        transparent 0
                    );
                    background-position: bottom;
                    background-repeat: repeat-x;
                    background-size: 3px 1px;
                    content: "";
                    display: block;
                    height: 1px;
                    left: 0;
                    position: absolute;
                    top: 100%;
                    width: 100%;
                }
            }
        }
    }
}
</style>

<style>
.fea-desc {
    background-color: rgb(52, 57, 82) !important;
    text-align: left !important;
    font-weight: bold !important;
}
</style>
