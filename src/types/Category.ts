import { BackendVideo } from "./Video";

export type Category = {
  id: string;
  name: string;
  videos: BackendVideo[];
};
export type CategoryBackend = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  videos: BackendVideo[];
};

export function mapBackendCategoryToCategory(data: CategoryBackend): Category {
  return {
    id: data?.id ?? "",
    name: data?.name ?? "",
    videos: data?.videos,
  };
}
