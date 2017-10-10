((() => {
  const html = `
<div>
    <button @click="toggleDiv()">Toggle</button>
    <fade-transition :duration="500">
      <div v-if="showDiv">
        <h1>Linda Belcher</h1>
      </div>
    </fade-transition>
</div>
  `
 
  Vue.component("app", {
    template: html,
    data() {
      return {
        showDiv: false,
      }
    },
    methods: {
      toggleDiv() {
        this.showDiv = !this.showDiv
      }
    }
  })
}))()