<template>
  <div>
    
     <p>boooks-iceandfire</p>
  
       <el-table
    :data="lunbotuList"
    style="width: 100%" >
      
    <el-table-column type="expand" >
    
      <template slot-scope="props">
        <el-form label-position="left" class="demo-table-expand">
          <el-form-item label="mediaType">
            <span>{{ props.row.mediaType }}</span>
          </el-form-item>
          <el-form-item label="Pages">
            <span>{{ props.row.numberOfPages }}</span>
          </el-form-item>
            <el-form-item label="isbn">
            <span>{{ props.row.isbn }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column
      label="name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="author"
      prop="authors">
    </el-table-column>
    <el-table-column
      label="released"
      prop="released">
    </el-table-column>
    <el-table-column
      label="publisher"
      prop="publisher">
    </el-table-column>
  </el-table>
  
  </div>
  
</template>

<style>
div p{
   margin-top:40px;
}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>

  export default {
    data() {
      return {
         lunbotuList: [],
         
      }
    },
  created() {
    this.getLunbotu();
  },
  
  methods: {
   getLunbotu() {
      // 获取轮播图数据的方法
      this.$http.get("https://www.anapioficeandfire.com/api/books").then(result => {
        // console.log(result.body);
       if(result.body!==""){
           // 成功了
          this.lunbotuList = result.body;
          console.log(this.lunbotuList)
        
       }else{
         console.log("数据加载失败了。。。")
       }
         
      });
    },
    
  }
};
  
</script>