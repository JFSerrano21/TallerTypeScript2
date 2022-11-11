export class Serie {
    id: number;
    titulo : string;
    canal: string;
    temporadas: number;
    resumen: string;
    link:string;
    media:string;
  
    constructor(id: number, titulo: string, canal: string, temporadas: number, resumen: string, link: string, media: string) {
      this.id=id
      this.titulo=titulo
      this.canal= canal
      this.temporadas=temporadas
      this.resumen=resumen
      this.link=link
      this.media=media
    }
  }