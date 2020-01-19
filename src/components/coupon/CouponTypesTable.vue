<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Coupon Type</th>
          <th class="text-left">Num Coupons</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(coupons,type) in couponsType" :key="type">
          <td>{{ type }}</td>
          <td>{{ coupons.length}}</td>
        </tr>
       
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: ["couponsType"]
};
</script>