import { RotatingLines } from "src/components/elements/loading/rotatingLines/RotatingLines";
import { Suspense } from "src/components/layouts/suspense/Suspense";
import { ApiKeyPage } from "src/components/pages/api_key/ApiKeyPage";

export default function ApiKey() {
  return (
    <Suspense loadingIcon={<RotatingLines />}>
      <ApiKeyPage />
    </Suspense>
  );
}
