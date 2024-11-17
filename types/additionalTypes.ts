import { Camera } from "./sanity-types";

export type CameraWithPage = Omit<Camera, "page"> & {
  page: { slug?: string };
};
