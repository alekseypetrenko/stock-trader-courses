<template>
    <table>
        <thead>
            <tr>
                <th>Day</th>
                <th>Price</th>
            </tr>
        </thead>
            <tbody>
            <tr v-for="(price, index) in savedProducts" :key="index">
                <td>{{index+1}}</td>
                <td>{{price}}</td>
            </tr>
            </tbody>
    </table>
</template>

<script>
export default {
  props: ["savedProducts"],
}
</script>

<style scoped>
table {
      table-layout: fixed;
  width: 100%;  
    border-collapse: collapse;
  border: 1px solid black;
}


th,td {
  border: 1px solid black;
    text-align: center; 
    vertical-align: middle;
}

td {
  
  text-align: center; 
    vertical-align: middle;
}


</style>