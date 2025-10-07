// surnameData.js — browser-ready global
// Exposes: window.SURNAME_DATA
// Fields per surname:
//  - pinyin: string (compound surnames use hyphen, e.g. "Ōu-yáng")
//  - pinyinMap: { '字': 'Pinyin', ... } per character
//  - originEN, originZH: brief origins
//  - famous: [{name, title, name_en, title_en}]
//  - roman: [] common romanizations / aliases for matching

(function(){
    const S = {
      '王': {
        pinyin: 'Wáng',
        pinyinMap: { '王':'Wáng' },
        originEN: 'Ancient royal surname meaning “king”; widely distributed across China.',
        originZH: '源出姬姓與子姓等，意為王者之族，為華人常見大姓之一。',
        roman: ['wang','wong','vang'],
        famous: [
          { name:'王羲之', title:'書法家', name_en:'Wang Xizhi', title_en:'Calligrapher' },
          { name:'王維', title:'詩人', name_en:'Wang Wei', title_en:'Poet' }
        ]
      },
      '李': {
        pinyin: 'Lǐ',
        pinyinMap: { '李':'Lǐ' },
        originEN: 'One of the most common surnames; linked to the plum “li”.',
        originZH: '百家姓之首之一，與「李」木相關之說流傳甚廣。',
        roman: ['li','lee','lei'],
        famous: [
          { name:'李白', title:'詩人', name_en:'Li Bai', title_en:'Poet' },
          { name:'李清照', title:'詞人', name_en:'Li Qingzhao', title_en:'Lyricist' }
        ]
      },
      '張': {
        pinyin: 'Zhāng',
        pinyinMap: { '張':'Zhāng' },
        originEN: 'Derived from an ancient bow craftsman; common northern surname.',
        originZH: '源出姬姓，與弓弦張設之職相關，為北方大姓。',
        roman: ['zhang','chang','cheung','jang'],
        famous: [
          { name:'張衡', title:'科學家', name_en:'Zhang Heng', title_en:'Scientist' },
          { name:'張旭', title:'書法家', name_en:'Zhang Xu', title_en:'Calligrapher' }
        ]
      },
      '劉': {
        pinyin: 'Liú',
        pinyinMap: { '劉':'Liú' },
        originEN: 'Imperial surname from the Han dynasty.',
        originZH: '漢室劉氏為其所宗，歷代望族甚多。',
        roman: ['liu','lew','liow','liew','liew'],
        famous: [
          { name:'劉邦', title:'皇帝', name_en:'Liu Bang', title_en:'Emperor' },
          { name:'劉禹錫', title:'詩人', name_en:'Liu Yuxi', title_en:'Poet' }
        ]
      },
      '陳': {
        pinyin: 'Chén',
        pinyinMap: { '陳':'Chén' },
        originEN: 'From the ancient State of Chen; very common in southern China.',
        originZH: '源出妫姓，陳國之後，南方大姓。',
        roman: ['chen','chan','tan','chin'],
        famous: [
          { name:'陳子昂', title:'詩人', name_en:'Chen Ziang', title_en:'Poet' },
          { name:'陳寅恪', title:'史學家', name_en:'Chen Yinke', title_en:'Historian' }
        ]
      },
      '楊': {
        pinyin: 'Yáng',
        pinyinMap: { '楊':'Yáng' },
        originEN: 'Associated with the poplar tree; ancient lineage of western China.',
        originZH: '出自姬姓，亦與楊樹相關之說。',
        roman: ['yang','yeung','iang'],
        famous: [
          { name:'楊萬里', title:'詩人', name_en:'Yang Wanli', title_en:'Poet' },
          { name:'楊貴妃', title:'歷史人物', name_en:'Yang Guifei', title_en:'Historical Figure' }
        ]
      },
      '黃': {
        pinyin: 'Huáng',
        pinyinMap: { '黃':'Huáng' },
        originEN: 'Linked with the color yellow; large surname in southeast China.',
        originZH: '源出嬴姓，與黃國、黃色意象相關，閩粵盛行。',
        roman: ['huang','wong','hwang'],
        famous: [
          { name:'黃庭堅', title:'書法家', name_en:'Huang Tingjian', title_en:'Calligrapher' },
          { name:'黃公望', title:'畫家', name_en:'Huang Gongwang', title_en:'Painter' }
        ]
      },
      '趙': {
        pinyin: 'Zhào',
        pinyinMap: { '趙':'Zhào' },
        originEN: 'Surname of the ruling house of the Song dynasty.',
        originZH: '宋朝皇姓，源出嬴姓，趙國之後。',
        roman: ['zhao','chao','chiu'],
        famous: [
          { name:'趙雲', title:'將軍', name_en:'Zhao Yun', title_en:'General' },
          { name:'趙孟頫', title:'書畫家', name_en:'Zhao Mengfu', title_en:'Painter-Calligrapher' }
        ]
      },
      '吳': {
        pinyin: 'Wú',
        pinyinMap: { '吳':'Wú' },
        originEN: 'From the ancient State of Wu; common across Jiangsu and Zhejiang.',
        originZH: '源出姬姓，吳國之後，江浙大姓。',
        roman: ['wu','ng','go','ngoh'],
        famous: [
          { name:'吳承恩', title:'作家', name_en:'Wu Cheng\'en', title_en:'Writer' },
          { name:'吳道子', title:'畫家', name_en:'Wu Daozi', title_en:'Painter' }
        ]
      },
      '周': {
        pinyin: 'Zhōu',
        pinyinMap: { '周':'Zhōu' },
        originEN: 'Derived from the Zhou dynasty; extensive branches.',
        originZH: '周朝之後，支派繁多。',
        roman: ['zhou','chou','chow'],
        famous: [
          { name:'周敦頤', title:'哲學家', name_en:'Zhou Dunyi', title_en:'Philosopher' },
          { name:'周邦彥', title:'詞人', name_en:'Zhou Bangyan', title_en:'Lyricist' }
        ]
      },
      '徐': {
        pinyin: 'Xú',
        pinyinMap: { '徐':'Xú' },
        originEN: 'Originating from the ancient Xu state.',
        originZH: '源自徐國，後散居江淮、江南。',
        roman: ['xu','hsu','tsu'],
        famous: [
          { name:'徐志摩', title:'詩人', name_en:'Xu Zhimo', title_en:'Poet' },
          { name:'徐悲鴻', title:'畫家', name_en:'Xu Beihong', title_en:'Painter' }
        ]
      },
      '孫': {
        pinyin: 'Sūn',
        pinyinMap: { '孫':'Sūn' },
        originEN: 'Ancient surname; also linked to Sun Wu (Sun Tzu).',
        originZH: '姓源悠久，亦有出自孫武一支之說。',
        roman: ['sun','soon','suen'],
        famous: [
          { name:'孫子', title:'兵法家', name_en:'Sun Tzu', title_en:'Military Strategist' },
          { name:'孫文', title:'政治家', name_en:'Sun Yat-sen', title_en:'Statesman' }
        ]
      },
      '馬': {
        pinyin: 'Mǎ',
        pinyinMap: { '馬':'Mǎ' },
        originEN: 'Associated with the horse; prominent in northwest.',
        originZH: '與馬圖騰相關，亦為回族常見姓氏。',
        roman: ['ma','maa','mah'],
        famous: [
          { name:'馬致遠', title:'作家', name_en:'Ma Zhiyuan', title_en:'Playwright' },
          { name:'馬援', title:'將軍', name_en:'Ma Yuan', title_en:'General' }
        ]
      },
      '朱': {
        pinyin: 'Zhū',
        pinyinMap: { '朱':'Zhū' },
        originEN: 'Linked with the color vermilion; Ming imperial surname.',
        originZH: '與朱砂之「朱」相關，明朝皇姓。',
        roman: ['zhu','chu','ju'],
        famous: [
          { name:'朱熹', title:'哲學家', name_en:'Zhu Xi', title_en:'Philosopher' },
          { name:'朱自清', title:'作家', name_en:'Zhu Ziqing', title_en:'Writer' }
        ]
      },
      '胡': {
        pinyin: 'Hú',
        pinyinMap: { '胡':'Hú' },
        originEN: 'Multiple origins; widely spread in central China.',
        originZH: '出自姬姓、妘姓等多源，分布廣泛。',
        roman: ['hu','hoo','woo'],
        famous: [
          { name:'胡適', title:'學者', name_en:'Hu Shih', title_en:'Scholar' },
          { name:'胡桃', title:'虛構/代指', name_en:'Hutao', title_en:'Fictional/Generic' }
        ]
      },
      '林': {
        pinyin: 'Lín',
        pinyinMap: { '林':'Lín' },
        originEN: 'Means “forest”; very common in Fujian and Taiwan.',
        originZH: '意為「森林」，閩台大姓。',
        roman: ['lin','lim','lam'],
        famous: [
          { name:'林逋', title:'詩人', name_en:'Lin Bu', title_en:'Poet' },
          { name:'林語堂', title:'作家', name_en:'Lin Yutang', title_en:'Writer' }
        ]
      },
      '郭': {
        pinyin: 'Guō',
        pinyinMap: { '郭':'Guō' },
        originEN: 'Originally people living near city walls (“outer wall”).',
        originZH: '以城郭而得姓，秦漢以來望族。',
        roman: ['guo','kuo','koh'],
        famous: [
          { name:'郭璞', title:'學者', name_en:'Guo Pu', title_en:'Scholar' },
          { name:'郭沫若', title:'作家', name_en:'Guo Moruo', title_en:'Writer' }
        ]
      },
      '何': {
        pinyin: 'Hé',
        pinyinMap: { '何':'Hé' },
        originEN: 'Ancient surname tied to river (“he”).',
        originZH: '或與水名「河」相關，源遠流長。',
        roman: ['he','ho','hur'],
        famous: [
          { name:'何遜', title:'詩人', name_en:'He Xun', title_en:'Poet' },
          { name:'何其芳', title:'作家', name_en:'He Qifang', title_en:'Writer' }
        ]
      },
      '高': {
        pinyin: 'Gāo',
        pinyinMap: { '高':'Gāo' },
        originEN: 'Means “tall, lofty”; noble lineages recorded in history.',
        originZH: '寓意高尚高遠，史籍多所載。',
        roman: ['gao','kao','ko'],
        famous: [
          { name:'高適', title:'詩人', name_en:'Gao Shi', title_en:'Poet' },
          { name:'高鳳翰', title:'書畫家', name_en:'Gao Fenghan', title_en:'Painter-Calligrapher' }
        ]
      },
      '羅': {
        pinyin: 'Luó',
        pinyinMap: { '羅':'Luó' },
        originEN: 'From “net” or “gauze”; large surname in Guangdong.',
        originZH: '與「羅」網、羅綺相關，粵地大姓。',
        roman: ['luo','lo','law','loh'],
        famous: [
          { name:'羅貫中', title:'作家', name_en:'Luo Guanzhong', title_en:'Writer' },
          { name:'羅大佑', title:'音樂家', name_en:'Lo Ta-yu', title_en:'Musician' }
        ]
      },
      '梁': {
        pinyin: 'Liáng',
        pinyinMap: { '梁':'Liáng' },
        originEN: 'Derived from bridges/beams; also noble titles.',
        originZH: '與橋梁、封國「梁」相關。',
        roman: ['liang','leung','leong'],
        famous: [
          { name:'梁啟超', title:'學者', name_en:'Liang Qichao', title_en:'Scholar' },
          { name:'梁祝', title:'傳說人物', name_en:'Liang (Legend)', title_en:'Legendary Figure' }
        ]
      },
      '宋': {
        pinyin: 'Sòng',
        pinyinMap: { '宋':'Sòng' },
        originEN: 'From the State of Song; later imperial dynasty name.',
        originZH: '宋國之後，宋朝之名所本。',
        roman: ['song','sung','soong'],
        famous: [
          { name:'宋玉', title:'辭賦家', name_en:'Song Yu', title_en:'Poet (Fu)' },
          { name:'宋慈', title:'法學家', name_en:'Song Ci', title_en:'Jurist' }
        ]
      },
      '鄭': {
        pinyin: 'Zhèng',
        pinyinMap: { '鄭':'Zhèng' },
        originEN: 'From the State of Zheng; influential in Henan.',
        originZH: '鄭國之後，河南望族。',
        roman: ['zheng','cheng','tehng'],
        famous: [
          { name:'鄭玄', title:'學者', name_en:'Zheng Xuan', title_en:'Scholar' },
          { name:'鄭成功', title:'將領', name_en:'Koxinga (Zheng Chenggong)', title_en:'Military Leader' }
        ]
      },
      '謝': {
        pinyin: 'Xiè',
        pinyinMap: { '謝':'Xiè' },
        originEN: 'Prominent aristocratic clan in Eastern Jin and Song.',
        originZH: '東晉中原士族巨室，影響深遠。',
        roman: ['xie','hsieh','sieh','tse'],
        famous: [
          { name:'謝靈運', title:'詩人', name_en:'Xie Lingyun', title_en:'Poet' },
          { name:'謝安', title:'政治家', name_en:'Xie An', title_en:'Statesman' }
        ]
      },
      '韓': {
        pinyin: 'Hán',
        pinyinMap: { '韓':'Hán' },
        originEN: 'From the State of Han; also seen in Korean surname “Han”.',
        originZH: '韓國之後，亦常見於朝鮮族姓氏。',
        roman: ['han','haan'],
        famous: [
          { name:'韓愈', title:'文學家', name_en:'Han Yu', title_en:'Litterateur' },
          { name:'韓信', title:'將軍', name_en:'Han Xin', title_en:'General' }
        ]
      },
      '唐': {
        pinyin: 'Táng',
        pinyinMap: { '唐':'Táng' },
        originEN: 'Name of the Tang dynasty; illustrious cultural connotation.',
        originZH: '唐朝之名，文化意象深厚。',
        roman: ['tang','tong'],
        famous: [
          { name:'唐太宗', title:'皇帝', name_en:'Emperor Taizong of Tang', title_en:'Emperor' },
          { name:'唐寅', title:'畫家', name_en:'Tang Yin', title_en:'Painter' }
        ]
      },
      '馮': {
        pinyin: 'Féng',
        pinyinMap: { '馮':'Féng' },
        originEN: 'From the place name Feng; noble lineages.',
        originZH: '以地為氏，歷代名族。',
        roman: ['feng','fung'],
        famous: [
          { name:'馮夢龍', title:'作家', name_en:'Feng Menglong', title_en:'Writer' }
        ]
      },
      '于': {
        pinyin: 'Yú',
        pinyinMap: { '于':'Yú' },
        originEN: 'Ancient surname with multiple origins; common in Shandong.',
        originZH: '古姓，多源並出，魯地尤盛。',
        roman: ['yu','yue','yoo'],
        famous: [
          { name:'于右任', title:'書法家', name_en:'Yu Youren', title_en:'Calligrapher' }
        ]
      },
      '葉': {
        pinyin: 'Yè',
        pinyinMap: { '葉':'Yè' },
        originEN: 'Connected to the ancient city of Ye.',
        originZH: '與古葉邑相關，南方多見。',
        roman: ['ye','ip','yip','yeh'],
        famous: [
          { name:'葉適', title:'學者', name_en:'Ye Shi', title_en:'Scholar' },
          { name:'葉嘉瑩', title:'學者', name_en:'Ye Jiaying', title_en:'Scholar' }
        ]
      },
      '魏': {
        pinyin: 'Wèi',
        pinyinMap: { '魏':'Wèi' },
        originEN: 'From the State of Wei; later a dynasty name.',
        originZH: '魏國、魏朝之名所本。',
        roman: ['wei','wai','ngai'],
        famous: [
          { name:'魏徵', title:'政治家', name_en:'Wei Zheng', title_en:'Statesman' }
        ]
      },
      '賴': {
        pinyin: 'Lài',
        pinyinMap: { '賴':'Lài' },
        originEN: 'Common in Taiwan and southern China; multiple origins.',
        originZH: '閩客地區常見，多源並出。',
        roman: ['lai','loy','luy'],
        famous: [
          { name:'賴和', title:'作家', name_en:'Lai He', title_en:'Writer' }
        ]
      },
      '彭': {
        pinyin: 'Péng',
        pinyinMap: { '彭':'Péng' },
        originEN: 'From the ancient Peng state/tribe.',
        originZH: '出自彭國/彭姓部族。',
        roman: ['peng','pang','phaeng'],
        famous: [
          { name:'彭德懷', title:'將軍', name_en:'Peng Dehuai', title_en:'General' }
        ]
      },
      '蔡': {
        pinyin: 'Cài',
        pinyinMap: { '蔡':'Cài' },
        originEN: 'From the State of Cai; widespread in Hokkien/Hakka communities.',
        originZH: '蔡國之後，閩客族群盛行。',
        roman: ['tsai','chai','cai','choy'],
        famous: [
          { name:'蔡邕', title:'學者', name_en:'Cai Yong', title_en:'Scholar' },
          { name:'蔡元培', title:'教育家', name_en:'Cai Yuanpei', title_en:'Educator' }
        ]
      },
      '曹': {
        pinyin: 'Cáo',
        pinyinMap: { '曹':'Cáo' },
        originEN: 'From official titles in antiquity; later noble clans.',
        originZH: '古官名為氏，後為望族。',
        roman: ['cao','tsao','cho'],
        famous: [
          { name:'曹操', title:'政治家', name_en:'Cao Cao', title_en:'Statesman' },
          { name:'曹雪芹', title:'作家', name_en:'Cao Xueqin', title_en:'Writer' }
        ]
      },
      '潘': {
        pinyin: 'Pān',
        pinyinMap: { '潘':'Pān' },
        originEN: 'From water-related toponyms; common in the south.',
        originZH: '多以水名、地名為氏，南方常見。',
        roman: ['pan','poon','phan'],
        famous: [
          { name:'潘岳', title:'文學家', name_en:'Pan Yue', title_en:'Litterateur' }
        ]
      },
      '蘇': {
        pinyin: 'Sū',
        pinyinMap: { '蘇':'Sū' },
        originEN: 'Ancient surname; illustrious literary figures in Song.',
        originZH: '古姓，宋代文壇蘇氏三父子著稱。',
        roman: ['su','soo','so'],
        famous: [
          { name:'蘇軾', title:'文學家', name_en:'Su Shi', title_en:'Litterateur' },
          { name:'蘇洵', title:'文學家', name_en:'Su Xun', title_en:'Litterateur' }
        ]
      },
      '蔣': {
        pinyin: 'Jiǎng',
        pinyinMap: { '蔣':'Jiǎng' },
        originEN: 'From the Jiang River; also prominent modern lineages.',
        originZH: '以蔣水為氏，近代名家眾多。',
        roman: ['jiang','chiang','cheung'],
        famous: [
          { name:'蔣琬', title:'政治家', name_en:'Jiang Wan', title_en:'Statesman' }
        ]
      },
      '丁': {
        pinyin: 'Dīng',
        pinyinMap: { '丁':'Dīng' },
        originEN: 'Ancient clan name meaning “robust” or “fourth heavenly stem”.',
        originZH: '源於丁卯天干或族名，寓剛健。',
        roman: ['ding','ting','tingg'],
        famous: [
          { name:'丁謂', title:'政治家', name_en:'Ding Wei', title_en:'Statesman' }
        ]
      },
      '沈': {
        pinyin: 'Shěn',
        pinyinMap: { '沈':'Shěn' },
        originEN: 'From the State of Shen; common in Jiangnan.',
        originZH: '沈國之後，江南望族。',
        roman: ['shen','sim','cham'],
        famous: [
          { name:'沈括', title:'科學家', name_en:'Shen Kuo', title_en:'Scientist' }
        ]
      },
      '任': {
        pinyin: 'Rèn',
        pinyinMap: { '任':'Rèn' },
        originEN: 'From official posts or the virtue “responsibility” (ren).',
        originZH: '或以官名、或以德名「任」為氏。',
        roman: ['ren','jen','yam'],
        famous: [
          { name:'任廷珪', title:'將領', name_en:'Ren Tinggui', title_en:'General' }
        ]
      },
      '姚': {
        pinyin: 'Yáo',
        pinyinMap: { '姚':'Yáo' },
        originEN: 'Traces to the legendary Emperor Yao.',
        originZH: '傳承堯帝之後的族裔。',
        roman: ['yao','yiu'],
        famous: [
          { name:'姚鼐', title:'學者', name_en:'Yao Nai', title_en:'Scholar' }
        ]
      },
      '方': {
        pinyin: 'Fāng',
        pinyinMap: { '方':'Fāng' },
        originEN: 'Means “square; direction”; diverse lineages.',
        originZH: '「四方」之義，多系出不同支派。',
        roman: ['fang','fong','phang'],
        famous: [
          { name:'方以智', title:'學者', name_en:'Fang Yizhi', title_en:'Scholar' }
        ]
      },
      '曾': {
        pinyin: 'Zēng',
        pinyinMap: { '曾':'Zēng' },
        originEN: 'Confucian lineage (Zengzi) and southern clans.',
        originZH: '與曾子一脈相關，南方望族。',
        roman: ['tseng','zeng','chang','tang'],
        famous: [
          { name:'曾鞏', title:'文學家', name_en:'Zeng Gong', title_en:'Litterateur' }
        ]
      },
      '田': {
        pinyin: 'Tián',
        pinyinMap: { '田':'Tián' },
        originEN: 'Associated with “fields”; agrarian roots.',
        originZH: '以田為氏，寓務本敦樸。',
        roman: ['tian','tin'],
        famous: [
          { name:'田漢', title:'作家', name_en:'Tian Han', title_en:'Playwright' }
        ]
      },
      '董': {
        pinyin: 'Dǒng',
        pinyinMap: { '董':'Dǒng' },
        originEN: 'From ancient official titles; scholarly clans.',
        originZH: '古官名為氏，書香門第不少。',
        roman: ['dong','tung','tong'],
        famous: [
          { name:'董其昌', title:'書畫家', name_en:'Dong Qichang', title_en:'Painter-Calligrapher' }
        ]
      },
      '余': {
        pinyin: 'Yú',
        pinyinMap: { '余':'Yú' },
        originEN: 'Multiple sources; common in Jiangsu/Zhejiang.',
        originZH: '多源姓氏，江浙為盛。',
        roman: ['yu','yue','yuh'],
        famous: [
          { name:'余光中', title:'詩人', name_en:'Yu Kwang-chung', title_en:'Poet' }
        ]
      },
      '盧': {
        pinyin: 'Lú',
        pinyinMap: { '盧':'Lú' },
        originEN: 'From ancient Lu state/clans; also Cantonese “Lo”.',
        originZH: '或出魯國之後，粵地作「Lo」。',
        roman: ['lu','lo','lou','loke'],
        famous: [
          { name:'盧照鄰', title:'詩人', name_en:'Lu Zhaolin', title_en:'Poet' }
        ]
      },
      '杜': {
        pinyin: 'Dù',
        pinyinMap: { '杜':'Dù' },
        originEN: 'From toponyms and official titles; renowned poets.',
        originZH: '以地為氏、或官名為氏，詩人輩出。',
        roman: ['du','tu','too'],
        famous: [
          { name:'杜甫', title:'詩人', name_en:'Du Fu', title_en:'Poet' }
        ]
      },
      '賀': {
        pinyin: 'Hè',
        pinyinMap: { '賀':'Hè' },
        originEN: 'Means “to congratulate”; auspicious surname.',
        originZH: '取吉慶之義為氏。',
        roman: ['he','ho','hoh'],
        famous: [
          { name:'賀知章', title:'詩人', name_en:'He Zhizhang', title_en:'Poet' }
        ]
      },
      '夏': {
        pinyin: 'Xià',
        pinyinMap: { '夏':'Xià' },
        originEN: 'Linked to the Xia dynasty; also used in compound surnames.',
        originZH: '夏朝之名所本，亦見於複姓。',
        roman: ['hsia','xia','ha'],
        famous: [
          { name:'夏完淳', title:'詩人', name_en:'Xia Wanchun', title_en:'Poet' }
        ]
      },
      '鍾': {
        pinyin: 'Zhōng',
        pinyinMap: { '鍾':'Zhōng' },
        originEN: 'Means “bell”; notable literati and officials.',
        originZH: '取義於鐘鼎，歷代名臣學士眾多。',
        roman: ['zhong','chung','chong'],
        famous: [
          { name:'鍾嶸', title:'評論家', name_en:'Zhong Rong', title_en:'Literary Critic' }
        ]
      },
      '施': {
        pinyin: 'Shī',
        pinyinMap: { '施':'Shī' },
        originEN: 'From the State of Shi; common in Zhejiang and Fujian.',
        originZH: '施國之後，浙閩多有此姓。',
        roman: ['shi','si','sze'],
        famous: [
          { name:'施耐庵', title:'作家', name_en:'Shi Nai\'an', title_en:'Writer' }
        ]
      },
      '江': {
        pinyin: 'Jiāng',
        pinyinMap: { '江':'Jiāng' },
        originEN: 'Means “river”; ancient toponymic surname.',
        originZH: '以大江為氏，悠久久遠。',
        roman: ['jiang','chiang','kong'],
        famous: [
          { name:'江淹', title:'文學家', name_en:'Jiang Yan', title_en:'Litterateur' }
        ]
      },
      '傅': {
        pinyin: 'Fù',
        pinyinMap: { '傅':'Fù' },
        originEN: 'From “tutor/mentor” title; long scholarly lineage.',
        originZH: '源自太傅等官名，書香門第綿延。',
        roman: ['fu','foo','poo'],
        famous: [
          { name:'傅山', title:'書畫家', name_en:'Fu Shan', title_en:'Painter-Calligrapher' }
        ]
      },
      '陸': {
        pinyin: 'Lù',
        pinyinMap: { '陸':'Lù' },
        originEN: 'From the land/continent “lu”; Jiangsu and Zhejiang clans.',
        originZH: '取陸地之義，江浙望族。',
        roman: ['lu','luk','look'],
        famous: [
          { name:'陸游', title:'詩人', name_en:'Lu You', title_en:'Poet' }
        ]
      },
      '譚': {
        pinyin: 'Tán',
        pinyinMap: { '譚':'Tán' },
        originEN: 'From the State of Tan; Cantonese “Tam”.',
        originZH: '譚國之後，粵語作 Tam。',
        roman: ['tan','tam'],
        famous: [
          { name:'譚嗣同', title:'思想家', name_en:'Tan Sitong', title_en:'Thinker' }
        ]
      },
      '廖': {
        pinyin: 'Liào',
        pinyinMap: { '廖':'Liào' },
        originEN: 'From Liao River/region; strong in Hakka areas.',
        originZH: '或出遼地名號，客家常見。',
        roman: ['liao','liau','leow'],
        famous: [
          { name:'廖雪峰', title:'作家', name_en:'Liao Xuefeng', title_en:'Writer' }
        ]
      },
      '邱': {
        pinyin: 'Qiū',
        pinyinMap: { '邱':'Qiū' },
        originEN: 'Variant of 丘; Cantonese “Chiu”.',
        originZH: '為「丘」之異體，粵地多作 Chiu。',
        roman: ['chiu','qiu','ciu'],
        famous: [
          { name:'邱吉爾（借指）', title:'政治家', name_en:'(Churchill ref.)', title_en:'Statesman' }
        ]
      },
      '鄧': {
        pinyin: 'Dèng',
        pinyinMap: { '鄧':'Dèng' },
        originEN: 'From the State of Deng; notable modern figures.',
        originZH: '鄧國之後，近現代名人輩出。',
        roman: ['deng','tang','teng'],
        famous: [
          { name:'鄧小平', title:'政治家', name_en:'Deng Xiaoping', title_en:'Statesman' }
        ]
      },
      '汪': {
        pinyin: 'Wāng',
        pinyinMap: { '汪':'Wāng' },
        originEN: 'Means “vast water”; Jiangnan distribution.',
        originZH: '有瀚水之義，江南多見。',
        roman: ['wang','ong','uang'],
        famous: [
          { name:'汪精衛', title:'政治家', name_en:'Wang Jingwei', title_en:'Statesman' }
        ]
      },
      '范': {
        pinyin: 'Fàn',
        pinyinMap: { '范':'Fàn' },
        originEN: 'From Fan city/clan; literati families.',
        originZH: '以范邑為氏，書香世家眾多。',
        roman: ['fan','faan'],
        famous: [
          { name:'范仲淹', title:'政治家', name_en:'Fan Zhongyan', title_en:'Statesman' }
        ]
      },
      '熊': {
        pinyin: 'Xióng',
        pinyinMap: { '熊':'Xióng' },
        originEN: 'Totemic “bear”; Chu royal lineage.',
        originZH: '熊氏為楚國王族之姓。',
        roman: ['xiong','hsiung','hung'],
        famous: [
          { name:'熊十力', title:'哲學家', name_en:'Xiong Shili', title_en:'Philosopher' }
        ]
      },
      '金': {
        pinyin: 'Jīn',
        pinyinMap: { '金':'Jīn' },
        originEN: 'Means “gold”; also Korean surname “Kim”.',
        originZH: '金屬之名為氏，亦見於韓籍「金」。',
        roman: ['jin','kim','kam','gim'],
        famous: [
          { name:'金庸', title:'作家', name_en:'Jin Yong', title_en:'Writer' }
        ]
      },
      '石': {
        pinyin: 'Shí',
        pinyinMap: { '石':'Shí' },
        originEN: 'Means “stone”; various historical sources.',
        originZH: '取「石」為氏，源流多端。',
        roman: ['shi','sek','shih'],
        famous: [
          { name:'石濤', title:'畫家', name_en:'Shitao', title_en:'Painter' }
        ]
      },
  
      // --------- Compound surnames (複姓) ---------
      '歐陽': {
        pinyin: 'Ōu-yáng',
        pinyinMap: { '歐':'Ōu', '陽':'yáng' },
        originEN: 'Ancient compound surname with rich literary heritage.',
        originZH: '古老複姓，文脈深厚。',
        roman: ['ouyang','auyeung','au-yeung','oyang'],
        famous: [
          { name:'歐陽修', title:'文學家', name_en:'Ouyang Xiu', title_en:'Litterateur' }
        ]
      },
      '司馬': {
        pinyin: 'Sī-mǎ',
        pinyinMap: { '司':'Sī', '馬':'mǎ' },
        originEN: 'Originally an official title “Grand Marshal”; later a surname.',
        originZH: '本為官名「司馬」，後為氏。',
        roman: ['sima','ssuma'],
        famous: [
          { name:'司馬遷', title:'史學家', name_en:'Sima Qian', title_en:'Historian' }
        ]
      },
      '上官': {
        pinyin: 'Shàng-guān',
        pinyinMap: { '上':'Shàng', '官':'guān' },
        originEN: 'From noble/official titles; noted literary figures.',
        originZH: '出自上官之職，文人輩出。',
        roman: ['shangguan','seungkan'],
        famous: [
          { name:'上官婉兒', title:'詩人', name_en:'Shangguan Wan\'er', title_en:'Poet' }
        ]
      },
      '諸葛': {
        pinyin: 'Zhū-gě',
        pinyinMap: { '諸':'Zhū', '葛':'gě' },
        originEN: 'Rare compound surname famed by Zhuge Liang.',
        originZH: '少見複姓，因諸葛亮而著。',
        roman: ['zhuge','chu-ko','chuko'],
        famous: [
          { name:'諸葛亮', title:'政治家', name_en:'Zhuge Liang', title_en:'Statesman' }
        ]
      },
      '東方': {
        pinyin: 'Dōng-fāng',
        pinyinMap: { '東':'Dōng', '方':'fāng' },
        originEN: 'Compound surname meaning “the East”.',
        originZH: '意為「東方」，古有其族。',
        roman: ['dongfang','tung-fong'],
        famous: [
          { name:'東方朔', title:'文士', name_en:'Dongfang Shuo', title_en:'Man of Letters' }
        ]
      },
      '司徒': {
        pinyin: 'Sī-tú',
        pinyinMap: { '司':'Sī', '徒':'tú' },
        originEN: 'From the high official rank “Situ”.',
        originZH: '三公之一「司徒」之官名為氏。',
        roman: ['situ','szeto','seto'],
        famous: [
          { name:'司徒雷登', title:'教育家', name_en:'John Leighton Stuart (Situ Leideng)', title_en:'Educator' }
        ]
      }
    };
  
    // Expose
    window.SURNAME_DATA = Object.freeze(S);
  })();
  
  
  /* -------------------------------------------------
     End of Surname Data
  --------------------------------------------------*/
    
    