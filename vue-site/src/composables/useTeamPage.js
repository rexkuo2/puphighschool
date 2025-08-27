import { ref } from 'vue';

export function useTeamPage() {
  const base = import.meta.env.BASE_URL || '/';
  const members = ref([
    { id:1, name:'瑋瑋', role:'創辦人', roleLabel:'FOUNDER', photo:'images/instructor1.jpg' },
    { id:2, name:'喆喆', role:'教學主任', roleLabel:'DIRECTOR', photo:'images/instructor2.jpg' },
    { id:3, name:'汪小雷', role:'教學主任', roleLabel:'DIRECTOR', photo:'images/instructor2.jpg' },
    { id:4, name:'小林風', role:'商品經理', roleLabel:'PRODUCT', photo:'images/instructor3.jpg' },
    { id:5, name:'恩仔', role:'行銷專員', roleLabel:'MARKETING', photo:'images/instructor4.jpg' },
    { id:6, name:'米飛', role:'行銷專員', roleLabel:'MARKETING', photo:'images/instructor4.jpg' },
    { id:7, name:'結狗', role:'行銷專員', roleLabel:'MARKETING', photo:'images/instructor4.jpg' },
    { id:8, name:'呱', role:'行銷專員', roleLabel:'MARKETING', photo:'images/instructor4.jpg' },
    { id:9, name:'阿西', role:'行銷專員', roleLabel:'MARKETING', photo:'images/instructor4.jpg' }
  ]);
  // 直接在此定義 timeline，移除對 useHomepageData 的依賴
  const timeline = ref([
    { id:1, date:'2022-02-10', title:'第一次悠遊卡', desc:'第一次狗勾悠遊卡製作' },
    { id:2, date:'2022-03-15', title:'行動代號汪 名牌製作', desc:'製作遊行名牌' },
    { id:3, date:'2022-04-18', title:'ENFINITY成立', desc:'初步規劃與團隊組建ENFINITY' },
    { id:4, date:'2022-05-20', title:'契約成立 悠遊卡製作', desc:'呈現主犬風格的悠遊卡製作' },
    { id:5, date:'2022-06-01', title:'日式阩杯製作', desc:'嘗試製作日式風格產品' },
    { id:6, date:'2022-07-01', title:'春遊糖果狗 悠遊卡製作', desc:'符合春天節慶風格悠遊卡製作' },
    { id:7, date:'2022-08-01', title:'專門特製狗勾棒球服製作', desc:'特製推出專屬每隻狗勾的棒球服' },
    { id:8, date:'2022-09-01', title:'遊行名牌製作 流明石', desc:'為了遊行製作的名牌活動' },
    { id:9, date:'2022-10-01', title:'混血犬部成立', desc:'混血犬部粉絲團成立' },
    { id:10, date:'2022-11-01', title:'犬高育學生證亮相', desc:'犬高育概念初步展現' },
    { id:11, date:'2022-12-01', title:'狗勾職業吊飾', desc:'呈現不同風格和遊戲結合的可愛狗勾吊飾' },
    { id:12, date:'2023-01-01', title:'倖存者悠遊卡', desc:'倖存者風格悠遊卡製作' },
    { id:13, date:'2023-02-01', title:'狗勾夏日杯套', desc:'呈現狗勾在夏天遊玩風格的實用杯套' },
    { id:14, date:'2023-03-01', title:'犬高育官方line成立', desc:'犬高育官方line成立' },
    { id:15, date:'2023-04-01', title:'馬拉灣專車', desc:'第一次號召馬拉灣專車' },
    { id:16, date:'2023-05-01', title:'狗勾飯友', desc:'吃飯不方便戴頭套拍照，狗勾飯友幫你解決' },
    { id:17, date:'2023-06-01', title:'狗勾領巾', desc:'可愛的狗勾一定要有領巾!' },
    { id:18, date:'2025-08-22', title:'極密檔案汪 遊行名牌', desc:'2025年同志大遊行名牌!' }
  ]);
  return { members, timeline, base };
}