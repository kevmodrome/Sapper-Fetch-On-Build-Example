<script>
  export let segment;
</script>

<style>
  .card {
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 10px 10px 36px -15px rgba(0, 0, 0, 0.5);
  }
  .main {
    padding: 20px 0;
  }
  .header {
    color: rebeccapurple;
  }
  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    border-width: 80%;
    padding-top: 20px;
  }
</style>

<div class="card">
  <div class="header">
    <slot name="header" />
  </div>
  <div class="main">
    <slot>Main</slot>
  </div>
  <div class="footer">
    <slot name="footer">Footer</slot>

  </div>
</div>
