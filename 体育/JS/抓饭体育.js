var rule = {
    title:'抓饭体育',
    host:'https://www.zhuafan.co',
    url:'/sports-home/category/fyclass',
    class_name:'全部&足球&篮球&羽乒&台球&棒球&户外&搏击&综合&棋盘&电竞&网球&排球&聊天&原声',
    class_url:'all&Football&Basketball&Badminton&Billiards&Baseball&Outdoors&Wrestling&Others&Boardgame&Popular&Tennis&Volleyball&Chat&Acoustic',
	homeUrl:'/sports-home/category/all',//网站的首页链接,用于分类获取和推荐获取
    detailUrl:'https://m.zhuafan.co/fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/live-search/search/query/data?keyword=**&page=fypage&num=&searchType=all&uid=null&from=pc',
    searchable:2,
    quickSearch:0,
    headers:{ 
        'User-Agent':'PC_UA'
    },
    limit:6,
    timeout:5000,
    play_parse:true,
    lazy:'',
    double:false,
    推荐:'*',
    一级:'json:data;cname;imageUrl;uname;id',
    二级:'*',
	搜索:'json:cObj.cList;*;*;*;_id',
}