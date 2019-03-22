export interface Dashboard {
}


export interface Dua {
    title: string;
    links: Emotion[];
    arabic: string;
    translation: string;
    transliteration: string;
    references: Array<string>;
  }
  
  export interface Emotion {
    name:string;
  }