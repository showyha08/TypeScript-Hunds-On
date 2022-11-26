<script lang="tsx">
  import { VNode } from "vue";
  import { Vue } from "vue-class-component";

  export default class HelloWorld extends Vue {
    msg = "Vue sample.";
    val = 1;

    doAction(): void {
      this.val += 1;
    }
    render(): VNode {
      return (
        <div>
          <h1 class="bg-info text-white p-2">{this.msg}</h1>
          <div class="container">
            <h2 class="my-3">number counter.</h2>
            <div class="alert alert-info">
              <h3 onClick={this.doAction}>{this.val}</h3>
            </div>
          </div>
        </div>
      );
    }
  }
</script>
