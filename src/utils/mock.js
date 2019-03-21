let Mock = require('mockjs');
let i=1
Mock.mock('http://test/mock.com',{
    "list|5":[{
       "itemid|+1":1,
       "title":'@ctitle',
       "time":'@datetime()',
       "click":/\d{3}/,
       "img":"@Image('100x100','#fff','VIP')",
       "text":'@cparagraph(1,5)',
       "email":'@email()',
       'capitalize':'@capitalize("干你妈")',
        'ip':'@ip'
    }]
})
