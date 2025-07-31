const categoryMap = {
  "生态": ["Bitcoin", "Ethereum","Cardano","Polkadot","COSMOS"],
  "系列": ["观点分享系列", "操作技巧系列", "安全知识系列", "PoS质押教程", "链上应用系列", "产品开箱测评"],
  "标签": ["无时效性", "热门视频", "试听课"]
};
  
const videos = [
  { title: "什么是以太坊域名系统（ENS）？如何申请.eth域名？", url: "EColvHxS2QA", tags: ["Ethereum","链上应用系列"] },
  { title: "波卡DOT质押的两种方式，如何获取最高质押收益？", url: "4aeCrO6lqc0", tags: ["Polkadot","PoS质押教程"] },
  { title: "什么是隐私链？即将上线的Midnight，隐私匿名资产XMR门罗币，他们都是做什么用的？", url: "1J3zwftYLPo", tags: ["Cardano","知识学习系列"] },
  { title: "比特币和他被误解的一生", url: "IJQ2rcdspWs", tags: ["Bitcoin","观点分享系列","无时效性"] },
  { title: "中心化交易所有可能被淘汰吗？稳定币 + 高速DEX + 跨链：一场悄然到来的革命", url: "oWRMNt-5Gsw", tags: ["观点分享系列","无时效性","热门视频"] },
  { title: "区块链日报Derek来大懒猫挖矿频道啦！！畅聊区块链", url: "RlIC02_UQAY", tags: ["观点分享系列","热门视频"] },
  { title: "老游戏IP上链的前景如何？会是GameFi的破局之路吗？", url: "ToNEstfudpI", tags: ["GameFi","观点分享系列","无时效性"] },
  { title: "什么是BitcoinOS？作用是什么？Cardano上引入BTC的机制和原理", url: "87_exk03ddY", tags: ["Bitcoin","Cardano","技术原理系列","热门视频"] },
  { title: "Cardanoscan.io教程！ADA链上数据查询工具教程", url: "1C9Jorgy59M", tags: ["Cardano","操作技巧系列"] },
  { title: "COSMOS的IBC Eureka是什么？万链互联的里程碑！", url: "8WgRrvEnUz4", tags: ["COSMOS","技术原理系列"] },
  { title: "冷（热）钱包授权风险！使用Revoke.cash 工具撤销不必要的授权！", url: "7LfbWiqkoa4", tags: ["Ethereum","安全知识系列"] },
  { title: "热钱包质押ADA教程，使用Eternl钱包质押ADA操作演示", url: "sWqibNkpnu8", tags: ["Cardano","PoS质押教程"] },
  { title: "质押的ADA，如何转移才能损失最小？怎么从热钱包（Yoroi, Eternl, Daedalus）转移到冷钱包（Ledger, Trezor, Keystone）？", url: "u85_TCBx8M0", tags: ["Cardano","PoS质押教程"] },
  { title: "缺点未必是缺点！我对Cosmos的两大问题的看法：Atom代币的价值捕获与Cosmos生态链的安全隐患", url: "Y3DW4IvkObg", tags: ["COSMOS","观点分享系列"] },
  { title: "Bybit被盗15亿事件链上数据分析！从链上可以看到哪些信息，我们从中可以得到什么启示", url: "EPBf-CPeo2s", tags: ["Ethereum","安全知识系列"] },
  { title: "一个视频认识COSMOS，一个价值被低估的生态", url: "DVgI6KolM5g", tags: ["COSMOS"] },
  { title: "Keystone冷钱包深度测评，Keystone 3 Pro值不值得买？", url: "aaa", tags: ["产品开箱测评"] },
  { title: "币价暴跌！保持心态的“五句真言”！", url: "SAFrE2U6Sqo", tags: ["观点分享系列","无时效性"] },
  { title: "山寨币牛市来临！谈谈我对于币圈的财富自由的想法", url: "YYzQu__do5s", tags: ["观点分享系列","无时效性"] },
  { title: "牛市赢麻了！我可以辞职炒币吗？", url: "dVqlBaXvCI0", tags: ["观点分享系列","无时效性"] }
];
