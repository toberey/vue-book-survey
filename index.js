/*
 * @Author       : TobeRey@Isrey.Com
 * @Date         : 2019-12-17
 * @FilePath     : \survey\index.js
 * @Description  :  Vue实例
 */


 // Vue实例
var app = new Vue({
    el: "#app",
    data: {
        questions: [ // 题目数据
            {
                id: 1,
                title: '请问您的性别是：',
                options: ['男', '女', '保密'],
                content: '',
                type: 'radio'
            },
            {
                id: 2,
                title: '选择您的兴趣爱好：',
                options: ['游泳', '看书', '跑步', '看电影', '听音乐'],
                content: '',
                type: 'select'
            },
            {
                id: 3,
                title: '请介绍一下自己：',
                options: '',
                content: '',
                type: 'text'
            },
            {
                id: 4,
                title: '你最爱的图书是：',
                options: ['红楼梦', '三国演义', '西游记', '水浒传'],
                content: '',
                type: 'select'
            },
        ],
        indexId: 1 // 页面索引
    }
});