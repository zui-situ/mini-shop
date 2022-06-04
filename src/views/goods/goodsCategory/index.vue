<template>
  <div>
    <div clas="goods">
      <div class="goods-manager" />
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="author"
        label="分类名称"
        width="180"
      />
      <el-table-column
        prop="display_time"
        label="分类状态"
        width="180"
      />
      <el-table-column
        prop="pageviews"
        label="分类图片"
      />
      <el-table-column
        prop="status"
        label="分类状态"
        width="180"
      />
      <el-table-column
        prop="title"
        label="分类图片"
      />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openDialog"
          >新增</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
    />
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="分类名称">
          <el-input v-model="form.categoryName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="分类图片">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
          >
            <img v-if="form.categoryImg" :src="form.categoryImg" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/goods.js'
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        categoryName: '', // 分类名称
        categoryImg: '' // 分类图片
      }
    }
  },
  created() {
    this.getListFun()
  },
  methods: {
    getListFun() {
      getList({
        pageNo: 1,
        pageSize: 10
      }).then(res => {
        const { code, data } = res
        if (code === 200) {
          this.tableData = data.items
        }
      })
    },
    openDialog() {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
