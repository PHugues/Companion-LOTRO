<template>
    <sidebar-menu
        :menu="menu"
        :width="width"
        :collapsed="collapsed"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
      />
</template>

<script>
export default {
    data () {
        return {
            menu: [{
                header: true,
                title: 'LOTRO',
                hiddenOnCollapse: true
            },
            {
                href: '/',
                title: 'Home',
                icon: 'fa fa-home'
            },
            {
                href: '/characters',
                title: 'Characters',
                icon: 'fa fa-list'
            },
            {
                title: 'Parameters',
                icon: 'fa fa-cog',
                child: [
                    {
                        href: '/parameters/race',
                        title: 'Race',
                    },
                    {
                        href: '/parameters/class',
                        title: 'Class',
                    }
                ]
            }],
            width: '250px',
        }
    },
    methods: {
        onToggleCollapse(collapsed) {
            this.$emit("toggle-collapse", collapsed);
        }
    },
    props: {
        collapsed: {
            type: Boolean,
            default: false
        },
    }
}

</script>
