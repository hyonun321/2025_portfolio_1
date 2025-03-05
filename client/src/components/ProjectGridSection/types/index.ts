export interface Project {
  id: number;
  title: string;
  technologies: string[];
  image: string;
  description: string;
}

export type SlideData = {
  mediaUrl: string;
  title: string;
  description?: string;
  subTitle?: string;
  link?: string;
  linkTitle?: string;
  link2?: string;
  link2Title?: string;
  link3?: string;
  link3Title?: string;
};
