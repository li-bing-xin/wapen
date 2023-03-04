<template>
  <div class="page">
    <main class="flex flex-column align-center">
      <!-- <h1 class="text-center mv-20">Choose Your Plan</h1> -->

      <v-card title="Payment" :width="600" class="mv-15">
        <div class="pa-10">
          <v-tabs v-model="tab" align-tabs="center" class="mb-10">
            <v-tab :value="1">PayPal</v-tab>
            <v-tab :value="2">Credit Card</v-tab>
          </v-tabs>

          <div v-if="tab === 2">
            <v-form>
              <div>Card Number</div>
              <v-text-field color="primary" variant="outlined"></v-text-field>

              <div>Country/Region</div>
              <v-select
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
                variant="outlined"
                color="primary"
              ></v-select>

              <div class="flex" style="gap: 10px">
                <div class="flex-1">
                  <div>Expiration Date</div>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                  ></v-text-field>
                </div>

                <div class="flex-1">
                  <div>Security Code</div>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                  ></v-text-field>
                </div>

                <div class="flex-1">
                  <div>Postal Code (Optional)</div>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                  ></v-text-field>
                </div>
              </div>
            </v-form>
          </div>

          <v-btn color="primary" class="mb-4" size="large" block>
            Check Out
          </v-btn>
        </div>
      </v-card>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const plans = [
  {
    name: "Annual",
    money: 12,
  },
];

const tab = ref(2);
</script>

<style lang="scss" scoped>
.page {
  padding: 0 80px;

  .plan {
    width: 200px;
    padding: 20px;
    border: 1px solid blue;
  }
}
</style>
