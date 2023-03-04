<template>
    <header>
        <h1>My Profile</h1>
        <nav>
            <base-button mode="flat" link to="/profile">Profile</base-button>
            <base-button mode="flat" link to="/about">About</base-button>
            <base-button mode="flat" link to="/works">Works</base-button>
            <base-button mode="flat" link to="/contact">Contact</base-button>
        </nav>
    </header>
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>