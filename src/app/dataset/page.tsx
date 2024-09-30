import ReadmeViewer from "@/components/ReadmeViewer";

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
