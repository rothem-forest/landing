export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string; // content를 선택적 필드로 변경
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}
