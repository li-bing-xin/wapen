<template>
  <div class="page pa-5">
    <h1>Elevate Your Writing</h1>
    <p class="sub-title">
      Go beyond grammar. Choose a plan to ensure everything you write is clear,
      engaging, and polished.
    </p>
    <div class="plans-card mt-10">
      <div class="basic plan" v-for="plan in plans" :key="plan.name">
        <h2>{{ plan.name }}</h2>
        <p>{{ plan.desc }}</p>
        <v-btn class="mb-2 mt-6" size="large" block color="primary">
          Get Started
        </v-btn>
        <ul class="features">
          <li
            v-for="fea in plan.features"
            :key="fea.name"
            class="pointer feature flex align-center"
          >
            <v-icon icon="mdi-check" color="primary" class="mr-2"> </v-icon>
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
    ],
  },
  {
    name: Premium,
    desc: "Clarity, vocabulary, and tone improvements",
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
    ],
  },
];

const currentPlan = ref(BASIC);
</script>

<style lang="scss" scoped>
.page {
  max-width: 800px;
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
          background-image: linear-gradient(90deg, #9fa6bf 33%, transparent 0);
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
