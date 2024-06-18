import { Store as TStore } from "../api/store/Store";

export const STORE_TITLE_FIELD = "id";

export const StoreTitle = (record: TStore): string => {
  return record.id?.toString() || String(record.id);
};
