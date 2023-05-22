<template>
  <section class="main-layout manage">
    <!-- <div>Dev info - layout/manage.vue</div> -->

    <!-- header -->

    <header>
      <div>
        <span>Manage Header</span>
      </div>
    </header>

    
    <!-- header -->

    <!-- content -->
    <router-view />
    <!-- content -->

    <!-- footer -->
    <div>
      <span>Manage Footer</span>
    </div>
    <!-- footer -->
  </section>
</template>

<script>
export default {
  name: "layout-manage",
};
</script>

<style scoped="">
</style>

