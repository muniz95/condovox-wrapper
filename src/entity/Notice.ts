class Notice {
  public title: string;
  public postDate: Date;
  public content: string;

  constructor(title: string, postDate: Date, content: string) {
    this.title = title;
    this.postDate = postDate;
    this.content = content;
  }
}

export default Notice;
