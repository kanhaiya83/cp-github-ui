import ReadmeViewer from "@/components/ReadmeViewer";
import HuggingFaceDataset from "./components/HuggingFaceDataset";

const DatasetPage: React.FC = () => {
  const readme = "/README.md";
  return (
    <div>
      {/* <HuggingFaceDataset /> */}
      <ReadmeViewer readme={readme} />
    </div>
  );
};

export default DatasetPage;
