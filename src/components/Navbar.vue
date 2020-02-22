<template>
    <sidebar-menu
        :menu="menu"
        :width="width"
        :collapsed="collapsed"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
</template>

<script>
export default {
    data () {
        return {
            menu: [{
                header: true,
                title: this.$t('navbar.title'),
                hiddenOnCollapse: true
            },
            {
                href: '/',
                title: this.$t('navbar.home'),
                icon: 'fa fa-home'
            },
            {
                href: '/characters',
                title: this.$t('navbar.characters'),
                icon: 'fa fa-list'
            },
            {
                title: this.$t('navbar.parameters'),
                icon: 'fa fa-cog',
                child: [
                    {
                        href: '/parameters/race',
                        title: this.$t('navbar.race'),
                    },
                    {
                        href: '/parameters/class',
                        title: this.$t('navbar.class'),
                    }
                ]
            }],
            width: '250px',
        }
    },
    methods: {
        onToggleCollapse(collapsed) {
            this.$emit("toggle-collapse", collapsed);
        },
        onItemClick() {
            // Do nothing
        },
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        },
    },
}

</script>
