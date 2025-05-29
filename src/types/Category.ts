export type Category = {
  id: string;
  name: string;
  videos: any[];
};

export function mapBackendCategoryToCategory(data: any): Category {
  return {
    id: data?.id ?? "",
    name: data?.name ?? "",
    videos: data?.videos,
  };
}
