<template>
  <div id="setUp">
    <div class="setting-right">
      <div class="toptitle l">个人信息</div>
      <div class="right-write r" @click="editInfo">
        <img src="\static\img\write.png">
        <span class="edit-button">编辑</span>
      </div>
      <div class="mybody">
        <div class="info-box">
          <label class="l">昵称</label>
          <div class="box-value l">
            {{nickname}}
            <el-input
              class="value-input"
              type="text"
              v-model="tempInfo.nickname"
              v-show="editButton"
            ></el-input>
          </div>
        </div>
        <div class="info-box">
          <label class="l">性别</label>
          <div class="box-value l">
            {{sex}}
            <el-input class="value-input" type="text" v-model="tempInfo.sex" v-show="editButton"></el-input>
          </div>
        </div>
        <div class="info-box">
          <label class="l">身高</label>
          <div class="box-value l">
            {{height}}
            <i>m</i>
            <el-input
              class="value-input"
              v-model.number="tempInfo.height"
              v-show="editButton"
              step="0.01"
            ></el-input>
          </div>
        </div>
        <div class="info-box">
          <label class="l">体重</label>
          <div class="box-value l">
            {{weight}}
            <i>kg</i>
            <el-input
              class="value-input"
              v-model.number="tempInfo.weight"
              v-show="editButton"
              step="0.01"
            ></el-input>
          </div>
        </div>
        <el-button-group class="save-button" v-show="editButton">
          <el-button type="primary" @click="messageSave">保存</el-button>
          <el-button @click="editInfo">取消</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      nickname: JSON.parse(sessionStorage.getItem("userInfo")).nickname,
      sex: JSON.parse(sessionStorage.getItem("userInfo")).sex,
      height: JSON.parse(sessionStorage.getItem("userInfo")).height,
      weight: JSON.parse(sessionStorage.getItem("userInfo")).weight,
      editButton: false,
      tempInfo: {},
      test: ""
    };
  },
  methods: {
    editInfo() {
      this.editButton = !this.editButton;
    },
    messageSave() {
      if (this.tempInfo.height) {
        this.tempInfo.height = Number(this.tempInfo.height);
      }
      if (this.tempInfo.weight) {
        this.tempInfo.weight = Number(this.tempInfo.weight);
      }
      let params = {
        id: this.$store.state.currentUser.userId,
        info: this.tempInfo
      };
      console.log(params);
      this.$api
        .modifyInfo(params)
        .then(res => {
          this.tempInfo = {};
          this.editButton = false;
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
.setting-right {
  float: left;
  margin-left: 48px;
  width: 840px;
  box-sizing: border-box;
}
.setting-right .toptitle {
  font-size: 16px;
  font-weight: 700;
  font-family: Microsoft yahei;
}
.setting-right .right-write {
  display: inline;
  margin-right: 70px;
}
.right-write:hover {
  cursor: pointer;
}
.right-write .edit-button {
  color: #838383;
}
.mybody {
  margin: 24px auto 24px 40px;
}
.mybody .info-box {
  margin-bottom: 12px;
  overflow: hidden;
  /* display: inline-flex; */
  display: block;
  text-align: left;
}
.mybody .info-box label {
  width: 100px;
  /* line-height: 20px; */
  padding: 20px 0;
  text-align: center;
  font-weight: 700;
}
.mybody .info-box .box-value {
  position: relative;
  height: 40px;
  width: calc(100% - 200px);
  margin-left: 8px;
  line-height: 20px;
  padding: 20px 0 20px 22px;
  border-bottom: 1px solid #d9dde1;
}
.value-input {
  position: absolute;
  left: 150px;
  margin-left: 30px;
  width: 200px;
}
.value-input input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: textfield;
}
.value-input input[type="number"] {
  -moz-appearance: textfield;
}

.save-button {
  position: relative;
  left: 60%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: textfield;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

