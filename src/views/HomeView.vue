<template>
  <figure>
    <img src="../assets/pizza1.png" alt="pizza">
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
      <ol>
        <li><img src="../assets/pizza1.png" alt="pizza"></li>
        <li><img src="../assets/pizza1.png" alt="pizza"></li>
        <li><img src="../assets/pizza1.png" alt="pizza"></li>
      </ol>
    </nav>
  </body>
  

</template>

<style scoped>
  figure{
    position: absolute;
    width: 100%;
    max-height: 3rem;
    z-index: -1;
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
    background-color: white;
  }
  ul{
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    li{
      border-radius: 5rem;
      margin: auto;
      background-color: gray;
    }
  }
  ol{
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    li{
      max-width: 10rem;
    }
  }
</style>
