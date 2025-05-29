import { BackendVideo } from "./Video";

export type Category = {
  id: string;
  name: string;
  videos: BackendVideo[];
};

export function mapBackendCategoryToCategory(data: any): Category {
  return {
    id: data?.id ?? "",
    name: data?.name ?? "",
    videos: data?.videos,
  };
}
