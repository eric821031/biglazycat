const categoryMap = {
  "生态": ["Bitcoin", "Ethereum","Cardano","Polkadot","COSMOS"],
  "系列": ["观点分享系列", "操作技巧系列", "安全知识系列", "PoS质押教程"],
  "标签": ["无时效性", "热门视频"]
};
  
const videos = [
  { title: "比特币和他被误解的一生", url: "IJQ2rcdspWs", tags: ["Bitcoin","观点分享系列","无时效性"] },
  { title: "波卡DOT质押的两种方式，如何获取最高质押收益？", url: "4aeCrO6lqc0", tags: ["Polkadot","PoS质押教程"] },
  { title: "什么是隐私链？即将上线的Midnight，隐私匿名资产XMR门罗币，他们都是做什么用的？", url: "1J3zwftYLPo", tags: ["Cardano","知识学习系列"] },
  { title: "中心化交易所有可能被淘汰吗？", url: "oWRMNt-5Gsw", tags: ["观点分享系列","无时效性"] },
  { title: "区块链日报Derek来大懒猫挖矿频道啦！！畅聊区块链", url: "RlIC02_UQAY", tags: ["观点分享系列"] },
  { title: "老游戏IP上链的前景如何？会是GameFi的破局之路吗？", url: "ToNEstfudpI", tags: ["GameFi","观点分享系列","无时效性"] },
  { title: "什么是BitcoinOS？作用是什么？Cardano上引入BTC的机制和原理", url: "87_exk03ddY", tags: ["Bitcoin","Cardano","技术原理系列"] },
  { title: "Cardanoscan.io教程！ADA链上数据查询工具教程", url: "1C9Jorgy59M", tags: ["Cardano","操作技巧系列"] },
  { title: "COSMOS的IBC Eureka是什么？万链互联的里程碑！", url: "8WgRrvEnUz4", tags: ["COSMOS","技术原理系列"] },
  { title: "冷（热）钱包授权风险！使用Revoke.cash 工具撤销不必要的授权！", url: "7LfbWiqkoa4", tags: ["Ethereum","安全知识系列"] },
  { title: "币价暴跌！保持心态的“五句真言”！", url: "SAFrE2U6Sqo", tags: ["观点分享系列","无时效性"] },
  { title: "山寨币牛市来临！谈谈我对于币圈的财富自由的想法", url: "YYzQu__do5s", tags: ["观点分享系列","无时效性"] },
  { title: "牛市赢麻了！我可以辞职炒币吗？", url: "dVqlBaXvCI0", tags: ["观点分享系列","无时效性"] }
];
