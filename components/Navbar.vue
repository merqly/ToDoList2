<template>
<nav class="navbar">
        <a class="navLinks" id="homePage" href="/">ToDo List</a>
        <a class="navLinks" href="/addtask">Add Task</a>
</nav>
</template>

<style>
.navbar {
    background: rgb(24,27,43);
    box-shadow: 0 1px 5px -2px rgba(0,0,0,.45);
    height: 50px;
    border-radius: 10px;
}
.navLinks {
    padding: 5px;
    line-height: 2.1;
    text-decoration: none;
    text-align: left;
    font-family: 'Calibri';
    font-weight: bold;
    font-size: 19px;
    color: rgba(120, 140, 255, 0.575);
    transition: color 0.3s;
}
.navLinks:hover{
    color: rgb(120, 140, 255);
}
#homePage {
    padding: 20px;
    color: rgb(158, 172, 255);
    font-size: 23px;
}
</style>