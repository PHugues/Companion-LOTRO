<template>
    <div id="app">
        <Navbar 
            :collapsed="collapsed"
            @toggle-collapse="onToggleCollapse"
        />
        <div id="content" :class="[{'collapsed' : collapsed}]">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    name: 'App',
    components: {
        Navbar
    },
    data() {
        return {
            collapsed: false,
        }
    },
    methods: {
        onToggleCollapse (collapsed) {
            this.collapsed = collapsed;
        }
    }
}
</script>

<style>
    #content {
        padding-left: 250px;
    }

    #content.collapsed {
        padding-left: 50px;
    }

</style>