<svelte:options tag="button-element" />

<script>
  export let name = 'world';
  export let prop1 = 0;

  function changeNumbers() {
    prop1 += 1;
  }
</script>

<style type="text/scss">
  @import '../scss/buttons';
</style>

<h1>
  {name}
</h1>
<button on:click={changeNumbers}>
  Prueba
</button>
<div>
  {prop1}
</div>

