<template>
  <el-dialog
    title="关于"
    class="about__dialog"
    :visible="value"
    @close="$emit('input', false)"
    width="30%"
    center
  >
  <div class="body">
    <div style="text-align: center;">
      <h3>一款高度简洁的 Markdown 在线编辑器</h3>
    </div>
    <div style="text-align: center; margin-top: 10px;margin-bottom:20px">
      <p>作者：Tanger</p>
      <img
        src="https://avatars.githubusercontent.com/u/57751257?v=4"
        style="width: 40%; display: block; margin: 0 auto 10px; border-radius: 50%;"
      />
    </div>

      <div style="text-align: center">
                    <ul class="legals">
                        <li><a class="a1" href="https://redhat123456.github.io/router_index/" target="_blank">导航</a></li>
                        <li><a class="a2" href="https://redhat123456.github.io" target="_blank">博客</a></li>
                        <li><a class="a3" href="https://github.com/redhat123456" target="_blank">Github</a></li>
                    </ul>    
                    <div class="line"></div>
                    <p class="copy">© 2021 - 2021 · Tanger · All Rights Reserved</p>
         </div>
 </div>
  </el-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onRedirect(url) {
      window.open(url);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  min-width: 420px;
}
</style>
<style scoped>
h3{
  margin-top: 0px;
}
  .line {
        border-bottom: 1px solid #ababab;
        width: 170px;
        margin: 0 auto;
    }
      .legals {
        list-style: none;
        color: #8c9398;
        font-size: 14px;
        margin: 5px auto;
        padding: 0px !important;
        text-align: center;
        height: 20px;
        flex-flow: row nowrap;
        text-align: center;
    }
        a {
        text-decoration: none;
        margin: 5px auto;

    }

    .legals li a {
        color: #353535;
    }

    .a1:hover {
        color: #FC0000;
    }

    .a2:hover {
        color: #0100FC;
    }

    .a3:hover {
        color: #00FE00;
    }
        .legals li {
        list-style: none;
        color: #8c9398;
        text-align: center;
        display: inline;
        line-height: 20px;
        width: 68px;
        height: 20px;
        padding: 0px 20px;
    }
     .copy {
        height: 25px;
        font: 12px "Varela Round", sans-serif;
        margin: 10px 0px;
        text-align: center;
        color: #404142;
    }
</style>