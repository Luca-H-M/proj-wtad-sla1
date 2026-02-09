<template>
  <figure>
    <img src="../assets/logo.png" alt="pizza">
  </figure>
  <body>
    <h1>Pizzaria Glutoza</h1>

    <p>pizzas de todos os sabores e tipos só para você</p>

    <nav>
      <ul>
          <li><router-link to="/cardapio">Cardapio</router-link></li>
          <li><router-link to="/locais">Locais</router-link></li>
          <li><router-link to="/pizzas">Pizzas mais famosas</router-link></li>
      </ul>
    </nav>
  </body>
  

</template>

<style scoped>
  figure{
    position: absolute;
    width: 100%;
    max-height: 3rem;
  };
  h1{
    border-radius: 10px;
    background-color: rgba(128, 128, 128, 0.5);
    color: black;
    margin: auto;
  }
  p{
    margin: 3rem;
    border-radius: 30px;
  }
</style>
