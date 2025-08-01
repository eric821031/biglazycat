const pageMeta = {
  title: "Youtube频道——大懒猫挖矿",
  header: "《大懒猫挖矿》视频分类检索"
};

const categoryMap = {
  "生态": ["Bitcoin", "Ethereum","Cardano","Polkadot","COSMOS","Solana","GameFi","NFT"],
  "系列": ["知识学习系列", "观点分享系列", "操作技巧系列", "安全知识系列", "PoS质押教程", "链上应用系列", "产品开箱测评", "社区资源系列"],
  "标签": ["懒猫推荐", "热门视频", "无时效性", "试听课"]
};
  
const videos = [
  { title: "什么是以太坊域名系统（ENS）？如何申请.eth域名？", url: "EColvHxS2QA", tags: ["Ethereum","知识学习系列","链上应用系列"] },
  { title: "波卡DOT质押的两种方式，如何获取最高质押收益？", url: "4aeCrO6lqc0", tags: ["Polkadot","PoS质押教程"] },
  { title: "什么是隐私链？即将上线的Midnight，隐私匿名资产XMR门罗币，他们都是做什么用的？", url: "1J3zwftYLPo", tags: ["Cardano","知识学习系列"] },
  { title: "比特币和他被误解的一生", url: "IJQ2rcdspWs", tags: ["Bitcoin","观点分享系列","无时效性","懒猫推荐"] },
  { title: "中心化交易所有可能被淘汰吗？稳定币 + 高速DEX + 跨链：一场悄然到来的革命", url: "oWRMNt-5Gsw", tags: ["观点分享系列","无时效性","热门视频","懒猫推荐"] },
  { title: "区块链日报Derek来大懒猫挖矿频道啦！！畅聊区块链", url: "RlIC02_UQAY", tags: ["观点分享系列","热门视频","懒猫推荐"] },
  { title: "老游戏IP上链的前景如何？会是GameFi的破局之路吗？", url: "ToNEstfudpI", tags: ["GameFi","观点分享系列","无时效性"] },
  { title: "什么是BitcoinOS？作用是什么？Cardano上引入BTC的机制和原理", url: "87_exk03ddY", tags: ["Bitcoin","Cardano","技术原理系列","热门视频"] },
  { title: "Cardanoscan.io教程！ADA链上数据查询工具教程", url: "1C9Jorgy59M", tags: ["Cardano","操作技巧系列"] },
  { title: "COSMOS的IBC Eureka是什么？万链互联的里程碑！", url: "8WgRrvEnUz4", tags: ["COSMOS","技术原理系列"] },
  { title: "冷（热）钱包授权风险！使用Revoke.cash 工具撤销不必要的授权！", url: "7LfbWiqkoa4", tags: ["Ethereum","安全知识系列"] },
  { title: "热钱包质押ADA教程，使用Eternl钱包质押ADA操作演示", url: "sWqibNkpnu8", tags: ["Cardano","PoS质押教程"] },
  { title: "质押的ADA，如何转移才能损失最小？怎么从热钱包转移到冷钱包？", url: "u85_TCBx8M0", tags: ["Cardano","PoS质押教程"] },
  { title: "缺点未必是缺点！我对Cosmos的两大问题的看法", url: "Y3DW4IvkObg", tags: ["COSMOS","观点分享系列"] },
  { title: "Bybit被盗15亿事件链上数据分析！从链上可以看到哪些信息，我们从中可以得到什么启示", url: "EPBf-CPeo2s", tags: ["Ethereum","安全知识系列"] },
  { title: "一个视频认识COSMOS，一个价值被低估的生态", url: "DVgI6KolM5g", tags: ["COSMOS"] },
  { title: "Keystone冷钱包深度测评，Keystone 3 Pro值不值得买？", url: "no9VYGv8fD4", tags: ["产品开箱测评"] },
  { title: "币价暴跌！保持心态的“五句真言”！", url: "SAFrE2U6Sqo", tags: ["观点分享系列","无时效性","懒猫推荐"] },
  { title: "怎么在Cardano的NFT平台JPG Store上更便宜的购买NFT？Snekkies NFT购买演示", url: "lQP7xz-5-N8", tags: ["Cardano","NFT","链上应用系列"] },
  { title: "Keystone冷钱包开箱，Keystone开箱初始化演示，我对Keystone冷钱包的第一印象", url: "gih5p_IZo_A", tags: ["产品开箱测评"] },
  { title: "冷钱包的资产被盗原因总结，只有这2个原因！", url: "aMy9I7O7_RM", tags: ["安全知识系列","无时效性","热门视频","懒猫推荐"] },
  { title: "ETH的几种质押方式优缺点详细分析，自建节点，委托建节点，第三方质押，如何选择？", url: "iI-LmFy2PSU", tags: ["Ethereum","观点分享系列","PoS质押教程","无时效性","懒猫推荐"] },
  { title: "Ledger冷钱包存储加密货币的方式详解，为什么我的eth转进Ledger去之后就看不到了？", url: "Vx4jZiOeUKw", tags: ["操作技巧系列","安全知识系列","无时效性","热门视频","懒猫推荐"] },
  { title: "Cardano生态的Uniswap！去中心化交易平台Minswap详细介绍", url: "RkgKamH36QU", tags: ["Cardano","链上应用系列"] },
  { title: "Cardano生态最好用的钱包Eternl介绍，用Eternl参与Cardano的链上生态", url: "jctmDeYVN2s", tags: ["Cardano","链上应用系列"] },
  { title: "什么是真正的冷钱包？Ledger和Trezor可以互相导入吗？链接热钱包是怎么回事？", url: "5GKUXLEH5aA", tags: ["安全知识系列","无时效性","懒猫推荐"] },
  { title: "ADA的质押收益为什么下降？Cardano质押收益的组成详解，APY下降的原因是什么？", url: "NlrfsyBjulw", tags: ["Cardano","知识学习系列","PoS质押教程", "热门视频","懒猫推荐"] },
  { title: "山寨币牛市来临！谈谈我对于币圈的财富自由的想法", url: "YYzQu__do5s", tags: ["观点分享系列","无时效性","懒猫推荐"] },
  { title: "牛市赢麻了！我可以辞职炒币吗？", url: "dVqlBaXvCI0", tags: ["观点分享系列","无时效性","懒猫推荐"] },
  { title: "盘点潜在的“以太坊杀手”！谁是应用型公链的王者？", url: "_q3JZtCbn8Y", tags: ["Ethereum","Cardano","Polkadot","COSMOS","Solana","观点分享系列","无时效性", "热门视频","懒猫推荐"] },
  { title: "大懒猫的biglazycat.com网站上线！教学、矿池、代币、商城、社群等版块信息汇聚", url: "cf9QKEEAmkg", tags: ["社区资源系列"] },
  { title: "用Keplr钱包质押Atom代币教程，COSMOS质押年化收益率14%~15%", url: "3oE3BySypus", tags: ["COSMOS","PoS质押教程"] },
  { title: "揭露一种最近常见的骗局，Youtube评论区“不小心”泄露的助记词", url: "vK-sLlNe9BQ", tags: ["安全知识系列"] },
  { title: "补充教程：Cardano链上治理投票，选择DRep教程之 Yoroi 版演示", url: "yDfGMLKCriU", tags: ["Cardano","操作技巧系列"] },
  { title: "Cardano链上治理开启，如何选择DRep？", url: "W-KURtbH0xE", tags: ["Cardano","操作技巧系列"] },
  { title: "COSMOS冷钱包质押教程，年化收益15%的多链之王，如何用Ledger钱包质押Atom代币？", url: "UEM7JgbqgHc", tags: ["COSMOS","PoS质押教程"] },
  { title: "要如何区分PoS官方质押和第三方质押？学会区分二者对于保护本金至关重要！", url: "9ESI1aeWf6k", tags: ["知识学习系列","无时效性"] },
  { title: "Project Catalyst投票全程演示", url: "T0EuU4Nw0lI", tags: ["Cardano","链上应用系列"] },
  { title: "Solana质押教程，如何使用冷钱包Ledger进行Solana的质押？", url: "MxhdIqWyyNQ", tags: ["Solana","PoS质押教程"] },
  { title: "以太坊EVM上的零元转账钓鱼（Zero Transaction Scam）详解。", url: "vuEvrF8mdRc", tags: ["Ethereum","安全知识系列"] },
  { title: "大懒猫ADA矿池福利汇总，还没有领取的兄弟姐妹请尽快来领取！", url: "GChoaPMwjpE", tags: ["社区资源系列"] },
  { title: "Cardano Project Catalyst注册演示教程", url: "re2W8I6sRd8", tags: ["Cardano","链上应用系列"] },
  { title: "Project Catalyst（Cardano催化剂项目）是什么？", url: "dgImEIVZSbw", tags: ["Cardano","链上应用系列"] },
  { title: "Trezor冷钱包质押ADA教程，如何使用Trezor来质押ADA？", url: "ORfxUdSA2M0", tags: ["Cardano","PoS质押教程"] },
  { title: "Cardano质押教程，如何使用Ledger冷钱包来直接质押Cardano？", url: "WepN8Z-LPnU", tags: ["Cardano","PoS质押教程","热门视频"] },
  { title: "代幣ICO：無中生有的魔法 ——《大懒猫币圈投资安全指南》试听课之五", url: "LeYzPa_I77w", tags: ["安全知识系列","试听课"] },
  { title: "为什么我要自己做节点来质押以太坊？为什么不选择Lido，Kiln等第三方机构的质押服务？", url: "p9Ep3ckthL0", tags: ["Ethereum","PoS质押教程"] },
  { title: "以太坊自建节点一年365天收益数据分享，大懒猫的以太坊节点收益数据大公开", url: "BxOH4a0xL3U", tags: ["Ethereum","PoS质押教程","热门视频"] },
  { title: "Not your keys, not your coins ! ——《大懒猫币圈投资安全指南》试听课之四", url: "9mool-UNJXc", tags: ["安全知识系列","试听课"] },
  { title: "DAppNode以太坊节点设备迁移教程，同一局域网内DAppNode节点迁移攻略", url: "9q709PgdlUg", tags: ["Ethereum","PoS质押教程"] },
  { title: "网络钓鱼：天上”钓“馅饼啦！——《大懒猫币圈投资安全指南》试听课之三", url: "1L4SW2e1Wwo", tags: ["安全知识系列","试听课","懒猫推荐"] },
  { title: "买Trezor还是买Ledger？Trezor和Ledger冷钱包深度测评，谁才是最适合我的冷钱包？", url: "k1oARXLHRcE", tags: ["产品开箱测评","热门视频"] },
  { title: "加密货币钱包有哪些种类？——《大懒猫币圈投资安全指南》试听课之二", url: "tmPj-7LXp3o", tags: ["知识学习系列","试听课","懒猫推荐"] },
  { title: "盘点那些年我买过、亏过的NFT，分享心得体会", url: "h_phV_I7s0A", tags: ["NFT","观点分享系列"] },
  { title: "什么是区块链？——《大懒猫币圈投资安全指南》试听课之一", url: "nMdmoknBr6k", tags: ["知识学习系列","试听课"] },
  { title: "Trezor冷钱包开箱视频，Trezor Safe3硬件钱包初始化设置", url: "-DlznpO6GeE", tags: ["产品开箱测评"] },
  { title: "《大懒猫的币圈投资安全指南》内容介绍，如何回避币圈中风险、欺诈与陷阱？币圈防骗指南", url: "xAN-0ucjjSA", tags: ["安全知识系列","社区资源系列"] },
  { title: "Ledger钱包的新功能Ledger Recover深度分析，我们的Ledger还安全吗？", url: "7fVrC88vn0o", tags: ["安全知识系列"] },
  { title: "DePIN是什么？DePIN赛道的机遇与问题，我对几个DePIN老项目的优缺点分析", url: "7fyFkDuEXi4", tags: ["知识学习系列"] },
  { title: "12月14日Ledger冷钱包被盗事件始末，我的Ledger钱包还安全吗？", url: "XKJkneLSHwA", tags: ["安全知识系列", "热门视频"] },
  { title: "牛市预防针！在加密货币牛市中亏钱的五大方法！你中了吗？", url: "jY3IWtzRusQ", tags: ["Bitcoin","观点分享系列","无时效性","懒猫推荐"] },
  { title: "用DappNode搭建节点质押的32ETH如何提取？以太坊验证者节点解除质押教程", url: "hLXcm0peSE0", tags: ["Ethereum","PoS质押教程"] },
  { title: "如何给比特币闪电网络节点增加通道？马上让你的闪电网络节点赚点路由费的经验分享", url: "MFwdzZI5HJg", tags: ["Bitcoin","操作技巧系列"] },
  { title: "如何在一台设备上运行多个ETH验证者节点（N x 32 ETH）？DAppNode运行多个以太坊验证者", url: "NUTofAVli30", tags: ["Ethereum","PoS质押教程"] },
  { title: "以太坊验证者节点（32ETH）收益如何？大懒猫的ETH节点60天收益情况分享", url: "lZVpeeTRYd8", tags: ["Ethereum","PoS质押教程", "热门视频"] },
  { title: "Polygon如何进行质押挖矿？年化收益6%-7%，POL的质押挖矿教学", url: "SIECy7djzZ8", tags: ["Ethereum","PoS质押教程"] },
  { title: "自己搭建以太坊质押节点系列教程之三：存入32ETH，启动验证者节点", url: "2VlrAeFlzZU", tags: ["Ethereum","PoS质押教程"] },
  { title: "自己搭建以太坊质押节点系列教程之二：DAppNode节点的安装和配置", url: "gLw2KXOe03o", tags: ["Ethereum","PoS质押教程"] },
  { title: "自己搭建以太坊质押节点系列教程之一：设备选择及操作系统Ubuntu的安装和安全配置", url: "yLOjiTqvcOA", tags: ["Ethereum","PoS质押教程"] },
  { title: "快速理解什么是EVM？兼容EVM对一个公链来说意味着什么？", url: "tzCnDC8f43M", tags: ["Ethereum","知识学习系列","无时效性"] },
  { title: "Kusama矿池质押挖矿教学，获取12%-16%年化收益。", url: "V2PA-ql5jrc", tags: ["Polkadot","PoS质押教程"] },
  { title: "ADA质押挖矿新手懒人包：新人8大常见问题解答。", url: "fv1y2p34IHc", tags: ["Cardano","PoS质押教程","热门视频","懒猫推荐"] },
  { title: "使用Ledger冷钱包质押波卡Polkadot教学视频。", url: "FuJ9xU3uHBg", tags: ["Polkadot","PoS质押教程"] },
  { title: "波卡Polkadot质押挖矿选择验证者节点的终极奥义。DOT质押如何选择验证者节点？（进阶版）", url: "gAYYYUAPmxg", tags: ["Polkadot","PoS质押教程"] },
  { title: "什么是零知识证明？零知识证明在区块链有什么用处？", url: "vV-bi_oluOk", tags: ["知识学习系列","无时效性","懒猫推荐"] },
  { title: "波卡Polkadot加入提名者矿池质押挖矿教学视频，年化收益18% ", url: "R89ULpmipq0", tags: ["Polkadot","PoS质押教程"] },
  { title: "Ledger硬件钱包如何连接Metamask？冷钱包如何连接小狐狸钱包参与以太坊上的应用生态？", url: "0nqkAEjm_DY", tags: ["Ethereum","操作技巧系列","懒猫推荐"] },
  { title: "NFT是资金盘吗？为什么有的NFT项目可以暴涨百倍？读懂百倍NFT项目的背后逻辑", url: "wPpPyk5uRBw", tags: ["NFT","观点分享系列","无时效性"] },
  { title: "冷钱包ledger链接Yoroi质押ADA挖矿教程", url: "1ULgqwQcI84", tags: ["Cardano","PoS质押教程","热门视频"] },
  { title: "什么是加密货币钱包？一个视频认识所有加密货币钱包", url: "NZcJNQecovA", tags: ["知识学习系列"] },
  { title: "从“FTX”的陨落看中心化交易所的“七宗罪”，中心化交易所应不应该存在？", url: "vyY4_Wjh-FA", tags: ["观点分享系列","无时效性","懒猫推荐"] },
  { title: "比特币能做到，其它资产做不到的5件事，比特币属于什么资产？为什么要投资比特币？", url: "y15aips8lSY", tags: ["Bitcoin","观点分享系列","无时效性","懒猫推荐"] },
  { title: "Cardano质押挖矿最佳方案，ADA质押快速上手教程，Yoroi钱包质押ADA演示教程", url: "2zZIaKDFDOs", tags: ["Cardano","PoS质押教程","热门视频"] },
  { title: "大懒猫Discord群开通了！欢迎所有爱好加密货币、爱好区块链技术的朋友们加入", url: "b0K1qaKHdvQ", tags: ["社区资源系列"] },
  { title: "读懂以太坊Gas费，什么是 Gwei？什么是 wei？", url: "E932myMejGY", tags: ["Ethereum","知识学习系列","无时效性"] },
  { title: "波卡Polkadot质押演示手把手教学，Polkadot.js进行选择验证者质押教程", url: "dr_HqaaAv6Q", tags: ["Polkadot","PoS质押教程"] },
  { title: "比特币纸钱包BTC Paper Wallet的生成、存放和提取详解", url: "fEXeWJoiJ58", tags: ["Bitcoin","安全知识系列"] },
  { title: "Solana质押教程，用Phantom钱包进行SOL的质押", url: "9IS5WN-aJ5E", tags: ["Solana","PoS质押教程"] },
  { title: "比特币闪电网络节点搭建，手把手教程，Umbrel闪电网络节点", url: "_YX_J_50iaQ", tags: ["Bitcoin","操作技巧系列"] },
  { title: "比特币闪电网络 BTC Lightning Network 到底是什么东西？", url: "4-yVGdq79NI", tags: ["Bitcoin","知识学习系列"] }
];
