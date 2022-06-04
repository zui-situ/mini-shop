const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    categoryName: '便宜的',
    categoryStatus: 0,
    categoryImg: '上海市普陀区金沙江路 1518 弄'
  }, {
    categoryName: '贵的',
    categoryStatus: 1,
    categoryImg: '上海市普陀区金沙江路 1517 弄'
  }, {
    categoryName: '贵的',
    categoryStatus: 0,
    categoryImg: '上海市普陀区金沙江路 1519 弄'
  }, {
    categoryName: '贵的',
    categoryStatus: 1,
    categoryImg: '上海市普陀区金沙江路 1516 弄'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/category/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 200,
        data: {
          pagination: {
            count: 4,
            currentPage: 1,
            limit: 4,
            totalPage: 1
          },
          list: items
        },
        message: '请求成功'
      }
    }
  }
]
