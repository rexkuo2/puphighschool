import { ref } from 'vue';
import { useHomepageData } from '@/composables/useHomepageData';

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
  const { timeline } = useHomepageData();
  return { members, timeline, base };
}