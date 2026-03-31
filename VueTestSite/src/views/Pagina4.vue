<template>
  <div>
    <h1>Dit is Pagina 4</h1>
    <p>Welkom op de vierde pagina.</p>
  </div>

  <ul>
    <li v-for="food in foods" :key="food">
      {{ food }}
    </li>
  </ul>
  <ol start="1">
    <li v-for="naam in namen" :key="namen">
      {{ naam }}
    </li>
  </ol>
</template>

<script setup>
const foods = ['Pizza', 'Hamburger', 'Patat', 'lasagne', 'Rode kool schotel', 'Spaghetti', 'Baklava', 'Pasta Bolognese', 'Bami']
const namen = ['Max', 'Damien', 'Rafaël', 'Wubbo', 'André', 'Mick', 'Milan', 'Simon', 'Jan-jaap', 'Brian', 'Aymen', 'Tycho', 'Kaj', 'Dylan']
</script>