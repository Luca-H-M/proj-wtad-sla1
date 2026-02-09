<template>
    <header>
        <nav>
            <ul>
                <li><RouterLink to="/">
                    <img alt="Vue logo" src="../assets/logo.png">
                </RouterLink></li>
                
                <li><RouterLink to="/cartao">Cartão</RouterLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header{
        background-color: whitesmoke;
        nav{
            align-items: center;
            margin: 1em;
            justify-content: space-between;
        }
        ul{
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            li{
                border-radius: 2rem;
                background-color: gray;
                color: black;
            }
        }
    }
</style>