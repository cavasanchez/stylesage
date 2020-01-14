<template>
  <v-content>
    <v-row>
      <v-col v-for="eachCat in catList" :key="eachCat.id">
        <CatDetail :catDetails="eachCat" />
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import CatDetail from "@/components/cat/CatDetail";
export default {
  props: ["catList"],
  components: { CatDetail }
};
</script>