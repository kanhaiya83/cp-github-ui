import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { BsFiletypeTxt } from "react-icons/bs";
import {
  FaCode,
  FaCss3,
  FaFileExcel,
  FaFilePdf,
  FaFileWord,
  FaGitAlt,
  FaHtml5,
  FaImage,
  FaJs,
  FaPython,
  FaReact,
  FaRegFile,
} from "react-icons/fa6";
import { IoMdAlert } from "react-icons/io";
import { LuFileJson } from "react-icons/lu";

const getFileIcon = (fileName: string, className?: string) => {
  const extension = fileName.split(".").pop()?.toLowerCase();
  const iconMap: { [key: string]: IconType } = {
    py: FaPython,
    js: FaJs,
    ts: BiLogoTypescript,
    jsx: FaCode,
    tsx: FaReact,
    html: FaHtml5,
    css: FaCss3,
    jpg: FaImage,
    jpeg: FaImage,
    png: FaImage,
    gif: FaImage,
    svg: FaImage,
    doc: FaFileWord,
    docx: FaFileWord,
    pdf: FaFilePdf,
    xls: FaFileExcel,
    xlsx: FaFileExcel,
    xlsm: FaFileExcel,
    txt: BsFiletypeTxt,
    md: IoMdAlert,
    json: LuFileJson,
    yaml: FaRegFile,
    ini: FaRegFile,
    cfg: FaRegFile,
    conf: FaRegFile,
    log: FaRegFile,
    bak: FaRegFile,
    tmp: FaRegFile,
    lock: FaRegFile,
    gitattributes: FaGitAlt,
    gitignore: FaGitAlt,
    gitmodules: FaGitAlt,
    gitconfig: FaGitAlt,
    gitkeep: FaGitAlt,
    git: FaGitAlt,
    ds_store: FaRegFile,
    htaccess: FaRegFile,
  };

  const IconComponent = iconMap[extension || ""] || FaRegFile;
  return <IconComponent className={className} />;
};

export default getFileIcon;
