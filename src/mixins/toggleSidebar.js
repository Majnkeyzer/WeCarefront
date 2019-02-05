export const toggleSidebar = {
  props: {
    sidebarVisible: Boolean
  },
  methods: {
    toggleSidebar() {
      this.$emit("toggle-sidebar");
    }
  }
};
