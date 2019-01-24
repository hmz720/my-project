<template>
  <div class="books-container">
     <div class="title">http请求this.axios.get(url)</div>
     
     <p class="subtitle">boooks-iceandfire</p>
  
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

<style lang="css" scoped>

   .title{
     box-sizing: border-box;
     padding-top: 30px;
     border-bottom:1px solid #ebeef5;
     height:70px;
 
   }
 
 
</style>
  
<script>

  export default {
    data() {
      return {
         lunbotuList: [],
         result:{}
      }
    },
  created() {
    this.getLunbotu();
  },
  
  methods: {
   getLunbotu() {
      // 获取轮播图数据的方法
      var _this = this
     this.$axios.get('https://www.anapioficeandfire.com/api/books',{
                  params:{}
              }).then(function(response){
                
                console.log(response.data)
                _this.lunbotuList=response.data
                
              })
              
    },
    
  }
};
  
</script>