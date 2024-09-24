export interface FileStructure {
  id: string; // Unique identifier for the file or directory
  name: string; // Name of the file or directory
  type: "tree" | "blob"; // Type of the item (directory or file)
  path: string; // Path to the file or directory
  mode: string; // File mode (permissions)
}
