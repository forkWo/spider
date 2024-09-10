var rule = {
    title: '木偶哥哥',
    host: 'http://mogg.top',
    hostJs: '',
    headers: {
     'User-Agent': 'MOBILE_UA'
    },
    编码: 'utf-8',
    timeout: 5000,
    homeUrl: '/',
    url: '/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl: '/index.php/vod/search/page/fypage/wd/**.html',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    class_name: '电影&剧集&动漫',
    class_url: '1&2&3&',
    play_parse: true,
    parse_url: '',
    lazy: `
      if (/(pan.quark.cn|www.aliyundrive.com|www.alipan.com)/.test(input)){
      let type="ali";
      if (input.includes("pan.quark.cn")){
      type="quark";
      } else if (input.includes("www.aliyundrive.com") || input.includes("www.alipan.com")){
      type="ali";
      }
      let confirm="";
      //let confirm="&confirm=0";
      input = getProxyUrl().replace('js',type)+'&type=push'+confirm+'&url='+encodeURIComponent(input);
      }
     `,
    推荐: '*',
    一级: '.module-items .module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
    二级: {
     "title": "h1&&Text",
     "img": "img&&src",
     "desc": ".video-info&&.video-info-items:eq(3)&&Text;.video-info&&.video-info-items:eq(2)&&Text;;.video-info&&.video-info-items:eq(1)&&Text;.video-info&&.video-info-items:eq(0)&&Text",
     "content": ".video-info&&.video-info-items:eq(4)&&.sqjj_a&&Text",
     "tabs": ".module-tab-item",
     "lists": ".module-row-info:eq(#id)&&a.module-row-text",
     "list_text": "h4&&Text",
     "list_url": 'a&&data-clipboard-text',
     "list_url_prefix": 'push://'
    },
    搜索: 'body&&.module-search-item;h3&&a&&title;*;.video-serial&&Text;h3&&a&&href',
}